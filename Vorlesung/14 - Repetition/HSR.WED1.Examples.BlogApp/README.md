GitHub Pages Blog App Example
=============================

Create a blog page using https://pages.github.com/, HTML, CSS, JavaScript, AJAX, Handlebars and JSON.


Print
-----
```shell
a2ps --columns=1 --borders=no --toc --pro=color --landscape -o HSR.WED1.Examples.BloggApp.ps \
api/*.json scripts/helpers/*.js scripts/*.js styles/*.css *.html templates/*.html


```


Tutorial
--------

1) Create repository
```bash
mkdir "HSR.WED1.Example.BlogApp"
cd "HSR.WED1.Example.BlogApp"
```
```bash
# initialize new git repository in this directory
git init

# Set default branch to "gh-pages"
git symbolic-ref HEAD refs/heads/gh-pages

# Create "README file"
nano "README.md"

# Create ignore file to ignore files and folders like ".idea"
nano ".gitignore"
```
```bash
# Track all changes (README.md, .gitignore)
git add --all

# Show version control status (new files should be ready to be commited)
git status

# Commit changes (create new version)
git commit -m "Initialize repository with README"
```
```bash
# Add remote repository (GitHub) named "gitHub"
git remote add "gitHub" "git@github.com:wasabideveloper/HSR.WED1.Examples.BlogApp.git"
```

2) Initialize app (using Webstorm)
   * Configure Webstorm to show whitespace and use tabs instead of spaces for HTML, CSS, JavaScript and JSON
   * Create index.html
     ```html
     <!DOCTYPE html>
     <html lang="en">
         <head>
             <meta charset="UTF-8">
             <title>Example Blog App</title>
         </head>
         <body>
             <header>
                 <h1>Example Blog App</h1>
             </header>

             <main>
             </main>

             <footer>
                 <small>All rights reserved by my self</small>
             </footer>
         </body>
     </html>
     ```
   * Publish app to GitHub
     ```bash
     # Send current state from current local branch to GitHub to branch "gh-pages"
     git push "gitHub" "gh-pages"
	 ```
   * View running app: http://wasabideveloper.github.io/HSR.WED1.Examples.BlogApp/. GitHub will deploy the current state to this webserver after each push/change. This may take some minutes.

3) Create the data api `api/posts.json`:
```javascript
{
	"posts": [
	  {
	    "title": "New gadgets from x-mini",
	    "content": "x-mini has shown two new gadgets ...",
	    "author": "Jian Gaso",
	    "date": "2016-05-27T06:45:59.989Z"
	  },
	  {
	    "title": "Microsoft gives up producing smartphones",
	    "content": "Not billions of dollars will help to enter ...",
	    "author": "Leila Garner",
	    "date": "2016-05-25T12:34:13.826"
	  }
	]
}
```

4) Embed libraries & test app local
   * Add handlebars & jquery to scripts/libraries
   * Add blog.js (empty script)
   * include in index.html:
```html
<script src="scripts/libraries/handlebars-v3.0.3.js"></script>
<script src="scripts/libraries/jquery-1.12.3.min.js"></script>
<script src="scripts/blog.js"></script>
```
   * Run index.html (right click in Webstorm) to view the web page on a local development server.
     Use the developer tools to check, if the scripts are included correctly.

5) Create posts template (template/posts.html):
```html
{{#each posts}}
<article>
	<header><h2>{{title}}</h2></header>
	<p>{{content}}</p>
	<footer>
		<small>Written by {{author}}</small> on
		<time>{{date}}</time>
	</footer>
</article>
{{/each}}
```
5) Implement loader and renderer
```javascript
class Post {
	constructor(title, content, author, date) {
		this.title = title;
		this.content = content;
		this.author = author;
		this.date = date;
	}

	/**
	 * factory to create posts from a plain object
	 * @param data plain data object
	 * @returns {Post}
	 */
	static createFromJSON(data) {
		return new Post(
			data.title,
			data.content,
			data.author,
			new Date(data.date)
		);
	}
}
```
```javascript
class DataProvider {
	constructor() {
		this.url = 'api/posts.json';
	}

	findAllPosts(callback) {
		$.getJSON(this.url).done((data) => {
			var postList = data.posts.map((postData) => Post.createFromJSON(postData));
			callback(postList);
		});
	}

	findTemplate(name, callback) {
		$.get('templates/' + name + '.html').done(callback);
	}
}
```
```javascript
class PostController {
	constructor(dataProvider) {
		this.dataProvider = dataProvider;
	}

	loadPostsAndPostTemplate(callback) {
		this.dataProvider.findAllPosts((posts) => {
			this.dataProvider.findTemplate('posts', (postTemplate) => callback(postTemplate, posts));
		});
	}

	renderPostView() {
		this.loadPostsAndPostTemplate((postTemplate, posts) => {
			var viewRenderer = Handlebars.compile(postTemplate);
			var view = viewRenderer({ posts: posts });
			document.getElementsByTagName('main')[0].innerHTML = view;
		});
	}
}
```
Bootstrap view:
```javascript
$(document).ready(function() {
	var dataProvider = new DataProvider();
	var postController = new PostController(dataProvider);
	postController.renderPostView();
});
```

6) add basic style
```css
* {
	box-sizing: border-box;
	-moz-box-box-sizing: border-box;
	-webkit-box-sizing: border-box;
}

html, body {
	padding: 0;
	margin: 0;
}

body {
	font-family: Arial, Helvetica, sans-serif;
}

body > header {
	background: steelblue;
}
h1 {
	padding: 0;
	margin: 0;
}
main, body > header, body > footer {
	padding: 0.5rem;
}
```
```CSS
article {
	font-size: 1em;
	box-shadow: 0 0 1em silver;
	padding: 0.5em;
}
article+article {
	margin-top: 0.5rem;
}

h2 {
	margin: 0;
	padding: 0;
	font-size: 1.25em;
}

article > header, article > footer {
	background: lightblue;
	padding: 0.5em;
	margin-left: -0.5em;
	margin-right: -0.5em;
}
article > header {
	margin-top: -0.5em;
}
article > footer {
	margin-bottom: -0.5em;
}

article > footer {
	font-size: 0.75em;
}
article > footer {
	font-size: 0.75em;
}
footer > small, footer > time {
	font-size: 1em;
}

article > p {
	margin: 0.5em 0;
}
```
![Basic styles](documentation/basic-styling.jpg)

7) Format date (Handlebars date helper) using moment.js
```javascript
Handlebars.registerHelper('date', function(date, format) {
	return moment(date).format(format);
});
```
```html
<time datetime="{{date date 'YYYY-MM-DD'}}">{{date date 'DD/MM/YY HH:MM'}}</time>
```

8) HTML support for posts
```javascript
{
    "title": "New gadgets from x-mini",
    "content": "<p>x-mini has shown <strong>two new gadgets</strong> at the ... Bluetooth.</p>",
    "author": "Jian Gaso",
    "date": "2016-05-27T06:45:59.989Z"
},
```
```html
<div>{{{content}}}</div>
```

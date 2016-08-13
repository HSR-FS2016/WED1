'use strict';

(function($){
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

	class DataProvider {
		constructor() {
			this.url = 'api/posts.json';
		}

		findAllPosts(callback) {
			$.getJSON(this.url).done((data) => {
				var postList = data.posts.map(Post.createFromJSON);
				callback(postList);
			});
		}

		findTemplate(name, callback) {
			$.get('templates/' + name + '.html').done(callback);
		}
	}

	class PostController {
		constructor(dataProvider) {
			this.dataProvider = dataProvider;
			this.main = document.getElementsByTagName('main')[0];
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
				this.main.innerHTML = view;
			});
		}
	}

	$(document).ready(function() {
		var dataProvider = new DataProvider();
		var postController = new PostController(dataProvider);
		postController.renderPostView();
	});
})(jQuery);
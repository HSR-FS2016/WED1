var server = (function() { 
	var dataRepo = {
			books: [
				{ 'title': 'XML Developer\'s Guide', 'genre' : 'Computer', 'price': 44.95 },
				{ 'title': 'Midnight Rain', 'genre' : 'Fantasy', 'price': 5.95 },
				{ 'title': 'Maeve Ascendant', 'genre' : 'Fantasy', 'price': 5.95 },
				{ 'title': 'Splish Splash', 'genre' : 'Romance', 'price': 4.95 }
			]
		};
	
	/**
	 * Calls the onReady function with the retrieved server data.
	 * @param onReady Function To be called when data is available.
	 */
	function getData(onReady) {
		window.setTimeout(function() {
			onReady(getRandomData())
		}, 200);
	}
	
	function getRandomData() {
		var randomData = [];
		var randomLength = getRandom() + 1;
		for (var i = 0; i < randomLength; ++i) {
			randomData.push(dataRepo.books[getRandom()]);
		}
		return { books : randomData };
	}
	
	function getRandom() {
		return Math.floor(Math.random() * dataRepo.books.length);
	}
	
	return {
		getData: getData
	};
})();

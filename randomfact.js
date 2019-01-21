var facts = [
	'My first experience with programming was in high school when I used Scratch to create some basic games: https://scratch.mit.edu/users/tionwong/',
	'Since the start of 2019, I\'ve decided to read a book a month. I\'m currently reading Norwegian Wood by Haruki Murakami.',
	'I made the design for the BC Esports Club Logo using Adobe Illustrator. You can view it here: http://www.tionwong.com/documents/final.jpg',
	'When I was 8, I got bit by a (baby) lion in South Africa. I cried for an hour afterwards...',
	'I was part of the Boston College Marching Band in my Freshman Year and played the Cymbals.',
	'Sungha Jung is one of my big inspirations, which is why I mainly play acoustic fingerstyle covers on guitar. I might upload some on Youtube in the future so stay tuned!',
	'My favorite place to live so far is Hong Kong, but I prefer the work environment in the US.',
	'My first dream job (I was 4) was to be a car washer because I thought it was the easiest thing I could do at the time.',
	'My favorite text editor for coding is Sublime Text.',
	'The first computer game I ever played is Microsoft FreeCell.',
	'Squirtle is the best starter Pokemon.',
	'I taught myself how to cook Chinese food when I lived alone last summer.',
	'I gained a lot of my programming knowledge through watching Brad Traversy\'s Youtube tutorials.',
	'My favorite drink is a nice warm cup of Royal Milk Tea.'
	'The best instant noodles are Myojo Ippeichan Yakisoba. (They\'re yakisoba noodles with mayo sauce!)'
]

function newFact(){
	var randomNum = Math.floor(Math.random()*(facts.length));
	document.getElementById('factDisplay').innerHTML = facts[randomNum];
}
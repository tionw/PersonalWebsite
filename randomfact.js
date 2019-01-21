var facts = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9'
]

function newFact(){
	var randomNum = Math.floor(Math.random()*(facts.length));
	document.getElementById('factDisplay').innerHTML = facts[randomNum];
}
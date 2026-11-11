import { faker } from 'https://esm.sh/@faker-js/faker';

const PROFESSIONS = ['Apothecary','Architect','Armorer','Arrowsmith','Assassin','Astrologer','Baker','Barber','Barrister','Beggar','Bellfounder','Blacksmith','Bloomer','Bladesmith','Bookbinder','Bowyer','Brazier','Brewer','Bricklayer','Butcher','Carpenter','Carrier','Carter','Cartwright','Carver','Chandler','Chapman','Churl','Clerk','Clockmaker','Cobbler','Collier','Coppersmith','Cook','Cordwainer','Crier','Cutler','Dragoman','Draper','Dyer','Embroiderer','Enameler','Engraver','Executioner','Farrier','Fisherman or Fishmonger','Fletcher','Fuller','Furrier','Gardener','Gem-Cutter','Gilder','Girdler','Glassblower','Glazier','Glover','Goldbeater','Goldsmith','Grocer','Groom','Governess','Haberdasher','Harpmaker','Hatter','Herald','Herbalist','Hewer','Horner','Hosier','Hostler','Interpreter','Ironmonger','Joiner','Knifegrinder','Laundress','Laborer','Latoner','Leech','Limeburner','Limner','Linkboy','Locksmith','Lutemaker','Marbler','Mason','Mercer','Messenger','Miller','Miner','Minstrel','Minter','Nailsmith','Navigator','Needler','Organmaker','Painter','Parchement-maker','Paviour','Pewterer','Plasterer','Ploughman','Porter','Potter','Poulterer','Pursemaker','Quarrier','Rat Catcher','Saddler','Sage','Sailmaker','Sailor','Saucemaker or Saucier','Scribe','Scrivener','Seamstress','Shearman','Sheather','Shepherd','Shipwright','Skinner','Soapmaker','Spurrier','Spy','Swineherd','Tailor','Tanner','Teamster','Tilemaker','Tinker','Tinkerer','Tinner','Trapper','Vinter','Waller','Waterleader','Weaver','Wheelwright','Wiredrawer','Woodturner',
// not professions exactly but fantasy-esque extras for fun
// these are probably in the list of regular nouns somewhere
'Angel','Devil','King','Queen','Emperor','Empress','Prince','Princess','Duke','Duchess','Earl','Knight','Dame','Squire','Knave','Peasant','Judge','Lawyer','Noble','Pauper','Blackguard','Fool','Jester','Clown',
]

const out = document.getElementById('outputs')

const handleSplits = (w, s) => {
	let parts = w.split(s).map(p => {
		return p.charAt(0).toUpperCase() + p.slice(1)
	})

	return parts.join(s)
}

const capitalize = w => {
	let parts
	parts = handleSplits(w, '-')
	parts = handleSplits(w, ' ')

	return parts
}

const adjectiveAndNoun = () => {
	const partOne = capitalize(faker.word.adjective())
	let partTwo = capitalize(faker.word.noun())
	if (Math.random() < 0.2) partTwo = capitalize(faker.animal.type())
	return `The ${partOne} ${partTwo}`
}

const oneAnimal = () => {
	const partOne = capitalize(faker.animal.type())
	const partTwo = capitalize(faker.word.noun())
	return `The ${partOne} and ${partTwo}`
}

const twoAnimals = () => {
	const partOne = capitalize(faker.animal.type())
	const partTwo = capitalize(faker.animal.type())
	return `The ${partOne} and ${partTwo}`
}

const possessive = () => {
	const partOne = capitalize(faker.helpers.arrayElement(PROFESSIONS))
	const partTwo = capitalize(faker.word.noun())
	return `The ${partOne}'s ${partTwo}`
}

const addNameToList = name => {
	const newName = document.createElement('span')

	newName.textContent = name
	out.append(newName)
}

document.getElementById('gen1').addEventListener('click', () => {
	addNameToList(adjectiveAndNoun())
})
document.getElementById('gen2').addEventListener('click', () => {
	addNameToList(twoAnimals())
})
document.getElementById('gen3').addEventListener('click', () => {
	addNameToList(possessive())
})
document.getElementById('gen4').addEventListener('click', () => {
	addNameToList(oneAnimal())
})
document.getElementById('random').addEventListener('click', () => {
	for (let i = 0; i < 10; i++) {
		const generators = [adjectiveAndNoun, twoAnimals, possessive, oneAnimal]
		const gen = generators[Math.floor(Math.random() * generators.length)]
		addNameToList(gen())
	}
})
document.getElementById('clear').addEventListener('click', () => {
	out.innerHTML = ''
})

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('loading').classList.add('hidden')
	const secs = document.querySelectorAll('section.hidden')
	for (let i = 0; i < secs.length; i++) {
		secs[i].classList.remove('hidden')
	}
})
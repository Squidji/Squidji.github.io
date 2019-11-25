var gamedat = {
	'pagesetup': {
		'title': 'Shimau シマ',
		'header': 'Shimau シマ'
	},
	'defaultvars' : {
		'A': { // Class A - For Main Character Information
			'Name': '',
			'Gender': 'F'
		},
		'B': { // Class B - For Main Character Physical Stats
			'MaxHealth': 0, // Can be up to 999
			'Health': 0,
			'Speed': 0, // From 0 to 99
			'Hunger': 0, // From 0 to 9
			'Attack': 0, // Can be up to 999
			'MaxMana': 0, // Can be up to 999
			'Mana': 0,
			'Energy': 0, // From 0 to 99
			'Defense': 0, // Can be up to 999
			'Accuracy': 0, // From 0 to 99
			'Thirst': 0 // From 0 to 9
		},
		'C': { // Class C - For Main Character Personality
			'Charisma': 0, // 0 to 99
			'Extrovertedness': 0, // 0 to 99
			'Luck': 0, // 0 to 99
			'Intelligence': 0, // 0 to 99
			'Seriousness': 0, // 0 to 99
			'Stealth': 0, // 0 to 99
			'Strength': 0, // 0 to 99
			'Trustfulness': 0, // 0 to 99
			'Dexterity': 0, // 0 to 99
		},
		'D': { // Class D - Misc. Information
			'ShioName': 'Shio'
		}
	},
	'savedata': {

	},
	0: {
		'Name': 'Setup',
		'Script': {
			0: [
				['loading', 'Preparing Variables']
			]
		}
	},
	1: {
		'Name': 'Chapter 1 - Sunset Island',
		'Script': {
			0: [
				['background', 'http://s1.picswalls.com/wallpapers/2016/06/06/beach-backgrounds_090607736_305.jpg'],
				['cleardisplay'],
				['write', ['Your name is ', 'A!Name', '. You wake up and see a hermit crab.']],
				['write', [' Here is a statement.']],
				['setvar', 'B!MaxHealth', 69],
				['setrand', 'C!Charisma', 45, 55],
				['modvar', 'B!Health', -10],
				['choices', [
					['Throw it into the sea.', [ // A Single Choice of Three
						['modvar', 'C!Strength', 1] // An action brought from making the choice
					]],
					['Eat it.', []],
					['Leave it alone.', []]
				]]
			]
		}
	}
};
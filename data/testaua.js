var gamedat = {
	'gamedata': {
		'title': 'Testaua',
		'author': 'AEraki',
		'aua': 'v1'
	},
	'defaultvars' : {
		'A': { // Class A - For Main Character Information
			'Name': 'Kobi',
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
			'ShioName': 'Shio',
			'HermitCrab': ''
		}
	},
	'savedata': {
		0: {
			'name': 'My Save Slot',
			'bkm': 0,
			'chptr': 0,
			'variables': undefined
		}
	},
	0: {
		'Name': 'Setup',
		0: [
			['loading', 'Preparing Variables'],
			['setrand', 'C!Charisma', ['nm', 45, 55]],
			['setrand', 'D!ShioName', ['ch', ['Shio', 'Sakana']]],
			['goto', 1, 0]
		]
	},
	1: {
		'Name': 'Chapter 1 - Sunset Island',
		0: [
			['background', 'http://s1.picswalls.com/wallpapers/2016/06/06/beach-backgrounds_090607736_305.jpg'],
			['cleardisplay'],
			['write', ['Your name is ', 'A!Name', '. You wake up and see a hermit crab.']],
			['choices', [
				['Throw it into the sea.', [
					['setvar', 'D!HermitCrab', 'throw'],
					['goto', 1, 1]
				]],
				['Leave it alone.', [
					['setvar', 'D!HermitCrab', 'leave'],
					['goto', 1, 1]
				]]
			]]
		],
		1: [
			['cleardisplay'],
			['if', ['D!HermitCrab', 'is', 'throw'], [
				['write', ['"Why would you do that?" asked ', 'D!ShioName', '.']]
			]],
			['if', ['D!HermitCrab', 'is', 'leave'], [
				['write', ['"Aw, what a cute hermit crab," said ', 'D!ShioName', '.']]
			]],
			['write', [' Anyways, want to come to my place for dinner?']],
			['choices', [
				['Accept', [
					['goto', 1, 2]
				]],
				['Refuse', [
					['goto', 1, 2]
				]]
			]]
		],
		2: [
			['cleardisplay'],
			['write', ['You have made it to the end of this test story.']]
		]
	}
};
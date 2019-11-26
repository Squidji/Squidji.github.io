var gamedat = {
	'gamedata': {
		'title': 'Shimau シマ',
		'author': 'AEraki',
		'aua': 'v1'
	},
	'defaultvars': {
		'A': {
			'Name': 'Kobi',
			'Gender': 'F'
		},
		'B': {
			'MaxHealth': 20,
			'Health': 20,
			'Speed': 10,
			'Hunger': 5,
			'Attack': 10,
			'MaxMana': 10,
			'Mana': 10,
			'Energy': 99,
			'Defense': 10,
			'Accuracy': 70,
			'Thirst': 5
		},
		'C': {
			'Charisma': 0,
			'Extrovertedness': 0,
			'Luck': 0,
			'Intelligence': 0,
			'Seriousness': 0,
			'Stealth': 0,
			'Strength': 0,
			'Trustfulness': 0,
			'Dexterity': 0,
		},
		'D': {
			'RAND': 0,
			'1HermitCrab': ''
		}
	},
	'savedata': {},
	0: {
		'Name': 'Setting Up New Game',
		0: [
			['loading', 'Preparing Variables'],
			['setrand', 'C!Charisma', ['nm', 45, 55]],
			['setrand', 'C!Extrovertedness', ['nm', 45, 55]],
			['setrand', 'C!Luck', ['nm', 45, 55]],
			['setrand', 'C!Intelligence', ['nm', 45, 55]],
			['setrand', 'C!Seriousness', ['nm', 45, 55]],
			['setrand', 'C!Stealth', ['nm', 45, 55]],
			['setrand', 'C!Strength', ['nm', 45, 55]],
			['setrand', 'C!Trustfulness', ['nm', 45, 55]],
			['setrand', 'C!Dexterity', ['nm', 45, 55]],
			['goto', 1, 0]
		]
	},
	1: {
		'Name': 'Chapter 1 - WIP',
		0: [
			['cleardisplay'],
			['background', 'http://s1.picswalls.com/wallpapers/2016/06/06/beach-backgrounds_090607736_305.jpg'],
			['write', [
				'The warm light of the setting sun shines on the beach as you wake up from your sleep.',
				' You sit at the edge of the water, tides crashing against you. Covered in sand and seaweed,',
				' you have deep red scales, gray horns, a long tail, and sharp teeth. You are a dragon,',
				' and a lost one at that. You can\'t seem to remember who you are, or why you are there.',
				' Your body aches, as if you\'d been thrown accross the world. Behind you stands a large',
				' green forest of palm trees, protected by a wall of tall grass. A hermit crab at your',
				' feet scuttles away from the incoming tide.'
			]],
			['choices', [
				['Eat the hermit crab.', [
					['modvar', 'C!Hunger', 1],
					['modvar', 'C!Strength', 1],
					['modvar', 'C!Trustfulness', -1],
					['modvar', 'C!Luck', 1],
					['setvar', 'D!1HermitCrab', 'eat'],
					['cleardisplay'],
					['write', [
						'You eat the hermit crab, but it doesnt taste very good.'
					]],
					['goto', 1, 1]
				]],
				['Throw the hermit crab into the ocean.', [
					['cleardisplay'],
					['setrand', 'D!RAND', ['nm', 1, 3]],
					['if', ['D!RAND', 'lte', 2], [
						['modvar', 'C!Strength', 1],
						['modvar', 'C!Accuracy', 1],
						['modvar', 'C!Intelligence', -1],
						['modvar', 'C!Hunger', -1],
						['write', [
							'You dont throw it very far and it lands only a few feet in front of you.'
						]]
					]],
					['if', ['D!RAND', 'is', 3], [
						['modvar', 'C!Strength', 2],
						['modvar', 'C!Accuracy', 2],
						['modvar', 'C!Intelligence', -1],
						['modvar', 'C!Charisma', -2],
						['modvar', 'C!Energy', -1],
						['write', [
							'You throw it with all of your might. The hermit crab lands pretty far away.'
						]]
					]],
					['setvar', 'D!1HermitCrab', 'eat'],
					['goto', 1, 1]
				]],
				['Leave the hermit crab alone.', [
					['modvar', 'C!Strength', 1],
					['modvar', 'C!Charisma', 1],
					['modvar', 'C!Intelligence', -1],
					['modvar', 'C!Hunger', -1],
					['cleardisplay'],
					['write', [
						'You leave the poor hermit crab alone as he scuttles toward the forest.'
					]]
				]]
			]]
		],
		1: [
			['choices', [
				['Under Construction', []]
			]]
		]
	}
};
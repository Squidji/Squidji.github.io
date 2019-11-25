const alldat = {
	1: {
		'Name': 'Chapter 1 - Sunset Island',
		'Script': {
			0: [
				['background', 'http://s1.picswalls.com/wallpapers/2016/06/06/beach-backgrounds_090607736_305.jpg'],
				['cleardisplay'],
				['write', ['Your name is ', 'A!Name', '. You wake up and see a hermit crab.']],
				['write', [' Here is a statement.']],
				['setvar', 'B!MaxHealth', 69],
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
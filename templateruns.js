var templateruns = [

	['write', ['Your name is ', 'A!Name', '. You wake up and see a hermit crab.']]
	// Writes from list. 'A!Name' is dictating variable Name from class A

	['cleardisplay']
	// Clears all of the text from the display.

	['background', './css/shimau.png/']
	['background', 'http://s1.picswalls.com/wallpapers/2016/06/06/beach-backgrounds_090607736_305.jpg']
	// Set the background image to the provided URL.

	['setvar', 'B!MaxHealth', 420]
	['setvar', 'A!Name', 'Kibo']
	// Set the variable to the given.

	['modvar', 'B!Health', 10],
	['modvar', 'B!Health', -10],
	// Add/Subtract a given number from the given variable.

	['loading', 'Assembling the Matrix']
	// Shows a loading screen with the given text.

	['setrand', 'C!Luck', ['nm', 40, 50]]
	// Set the given variable to a random number from the minimum to the maximum.
	['setrand', 'D!HisName', ['ch', ['Bill', 'Bob', 'Bobby', 'Bryan']]]
	// Set the given variable to a random choice from the given list.

	['goto', 1, 0]
	// Goes to Chapter 1 Bookmark 0

	['if', ['B!Sleep', 'is', true], [ ['write', ['You slept.']], ['modvar', 'B!Energy', 4] ]]
	['if', ['B!Sleep', 'gt', 9], [ ['setvar', 'B!Sleep', 9] ]]
	// Executes command(s) if a condition is met.
];
var templateruns = [

	['write', ['Your name is ', 'A!Name', '. You wake up and see a hermit crab.']]
	// Writes from list. 'A!Name' is dictating factor Name from class A

	['cleardisplay']
	// Clears all of the text from the display.

	['background', './css/shimau.png/']
	['background', 'http://s1.picswalls.com/wallpapers/2016/06/06/beach-backgrounds_090607736_305.jpg']
	// Sets the background image to the provided URL

	['setvar', 'B!MaxHealth', 420]
	['setvar', 'A!Name', 'Kibo']
	// Set the factor to the given.

	['modvar', 'B!Health', 10],
	['modvar', 'B!Health', -10],
	// Add/Subtract a given number from the given factor.

];
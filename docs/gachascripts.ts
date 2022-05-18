function testScriptOne() {
	// creates a number between 1 and 10 000, used as RNG creator
	var result = Math.round(Math.random() * 10000);
	return result;
}

function testScriptTwo()  {
	/**  
	returns the drop rates for Ivan cards
	very common - 50.00 %
	common - 25.00 %
	uncommon - 15.00 %
	rare - 5.00 %
	very rare - 3.00 %
	purple - 1.50 %
	unicorn - 0.50 %
	*/
}

function testScriptThree()	{
	// operates the gacha
    // does not operate the pull
	var gachaResult = this.testScriptOne();
	var rarityResult;
	if(gachaResult < 5000)
	{
		rarityResult = "very common";
	}
	else if(gachaResult >= 5000 && gachaResult < 7500)
	{
		rarityResult = "common";
	}
	else if(gachaResult >= 7500 && gachaResult < 9000)
	{
		rarityResult = "uncommon";
	}
	else if(gachaResult >= 9000 && gachaResult < 9500)
	{
		rarityResult = "rare";
	}
	else if(gachaResult >= 9500 && gachaResult < 9800)
	{
		rarityResult = "very rare";
	}
	else if(gachaResult >= 9800 && gachaResult < 9950)
	{
		rarityResult = "purple";
	}
	else
	{
		rarityResult = "unicorn";
	}
	
}
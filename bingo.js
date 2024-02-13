 // This jQuery function verifies that the HTML document has loaded
 $(document).ready(function()
 {  
   // DONE Create a var called usedArray of type Array with declared size 76 for the used bingo 
   //      numbers when generating the card
   var usedArray = new Array(76);
   
   /* The baseArray provides the base multiplier value for each column based on
		B = 1 - 15
		I = 16 - 30
		N = 31 - 45
		G = 46 - 60
		O = 61 - 75
   */
   var baseArray = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
   
   // DONE Create a global var called number and initialize it to 0
   var number = 0;

   // DONE Create a global var called base and initialize it to 0
   var base = 0;
   
   // Reset the used numbers away so we can actually select new numbers.
   resetUsedNumbersArray();
   
   // DONE call function init()
   init();
   
	// DONE Declare function init()
	// it is the main function of the JavaScript and jQuery that manages
	// the bingo card creation and updating during play

	function init()
    {
        // DONE Write a for loop that loops 24 times and calls function fillCard() 
        //      passing the counter var as an argument
        for (let i = 0; i < 24; i++)
        {
            fillCard(i);
        }
	}
	  	 
	// DONE Declare function fillCard(i), it receives with one parameter
	//      This function fills the bingo card
    function fillCard(i)
	{
        // DONE update global variable base and set it equal to the element in
        //      array baseArray using the passed in parameter i as the index multiplied
        //      by the value 15
        base = baseArray[i] * 15;
		 
        // DONE update global variable number and set it equal to the value of 
        //      global variable base added to a randomly selected number in the 
        //      range of 1 - 15
        // Math.floor(Math.random() * 15) generates a random number from 0-14, so we add 1 to get 1-15.
        // Adding a base (multiples of 0 for column 1 or 15s for columns 2-5) gets us the other number ranges.
        number = base + (Math.floor(Math.random() * 15) + 1);
		 
		// DONE Write an if condition that checks if the randomly generated number 
		//      has not been used
        if (usedArray[number] == false)
		{
			// the jQuery updates the HTML tag element with id "cell#"
			// where the # is the random number!
			$('#cell' + i).html(number);
			
			// DONE update the used number array setting the location in the array
			//      to true to indicate that the value has been used
			usedArray[number] = true;

			// set the background and text color for new game
			var id = "cell" + i;
            // EDIT made here to prevent double-clicking required for changing the color of a square.
			document.getElementById(id).style.backgroundColor = "";
			document.getElementById(id).style.color = "";			
		}
		// DONE Write the else leg of the above if condition 
        else
		{
			// DONE using recursion call this function again
			// This random number has already been used, so try to fill the card again with a new one.
            fillCard(i);
		}
	 }
	 
	// DONE Declare function resetUsedNumbersArray()
	//      This function resets the used number array for a new card
    function resetUsedNumbersArray()
	{
        // DONE Write a for loop that loops for the length of the array of used 
        //      numbers and set the value of each array element to false  
        for (let i = 1; i < usedArray.length; i++)
        {
            usedArray[i] = false;
        }
		 
	}
	 
	 // This jQuery function responds to an HTML tag element with id = newCard being clicked
	 $('#newCard').click(function()
	 {
		// DONE Call function resetUsedNumberArray to reset the used numbers
	    resetUsedNumbersArray();
	
		// DONE call function init to generate a new bingo card
	    init();
	 });
	 
	 // This jQuery function toggles the backgroundColor and text color 
	 // based on what is it currently set to
	 $('td').click(function()
	 {
		var toggle = this.style;
		toggle.backgroundColor = toggle.backgroundColor? "":"#333";
		toggle.color = toggle.color? "":"#fff";
	 });
 });

    var btn = document.getElementById("btn");


    function printCard()
    {		
    	/////////////////////////////////////////////////////Establish variables
    		let firstName = document.getElementById('firstName').value;
			let lastName = document.getElementById('lastName').value;
			let department = document.getElementById('dept').value;
			let colorS= document.getElementById('colorScheme').value;
			////////////////////////////////////////////////////////////////TEST
			                                            console.log(firstName);
			                                            console.log(lastName);
			                                            console.log(department);
			                                            console.log(colorS);
			 ///////////Name                                         
			document.getElementById("deetsName").innerHTML =firstName+" "+lastName;



			///////////////////////Special Circumstances  - Donnie Lummus
			if (lastName=='Lummus')
			{
				document.getElementById("deetsSkills").innerHTML = 
				"Training Coordinator, FireFighter, LeSabre Enthusiast.";
				document.getElementById("cardStockCaptain").innerHTML =
				"Captain Eastman";
				document.getElementById("colorSelect").href="styleEastman.css";
				//CSS sheet
			}
			/////////////////////Special Cirumstances - Andy Rogers
			else if (lastName=='Rogers' && firstName=='Andy')
			{
				document.getElementById("deetsSkills").innerHTML = 
				"Swinging from tall buildings.  Giving Marvel headaches over character rights.";
				document.getElementById("cardStockCaptain").innerHTML =
				"Captain Spidey";
				document.getElementById("colorSelect").href="styleSpiderman.css";
			}
			/////////////////////Special Circumstances - Lindsay Rogers
			else if (lastName=='Rogers' && firstName=='Lindsay')
			{
				document.getElementById("deetsSkills").innerHTML = 
				"Spreading sunshine and happines blah, blah, blah...Go away!";
				document.getElementById("cardStockCaptain").innerHTML =
				"Captain Babydoll";
				document.getElementById("colorSelect").href="stylePink.css";
			}
			//////////////////////////////////colorScheme switch
//////////////change stylesheets
			else
			{

				switch(colorS)
					{
						case "captain":
							document.getElementById("colorSelect").href="style.css";
							document.getElementById("deetsSkills").innerHTML=" Superhuman Strength, Stamina, and Speed.  Ultimate Frisbee Champion "
							document.getElementById("cardStockCaptain").innerHTML="Captain America";
							break;
						case "hulk":
							document.getElementById("colorSelect").href="styleHulk.css";
							document.getElementById("deetsSkills").innerHTML=" HULK SMASH!"
							document.getElementById("cardStockCaptain").innerHTML="Captain Big Guy";
							break;
						case "brown":
							document.getElementById("colorSelect").href="styleBrown.css";
							document.getElementById("deetsSkills").innerHTML=" HULK SMASH!"
							document.getElementById("cardStockCaptain").innerHTML="Captain Corduroy";
							document.getElementById("deetsSkills").innerHTML="Seatbelts kill, hand me another Schlitz!";
							break;
						case "neon":
							document.getElementById("colorSelect").href="styleNeon.css";
							document.getElementById("deetsSkills").innerHTML=" HULK SMASH!"
							document.getElementById("cardStockCaptain").innerHTML="Captain Trippin!";
							document.getElementById("deetsSkills").innerHTML="The colors, man.   Like...wow!";
						

					}
			}
    }

    btn.addEventListener('click',printCard);



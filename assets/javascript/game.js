/*
Creating objects for characters, maybe should just do one 
function for all set attacks
*/
var obi = {
	'Name':'Obi',
	'Health':150,
	'Attack':10,
	'Counter':10,

	setAttack: function() {
		this.Attack=this.Attack*1.5;
	}
}

var luke = {
	'Name':'Luke',
	'Health':125,
	'Attack':15,
	'Counter':12,

	setAttack: function() {
		this.Attack=this.Attack*2;
	}
}

var maul = {
	'Name':'Maul',
	'Health':150,
	'Attack':5,
	'Counter':8,

	setAttack: function() {
		this.Attack=this.Attack*1.2;
	}
}

var solo = {
	'Name':'Solo',
	'Health':175,
	'Attack':9,
	'Counter':11,

	setAttack: function() {
		this.Attack=this.Attack*1.7;
	}
}

var heros=[obi,luke,maul,solo];

function findHero(find) {
	var name;
	for(hero in heros) {
		name=heros[hero].Name.toLowerCase();
		if(name===find) {
			console.log(heros[hero].Name+"==="+find);
			return hero;
		}
	}
}

$(document).ready(function(){
	var userChoice;
	var userPicked=false;
	var heroIndex;//to keep trakc of what hero is selected
	var currentDef;
	var currD=false;//track if we already have a defender
	var defenderIndex;

	//set healths, practice populating page with object information
	//maybe turn this to a function to reset healths as needed
	for(hero in heros){
		var tempHero=heros[hero];
		var heroId='#'+tempHero.Name.toLowerCase()+'-health';
		console.log(heroId);
		$(heroId).html('Health: '+tempHero.Health);
	}

	//User selects character
	$('.hero').on('click', function(){
		userPicked=true;//so user can only pick one character
		userChoice=$(this).attr('value');
		//Couldn't search array for some reason, fix later
		heroIndex=findHero(userChoice);
		console.log('Hero Index: '+heroIndex);
		console.log(userChoice);
		console.log(heros[heroIndex]);
		//find in hero's array
		//rearrange HTMl so attacker is on top, defenders are on bottom
		//set div of attackers to choice only
		//clear it
		$('#attackers').html('');
		$('#attackers').append('<h2 class=\'text-center\'>Hero</h2>');
		//set it
		$('#attackers').append("\
			<div class = \'hero\' value = \'"+userChoice+"\'>\
				<div class =\'col-sm-3\'>\
				</div>\
				<div class = \'col-sm-6 well\'>\
					<img src=\'assets/images/"+userChoice+".jpg\' class = \'heropic thumbnail img-responsive center-block\'>\
					<h2 class = \'text-center\'>"+userChoice+"</h2>\
					<h2 id = \'"+userChoice+"-health\' class=\'text-center\'>Health: "+tempHero.Health+"</h2>\
				</div>\
			</div>\
			");
		$('#remainingDefenders').html('');
		//title row
		$('#remainingDefenders').append('<h2 class=\'text-center\'>Defenders</h2>');
		//populate defender row
		for(var i=0;i<4;i++) {
			if(i!=heroIndex){
				$('#remainingDefenders').append("\
					<div class = \'defender\' value = \'"+heros[i].Name.toLowerCase()+"\'>\
						<div class = \'col-sm-4 well\'>\
							<img src=\'assets/images/"+heros[i].Name.toLowerCase()+".jpg\' class = \'heropic thumbnail img-responsive center-block\'>\
							<h2 class = \'text-center\'>"+heros[i].Name.toLowerCase()+"</h2>\
							<h2 id = \'"+heros[i].Name.toLowerCase()+"-health\' class=\'text-center\'>Health: "+heros[i].Health+"</h2>\
						</div>\
					</div>\
					");
			}
		}

		//selecting current defender
		$('.defender').on('click', function() {
			//select current defender
			currD=true;
			currentDef=$(this).attr('value');
			defenderIndex=findHero(currentDef);
			//set as current defender
			

			//attack loop

			//win/lose
				//if win, select new defender
				//if lose, end game
		});
	});


/*
	$('#remainingDefenders').on('click', function(e) {
        currentDef=$(e.target);
        console.log(currentDef);
  		console.log(currentDef.parent().closest('div'));
  		console.log(currentDef.parent().closest('div').parent());
    });*/
//wait for press attack button, then calculate damage and health
	//print out result

//check if won or lost

//update html

//repeat, pick new defender

//check if all defenders dead for win, or if health is 0 for loss

});
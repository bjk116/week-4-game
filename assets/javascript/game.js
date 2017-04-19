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



$(document).ready(function(){
	function findInHeroArray(find){
	for(hero in heros) {
		if (find == heros[hero]){
			console.log("find: "+find);
			console.log("hero: "+hero);
			return hero;
			}
		}
	}
	
	var userChoice;
	var userPicked=false;
	//set healths, practice populating page with object information
	//maybe turn this to a function to reset healths as needed
	for(hero in heros){
		var tempHero=heros[hero];
		var heroId='#'+tempHero.Name+'-health';
		$(heroId).html('Health: '+tempHero.Health);
	}

	//User selects character
	$('.hero').on('click', function(){
		userPicked=true;//so user can only pick one character
		userChoice=$(this).attr('value');
		console.log(userChoice);
		//find in hero's array
		var h = findInHeroArray(userChoice);
		console.log("choice is "+h+" in hero array");
		//set div of attackers to choice only
		/*
		//clear it
		$('#attackers').html('');
		//set it
		$('#attackers').html("\
			<div class = \'hero\' value = \'"+userChoice+"\'>\
				<div class = \'offset-sm-3 col-sm-6 well\'>\
					<img src=\'assets/images/"+userChoice+".jpg\' class = \'heropic thumbnail img-responsive center-block\'>\
					<h2 class = \'text-center\'>"+userChoice+"</h2>\
					<h2 id = \'"+userChoice+"-health\' class=\'text-center\'>Health: +"+heros[h]+"</h2>\
				</div>\
			</div>\
			");
		*/
	});


//rearrange HTMl so attacker is on top, defenders are on bottom

//user selects who they are attacking

//wait for press attack button, then calculate damage and health
	//print out result

//check if won or lost

//update html

//repeat, pick new defender

//check if all defenders dead for win, or if health is 0 for loss

});
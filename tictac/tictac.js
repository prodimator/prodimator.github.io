var xWins=0;
var oWins=0;
var play = true;
//global variables

function init(){
	//first things first..click to get rid of splash/intro screen
	$( document.body ).click(function() {
		$("#quote").fadeOut(1000);
		setTimeout(function(){
        $( "#players" ).fadeIn();
        $( "#board" ).fadeIn();
        $( "#bigX" ).fadeIn();
        $( "#bigO" ).fadeIn();
      }, 1000);
	});

	var entry = "X";
	var items = [["","",""],["","",""],["","",""]];
	
	$("#X").text("Player X: "+xWins);
	$("#O").text("Player O: "+oWins);
	$("#bigX").css('color', 'red');

	//handles the events for when player clicks on tile
	$("tr td").click(function(e){
		if (play == true){
			if ($(this).html() != "X" && $(this).html() != "O"){ //if tile empty
				$(this).text(entry); //sets tile to whatever current player is
				var index = $(this).index();
				var row = $(this).closest('tr').attr('class');
				updateEntries(items, index, row, entry);
				entry = swapEntry(entry);
			}
		}
	});

	$(".button").click(function(e){ 
 		$("td").empty();
 		items = [["","",""],["","",""],["","",""]];
 		entry="X";
 		$("#bigX").css('color', 'red');
		$("#bigO").css('color', 'black');
 		updateScore();
 		play = true;
    });

}

function swapEntry(entry){
	//switches colors of X or O at bottom depending on whose turn it is
	//also swaps value ot entry based on whose turn it is
	if (entry == "X"){
		$("#bigX").css('color', 'black');
		$("#bigO").css('color', 'blue');
		return entry = "O";
	} else{
		$("#bigX").css('color', 'red');
		$("#bigO").css('color', 'black');
		return entry = "X";
	}
}

function updateEntries(items, index, row, entry){
	if (row == "0"){
		var i = parseInt(index);
		//boardEntries[i] = entry;
		items[0][i] = entry;
		checkForWin(items, i, row, entry);
	}
	else if (row == "1"){
		var i = parseInt(index);
		//boardEntries[i] = entry;
		items[1][i] = entry;
		checkForWin(items, i, row, entry);
	}
	else{
		var i = parseInt(index);
		//boardEntries[i] = entry;
		items[2][i] = entry;
		checkForWin(items, i, row, entry);
	}
}

function checkForWin(items, index, row, entry){
	
	var r = parseInt(row);
	var win = false;

	//check rows
	if (items[r][0] == entry){
		if (items[r][1] == entry){
			if (items[r][2] == entry){
				win = true;
			}
		}
	}
	//end of horizontal

	//check columns
	for (i=0; i<3; i++){
		if (items[0][i] == entry){
			if (items[1][i] == entry){
				if (items[2][i] == entry){
					win = true;
				}			
			}	
		}
	}
	//end of columns

	//check diagonal
	if (items[0][0] == entry){
		if (items[1][1] == entry){
			if (items[2][2] == entry){
				win = true;
			}
		}
	}
	if (items[0][2] == entry){
		if (items[1][1] == entry){
			if (items[2][0] == entry){
				win = true;
			}
		}
	}
	//end of diagonal

	//check for draw by going through every tile
	var fullCtr = 0;
	for (i=0; i<3; i++){
		for (j=0; j<3; j++){
			if (items[i][j] != ""){
				fullCtr = fullCtr+1;
			}
		}
	}
	if (fullCtr == 9 && win != true){
		//if every tile has a value, declare draw
		alert("DRAW!");
	}


	if (win == true){
		alert(entry+ " WINS!");
		if (entry == "X"){
			xWins = xWins+1; //updates player x score
		} else{
			oWins = oWins+1;	//updates player o score
		}
		play = false; //stop playing until new game button is pressed
		updateScore();
	}

}

function updateScore(){
	$("#X").text("Player X: "+xWins); //displays updated score
	$("#O").text("Player O: "+oWins); //displays updated score
}

onload=init;
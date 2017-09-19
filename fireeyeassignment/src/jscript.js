var userList =[]; //global variable
var activeUser="";
function init(){
    activeUser = "NASA" //set by default
    loadJSONFeed();
    
    $("body").on("click",".user", function(e) {
        $(".active").addClass("inactive");
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(this).removeClass("inactive");
        activeUser = $(this).text();
        var user = JSON.parse(localStorage.getItem(activeUser));
        refreshFeed(user);
    });
    
    $(".tweetbox").on("keyup", function(e){
        if(e.which == 13){
            e.preventDefault();
            addTweet(activeUser, $(this).val());
            $(this).val('');
        }
    });
	
    $(".addUser").on("click", function(e) {
		$(".addUserBox").css("display", "inline");
	});
	$(".addUserBox").on("keydown", function(e){
        if(e.which == 13){
            createUser($(this).val());
			$(this).css("display","none");
            $(this).val('');
        }
    });
}

function addTweet(activeUser, tweet){
    tweet = tweet.substring(0, tweet.length - 1);
    var date = getDateFormat();
    var user = JSON.parse(localStorage.getItem(activeUser));
    var tweetdata = '{"Text":"'+tweet+'","Date":"'+date+'"}'
    user.Tweets.push(JSON.parse(tweetdata));
    localStorage.setItem(activeUser, JSON.stringify(user));
    refreshFeed(user);
}

function loadJSONFeed(){
    
    //this loads an artifical tweet history from json file and puts it into localstorage
    var text = [];
	$.getJSON("content/users.json", function(repos){
		text=repos;
        for (i = 0; i < text.Users.length; i++){
            userList.push(text.Users[i].Name);
            localStorage.setItem(userList[i], JSON.stringify(text.Users[i]));
        }
    });
   
    /*
    since AJAX is asynchronous, wait to update the feed until it has the correct data
    */
    setTimeout(function(){
        var user = JSON.parse(localStorage.getItem(userList[0])); //load NASA by default
        refreshFeed(user);
    }, 100);
}

function createUser(user){
    userList.push(user);
    localStorage.setItem(user,'{"Name":"'+user+'","Tweets":[]}');
    
    $('<a class="nav-item user inactive" href="#">'+user+'</a>').insertBefore( ".addUser" );
    
    //var newuser = JSON.parse(localStorage.getItem(user));
    // refreshFeed(newuser);
    // activeUser = user;
}

function refreshFeed(user){
    /*clear feed and update it*/
    $(".activity-feed").empty();
    if (user.Tweets.length != 0){
        for (i=user.Tweets.length-1; i >= 0; i--){
            var element = '<div class="feed-item">'+
                '<div class="name">'+user.Name+'</div>'+
                '<div class="date">'+user.Tweets[i].Date+'</div>'+
                '<div class="text">'+user.Tweets[i].Text+'</div></div>'
            $(".activity-feed").append(element);
        }
    /*update tweetnumval*/
    }
    $(".tweetsNumVal").html(user.Tweets.length);
}

function getDateFormat(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    if (mm == 1){mm = "Jan";}
    else if (mm == 2){mm = "Feb";}
    else if (mm == 3){mm = "Mar";}
    else if (mm == 4){mm = "Apr";}
    else if (mm == 5){mm = "May";}
    else if (mm == 6){mm = "Jun";}
    else if (mm == 7){mm = "Jul";}
    else if (mm == 8){mm = "Aug";}
    else if (mm == 9){mm = "Sep";}
    else if (mm == 10){mm = "Oct";}
    else if (mm == 11){mm = "Nov";}
    else {mm = "Dec";}  
    return (mm+' '+dd);
}

document.addEventListener('DOMContentLoaded', init);

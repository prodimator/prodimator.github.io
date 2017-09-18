function init(){
    
    var page = 1;
    var numResults = 100;
    var cont = true;
    /*while (page < 3){
        $.getJSON("https://api.github.com/users/oracle/repos?per_page="+numResults+"&page="+page, function(repos){
                $.each(repos, function(i, data){
                    console.log(repos.length+" "+ numResults+" "+data.name);
                });
                if (repos.length < numResults){
                    console.log("GOT HERE\n\n\n");
                    cont = false; 
                }
        });
        page++;
        //break;
    }*/
    
    
    
    var activeUser = "Obama" //set by default
    loadJSONFeed();
    
    $(".user").on("click", function(e) {
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
            addTweet(activeUser, $(this).val());
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
    /*var index;
    if (activeUser == "Obama"){
        index = 0;
    }
    if (activeUser == "Trump"){
        index = 1;
    }*/
    $.ajax({
        type: 'GET',
        url: "content/users.json",
        dataType: 'json',
        success: function(data) { text = data;},
        async: false
    });
	
    
    localStorage.setItem("Obama", JSON.stringify(text.Users[0])); //Obama
    localStorage.setItem("Trump", JSON.stringify(text.Users[1])); //Trump

    var user = JSON.parse(localStorage.getItem("Obama")); //load Obama by default
    refreshFeed(user);
}

function refreshFeed(user){
    $('.activity-feed').empty();
    
    for (i=user.Tweets.length-1; i >= 0; i--){
        var element = '<div class="feed-item">'+
            '<div class="name">'+user.Name+'</div>'+
            '<div class="date">'+user.Tweets[i].Date+'</div>'+
            '<div class="text">'+user.Tweets[i].Text+'</div></div>'
        $(".activity-feed").append(element);
    }
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


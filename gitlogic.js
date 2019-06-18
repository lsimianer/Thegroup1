$(document).ready(function () {


    $("#submit2").on("click", function (event) {
        event.preventDefault();
        $("#displayHere2").empty();
        var name = $("#input2").val().trim();
        console.log(name);
        $.ajax({
            url: "https://api.github.com/users/" + name,
            method: 'GET',
            client_id: 'Iv1.98d9f81a347e2303',
            client_secret: 'f52e494216a0e5860426c02c357f80cbaa74df7c',
            }).then(function (response) {
                console.log(response);
                console.log(response.html_url);
        $.ajax({
            url: "https://api.github.com/search/users?q="+name,
            method: 'GET',
            client_id: 'Iv1.98d9f81a347e2303',
            client_secret: 'f52e494216a0e5860426c02c357f80cbaa74df7c',
        }).then(function(searchResponse) {
            //console.log(searchResponse);    
            for(i=0; i<searchResponse.total_count; i++) {
                if(searchResponse.items[i].login === name) {
                console.log(searchResponse.items[i].login);
                
                }
            }
           
                //displays the username
                var userNameTag = $("<p>").text("Username: " +response.login);
                //displays the photo
                var imgTag = $("<img>").attr("src", response.avatar_url);
                //link to the profile
                var viewProfileTag = $("<a>").attr("href", response.html_url).text("View Profile");
                //displays the name
                var nameTag = $("<p>").text("Name: " +response.name);
                //displays the number of followers
                var followersTag = $("<p>").text("Followers: " +response.followers);
                console.log("Followers:", response.followers);
                //displays the number following
                var followingTag = $("<p>").text("Following: " +response.following);
                console.log("Following:", response.following);
                //displays the number of repos
                var repoTag = $("<p>").text("Repos: " +response.public_repos);
                var locationTag= $("<p>").text("Location: " +response.location);
                console.log(response.public_repos);
                console.log(response.name);
                //showing it on the page
                $("#displayHere2").append(userNameTag, imgTag, nameTag, viewProfileTag, followersTag, followingTag, repoTag, locationTag);
            try {    
                var catchError = searchResponse.items[i].avatar_url;
                console.log(catchError);
            }
            //displays user not found if user name is not valid
            catch (e) {
                console.log(e);
                console.log("User not found");
                var errorTag = $("<p>").text("User not found");
                $("#displayHere2").html(errorTag);   
            }
            });
        });
        });
    });


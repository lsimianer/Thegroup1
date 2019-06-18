




    $("#submit2").on("click", function (event) {
        event.preventDefault();
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
            console.log()
            try {
                var column = $("<div>");
                column.addClass("<col s12 l8 card medium grey lighten-5>");
                var userNameTag = $("<h3>").text("Username:" +response.login);
                var imgTag = $("<img>").attr("src", response.avatar_url);
                var viewProfileTag = $("<a>").attr("href", response.html_url).text("View Profile");
                var nameTag = $("<h4>").text("Name: " +response.name);
                var followersTag = $("<p>").text("Followers: " +response.followers);
                console.log("Followers:", response.followers);
                var followingTag = $("<p>").text("Following: " +response.following);
                console.log("Following:", response.following);
                var repoTag = $("<p>").text("Repos:" +response.public_repos);
                console.log(response.public_repos);
                console.log(response.name);
                $(column).append(userNameTag, nameTag, imgTag, nameTag, viewProfileTag, followersTag, followingTag, repoTag);
                $("#displayHere2").append(column);

                // var userNameTag = $("<p>").text("Username:" +response.login);
                // var imgTag = $("<img>").attr("src", response.avatar_url);
                // var viewProfileTag = $("<a>").attr("href", response.html_url).text("View Profile");
                // var nameTag = $("<p>").text("Name: " +response.name);
                // var followersTag = $("<p>").text("Followers: " +response.followers);
                // console.log("Followers:", response.followers);
                // var followingTag = $("<p>").text("Following: " +response.following);
                // console.log("Following:", response.following);
                // var repoTag = $("<p>").text("Repos:" +response.public_repos);
                // console.log(response.public_repos);
                // console.log(response.name);
                // $("#displayHere2").append(userNameTag, nameTag, imgTag, nameTag, viewProfileTag, followersTag, followingTag, repoTag);
            }
            catch (e) {
                console.log(e);
                console.log("User not found");
                var errorTag = $("<p>").text("User not found");
                $("#displayHere2").append(errorTag);
            }
        
        });

    });


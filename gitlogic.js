$(document).ready(function() {
    
    
    $("#submit2").on("click", function(event) {
        event.preventDefault();
        var name = $("#input2").val().trim();
        console.log(name);
        $.ajax({
            url: "https://api.github.com/search/users?q="+name+"",
            method: 'GET',
            client_id: 'Iv1.98d9f81a347e2303',
            client_secret: 'f52e494216a0e5860426c02c357f80cbaa74df7c',
        }).then(function(response) {
            console.log(response);    
            console.log(response.total_count);
            for(i=0; i<response.total_count; i++) {
                if(response.items[i].login === name) {
                    console.log(response.items[i].login);
                    console.log(response.items[i].repos_url);
                    console.log(response.items[i].avatar_url);
                    console.log(response.items[i].html_url);
                    //console.log(parseInt(response.items[i].followers));
                    //console.log(response.items[i].following);
                    //console.log(response.items[i].public_repos);
                    break;
                }       
            }

            //console.log(response.items[i].repos_url);
            //console.log(response.items[i].avatar_url);
            var imgTag = $("<img>").attr("src", response.items[i].avatar_url);
            var nameTag = $("<p>").text(response.items[i].login);
            var repoTag = $("<a>").attr("href", response.items[i].repos_url).text("Repos");
            var viewProfileTag = $("<a>").attr("href", response.items[i].html_url).text("View Profile");
            
            $("#displayHere2").append(imgTag, nameTag, repoTag, viewProfileTag);
            
            
        });
    });
}); 


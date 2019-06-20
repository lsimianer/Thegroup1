var firebaseConfig = {
    apiKey: "AIzaSyDwBHm7Wo_YvaSl6Tb5O0l1IrCEyT7spf0",
    authDomain: "group-1-db.firebaseapp.com",
    databaseURL: "https://group-1-db.firebaseio.com",
    projectId: "group-1-db",
    storageBucket: "group-1-db.appspot.com",
    messagingSenderId: "500453305070",
    appId: "1:500453305070:web:1339139e675c72e7"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var time = moment().format('MMM DD HH:MM'); 
// begin yelp api js
$( document ).ready(function() {
    console.log( "ready!" );
  });
  // begin firebase js
// pull from firebase to build td
database.ref().orderByChild("dateAdded").on("child_added", function (snapshot){
  console.log(snapshot.child());      
    $("tbody").append("<tr><td>" + 
      snapshot.val().Name + "</td>" + "<td>" + 
      snapshot.val().githubName + "</td>" + "<td>" + 
      snapshot.val().Where + "</td>" + "<td>" + 
      snapshot.val().StartTime + "</td>" + "<td>" +
      snapshot.val().EndTime + "</td>" + "<td>"+
      snapshot.val().Email + "</td>" +                    
      "<td>"+ time + "</td>");
  });  
  
  var api ="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=";
  var place = $('#place');
  var peice = "&limit=6&location=";
  var city = $('#city');    
  
    $("#YelpSubmit").on("click",queryAPI1);  
  function queryAPI1(){
    $("#YelpResultsDisplay").empty();
    event.preventDefault();
  
    var url = api + place.val() + peice + city.val();
      $.ajax({
         url: url,
         headers: {
          'Authorization':'Bearer sEEutzNCLWpppnBUy2apjP89foA67xbSdcu7gQyBI74kZE6eEmrME7_VzyaArAEv7OUUljz0mFCQUBCgwypzmhoCXeS46aMFHy97WyJ5i2ABWf9g5K7wpeHPZY4CXXYx',
      },
         method: 'GET',
         dataType: 'json',
        }).then(function(response) {
          var results = response;
          console.log(response);
          console.log(url);    
            //  $("#results").append(JSON.stringify(field));
            for (var i = 0; i < results.businesses.length; i++) { 
              console.log(results.businesses[i].name);
              console.log(results.businesses[i].location);
              console.log(results.businesses[i].price);
              console.log(results.businesses[i].url);
              console.log(results.businesses[i].image_url);
            // Creating a div for the result
            var yelpDiv = $("<div>");
            yelpDiv.addClass("col s12 m12 l4 card medium grey lighten-5");            
            // Storing the result item's rating
            var name = results.businesses[i].name;
            var nameDiv = $("<div>");
            nameDiv.addClass("card-title center-align");
            nameDiv.text(name)
            // location
            var location = results.businesses[i].location.display_address[0];
            var location2 = results.businesses[i].location.display_address[1];
            var locationDiv = $("<div>");
            // locationDiv.append( src="assets/images/Yelp-Trademark.png");
            locationDiv.addClass("center-align");
            console.log("HELLO");
            console.log(location, location2)
            locationDiv.html(location +" "+ location2); 
            // business url
            var url = results.businesses[i].url;
              //clickable yelp trademark
            var yelpLogoDiv = $("<div>");
            yelpLogoDiv.addClass("center-align");
            yelpLogoDiv.html( "<img width=60 src=https://i.ibb.co/3zvxgFD/Yelp-trademark-RGB.png>"); 
            yelpLogoDiv.attr("href", url);
            console.log(location,location2);            
            //price
            var price = results.businesses[i].price;
            var priceDiv = $("<div>");
            priceDiv.addClass("card-title center-align");
            priceDiv.text(price)
            priceDiv.append(nameDiv);
            //image
            var img = results.businesses[i].image_url;
           // Creating an image tag
            var info = name + price + location;
            var yelpLink = $("<a>");
            yelpLink.attr("href", url+'target="_blank"');
            // yelpLink.addClass("card green");
            var yelpResult = $("<img width='100%' height='200px'>");
            yelpResult.addClass("img");
          //    // Giving the image tag an src attribute of a proprty pulled off the
            yelpResult.attr("src", results.businesses[i].image_url);           
            yelpLink.append(yelpResult);
            yelpLink.append(yelpLogoDiv);
            // Appending the paragraph and gifResult we created to the "gifDiv" div we created
            yelpDiv.append(yelpLink);
            yelpDiv.append(nameDiv);
            yelpDiv.append(priceDiv);
            yelpDiv.append(locationDiv);
            // yelpDiv.append(yelpLogoDiv);  
            $("#YelpResultsDisplay").append(yelpDiv);
        }  
    });      
  };  
  //begin git api js
  $("#YelpSubmit").on("click", function (event) {
    $("#GithubResultsDisplay").empty();
    event.preventDefault();
    var name = $("#GithubInput").val().trim();
    console.log(name);
    $("#place").val("");
    $("#city").val("");
    $("#GithubInput").val("");
    $.ajax({
    url: "https://api.github.com/users/" + name,
    method: 'GET',
    client_id: 'Iv1.98d9f81a347e2303',
    client_secret: 'f52e494216a0e5860426c02c357f80cbaa74df7c',
    }).then(function (response) {
        console.log(response);
        console.log(response.html_url);
        console.log()
        // create result area
        try {
             // Creates card div
          var mainDiv = $("<div>");
          mainDiv.addClass("col s12 l6 card grey lighten-5");
          // Creates a div for the image
          var imgFloat = $("<div>");
          imgFloat.addClass("center-align");
          var imgTag = $("<img>").attr("src", response.avatar_url);
          imgTag.attr("width", "30%");
          imgTag.attr("max-height", "200px");
          imgFloat.append(imgTag);
          // Creates a div for the text content
          var textFloat = $("<div>");
          textFloat.addClass("center-align");
          var userNameTag = $("<h5>").text("Github username: " +response.login);
          var viewProfileTag = $("<a>").attr("href", response.html_url).text("View Profile");
          var nameTag = $("<p>").text("Name: " +response.name);
          var followersTag = $("<p>").text("Followers: " +response.followers);
          console.log("Followers:", response.followers);
          var followingTag = $("<p>").text("Following: " +response.following);
          console.log("Following:", response.following);
          var repoTag = $("<p>").text("Repos:" +response.public_repos);
          console.log(response.public_repos);
          console.log(response.name);
          textFloat.append(userNameTag, viewProfileTag, nameTag, followersTag, followingTag, repoTag)
          mainDiv.append(imgFloat, textFloat);
          $("#GithubResultsDisplay").append(mainDiv);
        }
        catch (e) {
            console.log(e);
            console.log("User not found");
            var errorTag = $("<p>").text("User not found");
            $("#GithubResultsDisplay").append(errorTag);
        }    
    });
});













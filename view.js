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
  
  
  var api ="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=";
  var place = $('#place');
  var peice = "&location=";
  var city = $('#city');    
  
    $("#YelpSubmit").on("click",queryAPI1);
  
  function queryAPI1(){
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
              
              // Storing the result item's rating
              var name = results.businesses[i].name;
              var nameDiv = $("<div>");
              nameDiv.addClass("card-title");
              nameDiv.text(name)
              // location
              var location = results.businesses[i].location.display_address[0];
              var location2 = results.businesses[i].location.display_address[1]
              var locationDiv = $("<div>");
              locationDiv.addClass("card-content");
              locationDiv.text(location +" "+ location2);           
              console.log(location,location2);
              
              //price
              var price = results.businesses[i].price;
              var priceDiv = $("<div>");
              priceDiv.addClass("card-content");
              priceDiv.text(price)
              // business url
              var url = results.businesses[i].url;
              //image
              var img = results.businesses[i].image_url;
  
             // Creating an image tag
              var info = name + price + location;
  
              var yelpLink = $("<a>");
              yelpLink.attr("href", url);
              yelpLink.addClass("card green");
  
              var yelpResult = $("<img width='20%' height='200px'>");
              yelpResult.addClass("img");
            //    // Giving the image tag an src attribute of a proprty pulled off the
              yelpResult.attr("src", results.businesses[i].image_url);           
              yelpLink.append(yelpResult)
              // Appending the paragraph and gifResult we created to the "gifDiv" div we created
              yelpDiv.append(yelpLink);
              yelpDiv.append(nameDiv)
              yelpDiv.append(priceDiv)
              yelpDiv.append(locationDiv)
  
  
              $("#displayHere1").append(yelpDiv);
        }
  
    });      
  };
















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
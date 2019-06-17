
//api 1 === yelp api
//api 2 === full contact api
https://api.yelp.com/v3/businesses/search?limit=2&location=Austin&categories=food&term=restaurant


//on click query api 1
// $(document).on('click', '#submit1',queryAPI1);


// // get input from the input field
// var inputText = document.getElementById('input1').value;


// // create vars to hold our API 1components urly, key, inputs
// var ap1 =" ";

// var apiKey1 ="sEEutzNCLWpppnBUy2apjP89foA67xbSdcu7gQyBI74kZE6eEmrME7_VzyaArAEv7OUUljz0mFCQUBCgwypzmhoCXeS46aMFHy97WyJ5i2ABWf9g5K7wpeHPZY4CXXYx";

// var yelpClientIdKey = "CsFSQ8tDmgtOESdPPnYaaA";
// // if any 
// var lims1 = " ";

// function queryAPI1(){

    
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=halcyon&location=austin";

    var field = $('#displayHere1');

    
    $.ajax({
       url: myurl,
       headers: {
        'Authorization':'Bearer sEEutzNCLWpppnBUy2apjP89foA67xbSdcu7gQyBI74kZE6eEmrME7_VzyaArAEv7OUUljz0mFCQUBCgwypzmhoCXeS46aMFHy97WyJ5i2ABWf9g5K7wpeHPZY4CXXYx',
    },
       method: 'GET',
       dataType: 'json',
      }).then(function(response) {
        var results = response;
        console.log(response);
        

          //  $("#results").append(JSON.stringify(field));
            for (var i = 0; i < results.businesses.length; i++) { 
              console.log(results.businesses[i].name);
              console.log(results.businesses[i].location);
              console.log(results.businesses[i].price);
              console.log(results.businesses[i].url);
              console.log(results.businesses[i].image_url);

            // Creating a div for the gif
            var yelpDiv = $("<div>");
            
            // Storing the result item's rating
            var name = results.businesses[i].name;
            var nameDiv = $("<div>");
            nameDiv.addClass("name");
            nameDiv.text(name)
            // location
            var location = results.businesses[i].location.display_address[0];
            var location2 = results.businesses[i].location.display_address[1]
            var locationDiv = $("<div>");
            locationDiv.addClass("location");
            locationDiv.text(location +" "+ location2);           
            console.log(location,location2);
            
            //price
            var price = results.businesses[i].price;
            var priceDiv = $("<div>");
            priceDiv.addClass("price");
            priceDiv.text(price)
            // business url
            var url = results.businesses[i].url;
            //image
            var img = results.businesses[i].image_url;

           // Creating an image tag
            var info = name + price + location;

            var yelpLink = $("<a>");
            yelpLink.attr("href", url);

            var yelpResult = $("<img width='20%' height='200px'>");
          //    // Giving the image tag an src attribute of a proprty pulled off the
            yelpResult.attr("src", results.businesses[i].image_url);           
            yelpLink.append(yelpResult)
            // Appending the paragraph and gifResult we created to the "gifDiv" div we created
            yelpDiv.append(yelpLink);
            yelpDiv.append(nameDiv)
            yelpDiv.append(priceDiv)
            yelpDiv.append(locationDiv)


            $("#displayHere1").append(yelpDiv);


            // $('#displayHere1').append(name);
            // $('#displayHere1').append(location);
            // $('#displayHere1').append(price);   
        //    // Prepending the gifDiv to the div in the HTML
        //     // $("#displayHere1").append(yelpDiv);
        //     console.log("#displayhere"+i);
          }

       });      

 
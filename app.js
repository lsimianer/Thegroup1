
//api 1 === yelp api
//api 2 === full contact api
https://api.yelp.com/v3/businesses/search?limit=2&location=Austin&categories=food&term=restaurant


//on click query api 1
$(document).on('click', '#submit1',queryAPI1);


// get input from the input field
var inputText = document.getElementById('input1').value;


// create vars to hold our API 1components urly, key, inputs
var ap1 =" ";

var apiKey1 ="sEEutzNCLWpppnBUy2apjP89foA67xbSdcu7gQyBI74kZE6eEmrME7_VzyaArAEv7OUUljz0mFCQUBCgwypzmhoCXeS46aMFHy97WyJ5i2ABWf9g5K7wpeHPZY4CXXYx";

var yelpClientIdKey = "CsFSQ8tDmgtOESdPPnYaaA";
// if any 
var lims1 = " ";

function queryAPI1(){

    var queryURL = api1 + input1 + lims1 ;

    $('#displayHere1').empty();// empty our display div prior to populating new results
    // log it to check
    console.log(queryAPI.val);// unsure if ".val" needed
    console.log(apiKey.val);

    //ajax call to the api
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
            // Storing an array of results in the results variable
            var results = response.data;
        
            console.log(response);
            // Looping over every result item
            for (var i = 0; i < results.length; i++) { 
                 // Creating a div for the gif
                 var yelpDiv = $("<div>");
  
                 // Storing the result item's rating
                 var rating = results[i].rating;
   
                 // Creating a paragraph tag with the result item's rating
                 var p = $("<p>").text("Rating: " + rating);
   
                 // Creating an image tag
                 var yelpResult = $("<img>");
   
                 // Giving the image tag an src attribute of a proprty pulled off the
                 // result item
                 yelpResult.attr("src", results[i].images.fixed_height.url);
   
                 // Appending the paragraph and gifResult we created to the "gifDiv" div we created
                 yelpDiv.append(p);
                 yelpDiv.append(yelpResult);
   
                 // Prepending the gifDiv to the div in the HTML
                 $("#displayHere1").append(yelpDiv);


            }
    })
};


// split between the two MediaQueryListEvent.apply.apply.apply.jnfvejnoefvonefvojnefvjonvfenovef
// evnjnevijnijvenijvenijvenivneiunriuvnienitneinbetiuonuietbnuinbe
// nevnjivefnjivnefijnveinvenuienuiven
// jnverjnjivnjivenjivne
// jierinijrniojfioewhiofnewiofi32iro320ui0hieojiofnij vjin

// delete that once done


$(document).on('click', '#submit2',queryAPI2);

// get input from the input field
var inputText = document.getElementById('input2').value;

var ap2 =" ";

var apiKey2 =" ";

// if any 
var lims2 = " ";

function queryAPI2(){

    var queryURL = api2 + input2 + lims2 ;

    $('#displayHere2').empty();// empty our display div prior to populating new results
    // log it to check
    console.log(queryAPI.val);// unsure if ".val" needed
    console.log(apiKey.val);

    //ajax call to the api
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
            // Storing an array of results in the results variable
            var results = response.data;
        
            console.log(response);
            // Looping over every result item
            for (var i = 0; i < results.length; i++) { 
                 // Creating a div for the gif
                 var contactDiv = $("<div>");
  
                 // Storing the result item's rating
                 var rating = results[i].rating;
   
                 // Creating a paragraph tag with the result item's rating
                //  var p = $("<p>").text("Rating: " + rating);
   
                 // Creating an image tag
                 var contactResult = $("<img>");
   
                 // Giving the image tag an src attribute of a proprty pulled off the
                 // result item
                 contactResult.attr("src", results[i].images.fixed_height.url);
   
                 // Appending the paragraph and gifResult we created to the "gifDiv" div we created
                 contactDiv.append(p);
                 contactDiv.append(contactResult);
   
                 // Prepending the gifDiv to the div in the HTML
                 $("#displayHere2").append(contactDiv);


            }
    })
};






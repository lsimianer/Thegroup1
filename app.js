



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
// var place = $('#place');
// var city = $('#city');    
// var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+ place.val() +"&location="+ city.val();
// var field = $('#displayHere1');


// $("#YelpSubmit").on("click",function(event){
//   event.preventDefault();}
$( document ).ready(function() {
  console.log( "ready!" );
});


particlesJS("particles-js", {"particles":{"number":{"value":380,"density":{"enable":true,"value_area":800}},"color":{"value":"#dd2828"},"shape":{"type":"circle","stroke":{"width":0,"color":"#dd2828"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#dd2828","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px';
//  document.body.appendChild(stats.domElement); 
 count_particles = document.querySelector('.js-count-particles'); 
update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } 
requestAnimationFrame(update); }; 
// requestAnimationFrame(update);;

particlesJS("particles-js2", {"particles":{"number":{"value":380,"density":{"enable":true,"value_area":800}},"color":{"value":"#dd2828"},"shape":{"type":"circle","stroke":{"width":0,"color":"#dd2828"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#dd2828","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px';
//  document.body.appendChild(stats.domElement); 
 count_particles = document.querySelector('.js-count-particles'); 
update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } 
requestAnimationFrame(update); }; 
// requestAnimationFrame(update);;

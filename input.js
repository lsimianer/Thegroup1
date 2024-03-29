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
//format time from ms to desired look
var time = moment().format('MMM DD HH:MM'); 

// on click prevent default && establish vars relationship to input field for push to firebase.
$("#submit").on("click",function(event){  
event.preventDefault();

  var firstName = $("#Name").val().trim();
  var GithubName = $("#GithubName").val().trim();
  var Where = $("#where").val().trim();
  var StartTime = $("#startTime").val().trim();
  var EndTime = $("#endTime").val().trim();
  var Email = $("#email").val().trim();

    database.ref().push({
      Name: firstName,
      githubName: GithubName,
      Where: Where,
      StartTime: StartTime,
      EndTime: EndTime,
      Email: Email,
      dateAdded: firebase.database.ServerValue.TIMESTAMP,      
  })
  // move to sep fx
  $("#Name").val("");
 $("#GithubName").val("");
 $("#where").val("");
 $("#startTime").val("");
 $("#endTime").val("");
 $("#email").val("");
});
// append the table with firebase data
database.ref().orderByChild("dateAdded").on("child_added", function (snapshot){
  console.log(snapshot.child());
    console.log(snapshot.val())
      
    $("tbody").append("<tr><td>" + 
      snapshot.val().Name + "</td>" + "<td>" + 
      snapshot.val().githubName + "</td>" + "<td>" + 
      snapshot.val().Where + "</td>" + "<td>" + 
      snapshot.val().StartTime + "</td>" + "<td>" +
      snapshot.val().EndTime + "</td>" + "<td>"+
      snapshot.val().Email + "</td>" +                    
      "<td>"+ moment(snapshot.val().dateAdded, "x").format("MMM/DD/YYYY HH:mm") + "</td>");       
      
});
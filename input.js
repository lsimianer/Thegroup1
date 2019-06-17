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

var firstName = "";
var gitName = "";
var myLocation = "";
var timeStart = "";
var timeEnd = "";
var email = "";

$("#submit").on("click",function(event){
    event.preventDefualt();

    firstName = $("#Name").val().trim();
    GithubName = $("#GithubName").val().trim();
    Where = $("#where").val().trim();
    TimeStart = $("#startTime").val().trim();
    TimeEnd = $("#endTime").val().trim();

    database.ref().push({
        Name: firstName,
        githubName: gitName,
        location: where,
        StartTime: timeStart,
        EndTime: endTime,
        Email: email,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
});


database.ref().orderByChild("dateAdded").on("child_added", function (snapshot){
    console.log(snapshot.child());
      
        
      $("tbody").append("<tr><td>" + 
        snapshot.val().Name + "</td>" + "<td>" + 
        snapshot.val().githubName + "</td>" + "<td>" + 
        snapshot.val().location + "</td>" + "<td>" + 
        snapshot.val().StartTime + "</td>" + "<td>" +
        snapshot.val().EndTime + "</td>" + 
        "<td>" + dateAdded  + "</td>" );
        
  
    //   function displayTime() {
    //   var time = moment().format('HH:mm:ss');
    //   $('#clock').html(time);
    //   setTimeout(displayTime, 1000);
    // }
  
    // // $(document).ready(function() {
    //     displayTime();
    //     dateDifference();
    //   });

});
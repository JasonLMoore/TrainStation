$(document).ready(function() {

});

var config = {
    apiKey: "AIzaSyDRmL8S2TUG5wh6VJ0410etBjAoO9xrgLU",
    authDomain: "jlm-train-homework.firebaseapp.com",
    databaseURL: "https://jlm-train-homework.firebaseio.com",
    projectId: "jlm-train-homework",
    storageBucket: "",
    messagingSenderId: "712730153502"
};

firebase.initializeApp(config);

var database = firebase.database();

var trainID = "";
var destination = "";
var firstArival = "";
var frequency = "";

$("#bttn").on("click", function(event) {
    event.preventDefault();

    trainID = $("#trainIdInput").val().trim();
    destination = $("#destinationInput").val().trim();
    firstArival = $("#firstTimeInput").val().trim();
    frequency = $("#frequencyInput").val().trim();

    
    var newTrain = {
        trainID: trainID,
        destination: destination,
        firstArival: firstArival,
        frequency: frequency
    };
    
    console.log("clicked");
    console.log(newTrain);
    
    database.ref().push(newTrain);

    $("#trainIdInput").val("");
    $("#destinationInput").val("");
    $("#firstTimeInput").val("");
    $("#frequencyInput").val("");
    
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    trainID = childSnapshot.val().trainID;
    destination = childSnapshot.val().destination;
    frequency = childSnapshot.val().frequency;
    firstArival = childSnapshot.val().firstArival;

    console.log(trainID);
    console.log(destination);
    console.log(frequency);
    console.log(firstArival);

    var newRow = $("<tr>").append(
        $("<td>").text(trainID),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text("Next Arrival"),
        $("<td>").text("Minutes Away")
    );

    $("#train-table > tbody").append(newRow);
})



//var firstTime = moment(firstArival, "HH:mm").subtract(1, "years");
//console.log(firstTime);
var config = {
    apiKey: "AIzaSyBbyk8K108Ko9KQlMx7jtjPmga2wn0IpJs",
    authDomain: "testfirebasefunctionapi.firebaseapp.com",
    databaseURL: "https://testfirebasefunctionapi.firebaseio.com",
    projectId: "testfirebasefunctionapi",
    storageBucket: "testfirebasefunctionapi.appspot.com",
    messagingSenderId: "865626238870"
};

// Send to the Cloud
firebase.initializeApp(config);

// Used to test Cloud Functions Locally. Get localhost number afer firebase serve --only functions
//const app = firebase.initializeApp(config);
//app.functions().useFunctionsEmulator('http://localhost:5000');

// Set Firebase Database
var database = firebase.database();

var driverId = "Its working!";

//var getVehicleById = firebase.functions().httpsCallable('getVehicleById');
var getToken = firebase.functions().httpsCallable('getToken');


// When you want to send arguments to CF.
//getVehicleById({ text: driverId }).then(function (result) {
getToken().then(function (result) {

    // When you dont want to send arguments to CF. Use '()'
    //message().then(function (result) {

    console.log('objectSent', result)

}).catch(function (error) {

    console.log('error', error)
});
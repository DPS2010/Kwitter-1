// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBtpqYMZz5erD8r8iWLrLN_lynYme1OPuo",
      authDomain: "kwitter-8d505.firebaseapp.com",
      databaseURL: "https://kwitter-8d505-default-rtdb.firebaseio.com",
      projectId: "kwitter-8d505",
      storageBucket: "kwitter-8d505.appspot.com",
      messagingSenderId: "356169235983",
      appId: "1:356169235983:web:b7ef7800fa0f7877b6ad7a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);``
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCHbsMjL3xeyINWCAMXR0f9j6Ltz0YbuDo",
      authDomain: "kwitter-62207.firebaseapp.com",
      databaseURL: "https://kwitter-62207-default-rtdb.firebaseio.com",
      projectId: "kwitter-62207",
      storageBucket: "kwitter-62207.appspot.com",
      messagingSenderId: "215674802073",
      appId: "1:215674802073:web:863886608d5fcf5f7c8d08"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
            });

      document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

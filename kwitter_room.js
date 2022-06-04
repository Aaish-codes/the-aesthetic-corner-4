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
document.getElementById("user_name").innerHTML="welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomame(this.id)' >💗"+ Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomame(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
}

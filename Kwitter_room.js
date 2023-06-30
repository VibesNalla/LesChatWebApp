
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC4ZNtwPZefZHbSnJODum89r18tLxX9Eh8",
      authDomain: "kwitter-36ada.firebaseapp.com",
      databaseURL: "https://kwitter-36ada-default-rtdb.firebaseio.com",
      projectId: "kwitter-36ada",
      storageBucket: "kwitter-36ada.appspot.com",
      messagingSenderId: "563865365489",
      appId: "1:563865365489:web:bbabbeb79f062293c5b250"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! ";

    function addRoom(){
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML +=row; 
      //End code
      });});}
getData();


function redirectToRoomName(name){
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
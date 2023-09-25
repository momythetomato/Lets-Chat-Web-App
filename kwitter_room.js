
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = { 
      apiKey: "AIzaSyBJ40clxqUDLODXwqhoLXfMv7tUOR-fTbA", 
      authDomain: "kwitterwebapp-80e4b.firebaseapp.com",
       databaseURL:"https://kwitterwebapp-80e4b-default-rtdb.firebaseio.com",
projectId: "kwitterwebapp-80e4b", 
storageBucket: "kwitterwebapp-80e4b.appspot.com", 
messagingSenderId: "256718111991", 
appId: "1:256718111991:web:e104b5f60791eabe9f7ff2" 
}; 

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=user_name;

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name)

      window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name -" + Room_names)
      row="<div class=room_name' id="+ room_names + "onclick='redirectToRoomName(this.id)' >#"+room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location= "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}




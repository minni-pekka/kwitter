//LINKS DO SEU APP FIREBASE
firebase.initializeApp(firebaseConfig);
const firebaseConfig = {
    apiKey: "AIzaSyBW36PRYIBais9LcX4zwEllrJLcOVmoE6E",
    authDomain: "kwitter-fd423.firebaseapp.com",
    databaseURL: "https://kwitter-fd423-default-rtdb.firebaseio.com",
    projectId: "kwitter-fd423",
    storageBucket: "kwitter-fd423.appspot.com",
    messagingSenderId: "451994044492",
    appId: "1:451994044492:web:ef84f6d6a46a64f59d0ce9"
  };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Comece a programar aqui

//Termine de programar aqui
      } });  }); }
getData();

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    })

    document.getElementById("msg").value = "";
}
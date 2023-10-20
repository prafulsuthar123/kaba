const firebaseConfig = {
    apiKey: "AIzaSyBl7tdUpwWDLmAsF6VrDapbyyUNn33d24k",
    authDomain: "kaba-001.firebaseapp.com",
    databaseURL: "https://kaba-001-default-rtdb.firebaseio.com",
    projectId: "kaba-001",
    storageBucket: "kaba-001.appspot.com",
    messagingSenderId: "88807474224",
    appId: "1:88807474224:web:d925677ad06c315b3e99f5"
  };

  firebase.initializeApp(firebaseConfig);

  var contactDB = firebase.database().ref("contact");

  document.getElementById("contact").addEventListener("submit", send);

  function send(e){
    e.preventDefault();
    var fn = getElementByVal('fn');
    var ln = getElementByVal('ln');
    var email = getElementByVal('email');
    var country = getElementByVal('fn');
    var textvalue = getElementByVal('textvalue');
    console.log(fn, ln, email, country, textvalue);
  } 

  const getElementById =(id) =>{
    return document.getElementById(id).ariaValueMax;
  };
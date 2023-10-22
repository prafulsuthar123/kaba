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
  const app = initializeApp(firebaseConfig);
  const contactDB = firebase.database().ref("form");

  document.getElementById("form").addEventListener("submit", SendForm);

  function SendForm(e) {
    e.preventDefault();
    var fn = getElementVal("fn");
    var ln = getElementVal("ln");
    var email = getElementVal("email");
    var country = getElementVal("fn");
    var textvalue = getElementVal("textvalue");
    console.log(fn, ln, email, country, textvalue);
   } 

  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  };
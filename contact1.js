// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB826_jJgYv1DkpIskJvKy-Rc_RAoYUXds",
    authDomain: "personal-portfolio-99505.firebaseapp.com",
    databaseURL: "https://personal-portfolio-99505-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "personal-portfolio-99505",
    storageBucket: "personal-portfolio-99505.appspot.com",
    messagingSenderId: "781958781505",
    appId: "1:781958781505:web:8fffbd3081b8e2be4284c0",
    measurementId: "G-2HQGDWFECL"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Listen for form submit

var messageRef = firebase.database().ref('messages');

document.getElementById("contactForm").addEventListener('submit', submitForm);

//Submit Form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal("name-b381");
    var email = getInputVal("email-b381");
    var subject = getInputVal("subject-b381");
    var message = getInputVal("text-b381");


    saveMessage(name, email, subject, message);

     // show alert
     document.querySelector('.alert').style.display = 'block';

     // Save messages
     setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    }, 2000);

  document.getElementById('contactForm').reset(); 
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, email, subject, message){
    var newmessageRef = messageRef.push();
    alert(name);
    alert(email);
    alert(subject);
    alert(message);
    newmessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
}
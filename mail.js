// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpa-jWCf_cK8qBB_LecOShMxUSknH_CYM",
    authDomain: "studyhublandingpage.firebaseapp.com",
    databaseURL: "https://studyhublandingpage-default-rtdb.firebaseio.com",
    projectId: "studyhublandingpage",
    storageBucket: "studyhublandingpage.appspot.com",
    messagingSenderId: "115400666873",
    appId: "1:115400666873:web:5fa895f20df3d66bbd7c28"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var contactFormDB = firebase.database().ref("emailForm");
  var subscribeDB = firebase.database().ref("subscriptions");

  document.getElementById("contactForm").addEventListener("submit", submitForm);
  document.getElementById("subscribeForm").addEventListener("submit", subscribeForm);

  function submitForm(e){
    e.preventDefault();
    console.log('Form submitted');

    var name = getElementVal('name');
    var email = getElementVal('emailid');
    var msgContent = getElementVal('msgContent');

    saveMessages(name, email, msgContent);

     //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
  
  }
 
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };


  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  //subscribe
  function subscribeForm(e) {
    e.preventDefault();
    console.log('Subscribe Form submitted');

    var email = getElementVal('subEmail');

    saveSubscription(email);

    // Enable alert
    document.querySelector(".alert").style.display = "block";

    // Remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Reset the form
    document.getElementById("subscribeForm").reset();
}

const saveSubscription = (email) => {
    var newSubscription = subscribeDB.push();
    newSubscription.set({
        email: email
    });
};

  
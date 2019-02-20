




function Signinstudent() {
    var stuemail= document.getElementById("studentUser").value;

    var stupassword= document.getElementById("studentUser-psw").value;


    firebase.auth().signInWithEmailAndPassword(stuemail, stupassword).then(function (user){

        firebase.auth().onAuthStateChanged(function(user) {
            //user = firebase.auth().currentUser.uid;
            if (user) {


                console.log(firebase.auth().currentUser.uid);
                // User is signed in.
            } else {
                console.log("no user");
                // No user is signed in.
            }
        });
        window.location.href = "Studentpage.html";

    }).catch(function (error) {
        // Handle Errors here.
        alert("Invalid user or password.");
        console.log("*********",error);
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });


}


function Studentinfo() {


    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
        } else {
            // User is signed out.
            // ...
        }
    });

}
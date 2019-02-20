function EnterEmp(){


  /**
    if(firebase.auth().currentUser.uid!="null"){
        firebase.auth().signOut();
        firebase.auth().signOut();
        console.log("not null")
    }**/
    var empemail= document.getElementById("employerUser").value;



    var emppassword=document.getElementById("empUser-psw-rp").value;


    firebase.auth().signInWithEmailAndPassword(empemail, emppassword).then(function (user){

        firebase.auth().onAuthStateChanged(function(user) {
            //user = firebase.auth().currentUser.uid;
            if (user) {


                console.log(firebase.auth().currentUser.uid);
                // User is signed in.
            } else {
                console.log("no user");
                // No user is signed in.
            }
            window.location.href = "GradNet1.html";

    }).catch(function (error) {
        // Handle Errors here.
            alert("Invalid user or password.");
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);

        // ...
    });




});
}
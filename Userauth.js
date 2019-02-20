


function EnterSt(){

    var email= document.getElementById("studentUser").value;
    var password=document.getElementById("studentUser-psw").value;


    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });


}
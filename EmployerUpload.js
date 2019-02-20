function EmployerSubmit() {
    alert("hello");
    var empname = document.getElementById("CompanyName").value;
    var userid="";
    var empemail = document.getElementById("employer-email").value;
    var origemail=empemail;
  empemail = empemail.replace(".", ",");
    empemail = empemail.replace("@", "(");
    var Address1=document.getElementById("Address1").value;
    var Address2=document.getElementById("Address2").value;
    var Address3=document.getElementById("Address3").value;

    var CompBlurb=document.getElementById("subject1").value;
    var Ideal=document.getElementById("subject2").value;
    //var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var Industry = document.getElementById("Industry").value;
    var emppassword = document.getElementById("employer-psw").value;
    var empconpassword = document.getElementById("employer-psw-repeat").value;


    if (emppassword == empconpassword) {

        firebase.auth().createUserWithEmailAndPassword(origemail, emppassword).then(function(user){

            var userid = firebase.auth().currentUser.uid;

            writeEmployerData("Employer", userid , empemail, empname, Address1, Address2, Address3, country,Industry, emppassword,CompBlurb,Ideal);

        }).catch(function (error) {
            // Handle Errors here.
           console.log(error);
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
        });




    }

}
    function writeEmployerData(de, uid, eel, empe, ad1,ad2,ad3,cn ,ind, epd,blb,idc) {
        alert("hello");
        var obj = {datatype:de, userid:uid, empemail:eel, empname:empe,Address1:ad1,Address2:ad2,Address3:ad3 , country:cn, Industry:ind, password:epd,Blurb:blb,IdealCand:idc};
        document.getElementById("06").innerHTML = obj[Object.keys(obj)[0]] + '/' + obj[Object.keys(obj)[1]];
        firebase.database().ref(obj[Object.keys(obj)[0]] + '/' + obj[Object.keys(obj)[1]]).set(obj);



        window.location.href = "GradNet1.html";


    }
//var auth= firebase.auth();


function mySubmit(){
    alert("hello");
  var userid="";
    var fname = document.getElementById("name").value;
    //var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var origstemail= email;
    email = email.replace(".", ",");
    email = email.replace("@", "(");
   var level=document.getElementById("Level").value;
    var degree =document.getElementById("Degree").value;
    var postdoc =document.getElementById("PostDegree").value;

 //   var city = document.getElementById("city").value;
   // var country = document.getElementById("country").value;
    var college=document.getElementById("College/University").value;
    var Hobbies =document.getElementById("Hobbies").value;
   var WorkEx = document.getElementById("WorkExperience").value;
   var Blurb = document.getElementById("Blurb").value;
    var password = document.getElementById("psw").value;
    var conpassword = document.getElementById("psw-repeat").value;

    if(password == conpassword){



            firebase.auth().createUserWithEmailAndPassword(origstemail, password).then(function(user){

                var userid = firebase.auth().currentUser.uid;

                writeUserData("users",  userid, email, fname, level, degree, postdoc, college, password, Hobbies, WorkEx, Blurb);


            }).catch(function (error) {
                // Handle Errors here.
                alert("success");
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
/*
st-subbtn.addEventListener("click",e=>{
    //console.log(document.getElementById("fname").innerHTML);


});*/


function writeUserData(de, uid, el, fe, le, deg, pdoc, co, pd, ho ,wx,blb) {





    alert("hello");
    var obj = {datatype:de,user:uid, email:el, fname:fe, level: le, degree:deg, postdoc:pdoc,college:co,  password:pd,Hobbies:ho, WorkEx:wx ,Blurb:blb };
    document.getElementById("04").innerHTML = obj[Object.keys(obj)[0]] + '/' + obj[Object.keys(obj)[1]];
    firebase.database().ref(obj[Object.keys(obj)[0]] + '/' + obj[Object.keys(obj)[1]]).set(obj);



    window.location.href = "Studentpage.html";


}






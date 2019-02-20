/*var db = firebase.firestore();
db.collection("jobs").add({
    company: "company1",
    jobtitle: "jobtitle1"
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
*/
var userid="a";
//retreive name data from database
//var nameText = document.getElementById("firstName");
var userRef = firebase.database().ref().child("Jobs");
var useridRef = userRef.child("Employer1");
//var useridRef = userRef.child(userid);
var nameRef = useridRef.child("Title1");

//Check
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log(firebaseUser.uid);
    userid=firebaseUser.uid;
    //useridRef = userRef.child(userid);
    useridRef = userRef.child("Employer1");
    nameRef = useridRef.child("Title1");

    var data = {};
    var dataRef = firebase.database().ref("/Jobs/" + "Employer1");
    dataRef.on('value', function(snapshot) {
        var i=0;
      snapshot.forEach(function(childSnapshot) {
        data[childSnapshot.key] = childSnapshot.val();
        console.log(data[childSnapshot.key]); //change column to have each in each row in table
        document.getElementById("jobData"+i).innerHTML=data[childSnapshot.key];
        i++;
      });
    });
    //console.log(data.fname);
    console.log("Logged In User");
  }else{
    console.log("not logged in");
  }
});
window.onscroll = function() {loadDiv()};
//when you scroll down 50 pixels
function loadDiv() {
    //if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //CREATE IF TO CHECK IF DATA IS THERE TO FILL THE NEXT DIV
        var newDiv = document.createElement("div");

        newDiv.innerHTML = '<div class="row"><div class="card"><h5 id="jobData0">Company Name</h5><h5 id="jobData1"> Job Title</h5><div class="fakeimg"><p>Image</p></div><p id="tester"></p><table id="table1"><tr><div id="jobData"></div></tr> <!--NAME--><tr><td><div id="nameTitle">Description:</div></td><td><div id="jobData2"></div></td></tr><tr><td>E-mail</td><td><div id="jobData3"></div></td></tr><tr><td>Phone:</td><td><div id="jobData5"></div></td></tr></table><button>Apply Now</button></div></div>';
        document.body.insertBefore(newDiv, document.getElementById("AddNew"));
        //console.log(firebaseUser.uid);
        //userid=firebaseUser.uid;
        //useridRef = userRef.child(userid);
        useridRef = userRef.child("Employer1");
        nameRef = useridRef.child("Title1");

        var data = {};
        var dataRef = firebase.database().ref("/Jobs/" + "Employer1");
        dataRef.on('value', function(snapshot) {
            var i=0;
          snapshot.forEach(function(childSnapshot) {
            data[childSnapshot.key] = childSnapshot.val();
            console.log(data[childSnapshot.key]); //change column to have each in each row in table
            document.getElementById("jobData"+i).innerHTML=data[childSnapshot.key];
            i++;
          });
        });
    //}

}
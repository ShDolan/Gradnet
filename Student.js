var userid="a";
//retreive name data from database
var nameTitle = document.getElementById("nameTitle");
var nameText = document.getElementById("firstName");
var userRef = firebase.database().ref().child("Users");
var useridRef = userRef.child(userid);
var nameRef = useridRef.child("fname");

/**
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log(firebaseUser.uid);
    userid=firebaseUser.uid;
    useridRef = userRef.child(userid);
    nameRef = useridRef.child("fname");
    /*nameRef.on('value',function(snapshot){
      //console.log(useridRef.child("fname"));
      nameTitle.innerHTML = snapshot.key + ":";
      nameText.innerHTML = snapshot.val();
    });*/
/**
    var data = {};
    var dataRef = firebase.database().ref("/Users/" + userid);
    dataRef.on('value', function(snapshot) {
        var i=0;
      snapshot.forEach(function(childSnapshot) {
        data[childSnapshot.key] = childSnapshot.val();
        console.log(data[childSnapshot.key]); //change column to have each in each row in table
        document.getElementById("nameTitle"+i).innerHTML=data[childSnapshot.key];
        i++;
      });
    });
    //console.log(data.fname);
    console.log("Logged In User");
  }else{
    console.log("not logged in");
  }
});
**/

//function to make profile editable
function makeEditable(){
  //nameText.contentEditable = true;
  for(var i=0;i<5;i++){
    var a = document.getElementById("nameTitle"+i).innerHTML;
    var newid = "input"+i;
    document.getElementById("nameTitle"+i).innerHTML="<input id='input'></input>";
    document.getElementById("input").id = newid;
    console.log(a);
    document.getElementById(newid).placeholder = a;
    console.log(document.getElementById("input0").placeholder);
    //document.getElementById("nameTitle0").style.backgroundColor="yellow";
  }
  document.getElementById("saveBtn").style.display="inline";
}

//changes values in the database
function saveChanges(){
  var firebaseRef = firebase.database().ref();
  //var key = firebaseRef.push().key;

  //for loop here to connect inputs
  firebase.database().ref("Users/"+userid).update({course : document.getElementById("input0").value, datatype: "User", fname: document.getElementById("input2").value});

  //console.log("input 0 "+document.getElementById("input0").value);
  /*var update = {};
  update["Users/"+userid]={
    Name: nameText.innerHTML
  }
  firebaseRef.update(update);*/
  //console.log(nameText.innerHTML);
  //document.getElementById("").nameTitle.contentEditable = false;
  document.getElementById("nameTitle0").contentEditable = false;
  document.getElementById("nameTitle0").style.backgroundColor="white";
  document.getElementById("saveBtn").style.display="none";

  //var courseType = document.getElementById("course").value;
  //document.getElementById("courseName").innerHTML=courseType;
}

//Log Out
logoutbtn.addEventListener("click",e=>{
  firebase.auth().signOut();
});


//gets data from firebase as object
function getData(dataType, dataID){
  var data = {};
	var dataRef = firebase.database().ref("/" + dataType + "/" + dataID);
	dataRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      data[childSnapshot.key] = childSnapshot.val();
      console.log(data);
    });
});
	return data;
}
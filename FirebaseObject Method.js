//takes appropriately referenced object i.e var myObject = {datatype:users, ID:12345}
//writes entire object to database.
function writeObject(obj){
    firebase.database().ref(obj[Object.keys(obj)[0]] + '/' + obj[Object.keys(obj)[1]]).set(obj);
}

//returns full object from reference location i.e. "/users/12345".
function getData(dataType, dataID){
    var data = {};
    var location = "/" + dataType + "/" + dataID;
    var dataRef = database.ref(location);
    dataRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            data[childSnapshot.key] = childSnapshot.val();
        });
    });
    return data;
}
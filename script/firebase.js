
var config = {
    apiKey: "AIzaSyD0gpM5y0_vRaDtTTCrOKB4qGsD_k0IDzE",
    authDomain: "peachlab-458b1.firebaseapp.com",
    databaseURL: "https://peachlab-458b1.firebaseio.com",
    projectId: "peachlab-458b1",
    storageBucket: "peachlab-458b1.appspot.com",
    messagingSenderId: "809143970910"
  };


firebase.initializeApp(config)

const ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
  console.dir(error)
   console.log("Error: " + error.code);
});

// var db = firebase
//     .initializeApp(config)
//     .database()
//     .ref();



 // db.once('value', snapshot => {
 //        var a = snapshot.val()
 //        console.dir(a)
 //  })






 // console.dir(db);





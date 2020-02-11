var express = require('express');
var router = express.Router();


//Firebase Admin
var admin = require("firebase-admin");
var serviceAccount = require("../grade-5-4016d-firebase-adminsdk-v1i3i-09e7b76cb1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://grade-5-4016d.firebaseio.com"
});

/* GET users listing. */
router.get('/', function (req, res) {
  var db = admin.firestore();
  var ref = db.collection("users")
  ref.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.id, ":", doc.data());
      });
    })
  res.send('respond with a resource');
});

module.exports = router;

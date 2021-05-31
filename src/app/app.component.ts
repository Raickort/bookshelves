import { Component, VERSION } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor() {
     var firebaseConfig = {
      apiKey: "AIzaSyAOEhhsR3yHNtdbaIS_ZiuE_tq265L8YZ0",
      authDomain: "angularclassrooms.firebaseapp.com",
      databaseURL: "https://angularclassrooms-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "angularclassrooms",
      storageBucket: "angularclassrooms.appspot.com",
      messagingSenderId: "157691512875",
      appId: "1:157691512875:web:4d1c8d6a0b109bf4e0c26e",
      measurementId: "G-7CCWCVL8PY"
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  }
}

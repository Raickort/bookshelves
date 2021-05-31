import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  constructor() {}

  createNewUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          i => {
            console.log(i);
            resolve(i);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  signInUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          i => {
            console.log(i);
            resolve(i);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  signOut() {
    firebase.auth().signOut();
  }
}

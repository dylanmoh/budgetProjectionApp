import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  userId: string;
  email: string;

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(user => {
      this.userId = user.uid;
      this.email = user.email;
      return this.userId;
    });
  }

  register(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(user => {
      this.userId = user.uid;
      this.email = user.email;
      return this.userId;
    });
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}

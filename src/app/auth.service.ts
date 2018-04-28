import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

	user: Observable<firebase.User>;

	constructor(private firebaseAuth: AngularFireAuth) {
		this.user = firebaseAuth.authState;
	}

	signup(email: string, password: string) {
		this.firebaseAuth
			.auth.createUserWithEmailAndPassword(email, password)
			.then(value => {
				console.log('Success! ', value)
			})
			.catch(err => {
				console.log('Something went wrong: ', err)	
			});
	}

	login(email: string, password: string) {
		this.firebaseAuth
			.auth.signInWithEmailAndPassword(email, password)
			.then(value => {
				console.log('Nice work!', value)
			})
			.catch(err => {
				console.log('Something went wrong: ', err)
			});
	}

	logout() {
		this.firebaseAuth.auth.signOut();
	}

}

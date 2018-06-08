import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";
import { User } from "~/models/user.model";

@Injectable()
export class UserService {
  register(user: User) {
    return new Promise((resolve, reject) => {
      Kinvey.User.logout()
        .then(() => {
          Kinvey.User.signup(user)
            .then(resolve)
            .catch((error) => { this.handleErrors(error); reject(); })
        })
        .catch((error) => { this.handleErrors(error); reject(); })
    });
  }

  login(user: User) {
    return new Promise((resolve, reject) => {
      Kinvey.User.logout()
        .then(() => {
          Kinvey.User.login(user.email, user.password)
            .then(resolve)
            .catch((error) => { this.handleErrors(error); reject(); })
        })
        .catch((error) => { this.handleErrors(error); reject(); })
      });
  }

  resetPassword(email) {
    return Kinvey.User.resetPassword(email)
      .catch(this.handleErrors);
  }

  handleErrors(error: Kinvey.BaseError) {
    console.error(error.message);
    return error.message;
  }
}
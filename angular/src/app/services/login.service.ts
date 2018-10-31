import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { IUser } from "../models/user.model";
import { NetworkingService } from "../services/network.service";

@Injectable()
export class UserService {

  constructor(private network: NetworkingService) {
  }

  register(user: IUser) {
    const options = {
      method: "POST",
      headers: {Accepts: "application/json"}
    };

    return this.network.fetch("/signup", options, user).then((r) => r.json()).then((r) => {
      this.saveToken((r.user || {}).token);

      return r;
    });
  }

  login(user: IUser): Promise<any> {
    const options = {
      method: "POST",
      headers: {Accepts: "application/json"}
    };

    // tslint:disable-next-line:max-line-length
    return this.network.fetch("/login", options, user).then((r) => r.json()).then((r) => {
      this.saveToken((r.user || {}).token);

      return r;
    }).catch((err) => {
      console.log("error logging in:", err);

      return new Promise((reject) => {
        reject({error: err});
      });
    });
  }

  updateUser(user: IUser): Observable<any> {

    // tslint:disable-next-line:max-line-length
    return this.network.http("POST", "/account/profile", {}, user);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    let payload;

    if (token && token.length > 0) {
        payload = token.split(".")[1];
        payload = atob(payload);
        payload = JSON.parse(payload);

        return payload.exp > Date.now() / 1000;
    } else {
        console.log("NOT AUTHENTICATED!");

        return false;
    }
  }

  saveToken(token): void {
    if (token) {
      localStorage.setItem("token", token);
    }
  }

  getToken(): string {
    return localStorage.getItem("token");
  }

  getID(): string {
    let payload = localStorage.getItem("token");

    payload = payload.split(".")[1];
    payload = atob(payload);
    payload = JSON.parse(payload);

    return payload.sub + "";
  }

  getUser(): Observable<IUser> {
    return this.network.http("GET", "/account");
  }

  logout(): void {
    this.network.fetch("/logout", {
      method: "GET"
    }).then((res) => {
      localStorage.removeItem("token");
      window.location = window.location;
    }).catch((err) => {
      if (err) {
        console.log(err);
      }
    });
  }

  handleErrors(error: Error) {
    console.error(error.message);

    return error.message;
  }
}

import { Injectable } from "@angular/core";
import * as  base64 from "base-64";
import * as localStorage from "nativescript-localstorage";
import { Observable } from "rxjs";
import { IUser } from "~/models/user.model";
import { NetworkingService } from "~/services/network.service";

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
    });
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    let payload;

    if (token && token.length > 0) {
        payload = token.split(".")[1];
        payload = base64.decode(payload);
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
    payload = base64.decode(payload);
    payload = JSON.parse(payload);

    return payload.sub;
  }

  getUser(): Observable<IUser> {
    return this.network.http("GET", "/account");
  }

  logout(): void {
    this.network.fetch("/logout", {
      method: "GET"
    }).then((res) => {
      localStorage.removeItem("token");
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

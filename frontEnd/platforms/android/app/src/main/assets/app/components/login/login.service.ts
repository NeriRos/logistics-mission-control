import { Injectable } from "@angular/core";
import { User } from "~/models/user.model";

@Injectable()
export class UserService {
  private server: string = "cargo-express.co.il";

  register(user: User) {
    return fetch(`http://${this.server}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then((r) => r.json());
  }

  login(user: User) {
    return fetch(`http://${this.server}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then((r) => r.json());
  }

  isAuthenticated() : boolean {
    var token = this.getToken();
    let payload;

    if (token) {
        payload = token.split('.')[1];
        payload = window.atob(payload);
        payload = JSON.parse(payload);

        return payload.exp > Date.now() / 1000;
    } else {
        return false;
    }
  }

  saveToken(token): void {
    if (token) {
        window.localStorage['token'] = token;
    }
  }
  getToken(): string {
      return window.localStorage['token'];
  }
  logout(): void {
      window.localStorage.removeItem('token');
  }

  handleErrors(error: Error) {
    console.error(error.message);
    return error.message;
  }
}
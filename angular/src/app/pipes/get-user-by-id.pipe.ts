import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "GetUserById"
})
export class GetUserById implements PipeTransform {

  transform(value: any, users: any): any {
    for (const user of users) {
      if (user._id === value) {
          return user;
      }
    }
    return false;
  }
}

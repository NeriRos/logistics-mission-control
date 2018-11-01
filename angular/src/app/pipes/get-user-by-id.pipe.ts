import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "GetUserById"
})
export class GetUserById implements PipeTransform {

  transform(value: any, users: any, isNameOnly?: boolean): any {
    for (const user of users) {
      if (user._id === value) {
        console.log(user);
        return isNameOnly ? user.name : user;
      }
    }
    return false;
  }
}

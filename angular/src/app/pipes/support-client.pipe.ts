import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "supportClient"
})
export class SupportClientPipe implements PipeTransform {

  transform(value: any, supports: any): any {
    for (const support of supports) {
      if (support._id === value) {
          return support.client.name;
      }
    }
    return false;
  }
}

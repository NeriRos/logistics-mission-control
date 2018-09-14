import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dataToTime"
})
export class DataToTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = (typeof value === "string" ? new Date(value) : value);
    return typeof date === "undefined" ? "no date" : date.toTimeString().split(" ")[0];
  }

}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dateToTime"
})
export class DateToTimePipe implements PipeTransform {

  transform(value: any, isWithDate?: any): any {
    const date = (typeof value === "string" ? new Date(value) : value);
    let result = typeof date === "undefined" ? "no date" : date.toTimeString().split(" ")[0];

    if (isWithDate === true) {
      const yyyy = date.getFullYear();
      let dd = date.getDate(), mm = date.getMonth() + 1;

      if (dd < 10) { dd = "0" + dd; }
      if (mm < 10) { mm = "0" + mm; }

      result = `${dd}/${mm}/${yyyy} ${result}`;
    }

    return result;
  }

}

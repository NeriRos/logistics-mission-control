import { Pipe, PipeTransform } from "@angular/core";
import { CHAT_STATUS } from "../models/chat.model";

@Pipe({
  name: "statusToMark"
})
export class StatusToMarkPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let mark = "";
    const status = parseInt(value, 10);

    switch (status) {
      case CHAT_STATUS.NEW:
        mark = "";
        break;
      case CHAT_STATUS.SENT:
        mark =  "fa-check";
        break;
      case CHAT_STATUS.READ:
        mark =  "fa-check-double";
        break;
    }

    return mark;
  }
}

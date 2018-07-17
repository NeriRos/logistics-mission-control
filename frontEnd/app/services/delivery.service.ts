import { Injectable } from "@angular/core";
import { NetworkingService } from "~/services/network.service";

@Injectable()
export class DeliveryService {
    private server: string = "http://141.226.21.44:8050/baldar";

    constructor(private network: NetworkingService) {

    }

    requestStatus(deliveryNumber: number, customerCode: number) {
        return this.network.fetch(`http://${this.server}/DeliveryStatus.aspx/GetStatus`, {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify({deliveryNumber, customerCode})
        }).then((r) => r.json());
    }

    responseHandler(response) {
        if (typeof (response) === "undefined") {
            alert("אירעה תקלה, נא לפנות לתמיכה התכנית");
        } else {
            const resp = response.d;
            if (resp == null || resp === "undefined" || resp === "ERROR") {
                alert("אירעה שגיאה, נא לפנות לתמיכה התכנית");
            } else if (resp === "") {
                alert("לא נמצאו פרטים");
                 } else {
                const items = resp.split(";");

                for (const item of items) {
                    if (item.trim().length > 0) {
                        const arr = items.split("|");

                        console.log("delivery status array:", arr);
                    }
                }
            }
        }
    }
}

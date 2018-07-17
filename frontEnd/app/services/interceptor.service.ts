import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/do";
import { Observable } from "rxjs/Observable";
import { NetworkingService } from "~/services/network.service";

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private network: NetworkingService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem("token")),
            url: this.fixUrl(req.url)
        });
        const started = Date.now();

        return next.handle(clonedRequest)
            .do((event) => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                }
            });

    }

    private fixUrl(url: string) {
        if (url.startsWith("http://") || url.startsWith("https://")) {
            return url;
        } else {
            return `${this.network.server.protocol}://${this.network.server.ip}:${this.network.server.port}${url}`;
        }
    }
}

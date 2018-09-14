import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Globals } from "../shared/globals";
import "rxjs/add/operator/do";

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private globals: Globals) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newHeaders: { [name: string]: string } = { "Authorization": "Bearer " + localStorage.getItem("token") };

        for (const headerKey of req.headers.keys()) {
            newHeaders[headerKey] = req.headers.get(headerKey);
        }

        const clonedRequest = req.clone({
            headers: new HttpHeaders(newHeaders), // req.headers,
            url: this.fixUrl(req.url)
        });

        const started = Date.now();

        return next.handle(clonedRequest).do((event) => {
            if (event instanceof HttpResponse) {
                const elapsed = Date.now() - started;
            }
        });

    }

    private fixUrl(url: string) {
        if (url.startsWith("http://") || url.startsWith("https://")) {
            return url;
        } else {
            return `${this.globals.server.uri}${url.startsWith("/") ? url : "/" + url }`;
        }
    }
}

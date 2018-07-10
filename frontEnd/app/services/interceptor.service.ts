import { Injectable, Injector } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpResponse } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { UserService } from "~/services/login.service";
import { NetworkingService } from "~/services/network.service";
import 'rxjs/add/operator/do';

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private network: NetworkingService) {
    }


    private fixUrl(url: string) {
        if (url.startsWith("http://") || url.startsWith("https://"))
            return url;
        else
            return `${this.network.server.protocol}://${this.network.server.ip}:${this.network.server.port}${url}`;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token')),
            url: this.fixUrl(req.url)
        });

        const started = Date.now();
        return next.handle(clonedRequest)
            .do(event => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                }
            });

    }
}
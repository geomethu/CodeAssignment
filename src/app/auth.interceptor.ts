import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25fdXVpZCI6ImI4NDdlNjFmLWRkMWYtNDM4YS05ZmQ3LTM5YzcwMmY4YTNkNiIsInVzZXJuYW1lIjoidG9sYSIsInJvbGUiOiJTdXBlclVzZXIiLCJleHAiOjE1NDMzMjY4OTgsImlzcyI6ImFjdGl2aXR5YXBpIiwiaWF0IjoxNTQzMjkwODk4LCJ1c2VyX3V1aWQiOiI3YTI3NmI2MS02MmQ3LTRjMDQtYmMyZi0yZGQzMmZjMGIxNmMifQ.y6H_vulITiTz3G3HXB2ukRVshgBpDFrNZMX7CReLfuo9V_xZPSgI4KYAaxTVPkcQeLeigGzAe5kpt64LQRy475KJJ2qwiWSx7C0aYsnkoocXzENI0zndavhva6vFOCRvjlF29grqlYQGTKrsDzxbF-e_DCiqKylHWfk8d8zWdJLST4vhX8wGD4cCugDU2mUtcdIxSyhe6U06h18mWURIoQrgz4IcUUtXUGJNz8tFha2EbyNrDBKU_aAraLQqzj6xqamV0gjQL0-7lPymVRuyvYOSHTCaWfgIO42z0WHsnhkUGySBDEZELEWu9nxzMY5LQia7FW-gDevoU8B2WTFdRg';

        req = req.clone({
            setHeaders: {
                Authorization: `JWT ${accessToken}`
            }
        });

        return next.handle(req);
    }
}

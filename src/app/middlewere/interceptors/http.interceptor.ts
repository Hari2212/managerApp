import { HttpClient, HttpInterceptorFn } from '@angular/common/http';
import { ApicallsService } from '../../dashboard/services/apicalls.service';
import { inject } from '@angular/core';
export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log("Printing interceptor is their");
    const apiCalls = inject(ApicallsService);
   const userDetails = apiCalls.getToken;
    let tokn = userDetails.token;
    if(tokn){
      req = req.clone({
        setHeaders : {
          "Authorization" : tokn
        }
      })
    }
    return next(req);
};

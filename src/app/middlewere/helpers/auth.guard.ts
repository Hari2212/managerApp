import { CanActivateFn, Router } from '@angular/router';
import { ApicallsService } from '../../dashboard/services/apicalls.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const apiCalls = inject(ApicallsService);
   const userDetails = apiCalls.getToken;
    let tokn = userDetails.token;
    if(tokn){
      return true;
    }else{
      const router = inject(Router);
      router.navigate(['']);
      return false;
    }
};

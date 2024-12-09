import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './middlewere/interceptors/http.interceptor';
import { provideToastr } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideToastr({
      timeOut : 2000,
      positionClass : 'toast-top-center',
      preventDuplicates: true
    }),
    // BrowserAnimationsModule
  ]
};

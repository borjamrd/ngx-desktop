import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

export const appConfig: ApplicationConfig = {
  providers: [

    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        // subscriptSizing: 'dynamic',
        appearance: 'outline'
      }
    },
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),

  ],
};

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private apiUrl = 'https://mock-api.local'; // replace with real env later

  getApiUrl(): string {
    return this.apiUrl;
  }
}

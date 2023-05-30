import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpInfoService {
  private apiUrl = 'https://neutrinoapi-ip-info.p.rapidapi.com/ip-info';
  private rapidApiKey = 'YOUR_RAPIDAPI_KEY';

  constructor(private http: HttpClient) {}

  getIpInfo(ipAddress: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': this.rapidApiKey,
    });

    const body = `ip=${ipAddress}`;

    return this.http.post(this.apiUrl, body, { headers });
  }
}

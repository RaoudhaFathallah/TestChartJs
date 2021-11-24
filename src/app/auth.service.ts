import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Posts1 } from './posts1';
const apiKey = 'coinrankingc032026f93e3b94c047c89523ca837327c4dac81e1070686';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-My-Custom-Header': `${apiKey}`,
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }
  url: string ="http://localhost:3000/posts";
  getPosts(){
    return this.http.get<Posts1[]>(this.url);
  }
}
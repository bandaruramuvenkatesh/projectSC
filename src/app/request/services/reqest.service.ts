import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private BASE_URL = 'http://localhost:8080/api/v1/requests';

  constructor(private client: HttpClient) {}

  list() {
    return this.client.get(this.BASE_URL);
  }

  get(id: string) {
    return this.client.get(`${this.BASE_URL}/${id}`);
  }

  create(request: any) {
    return this.client.post(this.BASE_URL, request);
  }

  update(request: any) {
    return this.client.patch(`${this.BASE_URL}`, request);
  }

  delete(id: string) {
    return this.client.delete(`${this.BASE_URL}/${id}`);
  }
}

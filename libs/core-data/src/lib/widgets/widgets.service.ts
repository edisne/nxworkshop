import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Widget } from '@nxworkshp/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class WidgetsService {
  model = 'widgets';
  apiEndpoint = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Widget[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Widget>(this.getUrlWithId(id));
  }

  create(widget: Widget) {
    return this.http.post<Widget>(this.getUrl(), widget);
  }

  update(widget: Widget) {
    return this.http.put<Widget>(this.getUrlWithId(widget.id || ''), widget);
  }

  delete(widget: Widget) {
    return this.http.delete<Widget>(this.getUrlWithId(widget.id || ''));
  }

  private getUrl() {
    return `${this.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}

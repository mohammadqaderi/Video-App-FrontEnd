import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Video } from './video';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/api/videos/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error:' + errorResponse.error.message);
      console.error('Server Side Error:' + errorResponse);
    } else {
      return throwError(
        'There is a problem with a service, we are working on it, please try again later'
      );
    }
  }
  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.url).pipe(catchError(this.handleError));
  }
  getVideoById(id): Observable<any> {
    let urlById = `${this.url}/videos/${id}`;
    return this.http.get(urlById, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  addVideo(video: Video): Observable<Video> {
    return this.http
      .post<Video>(this.url, video)
      .pipe(catchError(this.handleError));
  }

  updateVideo(video: Video): Observable<Video> {
    return this.http
      .put<Video>(this.url + video._id, JSON.stringify(video), { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  deleteVideo(video: Video): Observable<Video> {
    return this.http
      .delete<Video>(this.url + video._id,{headers: this.headers})
      .pipe(catchError(this.handleError));
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/internal/operators';
import {throwError} from 'rxjs';

@Injectable()
export class CommonService {
  baseUrl = 'https://developers.zomato.com/api/v2.1/';
  apiKey = '91034de3196645428ac94afcbfbdc099';

  static isPalindrome(sentence1, sentence2?) {
    const wordToCompare = sentence2 ? sentence2 : sentence1;
    return sentence1 && wordToCompare === wordToCompare.split('').reverse().join('');
  }

  constructor(private http: HttpClient) { }

  getHeader() {
    return new HttpHeaders().set('user-key', this.apiKey);
  }

  getRestaurants() {
    const headers = this.getHeader();
    return this.http.get(this.baseUrl + 'establishments?city_id=302', {headers})
      .pipe(map((el: any) => el.establishments));
  }

  getRestaurant(id) {
    const headers = this.getHeader();
    return this.http
      .get(this.baseUrl + 'restaurant?res_id=' + id, {headers})
      .pipe(
        map(res => res),
        catchError(() => {
          return throwError({ success: false });
        }));
  }
}

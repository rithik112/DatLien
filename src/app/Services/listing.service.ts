import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private _listingUrl = "http://localhost:3000/api/listings";
  private _royalListingUrl = "http://localhost:3000/api/royal";

  constructor(private http: HttpClient) { }
  
  getListings() {
    return this.http.get<any>(this._listingUrl)
  }

  getRoyalListings() {
    return this.http.get<any>(this._royalListingUrl)
  }

}

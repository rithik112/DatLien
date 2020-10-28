import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../Services/listing.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-royal',
  templateUrl: './royal.component.html',
  styleUrls: ['./royal.component.scss']
})
export class RoyalComponent implements OnInit {

  royalListings = []

  constructor(private _listingService: ListingService,
    private _router: Router) { }

  ngOnInit() {
    this._listingService.getRoyalListings()
      .subscribe(
        res => this.royalListings = res,
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )
  }

}

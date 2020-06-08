import { Component, OnInit } from '@angular/core';

// import { interval } from 'rxjs';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  squareOdd = of(1, 2, 3, 4, 5)
    .pipe(
      filter(n => n % 2 !== 0),
      map(n => n * n)
    );

    constructor() {
  }

  ngOnInit(): void {
      this.squareOdd.subscribe(x => console.log(x));
  }


}

   // secondsCounter = interval(1000);
  //   this.secondsCounter.subscribe(n =>
  //     console.log(`It's been ${n} seconds since subscribing!`));
  // }



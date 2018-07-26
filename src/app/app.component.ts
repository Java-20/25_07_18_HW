import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = '';
  date: string = '';
  arr: Item[] = [];
  rmIndex: number = -1;

  add(): void {
    this.arr.push({
        title: this.title,
        date: this.date
      }
    );
    this.title = '';
    this.date = '';
  }

  remove(indx:number): void{
    this.rmIndex = indx;
    setTimeout(() => {
      this.arr.splice(indx,1);
      this.rmIndex = -1;
    },1000);

  }
}

type Item = {
  title: string,
  date: string
}

import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Pipe({
  name: 'characters'
})
export class CharactersPipe implements PipeTransform {

  private data: any = null;
  private isLoading: boolean = false;

  constructor(private http: HttpClient) { }

    transform(args: any): any {
    this.isLoading = true;

    let arr:any[] = [];

      for (let key in args) {
        if(args[key]){

          let str = args[key];
          let eal = str.split("/");
          let num = eal[5];

          console.log(args[key]);

      this.http.get(args[key]).subscribe(result => {
        // You could also cache your result

        this.data = result;

        let item = {"id": num, "name": this.data.name};
        arr.push(item);
      },
        err => console.error(err), () => {console.log('complete')});
    }
    }
      return arr;
  }
}

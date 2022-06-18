import { Pipe, PipeTransform } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Pipe({
  name: 'planets'
})
export class PlanetsPipe implements PipeTransform {

  private data: any = null;

  constructor(private http: HttpClient) { }

  transform(args: any): any {

    let arr:any[] = [];

    console.log(args);

        let eal = args.split("/");
        let num = eal[5];
        console.log(num)

        this.http.get(args).subscribe(result => {
          this.data = result;
          console.log(this.data.name, this.data);
          return this?.data?.name;
        });

  }

}

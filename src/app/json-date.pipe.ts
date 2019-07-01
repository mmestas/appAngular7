import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonDate'
})
export class JsonDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var re = /\/Date\(([0-9]*)\)\//;
    var neg = /\/Date\(\-([0-9]*)\)\//;
    if(value) {
      var m = value.match(re);
      var n = value.match(neg);
      if( m ) {value = new Date(parseInt(m[1], 10));}
      if( n ) {
        n = -n[1]
        value = new Date(parseInt(n, 10));
      }
      else return value;
    }
    return value;

  }

}

import { Pipe, PipeTransform, Injectable } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({
    name: 'filter'
  })
  @Injectable()
  export class FilterPipe implements PipeTransform {
    transform(values: any[], key: string, value: string): any[] {
        if (!values) {
            return [];
        }
        if (!key || !value || value == 'All') {
            return values;
        }

    return values.filter(val=>
        val[key].toLowerCase().includes(value.toLowerCase())
    );
  }
}

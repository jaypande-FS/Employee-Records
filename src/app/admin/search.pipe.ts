import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(value: Employee[], searchterm:string): Employee[] {
    console.log(value);
    if(!value || !searchterm){
      return value;
    }
    else{
      return value.filter(data=>
        data.name.toLocaleLowerCase().includes(searchterm.toLocaleLowerCase()));
    }
  }
}

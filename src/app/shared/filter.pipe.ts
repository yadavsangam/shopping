import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : any[], filterString: string, propName:any): any {
    const result:any =[];
    if(!value || filterString==='' || propName ===''){
      // ====
      if(!value){
        return [];
      }
      // ====
      console.log(propName);
      return value;
    }
    
    value.forEach((a:any)=>{
      console.log(a)
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        console.log(a);
        result.push(a);
      }
    });
    return result;
  }
}


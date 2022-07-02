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
      return value;
    }
    
    value.forEach((a:any)=>{
      console.log(a)
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }
}


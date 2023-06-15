import { Pipe, PipeTransform } from "@angular/core";

// jose | toggleCase  = 'JOSE'
// JOSE | toggleCase  = 'jose'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform( value: string, toUpper: boolean = false ): string {

    return ( toUpper )
      ? value.toUpperCase()
      : value.toLowerCase();
  }
}

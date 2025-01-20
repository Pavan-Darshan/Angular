import { Pipe,PipeTransform } from "@angular/core";


@Pipe({
    name:"multipleOfTen",
})
export class TempConvertor implements PipeTransform{
    transform(value: any, ...args: any[]) {

        return value*10;
    }

}
import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector:'[ttClass]',
   
})
export class ttClassExport implements OnInit{

    @Input() ttClass?:string;
    constructor(private el:ElementRef){}
    ngOnInit(){
        this.el.nativeElement.classList.add(this.ttClass);
    }
}
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicAttr]'
})
export class BasicAttrDirective implements OnInit{
  
  constructor(private elementRef : ElementRef) { }

  ngOnInit(){
    this.elementRef.nativeElement.style.background="green";
    this.elementRef.nativeElement.style.color="white";
  }

}

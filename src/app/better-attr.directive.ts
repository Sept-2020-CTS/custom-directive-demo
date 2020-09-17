import { Directive, Input, ElementRef, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterAttr]'
})
export class BetterAttrDirective implements OnInit {

  @Input() defaultColor : string = 'transparent';
  @Input('appBetterAttr') highlightColor : string;
  
  //@HostBinding Its binding to the host i.e the P
  //'style.backgroundColor' -> attach or update this value
  @HostBinding('style.backgroundColor') backgroundColor : string;

  constructor(private elementRef : ElementRef) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

  //OnMouseEnter add the highlight
  @HostListener('mouseenter') mouseIn (eventData : Event){
    this.backgroundColor = this.highlightColor;
    //this.elementRef.nativeElement.style.background= this.highlightColor;
  }

  //OnMouseExit remove the highlight
  @HostListener('mouseleave') mouseOut (eventData : Event){
    console.log(this.defaultColor);
    this.backgroundColor = this.defaultColor;
  }

}

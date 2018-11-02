import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) {

   }

   @HostListener('mouseover') over(){
     this.renderer.addClass(this.el.nativeElement,'rotate');
    console.log("Mouse Hover Called");
    console.log(this.el.nativeElement);
   }

   @HostListener('mouseout') out(){
    this.renderer.removeClass(this.el.nativeElement,'rotate');
    console.log("Mouse Out Called");
    console.log(this.el.nativeElement);
   }

}

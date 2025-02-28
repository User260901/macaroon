import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[CoolButton]'
})
export class CoolButtonDirective implements OnInit{



  @Input() CoolButtonDefaultBgColor: string = 'rgb(130, 19, 40)'
  @Input() CoolButtonHoverBgColor: string = 'rgb(220,113,134)'


  constructor(private el:ElementRef, private ren: Renderer2) {

  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.changeColor(this.CoolButtonHoverBgColor)
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.changeColor(this.CoolButtonDefaultBgColor)
  }


  changeColor(color:string){
    this.ren.setStyle(this.el.nativeElement, 'background-color', color)
  }

  ngOnInit() {
    this.changeColor(this.CoolButtonDefaultBgColor);
  }
}

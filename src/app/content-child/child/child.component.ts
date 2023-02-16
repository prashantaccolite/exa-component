import { Component, ContentChild, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @ContentChild('childcon') childPara!:ElementRef;

  constructor(private rendrer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    // ngAfterContentInit
    this.rendrer.setStyle(this.childPara.nativeElement, 'backgroundColor', 'red');
    console.log('this.childPara', this.childPara);
  }

}

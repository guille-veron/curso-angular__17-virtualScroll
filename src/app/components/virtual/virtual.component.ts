import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport?: CdkVirtualScrollViewport;

  personas = Array(500).fill(0);
  constructor() { }

  ngOnInit(): void {
  }
  irFinal(){
    this.viewport?.scrollToIndex(this.personas.length);
  }
  irMitad(){
    this.viewport?.scrollToIndex(this.personas.length / 2);
  }
  irInicio(){
    this.viewport?.scrollToIndex(0);
  }
}

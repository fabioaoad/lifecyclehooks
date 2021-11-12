import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck,
                                        AfterContentInit, AfterContentChecked,
                                      AfterViewInit, AfterViewChecked, OnDestroy{

  constructor() {
    console.log('Disparo el: constructor');
  }

  ngOnInit(): void {
    console.log('Disparo el: ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Disparo el: ngOnChanges')
  }

  ngAfterContentChecked(): void {
    console.log('Disparo el: ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('Disparo el: ngAfterContentInit')
  }

  ngAfterViewChecked(): void {
    console.log('Disparo el: ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log('Disparo el: ngAfterViewInit')
  }

  ngDoCheck(): void {
    console.log('Disparo el: ngDoCheck')
  }

  ngOnDestroy(): void {
    console.log('Disparo el: ngOnDestroy')
  }

}

import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck,
                                        AfterContentInit, AfterContentChecked,
                                      AfterViewInit, AfterViewChecked, OnDestroy{

  nombre            : string = 'Fabio Aoad';
  segundos          : number = 0;
  timerSubscription!: Subscription;

  constructor() {
    console.log('Disparo el: constructor');
  }

  ngOnInit(): void {
    console.log('Disparo el: ngOnInit');
    this.timerSubscription = interval(1000).subscribe( i =>{
      //console.log(i);
      this.segundos = i;
    });
  }

  ngAfterContentChecked(): void {
    console.log('Disparo el: ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('Disparo el: ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('Disparo el: ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('Disparo el: ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('Disparo el: ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('Disparo el ngOnDestroy de pagina1');
    this.timerSubscription.unsubscribe();
    console.log('Timer Limpiado');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Disparo el: ngOnChanges');
  }

  guardar(){}

}

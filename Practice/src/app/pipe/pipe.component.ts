import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempConvertor } from './pipe.custom';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule,TempConvertor],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {


Date : Date =new Date();
upper = "uppercase Example";
sl ="Slice pipe example";
num: number= 9542.14554;
per =.798795;

obj = {
  c: 123,
  a: 789,
  1: 456,
};
 
 
mapObj = new Map([
   ['c', 123],
   ['b', 446],
   ['a', 789],
]);

}

import { Component, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeTestComponent } from './some-test.component';
import { timer } from 'rxjs';

@Component({
  standalone: true,
  selector: 'some-example',
  imports: [CommonModule, forwardRef(() => SomeTestComponent)],
  template: `
  <div>
  <div>I am ExampleComponent. SomeTest:</div>
  <ng-container *ngIf="render|async">
   <some-test/>
   </ng-container>
   </div>
   `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent {
  protected readonly render = timer(500);
  @Input() expanded = false;
}

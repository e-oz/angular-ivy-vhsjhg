import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';

@Component({
  standalone: true,
  selector: 'some-test',
  imports: [CommonModule, ExampleComponent],
  template: `
  <div>A am SomeTestComponent. Example: 
  <ng-container *ngFor="let i of range">
   <some-example/>
  </ng-container>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SomeTestComponent {
  protected readonly range = [1];
  @Input() expanded = false;
}

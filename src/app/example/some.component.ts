import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeTestComponent } from './some-test.component';

@Component({
  standalone: true,
  selector: 'some-thing',
  imports: [CommonModule, SomeTestComponent],
  template: `I am parent component of SomeTestComponent: <some-test/>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SomeComponent {}

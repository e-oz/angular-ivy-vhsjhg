import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeTestComponent } from './some-test.component';
import { Subject } from 'rxjs';

@Component({
  standalone: true,
  selector: 'some-example',
  imports: [CommonModule, SomeTestComponent],
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
  protected readonly render = new Subject<boolean>();
  @Input() expanded = false;

  ngOnInit() {
    this.render.next(true);
  }
}

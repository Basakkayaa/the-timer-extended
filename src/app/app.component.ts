import { Component, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'timer';

  @ViewChild(CountdownTimerComponent, { static: true })
  _countdownComponent: CountdownTimerComponent;

  calculate(input: HTMLInputElement) {
    this._countdownComponent.onButtonClick(input);
  }
}

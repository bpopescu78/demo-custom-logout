import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'generic-countdown-timer',
  styleUrl: 'generic-countdown-timer.css',
  shadow: true,
})
export class GenericCountdownTimer {

  @Prop({attribute: "time", mutable: true, reflect: true}) remainingTime = "0"
  @Watch('remainingTime')
  remainingTimeHandler() {
    this.countdown()
  }

  @Prop() formatTimeCallback = (timeInMilliSeconds: number) => `${timeInMilliSeconds} seconds`

  timeoutHandler = null

  countdown() {
    clearTimeout(this.timeoutHandler)
    this.timeoutHandler = setTimeout(() => {
      const remainingTime = parseInt(this.remainingTime) - 1000

      this.remainingTime = remainingTime > 0 ? String(remainingTime) : "0"
    }, 1000)
  }

  render() {
    return (
      <Host>
        {this.formatTimeCallback(parseInt(this.remainingTime))}
      </Host>
    );
  }

}

import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'generic-user-inactivity',
  shadow: false,
})
export class GenericUserInactivity {

  @Prop({attribute: "time"}) iniactivityTimeInMilliseconds: string
  @Prop() whenInactiveCallback = () => null
  @Prop() whenActiveCallback = (remainingTime) => remainingTime
  @Prop() events = ['mousemove', 'keydown']

  lastActivity = +new Date()

  resetActivity() {
    this.lastActivity = +new Date()
    this.whenActiveCallback(this.iniactivityTimeInMilliseconds)
  }

  checkInactivity() {
    const timeSinceLastActivity = +new Date() - this.lastActivity
    const remainingInactivityTime = parseInt(this.iniactivityTimeInMilliseconds) - timeSinceLastActivity

    if (remainingInactivityTime > 0) {
      setTimeout(this.checkInactivity.bind(this), remainingInactivityTime)
    } else {
      this.whenInactiveCallback()
    }
  }

  componentWillLoad() {
    this.events.forEach(event => document.addEventListener(event, this.resetActivity.bind(this)))

    this.checkInactivity()
  }
}

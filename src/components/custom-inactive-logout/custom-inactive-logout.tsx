import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-inactive-logout',
  shadow: true,
})
export class CustomInactiveLogout {

  @Prop({attribute: "time"}) logoutTimeInMilliseconds: string


  whenActiveHandler(remainingTime: string) {
    document.querySelector('generic-countdown-timer').setAttribute("time", remainingTime)
  }

  whenInactiveHandler() {
    console.log('whenInactiveHandler called')

    window.location.href = '/?logout'
  }

  formatTimeHandler(timeInMilliSeconds: number) {
    const timeInSeconds = Math.floor(timeInMilliSeconds/1e3)

    const seconds = timeInSeconds % 60
    const timeInMinutes = Math.floor(timeInSeconds / 60)

    const minutes = timeInMinutes % 60
    const timeInHours = Math.floor(timeInMinutes / 60)

    return `${`0${timeInHours}`.substr(-2)}h : ${`0${minutes}`.substr(-2)}m : ${`000${seconds}`.substr(-2)}s`
  }

  componentWillLoad() {
    (async () => {
      await customElements.whenDefined('generic-countdown-timer')
      const element = document.querySelector('generic-countdown-timer')
      element.remainingTime = this.logoutTimeInMilliseconds
      element.formatTimeCallback = this.formatTimeHandler
    })()
  }

  render() {
    return window.location.href.indexOf('?logout') > -1
      ? <span>Logged out. Click <a href="/">here</a> to return to previous page.</span>
      : [<generic-user-inactivity
            iniactivityTimeInMilliseconds={this.logoutTimeInMilliseconds}
            whenInactiveCallback={this.whenInactiveHandler}
            whenActiveCallback={this.whenActiveHandler}>              
            </generic-user-inactivity>,
          <slot></slot>
        ]
  }

}

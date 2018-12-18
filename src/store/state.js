import { observable, action } from 'mobx'

class State {

  @observable count = 90

  @action addCount(count) {
    this.count = count
  }

  @action resetCount() {
    this.count = 1
  }
}

export default State

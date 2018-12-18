import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react/native'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Button from 'teaset/components/Button/Button'
import StateObj from './src/store/state'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n'
  + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

@inject('State')
@observer
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 14
    }
  }

  componentDidMount() {
    setInterval(() => {
      const { State } = this.props
      State.resetCount()
    }, 1000)
  }

  handleNum = () => {
    this.setState({ num: 123 })
  }

  render() {
    const { State } = this.props
    const { num } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text>{State.count}</Text>
        <Text>{num}</Text>
        <View>
          <Button title="Primary" type="primary" onPress={this.handleNum} />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

App.propTypes = {
  State: PropTypes.objectOf(StateObj).isRequired
}

export default App

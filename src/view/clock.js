import React, { Component } from 'react';
import { View,Text, Button } from 'react-native';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secs: 60,
      started: false
    };
    this.timer = null;
    this.startTimer = this.startTimer.bind(this);
    this.countdown = this.countdown.bind(this);
  }

  countdown() {
    this.setState({ secs: this.state.secs - 1});
  }

  startTimer() {
      alert('hello');
    const { started } = this.state;
    if (!started) {
      this.timer = setInterval(this.countdown, 1000);
      this.setState({ started: true });
    }
    else {
      clearInterval(this.timer);
      this.setState({ started: false });
    }
  }

  render() {
    const { secs } = this.state;
    console.log('secs:', secs)
    console.log('started:', this.state.started);
    return (
        <View>
            <Button onPress={this.startTimer} title="start"></Button>            
            <Text>{this.props.session}:{secs == 60 ? '00': secs}</Text>
        </View>
    //   <div className='timer' onClick={this.startTimer}>
    //     <h2>Session</h2>
    //     <h1>{this.props.session}:{secs == 60 ? '00': secs}</h1>
    //   </div>
    );
  }
}

export default Timer;
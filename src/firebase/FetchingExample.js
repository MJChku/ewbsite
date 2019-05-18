import React, { Component } from 'react'
import { withFirebase } from './FirebaseContext'
class FetchingExample extends Component {
  state = {
    test: null,
  }
  componentDidMount() {
    const { firebase } = this.props
    firebase
      .db
      .ref('/test')
      .once('value')
      .then(snapshot => {
        this.setState({
          test: snapshot.val(),
        })
      })
  }
  render() {
    const { test } = this.state

    if (!test) {
      return null
    }

    return (
        <p>string test data : {test}</p>
    )
  }
}

export default withFirebase(FetchingExample)

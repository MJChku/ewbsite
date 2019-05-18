import React, { Component } from 'react'
//import Firebase from './firebase'
import getFirebase from './firebase'
import FirebaseContext from './FirebaseContext'


class Fire extends Component {
  state = {
    firebase: null,
  }

  componentDidMount() {
    const app = import('@firebase/app')
    const auth = import('@firebase/auth')
    const database = import('@firebase/database')

    Promise.all([app,auth, database]).then(values => {
      const firebase = getFirebase(values)
      this.setState({ firebase })
    //
    //   firebase.auth().onAuthStateChanged(user => {
    //     if (!user) {
    //       this.setState({ authenticated: false })
    //     } else {
    //       this.setState({ authenticated: true })
    //     }
    //   })
     })
  }

  render = () => {
    const { firebase} = this.state

    if (!firebase) return null

    return (
      <FirebaseContext.Provider value={firebase}>
        {this.props.children}
      </FirebaseContext.Provider>
    )
  }
}

export default Fire

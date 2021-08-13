import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Memory from './pages/memory/Memory'

// import styles from './App.module.css'

const App = () => {
  


  return (
      <Fragment>
      <Header />
      <Switch>
        <Route path='/' component={Memory}/>
      </Switch>
      </Fragment>

  )  

}
export default App
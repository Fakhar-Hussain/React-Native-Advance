import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import MyStore from './Screens/Redux/ReduxStore'
// import Main from './Screens/Redux/Main'
import Main from './Screens/ReactFilter/Main'



const App = () => {
  return (
    <Provider store={MyStore}>
      <Main/>
    </Provider>
  )
}

export default App
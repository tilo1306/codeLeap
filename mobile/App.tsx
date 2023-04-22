import theme from '@theme/index'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { ThemeProvider } from 'styled-components/native'
import { Routes } from '@routes/index'
import { StatusBar } from 'react-native'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </Provider>
    </ThemeProvider>
  )
}

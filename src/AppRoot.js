import React, { Suspense } from 'react'
import { View } from 'react-navi'
import { MasterRouter } from './pages/MasterRouter.jsx'
import { Layout } from './components/Layout.jsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme.js'

export const AppRoot = ({ navigation }) => {
  return (
    <ThemeProvider theme={theme}>
      <MasterRouter>
        <Layout>
          <Suspense fallback={null}>
            <View />
          </Suspense>
        </Layout>
      </MasterRouter>
    </ThemeProvider>
  )
}

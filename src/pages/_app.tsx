import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { ModalProvider } from 'hooks/useModal'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import { makeServer } from 'lib/mirage'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Head>
          <title>EduSynch</title>
          <link rel="shortcut icon" href="/img/icon-2.png" />
          <link rel="apple-touch-icon" href="/img/icon-2.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <meta
            name="description"
            content="A simple project with a Landing Page and Dashboard to EduSynch frontend challenge."
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ModalProvider>
    </ThemeProvider>
  )
}

export default App

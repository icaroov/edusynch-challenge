import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>EduSynch</title>
        <link rel="shortcut icon" href="/img/icon-2.png" />
        <link rel="apple-touch-icon" href="/img/icon-2.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project with a Landing Page and Dashboard to EduSynch frontend challenge."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

import { appWithTranslation } from 'next-i18next'
import App, { AppContext, AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return    <Component {...pageProps} />
  
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(MyApp)
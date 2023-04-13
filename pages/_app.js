import '../styles/globals.css'
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css"
import { Provider } from 'react-redux'
import store from '@/redux/store'

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
       <Component {...pageProps} />
    </Provider>
  ) 
}

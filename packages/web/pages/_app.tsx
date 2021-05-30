import '../styles/globals.css'
import { EditorContext, EditorContextProvider } from '../hooks/editor-context'

function MyApp({ Component, pageProps }) {
  return (
    <EditorContext.Provider value={EditorContextProvider()}>
      <Component {...pageProps} />
    </EditorContext.Provider>
  )
}

export default MyApp

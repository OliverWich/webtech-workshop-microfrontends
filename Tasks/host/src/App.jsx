import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

// Nutze Lazy Loading für die Komponenten Header und Content anstatt sie direkt zu importieren
const LazyHeader = lazy(() => import ('header/Header'))
const LazyContent = lazy(() => import ('content/Content'))

const App = () => (
    // Füge ein Suspense-Element um die Komponenten Header und Content hinzu
    <Suspense fallback={<div>Loading...</div>}>
        <LazyHeader/>
        <LazyContent/>
    </Suspense>
)
ReactDOM.createRoot(document.getElementById('app')).render(<App/>)

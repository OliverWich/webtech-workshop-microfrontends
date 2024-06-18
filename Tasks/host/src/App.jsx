import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import Header from 'header/Header'
import Content from 'content/Content'

const App = () => (
    <>
        <Header/>
        <Content/>
    </>
)
ReactDOM.render(<App/>, document.getElementById('app'))

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Search from './pages/search.js'
import CreateDocuments from './pages/createDocuments.js'
import Addcase from './pages/addcase'
import SystemMaintenance from './pages/systemMaintenance.js'
import Settings from './pages/settings.js'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='search' element={<Search />} />
        <Route path='addcase' element={<Addcase />} />
        <Route path='createDocuments' element={<CreateDocuments />} />
        <Route path='systemMaintenance' element={<SystemMaintenance />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

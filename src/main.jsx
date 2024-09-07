import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
<<<<<<< HEAD
import { AuthProvider } from './components/Contexts/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
=======

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
>>>>>>> a15729691886a11a600d094604c998dad4a4dcda
  </React.StrictMode>,
)

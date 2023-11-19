import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import 'simplebar-react/dist/simplebar.min.css'
import 'flatpickr/dist/themes/light.css'
import '../src/assets/scss/app.scss'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import '../src/18n'
import Loading from "@/components/Loading";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <BrowserRouter>
        <ToastContainer />
        <Suspense fallback={<Loading/>}>
          <App />
        </Suspense>
    </BrowserRouter>
  </>
)

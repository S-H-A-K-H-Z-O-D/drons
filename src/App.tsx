import {lazy} from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from "@/pages/dashboard/Dashboard";

const Layout = lazy(() => import('@/layout/Layout'))
const Login = lazy(() => import("@/components/login/Login"))


function App() {
  return (
    <main className='App font-sora   scientech_webkit overflow-x-hidden'>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/dashboard/:id' element={<Dashboard/>} />
      </Routes>
    </main>
  )
}

export default App

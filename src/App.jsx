import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import MainLayout from './layouts/MainLayout'

function App() {

  return (
    <BrowserRouter>
      <MainLayout>
        <Router />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App

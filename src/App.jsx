import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import RegistroAnimales from './pages/RegistroAnimales'
import Solicitudes from './pages/Solicitudes'
import { AuthProvider }from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  return (
      <AuthProvider>
       <Routes>
        <Route path='' element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
        }/>
        <Route path='/mascotas' element={
        <ProtectedRoute>
          <RegistroAnimales />
        </ProtectedRoute>
        }/>
        <Route path='/solicitudes' element={
        <ProtectedRoute>
          <Solicitudes />
        </ProtectedRoute>        
        }/>
        <Route path='/login' element={<Login />}/>
       </Routes>
      </AuthProvider>
  )
}

export default App

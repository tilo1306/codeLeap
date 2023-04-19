import { Route, Routes } from 'react-router-dom'
import { MainScreen } from '../pages/MainScreen'
import { SignUp } from '../pages/SignUp'
import { Load } from '../pages/Load'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Load />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mainscreen" element={<MainScreen />} />
    </Routes>
  )
}

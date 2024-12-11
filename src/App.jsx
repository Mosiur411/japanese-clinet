import { Route, Routes } from "react-router"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import LassonsPage from "./pages/landing/lessons/Lessons"
import TutorialPage from "./pages/landing/tutorials/Tutorials"


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/lessons" element={<LassonsPage/>} />
        <Route path="/tutorials" element={<TutorialPage/>} />
      </Routes>
    </>
  )
}

export default App

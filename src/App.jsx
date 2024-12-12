import { Route, Routes } from "react-router"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import LassonsPage from "./pages/landing/lessons/Lessons"
import TutorialPage from "./pages/landing/tutorials/Tutorials"
import UserAuthCheck from "./components/hooks/UserAuthCheck"
import Spinner from "./components/shared/Spinner"
import PrivetRoute from "./components/routes/PrivetRoute"
import NotFound from "./pages/notFound"
import LessonsPageDash from "./pages/dashboard/lessons"

function App() {
  const authchek = UserAuthCheck();



  return (
    <>
      <Routes>
        {/* <Route path="/lessons" element={<LassonsPage />} /> */}
        {/* <Route path="/*" element={<PrivetRoute />}>
         
        </Route> */}
        {/* dashboard layout and handel  */}
        <Route path="/lessons" element={<LessonsPageDash />} />





        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tutorials" element={<TutorialPage />} />
        <Route path="/" element={<TutorialPage />} />
        <Route path="/404" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App

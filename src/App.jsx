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
import UserPageDash from "./pages/dashboard/users"
import VocabularyPageDash from "./pages/dashboard/vocabulary"
import TutorialPageDash from "./pages/dashboard/tutorials"
import OnlyAdminRoute from "./components/routes/OnlyAdminRoute"

import SingleLessonsPage from "./pages/landing/lessons/singleLessons"

function App() {
  const authchek = UserAuthCheck();


  
  return (
    <>
      <Routes>
        {/*  */}
        <Route path="/*" element={<PrivetRoute />}>
          {/* user */}
          <Route path="lessons" element={<LassonsPage />} />
          <Route path="lessons/:id" element={<SingleLessonsPage />} />
          {/* dashboard*/}
          <Route path="/*" element={<OnlyAdminRoute />}>
            <Route path="lesson-manage" element={<LessonsPageDash />} />
            <Route path="dashboard" element={<UserPageDash />} />
            <Route path="user-manage" element={<UserPageDash />} />
            <Route path="vocabulary-manage" element={<VocabularyPageDash />} />
            <Route path="tutorial-manage" element={<TutorialPageDash />} />
          </Route>
        </Route>
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

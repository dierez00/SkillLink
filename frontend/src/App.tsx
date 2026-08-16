import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/common/DefaultLayout";
import ProtectedRoute from "./components/features/auth/ProtectedRoute";
import CourseDetails from "./components/features/courses/CourseDetails";
import CourseLesson from "./components/features/courses/CourseLesson";
import MyLearning from "./components/features/learning/MyLearning";
import { CoursesPage } from "./pages/CoursesPage";
import CreateAcount from "./pages/CreateAcount";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./components/features/auth/ForgotPassword";
import ResetPassword from "./components/features/auth/ResetPassword";
import DesafioList from "./components/features/desafios/DesafioList";
import ProjectList from "./components/features/proyectos/ProjectList";
import MyProfile from "./components/features/profile/MyProfile";

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAcount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Rutas públicas */}

          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute />}>
            <Route path="/my-learning" element={<MyLearning />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/course" element={<CourseLesson />} />
            <Route path="/courses-page" element={<CoursesPage />} />

            {/* NUEVAS RUTAS */}
            <Route path="/desafios" element={<DesafioList />} />
            <Route path="/proyectos" element={<ProjectList />} />
            <Route path="/mi-perfil" element={<MyProfile />} />
          </Route>
        </Route>
      </Routes>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </>
  );
}

export default App;

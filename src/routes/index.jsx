import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import StaffLayout from "../layouts/StaffLayout";
import AdminLayout from "../layouts/AdminLayout";
import HomePage from "../pages/Home";
import ComingSoon from "../pages/ComingSoon";
import ContactPage from "../pages/Contact";
import AboutPage from "../pages/About";
import BlogPage from "../pages/Blog";
import BlogDetailPage from "../pages/BlogDetail";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ForgotPasswordPage from "../pages/ForgotPassword";
import ApplicationForm from "../pages/ApplicationForm";
import ApplicationManagement from "../pages/staff/ApplicationManagement";
import ApplicationDetail from "../pages/staff/ApplicationDetail";
import ApplicationEdit from "../pages/staff/ApplicationEdit";
import BlogManagement from "../pages/staff/BlogManagement";
import BlogAdd from "../pages/staff/BlogAdd";
import BlogEdit from "../pages/staff/BlogEdit";
import ClassroomManagement from "../pages/staff/ClassroomManagement";
import ClassroomAdd from "../pages/staff/ClassroomAdd";
import ClassroomEdit from "../pages/staff/ClassroomEdit";
import Dashboard from "../pages/admin/Dashboard";
import PaymentManagement from "../pages/admin/PaymentManagement";
import ParentManagement from "../pages/admin/ParentManagement";
import TeacherManagement from "../pages/admin/TeacherManagement";
import TeacherDetail from "../pages/admin/TeacherDetail";
import TeacherAdd from "../pages/admin/TeacherAdd";
import TeacherEdit from "../pages/admin/TeacherEdit";
import ParentDetail from "../pages/admin/ParentDetail";
import ParentEdit from "../pages/admin/ParentEdit";
import PaymentDetail from "../pages/admin/PaymentDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog/:id",
        element: <BlogDetailPage />,
      },
      {
        path: "admissions",
        element: <ComingSoon title="Admissions" />,
      },
      {
        path: "parents",
        element: <ComingSoon title="Parent resources" />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "application",
        element: <ApplicationForm />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "*",
        element: <ComingSoon title="Page not found" />,
      },
    ],
  },
  {
    path: "/staff",
    element: <StaffLayout />,
    children: [
      {
        index: true,
        element: <ApplicationManagement />,
      },
      {
        path: "applications",
        element: <ApplicationManagement />,
      },
      {
        path: "applications/:id",
        element: <ApplicationDetail />,
      },
      {
        path: "applications/:id/edit",
        element: <ApplicationEdit />,
      },
      {
        path: "blogs",
        element: <BlogManagement />,
      },
      {
        path: "blogs/add",
        element: <BlogAdd />,
      },
      {
        path: "blogs/:id/edit",
        element: <BlogEdit />,
      },
      {
        path: "classrooms",
        element: <ClassroomManagement />,
      },
      {
        path: "classrooms/add",
        element: <ClassroomAdd />,
      },
      {
        path: "classrooms/:id/edit",
        element: <ClassroomEdit />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "payments",
        element: <PaymentManagement />,
      },
      {
        path: "payments/:id",
        element: <PaymentDetail />,
      },
      
      {
        path: "parents",
        element: <ParentManagement />,
      },
     
      {
        path: "parents/:id",
        element: <ParentDetail />,
      },
      {
        path: "parents/:id/edit",
        element: <ParentEdit />,
      },
      {
        path: "teachers",
        element: <TeacherManagement />,
      },
      {
        path: "teachers/add",
        element: <TeacherAdd />,
      },
      {
        path: "teachers/:id",
        element: <TeacherDetail />,
      },
      {
        path: "teachers/:id/edit",
        element: <TeacherEdit />,
      },
    ],
  },
]);

export default router;


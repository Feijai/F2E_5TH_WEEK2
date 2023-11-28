import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "@/pages/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/candidate/:id",
    element: (
      <>
        <Header />
        <Resume />
        <Footer />
      </>
    ),
  },
]);

export default router;

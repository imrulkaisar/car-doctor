import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const PageTemplate = () => {
  return (
    <>
      <Header />
      <main className="container-area min-h-[500px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PageTemplate;

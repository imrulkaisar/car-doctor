import { Outlet } from "react-router";
import Header from "./Header";

const PageTemplate = () => {
  return (
    <>
      <Header />
      <main className="container-area">
        <Outlet />
      </main>
      <h2>Footer</h2>
    </>
  );
};

export default PageTemplate;

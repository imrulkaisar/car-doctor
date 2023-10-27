import { Outlet } from "react-router";

const PageTemplate = () => {
  return (
    <>
      <h2>Header</h2>
      <Outlet />
      <h2>Footer</h2>
    </>
  );
};

export default PageTemplate;

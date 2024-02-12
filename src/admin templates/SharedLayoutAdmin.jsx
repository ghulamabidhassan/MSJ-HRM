import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const SharedLayoutAdmin = () => {
  return (
    <section className="shared-layout-admin-main">
      <article className="admin-sidebar">
        <Sidebar />
      </article>
      <article className="admin-main-nav">
        <Navbar />
        <div className="admin-main-content">
          <Outlet />
        </div>
      </article>
    </section>
  );
};

export default SharedLayoutAdmin;

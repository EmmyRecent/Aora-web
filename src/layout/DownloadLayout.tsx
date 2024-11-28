import { Outlet } from "react-router";
import Footer from "../components/Footer";

const DownloadLayout = () => {
  return (
    <div>
      <Outlet />

      <Footer />
    </div>
  );
};

export default DownloadLayout;

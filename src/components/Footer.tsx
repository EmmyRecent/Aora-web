import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="text-small border-textColor flex flex-col items-center gap-2 border-t py-7 lg:flex-row lg:justify-between">
          <p className="text-center">
            Copyright © 2024 by{" "}
            <Link
              to={"https://chukwuemeka-e.vercel.app"}
              className="text-secondaryColor cursor-pointer"
            >
              Chukwuemeka
            </Link>{" "}
            | All rights reserved
          </p>
          <p className="text-secondaryColor caption-top">
            <Link to={"/terms&condition"}>Terms & conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

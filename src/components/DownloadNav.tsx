import { Link } from "react-router";
import { logo } from "../assets/icons";
import ComingSoon from "./ComingSoon";

type DownloadNavProps = {
  platform: "ios" | "android";
};

const DownloadNav = ({ platform }: DownloadNavProps) => {
  return (
    <div>
      <header className="bg-primaryColor py-10">
        <nav className="wrapper flex items-center justify-between">
          <Link to="/" className="flex items-center justify-center gap-1">
            <img
              className="h-auto w-[28px] md:w-[30px] lg:w-[38px]"
              width={28}
              height={28}
              src={logo}
              alt="Aora logo"
            />
            <span className="text-body md:text-subtitle font-bold sm:text-lg">
              Aora
            </span>
          </Link>

          <ComingSoon platform={platform === "ios" ? "ios" : "android"} />
        </nav>
      </header>
    </div>
  );
};

export default DownloadNav;

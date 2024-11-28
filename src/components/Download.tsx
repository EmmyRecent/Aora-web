import { ios, android } from "../assets/icons";

type DownloadProps = {
  platform: "ios" | "android";
  text: string;
};

const Download = ({ platform, text }: DownloadProps) => {
  return (
    <div className="bg-tertiaryColor rounded-round inline-flex h-auto cursor-pointer items-center gap-4 px-4 py-5 shadow-2xl">
      <img
        src={platform === "ios" ? ios : android}
        className="ll:w-[28px] h-auto w-[24px] sm:w-[34px] md:w-[37px]"
        width={24}
        height={24}
        alt="download icon"
      />

      <div className="flex flex-col">
        <p className="md:text-small text-[0.65rem] md:text-xs">
          Download on the
        </p>
        <p className="sm:text-small md:text-body text-xs font-bold">{text}</p>
      </div>
    </div>
  );
};

export default Download;

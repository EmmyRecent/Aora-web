import { android, ios } from "../assets/icons";

type ComingSoonProps = {
  platform: "ios" | "android";
};

const ComingSoon = ({ platform }: ComingSoonProps) => {
  return (
    <div className="bg-tertiaryColor rounded-round flex gap-2 p-[0.6rem] shadow-2xl">
      <img
        src={platform === "ios" ? ios : android}
        className="w-[23px] lg:w-[27px]"
        width={25}
        height={25}
        alt="Platform icon"
      />

      <div className="flex flex-col">
        <p className="text-small lg:text-body font-bold">Coming soon to</p>
        <p className="text-small lg:text-body font-normal">
          {platform === "ios" ? "App store" : "Play store"}
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;

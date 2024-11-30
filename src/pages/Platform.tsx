import { useParams } from "react-router";
import DownloadNav from "../components/DownloadNav";
import { demo4 } from "../assets/images";
import InputField from "../components/InputField";

const Platform = () => {
  const { platform } = useParams();

  return (
    <>
      <DownloadNav platform={platform === "appstore" ? "ios" : "android"} />

      <main>
        <section className="flex items-center justify-center">
          <div className="wrapper flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-2">
            <div className="flex flex-1 flex-col items-center justify-center gap-7 md:items-start">
              <h1 className="headline">Coming soon</h1>
              <h2 className="text-center font-medium md:text-start">
                Unleashing a New Era of Social Connection. Something
                extraordinary is on its way — stay tuned for the future of
                social interaction!
              </h2>
              {/* Input area */}

              <InputField />

              <p className="text-small text-textColor md:text-body">
                -_Notify me when App is launched_-
              </p>
            </div>

            <div className="flex-1">
              <img
                src={demo4}
                className="h-auto w-full max-w-[800px]"
                width={768.5}
                height={431.55}
                alt="hero image"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Platform;

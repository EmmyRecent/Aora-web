import { demo1, demo2, demo3, line } from "../assets/images";
import Download from "../components/Download";
import FeaturesCard from "../components/FeaturesCard";
import { features } from "../constants";

const Home = () => {
  return (
    <>
      <section className="flex items-center justify-center pt-[6.3rem]">
        <div className="wrapper flex flex-col gap-2 md:gap-4">
          <div className="flex flex-col gap-2 text-center md:gap-4">
            <h1 className="mx-auto font-bold text-white md:w-[20ch]">
              Discover Endless Possibilities with{" "}
              <span className="text-secondaryColor relative">
                Aora
                <img
                  src={line}
                  className="absolute bottom-0 right-0 h-auto w-full max-w-[150px]"
                  width={150}
                  alt="text decor"
                />
              </span>
            </h1>

            <h2 className="text-textColor mx-auto md:w-[54ch]">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Aora
            </h2>
          </div>

          <div className="flex w-full items-center justify-center">
            <img
              src={demo1}
              className="h-auto w-full max-w-[270px]"
              alt="demo1 image"
              width={153.93}
              height={283.59}
            />
            <img
              src={demo3}
              className="h-auto w-full max-w-[310px]"
              alt="demo3 image"
              width={153.93}
              height={283.59}
            />
            <img
              src={demo2}
              className="h-auto w-full max-w-[270px]"
              alt="demo2 image"
              width={153.93}
              height={283.59}
            />
          </div>

          <div className="ll:flex-row flex flex-col items-center justify-center gap-4">
            <Download platform="ios" text="App store" />
            <Download platform="android" text="Play store" />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center">
        <div className="wrapper flex flex-col gap-16">
          <h3 className="headline">About</h3>

          <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row-reverse">
            <img
              src={demo3}
              className="h-auto w-full max-w-[270px] md:max-w-[300px]"
              width={200}
              alt="demo image"
            />

            <p className="text-body font-normal">
              Aora is a vibrant social platform designed to bring people closer
              through shared moments and creative expression. With features like
              posts, videos, bookmarks, and real-time interactions, Aora makes
              it easy to connect, share, and engage with a global community.
              Whether you're showcasing your talents, discovering inspiring
              content, or building meaningful connections, Aora is your space to
              express and explore.
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center">
        <div className="wrapper flex flex-col gap-16">
          <h3 className="headline">Core features</h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeaturesCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center">
        <div className="wrapper flex flex-col gap-16">
          <h3 className="headline">User stories / Testimonials</h3>

          <div className="flex items-center justify-center">
            <p className="text-body text-textColor">No user reviews yet!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

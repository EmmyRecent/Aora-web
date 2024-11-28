import { Link } from "react-router";

const NotFound = () => {
  const error = "";

  console.log("Error:", error);

  return (
    <section className="flex items-center justify-center">
      <div className="wrapper flex flex-col gap-2 text-center">
        <h2 className="headline">404</h2>
        <h3 className="font-normal">Page not found!</h3>
        <p className="text-body">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <p className="text-body">
          Go back to the{" "}
          <Link to="/" className="text-secondaryColor">
            homepage
          </Link>
        </p>
      </div>
    </section>
  );
};

export default NotFound;

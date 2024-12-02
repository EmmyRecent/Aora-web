import { useEffect } from "react";

const Verify = () => {
  useEffect(() => {
    // Extract the secret token from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const secret = urlParams.get("secret");

    console.log("Secret:", secret);

    if (secret) {
      // Redirect to the Expo app using a deep link
      const appLink = `aora://verify?secret=${secret}`;
      window.location.href = appLink;
    } else {
      console.error("Secret token is missing in the URL!");
      // alert("Invalid verification link.");
    }
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      <p className="text-lg">Redirecting to the app...</p>
    </section>
  );
};

export default Verify;

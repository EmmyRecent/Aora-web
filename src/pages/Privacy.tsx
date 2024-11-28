import { Link } from "react-router";

const Privacy = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="wrapper">
        <div className="mx-auto flex w-full max-w-[900px] flex-col justify-center gap-4">
          <h1 className="headline">Privacy policy</h1>

          <h2 className="title">Who we are</h2>

          <p className="subtitle">
            aora-yt.vercel.app operates the https://aora-yt.vercel.app website,
            and Aora iOS and Android mobile app which is a social media.
          </p>

          <p className="subtitle">
            This page is used to inform website visitors regarding our policies
            with the collection, use, and disclosure of Personal Information if
            anyone decided to use Aora website or Mobile iOS and Android app.
          </p>

          <p className="subtitle">
            If you choose to use our Website or Mobile app, then you agree to
            the collection and use of information in relation with this policy.
            The Personal Information that we collect is used for providing and
            improving the Website and Mobile app. We will not use or share your
            information with anyone except as described in this Privacy Policy.
          </p>

          <h2 className="title">Information Collection and Use</h2>

          <p className="subtitle">
            For a better experience while using our Website or Mobile app, we
            may require you to provide us with certain personally identifiable
            information, including but not limited to your name, and email
            address. The information that we collect will be used to identify
            you while using our services.
          </p>

          <p className="subtitle">
            We collect information via user sign ups in our iOS and Android
            Mobile app and also via subscription to be notified on release of
            our app.
          </p>

          <h2 className="title">Sharing of Personal Information</h2>

          <p className="subtitle">
            aora-yt.vercel.app and Aora iOS and Android mobile app will never
            share, sell, distribute, or exchange your personal information.
          </p>

          <h2 className="title">Cookies</h2>

          <p className="subtitle">
            aora-yt.vercel.app does not use cookies on its site.
          </p>

          <h2 className="title">Security</h2>

          <p className="subtitle">
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </p>

          <h2 className="title">Links to Other Sites</h2>

          <p className="subtitle">
            Our Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. We have no
            control over, and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>

          <h2 className="title">Children's Privacy</h2>

          <p className="subtitle">
            Our Services do not address anyone under the age of 13. We do not
            knowingly collect personal identifiable information from children
            under 13. In the case we discover that a child under 13 has provided
            us with personal information, we will take action to delete this
            from our servers. If you are a parent or guardian and you are aware
            that your child has provided us with personal information, please
            contact us so that we will be able to do necessary actions.
          </p>

          <h2 className="title">Changes to This Privacy Policy</h2>

          <p className="subtitle">
            We may update our Privacy Policy from time to time. Thus, we advise
            you to review this page periodically for any changes. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            These changes are effective immediately, after they are posted on
            this page.
          </p>

          <h2 className="title">Contact Us</h2>

          <p className="subtitle">
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at{" "}
            <Link
              className="text-secondaryColor cursor-pointer"
              to="mailto:chukwuemekaeziagulu@gmail.com"
            >
              chukwuemekaeziagulu@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;

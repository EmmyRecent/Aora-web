type FeaturesCardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeaturesCard = ({ icon, title, description }: FeaturesCardProps) => {
  return (
    <div className="bg-tertiaryColor rounded-round flex scale-95 cursor-pointer items-center justify-start gap-4 p-10 shadow-2xl transition duration-300 ease-in hover:scale-100">
      <i
        className={`${icon} text-secondaryColor h-auto text-[2rem] md:text-[2.2rem]`}
      ></i>

      <div className="flex flex-col gap-2">
        <p className="text-body font-bold md:text-lg">{title}</p>
        <p className="text-small md:text-body font-normal">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;

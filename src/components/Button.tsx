type ButtonProps = {
  title: string;
  customStyles?: string;
};

const Button = ({ title, customStyles }: ButtonProps) => {
  return (
    <div
      className={`rounded-round inline-block w-auto cursor-pointer bg-gradient-to-r from-[#FF8C00] to-[#FFA300] p-3 ${customStyles}`}
    >
      <p className="sm:text-body text-small font-bold capitalize text-white">
        {title}
      </p>
    </div>
  );
};

export default Button;

import Button from "./Button";

const InputField = () => {
  return (
    <form>
      <div className="bg-tertiaryColor border-secondaryColor rounded-round text-body inline-flex w-full items-center justify-between gap-4 border px-4 py-3">
        <input
          type="email"
          className="placeholder:text-textColor md:placeholder:text-body placeholder:text-small w-full max-w-[300px] flex-1 bg-transparent text-white"
          placeholder="Please enter your email address"
        />
        <Button title="Notify me" />
      </div>
    </form>
  );
};

export default InputField;

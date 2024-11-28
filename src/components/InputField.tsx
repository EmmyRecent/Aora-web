import React, { useState } from "react";
import Button from "./Button";
import { submitForm } from "../lib/appwrite";
import { useToast } from "../context/ToastProvider";

const InputField = () => {
  const { showToast } = useToast();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue) {
      try {
        await submitForm(inputValue);
        showToast({
          message: "Thank you! You'll be notified when Aora is available",
          type: "error",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        showToast({
          message: "Error submitting form, please try again later!",
          type: "error",
        });
      } finally {
        setInputValue("");
      }
    } else {
      // DO something here.
      showToast({
        message: "Please fill in all the details",
        type: "error",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-tertiaryColor border-secondaryColor rounded-round text-body inline-flex w-full items-center justify-between gap-4 border px-4 py-3">
        <input
          type="email"
          value={inputValue}
          onChange={handleChange}
          className="placeholder:text-textColor md:placeholder:text-body placeholder:text-small w-full max-w-[300px] flex-1 bg-transparent text-white"
          placeholder="Please enter your email address"
        />

        <Button title="Notify me" />
      </div>
    </form>
  );
};

export default InputField;

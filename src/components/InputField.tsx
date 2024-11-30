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
          type: "success",
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
      <div className="inline-flex w-full items-center justify-between gap-4 rounded-round border border-secondaryColor bg-tertiaryColor px-4 py-3 text-body">
        <input
          type="email"
          value={inputValue}
          onChange={handleChange}
          className="w-full max-w-[300px] flex-1 bg-transparent text-white placeholder:text-small placeholder:text-textColor md:placeholder:text-body"
          placeholder="Please enter your email address"
        />

        <Button title="Notify me" />
      </div>
    </form>
  );
};

export default InputField;

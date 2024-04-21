"use client";

import React from "react";
import { Input, Link } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [Intro, setIntro] = React.useState(true);

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/search");

    // Add your logic here for what should happen when the form is submitted
  };

  if (Intro) {
    return (
      <div className="flex flex-col justify-center items-center h-screen ">
        <img src="https://cdn.leonardo.ai/users/8e2e6fc9-b3f2-4d59-8ba7-3c0604abc5ae/generations/8003b030-2381-4ceb-b579-8addc75b9316/variations/Default_sticker_of_a_panda_saying_hi_0_8003b030-2381-4ceb-b579-8addc75b9316_0.png" alt="logo" className="w-3/3" />
        <h1 className="text-2xl lg:text-6xl text-center m-2 font-bold mb-4">Hello!!
        <br></br> Continue your learning journey here 👇🏻</h1>
        <Button
          className="w-3/5 lg:w-1/5 bg-black border hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center mb-4 "
          onClick={() => {
            setIntro(false);
          }}
        >
          Login
        </Button>
      </div>
    );
  } else {
    return (
      <div className="justify-center items-center h-screen flex ">
        <form onSubmit={handleSubmit} className="text-center   w-3/4 lg:w-72">
          <img
            src="https://cdn.leonardo.ai/users/8e2e6fc9-b3f2-4d59-8ba7-3c0604abc5ae/generations/d4b38e85-12f6-4f68-b25b-73547d4329f8/variations/Default_a_sticker_of_cat_wearing_headphones_and_reading_heads_0_d4b38e85-12f6-4f68-b25b-73547d4329f8_0.png"
            alt="Cute Cat"
            className=" "
          />
          <div>
            <Button
              className="mb-4 w-full bg-white border-1 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center"
              onClick={() => {
                router.push("/search");
                // Add your logic here for what should happen when the Google Sign In button is clicked
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google sign-in"
                className="h-6 w-6 mr-2 rounded-lg"
              />
              Sign in with Google
            </Button>
          </div>
          <div className="text-center mb-4">
            <h3>or</h3>
          </div>
          <Input
            type="email"
            placeholder="Email"
            isRequired
            className="mb-4 rounded-lg "
          />
          <Input
            type={isVisible ? "text" : "password"}
            placeholder="Password"
            isRequired
            iconClickable
            onIconClick={toggleVisibility}
            icon={isVisible ? <EyeFilledIcon /> : <EyeSlashFilledIcon />}
            className="mb-4 rounded-lg"
          />
          <Button
            type="submit"
            className="mb-4 w-full rounded-lg"
            color="primary"
          >
            Log in
          </Button>
          <p className="text-center">
            Don&apos;t have an account?
            <Link color="primary" href="/signup" className="rounded-lg">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

//add a signup button

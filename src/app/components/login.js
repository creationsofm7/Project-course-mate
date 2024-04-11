"use client";

import React from "react";
import { Input, Link } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import All_courses from "./all_courses";

export default function Login() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/Search");

    // Add your logic here for what should happen when the form is submitted
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="text-center">
          <div>
            <Button
              className="m-4 w-full bg-white border-1 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center"
              onClick={() => {
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
          <div className="text-center translate-x-4">
            <h3>or</h3>
          </div>
          <Input
            type="email"
            placeholder="Email"
            isRequired
            className="m-4 rounded-lg"
          />
          <Input
            type={isVisible ? "text" : "password"}
            placeholder="Password"
            isRequired
            iconClickable
            onIconClick={toggleVisibility}
            icon={isVisible ? <EyeFilledIcon /> : <EyeSlashFilledIcon />}
            className="m-4 rounded-lg"
          />
          <Button
            type="submit"
            className="m-4 w-full rounded-lg"
            color="primary"
          >
            Log in
          </Button>
          <p className="text-center translate-x-2">
            Don&apos;t have an account?
            <Link color="primary" href="/signup" className="rounded-lg">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

//add a signup button

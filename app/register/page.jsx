"use client";

import { Alert, AlertError } from "@/components/AlertError";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

const page = () => {
  const router = useRouter();
  //   const [submitting, setSubmitting] = useState(false);
  const {
    isOpen: isOpenAlert,
    onOpen: onOpenAlert,
    onClose: onCloseAlert,
  } = useDisclosure();
  const [error, setError] = useState({
    title: "",
    desc: "",
  });
  const [post, setPost] = useState({
    email: "",
    username: "",
    password: "",
    confPass: "",
  });
  const reset = () => {
    document.getElementById("form-register").reset();
  };

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(post),
      });

      if (res.ok) {
        router.push("/");
      } else {
        console.log(res);
        reset();
        router.push("/register");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex bgWrap h-screen items-center min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      {/* <AlertError
        isOpen={isOpenAlert}
        onClose={onCloseAlert}
        onOpen={onOpenAlert}
        error={error}
      /> */}
      <div className="w-1/4 p-5 bg-white  rounded-xl ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Register</h2> */}
          <div className="h-20 logo"></div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            id="form-register"
            className="space-y-6"
            onSubmit={handleRegister}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setPost({ ...post, email: e.target.value });
                  }}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setPost({ ...post, username: e.target.value });
                  }}
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm  font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setPost({ ...post, password: e.target.value });
                  }}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confPass"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setPost({ ...post, confPass: e.target.value });
                  }}
                  id="confPass"
                  name="confPass"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block px-2 w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                // onClick={handleRegsiter}
                className="flex w-full justify-center rounded-md bg-[#1979BB] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            sudah punya akun?
            <a
              href="/"
              className="font-semibold leading-6 text-[#1979BB] hover:text-blue-500"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;

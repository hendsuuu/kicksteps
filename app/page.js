"use client";

// import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [post, setPost] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // setSubmitting(true);
    try {
      console.log(JSON.stringify(post));
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          email: post.email,
          password: post.password,
        }),
      });

      if (res.ok) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex bgWrap h-screen items-center min-h-full flex-col justify-center place-content-center px-6 py-12 lg:px-8">
        <div className="w-1/4 p-5  bg-white rounded-xl ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Login</h2> */}
            <div className="h-20 logo"></div>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    id="email"
                    name="email"
                    type="email"
                    // autoComplete="username"
                    required
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    id="password"
                    name="password"
                    type="password"
                    // autoComplete="current-password"
                    required
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  bg-[#1979BB]"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              belum punya akun?
              <a
                href="/register"
                className="font-semibold leading-6 text-[#1979BB] hover:text-blue-500"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

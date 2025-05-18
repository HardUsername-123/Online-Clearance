"use client";

import { IdCard, Lock, Phone } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

const Register = () => {
    useEffect(() => {
      document.title = "Register";
    }, []);
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        {/* <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Get started today
        </h1> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src="/web.png" alt="Web Image" width={200} height={100} />
        </div>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <form
          action="#"
          className="mt-6 mb-0 space-y-4 border rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">Sign Up</p>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border"
                placeholder="Enter id number"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <IdCard className=" text-gray-400" />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border"
                placeholder="Enter phone number"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <Phone className="size-4 text-gray-400" />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border"
                placeholder="EnterPassword"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <Lock className="size-4 text-gray-400" />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border"
                placeholder="Enter confirm password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <Lock className="size-4 text-gray-400" />
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-sky-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a className="underline" href="/auth/signin">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

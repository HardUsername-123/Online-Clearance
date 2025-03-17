"use client";

import { IdCard, Lock, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Login = () => {
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
          action="/departmentClearance"
          className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Sign in to your account
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                placeholder="Enter id number"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <IdCard className=" text-gray-400" />
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
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                placeholder="Enter password"
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
            No account?{" "}
            <a className="underline" href="/auth/register">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

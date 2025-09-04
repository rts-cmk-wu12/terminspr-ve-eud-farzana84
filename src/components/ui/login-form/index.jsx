"use client";

// I have copied some code from "repetition ""

import { useActionState, useEffect } from "react";
import { loginAction } from "@/actions/login";
import Button from "@/components/ui/button";
import { redirect } from "next/navigation";
import { CircleLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

export default function ContactForm() {
  const [formState, formAction, isPending] = useActionState(loginAction, {});

  useEffect(
    function () {
      if (formState?.success) {
        redirect("/calendar");
      }
    },
    [formState]
  );

  return isPending ? (
    <CircleLoader
      color="#FFFFFF"
      loading={true}
      cssOverride={override}
      size={100}
    />
  ) : (
    <form
      action={formAction}
      //method="post"
      className="w-full flex flex-col justify-center items-center"
    >
      <input
        type="text"
        placeholder="brugernavn"
        className="placeholder:text-slate-400 block bg-white w-[80%] border border-slate-300 rounded-[.2em] py-2 pl-4 pr-3 sm:text-sm mt-[.5em]"
        name="username"
      />
      <p className="text-purple-900 bg-white">
        {formState?.properties?.username?.errors}
      </p>

      <input
        type="Password"
        name="password"
        placeholder="adgangskode"
        defaultValue={formState?.data?.password}
        className="placeholder:text-slate-400 bg-white w-[80%] border border-slate-300 rounded-[.2em] py-2 pl-4 pr-3 sm:text-sm mt-[.5em] mb-[2em]"
      />
      <p className="text-purple-900 bg-white">
        {formState?.properties?.password?.errors}
      </p>

      <div className="">
        <Button buttontext={"log ind"} />
      </div>

      <p className="text-purple-900 text-xl font-bold p-3 my-2">
        {formState?.errors}
      </p>
    </form>
  );
}

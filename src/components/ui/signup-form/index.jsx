"use client";
// I have copied some code from "repetition ""

import { SignUpAction } from "@/actions/signup-action";
import { useActionState, useEffect } from "react";
import Button from "@/components/ui/button";
import { redirect } from "next/navigation";
import { CircleLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};
export default function SignUpForm() {
  const [formState, formAction, isPending] = useActionState(SignUpAction, {});
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
      className=" w-full flex flex-col justify-center items-center"
    >
      <input
        type="text"
        name="firstname"
        placeholder="firstname"
        className="placeholder:text-slate-400 bg-white w-[80%] border border-slate-300 rounded-[.2em] py-2 pl-4 pr-3 sm:text-sm mt-[.5em] mb-[1.5em]"
      />
      <p className="text-purple-900 bg-white">
        {formState?.properties?.firstname?.errors}
      </p>
      <input
        type="text"
        name="lastname"
        placeholder="Lastname"
        className="placeholder:text-slate-400 block bg-white w-[80%] border border-slate-300 rounded-[.2em] py-2 pl-4 pr-3 sm:text-sm mt-[.5em]  mb-[1.5em]"
      />
      <p className="text-purple-900 bg-white">
        {formState?.properties?.lastname?.errors}
      </p>
      <input
        type="number"
        placeholder="age"
        className="placeholder:text-slate-400 block bg-white w-[80%] border border-slate-300 rounded-[.2em] py-2 pl-4 pr-3 sm:text-sm mt-[.5em]  mb-[1.5em]"
        name="age"
      />
      <p className="text-purple-900 bg-white">
        {formState?.properties?.age?.errors}
      </p>

      <input
        type="text"
        placeholder="username"
        className="placeholder:text-slate-400 block bg-white w-[80%] border border-slate-300 rounded-[.2em] py-2 pl-4 pr-3 sm:text-sm mt-[.5em]  mb-[1.5em]"
        name="username"
      />
      <p className="text-purple-900 bg-white">
        {formState?.properties?.username?.errors}
      </p>

      <input
        type="Password"
        name="password"
        placeholder="password"
        className="placeholder:text-slate-400 bg-white w-[80%] border border-slate-300 rounded-[.2em] py-2 pl-4 pr-3 sm:text-sm mt-[.5em] mb-[1.5em]"
      />
      <p className="text-purple-900 bg-white">
        {formState?.properties?.password?.errors}
      </p>

      <div className="">
        <Button buttontext={"Sign Up"} />
      </div>

      <p className="text-purple-900 text-xl font-bold p-3 my-2">
        {formState?.errors}
      </p>
    </form>
  );
}

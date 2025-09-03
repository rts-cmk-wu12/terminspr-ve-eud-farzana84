"use client";
// I have copied some code from "repetition ""
import { loginAction } from "@/actions/login";
import { useActionState } from "react";
import { CircleLoader } from "react-spinners";

export default function LoginForm() {
  const [formState, formAction, isPending] = useActionState(loginAction, null);

  const override = {
    display: "block",
    margin: "0 auto",
  };

  return isPending ? (
    <CircleLoader
      color="#0d0d7cff"
      loading={true}
      cssOverride={override}
      size={100}
    />
  ) : (
    <form action={formAction}>
      <div>
        <label className="block space-y-1">
          <span>Brugernavn</span>
          <input
            type="text"
            name="username"
            className="w-full bg-[#EAEAEA] px-3 py-4 text-[#EAEAEA] placeholder:opacity-70"
          />
        </label>
        <p>{formState?.properties?.username?.errors}</p>
      </div>
      <div>
        <label>
          <span>Adgangskode</span>
          <input
            type="password"
            name="password"
            placeholder="Adgangskode"
            className="w-full bg-[#EAEAEA] px-3 py-4 text-[#EAEAEA] placeholder:opacity-70"
          />
        </label>
        <p>{formState?.properties?.password?.errors}</p>
      </div>
      <button type="submit">Log ind</button>
      <p>{formState?.errors}</p>
    </form>
  );
}

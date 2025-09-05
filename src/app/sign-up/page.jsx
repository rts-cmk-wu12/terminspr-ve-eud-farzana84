import SignUpForm from "@/components/ui/signup-form";

export const metadata = {
  title: "Sign Up Page",
  description: "user can sign up here.",
};

export default function SignUpPage() {
  return (
    <>
      <section className="relative">
        <div className="bg-[url(/splash-image.jpg)] w-screen bg-cover bg-center h-screen bg-no-repeat">
          <div className="flex justify-center items-center h-screen">
            <div className="h-[95%] w-full bg-[#4e3949] opacity-30 rotate-45 block"></div>
          </div>
        </div>
        <div className="absolute bottom-[10em] flex flex-col justify-center items-start w-full">
          <h1 className="text-white text-[3em] font-semibold ml-[1em] mt-[-2em]">
            sign up
          </h1>
          <SignUpForm />
        </div>
      </section>
    </>
  );
}

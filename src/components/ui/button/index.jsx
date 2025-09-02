export default function Button({ buttontext }) {
  return (
    <div className="flex justify-center ">
      <button className="bg-[#5E2E53] text-white w-60 py-2 rounded-xl text-base font-medium shadow-sm">
        {buttontext}
      </button>
    </div>
  );
}

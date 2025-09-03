export default function Header({ title }) {
  return (
    <div className="fixed w-full h-20 bg-[#5E2E53] z-999">
      <h1 className="text-white  p-8 pt-4 "> {title}</h1>
    </div>
  );
}

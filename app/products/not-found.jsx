import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container flex min-h-[85vh] max-w-screen-xl mx-auto">
      <div className="flex-1 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-7xl font-bold">404 </h1>
        <p className="text-xl font-semibold text-slate-800">
          <span className="text-red-500">Opps!</span> Page Not Found.
        </p>

        <Link
          href="/"
          className="bg-indigo-500 text-white hover:bg-indigo-600 transition duration-300 ease-in-out rounded px-4 py-2 "
        >
          Go back to Home Page
        </Link>
      </div>
    </div>
  );
};
export default NotFound;

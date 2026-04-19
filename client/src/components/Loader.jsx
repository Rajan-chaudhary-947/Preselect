import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-4">
        <FaSpinner className="text-4xl animate-spin" />
        <p className="text-sm tracking-wide text-gray-400">
          Loading Preselect...
        </p>
      </div>
    </div>
  );
};

export default Loader;
import { IoIosArrowBack } from "react-icons/io";

type ButtonType = {
  open: (() => void) | undefined;
  title: string;
  top: number;
};

const index = ({ open, title, top }: ButtonType) => {
  return (
    <div
      style={{ top: `${top}%` }}
      className={`w-auto flex items-center gap-2 
      absolute left-2 sm:left-8 whitespace-nowrap text-sm sm:text-lg font-medium mr-2 dark:bg-gray-700 overflow-hidden`}
    >
      <button
        onClick={open}
        className="flex items-center gap-2 px-2.5 py-0.5 rounded text-white  border bg-btn hover:bg-btn/75 transition"
      >
        <IoIosArrowBack />
        {title}
      </button>
    </div>
  );
};

export default index;

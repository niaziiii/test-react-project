import { AddTabInterface } from "../../constrains/interface";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const index = ({ tabs, setTabs }: AddTabInterface) => {
  const ascendingOrder = () => {
    const filtered = [...tabs];
    filtered.sort((a: any, b: any) => a.id - b.id);
    setTabs(filtered);
  };

  const descendingOrder = () => {
    const filtered = [...tabs];
    filtered.sort((a: any, b: any) => b.id - a.id);
    setTabs(filtered);
  };
  return (
    <div className="flex items-center justify-center gap-3 mb-4 absolute top-6 left-8">
      <button
        onClick={ascendingOrder}
        className="flex items-center gap-2 outline-none px-2.5 py-0.5 bg-btn rounded text-white border"
      >
        <AiFillCaretUp />
      </button>
      <button
        onClick={descendingOrder}
        className="flex items-center gap-2 outline-none px-2.5 py-0.5 bg-btn rounded text-white border"
      >
        <AiFillCaretDown />
      </button>
    </div>
  );
};

export default index;

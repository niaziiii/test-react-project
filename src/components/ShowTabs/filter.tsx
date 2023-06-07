import { AddTabInterface, TabInterface } from "../../constrains/interface";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Index = ({ tabs, setTabs }: AddTabInterface) => {
  const toggleOrder = () => {
    const filtered: TabInterface[] = [...tabs];

    const isAscending: boolean | undefined =
      (filtered[0] as { id: number | string })?.id <
      (filtered[filtered.length - 1] as { id: number | string })?.id
        ? true
        : undefined;

    filtered.sort((a: any, b: any) => {
      if (a.id && b.id) {
        return isAscending ? b.id - a.id : a.id - b.id;
      }
      return 0;
    });

    setTabs(filtered);
  };

  return (
    <div className="flex items-center justify-center gap-3 mb-4 absolute top-6 left-8">
      <button
        onClick={toggleOrder}
        className="flex items-center gap-2 outline-none px-2.5 py-0.5 bg-btn rounded text-white border"
      >
        {(tabs[0] as { id: number | string }).id <
        (tabs[tabs.length - 1] as { id: number | string }).id ? (
          <AiFillCaretUp />
        ) : (
          <AiFillCaretDown />
        )}
      </button>
    </div>
  );
};

export default Index;

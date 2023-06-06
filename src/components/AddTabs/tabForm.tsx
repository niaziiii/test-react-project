import { InterfaceTabs } from "../../constrains/interface";
import SelectField from "../Select";

const icons = [
  "drink",
  "tired",
  "glasses",
  "stairs",
  "apple",
  "window",
  "android",
  "bank",
];

const TabForm = ({
  handleSubmit,
  selectedIcon,
  handleIconChange,
  description,
  handleDescriptionChange,
}: InterfaceTabs) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-[20rem] flex flex-col  gap-1"
    >
      <div className="flex items-start mb-4 gap-2 flex-col">
        <label htmlFor="icon-select" className="text-xl font-medium">
          Select Icon
        </label>
        <SelectField
          handleIconChange={handleIconChange}
          icons={icons}
          selectedIcon={selectedIcon}
        />
      </div>

      <div className="flex items-start mb-4  gap-2 flex-col">
        <label htmlFor="description-input" className="text-xl font-medium">
          Description
        </label>
        <textarea
          autoComplete="off"
          id="description-input"
          value={description}
          onChange={handleDescriptionChange}
          className="border-none outline-none text-lg px-2 py-2 bg-white text-black rounded-lg w-full description-input"
        />
      </div>

      <button
        type="submit"
        className="bg-btn hover:bg-btn/75 transition text-white px-4 py-2 mt-3 rounded-xl"
      >
        Add Tab
      </button>
    </form>
  );
};

export default TabForm;

import React from "react";

type Select = {
  selectedIcon: string;
  handleIconChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  icons: string[];
};

const index = ({ selectedIcon, handleIconChange, icons }: Select) => {
  return (
    <select
      id="icon-select"
      value={selectedIcon}
      onChange={handleIconChange}
      className="px-3 py-2 bg-white text-black border-none outline-none rounded-lg w-full text-lg"
    >
      {icons.map((icon) => (
        <option key={icon} value={icon} className="block px-2 py-2">
          {icon}
        </option>
      ))}
    </select>
  );
};

export default index;

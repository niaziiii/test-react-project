import React from "react";
import { AddTabInterface } from "../../constrains/interface";
import { GrClose } from "react-icons/gr";
import TabComponent from "./tab";
import CustomBtn from "../CustomBtn";
import FilterData from "./filter";

const index = ({ tabs, setTabs, changePages }: AddTabInterface) => {
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const sourceIndex = Number(e.dataTransfer.getData("text/plain"));
    const updatedTabs = [...tabs];
    const [removedTab] = updatedTabs.splice(sourceIndex, 1);
    updatedTabs.splice(index, 0, removedTab);
    setTabs(updatedTabs);
  };

  const handleTabClose = (index: number) => {
    setTabs((prevTabs) => prevTabs.filter((_, i) => i !== index));
  };

  return (
    <>
      <CustomBtn open={changePages} title="Add more tabs" top={3} />
      <div className="p-4 mb-12 sm:mb-0 bg-secondary text-black rounded-lg px-8 mt-20 sm:mt-14 relative w-[95%] sm:w-auto">
        <h2 className="text-3xl font-medium text-center mt-3 mb-3 text-white">
          Tabs
        </h2>
        <FilterData tabs={tabs} setTabs={setTabs} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 transition-all">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="cursor-move flex items-center border border-gray-300 rounded bg-white p-2 transition-all"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              <TabComponent
                icon={tab.icon}
                description={tab.description}
                key={index}
              />
              <button
                className="text-sm font-bold ml-auto  hover:text-btn/5 text-btn"
                onClick={() => handleTabClose(index)}
              >
                <GrClose />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;

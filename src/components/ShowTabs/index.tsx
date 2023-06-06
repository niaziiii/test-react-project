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
      <CustomBtn open={changePages} title="Add more tabs" top={5} />
      <div className="p-4 bg-secondary text-black rounded-lg px-8 mt-14 relative">
        <h2 className="text-3xl font-medium text-center mt-3 mb-3 text-white">
          Tabs
        </h2>
        <FilterData tabs={tabs} setTabs={setTabs} />

        <div className="grid grid-cols-3 gap-3 transition-all">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="cursor-move border border-gray-300 rounded bg-white relative px-4 py-3 transition-all"
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
                className="text-sm font-bold absolute top-1 right-1 hover:text-btn/5 text-btn"
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

import React, { useState } from "react";
import TabForm from "./tabForm";
import { TabInterface, AddTabInterface } from "../../constrains/interface";
import Badge from "../Badge";
import CustomBtn from "../CustomBtn";

const AddTabs = ({ changePages, tabs, setTabs }: AddTabInterface) => {
  const [selectedIcon, setSelectedIcon] = useState<string>("drink");
  const [description, setDescription] = useState<string>("");

  const handleIconChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIcon(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!description) return;

    const newTab: TabInterface = {
      icon: selectedIcon,
      description,
      id: Date.now(),
    };

    setTabs((prevTabs) => [...prevTabs, newTab]);

    setSelectedIcon("drink");
    setDescription("");
  };

  return (
    <>
      <Badge description={`Total Tabs : ${tabs.length}`} top={5} />
      <div className="w-[95%] sm:w-auto p-8 bg-secondary text-white rounded-xl shadow-2xl overflow-hidden">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Tab </h1>
        <CustomBtn top={5} title="Visit tabs" open={changePages} />
        <TabForm
          handleSubmit={handleSubmit}
          selectedIcon={selectedIcon}
          handleIconChange={handleIconChange}
          description={description}
          handleDescriptionChange={handleDescriptionChange}
        />
      </div>
    </>
  );
};

export default AddTabs;

import React, { useState } from "react";
import dumyTabs from "./constrains/dumyTabs";
import AddTabs from "./components/AddTabs";
import ShowTabs from "./components/ShowTabs";
import { TabInterface } from "./constrains/interface";

const App: React.FC = () => {
  const [tabs, setTabs] = useState<TabInterface[]>(dumyTabs);
  const [whichPageToShow, setwhichPageToShow] = useState<boolean>(true);

  const changePages = () => setwhichPageToShow(!whichPageToShow);

  return (
    <div className="sm:p-4 flex items-center justify-center bg-main min-h-screen relative">
      {whichPageToShow ? (
        <AddTabs tabs={tabs} setTabs={setTabs} changePages={changePages} />
      ) : (
        <ShowTabs tabs={tabs} setTabs={setTabs} changePages={changePages} />
      )}
    </div>
  );
};

export default App;

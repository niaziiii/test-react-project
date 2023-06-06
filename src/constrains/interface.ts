import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

interface TabInterface {
  id?: string | number;
  icon: string;
  description: string;
}

interface AddTabInterface {
  tabs: TabInterface[];
  setTabs: Dispatch<SetStateAction<TabInterface[]>>;
  changePages?: () => void;
}

interface InterfaceTabs {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  selectedIcon: string;
  handleIconChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  description: string;
  handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export type { TabInterface, AddTabInterface, InterfaceTabs };

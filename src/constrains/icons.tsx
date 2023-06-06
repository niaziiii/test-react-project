import { GiDrinkMe, GiTiredEye, Gi3DGlasses, Gi3DStairs } from "react-icons/gi";
import {
  AiFillApple,
  AiFillAppstore,
  AiFillBank,
  AiFillAndroid,
} from "react-icons/ai";

interface AppIconsType {
  [key: string]: JSX.Element;
}
const AppIcons: AppIconsType = {
  drink: <GiDrinkMe />,
  tired: <GiTiredEye />,
  glasses: <Gi3DGlasses />,
  stairs: <Gi3DStairs />,
  apple: <AiFillApple />,
  window: <AiFillAppstore />,
  android: <AiFillAndroid />,
  bank: <AiFillBank />,
};

export default AppIcons;

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import AppIcons from "../../constrains/icons";

interface TabProps {
  icon: string;
  description: string;
}

const Tab: React.FC<TabProps> = ({ icon, description }) => {
  const scaleProps = useSpring({
    from: { transform: "scale(0.5)" },
    to: { transform: "scale(1)" },
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div style={scaleProps}>
      <div className="flex items-center gap-3 w-full justify-start">
        <b className="text-2xl">{AppIcons[icon]}</b>
        <span>{description}</span>
      </div>
    </animated.div>
  );
};

export default Tab;

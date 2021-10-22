import { AiFillRobot } from "react-icons/ai";
import { SAAS } from "../components/SVGs";
import { BsFillLightningFill } from "react-icons/bs";
import { CgInsights } from "react-icons/cg";
import { BiCustomize } from "react-icons/bi";
import { HiCursorClick } from "react-icons/hi";

export const features = [
  {
    id: "1",
    Icon: <AiFillRobot size={40} fill="#777777" />,
    label: "AI generated voices",
  },
  {
    id: "2",
    Icon: <SAAS height={60} />,
    label: "SAAS based solution",
  },
  {
    id: "3",
    Icon: <HiCursorClick size={60} fill="#777777" />,
    label: "One-click install",
  },
  {
    id: "4",
    Icon: <BiCustomize size={60} fill="#777777" />,
    label: "Easy integration",
  },
  {
    id: "5",
    Icon: <CgInsights size={60} fill="#777777" color="#777777" />,
    label: `Insights based dashboard`,
  },
  {
    id: "6",
    Icon: <BsFillLightningFill size={60} fill="#777777" />,
    label: "50% cost reduction in training",
  },
];

export const featuresBig = [
  {
    id: "1",
    Icon: <AiFillRobot size={80} fill="#777777" />,
    label: "AI generated voices",
  },
  {
    id: "2",
    Icon: <SAAS height={80} />,
    label: "SAAS based solution",
  },
  {
    id: "3",
    Icon: <HiCursorClick size={80} fill="#777777" />,
    label: "One-click install",
  },
  {
    id: "4",
    Icon: <BiCustomize size={80} fill="#777777" />,
    label: "Easy integration",
  },
  {
    id: "5",
    Icon: <CgInsights size={80} fill="#777777" color="#777777" />,
    label: `Insights based \n dashboard`,
  },
  {
    id: "6",
    Icon: <BsFillLightningFill size={80} fill="#777777" />,
    label: "50% cost reduction in training",
  },
];

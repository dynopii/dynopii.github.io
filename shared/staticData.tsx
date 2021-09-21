import { AiFillRobot } from "react-icons/ai";
import { SAAS } from '../components/SVGs';
import { BsFillLightningFill } from 'react-icons/bs';
import { CgInsights } from "react-icons/cg";
import { BiCustomize } from "react-icons/bi";
import { HiCursorClick } from "react-icons/hi";

export const features = [
  {
    id: '1',
    Icon: <AiFillRobot size={40} fill='#777777' />,
    label: 'Ai Agent (Real time)'
  },
  {
    id: '2',
    Icon: <SAAS height={40} />,
    label: 'SAAS base solution'
  },
  {
    id: '3',
    Icon: <HiCursorClick size={40} fill='#777777' />,
    label: 'One-click installation'
  },
  {
    id: '4',
    Icon: <BiCustomize size={40} fill='#777777' />,
    label: 'Customizable Dashboards'
  },
  {
    id: '5',
    Icon: <CgInsights size={40} fill='#777777' color='#777777' />,
    label: `Insights Based \n Dashboards`
  },
  {
    id: '6',
    Icon: <BsFillLightningFill size={40} fill='#777777' />,
    label: '15 Min Installation Time'
  },
];

export const featuresBig = [
  {
    id: '1',
    Icon: <AiFillRobot size={80} fill='#777777' />,
    label: 'Ai Agent (Real time)'
  },
  {
    id: '2',
    Icon: <SAAS height={80} />,
    label: 'SAAS base solution'
  },
  {
    id: '3',
    Icon: <HiCursorClick size={80} fill='#777777' />,
    label: 'One-click installation'
  },
  {
    id: '4',
    Icon: <BiCustomize size={80} fill='#777777' />,
    label: 'Customizable Dashboards'
  },
  {
    id: '5',
    Icon: <CgInsights size={80} fill='#777777' color='#777777' />,
    label: `Insights Based \n Dashboards`
  },
  {
    id: '6',
    Icon: <BsFillLightningFill size={80} fill='#777777' />,
    label: '15 Min Installation Time'
  },
];

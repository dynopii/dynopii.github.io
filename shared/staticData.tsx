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
    label: `Insights Based Dashboards`
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

const startupFeatures = [
  {
      id: '1',
      feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
      provided: true
  },
  {
      id: '2',
      feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
      provided: true
  },
  {
      id: '3',
      feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
      provided: false
  },
  {
      id: '4',
      feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
      provided: false
  },
]

const premiumFeatures = [
  {
      id: '1',
      feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
      provided: true
  },
  {
      id: '2',
      feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
      provided: true
  },
  {
      id: '3',
      feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
      provided: true
  },
  {
      id: '4',
      feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
      provided: false
  },
]

const enterpriseFeatures = [
  {
      id: '1',
      feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
      provided: true
  },
  {
      id: '2',
      feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
      provided: true
  },
  {
      id: '3',
      feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
      provided: true
  },
  {
      id: '4',
      feature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
      provided: true
  },
]

export const packs = [
  {
      id: '1',
      type: 'STARTUP',
      title: 'Startup Pack',
      price: 25.99,
      description: 'For the startup team who work with ',
      features: startupFeatures
  },
  {
      id: '2',
      type: 'PREMIUM',
      title: 'Premium Pack',
      price: 35.99,
      description: 'For the organisation team who work with ',
      features: premiumFeatures,
  },
  {
      id: '3',
      type: 'ENTERPRISE',
      title: 'Enterprise Pack',
      price: 125.99,
      description: 'For the enterprise team who work with ',
      features: enterpriseFeatures
  },
]
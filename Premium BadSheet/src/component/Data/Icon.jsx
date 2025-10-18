import { FaCottonBureau } from "react-icons/fa";
import { FaWeight } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { FaTemperatureLow } from "react-icons/fa6";
import { GiChestnutLeaf } from "react-icons/gi";
const icon = [
  {
    name: "100% cotton",
    icon: <FaCottonBureau />,
  },
  {
    name: "Lightweight",
    icon: <FaWeight />,
  },
  {
    name: "Soft & Breathable",
    icon: <FaLeaf />,
  },
  {
    name: "Low Maintenance",
    icon: <GrUserSettings />,
  },
  {
    name: "Temperature Balanced",
    icon: <FaTemperatureLow />,
  },
  {
    name: "Hypoallergenic",
    icon: <GiChestnutLeaf />,
  },
];
export { icon };

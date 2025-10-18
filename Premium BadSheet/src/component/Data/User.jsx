import { FaHeart } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { TbCoinRupee } from "react-icons/tb";
import { GrDeliver } from "react-icons/gr";
import { FaCcMastercard } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

const user = [
  {
    name: "100% Authentic Products",
    icon: <IoHomeOutline size={50} className="bg-pink-500 text-amber-100 rounded-full w-full py-2 px-2" />,
    param: "You get what you read & see",
  },
  {
    name: "100% Authentic Products",
    icon: <FaHeart size={50} className="text-green-500" />,
    param: "You get what you read & see",
  },
  {
    name: "100% Authentic Products",
    icon: <AiFillLike size={50} className="text-blue-500" />,
    param: "You get what you read & see",
  },
  {
    name: "100% Authentic Products",
    icon: <TbCoinRupee size={50} className="text-yellow-500" />,
    param: "You get what you read & see",
  },
  {
    name: "100% Authentic Products",
    icon: <GrDeliver size={50} className="text-purple-500" />,
    param: "You get what you read & see",
  },
  {
    name: "100% Authentic Products",
    icon: <FaCcMastercard size={50} className="text-green-600" />,
    param: "You get what you read & see",
  },
];

export {user};
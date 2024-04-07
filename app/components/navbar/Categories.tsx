"use client";
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the Sea Beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has a Windmill!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    decription: "This property is Modern",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    decription: "This property is in the countryside",
  },
  {
    label: "Pools",
    icon: GiIsland,
    decription: "This property is on an Island",
  },
  {
    label: "Pools",
    icon: TbPool,
    decription: "This property has a Pool",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    decription: "This property is close to a Lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    decription: "This property has Skiing activities",
  },
  {
    label: "Castle",
    icon: GiCastle,
    decription: "This property is a Castle",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    decription: "This property has camping activies",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    decription: "This property is Modern",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    decription: "This property is inside a Cave",
  },
  {
    label: "Desert",
    icon: GiCactus,
    decription: "This property is in the Desert",
  },
  {
    label: "Barns",
    icon: GiBarn,
    decription: "This property is in the Barn",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    decription: "This property is Luxurious",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;

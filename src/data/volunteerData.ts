import { StaticImageData } from "next/image";
import volunteer2Thumb_1 from "@/assets/img/valunteer/volunteer-two1.jpg";
import volunteer2Thumb_2 from "@/assets/img/valunteer/volunteer-two2.jpg";
import volunteer2Thumb_3 from "@/assets/img/valunteer/volunteer-two3.jpg";
import volunteer2Thumb_4 from "@/assets/img/valunteer/volunteer-two4.jpg";
import volunteer2Thumb_5 from "@/assets/img/valunteer/volunteer-two5.jpg";

interface DataType {
  id: number;
  page: string;
  thumb: StaticImageData;
  name: string;
  profession: string;
  item_bg?: string;
}

const volunteer_data: DataType[] = [
  {
    id: 1,
    page: "home_2",
    thumb: volunteer2Thumb_1,
    name: "Romain BAYAMA",
    profession: "Ingenieur Concepteur",
  },
  {
    id: 2,
    page: "home_2",
    thumb: volunteer2Thumb_2,
    name: "Crispin KABASELE",
    profession: "Expert Comptable",
    item_bg: "valunteer-two-item__des--yellow",
  },
  {
    id: 3,
    page: "home_2",
    thumb: volunteer2Thumb_3,
    name: "Blaise NGUNGA",
    profession: "Ingenieur Concepteur",
    item_bg: "valunteer-two-item__des--green",
  },
  {
    id: 4,
    page: "home_2",
    thumb: volunteer2Thumb_4,
    name: "Dr Odette SANGUPAMBA",
    profession: "Docteur en Informatique",
  },
  {
    id: 5,
    page: "home_2",
    thumb: volunteer2Thumb_5,
    name: "Roland MATANGI",
    profession: "Ingenieur Concepteur",
  },
];

export default volunteer_data;

import Image from "next/image";
import PetDogCatImage from "@/assets/images/logo-dog-cat.png";
import "./PetHeader.styles.css";
import AdoptapetIcon from "@/components/Icons/AdoptapetIcon";
import FilterIcon from "@/components/Icons/FilterIcon";

interface Props {
  currentPage: number;
}

export default function PetHeader({ currentPage = 0 }: Props) {
  return (
    <div className="pet-header-container">
      <div className="pet-header-content">
        <Image
          src={PetDogCatImage}
          className="pet-header-image"
          alt="cat dog happy"
        />
        <AdoptapetIcon />
      </div>
      <div className="pet-header-filter">
        <h3>Page {currentPage}</h3>
        <button className="pet-header-filter--button">
          <FilterIcon className="pet-header-filter--button-icon" />
        </button>
      </div>
    </div>
  );
}

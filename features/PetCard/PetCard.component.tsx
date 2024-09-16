"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import TextTruncate from "react-text-truncate";
import AdoptapetIcon from "@/components/Icons/AdoptapetIcon";
import "./PetCard.styles.css";

interface PhotoProp {
  small: string;
  medium: string;
  large: string;
  full: string;
}
interface Props {
  petData?: {
    id: string;
    name: string;
    description: string;
    status: string;
    tags?: string[];
    photos?: PhotoProp[];
  };
}

export default function PetCard({
  petData = {
    id: "",
    name: "",
    description: "",
    status: "unknown",
    tags: [],
    photos: [],
  },
}: Props) {
  return (
    <div className="pet-card-container">
      {petData && petData?.photos && petData?.photos?.length > 0 ? 
        (
          <div className="pet-card-slider">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              className="pet-card-slider"
            >
              {petData.photos.map((photo, index) => (
                <div key={`pet-photo-${petData.id}-${index}`}>
                  <div className="pet-card-test">
                    <Image
                      src={photo.small}
                      alt={petData.name}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="pet-card-slider bg-[#29C254] flex justify-center items-center">
            <AdoptapetIcon className="w-36"/>
          </div>
        )}

      <Link href={`./${petData.id}`} className="pet-card-link" prefetch={false}>
        <div className="pet-card-description">
          <h1>
            {petData?.name}
            <small
              className={`pet-card-description--status ${
                petData.status !== "adoptable" &&
                "pet-card-description--status-done"
              }`}
            >
              {petData?.status}
            </small>
          </h1>
          <TextTruncate
            line={2}
            element="span"
            truncateText="…"
            text={petData?.description}
          />
          <div className="pet-card-tags">
            {petData.tags &&
              petData.tags.map((tag, index) => (
                <span key={`pet-tag-${petData.id}-${index}`}>#{tag}</span>
              ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

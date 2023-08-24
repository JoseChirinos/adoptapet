"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import TextTruncate from "react-text-truncate";
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
      <div className="pet-card-slider">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          className="pet-card-slider"
        >
          {petData.photos &&
            petData.photos.map((photo, index) => (
              <div key={`pet-photo-${petData.id}-${index}`}>
                <div className="pet-card-test">
                  <Image
                    src={photo.medium}
                    alt={petData.name}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={photo.small}
                  />
                </div>
              </div>
            ))}
        </Slider>
      </div>

      <Link href={`./${petData.id}`} className="pet-card-link">
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

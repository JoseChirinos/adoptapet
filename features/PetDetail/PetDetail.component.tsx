"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Slider from "react-slick";
import PetDogCatImage from "@/assets/images/logo-dog-cat.png";
import AdoptapetIcon from "@/components/Icons/AdoptapetIcon";

import "./PetDetail.styles.css";
import PetResume from "../PetResume/PetResume.component";
import PetFooter from "../PetFooter/PetFooter.component";
import ButtonBack from "@/components/ButtonBack/ButtonBack.component";

interface Props {
  petData?: any;
}

export default function PetDetail({ petData }: Props) {
  const router = useRouter();
  const headerPhoto =
    petData?.primary_photo_cropped?.small ||
    "https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      <div
        className="pet-detail-background shrink-0"
        style={{
          backgroundImage: `url(${headerPhoto})`,
        }}
      >
        <div className="relative container mx-auto">
          <div className="absolute top-14 text-white pl-8 xl:pl-0">
            <ButtonBack text="Go Back" onClick={() => router.back()} />
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center -mt-[40px] sm:-mt-[80px] lg:mt-0">
          <Image
            src={PetDogCatImage}
            className="pet-detail-image"
            alt="cat dog happy"
          />
          <AdoptapetIcon className="pet-detail-icon" />
        </div>
      </div>
      <div className="pet-detail-zone lg:w-[580px]">
        {petData && petData?.photos && petData?.photos?.length > 0 && (
          <div className="pet-detail-slider lg:w-[580px]">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              className="pet-detail-slider"
            >
              {petData?.photos.map((photo: any, index: number) => (
                <div key={`pet-photo-${petData?.id}-${index}`}>
                  <div className="pet-detail-test">
                    <Image
                      src={photo?.large}
                      alt={petData?.name}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      placeholder="blur"
                      blurDataURL={photo?.small}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
        <div className="pet-detail-description">
          <h1>
            {petData?.name}
            <small
              className={`pet-detail-description--status ${
                petData?.status !== "adoptable" &&
                "pet-detail-description--status-done"
              }`}
            >
              {petData?.status}
            </small>
          </h1>
          <span>{petData?.description}</span>
          <div className="pet-detail-tags">
            {petData.tags &&
              petData.tags.map((tag: any, index: number) => (
                <span key={`pet-tag-detail-${petData.id}-${index}`}>
                  #{tag}
                </span>
              ))}
          </div>
        </div>
        <div className="pet-detail-resume">
          <PetResume petData={petData} />
        </div>
      </div>
      <div className="pet-detail-back">
        <ButtonBack text="Go Back" onClick={() => router.back()} />
      </div>
      <div className="pet-detail-footer">
        <PetFooter />
      </div>
    </>
  );
}

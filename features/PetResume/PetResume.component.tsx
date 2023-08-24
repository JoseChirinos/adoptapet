import DogIcon from "@/components/Icons/DogIcon";
import "./PetResume.styles.css";
import CatIcon from "@/components/Icons/CatIcon";

interface Props {
  petData?: any;
}

const ListResume = [
  {
    label: "TYPE",
    level: 1,
    key: ["type"],
  },
  {
    label: "BREEDS",
    level: 2,
    key: ["breeds", "primary"],
  },
  {
    label: "GENDER",
    level: 1,
    key: ["gender"],
  },
  {
    label: "SIZE",
    level: 1,
    key: ["size"],
  },
  {
    label: "AGE",
    level: 1,
    key: ["age"],
  },
  {
    label: "COLOR",
    level: 2,
    key: ["colors", "primary"],
  },
];
export default function PetResume({ petData }: Props) {
  const getData = (track: any, data: any): string => {
    let currentData = data;
    for (let i = 0; i < track.level; i++) {
      currentData = currentData[track.key[i]];
    }
    return currentData;
  };
  return (
    <div className="pet-resume-container">
      <div className="pet-resume-type">
        {petData && petData?.type === "Cat" ? (
          <CatIcon color="#FFF" />
        ) : (
          <DogIcon color="#FFF" />
        )}
      </div>
      <div className="pet-resume-data">
        {ListResume.map((itemResume, index) => (
          <div className="pet-resume-data--item" key={`item-resume-${index}`}>
            <strong>{itemResume.label}</strong>
            <span>{getData(itemResume, petData)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

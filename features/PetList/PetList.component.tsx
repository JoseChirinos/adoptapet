import PetCard from "../PetCard/PetCard.component";
import "./PetList.styles.css";

interface Props {
  petList?: Array<any>;
}

export default function PetList({ petList = [] }: Props) {
  return (
    <div className="pet-list-container">
      {petList &&
        petList.map((pet, index) => (
          <PetCard
            petData={{
              id: pet?.id,
              name: pet?.name,
              description: pet?.description,
              status: pet?.status,
              tags: pet?.tags,
              photos: pet?.photos,
            }}
            key={`pet-item-${index}`}
          />
        ))}
    </div>
  );
}

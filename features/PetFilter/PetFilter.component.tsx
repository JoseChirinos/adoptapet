import "./PetFilter.styles.css";
import ButtonBack from "@/components/ButtonBack/ButtonBack.component";
export default function PetFilter() {
  return (
    <div className="pet-filter-overlay">
      <div className="pet-filter-content">
        <div className="pet-filter-navigator">
          <ButtonBack text="Go Back" />
        </div>
        <div className="pet-filter-options"></div>
        <div className="pet-filter-action"></div>
        <div className="pet-filter-action-mobile"></div>
      </div>
    </div>
  );
}

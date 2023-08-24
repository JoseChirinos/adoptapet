import AdoptapetIcon from "@/components/Icons/AdoptapetIcon";
import "./PetFooter.styles.css";

export default function PetFooter() {
  return (
    <div className="pet-footer-container">
      <AdoptapetIcon />
      <h3 className="pet-footer-author">by Jose Chirinos</h3>
    </div>
  );
}

import ButtonBack from "@/components/ButtonBack/ButtonBack.component";
import ButtonNext from "@/components/ButtonNext/ButtonNext.component";

import "./PetPaginator.styles.css";
import Link from "next/link";

interface Props {
  currentPage?: number;
  totalPage?: number;
}
export default function PetPaginator({
  currentPage = 0,
  totalPage = 0,
}: Props) {
  const backPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <div className="pet-paginator-container">
      <div
        className="pet-paginator-wrapper"
        style={{
          justifyContent:
            currentPage > 1 && currentPage < totalPage
              ? "space-between"
              : "center",
        }}
      >
        <div style={{ display: currentPage > 1 ? "block" : "none" }}>
          <Link href={`?page=${backPage}`} className="pet-paginator-link">
            <ButtonBack text="back" />
          </Link>
        </div>
        <div
          className="pet-paginator-current"
          style={{ display: currentPage > 1 ? "block" : "none" }}
        >
          {currentPage}
        </div>
        <div style={{ display: nextPage < totalPage ? "block" : "none" }}>
          <Link href={`?page=${nextPage}`} className="pet-paginator-link">
            <ButtonNext text="next" />
          </Link>
        </div>
      </div>
    </div>
  );
}

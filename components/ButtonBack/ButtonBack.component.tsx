"use client";
import ArrowLeftIcon from "../Icons/ArrowLeftIcon";
import TextUnderline from "../TextUnderline/TextUnderline.component";
import "./ButtonBack.styles.css";

interface Props {
  onClick?: () => void;
  text: string;
}

export default function ButtonBack({ onClick = () => {}, text = "" }: Props) {
  return (
    <div onClick={onClick} className="petui-button-back-wrapper">
      <ArrowLeftIcon className="petui-button-back-icon" />
      <TextUnderline text={text} />
    </div>
  );
}

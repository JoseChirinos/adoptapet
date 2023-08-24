"use client";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import TextUnderline from "../TextUnderline/TextUnderline.component";
import "./ButtonNext.styles.css";

interface Props {
  onClick?: () => void;
  text: string;
}

export default function ButtonNext({ onClick = () => {}, text = "" }: Props) {
  return (
    <div onClick={onClick} className="petui-button-next-wrapper">
      <TextUnderline text={text} />
      <ArrowRightIcon className="petui-button-next-icon" />
    </div>
  );
}

import "./TextUnderline.styles.css";

interface Props {
  text: string;
}

export default function TextUnderline({ text = "" }: Props) {
  return <span className="petui-text-underline">{text}</span>;
}

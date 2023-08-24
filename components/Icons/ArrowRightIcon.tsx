interface Props {
  className?: string;
}
export default function ArrowRightIcon({ className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="19"
      fill="none"
      viewBox="0 0 11 19"
      className={className}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1.577l8.211 8.212L1 18"
      ></path>
    </svg>
  );
}

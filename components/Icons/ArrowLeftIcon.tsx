interface Props {
  className?: string;
}
export default function ArrowLeftIcon({ className = "" }: Props) {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.211 1.577L1 9.789 9.21 18"
      ></path>
    </svg>
  );
}

interface Props {
  className?: string;
}
export default function FilterIcon({ className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      fill="none"
      viewBox="0 0 23 23"
      className={className}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.144 1h18.301c.632 0 1.144.512 1.144 1.144v1.814c0 .303-.12.594-.335.809l-7.337 7.336a1.144 1.144 0 00-.335.809v7.212c0 .744-.7 1.29-1.421 1.11l-2.288-.572a1.144 1.144 0 01-.866-1.11v-6.64c0-.303-.12-.594-.335-.809L1.335 4.766A1.144 1.144 0 011 3.958V2.144C1 1.512 1.512 1 2.144 1z"
      ></path>
    </svg>
  );
}

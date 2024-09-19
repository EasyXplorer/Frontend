import { IconsType } from "src/types/Icons";

function ShieldCheck({ extraClassName = "", extraProps }: IconsType) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-shield-check ${extraClassName}`}
      {...extraProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
      <path d="M15 19l2 2l4 -4" />
    </svg>
  );
}

export default ShieldCheck;

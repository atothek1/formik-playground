import React from "react";

interface PropsHelpIcon {
  readonly title?: string;
  readonly width?: string;
  readonly height?: string;
}

export function HelpIcon({ title, width, height }: PropsHelpIcon): JSX.Element {
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={{ width, height }}
    >
      {title && <title>{title}</title>}
      <path
        style={{ fill: "#0A4EAF" }}
        d="M256,512c-68.38,0-132.667-26.629-181.02-74.98C26.629,388.667,0,324.38,0,256
	S26.629,123.333,74.98,74.98C123.333,26.629,187.62,0,256,0s132.667,26.629,181.02,74.98C485.371,123.333,512,187.62,512,256
	s-26.629,132.667-74.98,181.02C388.667,485.371,324.38,512,256,512z"
      />
      <path
        style={{ fill: "#063E8B" }}
        d="M437.02,74.98C388.667,26.629,324.38,0,256,0v512c68.38,0,132.667-26.629,181.02-74.98
	C485.371,388.667,512,324.38,512,256S485.371,123.333,437.02,74.98z"
      />
      <path
        style={{ fill: "#FFFFFF" }}
        d="M256,185c-30.327,0-55-24.673-55-55s24.673-55,55-55s55,24.673,55,55S286.327,185,256,185z M301,395
	V215H191v30h30v150h-30v30h140v-30H301z"
      />
      <g>
        <path
          style={{ fill: "#CCEFFF" }}
          d="M256,185c30.327,0,55-24.673,55-55s-24.673-55-55-55V185z"
        />
        <polygon
          style={{ fill: "#CCEFFF" }}
          points="301,395 301,215 256,215 256,425 331,425 331,395 	"
        />
      </g>
    </svg>
  );
}

HelpIcon.defaultProps = {
  width: "1.6rem",
  height: "1.6rem"
};

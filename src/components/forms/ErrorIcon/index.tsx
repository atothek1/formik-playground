import React from "react";

interface PropsErrorIcon {
  readonly title?: string;
  readonly width?: string;
  readonly height?: string;
}

export function ErrorIcon({
  title,
  width,
  height
}: PropsErrorIcon): JSX.Element {
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
        style={{ fill: "#FF3636" }}
        d="M256,0C115.3,0,0,115.3,0,256s115.3,256,256,256s256-115.3,256-256S396.7,0,256,0z"
      />
      <path
        style={{ fill: "#F40000" }}
        d="M512,256c0,140.7-115.3,256-256,256V0C396.7,0,512,115.3,512,256z"
      />
      <polygon
        style={{ fill: "#E7E7E7" }}
        points="298.299,256 383.2,340.901 340.901,383.2 256,298.299 171.099,383.2 128.8,340.901 
	213.701,256 128.8,171.099 171.099,128.8 256,213.701 340.901,128.8 383.2,171.099 "
      />
      <polygon
        style={{ fill: "#D3D3D8" }}
        points="298.299,256 383.2,340.901 340.901,383.2 256,298.299 256,213.701 340.901,128.8 
	383.2,171.099 "
      />
    </svg>
  );
}

ErrorIcon.defaultProps = {
  width: "1.6rem",
  height: "1.6rem"
};

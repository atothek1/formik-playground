import React from "react";
import { StyledSection } from "./styled";

interface SectionProps {
  readonly title?: string;
  readonly children: React.ReactNode;
}
export function Section({ title, children }: SectionProps) {
  return (
    <StyledSection>
      {title && <h2>{title}</h2>}
      {children}
    </StyledSection>
  );
}

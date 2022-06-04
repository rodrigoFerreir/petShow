import React from "react";

import { TitleStyled, Subtitle } from "./Title.styles";

interface PropsTitle {
  title: string;
  subtitle?: string;
}

const Title = ({ title, subtitle }: PropsTitle) => {
  return (
    <>
      <TitleStyled>{title}</TitleStyled>
      <Subtitle>{subtitle}</Subtitle>
    </>
  );
};

export default Title;

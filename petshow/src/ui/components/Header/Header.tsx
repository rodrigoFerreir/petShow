import React from "react";

import { HeaderContainer, Logo } from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/assets/logo.svg" alt="Adote um Pet" />
    </HeaderContainer>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../images/logos/boldtechlogo2.png";
// import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";
import { BrandLogoContainer, LogoImage, LogoTitle, StyledLink } from "./style";

export function BrandLogo(props) {
  const { logoSize, textSize, color, hideLogo, hideLogoTitle } = props;
  const { isMobile, setIsMobile } = useState(false);
  // const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <BrandLogoContainer>
      {!hideLogo && (
        <Link to="/">
          <LogoImage size={logoSize}>
            <img src={LogoImg} alt="BoldTech ICT Solutions" />
          </LogoImage>
        </Link>
      )}
      {!hideLogoTitle && (
        <StyledLink to="/">
          <LogoTitle size={textSize} color={color}>
            Bold Vote
          </LogoTitle>
        </StyledLink>
      )}
    </BrandLogoContainer>
  );
}

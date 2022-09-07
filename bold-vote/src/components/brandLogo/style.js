import styled from "styled-components";
import { Link } from "react-router-dom";

export const BrandLogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoImage = styled.div`
    width: ${({size}) => (size ? size + "px" : "6em")};
    height: ${({size}) => (size ? size + "px" : "6em")};

    img {
        width: 100%;
        height: 100%;
    }
`;

export const LogoTitle = styled.h2`
    margin: 0;
    font-size: ${({ size }) => (size ? size + "px" : "30px")};
    color: ${({ color }) => (color ? color : "var(--primary-color)")};
    font-weight: 900;
    margin-left: 6px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;
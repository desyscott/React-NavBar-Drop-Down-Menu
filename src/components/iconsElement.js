import styled from "styled-components";
import { FaFirstdraft, FaShopify, FaCaretDown } from "react-icons/fa";

export const ShopifyIcon = styled(FaShopify)`
  font-size: 2.5rem;
`;

export const NavLogoIcon = styled(FaFirstdraft)`
  font-size: 1.5rem;
  margin-left: 10px;
`;

export const SideDropDownIcon = styled(FaCaretDown)`
  font-size: 1rem;
  margin-top: auto;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    right: 20px;
    align-items: center;
    cursor: pointer;
  }
`;

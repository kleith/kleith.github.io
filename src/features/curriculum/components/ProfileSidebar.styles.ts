import styled from "styled-components";

import { shadow } from "@/utils/css";
import { device } from "@/config/devices";

const borderRadius = "15px";

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.blue[0]};
  color: #fff;
  padding: 20px 25px;

  h3 {
    /* margin-top: 40px; */
  }

  @media ${device.tablet} {
    border-bottom-left-radius: ${borderRadius};
    border-top-left-radius: ${borderRadius};
  }

  @media print {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    height: calc(100vh - 40px);

    h2 {
      font-size: 1.4em;
    }
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
  display: block;
  max-width: 70%;
  margin: 20px auto;
`;

export const Fullaname = styled.h2`
  margin: 20px 0px 0px;
  text-align: center;
  text-shadow: ${shadow(3, "#000")};
`;

export const Work = styled.p`
  color: ${({ theme }) => theme.colors.blue[3]};
  margin: 5px auto 30px !important;
  text-align: center;
  text-shadow: ${shadow(2, "#000")};
`;

export const Divider = styled.hr`
  border-color: rgba(255, 255, 255, 0.2);
`;

export const Information = styled.div`
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  & ul li {
    display: flex;
    align-items: center;
    svg {
      color: ${({ theme }) => theme.colors.blue[1]};
      margin-right: 9px;
      min-width: 15px;
    }
  }
`;

export const Socials = styled.ul`
  & li {
    display: inline-flex !important;

    a:hover svg {
      color: ${({ theme }) => theme.colors.blue[1]} !important;
    }

    svg {
      color: #fff !important;
      width: 30px;
      height: 30px;
    }
  }

  @media print {
    li {
      margin-bottom: 10px;
      svg {
        display: none;
      }
    }
    a::before {
      content: attr(title) ": ";
    }
    a::after {
      content: attr(aria-label);
      text-decoration: underline;
    }
  }
`;

export const ChipContainer = styled.div`
  margin: 0 -5px;
`;

export const Chip = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[3]};
  border-radius: 10px;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  margin: 5px;
  padding: 5px 10px;

  color: ${({ theme }) => theme.colors.main[0]};
  box-shadow: ${({ theme }) => shadow(3, theme.colors.blue[2] as `#${string}`)};

  @media print {
    color: ${({ theme }) => theme.colors.secondary[0]};
    background-color: transparent;
    box-shadow: none;
    border: 1px dashed ${({ theme }) => theme.colors.blue[1]};
    font-size: 0.8em;
    margin: 3px;
    padding: 4px 6px;
  }
`;

// ----

export const SectionContainer = styled.section`
  margin-top: 2.5rem;
`;

export const SectionTitle = styled.h3`
  text-transform: uppercase;
`;

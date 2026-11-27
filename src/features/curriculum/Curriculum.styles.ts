import styled from "styled-components";

import { device } from "@/config/devices";

export const Scroller = styled.div`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 0;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.blue[1]};

  @media ${device.desktop} {
    display: none;
  }

  @media print {
    display: none;
  }
`;

export const Container = styled.div`
  font-size: 14px;

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.blue[1]};
    }
  }

  ::-moz-selection {
    color: ${({ theme }) => theme.colors.secondary[0]};
    background-color: ${({ theme }) => theme.colors.blue[1]};
  }

  ::selection {
    color: ${({ theme }) => theme.colors.secondary[0]};
    background-color: ${({ theme }) => theme.colors.blue[1]};
  }

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 310px auto;
    grid-template-rows: auto;
    margin: 20px auto;
    max-width: calc(100vw - 60px);
    @media print {
      max-width: 100%;
    }
  }

  @media ${device.desktop} {
    max-width: 1024px;
    @media print {
      max-width: 100%;
    }
  }

  @media print {
    @page {
      size: A4 portrait;
      margin: 0;
    }

    background-color: ${({ theme }) => theme.colors.blue[0]};
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: auto;
    margin: 0;
    * {
      font-size: 0.94em;
    }
  }
`;

import styled from "styled-components";

import { device } from "@/config/devices";

const borderRadius = "15px";

export const Container = styled.main`
  background-color: #fff;
  padding: 20px 30px;
  position: relative;

  @media ${device.tablet} {
    border-bottom-right-radius: ${borderRadius};
    border-top-right-radius: ${borderRadius};
  }

  @media print {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const Heading = styled.h2`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary[2]};
  color: ${({ theme }) => theme.colors.blue[1]};
  gap: 0.75rem;
  justify-content: space-between;
  margin-block: 0 1rem;
  padding-bottom: 0.5rem;
  text-transform: uppercase;

  @media print {
    font-size: 1.2rem;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.blue[1]};
  }
`;

export const Text = styled.p`
  margin: 0;
  text-align: justify;
`;

export const TimelineTitle = styled.h3`
  color: ${({ theme }) => theme.colors.blue[0]};
  flex: 1 1 240px;
  font-size: 1.05em;
  margin: 0;

  strong {
    font-weight: 500;
  }
`;

export const TimelineDescription = styled.div`
  p {
    line-height: 1.4;
  }
`;

export const EducationList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const EducationItem = styled.li`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const EducationEntryHeader = styled.div`
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.75rem;
  justify-content: space-between;
`;

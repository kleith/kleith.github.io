import styled from "styled-components";

export const TimelineRoot = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0 0 0 18px;
  position: relative;

  &::before {
    background-color: ${({ theme }) => theme.colors.secondary[2]};
    bottom: 0;
    content: "";
    left: 4px;
    position: absolute;
    top: 4px;
    width: 3px;
  }
`;

export const TimelineEntry = styled.li<{ $active: boolean }>`
  padding: 0 0 1rem;
  position: relative;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    background-color: ${({ $active, theme }) =>
      $active ? theme.colors.secondary[1] : theme.colors.blue[0]};
    border: 2px solid
      ${({ $active, theme }) => ($active ? theme.colors.blue[1] : theme.colors.secondary[1])};
    border-radius: 50%;
    content: "";
    height: ${({ $active }) => ($active ? "10px" : "8px")};
    left: ${({ $active }) => ($active ? "-19px" : "-18px")};
    position: absolute;
    top: 2px;
    width: ${({ $active }) => ($active ? "10px" : "8px")};
  }
`;

export const TimelineEntryHeader = styled.div`
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.75rem;
  justify-content: space-between;
`;

export const TimelineDescription = styled.div`
  color: ${({ theme }) => theme.colors.blue[0]};
  margin-top: 5px;

  p {
    margin: 0;
  }
`;

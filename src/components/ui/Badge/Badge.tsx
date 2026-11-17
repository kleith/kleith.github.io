import styled from "styled-components";

type BadgeColor = "primary" | "secondary";

export const Badge = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "color",
})<{ color: BadgeColor }>`
  background-color: ${({ theme }) => theme.colors.secondary[2]};
  border-radius: 6px;
  color: ${({ color, theme }) => (color === "primary" ? theme.colors.blue[0] : theme.colors.blue[2])};
  flex-shrink: 0;
  font-size: 0.9em;
  font-weight: 600;
  line-height: 1.4;
  padding: 1px 7px;
`;

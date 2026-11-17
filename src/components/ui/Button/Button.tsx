import styled from "styled-components";

type ButtonColor = "primary" | "secondary";

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "color",
})<{ color: ButtonColor }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: ${({ color, theme }) =>
    color === "secondary" ? `1px solid ${theme.colors.blue[0]}` : "0"};
  border-radius: 8px;
  padding: 10px 15px;
  background-color: ${({ color, theme }) => (color === "primary" ? theme.colors.blue[0] : "#fff")};
  color: ${({ color, theme }) =>
    color === "primary" ? theme.colors.secondary[0] : theme.colors.blue[0]};
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  text-decoration: none;
  transition:
    background-color 150ms ease,
    color 150ms ease;

  &:hover {
    background-color: ${({ color, theme }) =>
      color === "primary" ? theme.colors.blue[1] : theme.colors.secondary[2]};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue[1]};
    outline-offset: 2px;
  }
`;

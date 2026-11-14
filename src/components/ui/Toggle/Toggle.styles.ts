import styled from "styled-components";

export const ToggleContainer = styled.div<{
  $hasSelection: boolean;
  $optionCount: number;
  $selectedIndex: number;
}>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(${({ $optionCount }) => $optionCount}, minmax(0, 1fr));
  padding: 4px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary[2]};

  &::before {
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 4px;
    width: calc((100% - 8px) / ${({ $optionCount }) => $optionCount});
    border-radius: 7px;
    background-color: ${({ theme }) => theme.colors.blue[0]};
    content: "";
    opacity: ${({ $hasSelection }) => Number($hasSelection)};
    transform: translateX(${({ $selectedIndex }) => $selectedIndex * 100}%);
    transition:
      transform 180ms ease,
      opacity 180ms ease;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      transition: none;
    }
  }
`;

export const ToggleOptionButton = styled.button<{ $selected: boolean }>`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 7px;
  padding: 7px 12px;
  background-color: transparent;
  color: ${({ $selected, theme }) =>
    $selected ? theme.colors.secondary[0] : theme.colors.main[0]};
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  transition: color 180ms ease;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue[1]};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

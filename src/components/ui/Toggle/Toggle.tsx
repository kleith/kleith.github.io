import { ToggleContainer, ToggleOptionButton } from "./Toggle.styles";

type ToggleOption = {
  label: string;
  value: string;
};

type ToggleProps = {
  "aria-label": string;
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
};

export const Toggle: React.FC<ToggleProps> = ({
  "aria-label": ariaLabel,
  options,
  value,
  onChange,
}) => {
  const selectedIndex = options.findIndex((option) => option.value === value);

  return (
    <ToggleContainer
      role='group'
      aria-label={ariaLabel}
      $selectedIndex={Math.max(selectedIndex, 0)}
      $hasSelection={selectedIndex >= 0}
      $optionCount={Math.max(options.length, 1)}
    >
      {options.map((option) => (
        <ToggleOptionButton
          key={option.value}
          type='button'
          aria-pressed={value === option.value}
          $selected={value === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </ToggleOptionButton>
      ))}
    </ToggleContainer>
  );
};

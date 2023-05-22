import { useEffect, useRef, useState } from "react";
import styles from "@/components-styles/CustomDropDown.module.css";
import { DropdownIcon } from "../Icons";
import CustomDropDownProps from "./type";

const CustomDropDown = ({
  onChange,
  options,
  cover,
  defaultOption,
}: CustomDropDownProps) => {
  const [open, setOpen] = useState(false);
  const [currentOptionValue, setCurrentOptionValue] = useState(
    defaultOption || options[0].value
  );

  const currentOptionLabel = options.find(
    (opt) => opt.value === currentOptionValue
  )?.label;

  useEffect(() => {
    onChange(
      options.find((opt) => opt.value === currentOptionValue) ||
        defaultOption ||
        options[0]
    );
  }, [currentOptionValue, defaultOption, onChange, options]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${styles.customDropDown} ${open ? styles.customOpen : ""}`}
      onClick={() => setOpen(!open)}
      ref={dropdownRef}
    >
      {cover ?? (
        <div className={styles.dropDownSelected}>
          <span>{currentOptionLabel}</span>
          <DropdownIcon />
        </div>
      )}
      <ul className={styles.dropDownOptions}>
        {options.map((option, idx) => (
          <li
            onClick={() => setCurrentOptionValue(option.value)}
            key={`${option.value}-${idx}`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomDropDown;

import { ReactNode } from "react";

type Option = {
  value: string;
  label: ReactNode | string;
};

type CustomDropDownProps = {
  options: Option[];
  onChange: (value: Option) => void;
  cover?: ReactNode;
  defaultOption?: Option;
};

export default CustomDropDownProps;

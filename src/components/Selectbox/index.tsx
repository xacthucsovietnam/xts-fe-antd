import { Select as AntdSelect, SelectProps } from 'antd';
import './Selectbox.css';

const { Option } = AntdSelect;

interface CustomSelectboxProps extends SelectProps {
  options: { value: string | number; label: string }[];
  customClass?: string;
}

const CustomSelectbox = ({ options, customClass, ...props }: CustomSelectboxProps) => {
  return (
    <AntdSelect
      className={`custom-selectbox ${customClass || ''}`}
      {...props}
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </AntdSelect>
  );
};

export default CustomSelectbox;
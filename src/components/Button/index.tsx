import { Button as AntdButton, ButtonProps } from 'antd';
import './Button.css';

interface CustomButtonProps extends ButtonProps {
  isLoading?: boolean;
  customClass?: string;
}

const CustomButton = ({ isLoading, customClass, ...props }: CustomButtonProps) => {
  return (
    <AntdButton
      loading={isLoading}
      className={`custom-button ${customClass || ''}`}
      {...props}
    />
  );
};

export default CustomButton;
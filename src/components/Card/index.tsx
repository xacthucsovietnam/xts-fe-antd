import { Card as AntdCard, CardProps } from 'antd';
import './Card.css';

interface CustomCardProps extends CardProps {
  customClass?: string;
}

const CustomCard = ({ customClass, children, ...props }: CustomCardProps) => {
  return (
    <AntdCard
      className={`custom-card ${customClass || ''}`}
      variant = "outlined"
      {...props}
    >
      {children}
    </AntdCard>
  );
};

export default CustomCard;
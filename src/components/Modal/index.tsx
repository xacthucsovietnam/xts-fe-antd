import { Modal as AntdModal, ModalProps } from 'antd';
import './Modal.css';

interface CustomModalProps extends ModalProps {
  title: string;
  onOk?: () => void;
  onCancel?: () => void;
}

const CustomModal = ({ title, onOk, onCancel, children, ...props }: CustomModalProps) => {
  return (
    <AntdModal
      title={title}
      onOk={onOk}
      onCancel={onCancel}
      className="custom-modal"
      {...props}
    >
      {children}
    </AntdModal>
  );
};

export default CustomModal;
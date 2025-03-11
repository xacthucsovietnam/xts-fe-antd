import { Form as AntdForm, FormInstance } from 'antd';
import './FormWrapper.css';

const { useForm } = AntdForm;

interface FormWrapperProps {
  form?: FormInstance;
  onFinish?: (values: any) => void;
  children: React.ReactNode;
  initialValues?: any;
}

const FormWrapper = ({ onFinish, children, initialValues }: FormWrapperProps) => {
  const [form] = useForm();

  const handleFinish = (values: any) => {
    onFinish?.(values);
  };

  return (
    <AntdForm
      form={form}
      onFinish={handleFinish}
      initialValues={initialValues}
      className="form-wrapper"
      layout="vertical"
    >
      {children}
    </AntdForm>
  );
};

export default FormWrapper;
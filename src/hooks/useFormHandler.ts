import { useForm } from 'antd/es/form/Form';
import { useCallback } from 'react';

export const useFormHandler = <T>(onSubmit: (values: T) => void) => {
  const [form] = useForm();

  const handleFinish = useCallback(
    (values: T) => {
      onSubmit(values);
    },
    [onSubmit]
  );

  const resetForm = useCallback(() => {
    form.resetFields();
  }, [form]);

  return { form, handleFinish, resetForm };
};
import { Form, Input } from 'antd';
import { CustomButton, FormWrapper } from '../index';
import { useCustomTranslation } from '../../hooks';
import { useFormHandler } from '../../hooks';
import LanguageSwitcher from '../LanguageSwitcher';
import { useNavigate } from 'react-router-dom';

interface RegisterFormProps {
  onSubmit: (values: { phone: string; password: string; passwordConfirm: string }) => void;
}

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const { t } = useCustomTranslation();
  const { form, handleFinish } = useFormHandler(onSubmit);
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      {/* Thêm LanguageSwitcher ở góc trên bên phải */}
      <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        <LanguageSwitcher />
      </div>
      <FormWrapper form={form} onFinish={handleFinish}>
        <Form.Item
          label={t('register.phone')}
          name="phone"
          rules={[{ required: true, message: t('register.phoneRequired') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t('register.password')}
          name="password"
          rules={[{ required: true, message: t('register.passwordRequired') }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label={t('register.passwordConfirm')}
          name="passwordConfirm"
          dependencies={['password']}
          rules={[
            { required: true, message: t('register.passwordConfirmRequired') },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('register.passwordMismatch')));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          <CustomButton type="default" onClick={handleBackToLogin} style={{ width: '48%' }}>
            {t('register.back')}
          </CustomButton>
          <CustomButton type="primary" htmlType="submit" style={{ width: '48%' }}>
            {t('register.submit')}
          </CustomButton>
        </div>
      </FormWrapper>
    </div>
  );
};

export default RegisterForm;
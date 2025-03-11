import { Form, Input, Checkbox } from 'antd';
import { CustomButton, FormWrapper } from '../index';
import { useCustomTranslation } from '../../hooks';
import { useFormHandler } from '../../hooks';
import LanguageSwitcher from '../LanguageSwitcher';

interface LoginFormProps {
  onSubmit: (values: { identifier: string; password: string; rememberMe: boolean }) => void;
  onZaloLogin: () => void;
  onRegisterRedirect: () => void; // Thêm prop để xử lý điều hướng đến trang đăng ký
}

const LoginForm = ({ onSubmit, onZaloLogin, onRegisterRedirect }: LoginFormProps) => {
  const { t } = useCustomTranslation();
  const { form, handleFinish } = useFormHandler(onSubmit);

  return (
    <div>
      {/* Thêm LanguageSwitcher ở góc trên bên phải */}
      <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        <LanguageSwitcher />
      </div>
      <FormWrapper form={form} onFinish={handleFinish}>
        <Form.Item
          label={t('login.identifier')}
          name="identifier"
          rules={[{ required: true, message: t('login.identifierRequired') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t('login.password')}
          name="password"
          rules={[{ required: true, message: t('login.passwordRequired') }]}
        >
          <Input.Password />
        </Form.Item>
        {/* Checkbox Ghi nhớ tôi và link Đăng ký ngay */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <Form.Item name="rememberMe" valuePropName="checked" noStyle>
            <Checkbox>{t('login.rememberMe')}</Checkbox>
          </Form.Item>
          <span
            style={{ color: '#1890ff', cursor: 'pointer' }}
            onClick={onRegisterRedirect}
          >
            {t('login.registerLink')}
          </span>
        </div>
        {/* Nút Đăng nhập và Đăng nhập bằng Zalo */}
        <Form.Item>
          <CustomButton type="primary" htmlType="submit" style={{ width: '100%', marginBottom: '10px' }}>
            {t('login.submit')}
          </CustomButton>
          <CustomButton onClick={onZaloLogin} style={{ width: '100%' }}>
            {t('login.zalo')}
          </CustomButton>
        </Form.Item>
      </FormWrapper>
    </div>
  );
};

export default LoginForm;
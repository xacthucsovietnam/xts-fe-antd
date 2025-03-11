// import React, { useState, useEffect } from 'react';
// import { Form, Input, Select, DatePicker, Upload, Button, Row, Col, Card, notification } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import { useCustomTranslation } from '../../hooks';
// import { useGetCurrentUser } from '../../query/user';
// import { useProvincesQuery, useDistrictsQuery, useWardsQuery } from '../../query/location';
// import { updateProfile } from '../../api/user';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../store/slices/userSlice';
// import moment from 'moment';
// import './UserProfile.css';

// const { Option } = Select;

// interface UserProfileProps {
//   onUpdateSuccess?: () => void;
// }

// const UserProfile: React.FC<UserProfileProps> = ({ onUpdateSuccess }) => {
//   const { t } = useCustomTranslation();
//   const dispatch = useDispatch();
//   const [form] = Form.useForm();
//   const [isEditing, setIsEditing] = useState(false);
//   const [file, setFile] = useState<File | null>(null);
//   const [provinceCode, setProvinceCode] = useState<string>('');
//   const [districtCode, setDistrictCode] = useState<string>('');

//   const { data: user, isLoading: userLoading, refetch: refetchUser } = useGetCurrentUser();
//   const { data: provinces, isLoading: provincesLoading } = useProvincesQuery();
//   const { data: districts, isLoading: districtsLoading } = useDistrictsQuery(provinceCode);
//   const { data: wards, isLoading: wardsLoading } = useWardsQuery(districtCode);

//   useEffect(() => {
//     if (user) {
//       form.setFieldsValue({
//         fullName: user.data.full_name,
//         email: user.data.email,
//         phone: user.data.phone,
//         gender: user.data.gender,
//         dateOfBirth: user.data.date_of_birth ? moment(user.data.date_of_birth) : null,
//         provinceCode: user.data.province_code,
//         districtCode: user.data.district_code,
//         wardCode: user.data.ward_code,
//         addressDetail: user.data.address_detail,
//         identificationNumber: user.data.identification_number,
//         identificationIssuedPlace: user.data.identification_issued_place,
//         identificationIssuedDate: user.data.identification_issued_date ? moment(user.data.identification_issued_date) : null,
//       });
//       setProvinceCode(user.data.province_code || '');
//       setDistrictCode(user.data.district_code || '');
//     }
//   }, [user, form]);

//   const handleFileChange = (info: any) => {
//     const file = info.file.originFileObj as File;
//     if (file.size > 2 * 1024 * 1024) {
//       notification.error({ message: t('profile.uploadSizeError') });
//       return;
//     }
//     setFile(file);
//   };

//   const handleSubmit = async (values: any) => {
//     const formData = new FormData();
//     formData.append('fullName', values.fullName);
//     formData.append('email', values.email || '');
//     formData.append('gender', values.gender || '');
//     formData.append('dateOfBirth', values.dateOfBirth ? values.dateOfBirth.format('YYYY-MM-DD') : '');
//     formData.append('provinceCode', values.provinceCode);
//     formData.append('districtCode', values.districtCode);
//     formData.append('wardCode', values.wardCode);
//     formData.append('addressDetail', values.addressDetail);
//     formData.append('identificationNumber', values.identificationNumber || '');
//     formData.append('identificationIssuedPlace', values.identificationIssuedPlace || '');
//     formData.append('identificationIssuedDate', values.identificationIssuedDate ? values.identificationIssuedDate.format('YYYY-MM-DD') : '');
//     if (file) {
//       formData.append('avatarUpload', file);
//     }

//     try {
//       await updateProfile(formData);
//       notification.success({ message: t('profile.updateSuccess') });
//       setIsEditing(false);
//       refetchUser();
//       dispatch(setUser({ ...user, full_name: values.fullName, avatar: file ? URL.createObjectURL(file) : user.avatar }));
//       if (onUpdateSuccess) onUpdateSuccess();
//     } catch (error) {
//       notification.error({ message: t('profile.updateFailed') });
//     }
//   };

//   if (userLoading) return <div>{t('loading')}</div>;

//   return (
//     <Card title={t('profile.title')} style={{ maxWidth: '800px', margin: '0 auto' }}>
//       <Form form={form} layout="vertical" onFinish={handleSubmit} disabled={!isEditing}>
//         <Row gutter={[16, 16]}>
//           <Col xs={24} md={8} style={{ textAlign: 'center' }}>
//             <Upload
//               name="avatar"
//               listType="picture"
//               showUploadList={false}
//               beforeUpload={() => false}
//               onChange={handleFileChange}
//               disabled={!isEditing}
//             >
//               <div>
//                 <img src={file ? URL.createObjectURL(file) : user?.avatar || 'https://via.placeholder.com/100'} alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
//                 {isEditing && (
//                   <Button icon={<UploadOutlined />} style={{ marginTop: '8px' }}>
//                     {t('profile.uploadAvatar')}
//                   </Button>
//                 )}
//               </div>
//             </Upload>
//           </Col>
//           <Col xs={24} md={16}>
//             <Row gutter={[16, 16]}>
//               <Col xs={24} sm={12}>
//                 <Form.Item name="fullName" label={t('profile.fullName')} rules={[{ required: true, message: t('profile.fullNameRequired') }]}>
//                   <Input />
//                 </Form.Item>
//               </Col>
//               <Col xs={24} sm={12}>
//                 <Form.Item name="email" label={t('profile.email')} rules={[{ type: 'email', message: t('profile.emailInvalid') }]}>
//                   <Input />
//                 </Form.Item>
//               </Col>
//               <Col xs={24} sm={12}>
//                 <Form.Item name="phone" label={t('profile.phone')}>
//                   <Input disabled />
//                 </Form.Item>
//               </Col>
//               <Col xs={24} sm={12}>
//                 <Form.Item name="gender" label={t('profile.gender')}>
//                   <Select allowClear>
//                     <Option value={1}>{t('profile.male')}</Option>
//                     <Option value={2}>{t('profile.female')}</Option>
//                   </Select>
//                 </Form.Item>
//               </Col>
//               <Col xs={24} sm={12}>
//                 <Form.Item name="dateOfBirth" label={t('profile.dateOfBirth')}>
//                   <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD" />
//                 </Form.Item>
//               </Col>
//               <Col xs={24} sm={12}>
//                 <Form.Item name="provinceCode" label={t('profile.province')} rules={[{ required: true, message: t('profile.provinceRequired') }]}>
//                   <Select
//                     loading={provincesLoading}
//                     onChange={(value: string) => {
//                       setProvinceCode(value);
//                       form.setFieldsValue({ districtCode: undefined, wardCode: undefined });
//                     }}
//                   >
//                     {provinces?.map((province) => (
//                       <Option key={province.code} value={province.code}>
//                         {province.full_name}
//                       </Option>
//                     ))}
//                   </Select>
//                 </Form.Item>
//               </Col>
//               <Col xs={24} sm={12}>
//                 <Form.Item name="districtCode" label={t('profile.district')} rules={[{ required: true, message: t('profile.districtRequired') }]}>
//                   <Select
//                     loading={districtsLoading}
//                     onChange={(value: string) => {
//                       setDistrictCode(value);
//                       form.setFieldsValue({ wardCode: undefined });
//                     }}
//                     disabled={!provinceCode}
//                   >
//                     {districts?.map((district) => (
//                       <Option key={district.code} value={district.code}>
//                         {district.full_name}
//                       </Option>
//                     ))}
//                   </Select>
//                 </Form.Item>
//               </Col>
//               <Col xs={24} sm={12}>
//                 <Form.Item name="wardCode" label={t('profile.ward')} rules={[{ required: true, message: t('profile.wardRequired') }]}>
//                   <Select loading={wardsLoading} disabled={!districtCode}>
//                     {wards?.map((ward) => (
//                       <Option key={ward.code} value={ward.code}>
//                         {ward.full_name}
//                       </Option>
//                     ))}
//                   </Select>
//                 </Form.Item>
//               </Col>
//               <Col xs={24}>
//                 <Form.Item name="addressDetail" label={t('profile.addressDetail')} rules={[{ required: true, message: t('profile.addressDetailRequired') }]}>
//                   <Input />
//                 </Form.Item>
//               </Col>
//               <Col xs={24} sm={12}>
//                 <Form.Item name="identificationNumber" label={t('profile.identificationNumber')}>
//                   <Input />
//                 </Form.Item>
//               </Col>
//               <Col xs={24} sm={12}>
//                 <Form.Item name="identificationIssuedPlace" label={t('profile.identificationIssuedPlace')}>
//                   <Input />
//                 </Form.Item>
//               </Col>
//               <Col xs={24} sm={12}>
//                 <Form.Item name="identificationIssuedDate" label={t('profile.identificationIssuedDate')}>
//                   <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD" />
//                 </Form.Item>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//         <div style={{ textAlign: 'right', marginTop: '16px' }}>
//           {isEditing ? (
//             <>
//               <Button onClick={() => setIsEditing(false)} style={{ marginRight: '8px' }}>
//                 {t('profile.cancel')}
//               </Button>
//               <Button type="primary" htmlType="submit">
//                 {t('profile.save')}
//               </Button>
//             </>
//           ) : (
//             <Button type="primary" onClick={() => setIsEditing(true)}>
//               {t('profile.edit')}
//             </Button>
//           )}
//         </div>
//       </Form>
//     </Card>
//   );
// };

// export default UserProfile;
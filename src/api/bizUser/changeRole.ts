 // src/api/bizUser/changeRole.ts
import axios from 'axios';
import { ChangeRoleDto } from '../../types/bizUser';
import { DefaultDataType } from '../../types/common';

export const changeRole = async (data: ChangeRoleDto): Promise<DefaultDataType> => {
  const response = await axios.post('/api/biz-user/change-role', data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType (giả định)
};

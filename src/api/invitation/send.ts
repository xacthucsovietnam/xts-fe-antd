 // src/api/invitation/send.ts
import axios from 'axios';
import { SendInvitationDto } from '../../types/invitation';
import { DefaultDataType } from '../../types/common';

export const sendInvitation = async (data: SendInvitationDto): Promise<DefaultDataType> => {
  const response = await axios.post('/api/invitation/send', data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

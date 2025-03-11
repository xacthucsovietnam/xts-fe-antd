import { useDispatch, useSelector } from 'react-redux';
import { useGetCurrentUser } from '../../query';
import { useCustomTranslation } from '../../hooks';
import { CustomCard } from '../../components';
import { setUser } from '../../store/slices/userSlice';
import { RootState } from '../../store';
import React from 'react';

const Dashboard = () => {
  const { t } = useCustomTranslation();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const { refetch: fetchCurrentUser, isLoading } = useGetCurrentUser();

  React.useEffect(() => {
    fetchCurrentUser().then((result) => {
      if (result.data?.data) {
        dispatch(setUser(result.data.data));
      }
    });
  }, [fetchCurrentUser, dispatch]);

  if (isLoading) return <div>{t('loading')}</div>;

  return (
    <div className="dashboard-container">
      <h1>{t('dashboard.title')}</h1>
      <CustomCard title={t('dashboard.userInfo')}>
        <p>
          {t('dashboard.fullName')}: {user?.full_name || 'N/A'}
        </p>
        <p>
          {t('dashboard.email')}: {user?.email || 'N/A'}
        </p>
        <p>
          {t('dashboard.phone')}: {user?.phone || 'N/A'}
        </p>
      </CustomCard>
    </div>
  );
};

export default Dashboard;
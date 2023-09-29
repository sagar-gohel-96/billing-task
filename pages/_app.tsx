import {
  AppointmentIcon,
  BillingIcon,
  DashboardIcon,
  PatientIcon,
  SettingIcon,
  SupportIcon
} from '@/src/assets/icon';
import { Sidebar } from '@/src/components';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SidebarItemType } from '.';
import { useMemo } from 'react';
import Box from '@mui/material/Box';

export default function App({ Component, pageProps }: AppProps) {
  const sideBarItems: SidebarItemType[] = useMemo(() => {
    return [
      { icon: <DashboardIcon />, title: 'Dashboard', path: 'dashboard' },
      { icon: <PatientIcon />, title: 'Patient', path: 'patient' },
      { icon: <AppointmentIcon />, title: 'Appointment', path: 'appointment' },
      { icon: <BillingIcon />, title: 'Billing', path: 'billing' }
    ];
  }, []);

  const sidebarBottomItmes: SidebarItemType[] = useMemo(() => {
    return [
      { icon: <SupportIcon />, title: 'support', path: 'support' },
      { icon: <SettingIcon />, title: 'settings', path: 'settings' }
    ];
  }, []);
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar sidebarBottomItmes={sidebarBottomItmes} sidebarItems={sideBarItems} />
      <Component {...pageProps} />
    </Box>
  );
}

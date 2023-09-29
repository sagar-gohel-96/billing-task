import React from 'react';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  path: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  const { icon, title, path } = props;
  const router = useRouter();

  return (
    <Box
      onClick={() => router.push(path)}
      sx={
        router.pathname.slice(1) === path
          ? {
              display: 'flex',
              width: '214px',
              height: '42px',
              alignItems: 'center',
              backgroundColor: '#9795CD',
              padding: '10px',
              borderRadius: '8px',
              ':hover': {
                cursor: 'pointer'
              }
            }
          : {
              display: 'flex',
              height: '52px',
              width: '214px',
              padding: '10px',
              alignItems: 'center',
              ':hover': {
                cursor: 'pointer'
              }
            }
      }>
      <Box sx={{ marginRight: '25px', width: '22px', height: '22px' }}>{icon}</Box>
      <Box
        sx={{
          fontSize: '16px',
          fontWeight: 400,
          color: 'white',
          fontStyle: 'normal'
        }}>
        {title}
      </Box>
    </Box>
  );
};

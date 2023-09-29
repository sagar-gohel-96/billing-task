import Box from '@mui/material/Box';
import React from 'react';
export interface SidebarItemType {
  icon: React.ReactNode;
  title: string;
  path: string;
}

export default function Home() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <main>Hello</main>
    </Box>
  );
}

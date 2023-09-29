import { Box, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export const MonthFilter = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <Typography fontSize={30} fontWeight={700}>
        Billing Overview
      </Typography>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: ' #CBE3FF',
          justifyContent: 'space-between',
          borderRadius: '12px',
          padding: '8px',
          gap: '8px',
          width: '256px',
          alignItems: 'center'
        }}>
        <Box
          sx={{
            background: '#312E81',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '38px',
            height: '38px',
            borderRadius: '5px'
          }}>
          <KeyboardArrowLeftIcon sx={{ color: '#fff' }} />
        </Box>
        <Typography>February 2021</Typography>
        <Box
          sx={{
            background: '#312E81',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '38px',
            height: '38px',
            borderRadius: '5px'
          }}>
          <KeyboardArrowRightIcon sx={{ color: '#fff' }} />
        </Box>
      </Box>
    </Box>
  );
};

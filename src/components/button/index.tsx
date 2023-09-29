import React from 'react';
import Button from '@mui/joy/Button';

interface ButtonProps {
  text: string;
  color?: string;
}

export const BasicButton: React.FC<ButtonProps> = ({ text, color = 'white' }) => {
  return (
    <Button
      sx={{
        color: color,
        borderRadius: '38px',
        backgroundColor: '#312E81',
        fontWeight: 400,
        paddingX: '20px',
        ':hover': {
          backgroundColor: '#9795CD',
          opacity: 1
        }
      }}>
      {text}
    </Button>
  );
};

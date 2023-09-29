import React, { useEffect, useState } from 'react';
import { BasicButton, PatientCard } from '@/src/components';
import { Box, TextField } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { MonthFilter } from '@/src/components/monthFilter';
import BillingDetails from '@/src/components/billingDetails';
import axios from 'axios';
import { User } from '@/src/data/userData';

export const pillTextFieldStyles = {
  '& .MuiInputBase-root': {
    borderRadius: '28px',
    paddingLeft: '16px',
    paddingRight: '16px',
    height: '38px'
  }
};

const Billing = () => {
  const [users, setUsers] = useState<User[]>();
  const [id, setId] = useState<number>(1);
  const [invUser, setInvUser] = useState<User>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/user');
      const users = response.data;
      setInvUser(users.data[0]);
      setUsers(users.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        width: '100%',
        padding: '30px',
        backgroundColor: '#F1F5F9',
        borderRadius: '20px'
      }}>
      <Box sx={{ display: 'flex', width: '100%', gap: '1rem' }}>
        <TextField
          placeholder="Search Patients"
          variant="outlined"
          sx={{ ...pillTextFieldStyles, flex: 1 }}
          inputProps={{
            startadornment: <SearchRoundedIcon color="error" />
          }}
        />
        <BasicButton text="Make an Appointment" />
        <BasicButton text="Add Patient" />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#312E81',
            borderRadius: '50%',
            width: '40px'
          }}>
          <NotificationsNoneRoundedIcon sx={{ color: '#fff' }} />
        </Box>
      </Box>
      <MonthFilter />
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {users &&
            users?.map((user: User, index: number) => {
              return (
                <PatientCard
                  key={index}
                  user={user}
                  setId={setId}
                  id={id}
                  setInvUser={setInvUser}
                />
              );
            })}
        </Box>
        <BillingDetails user={invUser} />
      </Box>
    </Box>
  );
};

export default Billing;

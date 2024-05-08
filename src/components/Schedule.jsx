import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledCalendar = styled('div')({
  border: '2px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  '& .MuiPickersStaticWrapper-staticWrapperRoot': {
    padding: 0, // Remove padding
    height: 0, // Adjust height
  },
});

const StyledDatePicker = styled(StaticDatePicker)({
  '& .MuiPickersStaticWrapper-staticWrapperRoot .MuiPickersDay-root': {
    backgroundColor: '#e3f2fd',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: '#90caf9',
    },
  },
  '& .MuiPickersDay-current, & .MuiPickersDay-daySelected': {
    backgroundColor: '#1976d2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  },
});

export default function Schedule() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledCalendar>
        <Typography variant="h2" gutterBottom style={{ color: 'white', backgroundColor: '#1976d2', padding: '8px', borderRadius: '4px' }}>
          Calendar
        </Typography>
        <StyledDatePicker orientation="portrait" />
      </StyledCalendar>
    </LocalizationProvider>
  );
}

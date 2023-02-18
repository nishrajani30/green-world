import { styled } from '@mui/material';

export const StyledContainer = styled('div')(({ theme }) => ({
  maxWidth: 370,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

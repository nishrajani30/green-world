import {Box, styled} from '@mui/material';

export const RootStyle = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    height: '100%',
  },
}));

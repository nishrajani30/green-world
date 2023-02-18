import { Container } from '@mui/material';

import LoginForm from '../../../components/Login';
import { RootStyle } from './Login.styles';
import SideBarStyle from './SideBarStyle';

export default function Index() {
  return (
    <RootStyle title="Login">
      <SideBarStyle />
      <Container maxWidth="sm">
        <LoginForm />
      </Container>
    </RootStyle>
  );
}

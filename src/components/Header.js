import { Typography } from '@mui/material';

const headerStyle = {
  color: '#ff9800',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '1em',
  letterSpacing: '.25em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  backgroundColor: '#000639',
  padding: '10px 20px',
  textAlign: 'left',
  marginBottom: 10,
};

const Header = () => {
  return <Typography sx={headerStyle}>Phoenix</Typography>;
};

export default Header;

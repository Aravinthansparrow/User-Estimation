import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from "../assets/logo-ig.png"
import SimpleReactValidator from 'simple-react-validator';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validator = new SimpleReactValidator();
  const navigate=useNavigate()
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validator.allValid()) {
      // Dummy JSON data
      const users = [
        { email: 'admin@gmail.com', password: 'admin', role: 'admin' },
        { email: 'developer@gmail.com', password: 'developer', role: 'developer' },
      ];

      const user = users.find((user) => user.email === username && user.password === password);

      if (user) {
        if (user.role === 'admin') {
          navigate("/MenuBar")
          console.log('Admin login successful');
          
        } else if (user.role === 'developer') {
          navigate("/MenuBar")
          console.log('Admin login successful');
        }
      } else {
        setError('Enter a valid username or password');
      }
    } else {
      validator.showMessages();
      setError('Enter valid username and password');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img src={Logo} alt="logo" />
        <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
          <TextField
            label="Username"
            value={username}
            onChange={handleUsernameChange}
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
          />
          {validator.message('username', username, 'required|email')}
          <TextField
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            margin="normal"
            required
            fullWidth
            name="password"
            id="password"
            autoComplete="current-password"
          />
          {validator.message('password', password, 'required|alpha_num|password')}
          {error && <div style={{gap:"5px",color:"red",display:"flex",alignItems:"center"}}><ErrorOutlineIcon/><p  style={{margin:"0"}}>{error}</p></div>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/ForgotPassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default Login

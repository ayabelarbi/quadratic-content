/* eslint-disable @typescript-eslint/no-explicit-any */
import ButtonAppBar from '../components/Navbar'
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { IEXEC_EXPLORER_URL } from '../utils/config';

import { DataSchema } from '@iexec/dataprotector';

import {
  TextField,
  Typography,
  Alert,
  Box, 
  Button
} from '@mui/material';

import {
  protectDataFunc
} from '../utils/iExec_api';



export default function Create() {
  
//  //loading effect & error
 const [loadingProtect, setLoadingProtect] = useState(false);
 const [errorProtect, setErrorProtect] = useState('');
//  const [loadingGrant, setLoadingGrant] = useState(false);
//  const [errorGrant, setErrorGrant] = useState('');
//  const [loadingRevoke, setLoadingRevoke] = useState(false);
//  const [errorRevoke, setErrorRevoke] = useState('');

 //global state
 const [protectedData, setProtectedData] = useState('');
 const [grantAccess, setGrantAccess] = useState<GrantedAccess>();
 const [revokeAccess, setRevokeAccess] = useState('');

 //set name
 const [name, setName] = useState('');

 //set email
 const [email, setEmail] = useState('');
 const [isValidEmail, setIsValidEmail] = useState(true);

 //set access number
 const [accessNumber, setAccessNumber] = useState<number>(1);

 //set user restricted address
 const [authorizedUser, setAuthorizedUser] = useState('');


//handle functions
  const handleEmailChange = (event : any ) => {
    setEmail(event.target.value);
    setIsValidEmail(event.target.validity.valid);
  };

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleProtectedDataChange = (event: any) => {
    setProtectedData(event.target.value);
  };

  const handleAccessNumberChange = (event: any) => {
    setAccessNumber(event.target.value);
  };

  const authorizedUserChange = (event: any) => {
    setAuthorizedUser(event.target.value);
  };

  // handle Submit
const protectedDataSubmit = async () => {
    setErrorProtect('');
    if (email) {
      const data: DataSchema = { email: email } as DataSchema;
      console.log("email : ",email); 
      console.log("data : ",data);

      try {

        setLoadingProtect(true);
        console.log("step 1")
        
        const ProtectedDataAddress = await protectDataFunc(data, name);

        setProtectedData(ProtectedDataAddress);
        setErrorProtect('');
      } catch (error) {
        setErrorProtect(String(error));
      }
      setLoadingProtect(false);


    } else {
      setErrorProtect('Please enter a valid email address');
    }
  };

  return (
    <>
    <ButtonAppBar />
    <h1> 
      First, let's protect your data 
    </h1>
    <Box id="form-box">
            <Typography component="h1" variant="h5" sx={{ mt: 3 }}>
              Protect your data
            </Typography>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
              sx={{ mt: 3 }}
              value={email}
              onChange={handleEmailChange}
              type="email"
              error={!isValidEmail}
              helperText={!isValidEmail && 'Please enter a valid email address'}
            />
      <TextField
              fullWidth
              id="name"
              label="Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
              sx={{ mt: 3 }}
             />
        
      {errorProtect && (
              <Alert sx={{ mt: 3, mb: 2 }} severity="error">
                <Typography variant="h6"> Creation failed </Typography>
                {errorProtect}
              </Alert>
            )}
     {!loadingProtect && (
              <Button
                sx={{ display: 'block', margin: '20px auto' }}
                onClick={protectedDataSubmit}
                variant="contained"
              >
                Create
              </Button>
    )}

           

    </Box>




    </>    

  )

}


import { Box, Button, CircularProgress, Container, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { browseBreedFetched } from '../../redux/action/browseBreedAction';

const BrowseBreed = () => {

  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const { isLoading, browseBreedData, error } = useSelector(state => state.browseBreedDetails)
  const { message } = browseBreedData;

  function handleClick() {
    return dispatch(browseBreedFetched(value))
  }

  function handleChange(e) {
    return setValue(e.target.value);
  }

  function Spinner() {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{ textAlign: 'center' }}>
      {isLoading && <Spinner />}
      <Box sx={{ mt: '50px', mb: '35px' }}>
        <TextField id="outlined-basic" label="Enter Breed Name" variant="outlined" size={'small'} onChange={handleChange} />
        <Button variant="contained" onClick={handleClick} size={'large'} sx={{ml: '20px', height: '37px'}}>Submit</Button>
      </Box>
      <img src={message} width={400} height={400} />
    </Container>
  )
}

export default BrowseBreed
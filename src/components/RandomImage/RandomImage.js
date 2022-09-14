import { Alert, Box, Button, Card, CardMedia, CircularProgress, Container, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { randomImageFetched } from '../../redux/action/randomImageAction';

const RandomImage = () => {

  const dispatch = useDispatch();
  const { isLoading, randomData, error } = useSelector(state => state.randomImage);
  const { message } = randomData;
  
  function handleClick() {
    return dispatch(randomImageFetched())
  }

  function Spinner() {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{ textAlign: 'center', mt: '50px' }}>
      {isLoading && <Spinner />}
      <Typography style={{ fontSize: '18px' }}>FOR SINGLE RANDOM IMAGE FROM ALL DOGS COLLECTION</Typography>
      <Button variant="contained" onClick={handleClick} sx={{ mb: '30px', bgcolor: 'black', borderColor: 'darkblue', fontWeight: 600 }}>Click Me</Button>
      <Card sx={{ ml: '330px' }} style={{ width: "500px", height: "350px" }}>
        <CardMedia component="img" style={{ width: "500px", height: "350px" }} image={message} alt='Dog-image'></CardMedia>
      </Card>
      {error && <Alert severity="error">{error}</Alert>}
    </Container>
  )
}

export default RandomImage
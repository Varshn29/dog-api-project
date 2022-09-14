import { Box, Card, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { byBreedFetched } from '../../redux/action/byBreedAction';

const ByBreed = () => {

  const dispatch = useDispatch();
  const { isLoading, byBreedData, error } = useSelector(state => state.byBreedDetails);
  const { message } = byBreedData;

  useEffect(() => {
    dispatch(byBreedFetched())
  }, []);

  // console.log(message);

  function showByBreed(data) {
    return data.filter((item, i) => i <= 11).map(
      (item, i) =>
        <Grid key={i} item xs={4}>
          <CardMedia component="img"
            sx={{ mb: '20px' }}
            style={{ width: "260px", height: "400px" }}
            image={item} alt='Dog-image'></CardMedia>
        </Grid>
    )
  }

  function Spinner() {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container>
      {isLoading && <Spinner />}
      <Typography variant='h5' sx={{textAlign: 'center', mt: '30px', mb: '40px'}}>Displaying the 12 images from a breed, e.g. hound</Typography>
      <Box style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {message?.length > 0 && showByBreed(message)}
      </Box>
    </Container>
  )
}

export default ByBreed
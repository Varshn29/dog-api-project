import { Box, Button, CardMedia, Container, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchByBreed } from '../../redux/action/byBreedAction'
class ByBreed extends Component {

  constructor() {
    super()
    this.state = {
      value: 12
    }
  }


  componentDidMount() {
    this.props.fetchByBreed()
  }


  handleClick = () => {
    this.setState({
      value: this.state.value + 12
    })
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.props.fetchByBreed()
    }
  }

  showByBreed = (data) => {
    return data?.slice(0, this.state.value).map((item, i) => {
      return <Grid key={i} item xs={4}>
        <img src={item}
          style={{ width: "260px", height: "400px", marginBottom: '20px' }}
          alt='Dog-image' />
      </Grid>
    }
    )
  }

  render() {
    return (
      <Container>
        <Typography variant='h5' sx={{ textAlign: 'center', mt: '30px', mb: '40px' }}>Displaying the 12 images from a breed, e.g. hound</Typography>
        <Box style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {this.showByBreed(this.props.data.byBreedData.message)}
        </Box>
        <Button variant="contained" sx={{ ml: '400px', width: '300px', my: '20px', borderRadius: '20px' }} onClick={this.handleClick}>Load More</Button>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.byBreedDetails
  }
}

const mapDispatchToProps = {
  fetchByBreed
}

export default connect(mapStateToProps, { fetchByBreed })(ByBreed)
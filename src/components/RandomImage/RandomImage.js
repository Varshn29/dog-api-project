import { Button, Card, CardMedia, Container, Typography } from "@mui/material";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRandomImage } from '../../redux/action/randomImageAction';

class RandomImage extends Component {

  handleClick = () => {
    this.props.fetchRandomImage()
  }

  render() {
    return (
      <Container sx={{ textAlign: 'center', mt: '50px' }}>
        <Typography style={{ fontSize: '18px' }}>FOR SINGLE RANDOM IMAGE FROM ALL DOGS COLLECTION</Typography>
        <Button variant="contained" onClick={this.handleClick} sx={{ mb: '30px', bgcolor: 'black', borderColor: 'darkblue', fontWeight: 600 }}>Click Me</Button>
        <Card sx={{ ml: '330px' }} style={{ width: "500px", height: "350px" }}>
          <CardMedia component="img" style={{ width: "500px", height: "350px" }} image={this.props.data.randomData.message} alt='Dog-image'></CardMedia>
        </Card>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.randomImage
  }
}

const mapDispatchToProps = {
  fetchRandomImage
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomImage)
import { Box, Button, Container, TextField } from "@mui/material";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBrowseBreed } from '../../redux/action/browseBreedAction'
class BrowseBreed extends Component {

  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleClick = () => {
    this.props.fetchBrowseBreed(this.state.value)
  }

  render() {
    return (
      <Container sx={{ textAlign: 'center' }}>
        <Box sx={{ mt: '50px', mb: '35px' }}>
          <TextField id="outlined-basic" label="Enter Breed Name" variant="outlined" size={'small'} onChange={this.handleChange} />
          <Button variant="contained" onClick={this.handleClick} size={'large'} sx={{ ml: '20px', height: '37px' }}>Submit</Button>
        </Box>
        <img src={this.props.data.browseBreedData.message} width={400} height={400} />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.browseBreedDetails
  }
}

const mapDispatchToProps = {
  fetchBrowseBreed
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseBreed)
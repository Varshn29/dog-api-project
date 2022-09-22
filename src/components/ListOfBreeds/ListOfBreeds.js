import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchListOfBreed } from '../../redux/action/listOfBreedAction'
class ListOfBreeds extends Component {

    componentDidMount() {
      this.props.fetchListOfBreed()
    }

    showList = (list) => {
      let itemShow = [];
      for (let key in list) {
        if (list[key].length > 0)
        itemShow.push((list[key]))
      }
      return(itemShow)
    }
  
    render() {
      return (
        <div style={{ marginLeft: '100px', marginTop: '50px' }}>
          {this.showList(this.props.data.listOfBreedData.message).map((item) => {
            return <li>{item.join(', ')}</li>
          })}
        </div>
      )
    }
  }

const mapStateToProps = (state) => {
  return {
    data: state.listDetails
  }
}

const mapDispatchToProps = {
  fetchListOfBreed
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfBreeds)











// import { Grid, Typography } from '@mui/material';
// import { maxHeight } from '@mui/system';
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { listOfBreedFetched } from '../../redux/action/listOfBreedAction';

// const ListOfBreeds = () => {

//   const dispatch = useDispatch();
//   const { isLoading, listOfBreedData, error } = useSelector(state => state.listDetails);
//   const { message } = listOfBreedData;

//   // console.log(message);

//   useEffect(() => {
//     dispatch(listOfBreedFetched())
//   }, [])

  // function showList(data) {
  //   let itemShow = [];
  //   for (let key in data) {
  //     if (data[key].length > 0)
  //     itemShow.push((data[key]))
  //   }
  //   return(itemShow)
  // }


//   return (
//     <div style={{marginLeft: '100px', marginTop: '50px'}}>
//       {showList(message).map((item) => {
//         return <li>{item.join(', ')}</li>
//       })}
//     </div>
//   )
// }

// export default ListOfBreeds
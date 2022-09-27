import React from 'react'
import User from './User'
import { Grid, Button } from '@mui/material'

const UsersData = ({ userData, click }) => {

    return (
        <div>
            <Grid container spacing={2} sx={{ ml: '40px' }}>
                {userData && userData.map((item, i) => <Grid item xs={2.2} key={i}><User {...item} /></Grid>)}
            </Grid>
            <Button variant="contained" onClick={() => click()} sx={{ ml: '600px', mb: '30px' }}>Load More</Button>
        </div>
    )
}

export default UsersData
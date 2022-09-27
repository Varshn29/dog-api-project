import React from 'react'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Grid, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DisplayDemo = ({ title, body, id, userId }) => {

    return (
        <div>
            <Accordion sx={{ m: "50px" }} style={{ marginLeft: '50px', marginRight: '50px' }}>
                <AccordionSummary
                    sx={{ mt: "50px" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Grid container spacing={4}>
                        <Grid item xs={3}>
                            <Typography variant='h6'>User-Id: {userId}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='h6'>Id: {id}</Typography>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <Typography variant='h5'>
                        <strong>Title:</strong> <small>{title}</small>
                    </Typography>
                    <Typography variant='h5'>
                        <strong>Body:</strong> <small>{body}</small>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default DisplayDemo
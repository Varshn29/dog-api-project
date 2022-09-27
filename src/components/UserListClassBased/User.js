import React from "react";
import { Container, Card, CardMedia, CardContent, Typography } from '@mui/material';

const User = ({ name, location, email, picture }) => {
    return (
        <Container>
            <Card sx={{ width: '200px', my: '30px' }}>
                <CardMedia component='img' image={picture.large} alt={name.first} />
                <CardContent>
                    <Typography sx={{ fontSize: '12px' }}><strong>Name:</strong> {name.first} {name.last}</Typography>
                    <Typography sx={{ fontSize: '12px' }}><strong>Country:</strong> {location.country}</Typography>
                    <Typography sx={{ fontSize: '12px' }}><strong>Email:</strong> {email}</Typography>
                </CardContent>
            </Card>
        </Container>

    );
};

export default User;
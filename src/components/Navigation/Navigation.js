import React from 'react'
import { Link, Box, Container, Typography } from '@mui/material';

const Navigation = () => {
    return (
        <Container>
            <Link href="/" color={'black'} underline="none"><Typography variant='h3' sx={{textAlign: 'center', mb: '30px'}}>DOG-API</Typography></Link>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    typography: 'h5',
                    maxHeight: '150px',
                    gap: '50px'
                }}
            >
                <Link href="/list-of-breeds" color={'maroon'} underline="hover">
                    {'List Of Breeds'}
                </Link>
                <Link href="/random-image" color={'maroon'} underline="hover">
                    {'Random Image'}
                </Link>
                <Link href="/by-breed" color={'maroon'} underline="hover">
                    {'By Breed'}
                </Link>
                <Link href="/browse-breed-list" color={'maroon'} underline="hover">
                    {'Browse Breed List'}
                </Link>
            </Box>
        </Container>
    )
}

export default Navigation;
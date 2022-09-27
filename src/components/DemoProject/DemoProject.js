import React from 'react'
import { useState, useEffect } from 'react'
import DisplayDemo from './DisplayDemo';
import { TextField, Container, Button } from '@mui/material'


const DemoProject = () => {

    const [state, setState] = useState([]);
    const [title, setTitle] = useState([]);
    const [values, setValues] = useState({
        id: '',
        userId: ''
    })


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(res => res.json())
            .then(data => setState(data))
    }, [])

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    // console.log(state)

    const handleClick = () => {
        const newState = [...state]
        let test = newState.filter((item) => item.id === +values.id && item.userId === +values.userId)
        setTitle(test)
    }


    return (
        <Container sx={{ mt: '50px', textAlign: 'center' }}>
            <TextField id="outlined-basic" type={'number'} label="Enter User-Id..." value={values.userId} name={'userId'} variant="outlined" onChange={handleChange} />
            <TextField id="outlined-basic" type={'number'} label="Enter Id..." value={values.id} name={'id'} variant="outlined" onChange={handleChange} sx={{ mx: '20px' }} />
            <Button variant='contained' onClick={() => handleClick()} sx={{ mt: '8px' }}>Submit</Button>
            {title?.map((item, i) => <DisplayDemo {...item} key={i} />)}
        </Container>
    )
}

export default DemoProject
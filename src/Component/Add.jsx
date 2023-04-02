import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Add = (props) => {
    const [input, setInput] = useState(props.data);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const readValues = () => {
        if (props.method === 'post') {
            axios
                .post('http://localhost:3000/book', input)
                .then((response) => {
                    alert('Successfully uploaded');
                })
                .catch((err) => console.log(err));
        } else if (props.method === 'put') {
            axios
                .put('http://localhost:3000/book/' + input.id, input)
                .then((response) => {
                    alert('Successfully Updated!');
                    window.location.reload(false);
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div>
            <br />
            <br />
            <Typography id='table-c' variant='h6'>
                Enter the book details below
            </Typography>
            <TextField
                variant='standard'
                label='genre'
                value={input.genre}
                onChange={inputHandler}
                name='genre'
            ></TextField>
            <br />
            <br />
            <TextField
                variant='standard'
                label='title'
                value={input.title}
                onChange={inputHandler}
                name='title'
            ></TextField>
            <br />
            <br />
            <TextField
                variant='standard'
                label='author'
                value={input.author}
                onChange={inputHandler}
                name='author'
            ></TextField>
            <br />
            <br />
            <TextField
                variant='standard'
                label='month/year'
                value={input.date}
                onChange={inputHandler}
                name='date'
            ></TextField>
            <br />
            <br />
            <TextField
                variant='standard'
                label='publisher'
                value={input.publisher}
                onChange={inputHandler}
                name='publisher'
            ></TextField>
            <br />
            <br />
            <Button id="btn"
                sx={{ background: 'red', boxShadow: '0px 3px' }}
                variant='contained'
                onClick={readValues}
            ><Link to={'/'}>
                    Submit
                </Link>
            </Button>
        </div>
    );
};

export default Add;

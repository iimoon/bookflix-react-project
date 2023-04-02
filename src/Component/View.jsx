import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Add from './Add'

const View = () => {
    var [update, setUpdate] = useState(false)
    var [selected, setSelected] = useState([])
    var [book, setBook] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/book")
            .then(response => {
                setBook(response.data);
            })
            .catch(error => console.log(error))
    }, [])
    const deleteValues =(id) =>{
        axios.delete("http://localhost:3000/book/"+id)
        .then((response)=>{
            alert("Successfully removed book")
            window.location.reload(false)
        })
    }
    const updateValues = (value) =>{
        setSelected(value);
        setUpdate(true);
    }
    var finalJSX = <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell id="table-c">ID</TableCell>
                    <TableCell id="table-c">Genre</TableCell>
                    <TableCell id="table-c">Book Title</TableCell>
                    <TableCell id="table-c">Author</TableCell>
                    <TableCell id="table-c">Date</TableCell>
                    <TableCell id="table-c">Publisher</TableCell>
                    <TableCell id="table-c">Update</TableCell>
                    <TableCell id="table-c">Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {book.map((value, index) => {
                    return <TableRow>
                        <TableCell id="table-c">{value.id}</TableCell>
                        <TableCell id="table-c">{value.genre}</TableCell>
                        <TableCell id="table-c">{value.title}</TableCell>
                        <TableCell id="table-c">{value.author}</TableCell>
                        <TableCell id="table-c">{value.date}</TableCell>
                        <TableCell id="table-c">{value.publisher}</TableCell>
                        <TableCell><Button sx={{background:'red'}} variant='contained' onClick={() => updateValues(value)}>Update</Button></TableCell>
                        <TableCell><Button sx={{color:'white'}}variant='outlined' onClick={() => deleteValues(value)}>Delete</Button></TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
    if (update)
                finalJSX=<Add data={selected} method="put"/>

    return (
        <div>
            <br/><br/>
            {finalJSX}
        </div>
    )
}

export default View
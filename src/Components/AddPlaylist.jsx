import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addPlaylist } from '../service/api';
import { useHistory } from 'react-router-dom';

const initialPlaylist = {
    name: "",
    songs : []
}
const initialSong={
    links: "",
    artist: "",
    title: ""
}
const AddPlaylist = () => {

    const [playlist, setPlaylist] = useState(initialPlaylist);
    const {name, songs} = playlist;

    const history = useHistory();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
       setPlaylist({...playlist, [e.target.name]: e.target.value});
       setPlaylist({...playlist.songs, [e.target.name]: e.target.value});
       console.log(playlist);
    }

    const addPlaylistDetails = async () =>{
       await addPlaylist(playlist);
       history.push('/all');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center">Add Playlist Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
                </FormControl>
                
                <Box my={3}>
                    <Button variant="contained" onClick={() => addPlaylistDetails() } color="primary" align="center">Add Playlist</Button>
                    <Button onClick={()=> history.push("/all")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default AddPlaylist;
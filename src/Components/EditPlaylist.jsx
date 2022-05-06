import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { editPlaylist, getallPlaylists } from '../service/api';
import { useHistory, useParams } from 'react-router-dom';

const initialValue = {
    name: "",
    songs:[]
}

const EditPlaylist = () => {

    const [playlist, setPlaylist] = useState(initialValue);

    const { id } = useParams();

    useEffect(() => {
        loadPlaylistData();
    },[]);

    const loadPlaylistData = async () =>{
        const response = await getallPlaylists(id);
        setPlaylist(response.data);
    }

    const history = useHistory();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setPlaylist({...playlist, [e.target.name]: e.target.value});
        console.log(playlist);
    }

    const editPlaylistDetails = async () =>{
       await editPlaylist(id,playlist);
       history.push('/all');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center">Update Playlist Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel><br/>
                    <Input onChange={(e) => onValueChange(e)} name='name' value={playlist.name}/>
                </FormControl>
                {playlist.songs.map(song=>(
                     <FormControl>
                     {/* <Input onChange={(e) => onValueChange(e)} name='title'  >${playlist.songs}</Input> */}
                     {/* <Input onChange={(e) => onValueChange(e)} name='artist'  >${song.artist}</Input>
                     <Input onChange={(e) => onValueChange(e)} name='links'  >${song.links}</Input> */}
                 </FormControl>
                ))}
                <Box my={3}>
                    <Button variant="contained" onClick={() => editPlaylistDetails() } color="primary" align="center">Update Playlist</Button>
                    <Button onClick={()=> history.push("/all")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default EditPlaylist;
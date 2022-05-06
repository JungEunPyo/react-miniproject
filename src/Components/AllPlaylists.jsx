import React, { useEffect, useState } from 'react';
//import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { deletePlaylist ,getallPlaylists } from '../service/api';
//import { Link } from 'react-router-dom';
import ViewPlaylist from './ViewPlaylist.jsx';

// const useStyle = makeStyles({
//     table: {
//         width: '80%',
//         margin: '50px 100px 100px 140px',
//     },
//     thead:{
//         '& > *':{
//             background: '#000000',
//             color:'#FFFFFF',
//             fontSize: '16px'
//         }
//     },
//     trow:{
//         '& > *':{
//             fontSize: '16px'
//         }
//     }
// })

const AllPlaylists = () => {


    const [playlist, setPlaylist] = useState([]);
    useEffect(() => {
        getPlaylists();
    }, [])

    const getPlaylists = async () =>{
        const response = await getallPlaylists();
        console.log(response);
        setPlaylist(response.data);
    }

    // const deleteData = async (id) => {
    //     await deletePlaylist(id);
    //     getPlaylists();
    // }

    return (
        playlist.map((data)=>(
            <ViewPlaylist id={data.id} name={data.name} songs={data.songs}></ViewPlaylist>
        ))
        // <Table className={classes.table}>
        //     <TableHead>
        //         <TableRow className={classes.thead}>
        //             <TableCell>ID</TableCell>
        //             <TableCell>플레이리스트제목</TableCell>
        //             <TableCell>가수</TableCell>
        //             <TableCell>노래제목</TableCell>
        //             <TableCell></TableCell>
        //         </TableRow>
        //     </TableHead>
        //     <TableBody>
        //     {
        //         playlist.map((data) => (
        //             <TableRow className={classes.trow}>
        //                 <TableCell>{data.id}</TableCell>
        //                 <TableCell>{data.name}</TableCell>
        //                 <TableCell>{data.songs[0].artist}</TableCell>
        //                 <TableCell>{data.songs[0].title}</TableCell>
        //                 <TableCell>
        //                     <Button variant="contained" color="primary" style={{margin: '0px 20px'}} component={Link} to={`/edit/${data.id}`}>Edit</Button>
        //                     <Button variant="contained" color="secondary" style={{margin: '0px 20px'}} onClick={() => deleteData(data.id)}>Cancel</Button>
        //                 </TableCell>
        //             </TableRow>
        //         ))
        //     }
        //     </TableBody>
        // </Table>
    )
}

export default AllPlaylists;

import { deletePlaylist } from "../service/api";
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
        table: {
            width: '80%',
            margin: '50px 100px 100px 140px',
        },
        thead:{
            '& > *':{
                background: '#000000',
                color:'#FFFFFF',
                fontSize: '16px'
            }
        },
        trow:{
            '& > *':{
                fontSize: '16px'
            }
        }
    })
const ViewPlaylist = (props) => {

    const classes = useStyle();

    const deleteData = async (id) => {
        await deletePlaylist(id);
        window.location.replace("/all");
    }

    return (
         <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>{props.id}</TableCell>
                    <TableCell>{props.name}</TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                            <Button variant="contained" color="primary" style={{margin: '0px 20px'}} component={Link} to={`/edit/${props.id}`}>Edit</Button>
                            <Button variant="contained" color="secondary" style={{margin: '0px 20px'}} onClick={() => deleteData(props.id)}>Cancel</Button>
                    </TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                props.songs.map((song) => (
                    <TableRow className={classes.trow}>
                        <TableCell>{song.id}</TableCell>
                        <TableCell>{song.title}</TableCell>
                        <TableCell>{song.artist}</TableCell>
                        <TableCell>{song.links}</TableCell>
                    </TableRow>
                ))
            }
            </TableBody>
        </Table>
    )
}

export default ViewPlaylist;

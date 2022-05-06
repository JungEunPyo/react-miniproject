import axios from 'axios';

//json-server --watch ./src/Database/db.json --port 3003  
const url = "http://127.0.0.1:3003/playlists";

export const getallPlaylists = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addPlaylist = async (user) => {
    return await axios.post(url,user);
}

export const editPlaylist = async (id, user) => {
    return await axios.put(`${url}/${id}`,user);
}


export const deletePlaylist = async (id) => {
    return await axios.delete(`${url}/${id}`);
}


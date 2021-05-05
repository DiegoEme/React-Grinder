import axios from 'axios';

//default properties for this app
export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID gCIXIBLBwsfSypwzUNneI1ZH-SftGBseatx6M_IFVck'
    }
})
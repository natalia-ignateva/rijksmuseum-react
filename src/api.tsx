import axios from 'axios';
import { IRijksResponse } from './models/IRijksResponse';

// define the fuction to request a collection using axios library
const getCollection = async (query: string): Promise<IRijksResponse> => {
    const response = await axios.get<IRijksResponse>(
        `https://www.rijksmuseum.nl/api/en/collection/?key=${process.env.REACT_APP_RIJKSMUSEUM_API_KEY}&imgonly=true&q=${query}&ps=10`,
    );
    return response.data;
};

export default getCollection;

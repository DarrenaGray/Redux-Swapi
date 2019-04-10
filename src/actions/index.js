// we'll need axios
import axios from 'axios';

export const FETCH_CHARACTER_START = 'FETCH_CHARARACTER_START';
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTER_FAILURE = 'FETCH_CHARACTER_FAILURE';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
const baseUrl = 'https://swapi.co/api/people/'
export const getCharacter = () => dispatch => {
    dispatch({ type: FETCH_CHARACTER_START });
    // axios.all([]) handles mutiple requests simultaneously
    axios.all([
        axios.get(`${baseUrl}`),
        axios.get(`${baseUrl}?page=2`),
        axios.get(`${baseUrl}?page=3`),
        axios.get(`${baseUrl}?page=4`),
        axios.get(`${baseUrl}?page=5`),
        axios.get(`${baseUrl}?page=6`),
        axios.get(`${baseUrl}?page=7`),
        axios.get(`${baseUrl}?page=8`),
        axios.get(`${baseUrl}?page=9`),
        ])
        // .then(axios.spread()) handles multiple responses
        .then(axios.spread((
            page1Res, 
            page2Res,
            page3Res,
            page4Res,
            page5Res,
            page6Res,
            page7Res,
            page8Res,
            page9Res,) => 
            dispatch({
                type: FETCH_CHARACTER_SUCCESS, 
                payload: [
                ...page1Res.data.results,
                ...page2Res.data.results,
                ...page3Res.data.results,
                ...page4Res.data.results,
                ...page5Res.data.results,
                ...page6Res.data.results,
                ...page7Res.data.results,
                ...page8Res.data.results,
                ...page9Res.data.results,
            ]})))
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_CHARACTER_FAILURE, payload: err })
        });
}
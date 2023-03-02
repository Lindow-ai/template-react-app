import {getItems} from "../DataEditors/apiHelper"

const displayItemsReducer = async (type, dispatch) => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // const json = await response.json();

    getItems(type).then((data) => {
        const items = data;
        console.log('items', items);
        dispatch({ type: 'SET_DATA', payload: items });
        dispatch({ type: 'SET_LOADING', payload: false });
    }).catch((error) => {
        console.error(error);
    });
}

export default displayItemsReducer;
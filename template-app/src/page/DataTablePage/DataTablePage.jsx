import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import DataTable from '../../components/DataTable';

const DataTablePage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        setData(json);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Typography>Page exemple d'une table</Typography>
            <DataTable data={data} />
        </div>
    );
}

export default DataTablePage;

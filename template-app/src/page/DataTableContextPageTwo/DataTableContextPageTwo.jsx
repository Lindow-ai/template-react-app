import { useState, useEffect, useContext } from 'react';
import { Typography } from '@mui/material';
import DataTable from '../../components/DataTable';
import { Button } from "@mui/material";
import { DisplayItemsContext } from '../../context/DisplayItemsContext';
import displayItemsReducer from '../../context/displayItemsReducerContext';
import { DATA_TABLE_CONTEXT_EXEMPLE_TWO } from '../../DataEditors/PageType';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate  } from 'react-router-dom';

const DataTablePageContextTwo = () => {
    const { state, dispatch } = useContext(DisplayItemsContext);

    const [selectedRowIds, setSelectedRowIds] = useState([]);
    const [pageSize, setPageSize] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        displayItemsReducer(DATA_TABLE_CONTEXT_EXEMPLE_TWO, dispatch);
    }, []);

    if (state.loading) {
        return <div>Loading...</div>
    }

    console.log('state', state);

    const handleSelectionModelChange = (newSelection) => {
        console.log('newSelection', newSelection);
        setSelectedRowIds(newSelection);
    };

    const handleNextPage = () => {
        navigate("/datable-context-3");
    }

    // Créer le tableau de colonnes en utilisant les propriétés restantes
    const columns = [
        ...Object.keys(...state.data).map((key) => ({
            field: key,
            headerName: key.toUpperCase(),
            type: "string",
            flex: 1,
        })),
        {
            field: "actions",
            headerName: "ACTIONS",
            width: 150,
            sortable: false,
            disableColumnMenu: true,
            renderCell: (params) => (
                <Button variant="outlined" color="secondary" startIcon={<VisibilityIcon />} onClick={handleNextPage} >
                    Visualiser
                </Button>
            ),
        },
    ];

    console.log('pageSize', pageSize);

    return (
        <div>
            <Typography>Page exemple d'une table avec l'utilisation d'un context 2</Typography>
            <DataTable
                columns={columns}
                data={state.data}
                handleSelectionModelChange={handleSelectionModelChange}
                setPageSize={setPageSize}
                pageSize={pageSize}
            />
        </div>
    );
}

export default DataTablePageContextTwo;

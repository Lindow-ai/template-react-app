import { useState, useEffect, useContext } from 'react';
import { Typography } from '@mui/material';
import DataTable from '../../components/DataTable';
import { Button } from "@mui/material";
import DeletePopin from '../../components/DeletePopin';
import { DisplayItemsContext } from '../../context/DisplayItemsContext';
import displayItemsReducer from '../../context/displayItemsReducerContext';
import { DATA_TABLE_CONTEXT_EXEMPLE } from '../../DataEditors/PageType';
import EditIcon from '@mui/icons-material/Edit';

const DataTablePageContextOne = () => {
    const { state, dispatch } = useContext(DisplayItemsContext);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [deleteItem, setDeleteItem] = useState(null);
    const [selectedRowIds, setSelectedRowIds] = useState([]);
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        displayItemsReducer(DATA_TABLE_CONTEXT_EXEMPLE, dispatch);
    }, []);

    if (state.loading) {
        return <div>Loading...</div>
    }

    console.log('state', state);

    const handleDeleteButtonClick = (item) => {
        console.log('item', item);
        setDeleteItem(item);
        setOpenDeleteDialog(true);
    };

    const handleSelectionModelChange = (newSelection) => {
        console.log('newSelection', newSelection);
        setSelectedRowIds(newSelection);
    };

    const handleDeleteConfirm = () => {
        const updatedData = state.data.filter((item) => !selectedRowIds.includes(item.id));
        setSelectedRowIds([]);
        setOpenDeleteDialog(false);
        setDeleteItem(null);
        // setData(updatedData);
    };

    const handleDeleteCancel = () => {
        setOpenDeleteDialog(false);
        setDeleteItem(null);
    };

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
                <Button variant="outlined" color="warning" startIcon={<EditIcon />} onClick={() => handleDeleteButtonClick(params.row)}>
                    Editer
                </Button>
            ),
        },
    ];

    console.log('pageSize', pageSize);

    return (
        <div>
            <Typography>Page exemple d'une table avec l'utilisation d'un context 1</Typography>
            <DataTable
                columns={columns}
                data={state.data}
                handleSelectionModelChange={handleSelectionModelChange}
                setPageSize={setPageSize}
                pageSize={pageSize}
            />
            <DeletePopin
                openDeleteDialog={openDeleteDialog}
                handleDeleteCancel={handleDeleteCancel}
                handleDeleteConfirm={handleDeleteConfirm}
                deleteItem={deleteItem?.title}
                deleteId="le titre"
            />
        </div>
    );
}

export default DataTablePageContextOne;

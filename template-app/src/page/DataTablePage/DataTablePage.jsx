import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import DataTable from '../../components/DataTable';
import { Button } from "@mui/material";
import DeletePopin from '../../components/DeletePopin';
import DeleteIcon from '@mui/icons-material/Delete';

const DataTablePage = () => {

    const [data, setData] = useState([]);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [deleteItem, setDeleteItem] = useState(null);
    const [selectedRowIds, setSelectedRowIds] = useState([]);
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await response.json();
            setData(json);
        };

        fetchData();
    }, []);

    const reshapeData = data.map(({ id, name, username, email, phone, website }) => ({ id, name, username, email, phone, website }));

    if (!data || reshapeData.length === 0) {
        return <div>Loading...</div>
    }

    console.log('data', data);

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
        const updatedData = data.filter((item) => !selectedRowIds.includes(item.id));
        setSelectedRowIds([]);
        setOpenDeleteDialog(false);
        setDeleteItem(null);
        setData(updatedData);
    };

    const handleDeleteCancel = () => {
        setOpenDeleteDialog(false);
        setDeleteItem(null);
    };

    // Créer le tableau de colonnes en utilisant les propriétés restantes
    const columns = [
        ...Object.keys(...reshapeData).map((key) => ({
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
                <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => handleDeleteButtonClick(params.row)}>
                    Supprimer
                </Button>
            ),
        },
    ];

    console.log('pageSize', pageSize);

    return (
        <div>
            <Typography>Page exemple d'une table</Typography>
            <DataTable
                columns={columns}
                data={reshapeData}
                handleSelectionModelChange={handleSelectionModelChange}
                setPageSize={setPageSize}
                pageSize={pageSize}
            />
            <DeletePopin
                openDeleteDialog={openDeleteDialog}
                handleDeleteCancel={handleDeleteCancel}
                handleDeleteConfirm={handleDeleteConfirm}
                deleteItem={deleteItem?.username}
                deleteId="l'utilisateur"
            />
        </div>
    );
}

export default DataTablePage;

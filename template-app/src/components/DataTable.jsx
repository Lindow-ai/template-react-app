import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ data, columns, handleSelectionModelChange, selectedRowIds }) => {   

    return (
        <>
            <div>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowPerPageOptions={[5]}
                    checkboxSelection
                    autoHeight
                    autoPageSize
                    autoWidth={true}
                    onSelectionModelChange={handleSelectionModelChange}
                    selectionModel={selectedRowIds}
                />
            </div>
        </>
    );
};

export default DataTable;
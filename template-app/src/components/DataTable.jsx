import { DataGrid } from "@mui/x-data-grid";


const DataTable = ({ data, columns, handleSelectionModelChange, selectedRowIds, setPageSize, pageSize }) => {   

    console.log('pageSize', pageSize);

    return (
        <>
            <div>
                <DataGrid
                    rows={data}
                    pageSize={pageSize}
                    columns={columns}
                    checkboxSelection
                    rowsPerPageOptions={[5, 10, 15]}
                    autoHeight
                    autoWidth={true}
                    onSelectionModelChange={handleSelectionModelChange}
                    selectionModel={selectedRowIds}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                />
            </div>
        </>
    );
};

export default DataTable;
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const DeletePopin = ({openDeleteDialog, handleDeleteCancel, handleDeleteConfirm, deleteId, deleteItem}) => {
    return (
        <Dialog
            open={openDeleteDialog}
            onClose={handleDeleteCancel}
        >
            <DialogTitle>Confirmation de suppression</DialogTitle>
            <DialogContent>
                Êtes-vous sûr de vouloir supprimer {deleteId} "{deleteItem}" ?
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDeleteCancel}>Annuler</Button>
                <Button onClick={handleDeleteConfirm} color="error">
                    Supprimer
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeletePopin;
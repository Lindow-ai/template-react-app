import { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Checkbox } from '@mui/material';

const TodoList = () => {
    // Utilisation de l'état local de React pour stocker les tâches à faire et pour stocket la valeur de l'input
    const [todoItems, setTodoItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    console.log('todoItems', todoItems);
    console.log('...todoItems', ...todoItems);

    // Fonction appelée lorsqu'un utilisateur clique sur le bouton "Ajouter"
    const handleAddTodo = () => {
        if (inputValue !== '') {
   // On ajoute une nouvelle tâche à la liste en utilisant la méthode spread pour copier l'état précédent et ajouter une nouvelle tâche
            setTodoItems([...todoItems, { text: inputValue, completed: false }]);
    // On réinitialise la valeur de l'input après avoir ajouté une nouvelle tâche
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodoItems = [...todoItems];
        newTodoItems.splice(index, 1);
        setTodoItems(newTodoItems);
        console.log('newTodoItems', newTodoItems)
    };

    const handleToggleTodo = (index) => {
        const newTodoItems = [...todoItems];
        newTodoItems[index].completed = !newTodoItems[index].completed;
        setTodoItems(newTodoItems);
    };

    // Affichage de la liste de tâches 
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px', margin: '0 auto' }}>
                <TextField
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label="Nouvelle tâche"
                    variant="outlined"
                    margin="normal"
                    inputProps={{ style: { textAlign: 'center' } }}
                />
                <Button variant="contained" color="primary" onClick={handleAddTodo} style={{ marginTop: '16px' }}>
                    Ajouter
                </Button>
            </div>

            <List>
                {todoItems.map((item, index) => (
                    <ListItem key={index}>
                        <Checkbox checked={item.completed} onClick={() => handleToggleTodo(index)} />
                        <ListItemText primary={item.text} style={{ textDecoration: item.completed ? 'line-through' : 'none' }} />
                        <Button variant="outlined" color="error" onClick={() => handleDeleteTodo(index)}>
                            Supprimer
                        </Button>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default TodoList;

import { Typography } from '@mui/material';
import TodoList from '../../components/ToDoList';

const TodoListPage = () => {
    return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Ma ToDoList
      </Typography>
      <TodoList />
    </div>
    )
}

export default TodoListPage;
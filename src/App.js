import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

const { Title } = Typography;

function App() {
  return (
    <div className='content'>
      <Title style={{ textAlign: 'center' }}>Dash Board</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;

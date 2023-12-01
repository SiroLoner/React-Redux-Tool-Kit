import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, todoListSelector, searchTextSelector } from '../../redux';
import { v4 as uuidv4 } from 'uuid';
import { useCallback, useEffect, useRef, useState } from 'react';
import { searchSelector, todosRemainingSelector } from '../../redux/selector';

export default function TodoList() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleAddTaskKeyPress = useCallback(e => {
    const { key, keyCode } = e;
    console.log('call key down: ', e)
    if (key === 'Enter') {
      console.log('Press Enter')
      dispatch(addTodo({
        id: uuidv4(),
        name: task,
        completed: false,
        priority: priority
      }));
      setTask("");
      setPriority("Medium");
    }
  }, [task, priority])

  useEffect(() => {
    console.log("mount TodoList");
    window.addEventListener('keydown', handleAddTaskKeyPress);

    return () => {
      window.removeEventListener('keydown', handleAddTaskKeyPress);
    };
  }, [handleAddTaskKeyPress]);

  const todoList = useSelector(todosRemainingSelector);
  const todoList1 = useSelector(todoListSelector)

  const searchObject = useSelector(searchSelector);
  console.log("todoList: ", todoList);
  console.log("todoList1: ", todoList1);
  console.log("searchObject: ", searchObject);
  // const searchText = useSelector(searchTextSelector);
  // console.log("searchText: ", searchText);

  const handleButtonClick = (e) => {
    dispatch(addTodo({
      id: uuidv4(),
      name: task,
      completed: false,
      priority: priority
    }))

    setTask("");
    setPriority("Medium");
    // inputRef.current.focus();
  }

  const handleOnchageTask = (e) => {
    setTask(e.target.value)
  }

  const handleOnchangePriority = (value) => {
    setPriority(value)
  }

  return (
    <><h2>todo: {todoList1[0].completed ? 'true' : 'false'}</h2>
      <Row style={{ height: 'calc(100% - 40px)' }}>

        <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
          {
            todoList.map((task, index) => (
                <Todo name={task.name} prioriry={task.priority} task={task} />
            ))
          }
        </Col>
        <Col span={24}>
          <Input.Group style={{ display: 'flex' }} compact>
            <Input value={task} onChange={handleOnchageTask} />
            <Select defaultValue="Medium" onChange={handleOnchangePriority} value={priority}>
              <Select.Option value='High' label='High'>
                <Tag color='red'>High</Tag>
              </Select.Option>
              <Select.Option value='Medium' label='Medium'>
                <Tag color='blue'>Medium</Tag>
              </Select.Option>
              <Select.Option value='Low' label='Low'>
                <Tag color='gray'>Low</Tag>
              </Select.Option>
            </Select>
            <Button type='primary' onClick={handleButtonClick}>
              Add
            </Button>
          </Input.Group>
        </Col>
      </Row>
    </>
  );
}

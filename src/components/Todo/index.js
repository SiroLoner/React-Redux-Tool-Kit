import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../../redux/actions';
import { searchSelector, todosRemainingSelector } from '../../redux/selector';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, prioriry, task }) {
  const dispatch = useDispatch();
  console.log('task: ', task)

  const toggleCheckbox = () => {
    // setChecked(!checked);
    dispatch(updateTodo({
      id: task.id,
      name: name,
      priority: prioriry,
      completed: !task.completed
    }))
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(task.completed ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      {console.log('re-render todo')}
      <Checkbox checked={task.completed} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  ); 

  
}

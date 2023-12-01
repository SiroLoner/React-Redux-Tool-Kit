import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchFilterChange } from '../../redux';
import { priorityFilterChange, statusFilterChange } from '../../redux/actions';

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [searchPriority, setSearchPriority] = useState([]);

  const handOnChangeSearchText = (e) => {
    setSearchText(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  }

  const handOnChangeSearchStatus = (e) => {
    console.log('status: ', e.target.value)
    setSearchStatus(e.target.value);
    dispatch(statusFilterChange(e.target.value));
  }

  const handOnChangeSearchPriority = (e) => {
    console.log('priority: ', e)
    setSearchPriority(e);
    dispatch(priorityFilterChange(e));
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={handOnChangeSearchText} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={searchStatus} onChange={handOnChangeSearchStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          onChange={handOnChangeSearchPriority}
          value={searchPriority}
        >
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
      </Col>
    </Row>
  );
}

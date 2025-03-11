import { Table as AntdTable, TableProps } from 'antd';
import './Table.css';

const CustomTable = <T extends object>(props: TableProps<T>) => {
  return (
    <AntdTable
      className="custom-table"
      pagination={{ pageSize: 10, showSizeChanger: true }}
      {...props}
    />
  );
};

export default CustomTable;
"use client"
import * as React from 'react';
import { DataGrid, GridColDef, GridColumnGroupingModel } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'day', headerName: 'DAY', width: 90},
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, day: 1 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, day: 1 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, day: 1 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, day: 1 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, day: 1 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, day: 2 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, day: 2 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, day: 1 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, day: 1 },
];

const columnGroupingModel: GridColumnGroupingModel = [
  {
    groupId: 'Internal',
    description: '',
    children: [{ field: 'day' }],
  }
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        experimentalFeatures={{ columnGrouping: true }}
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        columnGroupingModel={columnGroupingModel}
      />
    </div>
  );
}
import React from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import users from '../data/users'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const UserTable = () => {

    const rowData = [...users]
    
    return (
        <div className="ag-theme-alpine" style={{height: 600, width: 1500}}>
        <AgGridReact
            rowData={rowData}>
            <AgGridColumn field="company" width='260px'></AgGridColumn>
            <AgGridColumn field="firstName" width='160px'></AgGridColumn>
            <AgGridColumn field="lastName" width='160px'></AgGridColumn>
            <AgGridColumn field="email" width='260px'></AgGridColumn>
            <AgGridColumn field="PM" width='100px'></AgGridColumn>
            <AgGridColumn field="atty" width='100px'></AgGridColumn>
            <AgGridColumn field="Para" width='100px'></AgGridColumn>
            <AgGridColumn field="dateCreated" width='150px'></AgGridColumn>
            <AgGridColumn field="edit" width='100px'></AgGridColumn>
            <AgGridColumn field="delete" width='100px'></AgGridColumn>
            
        </AgGridReact>
        </div>
    )
}

export default UserTable

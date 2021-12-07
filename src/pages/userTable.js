import React from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import { Button } from 'react-bootstrap'
import { CheckCircleFill } from 'react-bootstrap-icons'
import users from '../data/users'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import '../bootstrap.min.css'


const handleEditClick = () => {
    console.log('Edit entry');
}

const handleDeleteClick = () => {
    console.log('Delete entry');
}

const UserTable = () => {

    const rowData = [...users]
    
    return (
        <div className="ag-theme-alpine" style={{height: 600, width: 1500}}>
        <AgGridReact
            rowData={rowData}>
            <AgGridColumn field="company" width='260'></AgGridColumn>
            <AgGridColumn field="firstName" width='160'></AgGridColumn>
            <AgGridColumn field="lastName" width='160'></AgGridColumn>
            <AgGridColumn field="email" width='260'></AgGridColumn>
            <AgGridColumn field='isPropertyManager' headerName="PM" width='80'
                cellRendererFramework={(params) => 
                {if (params.value===true){return <CheckCircleFill className='text-center'/>}else{return ''}}}>
            </AgGridColumn>
            <AgGridColumn field='isAttorney' headerName="Atty" width='80' 
                cellRendererFramework={(params) => 
                {if (params.value===true){return <CheckCircleFill className='text-center' />}else{return ''}}}>
            </AgGridColumn>
            <AgGridColumn field='isParalegal' headerName="Para" width='80' 
                cellRendererFramework={(params) => 
                {if (params.value===true){return <CheckCircleFill className='text-center' />}else{return ''}}}>
            </AgGridColumn>
            <AgGridColumn field="dateCreated" width='150'></AgGridColumn>
            <AgGridColumn field="edit" width='100' cellRendererFramework={(props) => {
                return <Button variant='dark' onClick = {
                  handleEditClick
                } > Edit < /Button>
              }} ></AgGridColumn>
            <AgGridColumn field="delete" width='100' cellRendererFramework={(props) => {
                return <Button variant='dark' onClick = {
                  handleDeleteClick
                } > Delete < /Button>
              }} ></AgGridColumn>
            
        </AgGridReact>

        </div>
    )
}



export default UserTable

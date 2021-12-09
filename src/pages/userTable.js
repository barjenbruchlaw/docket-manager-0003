import React from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import { Button } from 'react-bootstrap'
import { CheckCircleFill } from 'react-bootstrap-icons'
import users from '../data/users'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import './agGridTables.css'
import '../bootstrap.min.css'


const handleEditClick = () => {
    console.log('Edit entry');
}

const handleDeleteClick = () => {
    console.log('Delete entry');
}

const UserTable = () => {

    const rowData = [...users]
    const nameGetter = (params) => {return params.data.firstName + ' ' + params.data.lastName}
    const checkMarkSetter = (params) => {if (params.value===true){return <h4><CheckCircleFill className='text-center'/></h4>}else{return ''}}
    const editButtonFunction = (params) => {return <Button variant='dark' size='sm' onClick = {handleEditClick}>Edit</Button>}
    const deleteButtonFunction = (params) => {return <Button variant='dark' size='sm' onClick = {handleDeleteClick}>Delete</Button>}
    
    return (
        <div className="ag-theme-alpine" style={{height: '60vh', width: '75vw'}}>
        <AgGridReact
            rowData={rowData}>
            <AgGridColumn field="company" flex='10'></AgGridColumn>
            <AgGridColumn headerName='Name' field='name' flex='10'
            valueGetter={nameGetter}
            ></AgGridColumn>
            <AgGridColumn field="email" flex='10'></AgGridColumn>
            <AgGridColumn field='isPropertyManager' headerName="PM" flex='3'
                cellRendererFramework={checkMarkSetter}></AgGridColumn>
            <AgGridColumn field='isAttorney' headerName="Atty" flex='3' 
                cellRendererFramework={checkMarkSetter}></AgGridColumn>
            <AgGridColumn field='isParalegal' headerName="Para" flex='3' 
                cellRendererFramework={checkMarkSetter}></AgGridColumn>
            <AgGridColumn field="edit" flex='4' cellRendererFramework={editButtonFunction}></AgGridColumn>
            <AgGridColumn field="delete" flex='4' cellRendererFramework={deleteButtonFunction}></AgGridColumn>
            
        </AgGridReact>

        </div>
    )
}
export default UserTable
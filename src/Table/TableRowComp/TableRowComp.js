import React from 'react';
import './TableRowComp.css'
import TableCellComp from '../TableCellComp/TableCellComp'

const TableRowComp = (props)=>{
    return <div className='tableRowComp'>
        <TableCellComp clickCell={props.clickCell} x={props.x} y={0}/>
        <TableCellComp clickCell={props.clickCell} x={props.x} y={1}/>
        <TableCellComp clickCell={props.clickCell} x={props.x} y={2}/>
    </div>
}

export default TableRowComp;
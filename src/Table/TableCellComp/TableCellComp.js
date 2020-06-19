import React from 'react';
import './TableCellComp.css'

class TableCellComp extends React.Component{
    
    
    render(){
        /*let selectPlayer;
        console.log("clicked...render",this.props);
        if(this.props.playerStatus.player1){
            selectPlayer = 'tableCellComp Cross'
        }
        else if(this.props.playerStatus.player2){
            selectPlayer = 'tableCellComp Zero'
        }
        else{
            selectPlayer = 'tableCellComp'
        }*/
      //  console.log(this.props.x,this.props.y,'x','y');
        return <div className='tableCellComp' onClick={this.props.clickCell} id={this.props.x + this.props.y}></div>
    }
        
}

export default TableCellComp;
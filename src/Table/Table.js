import React from 'react';
import TableRowComp from './TableRowComp/TableRowComp';
import './Table.css';
var playerWinData=[
    ['0','1','2'],
    ['3','4','5'],
    ['6','7','8'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8'],
    ['0','4','8'],
    ['2','4','6'],
];
var player1Data=[];
var player2Data=[];
var winnerBlock;
class Table extends React.Component{
    constructor(){
        super();
        this.state = {
            player1:true,
            player2:false,
            winner:null,
            drawMatch:false
        }
    }
    onResetClick=()=>{
        this.setState({
            player1:true,
            player2:false,
            winner:null,
            drawMatch:false
        })
        player1Data=[];
        player2Data=[];
        winnerBlock=null;
        let totElem = document.getElementsByClassName('tableCellComp'); 
      
        for(let i=0;i<totElem.length;i++)
        {
            document.getElementsByClassName('tableCellComp')[i].classList.remove('Cross');
            document.getElementsByClassName('tableCellComp')[i].classList.remove('Zero');
            document.getElementsByClassName('tableCellComp')[i].style.pointerEvents='auto';
            document.getElementsByClassName('tableCellComp')[i].style.backgroundColor='white';
        }
       
        console.log(document.getElementsByClassName('tableCellComp'))
    }
  
    onCellClick=(e)=>{
       
            this.setState({
                player1:!this.state.player1,
                player2:!this.state.player2
            })
        

        if(this.state.player1){
            e.target.classList.add('Cross');
            e.target.style.pointerEvents = 'none';
            player1Data.push(e.target.getAttribute('id'));
            if(player1Data.length >= 3)
            {
                console.log(player1Data,'player1Data')
               // playerWinData.forEach((elem,i)=>{
                   for(let i=0;i<playerWinData.length;i++)
                   {
                        //console.log(i,'i');
                        let is_same = playerWinData[i].every(function(element, index) {
                            return player1Data.includes(element);
                        });
                        //console.log(is_same,'is_same');
                        if(is_same){
                            console.log('Player 1 win',i);
                            winnerBlock = i;
                            this.setState({winner:'Player 1'});
                            break;
                        }
                        else{
                            if(player1Data.length === 5)
                            {
                                this.setState({drawMatch:true});
                            }
                        }
                    }
                
            }
        }
        else if(this.state.player2){
            e.target.classList.add('Zero');
            e.target.style.pointerEvents = 'none';
            player2Data.push(e.target.getAttribute('data-place'));
            if(player2Data.length >= 3)
            {
                console.log(player2Data,'player2Data')
                for(let i=0;i<playerWinData.length;i++)
                   {
                        console.log(i,'i');
                        let is_same = playerWinData[i].every(function(element, index) {
                            return element == player2Data[index]; 
                        });
                        console.log(is_same,'is_same');
                        if(is_same){
                            console.log('Player 2 win',i);
                            winnerBlock = i;
                            this.setState({winner:'Player 2'});
                            break;
                        }
                    }
            }
        }

        if(winnerBlock){
            playerWinData[winnerBlock].forEach((e,i)=>{  
                console.log(i,playerWinData[winnerBlock][i]);
                 document.getElementById(playerWinData[winnerBlock][i]).style.backgroundColor='yellow';

             })
        }
       // console.log("clicked...!",player1xData,player2xData,player1yData,player2yData);
    }
    
    render(){
      console.log("render",this.state);
        return (
        <React.Fragment>
            <div className = {this.state.winner?'mainTable disableTable':'mainTable'}>
                <TableRowComp clickCell={this.onCellClick} x={0}/>
                <TableRowComp clickCell={this.onCellClick} x={3}/>
                <TableRowComp clickCell={this.onCellClick} x={6}/>
            </div>
            {this.state.player1 && !this.state.winner && !this.state.drawMatch?<div>Player 1 Turn</div>:null}
            {this.state.player2 && !this.state.winner && !this.state.drawMatch?<div>Player 2 Turn</div>:null}
            {this.state.winner?<div className='winnerPlayer'>{this.state.winner} WON</div>:null}
            {this.state.drawMatch && !this.state.winner?<div className='winnerPlayer'>!!! Draw Match !!!</div>:null}
            <button className='resetBtn' onClick={this.onResetClick}>Reset</button>
        </React.Fragment>
        )
    }
}

export default Table;
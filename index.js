const rows = 8;
const columns =8;
let table = document.createElement('table');
let tbody = document.createElement('tbody');

//ChessBoard creation & color Setting
function creatingTable(){
    table.appendChild(tbody);

    for(let i=0;i<rows;i++){
        let table_row = document.createElement('tr');
        for(let j=0; j<columns;j++){
            let table_data = document.createElement('td');
            if(i%2===0){
                if(j%2===0){
                    table_data.classList.add('blackbox');
                }
            }
            else{
                if(j%2!==0){
                    table_data.classList.add('blackbox');
                }
            }
    
            table_row.appendChild(table_data);
        }
        tbody.appendChild(table_row);
    }
    
    document.querySelector('body').appendChild(table);
    
}

//function to reset the table
function reset(){
    console.log('reset');
    for(let i=0;i<rows;i++){
        for(let j=0; j<columns;j++){
            if(i%2===0){
                if(j%2===0){
                    table.rows[i].cells[j].classList.remove('bluebox');
                }
                else{
                    table.rows[i].cells[j].classList.remove('bluebox');

                }
            }
            else{
                if(j%2!==0){
                    table.rows[i].cells[j].classList.remove('bluebox');
                }
                else{
                    table.rows[i].cells[j].classList.remove('bluebox');

                }
            }

        }
    }
}


//function to color Bishop's move
function colorMoves(rowIndex,colIndex){

    let x = rowIndex, y=colIndex;
    while(x<rows && y<columns){
        table.rows[x].cells[y].classList.add('bluebox');
        x++;y++;

    }
    x = rowIndex, y=colIndex;
    while(x>=0 && y>=0){
        table.rows[x].cells[y].classList.add('bluebox');
        x--;y--;

    }
    x = rowIndex, y=colIndex;
    while(x>=0 && y<columns){
        table.rows[x].cells[y].classList.add('bluebox');
        x--;y++;

    }
    x = rowIndex, y=colIndex;
    while(x<rows && y>=0){
        table.rows[x].cells[y].classList.add('bluebox');
        x++;y--;

    }
    table.rows[rowIndex].cells[colIndex].classList.add('bluebox');

}

function start(){
    creatingTable();

    const tableCreated = document.querySelector('table');


    //when hover starts
    tableCreated.addEventListener('mouseover',(event)=>{

        let rowIndex = event.target.parentElement.rowIndex;
        let colIndex = event.target.cellIndex;
       
        colorMoves(rowIndex,colIndex);
    
    });

    // //when hover stops
    tableCreated.addEventListener('mouseout',()=>{
        reset();
    });

}


start();




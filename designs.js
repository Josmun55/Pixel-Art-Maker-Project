
let cells = $(".cells");

function makeGrid(column,row) {
    if (column>100||row>100){          //giving an alert when input values excedes the below stated limits
        alert("Size too large, choose smaller size(100 by 100 maximum)")
    } else{
        for (y=0; y<column; ++y){    //creating columns using the input value of height
            $("#pixelCanvas").append("<tr></tr>");
        }
        for (x=0; x<row; ++x){  //creating rows to the grid
            $("tr").append("<td class='cells'></td>");
        }    
    }

}
function refreshGrid(){     //refreshing the grid before new values are input to create a new grid by the makegrid fuction
    $("tr").remove();
}
$("#sizePicker").submit(function(event){        //saving the input values by the size picker function call
    
    var height=$("#inputHeight").val(); //height ot the grid
    
    var width=$("#inputWidth").val();  //width of the grid
    
    makeGrid(height,width);//calling the makegrid fuction by passing the height and width
    
    $('.cells').click(function(event){  //event fuction for click as the activity listener
       
        color = $('#colorPicker').val();    //color selection tool
        
      
        if ($(event.target).attr('style')){     //checking existence of a new style attribute
           
            $(event.target).removeAttr('style') //removing the style attribute incase it exists
        
        }else{
            // Input color style attribute on selection of cell
            $(event.target).css('background-color',color )  //style color attribute input on cell selection
        }
    });
    
    event.preventDefault();//prevention of default submission of web page
});

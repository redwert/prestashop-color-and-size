var colorAttributteID='3'; // Set your color attribute ID
var sizeAttributteID='2'; // Set your size attribute ID

$(document).ready(function(){
  var sizeList={};
  $('select[name="group_'+sizeAttributteID+'"] option').each(function(){ 
    if (sizeList[this.text]==undefined){
      sizeList[this.text]=$(this).val(); // get size list option values
    }    
  });
  
  var currentColor=combination.attributes_values[colorAttributteID]; // get current color
  renewSizeList(sizeList, currentColor);
  
  $('[name=group_'+ colorAttributteID +']').parent().children('ul').children('li').children('a').click(function(){
	var currentColor=$(this ).attr('name');
	renewSizeList(sizeList, currentColor);
  });
});



function renewSizeList(sizeList, currentColor){
  $('select[name="group_'+sizeAttributteID+'"]').empty(); //clear list
  var theSize;
  for(var key in combinationsFromController) {
    if (combinationsFromController[key].attributes_values[colorAttributteID]==currentColor){ //if this combination with current color
      theSize=combinationsFromController[key].attributes_values[sizeAttributteID];
      $('select[name="group_'+sizeAttributteID+'"]').append('<option value="'+sizeList[theSize]+ '">' +theSize+'</option>');
    }
  }
  $('select[name="group_'+sizeAttributteID+'"] :first').attr("selected", "selected");
};

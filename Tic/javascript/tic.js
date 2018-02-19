var counter = 0;


$(".row1").click(function() {
    if(counter % 2 === 0){
        $( this ).append( "<img src='https://cdn0.iconfinder.com/data/icons/basic-ui-elements-plain/385/010_x-512.png' alt='Smiley face' height='42' width='42'>" );
        counter++
    }else{
        $( this ).append( "<img src='http://circlesfordialogue.com/wp-content/uploads/2014/12/LAURA-LET%C2%B4S-CIRCLE-UP-2014-12-08.jpg' alt='Smiley face' height='42' width='42'>" );
        counter++        
    }
  });
$(".row2").click(function(){
    if(counter % 2 === 0){
        $( this ).append( "<img src='https://cdn0.iconfinder.com/data/icons/basic-ui-elements-plain/385/010_x-512.png' alt='Smiley face' height='42' width='42'>" );
        counter++        
    }else{
        $( this ).append( "<img src='http://circlesfordialogue.com/wp-content/uploads/2014/12/LAURA-LET%C2%B4S-CIRCLE-UP-2014-12-08.jpg' alt='Smiley face' height='42' width='42'>" );
        counter++        
    }
});
$(".row3").click(function(){
    if(counter % 2 === 0){
        $( this ).append( "<img src='https://cdn0.iconfinder.com/data/icons/basic-ui-elements-plain/385/010_x-512.png' alt='Smiley face' height='42' width='42'>" );
        counter++        
    }else{
        $( this ).append( "<img src='http://circlesfordialogue.com/wp-content/uploads/2014/12/LAURA-LET%C2%B4S-CIRCLE-UP-2014-12-08.jpg' alt='Smiley face' height='42' width='42'>" );
        counter++        
    }
});
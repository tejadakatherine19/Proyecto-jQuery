$(document).ready(function(){

    if(window.location.href.indexOf('index') > -1){
    //Slider

    $('.bxslider').bxSlider({
	    mode: 'fade',
	    captions: false,
	    slideWidth: 1200,
	    responsive: true,
	    pager: true
	  });


}




//Posts
if(window.location.href.indexOf('index') > -1){
    var posts = [
        {
            title:'Prueba de titulo 1',
            date: 'Publicado el dia ' +moment().date() + ' de ' +moment().format("MMMM") + ' del '+moment().format("YYYY"),
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget mollis ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nec velit vel nisl feugiat facilisis. Sed at elit ac nunc sollicitudin eleifend eu vitae elit. Nunc posuere arcu at dignissim pretium.',
        },
        {
            title:'Prueba de titulo 2',
            date:'Publicado el dia ' +moment().date() + ' de ' +moment().format("MMMM") + ' del '+moment().format("YYYY"),
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget mollis ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nec velit vel nisl feugiat facilisis. Sed at elit ac nunc sollicitudin eleifend eu vitae elit. Nunc posuere arcu at dignissim pretium.',
        },
        {
            title:'Prueba de titulo 3',
            date:'Publicado el dia ' +moment().date() + ' de ' +moment().format("MMMM") + ' del '+moment().format("YYYY"),
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget mollis ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nec velit vel nisl feugiat facilisis. Sed at elit ac nunc sollicitudin eleifend eu vitae elit. Nunc posuere arcu at dignissim pretium.'
        },
        {
            title:'Prueba de titulo 4',
            date:'Publicado el dia ' +moment().date() + ' de ' +moment().format("MMMM") + ' del '+moment().format("YYYY"),
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget mollis ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nec velit vel nisl feugiat facilisis. Sed at elit ac nunc sollicitudin eleifend eu vitae elit. Nunc posuere arcu at dignissim pretium.'
        }
    ];

    posts.forEach((item, index)=>{
        var post = `
        
        <article class="post">
                        <h2>
                            ${item.title}
                        </h2>
                        <span class="date">
                            ${item.date}
                        </span>
                        <p>
                            ${item.content}
                        </p>
                        <a href="#" class="button-more">Leer más</a>

                    </article>

`;

$("#posts").append(post);
    });


}


var theme = $('#theme');
$('#to-green').click(function(){
    theme.attr("href", "css/green.css");



});

$('#to-red').click(function(){
    theme.attr("href", "css/red.css");



});

$('#to-blue').click(function(){
    theme.attr("href", "css/blue.css");

});


//Scroll arriba de la web
$('.subir').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop:0
    }, 500);
    return false;

});


// Login false
$('#login form').submit(function(){
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);


});

var form_name = localStorage.getItem("form_name");
if(form_name != null && form_name != "undefined"){
    var about =  $("#about p");
    about.html("Bienvenido, "+"<strong>"+form_name+"</strong>");
    about.append("<br><a href='#' id='logout'>Cerrar Sesion</a>");
    
    $('#login').hide();

    $("#logout").click(function(){
        localStorage.clear();
        location.reload();
       

    });
}



// Accordion
if(window.location.href.indexOf('about') > -1){
    $('#accordion').accordion();

}

//Reloj
if(window.location.href.indexOf('reloj') > -1){
    setInterval(function(){
        var reloj = moment().format("hh:mm:ss");
        $('#reloj').html(reloj);
}, 1000);
}

// Validación
if(window.location.href.indexOf('contact') > -1){
	
    $("form input[name='date']").datepicker({
        dateFormat: 'dd-mm-yy'
    });

    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
    });

}


});


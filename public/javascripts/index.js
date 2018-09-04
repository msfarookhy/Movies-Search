movies = {};
movies.database = [];
movies.loadAssets = function() {
    $.getJSON('http://starlord.hackerearth.com/movieslisting', function(data){
        movies.database =  data;
        movies.init();
    });
};




movies.init = function(){
    movies.generateMarkup();

    movies.Click();
} 


 movies.Click= function(){
    $('.link').on('click',function(){
        console.log("hello");
        let link =$(this).attr("data-href");
        window.open(link,'_blank');
        return false;
    })
}


movies.generateMarkup = function(){
    var template = '';

    
    $.each(movies.database, function(index){
        var db = movies.database;
        var id = db[index];
// console.log(id.movie_imdb_link);


// template +=' <a href="'+id.movie_imdb_link+'">';
      
    
        template += '<div class="item">';

        template += '<div class="link" data-href="'+id.movie_imdb_link+'">';

        template += '<div class="header">';

        template += '<div class="left">';

        template += '<img src= "'+ id.thumbnailUrl +'">';

        template += '</div>';

        template += '<div class = "right" >';

        template += '<div class = "node" >';

        template += '<h4>'+ id.movie_title+ '</h4>';

        template +=  '</div>';


        template += '<div class="director" >';

        template += '<span> Director :</span> ' + id.director_name;

        template +=  '</div>';

        template += '<div class="director" >';

        template += '<span> Actors :</span> ' + id.actor_1_name + id.actor_2_name;

        template +=  '</div>';

        template += '<div class="genres" >';

        template += '<span> Genres :</span> ' + id.genres;

        template +=  '</div>';
       
        template += '<div class="Language" >';

        template += '<span> Language :</span> ' + id.language;

        template +=  '</div>';

        template += '<div class="Year" >';
     
        template += '<span>  Year :</span> ' + id.title_year;

        template +=  '</div>';
        
        
        template += '</div>';

        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
    });
    
    $(".content").append(template);


    movies.Click();


}

movies.loadAssets();

news = {};
news.database = [];
news.loadAssets = function() {
    $.getJSON('http://starlord.hackerearth.com/movieslisting', function(data){
        news.database =  data;
        news.init();
    });
};




news.init = function(){
    news.generateMarkup();
}

news.generateMarkup = function(){
    var template = '';

    
    $.each(news.database, function(index){
        var db = news.database;
        var id = db[index];
console.log(id.movie_imdb_link);
        

    
        template += '<div class="item">';

        template += '<div class="header">';

        template += '<div class="left">';

        template += '<img src= "'+ id.thumbnailUrl +'">';

        template += '</div>';

        template += '<div class = "right" >';

        template += '<div class = "node" >';

        template += '<h4>'+ id.movie_title+ '</h4>';

        template +=  '</div>';


        template += '<div class="node desc" >';

        template += '<span> </span> ' + id.director_name;

        template +=  '</div>';

        template += '<div class="node ">';

        template += '<span class="node pub"></span> ' + id.actor_1_name + id.actor_2_name;
        
        template += '<span>|</span> ';

        template += '<div class="node ">';

        template += '<span class="node pub"></span> ' + id.genres;
        
        template += '<span>|</span> ';
        
       
        template += '<div class="node ">';

        template += '<span class="node pub"></span> ' + id.language + id.country ;
        
        template += '<span>|</span> ';

        
        template += '<span  class="node pubData"></span> ' + id.title_year;

        template +=' <a href="'+id.movie_imdb_link+'">click here';
        template +='</a>'

        

        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
    });
    
    $(".content").append(template);


}

news.loadAssets();

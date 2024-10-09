$(document).ready(function(){
// comando do resultado1
    $("#button1").on("click", function(event){
        $.getJSON("./data.json", function(data) {
            $("#resultado1").append(data.name + ", ");
            $("#resultado1").append(data.age + " anos. ");
            for(let i in data.cars){
                $("#resultado1").append(data.cars[i] + " ");
            }
            $("#resultado1").append("<br>");
            $("#limpar").append("");
        });
    });
// comando do resultado2
    $("#button2").on("click", function(event){
        $.getJSON("./data2.json", function(data) {
            $("#resultado2").append(data.name + ", ");
            $("#resultado2").append(data.age + " anos. <br> ");
            for(let i in data.friends){
                let friendName = data.friends[i].firstName + " " + data.friends[i].lastName;
                $("#resultado2").append("Amigo " + (parseInt(i)+1) + ": " + friendName + "<br>");
            }
            $("#resultado2").append("Total de amigos de " + data.name + ": " + data.friends.length + "<br>" );
            $("#resultado2").append("<br>");
            $("#limpar").append("");
        });
    });
// comando do resultado3
    $("#button3").on("click", function(event){
        $.getJSON("./data3.json", function(data) {
            for(let i in data.results){
                $("#resultado3").append("Genêro: " + data.results[i].gender + "<br>");
                $("#resultado3").append("Nome: " + data.results[i].name.first + "<br>");
                $("#resultado3").append("Email: " + data.results[i].email + "<br>");
            }
            $("#resultado3").append("Info: " + data.info.seed + "<br>");
        });
    });

//comando para limpar
    $("#limpar").on("click", function(event){
        $("div[id^=resultado]").empty();
        
    });
});
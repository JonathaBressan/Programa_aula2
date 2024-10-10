$(document).ready(function() {
    $.getJSON("https://randomuser.me/api/?results=10&nat=br", function(data) {
        for (var i = 0; i < data.results.length; i++) {
            var user = data.results[i];
            var out = "<tr>";
            out += "<td scope='row'>" + (i + 1) + "</td>";
            out += "<td><img src='" + data.results[i].picture.thumbnail + "' alt='Foto' /></td>";
            out += "<td>" + user.login.username + "</td>";
            out += "<td>" + user.name.first + "</td>";
            out += "<td>" + user.name.last + "</td>";
            out += "<td>" + user.gender + "</td>"; // Adicionando gênero
            out += "<td>" + user.email + "</td>";
            out += "<td>" + user.phone + "</td>";
            out += "<td>" + user.location.street.name + ", " + user.location.street.number + "</td>";
            out += "<td>" + user.location.city + "</td>";
            out += "<td>" + user.location.state + "</td>";
            out += "<td>" + user.location.country + "</td>";
            out += "</tr>";

            $("table tbody").append(out);
        }
    });
});



/*
<img src="https://randomuser.me/api/portraits/thumb/men/10.jpg><class=" img-fluid="" rounded-circle'="">
$(document).ready(function(e){
    $.getJSON("https://randomuser.me/api/?results=10&nat=br", function(data) {
        for(var i = 0; i < data.results.length; i++){
            var out = "<tr>";
            out += "<td scope='row'>" + (parseInt(i)+1) + "</td>";
            out += "<td><img src='" + data.results[i].picture.thumbnail + "' /></td>";
            out += "<td>" + data.results[i].login.username + "</td>";
            out += "</tr>";
            $("table tbody").append(out);
        }
    });
});
    /*

$(document.body).append(data.results[i].gender + " ");



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
*/

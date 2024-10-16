$(document).ready(function() {
    $.getJSON("https://randomuser.me/api/1.4/?results=5000&nat=br", function(data) {
        $('table').dataTable( {
            "aaData": data.results,
            "bProcessing": true,
            "language": {
                url: "https://cdn.datatables.net/plug-ins/2.1.8/i18n/pt-BR.json"
            },
           "columns": [
                { data: null,
                    render: function(data, type, row, meta) {
                        return meta.row + meta.settings._iDisplayStart + 1; // Calcula o número da linha
                    }
                },     // Gênero
                { data: "picture.thumbnail", 
                    render: function (data) {
                        return '<img src="' + data + '" class="avatar" width="48" height="48" onerror="loadImgAsBase64(this)" />';
                    }
                }, // Imagem
                { data: "login.username" },   //login
                { data: "name.first" },      // Primeiro nome
                { data: "name.last" },           // sobrenome
                { data: "gender" }, // Gênero
                { data: "email" },  // email
                { data: "phone" },          // Telefone
                { data: null,
                    render: function (data){
                        return data.location.street.name + " , " + data.location.street.number;
                    }
                },
                { data: "location.city" },   // Cidade
                { data: "location.state" },  // Estado
                { data: "location.country" }, // País
             
                
            ],
            "initComplete": function() {
                $('table tbody tr').each(function( index ) {
                    $('td', this).first().html(index + 1);
                });
            }
        });

        /* for (var i = 0; i < data.results.length; i++) {
            var user = data.results[i];
            var out = "<tr>";
            out += "<td scope='row'>" + (i + 1) + "</td>";
            out += "<td><img id='img" + i + "' src='" + data.results[i].picture.thumbnail + "' /></td>";
            out += "<td>" + user.login.username + "</td>";
            out += "<td>" + user.name.first + "</td>";
            out += "<td>" + user.name.last + "</td>";
            out += "<td>" + user.gender + "</td>"; // Adicionando gênero
            out += "<td>" + user.email + "</td>";
            out += "<td class='text-nowrap'>" + user.phone + "</td>";
            out += "<td>" + $.trim(user.location.street.name) + ", " + user.location.street.number + "</td>";
            out += "<td>" + user.location.city + "</td>";
            out += "<td>" + user.location.state + "</td>";
            out += "<td>" + user.location.country + "</td>";
            out += "</tr>";
            
            $("table tbody").append(out);

            $("#img" + i).on("error", function () {
                loadImgAsBase64($(this).attr("src"), (dataURL) => {
                    $(this).attr("src", dataURL);
                });
            });
        } */
    });
});

function loadImgAsBase64(url, callback) {
    let canvas = document.createElement('canvas');
    let img = document.createElement('img');
    img.setAttribute('crossorigin', 'anonymous');
    img.src = 'https://corsproxy.io/?' + url;
    
    img.onload = () => {
        canvas.height = img.height;
        canvas.width = img.width;
        let context = canvas.getContext('2d');
        context.drawImage(img, 0, 0);
        let dataURL = canvas.toDataURL('image/png');
        canvas = null;
        callback(dataURL);
    };
}
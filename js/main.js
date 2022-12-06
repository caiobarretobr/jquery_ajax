function conCep() {
    var cep = document.getElementById("cep").value;
    var url = `https://viacep.com.br/ws/${cep}/json/`
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
         success: function(response){
            $("#logradouro").html(response.logradouro);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#uf").html(response.uf);
            $("#titulo-cep").html(`CEP: ${cep}`)
            $(".cep").show();
            $(".progress-bar").hide()
        }
    })
}

$(function() {
    $(".cep").hide();
    $(".progress-bar").hide();
})
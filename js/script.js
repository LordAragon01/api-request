$(function(){


   $(".formularioapi").on("click", ".submit", function(e){

        e.preventDefault();

        let id = $("#firstinput").val();

        function form_data(data){

            $(".results").fadeIn("slow").show();
            
            var dados_array = [];
            dados_array = data;

            if(dados_array.length){

                $(".load").fadeOut("slow").hide();
                $(".error").fadeOut("slow").hide();
                //console.log(dados_array);

                $.each(dados_array, function(i, e){

                    $(".results").append("Id: " + i + "<br>" + "Userid: " + e.userId + " <br>" + "Title: " + e.title + "<br>" + "Content: " + e.body + "<br>" );
    
                });
    

            }else{

                $(".load").fadeOut("slow").hide();
                $(".error").fadeOut("slow").hide();

                $(".results").html(
                    "<div>" 
                    +"Userid: "+dados_array.userId+            
                    "</br>"
                    +"Title: " +dados_array.title+
                    "</br>"
                    +"Content: " +dados_array.body+
                    "</div>"
                    );
                //console.log(dados_array);

            }

        };


        function error_send(){

            $(".load").fadeOut("slow").hide();
            $(".results").fadeOut("slow").empty();
            $(".error").fadeIn("slow").show();
            $(".error").text("Erro ao Receber Dados");

        }


        function loading(){


            $(".error").fadeOut("slow").hide();
            $(".results").fadeOut("slow").empty();
            $(".load").fadeIn("slow").show();
            $(".load").text("Carregando Dados");


        }

        $.ajax({

            type:"GET",
            dataType: "JSON",
            url: "https://jsonplaceholder.typicode.com/posts/" + id,
            success: form_data,
            beforeSend: loading,
            error: error_send

        });



   });

 

});

//Ativar função ao carregar site
$(window).on("load", function(){

    setTimeout(function(){
        $(".title").text("Requisição por API");
    }, 3000);

});

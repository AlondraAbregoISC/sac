function jsonreq() {

                               console.log("entra a la funcion")

                               try{

                                               console.log("entra al try")

                                               let data = window.mobile.jsonSettings();
                                              

                                                console.log(data)

                                                let objectData=JSON.parse(data)

                                                console.log(objectData)

                                                console.log(objectData.latitude)

                                                console.log(objectData.longitude)

                                               let aux = objectData;

                                                document.getElementById("respJSON").innerHTML = JSON.stringify(aux, undefined, 4);

                                }catch(e){

                               console.log(e);

                                }

               }



function verRespuesta(objJSON)
{
      let aux = objJSON;

      console.log(aux);

      console.log("AUTO REFERENCIA PASO POR ACÁ")

      document.getElementById("respuesta").innerHTML = JSON.stringify(aux, undefined, 4);

}


function validar()
{

      window.mobile.validarJWTSAC(
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJaVFJtTlRKaVkyWXpaVEZtT1dSaE1XUmtPVFF6TUdRell6VTNZakkwTkdNPSIsImF1ZCI6Ik9EQTJZamhrTXpBeU9URmpPVFJsWm1Rek56SmpOelJtWkRJNU9UTXlPRGc9IiwianRpIjoiWTJVek0yWTFabVZrTm1VeVltWmlNekkyT1RKaE5UVTFNRFl6WlRJM1ltRT0iLCJzdWIiOiJNekJpTkRWbVpEZGpNVE13WXpoaE1qQTNNbUV5TVdRd00ySTRabUUxWkdVPSIsImlhdCI6MTc2MTE3NzAwMiwiZXhwIjoxNzYxMTgwNjAyfQ.oHJEbeksAPIvs_OTqcZKhqWGu6IueZj3FxciqDxqnujKrro_Q6UdJ1QAxWfpsSMvo8nkV1F-iV6nc6_OzbbyRQaTF5FrHQyDNDXKogBjdYb9yhnp-PWGx0a517CtYvtqQFJi28GBt--Rdj4Fnz5vt6Ky6p7E22B6hbGvp4yl2Vp1DkaK3W8fixCoPX8GnUQCg_nMy_ODVZOZUBTyHS_XllCrgROL1_p45-Uh6o0gPleneJ0Vk7iMRxiRyrSVPOm3uT_BHuzQrDoWXFqqCKhr-80m-Og4n0p9s0Gd6SMS6aRJKlj7r-xvYUxCLOJ318rt5daoV4I0Isjkn0m6JYlyoA" "54258")

}

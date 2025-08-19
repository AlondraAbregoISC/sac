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

      window.mobile.validarJWTSAC("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJaVFJtTlRKaVkyWXpaVEZtT1dSaE1XUmtPVFF6TUdRell6VTNZakkwTkdNPSIsImF1ZCI6Ik9EQTJZamhrTXpBeU9URmpPVFJsWm1Rek56SmpOelJtWkRJNU9UTXlPRGc9IiwianRpIjoiWWpGallqZ3daalF4T0RNell6TXlaalEwTlRobVltSm1NREE0TldVM00yST0iLCJzdWIiOiJNekJpTkRWbVpEZGpNVE13WXpoaE1qQTNNbUV5TVdRd00ySTRabUUxWkdVPSIsImlhdCI6MTc1NTU2NzQ4NiwiZXhwIjoxNzU1NTcxMDg2fQ.mErvy5P1o0c_dif5t8Ca-oWNFl1PNCCep5tHbCP4DeNPexhS9kRcV2edlmsP1Zh0ehChbn2NGwsn-EzNPm244IJvIIO4QHVL_kPx5zdxF7__wzcobjxOF26L7Oy58aZ0XYqovOMsYIqvIAJR8HjPeCldpaXjNSktHWQbFWf4eoeJTeMoARmd7OJ6bMhNUAlAl7RaFaHj0VDeS6oIYhX-_hZIxftfS24_vD7CJL0ayKESjuLmm6tf8RKBN3RppzvO9wcbfN2gtRtyL_-X64UrrXU8XgWzUYf37t5rx41qr918BBdvnMH2MVjwjnLBGbY4acUjPq2M2ZBO41ZHAquo8Q",
                "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJaVFJtTlRKaVkyWXpaVEZtT1dSaE1XUmtPVFF6TUdRell6VTNZakkwTkdNPSIsImF1ZCI6Ik9EQTJZamhrTXpBeU9URmpPVFJsWm1Rek56SmpOelJtWkRJNU9UTXlPRGc9IiwianRpIjoiWWpGallqZ3daalF4T0RNell6TXlaalEwTlRobVltSm1NREE0TldVM00yST0iLCJzdWIiOiJNekJpTkRWbVpEZGpNVE13WXpoaE1qQTNNbUV5TVdRd00ySTRabUUxWkdVPSIsImlhdCI6MTc1NTU2Njk0MSwiZXhwIjoxNzU1NTcwNTQxfQ.K56uX3bx780wd-6jQ2D9H2b7tz49v1NaKaNQdwXKLYJpRMdvNvntOucrh8y_dLIeysGyc6F-1dF_sH9oJHQ3Ae2nm8glEo8w4Wc8v4TcAgK98Ftvzg1ulNuJhhCsY8vC-hL9QMgL28wM-_sS6xWip0qNy9XAeGokgu4Z8wHvCaSQrg6A5hYSOhY0QnWCevmO75rzuaCCAzuDZCGxiTGu92oi7t8lX3GP3QDyDFJ1959UdkKiIO1Qn_jPy0GLr_7lwZ4YLqP4Lf9yHJMLV3BFCzq2JiKtsWSmkmhGM6HfQQ0DgNSlN2TOmWkJFwGX0yJI6hR_UlKgYPYV_dkob7ofKA")

}

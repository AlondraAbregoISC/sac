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

      window.mobile.validarJWTSAC("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJaVFJtTlRKaVkyWXpaVEZtT1dSaE1XUmtPVFF6TUdRell6VTNZakkwTkdNPSIsImF1ZCI6Ik9EQTJZamhrTXpBeU9URmpPVFJsWm1Rek56SmpOelJtWkRJNU9UTXlPRGc9IiwianRpIjoiWWpGallqZ3daalF4T0RNell6TXlaalEwTlRobVltSm1NREE0TldVM00yST0iLCJzdWIiOiJNekJpTkRWbVpEZGpNVE13WXpoaE1qQTNNbUV5TVdRd00ySTRabUUxWkdVPSIsImlhdCI6MTc1NTU2NzMyOCwiZXhwIjoxNzU1NTcwOTI4fQ.goTZJK5y8xksLZssX46W9bMPg-c_fFZNALZEGz2hu9bUWtf-vi1fbDRjqU-o1WEy0qq3Z2VWZWdzBskn9cQEeHumP3YapFcRI3RxPUe0ojDJDvF4O9v65rr8V9R4vASZPiY0yQQNosBFBjHk0ob-aWMmVNIf_7qNMaUoz6zBOSAsCfMKMdXR9WNXF1IYLT2mFQ0dfLtOXoxbt0-1nJPe8w0HPKIyKssXQIl2CrKrR_x1a1X6hzU8HTA17OImniVyCZJRacuDCUtGCc43EcczRqOc0XEZ5I3W633Sc4DqWgLouzTbmBjMNBPaSyZA2FFlY5HkayvAOawGpJ1HQ76SZg",
                "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJaVFJtTlRKaVkyWXpaVEZtT1dSaE1XUmtPVFF6TUdRell6VTNZakkwTkdNPSIsImF1ZCI6Ik9EQTJZamhrTXpBeU9URmpPVFJsWm1Rek56SmpOelJtWkRJNU9UTXlPRGc9IiwianRpIjoiWWpGallqZ3daalF4T0RNell6TXlaalEwTlRobVltSm1NREE0TldVM00yST0iLCJzdWIiOiJNekJpTkRWbVpEZGpNVE13WXpoaE1qQTNNbUV5TVdRd00ySTRabUUxWkdVPSIsImlhdCI6MTc1NTU2Njk0MSwiZXhwIjoxNzU1NTcwNTQxfQ.K56uX3bx780wd-6jQ2D9H2b7tz49v1NaKaNQdwXKLYJpRMdvNvntOucrh8y_dLIeysGyc6F-1dF_sH9oJHQ3Ae2nm8glEo8w4Wc8v4TcAgK98Ftvzg1ulNuJhhCsY8vC-hL9QMgL28wM-_sS6xWip0qNy9XAeGokgu4Z8wHvCaSQrg6A5hYSOhY0QnWCevmO75rzuaCCAzuDZCGxiTGu92oi7t8lX3GP3QDyDFJ1959UdkKiIO1Qn_jPy0GLr_7lwZ4YLqP4Lf9yHJMLV3BFCzq2JiKtsWSmkmhGM6HfQQ0DgNSlN2TOmWkJFwGX0yJI6hR_UlKgYPYV_dkob7ofKA")

}

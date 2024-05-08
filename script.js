function jsonreq() {

                               console.log("entra a la funcion")

                               try{

                                               console.log("entra al try")

                                               let data = window.Android.jsonSettings();

                                                console.log(data)

                                                let objectData=JSON.parse(data)

                                                console.log(objectData)

                                                console.log(objectData.latitude)

                                                console.log(objectData.longitude)

                                               let aux = objectData;

                                                document.getElementById("respJSON").value = JSON.stringify(aux, undefined, 4);

                                }catch(e){

                               console.log(e);

                                }

               }

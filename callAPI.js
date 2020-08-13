function sendJSON(){ 
                    let xhr = new XMLHttpRequest(); 
                    let url = "https://enviaya.com.mx/api/v1/rates"; 
                
                    xhr.open("POST", url, true); 
          
                    xhr.setRequestHeader("Content-Type", "application/json"); 

                    xhr.onreadystatechange = function () { 
                        if (xhr.readyState === 4 && xhr.status === 200) { 
          
                            result.innerHTML = this.responseText; 
                        }
                    }; 
         
                    var requestJSON = {
                      "carrier_account": null,
                      "api_key":"7edf54de4159e62509f4ac18c792c477",
                        "shipment":{
                          "shipment_type":"Package",
                          "parcels":[
                            {
                              "quantity":"1",
                              "weight":"26",
                              "weight_unit":"kg",
                              "length":"48",
                              "height":"48",
                              "width":"48",
                              "dimension_unit":"cm"
                            }
                          ]
                        },
                        "origin_direction":{
                          "country_code":"MX",
                          "postal_code":"34900"
                        },
                        "destination_direction":{
                          "country_code":"MX",
                          "postal_code":"22654"
                        },
                        "insured_value":"500",
                        "insured_value_currency":"MXN",
                        "order_total_amount": 60,
                        "currency":"USD",
                        "intelligent_filtering":true
                    }
                    xhr.send(JSON.stringify(requestJSON));
                    //alert(JSON.stringify(requestJSON)); 
                    xhr.onload = function() {
                      document.getElementById("resultado").innerHTML = xhr.response;
                    };
        } 
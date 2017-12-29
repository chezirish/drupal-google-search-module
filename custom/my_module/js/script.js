
        var googleUrl = "http://www.google.com?";
        
        
        
                
        
                function fetchAndInsertResults(inputText){
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            document.writeln = xhttp.responseText;
                        }
                    };
                    xhttp.open("GET", googleUrl+inputText, true);
                    xhttp.send();
                }
        
        
                fetchAndInsertResults('test');
        
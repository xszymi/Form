const buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', ()=>{

    });
    buttons[1].addEventListener('click', ()=>{
        /*------E-mail------*/
        let email = document.getElementById('email').value;
        let patern1 = /\S+[@]\S+/;
        if(patern1.test(email)){
            // wynik.innerHTML="";
            document.getElementById("email").style.border = "1.5px solid #1a73e8";
            document.getElementById("emaillable").style.color = "#1a73e8";
        }
        else{
            // wynik.innerHTML="Niepoprwany e-mail. Spróbuj ponownie";
            document.getElementById("email").style.border = "1.5px solid red";
            document.getElementById("emaillable").style.color = "red";
        }
        /*------Mail code------ */
        let poczt = document.getElementById('poczt').value;
        let patern2 = /\d{2}[-]\d{3}/;
        if(patern2.test(poczt)){
            // wynik2.innerHTML="";
            document.getElementById("poczt").style.border = "1.5px solid #1a73e8";
            document.getElementById("pocztlable").style.color = "#1a73e8";
        }
        else{
            // wynik2.innerHTML="Niepoprwany Kod pocztowy. Spróbuj ponownie";
            document.getElementById("poczt").style.border = "1.5px solid red";
            document.getElementById("pocztlable").style.color = "red";
        }
        /*------Password------*/ 
        let haslo1 = document.getElementById("haslo1").value;
        let haslo2 = document.getElementById("haslo2").value;
        if (haslo1 == ""){
            document.getElementById("haslo1").style.border = "1.5px solid red";
            document.getElementById("haslo1lable").style.color = "red";
        }
        else{
            document.getElementById("haslo1").style.border = "1.5px solid #1a73e8";
            document.getElementById("haslo1lable").style.color = "#1a73e8";
        }
        if (haslo2 == ""){
            document.getElementById("haslo2").style.border = "1.5px solid red";
            document.getElementById("haslo2lable").style.color = "red";
        }
        else{
            if (haslo1 == haslo2){
                // wynik3.innerHTML="";
                document.getElementById("haslo2").style.border = "1.5px solid #1a73e8";
                document.getElementById("haslo2lable").style.color = "#1a73e8";
                
            }
            else{
                // wynik3.innerHTML="Hasła się nie zgadzają.";
                document.getElementById("haslo2").style.border = "1.5px solid red";
                document.getElementById("haslo2lable").style.color = "red";
            }
        }
        /*------Rest------*/
        let name = document.getElementById("name").value;
        if (name != ""){
            // wynik4.innerHTML="";
            document.getElementById("name").style.border = "1.5px solid #1a73e8";
            document.getElementById("namelable").style.color = "#1a73e8";
            
        }
        else{
            // wynik4.innerHTML="Uzupełnij wszystkie pola.";
            document.getElementById("name").style.border = "1.5px solid red";
            document.getElementById("namelable").style.color = "red";
        }

        let lastname = document.getElementById("lastname").value;
        if (lastname != ""){
            // wynik4.innerHTML="";
            document.getElementById("lastname").style.border = "1.5px solid #1a73e8";
            document.getElementById("lastnamelable").style.color = "#1a73e8";
            
        }
        else{
            // wynik4.innerHTML="Uzupełnij wszystkie pola.";
            document.getElementById("lastname").style.border = "1.5px solid red";
            document.getElementById("lastnamelable").style.color = "red";
        }

        let age = document.getElementById("age").value;
        if (age != ""){
            // wynik4.innerHTML="";
            document.getElementById("age").style.border = "1.5px solid #1a73e8";
            document.getElementById("agelable").style.color = "#1a73e8";
            
        }
        else{
            // wynik4.innerHTML="Uzupełnij wszystkie pola.";
            document.getElementById("age").style.border = "1.5px solid red";
            document.getElementById("agelable").style.color = "red";
        }

        let location = document.getElementById("location").value;
        if (location != ""){
            // wynik4.innerHTML="";
            document.getElementById("location").style.border = "1.5px solid #1a73e8";
            document.getElementById("locationlable").style.color = "#1a73e8";
            
        }
        else{
            // wynik4.innerHTML="Uzupełnij wszystkie pola.";
            document.getElementById("location").style.border = "1.5px solid red";
            document.getElementById("locationlable").style.color = "red";
        }
    });
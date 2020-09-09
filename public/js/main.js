'use strict'

window.addEventListener('load', () => {
    var type1 = document.getElementById("walkDistance");
    document.getElementById("5km").addEventListener('click', () => {
        type1.selectedIndex = "1";
    });

    document.getElementById("10km").addEventListener('click', () => {
        type1.selectedIndex = "2";
    });

    document.getElementById("21km").addEventListener('click', () => {
        type1.selectedIndex = "3";
    });


    var sb = document.getElementById('submit');
    sb.addEventListener('click', (e) => { 
        e.preventDefault();
        var name = document.getElementById("name").value;
        var contact = document.getElementById("contact").value;
        var email = document.getElementById("mail").value;
        var address = document.getElementById("address").value;
        var state = document.getElementById("state").value;
        var country = document.getElementById("country").value;
        var type = document.getElementById("walkDistance");
        var walkDistance = type.options[type.selectedIndex].text;

        let data = {
            "name": name,
            "contact": contact,
            "email": email,
            "address": address,
            "state": state,
            "country": country,
            "type": walkDistance
        }
        console.log(data)
        fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(data),
            redirect: "error"
        })
            .then((res) => {
                console.log(res);
                return res.json()
            })
            .then((json)=> {
                if (json.done) {
                    alert(json.msg)
                    setTimeout(() => { 
                        window.location.replace("/");
                     }, 1500);
                }
                else {
                    alert(json.msg);
                }
          })
          
    })  
})
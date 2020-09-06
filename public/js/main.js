'use strict'

window.addEventListener('load', () => {

    // submitContent-Type: application/json
    var sb = document.getElementById('submit');
    sb.addEventListener('click', (e) => { 
        e.preventDefault();
        var name = document.getElementById("name").value;
        var contact = document.getElementById("contact").value;
        var email = document.getElementById("mail").value;
        var address = document.getElementById("address").value;
        var state = document.getElementById("state").value;
        var country = document.getElementById("country").value;
        var occupation = document.getElementById("occupation");
        var str_o = occupation.options[occupation.selectedIndex].text;
        var cat = document.getElementById("category").value;
        var type = document.getElementById("type");
        var str_t = type.options[type.selectedIndex].text;

        let data = {
            "name": name,
            "contact": contact,
            "email": email,
            "address": address,
            "state": state,
            "country": country,
            "occupation": str_o,
            "category": cat,
            "type": str_t
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
                    window.location.reload();
                }
                else {
                    alert(json.msg);
                }
          })
          
    })  
})
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
        var name = document.getElementById("name").value;
        var contact = document.getElementById("contact").value;
        var email = document.getElementById("mail").value;
        var address = document.getElementById("address").value;
        var state = document.getElementById("state").value;
        var country = document.getElementById("country").value;
        var type = document.getElementById("walkDistance");
        var walkDistance = type.options[type.selectedIndex].text;

        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        var validate = () => {
            if (name == "") {
                alert("Please enter your name")
                return false;
            }

            if (contact == "") {
                alert("PLease enter contact details")
                return false
            }

            if (email == "") {
                alert("Enter email please")
                return false;
            }
            if (!validateEmail(email)) {
                alert("Enter a valid email")
                return false;
            }
            if (address == "") {
                alert("Enter your Address")
                return false;
            }

            if (state == "") {
                alert("Enter your state");
                return false;
            }

            if (country == "") {
                alert("Enter your country");
                return false;
            }

            if (walkDistance == "") {
                alert("Select walking distance");
                return false;
            }

            return true;

        }
        if (!validate()) {
            alert("Something went wrong, try again.")
        }
        else {
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
                .then((json) => {
                    if (json.done) {
                        alert(json.msg)
                        setTimeout(() => {
                            window.location.replace("/");
                        }, 1500);
                    }
                    else {
                        alert("Wrong details");
                    }
                })

        }
        
    }) 
})
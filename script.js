function validateForm() {
    let x = document.forms["Reg Form"]["fname"].value;
    let y = document.forms["Reg Form"]["uname"].value;
    let z = document.forms["Reg Form"]["em"].value;
    let a = document.forms["Reg Form"]["pass"].value;
    let b = document.forms["Reg Form"]["cpass"].value;
    let c = document.getElementById("c1").checked;
    let d = document.getElementById("c2").checked;
    let e = document.getElementById("c3").checked;
    let f = document.getElementById("pno").value;
    let at = z.indexOf("@");
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    if (y == "") {
        alert("User name must be filled out");
        return false;
    }
    if (z == "") {
        alert("Email must be filled out");
        return false;
    }
    if (at < 1) {
        alert("Invalid email address");
        return false;
    }
    if (f.length != 10) {
        alert("Phone number must contain 10 digits");
        return false;
    }
    if (isNaN(f)) {
        alert("Phone number must contain only digits");
        return false;
    }
    if (a == "") {
        alert("You must enter password");
        return false;
    }
    if (b == "") {
        alert("You must confirm password");
        return false;
    }
    if (a != b) {
        alert("Your password does not match");
        return false;
    }
    if (c == false && d == false && e == false) {
        alert("Gender must be filled out");
        return false;
    }
    alert("You have successfully registered");
    return true;
}
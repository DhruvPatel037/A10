function setCookie() {
    let username = document.getElementById("username").value;
    document.cookie = "user=" + username + "; path=/";
    displayCookie();
}

function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return "";
}

function displayCookie() {
    let user = getCookie("user");
    if (user) {
        document.getElementById("display").textContent = "Welcome back, " + user + "!";
    }
}

window.onload = displayCookie;

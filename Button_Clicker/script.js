function logInOut(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout"
    }
    else {
        element.innerText = "Login"
    }
}

function deleteText(element) {
    element.remove();
}
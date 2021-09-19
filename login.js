username = document.getElementById("username").value;

function addUser() {
    localStorage.setItem("username",username);
    window.location="room.html";
}
document.getElementById("loginForm").addEventListener("submit", function(event)
{
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    alert("Logging Successfully");
});

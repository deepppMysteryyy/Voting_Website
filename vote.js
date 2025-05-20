document.getElementById("voteForm").addEventListener("submit", function(event) {
    event.preventDefault()
    var candidate = document.querySelector('input[name="candidate"]:checked').value;
});
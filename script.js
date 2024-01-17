document.getElementById('registerButton').addEventListener('click', function() {
    var workshop = document.getElementById('workshop').value;
    var prefillUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfDRSa-MEXfxC3sdWbvyG_tDREp04jisVmoWRY44_IGYJCqAA/viewform?usp=sf_link" + encodeURIComponent(workshop);
    window.location.href = prefillUrl;
});

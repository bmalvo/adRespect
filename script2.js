// Nav search button
function goForward() {
    let search = document.getElementById("form-search");

    if (search.style.marginLeft == "-300px") {
        search.style.marginLeft = "0px"
    } else {
        search.style.marginLeft = "-300px"
    };
}
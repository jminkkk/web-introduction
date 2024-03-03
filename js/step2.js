const button1ClickHandler = () => {
    let name = document.getElementById("nameInput").value;
    let movie1 = document.getElementById("movie1").checked;
    let movie2 = document.getElementById("movie2").checked;
    let movie3 = document.getElementById("movie3").checked;
    let movie4 = document.getElementById("movie4").checked;
    let movie5 = document.getElementById("movie5").checked;

    let commonCount = (movie1 ? 1 : 0) + (movie2 ? 1 : 0) + (movie3 ? 1 : 0) + (movie4 ? 1 : 0) + (movie5 ? 1 : 0);

    alert(name + "님, 저와 " + commonCount + "개의 취향이 같으시네요!");
};  
function print(msg) {
    console.log(msg)
}

const div = document.getElementById("button");

div.addEventListener("mousedown", function() {
    console.log("a");
});

div.addEventListener("mouseup", function() {
    console.log("Soltou!");
});
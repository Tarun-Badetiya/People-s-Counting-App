let count = 0;
let el = document.getElementById("count_id");
function count_grow() {
    count = count + 1;
    el.innerText = count;
    console.log(count);
}

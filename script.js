function makeBlocks() {
    for (var i = 0; i < 3; i++) {
        var row = document.createElement('div');
        row.className = "row";
        for (var j = 0; j < 3; j++) {
            var box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
            row.addEventListener("click", function(){return("X");});
        }                
        document.getElementById('boxParent').appendChild(row);
    }
}
function againstCompGaming() {
    var crossZeroComp = document.querySelector('.cross-zero_game-against-computer');
    var hod = 0;
    var allBlocks = document.querySelectorAll('.block--comp');
    clear = document.querySelector('#clear--computer');
    clear.addEventListener('click', function() {
        for (var i = 0; i < allBlocks.length; i++) {
            allBlocks[i].innerHTML ="";
         }
    });
    crossZeroComp.addEventListener('click', function(e) {
        if(e.target.className == 'block--comp') {
            if(hod % 2 == 0){
                e.target.innerHTML = 'x';
                allBlocks[Math.floor(Math.random() * (9 - 0 + 1) - 0)].innerHTML = '0';
            }
            hod++;
            console.log(hod);
        }
        function checkWiner(a, b, c) {
            allBlocks = document.querySelectorAll('.block--comp');
            if (a == 'x' && b == 'x' && c == 'x') alert('победа крестиков');
            if (a == '0' && b == '0' && c == '0') alert('победа ноликов');
        }
        checkWiner(allBlocks[0].innerHTML, allBlocks[1].innerHTML, allBlocks[2].innerHTML);
        checkWiner(allBlocks[3].innerHTML, allBlocks[4].innerHTML, allBlocks[5].innerHTML);
        checkWiner(allBlocks[6].innerHTML, allBlocks[7].innerHTML, allBlocks[8].innerHTML);
        checkWiner(allBlocks[0].innerHTML, allBlocks[3].innerHTML, allBlocks[6].innerHTML);
        checkWiner(allBlocks[1].innerHTML, allBlocks[4].innerHTML, allBlocks[7].innerHTML);
        checkWiner(allBlocks[2].innerHTML, allBlocks[5].innerHTML, allBlocks[8].innerHTML);
        checkWiner(allBlocks[0].innerHTML, allBlocks[4].innerHTML, allBlocks[8].innerHTML);
        checkWiner(allBlocks[2].innerHTML, allBlocks[4].innerHTML, allBlocks[6].innerHTML);
    })
}
 function againstHumanGaming() {
    var crossZeroComp = document.querySelector('.cross-zero_game-against-human'),
    hod = 0,
    allBlocks = document.querySelectorAll('.block--human'),
    clear = document.querySelector('#clear--human');
    clear.addEventListener('click', function() {
        for (var i = 0; i < allBlocks.length; i++) {
            allBlocks[i].innerHTML ="";
         }
    });
    crossZeroComp.addEventListener('click', function(e) {
        if(e.target.className == 'block--human') {
            if(hod % 2 == 0){
                e.target.innerHTML = 'x';
            }
            else e.target.innerHTML = '0';
            hod++;
        }
        function checkWiner(a, b, c) {
            allBlocks = document.querySelectorAll('.block--human');
            if (a == 'x' && b == 'x' && c == 'x') alert('победа крестиков');
            if (a == '0' && b == '0' && c == '0') alert('победа ноликов');
        }
        checkWiner(allBlocks[0].innerHTML, allBlocks[1].innerHTML, allBlocks[2].innerHTML);
        checkWiner(allBlocks[3].innerHTML, allBlocks[4].innerHTML, allBlocks[5].innerHTML);
        checkWiner(allBlocks[6].innerHTML, allBlocks[7].innerHTML, allBlocks[8].innerHTML);
        checkWiner(allBlocks[0].innerHTML, allBlocks[3].innerHTML, allBlocks[6].innerHTML);
        checkWiner(allBlocks[1].innerHTML, allBlocks[4].innerHTML, allBlocks[7].innerHTML);
        checkWiner(allBlocks[2].innerHTML, allBlocks[5].innerHTML, allBlocks[8].innerHTML);
        checkWiner(allBlocks[0].innerHTML, allBlocks[4].innerHTML, allBlocks[8].innerHTML);
        checkWiner(allBlocks[2].innerHTML, allBlocks[4].innerHTML, allBlocks[6].innerHTML);
    })
 }
againstCompGaming();
againstHumanGaming();


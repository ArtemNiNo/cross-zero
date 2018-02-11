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
        function checkWiner() {
            allBlocks = document.querySelectorAll('.block--comp');
            if (allBlocks[0].innerHTML == 'x' && allBlocks[1].innerHTML == 'x' && allBlocks[2].innerHTML == 'x') alert('победа крестиков');
            if (allBlocks[3].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[5].innerHTML == 'x') alert('победа крестиков');
            if (allBlocks[6].innerHTML == 'x' && allBlocks[7].innerHTML == 'x' && allBlocks[8].innerHTML == 'x') alert('победа крестиков');
            if (allBlocks[0].innerHTML == 'x' && allBlocks[3].innerHTML == 'x' && allBlocks[6].innerHTML == 'x') alert('победа крестиков');
            if (allBlocks[1].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[7].innerHTML == 'x') alert('победа крестиков');
            if (allBlocks[2].innerHTML == 'x' && allBlocks[5].innerHTML == 'x' && allBlocks[8].innerHTML == 'x') alert('победа крестиков');
            if (allBlocks[0].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[8].innerHTML == 'x') alert('победа крестиков');
            if (allBlocks[2].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[6].innerHTML == 'x') alert('победа крестиков');

            if (allBlocks[0].innerHTML == '0' && allBlocks[1].innerHTML == '0' && allBlocks[2].innerHTML == '0') alert('победа ноликов');
            if (allBlocks[3].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[5].innerHTML == '0') alert('победа ноликов');
            if (allBlocks[6].innerHTML == '0' && allBlocks[7].innerHTML == '0' && allBlocks[8].innerHTML == '0') alert('победа ноликов');
            if (allBlocks[0].innerHTML == '0' && allBlocks[3].innerHTML == '0' && allBlocks[6].innerHTML == '0') alert('победа ноликов');
            if (allBlocks[1].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[7].innerHTML == '0') alert('победа ноликов');
            if (allBlocks[2].innerHTML == '0' && allBlocks[5].innerHTML == '0' && allBlocks[8].innerHTML == '0') alert('победа ноликов');
            if (allBlocks[0].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[8].innerHTML == '0') alert('победа ноликов');
            if (allBlocks[2].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[6].innerHTML == '0') alert('победа ноликов');
        }
        checkWiner();
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
        function checkWiner() {
            allBlocks = document.querySelectorAll('.block--human');
            if (allBlocks[0].innerHTML == 'x' && allBlocks[1].innerHTML == 'x' && allBlocks[2].innerHTML == 'x') alert('победа крестиков');
            if (allBlocks[3].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[5].innerHTML == 'x') alert('победа крестиков');
            if (allBlocks[6].innerHTML == 'x' && allBlocks[7].innerHTML == 'x' && allBlocks[8].innerHTML == 'x') alert('победа крестиков');
            if (allBlocks[0].innerHTML == 'x' && allBlocks[3].innerHTML == 'x' && allBlocks[6].innerHTML == 'x') alert('победа крестиков');
            if (allBlocks[1].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[7].innerHTML == 'x') alert('победа крестиков');
            if (allBlocks[2].innerHTML == 'x' && allBlocks[5].innerHTML == 'x' && allBlocks[8].innerHTML == 'x') alert('победа крестиков');
            if (allBlocks[0].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[8].innerHTML == 'x') alert('победа крестиков');
            if (allBlocks[2].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[6].innerHTML == 'x') alert('победа крестиков');

            if (allBlocks[0].innerHTML == '0' && allBlocks[1].innerHTML == '0' && allBlocks[2].innerHTML == '0') alert('победа ноликов');
            if (allBlocks[3].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[5].innerHTML == '0') alert('победа ноликов');
            if (allBlocks[6].innerHTML == '0' && allBlocks[7].innerHTML == '0' && allBlocks[8].innerHTML == '0') alert('победа ноликов');
            if (allBlocks[0].innerHTML == '0' && allBlocks[3].innerHTML == '0' && allBlocks[6].innerHTML == '0') alert('победа ноликов');
            if (allBlocks[1].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[7].innerHTML == '0') alert('победа ноликов');
            if (allBlocks[2].innerHTML == '0' && allBlocks[5].innerHTML == '0' && allBlocks[8].innerHTML == '0') alert('победа ноликов');
            if (allBlocks[0].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[8].innerHTML == '0') alert('победа ноликов');
            if (allBlocks[2].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[6].innerHTML == '0') alert('победа ноликов');
        }
        checkWiner();
    })
 }
againstCompGaming();
againstHumanGaming();


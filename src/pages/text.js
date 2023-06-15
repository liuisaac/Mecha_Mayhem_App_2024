function getPage(number) {
    switch(number) {
        case 0:
        return '../src/assets/Raster/Lost/bull.png';
        case 1:
        return '../src/assets/Raster/Lost/moanky.png';

        case 2:
        return '../src/assets/Raster/Lost/boat.png';

        case 3:
        return '../src/assets/Raster/Lost/streak.png';

        default:
        return '../src/assets/Raster/Lost/main.png';
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(`flex flex-row justify-center items-center bg-[url('${getPage(getRandomInt(10))}')] bg-cover h-screen`)
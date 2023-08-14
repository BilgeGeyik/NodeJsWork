const argument = process.argv.slice(2);

function showCircleArea(radis)
{
    let circleArea = Math.PI * radis *radis;

    console.log(`Yarıçapı ${radis} olan dairenin alanı: ${circleArea}.`);
}

showCircleArea(argument[0]*1);
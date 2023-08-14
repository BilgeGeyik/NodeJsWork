### Ödev - Node.JS Komut Satırı Kullanımı
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

<details>  
  <summary>Cevabı</summary>

### Code
const argument = process.argv.slice(2);

function showCircleArea(radis)
{
    let circleArea = Math.PI * radis *radis;

    console.log(`Yarıçapı ${radis} olan dairenin alanı: ${circleArea}.`);
}

showCircleArea(argument[0]*1);

</details>
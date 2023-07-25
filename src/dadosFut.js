let fs = require('fs')
const pup = require('puppeteer')

const url = "https://multicanais.fans/aovivohd/assistir-esportes-online/"


const Screping = async () => {
    const brawser = await pup.launch({
        //ignoreDefaultArgs: ['--disable-extensions'],
        //args: ['--no-sandbox', '--disable-setuid-sandbox']
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
    const page = await brawser.newPage()
    console.log("Iniciando")
    console.log('')

    await page.goto(url, {timeout: 0})
   
    const links = await page.$$eval('.entry-title > a', el => el.map(link => link.href))
    const imgs = await page.$$eval('.entry-image > a > img', imgs => imgs.map(img => img.getAttribute('src')));
    const title = await page.$$eval(".entry-title", (elements) => { return elements.map((el) => el.textContent.trim())})      
    //const imgs2 = await page.$$eval('.attachment-vlog-lay-d-full', imgs => imgs.map(img => img.getAttribute('src')));
    
    /*for(let i=0; i<12; i++){
        const r = imgs[i]
        const l = links[i]
        const t = title[i]
      
        const data = {
            id: i, 
            title: t, 
            link: l, 
            img: r
        }

        //console.log(`echo ${data} > lista.json`)
        //console.log(`echo "${data}" > dados.json` 

        
     }*/

    const data = {
        title: title, 
        link: links, 
        img: imgs
    }

    const res = JSON.stringify(data)

    fs.writeFile("./data.json", `${res}`, function(err){
        //Caro ocorra algum erro
    if(err){
            return console.log('erro')
        }
    //Caso não tenha erro, retornaremos a mensagem de sucesso
        console.log('Arquivo Criado');
    });

    console.log("")
    console.log("")
    console.log("teste")

    await brawser.close()
}
setTimeout(Screping, 1800000)

module.exports = Screping
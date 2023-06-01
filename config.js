//Upgraded To Wiley-md V02 
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//Important & must be change #ATY
global.owner = [
  ['2348084114655', 'will', true],
    ['2347025235185', 'Shizo The Techie', true]
] 
global.prems = []


//Make Changes #ATY
global.bname = 'Will-md'     //Your Bot Name
global.oname = 'Will'     //Your Name
global.onum = '2347025235185' //Number for status forwarding 
global.iglink = 'https://Instagram.com/'     //Your Instagram Link
global.ytlink = 'https://YouTube.com/'      //Your YouTube Channel Link
global.gclink = 'https://chat.whatsapp.com/' //Your WhatsApp Group Link
global.script = 'https://github.com/'  //Donot Change if you appreciate our work 🙂❤️



//Global ImgRes #NMTM
global.menuimg = fs.readFileSync('./media/menu.png')
global.btnimg = fs.readFileSync('./media/logo.png')
global.imgmenu = fs.readFileSync('./media/logo.png')

//Wiley-MD Internal #NMTM
global.version = '2.0.1'
global.package = 'com.tedevs.wiley'
global.library = 'Baileys-MD'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

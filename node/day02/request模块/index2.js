const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');

request('http://www.umei.cc/p/gaoqing/cn/', function (error, response, body) {
    
    const $ = cheerio.load(body);
    $('img').each((index, ele) => {
        let src = $(ele).attr('src')
        console.log(src)
        request(encodeURI($(ele).attr('src'))).pipe(fs.createWriteStream(`./imgs2/${index}.png`))
        // if (src.indexOf('png') == 0) {
        //     console.log(src);
        //     request(encodeURI($(ele).attr('src'))).pipe(fs.createWriteStream(`./imgs/${index}.png`))
        // } else {
        //     console.log(src);
        //     request(encodeURI($(ele).attr('src'))).pipe(fs.createWriteStream(`./imgs/${index}.jpg`))
        // }
    })
});
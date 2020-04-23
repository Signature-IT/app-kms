const fs = require('fs');
const cheerio = require('cheerio');

const lang = process.env.LANG_DIR ? `${process.env.LANG_DIR}/`: '';
const indexFilePath = `dist/app-generic-new/${lang}index.html`;

replaceIndex(indexFilePath);

function replaceIndex(path) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        fs.readFile('./app/config/appUrl.config.txt', 'utf8', function (err, appUrl) {
            if (err) {
                return console.log(err);
            }
            const $ = cheerio.load(data, {decodeEntities: false});
            $('script').each(function(i, elem) {
                if($(this).html().indexOf('config.generic.js')!== -1 ||
                    ($(this).attr('src') && $(this).attr('src').indexOf('config.generic.js')!== -1)){
                    $(this).remove();
                }
            });
            $('head').append(`<script src="${appUrl}/app/config/config.generic.js"></script>`);
            fs.writeFile(indexFilePath, $.html(), function (err) {
                if (err) return console.log(err);
                console.log('Successfully add config.generic.js to index html');
            });
        });
    });
}

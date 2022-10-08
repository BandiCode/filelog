/*      Creator Comments        
            - If you need to change the folder to be watched, change the line 18
            

        Errors
            - When starting the code, the message is displayed saying that a directory has been created, as well as all the files that exist within it.

*/


// Libraries
const chokidar = require('chokidar');
// const fs = require('fs'); 
// const fse = require('fs-extra');
const chalk = require('chalk');

// Variables
const folderToWatch = './example';
const watcher = chokidar.watch(folderToWatch, {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true
});

const log = console.log.bind(console);

/*
    Those are the functions that i'm going to use in a future to backup the files!
    If you want to use them, you have to uncomment them and fix the code

    Merge request are welcome!

async function copyFile(source, target) {
    var rd = fs.createReadStream(source);
    var wr = fs.createWriteStream(target);
    try {
        return await new Promise(function (resolve, reject) {
            rd.on('error', reject);
            wr.on('error', reject);
            wr.on('finish', resolve);
            rd.pipe(wr);
        });
    } catch (error) {
        rd.destroy();
        wr.end();
        throw error;
    }
}

function copyFolder(source, target) {
    try {
        fse.copySync(source, target, { overwrite: true })
        console.log('Done!')
    } catch (err) {
        console.error(err)
    }
}
*/

// Events
watcher
    .on('add', path => log(`[ ${chalk.green("OK")} ] File ${path} created.`))
    .on('change', path => log(`[ ${chalk.green("OK")} ] File ${path} changed.`))
    .on('unlink', path => log(`[ ${chalk.green("OK")} ] File ${path} deleted`))
    .on('ready', () => log(`[ ${chalk.green("DONE")} ] First scan done!`))
    .on('addDir', path => log(`[ ${chalk.green("OK")} ] Directory ${path} created.`))
    .on('unlinkDir', path => log(`[ ${chalk.green("OK")} ] Directory ${path} deleted.`))
    .on('error', error => log(`Error: ${error}`))


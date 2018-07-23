const builder = require('xmlbuilder');
const fs = require('fs');
const moment = require('moment');
const packageJSON = require('./../package.json')
const manifestJSON = require('./../manifest.json')
const uuidv1 = require('uuid/v1')

const time = moment().format()

let manifest = builder.create({
    MambaClass: {
    '@Type': 'Manifest',
    '@Version': '1.0',
    'Member': [
            { '@Name': 'id', '#text': manifestJSON.id },
            { '@Name': 'appName','#text': manifestJSON.appName },
            { '@Name': 'defaultName', '#text': manifestJSON.appName }, // Deprecated
            { '@Name': 'displayedName', '#text': manifestJSON.appName }, // Deprecated
            { '@Name': 'appVersion', '#text': packageJSON.version },
            { '@Name': 'appDescription', '#text': packageJSON.description },
            { '@Name': 'iconPath', '#text': manifestJSON.iconPath },
            { '@Name': 'runOnUserSelection', '#text': manifestJSON.runOnUserSelection },
            { '@Name': 'appCreationDate', '#text': manifestJSON.appCreationDate },
            { '@Name': 'appLastModificationDate', '#text': time.substr(0,(time.length - 6)) },
            { '@Name': 'listInMainMenu', '#text': manifestJSON.listInMainMenu },
            { '@Name': 'appType', '#text': manifestJSON.appType },
            { '@Name': 'appTechnology', '#text': manifestJSON.appTechnology },
            { '@Name': 'appPasswordProtectionLevel', '#text': manifestJSON.appPasswordProtectionLevel },
            { '@Name': 'appKey', '#text': manifestJSON.appKey }
        ]
    }
    
});

// console.log(manifest.end({ pretty: true }));

// Remove o <?xml version="1.0"?>
var xmlString = manifest.end({ pretty: true })
xmlString= xmlString.replace(/<\?xml .*\?>/, '');

fs.writeFile('./dist/manifest.xml', xmlString, function (err){
    if(err) console.log(err);  
}); 

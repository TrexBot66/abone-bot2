const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = (client) => {

    var oynuyorkısımları = [
    "Madratos Community"
    ]
    
    
    setInterval(function() {
    
           client.user.setActivity(oynuyorkısımları, { type: 'PLAYING' });
            })
                }
    
        
    
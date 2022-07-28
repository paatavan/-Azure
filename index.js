var got = require("got");
const url = require('url');
const { MessageEmbed } = require('discord.js');
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
require('dotenv').config();

const Discord = require('discord.js');
require('events').EventEmitter.defaultMaxListeners = 0;
var Client = new Discord.Client({
    intents: [
       Discord.Intents.FLAGS.GUILDS,
       Discord.Intents.FLAGS.GUILD_MESSAGES,
       Discord.Intents.FLAGS.GUILD_BANS,
       Discord.Intents.FLAGS.GUILD_MEMBERS, 
       Discord.Intents.FLAGS.GUILD_VOICE_STATES
        
       
    ]
});
Client.on("ready", Client => {
    console.log(`   / \    _____   _ _ __ ___`)
    console.log(`  / _ \  |_  / | | | '__/ _ \ `)
    console.log(` / ___ \  / /| |_| | | |  __/`)
    console.log(`/_/   \_\/___|\__,_|_|  \___|e`)
    Client.user.setActivity("So longs nerds.", {
        type: "STREAMING",
        url: "https://www.twitch.tv/monstercat"
      });

});



Client.on("messageCreate", async message => {
   
    if (message.author.bot) return false;
    if (message.content.toLowerCase() == prefix +  "boobs") {
        if (message.channel.nsfw) {
            const boobsImage = await nsfw.boobs();
            const boobsEmbed = new MessageEmbed()
            .setTitle(`<:NSFW:998995401376018554> » Boobs !`)
            .setColor("BLUE")
            .setImage(boobsImage);
            message.channel.send({ embeds: [boobsEmbed]});
        } else {
            const errorEmbed = new MessageEmbed()
            .setTitle(`Désolé, Ce n'est pas un salon NSFW.`)
            .setDescription("Alors voila une image de Chatte a la place.")
            .setColor("RED")
              
              message.channel.send({ embeds: [errorEmbed]});
        }
    }
});

Client.on("messageCreate", async message => {
    if (message.author.bot) return false;
    if (message.content.toLowerCase() == "//a4k") {
        if (message.channel.nsfw) {
            const fourkImage = await nsfw.fourk();
            const fourkEmbed = new MessageEmbed()
            .setTitle(`<:NSFW:998995401376018554> » 4K !`)
            .setColor("YELLOW")
            .setImage(fourkImage);
            message.channel.send({ embeds: [fourkEmbed]});
        } else {
            const errorEmbed = new MessageEmbed()
            .setTitle(`Sorry, this channel isn't NSFW.`)
            .setDescription("Here's a picture of a cute cat instead.")
            .setColor("RED")
             
            message.channel.send({ embeds: [errorEmbed]});
        }
    }
});


Client.on("messageCreate", async message => {
   
    if (message.author.bot) return false;
    if (message.content.toLowerCase() == prefix +  "pussy") {
        if (message.channel.nsfw) {
            const pussyImage = await nsfw.pussy();
            const pussyEmbed = new MessageEmbed()
            .setTitle(`<:NSFW:998995401376018554> » Chatte !`)
            .setColor("BLUE")
            .setImage(pussyImage);
            message.channel.send({ embeds: [pussyEmbed]});
        } else {
            const errorEmbed = new MessageEmbed()
            .setTitle(`Désolé, Ce n'est pas un salon NSFW.`)
            
            .setColor("RED")
              
              message.channel.send({ embeds: [errorEmbed]});
        }
    }
});

Client.on("messageCreate", async message => {
   
    if (message.author.bot) return false;
    if (message.content.toLowerCase() == prefix +  "ass") {
        if (message.channel.nsfw) {
            const pgifImage = await nsfw.ass();
            const pgifEmbed = new MessageEmbed()
            .setTitle(`<:NSFW:998995401376018554> » Cu !`)
            .setColor("BLUE")
            .setImage(pgifImage);
            message.channel.send({ embeds: [pgifEmbed]});
        } else {
            const errorEmbed = new MessageEmbed()
            .setTitle(`Désolé, Ce n'est pas un salon NSFW.`)
            
            .setColor("RED")
              
              message.channel.send({ embeds: [errorEmbed]});
        }
    }
});

Client.on("messageCreate", async message => {
   
    if (message.author.bot) return false;
    if (message.content.toLowerCase() == prefix +  "anal") {
        if (message.channel.nsfw) {
            const pgifImage = await nsfw.anal();
            const pgifEmbed = new MessageEmbed()
            .setTitle(`<:NSFW:998995401376018554> » Anal !`)
            .setColor("BLUE")
            .setImage(pgifImage);
            message.channel.send({ embeds: [pgifEmbed]});
        } else {
            const errorEmbed = new MessageEmbed()
            .setTitle(`Désolé, Ce n'est pas un salon NSFW.`)
            
            .setColor("RED")
              
              message.channel.send({ embeds: [errorEmbed]});
        }
    }
});

Client.on("messageCreate", async message => {
   
    if (message.author.bot) return false;
    if (message.content.toLowerCase() == prefix +  "rule34") {
        if (message.channel.nsfw) {
            const pgifImage = await nsfw.hentai();
            const pgifEmbed = new MessageEmbed()
            .setTitle(`<:NSFW:998995401376018554> » Rule34 !`)
            .setColor("BLUE")
            .setImage(pgifImage);
            message.channel.send({ embeds: [pgifEmbed]});
        } else {
            const errorEmbed = new MessageEmbed()
            .setTitle(`Désolé, Ce n'est pas un salon NSFW.`)
            
            .setColor("RED")
              
              message.channel.send({ embeds: [errorEmbed]});
        }
    }
});

Client.on("messageCreate", async message => {
    
            let args = message.content.slice(prefix.length).split(/ +/)
            let person = message.mentions.members.first(message, args[0]);
    if (message.author.bot) return ;
    if (message.content === prefix +  "fuck") {
        if (message.channel.nsfw) {
            const assImage = await nsfw.anal();
            const pgifEmbed = new MessageEmbed()
            .setDescription(`<:NSFW:998995401376018554> » ${message.author} encule ${person} !`)
            .setColor("BLUE")
            .setImage(assImage);
            message.channel.send({ embeds: [pgifEmbed]});
        } else {
            const errorEmbed = new MessageEmbed()
            .setTitle(`Désolé, Ce n'est pas un salon NSFW.`)
            
            .setColor("RED")
              
              message.channel.send({ embeds: [errorEmbed]});
        }
    }
});


const prefix = "//a"
const ownerID = "764228346207928411"

Client.on("messageCreate", message => {
    if (message.author.bot) return;
 
   
if(message.content === prefix + "help"){
    const embed = new Discord.MessageEmbed()
    .setDescription("Tu peux aussi utilisez `//helpkick`, `//ahelpmute` au cas ou tu rencontre des problemes techniques quelconque\n\
    \n\
    ")
        .setTitle("<:reallogo:997501434876669972>  » que puis-je faire pour vous ?")
        .addField("──────────・❮ <:9482squarediscordstaff:997835697073442879>  | Administration ❯・─────────────", "`//akick`,`//amute`,`//astop`,`//aclear`,`//aadv`,`//atpmute`,`//aban`\n\
        ,`//aserverinfo`")
        .addField("──────────・❮ <:3265squareownership:997841793213268058>  | Rigolades/Fun ❯・─────────────", "`//ameme`,`//apiou`,`//abob`,`//adepressif`,`//ahug`,`//akiss`,`//alove`\n\
        ,`//aroulette`")
        .addField("──────────・❮ <:6509squarecertifiedmoderator:998996253868302446>  | Nsfw/Hentais ❯・─────────────", "`//arule34`,`//aboobs`,`//apussy`,`//apgif`,`//anal`,`//ass`,`//a4k`")
        
        .setImage("https://cdn.discordapp.com/attachments/996456808329789522/997499336344744027/standard.gif")
        .setFooter({
            text: "Zoullien© » "
            })
        .setTimestamp()
        .setColor('5865F2');
       message.channel.send({ embeds: [embed]});
      }
});



Client.on("messageCreate", message => {
    if (message.author.bot) return;
 
   
if(message.content === prefix + "stop"){
       
             Client.destroy();
             console.log (`Bot arretez par ${message.author.tag} « Raison : ` + sayMessage)
                    
        
        }
});

Client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + "baka")) {
        const Baka = Math.round(Math.random() * 100);
        const BakaIndex = Math.floor(Baka / 10);

        message.channel.send(`Ta ${Baka}% de bakaitude`)
    }
})

//fun /rigolade 
 Client.on("messageCreate", message => {
    if (message.author.bot) return;
 
   
if(message.content === prefix + "depressif"){
    const embed = new Discord.MessageEmbed()
        .setTitle("<:3265squareownership:997841793213268058>  » Depressif... ! ")
        .setImage("https://c.tenor.com/z2GkJ7teDj0AAAAd/sad-roleplay.gif")
        .setColor('5865F2')
        .setFooter({
            text: "Zoullien© » "
            })
        .setTimestamp();
       message.channel.send({ embeds: [embed]});
      }
}); 

Client.on('messageCreate', message => {
    if (message.content.startsWith(prefix + 'ping')) {
        let embed = new Discord.MessageEmbed()
        .setTitle(":ping_pong: » Pong  ")
        .setDescription(`*Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(Client.ws.ping)}ms*`)
        .setColor('5865F2');
        message.channel.send({ embeds: [embed]});

   
}
});

 Client.on("messageCreate", message => {
        if (message.content.startsWith(prefix + "piou")) {
            if(!message.mentions.members.first()) return message.channel.send(`**<:3265squareownership:997841793213268058>  » Veuillez mentionner une personne s'il vous plait.**`).then(message.react('❌'));
            let args = message.content.slice(prefix.length).split(/ +/)
            let person = message.mentions.members.first(message, args[0]);
    
            
            let embed = new Discord.MessageEmbed()
            .setTitle("**<:3265squareownership:997841793213268058> » Piou !**")
           
            .setColor('5865F2')
            .setDescription(`${message.author} a tiré(e) dans ${person}`)
            .setFooter({
                text: "Zoullien© » "
                })
            .setTimestamp();
            message.channel.send({ embeds: [embed]});
        }
    });

    Client.on("messageCreate", message => {
        if (message.content.startsWith(prefix + "hug")) {
            if(!message.mentions.members.first()) return message.channel.send(`**<:3265squareownership:997841793213268058>  » Veuillez mentionner une personne s'il vous plait.**`).then(message.react('❌'));
            let args = message.content.slice(prefix.length).split(/ +/)
            let person = message.mentions.members.first(message, args[0]);
            var messages = ['https://media.giphy.com/media/DjczAlIcyK1Co/giphy.gif', 'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif', "https://media.giphy.com/media/kvKFM3UWg2P04/giphy.gif"]
            
            var rando = Math.floor(Math.random() * messages.length);
            let embed = new Discord.MessageEmbed()
            .setTitle("**<:3265squareownership:997841793213268058> » Reconfortation !**")
            .setImage(messages[rando])
            .setColor('5865F2')
            .setDescription(`${message.author} a fait un calin a ${person}`)
            .setFooter({
                text: "Zoullien© » "
                })
            .setTimestamp();
            message.channel.send({ embeds: [embed]});
        }
    });


    Client.on("messageCreate", message => {
        if (message.content.startsWith(prefix + "bob")) {
           var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
               .setCustomId("OuiBOB")
               .setLabel("Oui !")
               .setStyle("SUCCESS")
               .setEmoji("<:3605greentick:997912916248510615> ")
            ).addComponents(new Discord.MessageButton()
            .setCustomId("NonBOB")
            .setLabel("Non !")
            .setStyle("SUCCESS")
            .setEmoji("<:6632redcross:997912903074205709> ")
            )
            
            let embed = new Discord.MessageEmbed()
            
            .setAuthor({ name: 'Tu aimes les Bob ?', iconURL: 'https://cdn.discordapp.com/emojis/708317257486434305.gif?size=64', url: 'https://yourareanidiot.com' })
            .setColor('5865F2')
            
            .setFooter({
                text: "Zoullien© » "
                })
               
            .setTimestamp();
            message.channel.send({ embeds: [embed], components: [row]});
        }
    });

    Client.on("messageCreate", message => {
        if (message.content.startsWith(prefix + "verif")) {
           var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
               .setCustomId("Verif")
               .setLabel("Oui !")
               .setStyle("SUCCESS")
               .setEmoji("<:3605greentick:997912916248510615> ")
            )
            
            let embed = new Discord.MessageEmbed()
            .setTitle("<:9715nuevomiembro:997417183611195412> » Verification Azure")
            .setDescription("Cliquez sur le bouton si dessous pour avoir accés au serveur !")
            .setColor('5865F2')
            .setImage("https://cdn.discordapp.com/attachments/996456808329789522/997499336344744027/standard.gif")
            .setFooter({
                text: "Azure - Zoullien© » "
                })
               
            .setTimestamp();
            message.channel.send({ embeds: [embed], components: [row]});
        }

        Client.on("interactionCreate", interaction => {
            if(interaction.isButton()){
             if(interaction.customId === "OuiBOB"){
                 interaction.reply("<:reply:997849852035747972> **Voila le Lien pour supporter les Bob : https://top.gg/pasencore**")
             }//
            }
        })
        Client.on("interactionCreate", interaction => {
         if(interaction.isButton()){
          if(interaction.customId === "NonBOB"){
              interaction.reply("<:reply:997849852035747972> **Activation du mode raid ``serveur detruit dans : 30s** <:7619721608681226541:998302549914427422>  ")
          }
         }
     })
     
    });

   











Client.on("messageCreate",message => {
    if (message.content === prefix + "roulette"){
        const member = message.mentions.members.first() 
        const args = message.content.slice(prefix.length).split(/ +/)
        var messages = ["**Perdu**", "**Gagner**"]
        var rando = Math.floor(Math.random() * messages.length);
        const embed = new Discord.MessageEmbed()
        .setTitle("<:3265squareownership:997841793213268058> » Roulette Russe !") 
        .setDescription(":gun: »  as tirée et tu as " + messages[rando] + "\n\
        *(Tu peux reload l'arme a feu si tu le souhaite : //areload)*")
        message.channel.send({ embeds: [embed]});
    }
    else{
        if(message.content === prefix + "reload"){
            const member = message.mentions.members.first() 
        const args = message.content.slice(prefix.length).split(/ +/)
        const messages = ["**Perdu**", "**Gagner**"];
        var rando = Math.floor(Math.random() * messages.length);
            const embed = new Discord.MessageEmbed()
            .setTitle("<:3265squareownership:997841793213268058> » Roulette Russe !")
            .addField(`${message.author} a reload`, `:gun: Tu as tirée et tu as ` + messages[rando])
             message.channel.send({ embeds: [embed]});
        }
       
    }
})




    Client.on("messageCreate", message => {
        if (message.content === prefix + "meme"){
        

            const embed = new Discord.MessageEmbed()
            got("https://www.reddit.com/r/memes/random/.json").then(response =>{
          let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;

            
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('5865F2')
            .setFooter({
               text: `👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`
            })
            message.channel.send({ embeds: [embed]});
            })
        }
    });

    Client.on("messageCreate", message => {
        if (message.content === prefix + "minecraft"){
        

            const embed = new Discord.MessageEmbed()
            got("https://www.reddit.com/r/Minecrafthmmm/random/.json").then(response =>{
          let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;

            
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('5865F2')
            .setFooter({
               text: `👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`
            })
            message.channel.send({ embeds: [embed]});
            })
        }
    });
Client.on("messageCreate",  message  =>{
    if(message.content === prefix + "serverinfo"){
        const onlineUsers = {
            online: message.guild.presences.cache.filter(presence => presence.status === "online").size,
            idle: message.guild.presences.cache.filter(presence => presence.status === "idle").size,
            dnd: message.guild.presences.cache.filter(presence => presence.status === "dnd").size,
          };
          const embed = new Discord.MessageEmbed()
          .setColor('BLUE')
          .setTitle(`${message.guild.name}`)
          .setThumbnail(message.guild.iconURL)
          .addField(`**Online Users**`, `≫ \`${onlineUsers.online}\``, true)
          .addField(`👤 **Utilisateur Totales**`,  `≫ \`${message.guild.memberCount}\``, true)
          .addField(`📜 **Roles**`, `≫ \`${message.guild.roles.cache.size}\``, true)
          .addField(`💬 **Salon Textuel**`, `≫ \`${message.guild.channels.cache.size}\``, true)
          .addField(`🌍 **Region du serveur :**`, `≫ \`${message.guild.region}\``, true)
          .addField(`😎 **Emotes**`, `≫ \`${message.guild.emojis.cache.size}\``, true)
          .setTimestamp()
          .setFooter({
            text:`©Zoullien `
          });
    
          message.channel.send({ embeds: [embed]});
    }
    })


    
    Client.on("messageCreate", message => {
        if (message.content === "//a8ball") {
            
            var messages = ['no', 'yes']
            const ball = Math.floor(Math.random() * message.length );
            
            
            const embed = new Discord.MessageEmbed()
            .setTitle("8ball")
            .setDescription("*" + messages[ball] + "*" );
            message.channel.send({ embeds: [embed]});
        }
    });


    Client.on("messageCreate", message => {
        if (message.content.startsWith(prefix + "adv")) {
            if(!message.mentions.members.first()) return message.channel.send(`**<:3265squareownership:997841793213268058>  » Veuillez mentionner une personne s'il vous plait.**`).then(message.react('❌'));
            let args = message.content.slice(prefix.length).split(/ +/)
            let person = message.mentions.members.first(message, args[0]);
    
            
            let embed = new Discord.MessageEmbed()
            .setTitle("**<:9482squarediscordstaff:997835697073442879> » Advertissement !**")
            .setThumbnail('https://cdn.discordapp.com/emojis/898976434427666542.webp?size=64')
            .setColor('5865F2')
            .setDescription(` » ${person} a reçu un avertissement provenant de l'equipe de l'administration`)
            .setFooter({
                text: "Zoullien© » "
                })
            .setTimestamp();
            message.channel.send({ embeds: [embed]});
        }
    });


    


    Client.on("messageCreate", message => {
        if (message.content === prefix + "cat") {
        
        const request = require('request');

request.get('http://thecatapi.com/api/images/get?format=src&type=png', {

}, function(error, response, body) {
	if(!error && response.statusCode == 200) {
		let embed = new Discord.MessageEmbed()
    .setTitle("<:3265squareownership:997841793213268058> » Meww !")
    .setImage(response.request.uri.href)
    message.channel.send({ embeds: [embed]});
	} else {
		console.log(error);
	}
})


        }
        });

    
    Client.on("messageCreate", message => {
        if (message.content.startsWith(prefix + "zoullien")) {
           
            
            
            let embed = new Discord.MessageEmbed()
            .setTitle("**<:moi:1000897627497451530> » Zoullette !**")
            
            .setDescription(`>  » Enchanté ${message.author}, je voie que qu'elle qu'un s'interesse à moi, je me presente Zoullien , j'ai commencée le devellopement de moi meme, depuis que Groove et Rythm ont été supprimer par google , j ai voulu commencer mon propre bot musique , puis j ai commencée a creer des bot pour moi `)
            .setImage("https://cdn.discordapp.com/attachments/999621591874945065/1000884678045208686/standard_1.gif")
            .setFooter({
                text: "Zoullien© » "
                })
            .setTimestamp();
            message.channel.send({ embeds: [embed]});
        }
    });
   
    Client.on('guildCreate', guild => {
        let embed = new Discord.MessageEmbed()
        .setTitle("<:3265squareownership:997841793213268058> » Merci , de m'avoir ajoutée sur votre serveur !")
        .setFooter({
            text:":flag_fr: - Créateur : zoullien#0201 "
        })
        .setTimestamp()
        .setDescription("**Je suis Azure  »** *Mon but est de vous aider dans votre serveur , dans ce qui est la moderation est l'amusement au sein du serveur ! , je creer une economie uniquement dediée a mon serveur*");
        
        
        
        guild.systemChannel.send({ embeds: [embed]});
      });




//Administration
Client.on("messageCreate", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    const args = message.content.trim().split(/ +/g);
    if(message.member.permissions.has("KICK_MEMBERS","BAN_MEMBERS")){
        if(message.content.startsWith(prefix + "kick")){
           
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

            if(member == undefined){
                message.reply("**:thinking: » Aucune personne reconnu ou mal mentionné** - //ahelpkick");
            }
            else {
                if(member.kickable){
                    member.kick();
                    message.channel.send("**<:9482squarediscordstaff:997835697073442879>  » **" + member.displayName + "**  a été kick avec succées**");
                }
                else {
                    message.reply("**:lock: » Impossible de kick cette personne**");
                }
            }
        }
        else{
            if(message.content.startsWith(prefix + "mute")){
                const args = message.content.trim().split(/ +/g);
                let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);


                if(member == undefined){
                    message.reply("**:thinking: » Aucune personne reconnu ou mal mentionné** - *//ahelpmute*");
                }
                else{
                    member.roles.add("997515388394942505");
                    message.reply("**<:9482squarediscordstaff:997835697073442879>  » **" + member.displayName + "** a été mute avec succées**");
                }
            }
            else {
                if(message.content.startsWith(prefix + "helpmute")){
                    
                    let embed = new Discord.MessageEmbed()
                    
                    .addField("» *Utilisation de Mute :*", "//amute + `@Utilisateur`")

                    message.channel.send({ embeds: [embed]});
                }
                else {
                    if(message.content.startsWith(prefix + "helpkick")){
                        let embed = new Discord.MessageEmbed()
                        
                        .addField("» *Utilisation de Kick :*", "//akick + `@Utilisateur`")
    
                        message.channel.send({ embeds: [embed]});
                    }
                else{
                    if(message.content.startsWith(prefix + "ban")){
                        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
                        if(member == undefined){
                            message.reply("**:thinking: » Aucune personne reconnu ou mal mentionné** - //ahelpban");
                        }
                    else{
                        if(member.bannable){
                            member.ban();
                            message.channel.send("**<:9482squarediscordstaff:997835697073442879>  » **" + member.displayName + "**  a été ban avec succées**");
                        }
                    
                    }
                    }
                    else{
                        if(message.content.startsWith(prefix + "helpban")){
                            let embed = new Discord.MessageEmbed()
                            
                            .addField("» *Utilisation de Ban :*", "//aban + `@Utilisateur`")
        
                            message.channel.send({ embeds: [embed]});
                        }
                    }
                }
                }
            
            }

        } 
    }
 })











Client.login(process.env.TOKEN);
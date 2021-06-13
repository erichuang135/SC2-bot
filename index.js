const botconfig = require("./botconfig.json");
//const gitignore = require("./token.json");//disable for heroku
const Discord = require ("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async => {
    console.log(`{$bot.user.username} has warped in!`)
    //SC2 bot playing...
    bot.user.setActivity("try sc2-help");
});

bot.on("message", async message =>{
    if (message.author.bot)return;
    if (message.channel.type === "dm") return;

    if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}
    let prefix = botconfig.prefix;
    let shortprefix = botconfig.shortprefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase().trim();
    let args = messageArray.slice(1);
//begin Test command
    if (cmd === `${shortprefix}test`){
        return message.channel.send("test");
        }
//begin Help Command
    if (cmd === `${shortprefix}help`){
        let bicon = bot.user.displayAvatarURL;
        let botembed =  new Discord.RichEmbed()
        .setDescription("Help Info")
        .setColor("#7FC5EB")
        .setThumbnail(bicon)
        .addField("How to Use SC2 bot", "Type `sc2-unit` to see info on that unit. For example, *sc2-marine* will give you that statistics for the marine. Use `sc2-unit-p2` to see the unit's abilities and upgrades. For example, `sc2-raven-p2`. Use no spaces. Works with units and structures.")
        .addField("Fun Commands", "Try out `sc2-joke` or `sc2-trivia`, I'm sure you'll have some fun!")
        .addField("Support and Suggestions", "Visit https://discord.gg/xRhxfAN for questions, comments, updates, and suggestions.")
        .addField("Credits", "All unit stats take from https://liquipedia.net/starcraft2, all images taken from the SC2 wikia")
        .addField("Sellout","Please, take some time to upvote this bot over here: https://discordbots.org/bot/464839423003983902, to help this bot gain more visibility. Thanks!")
    return message.channel.send(botembed);
    }
//begin Joke command
    if (cmd === `${shortprefix}joke`){
        var joke = Math.floor((Math.random() * 70) + 1);
        if (joke === 1)
            {return message.channel.send("Why did the colossus fall over? *Because it was imbalanced.*");}
        else if (joke === 2)
            {return message.channel.send("A marine walks into a bar... there is no counter");}
        else if (joke === 3)
            {return message.channel.send("Liberator anti-air damage");}
        else if (joke === 4)
            {return message.channel.send("A dragoon walks around a bar... then into a bar, then backs off, then into it again.");}
        else if (joke === 5)
            {return message.channel.send("What brand of computer does Avilo use? *IBM*");}
        else if (joke === 6)
            {return message.channel.send("I apologize for all these *Tasteless* jokes");}
        else if (joke === 7)
            {return message.channel.send("What did Tosh say to the evil xel'naga? *Ayymon*");}
        else if (joke === 8)
            {return message.channel.send("What do you call a protoss who smokes weed? *A high templar*");}    
        else if (joke === 9)
            {return message.channel.send("A queen wants to walk into the bar, but by the time she gets there it's closed.");}    
        else if (joke === 10)
            {return message.channel.send("Why are zealots awful shopkeepers? *Because they charge a lot*");}
        else if (joke === 11)
            {return message.channel.send("Why do Zerglings come in pairs? *So that there's more of them*");}  
        else if (joke === 12)
            {return message.channel.send("Why does terran always win maps with water if they choose the color blue? *Because of all the aqua-marines.*");}
        else if (joke === 13)
            {return message.channel.send("What are classified ads titled on the protoss home world? *For Aiur*");}
        else if (joke === 14)
            {return message.channel.send("Why don't protoss put hot sauce on their food? *They don't have mouths*");}
        else if (joke === 15)
            {return message.channel.send("Why would silver players be bad firemen? *They can't climb the ladder*");}
        else if (joke === 16)
            {return message.channel.send("So a hydralisk walks into a bar and kills everyone there because it's a hydralisk.");}
        else if (joke === 17)
            {return message.channel.send("Why do protoss have no privacy? *Too many stalkers.*");}
        else if (joke === 18)
            {return message.channel.send("Two zealots walk into a bar and ask where the bathroom is. The bartender replies, *Sorry, we don't have a bathroom*. The zealots say, *But... WE CANNOT HOLD!*");} 
        else if (joke === 19)
            {return message.channel.send("A Probe hovers into a bar and immediately heads for the restroom. The bartender glances at him. *Whatever*, he says. But after an hour, the Probe still hasn't come out. The puzzled bartender opens the door, and is immediatly vaporized by 23 Photon Cannons.");}
        else if (joke === 20)
            {return message.channel.send("Why did the void ray shut down? *Because it was overpowered.*");} 
        else if (joke === 21)
            {return message.channel.send("My wife's real life macro is perfect... she spends all our money as soon as we get it.");}
        else if (joke === 22)
            {return message.channel.send("A marine walks into a bar... he asks the bartender where the counter is. *Outside in the storm*");}
        else if (joke === 23)
            {return message.channel.send("Adept anti-armor damage");}
        else if (joke === 24)
            {return message.channel.send("A hydralisk tries to walks into a bar, but realizes it has no legs.");}
        else if (joke === 25)
            {return message.channel.send("A dragoon was walking in a field. He suddenly stopped. The Executor asked why he stopped. He said, *The air is blocking my pathing systems.*");}
        else if (joke === 26)
            {return message.channel.send("Stalkers are so fast, you blink and they're gone.");}
        else if (joke === 27)
            {return message.channel.send("A templar comes back to base with a terrified look on his face. The zealot asks *What happened? You look like you've seen a ghost.*");}  
        else if (joke === 28)
            {return message.channel.send("What do call a protoss who trips acid? *Zeratul*");}
        else if (joke === 29)
            {return message.channel.send("Why was the High Templar made manager of his company? *He always gave good feedback.*");}   
        else if (joke === 30)
            {return message.channel.send("What did the SCV shout to scare his buddy? *SUPPLIES!!*");}
        else if (joke === 31)
            {return message.channel.send("So I met Avilo one day and was like *Yo, Avilo what's up?* He replied, *Terran Mech*");}
        else if (joke === 32)
            {return message.channel.send("Hellion anti-armor damage");}
        else if (joke === 33)
            {return message.channel.send("What did the infested football player say to the others? *For the overtime!* - suggested by @InfestedTerranDead");}
        else if (joke === 34)
            {return message.channel.send("Protoss is only underpowered when you kill the pylons - suggested by @Rzion");}
        else if (joke === 35)
            {return message.channel.send("What do you say to the depressed protoss player at the bar? *Just 4 gate about it.* - suggested by @Rzion");}
        else if (joke === 36)
            {return message.channel.send("How did zealots become leaders after attending a Twilight Council meeting? *They learned how to take Charge* - suggested by @Rzion");} 
        else if (joke === 37)
            {return message.channel.send("A colossus walks over a bar - suggested by @Rzion");}
        else if (joke === 38)
            {return message.channel.send("Why did the stalker miss the medivac? *Because he blinked too late* - suggested by @Starman");} 
        else if (joke === 39)
            {return message.channel.send("Starcraft 2 jokes are the worst. Seriously, you should try to aim a little Aiur - suggested by @Duttles");} 
        else if (joke === 40)
            {return message.channel.send("Why do Infestors make good politicians? *They manipulate others with their butt.*");}
        else if (joke === 41)
            {return message.channel.send("Why should you never take advice from a Protoss? *The ones giving you feedback tend to be high*");}
        else if (joke === 42)
            {return message.channel.send("What do Colossi have in common with the British? *They both got destroyed by Vikings*");}
        else if (joke === 43)
            {return message.channel.send("What's Dustin Browder's favorite kind of music? *Rock*");}
        else if (joke === 44)
            {return message.channel.send("What did the Orbital Command say to the Planetary Fortress? *Do you even lift bro?*");}
        else if (joke === 45)
            {return message.channel.send("Why did the stalker have dry eyes? *He forgot to blink*");} 
        else if (joke === 46)
            {return message.channel.send("How did the probe beat the phoenix in a race?  *When behind, dark shrine*");}
        else if (joke === 47)
            {return message.channel.send("If overlords were ground units, they would be underlords");}
        else if (joke === 48)
            {return message.channel.send("What does the archon say? *Your hopes of victory archon now*");}
        else if (joke === 49)
            {return message.channel.send("You know your protoss are defective when a recall is ordered");}
        else if (joke === 50)
            {return message.channel.send("Why are zerg workers so annoying to talk to? *They just keep droning on.*");}
        else if (joke === 51)
            {return message.channel.send("Why are adepts always starting fights? *Because they keep throwing shade.* - suggested by @Somicron");}
        else if (joke === 52)
            {return message.channel.send("A zergling walks into a bar and asks, *Where's the counter?* A baneling next to him hugs him shortly after. - suggested by @RektByFaith");}
        else if (joke === 53)
            {return message.channel.send("Why did the Overmind go to Aiur? *It was free of charge*  - suggested by @DeadInfestedTerran");}
        else if (joke === 54)
            {return message.channel.send("What did the overlord say to his friend? *NGHHHHHHHHH* - suggested by @Fatty");}
        else if (joke === 55)
            {return message.channel.send("What did the Protoss amazon driver say when he delivered your package? *Carrier has arrived.* - suggested by @Duttles");}
        else if (joke === 56)
            {return message.channel.send("What did the reaper say to his friend? *Reapers don't have friends* - suggested by @Fatty");}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        else if (joke === 57)
            {return message.channel.send("What's another phrase for getting cannon rushed? *Getting probed* - suggested by @Invalid");}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        else if (joke === 58)
            {return message.channel.send("What's the protoss favourite sport? *Deathball* - suggested by @Invaild");}
        else if (joke === 59)
            {return message.channel.send("What's the best unit to learn the alphabet from? *A Battlecruiser*");}
        else if (joke === 60)
            {return message.channel.send("What's the best unit to learn the alphabet from? *A spellcaster*");}
        else if (joke === 61)
            {return message.channel.send("Why is gift shopping easy for ghosts? *They know what you like* - suggested by @Invaild");}        
        else if (joke === 62)
            {return message.channel.send("Why is morphing into a broodlord a solid political maneuver? You're getting rid of corruption - suggested by @Nilin");}        
        else if (joke === 63)
            {return message.channel.send("What's the one thing a Probe wants to hear from an SCV? *In the rear, with the gear* - suggested by @Nilin");}        
        else if (joke === 64)
            {return message.channel.send("How does the nydus network go to islands in space? *By a wormhole* - suggested by @Nilin");}
        else if (joke === 65)
            {return message.channel.send("Why is zerg cancer? *They're constantly spreading tumors* - suggested by @Invalid");}
        else if (joke === 66)
            {return message.channel.send("Try to be quiet. My wife is sleeping and we don't want to disruptor. - suggested by @Fatty");}
        else if (joke === 67)
            {return message.channel.send("My wife is bad at Starcraft. When we play 2v2, I always have to carrier. - suggested by @Fatty");}
        else if (joke === 68)
            {return message.channel.send("Why are banelings so bad at blackjack? *They always bust.*");}
        else if (joke === 69)
            {return message.channel.send("How are banelings charging at a Planetary and Blackjack similar? *You need more than 21 to bust.*");}
        else if (joke === 70)
            {return message.channel.send("A protoss player loses his entire army. When asked about it, he replies, *I don't recall*);}");}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        }
    //begin Trivia command
    if (cmd === `${shortprefix}trivia`){
        var trivia = Math.floor((Math.random() * 9) + 1);
        if (trivia === 1)
            {return message.channel.send("Thor's anti-ground attack has the highest single target DPS of any un-upgraded unit, clocking in at 65.9 DPS! - suggested by @Toperoco");}
        else if (trivia === 2)
            {return message.channel.send("The interceptor has the highest movement speed, zipping in at 10.5! Too bad you can't do anything with it... - suggested by @Toperoco");}
        else if (trivia === 3)
            {return message.channel.send("The Fleet Beacon is the most expensive building in the game in terms of minerals + vespene, with a total of 300 + 200, 500 total resources! - suggested by @Toperoco");}
        else if (trivia === 4)
            {return message.channel.send("Widow Mines are only units to deal bonus damage against shields. - suggested by @Toperoco");}
        else if (trivia === 5)
            {return message.channel.send("The Raven's Interference Matrix Ability is the only ability that takes advantage of the Psionic attribute - suggested by @Toperoco");}
        else if (trivia === 6)
            {return message.channel.send("The Protoss Mothership has the longest sight range of any unit, 14! This is 0.25 more than the Observer/Overseer in their stationary modes. - suggested by @Toperoco");}
        else if (trivia === 7)
            {return message.channel.send("The Reaper is the only unit with a range of 4.5. - suggested by @Toperoco");}
        else if (trivia === 8)
            {return message.channel.send("The GSL started back in 2010, shortly after the release of Wings of Liberty - suggested by @Toperoco");}
        else if (trivia === 9)
            {return message.channel.send("The tiny little larva has the highest armor count in the game, at 10! - suggested by @Toperoco");}    
    }
function fullUnitInfo(name,thumbnail,builtFrom,require,mins,gas,supply,time,HP,armor,speed,damage,hitspeed,range,DPS,targets,attributes,sight,cargo,unitname){
    let embed = new Discord.RichEmbed()
        .setDescription ("**"+name+"**")
        .setColor("#7FC5EB")
        .setThumbnail(thumbnail)
        .addField("Construction", "**Built from:** "+builtFrom+", **Requires**: "+require)
        .addField("Resources", "**Minerals: **"+mins+", **Vespene**: "+gas+", **Supply**: "+supply+" **, Build Time**: "+time)
        .addField("Defense", "**HP**: "+HP+", **Armor**: "+armor+", **Movespeed**: "+speed)
        .addField("Offense","**Damage**: "+damage+", **Hitspeed**: "+hitspeed+", **Range**: "+range+", **DPS**: "+DPS+", **Targets**: "+targets)
        .addField("Attributes", "**"+attributes+"**")
        .addField("Misc.", "**Sight Range**: "+sight+", **Cargo Size**: "+cargo)
        .addField("More","Try `sc2-"+unitname+"-p2` for abilities and upgrades!")
        return message.channel.send(embed);
};
function fullUnitInfoSpellcaster(name,thumbnail,builtFrom,require,mins,gas,supply,time,HP,armor,speed,attributes,sight,cargo,unitname){
    let embed = new Discord.RichEmbed()
        .setDescription ("**"+name+"**")
        .setColor("#7FC5EB")
        .setThumbnail(thumbnail)
        .addField("Construction", "**Built from:** "+builtFrom+", **Requires**: "+require)
        .addField("Resources", "**Minerals: **"+mins+", **Vespene**: "+gas+", **Supply**: "+supply+" **, Build Time**: "+time)
        .addField("Defense", "**HP**: "+HP+", **Armor**: "+armor+", **Movespeed**: "+speed)
        .addField("Attributes", "**"+attributes+"**")
        .addField("Misc.", "**Sight Range**: "+sight+", **Cargo Size**: "+cargo)
        .addField("More","*Try `sc2-"+unitname+"-p2` for abilities and upgrades!")
        return message.channel.send(embed);
    } ;
function fullUnitInfo2(name,thumbnail,builtFrom,require,mins,gas,supply,time,HP,armor,speed,damage1,damage2,hitspeed1,hitspeed2,range1,range2,DPS1,DPS2,targets1,targets2,attributes,sight,cargo,unitname,thor,damage3,hitspeed3,range3,DPS3,targets3){
    if (thor === 1){
        let embed = new Discord.RichEmbed()
        .setDescription ("**"+name+"**")
        .setColor("#7FC5EB")
        .setThumbnail(thumbnail)
        .addField("Construction", "**Built from:** "+builtFrom+", **Requires**: "+require)
        .addField("Resources", "**Minerals: **"+mins+", **Vespene**: "+gas+", **Supply**: "+supply+" **Build Time**: "+time)
        .addField("Defense", "**HP**: "+HP+", **Armor**: "+armor+", **Movespeed**: "+speed)
        .addField("Offense 1","**Damage**: "+damage1+", **Hitspeed**: "+hitspeed1+", **Range**: "+range1+", **DPS**: "+DPS1+", **Targets**: "+targets1)
        .addField("Offense 2","**Damage**: "+damage2+", **Hitspeed**: "+hitspeed2+", **Range**: "+range2+", **DPS**: "+DPS2+", **Targets**: "+targets2)
        .addField("Offense 3","**Damage**: "+damage3+", **Hitspeed**: "+hitspeed3+", **Range**: "+range3+", **DPS**: "+DPS3+", **Targets**: "+targets3)
        .addField("Attributes", "**"+attributes+"**")
        .addField("Misc.", "**Sight Range**: "+sight+", **Cargo Size**: "+cargo)
        .addField("More","Try `sc2-"+unitname+"-p2` for abilities and upgrades!")
        return message.channel.send(embed);
    }else{
        let embed = new Discord.RichEmbed()
        .setDescription ("**"+name+"**")
        .setColor("#7FC5EB")
        .setThumbnail(thumbnail)
        .addField("Construction", "**Built from:** "+builtFrom+", **Requires**: "+require)
        .addField("Resources", "**Minerals: **"+mins+", **Vespene**: "+gas+", **Supply**: "+supply+" **Build Time**: "+time)
        .addField("Defense", "**HP**: "+HP+", **Armor**: "+armor+", **Movespeed**: "+speed)
        .addField("Offense 1","**Damage**: "+damage1+", **Hitspeed**: "+hitspeed1+", **Range**: "+range1+", **DPS**: "+DPS1+", **Targets**: "+targets1)
        .addField("Offense 2","**Damage**: "+damage2+", **Hitspeed**: "+hitspeed2+", **Range**: "+range2+", **DPS**: "+DPS2+", **Targets**: "+targets2)
        .addField("Attributes", "**"+attributes+"**")
        .addField("Misc.", "**Sight Range**: "+sight+", **Cargo Size**: "+cargo)  
        .addField("More","Try `sc2-"+unitname+"-p2` for abilities and upgrades!")
        return message.channel.send(embed)
    };   
}; 
function fullBuildingInfo(name,thumbnail,require,mins,gas,time,HP,armor,produce,unlock,attributes,unitname){
    let embed = new Discord.RichEmbed()
    .setDescription ("**"+name+"**")
    .setColor("#7FC5EB")
    .setThumbnail(thumbnail)
    .addField("Construction", "**Requires**: "+require)
    .addField("Resources", "**Minerals: **"+mins+", **Vespene**: "+gas+", **Build Time**: "+time)
    .addField("Defense", "**HP**: "+HP+", **Armor**: "+armor)
    .addField("Produces", produce)
    .addField("Unlocked Tech", unlock)
    .addField("Attributes", "**"+attributes+"**")        
    .addField("More","Try `sc2-"+unitname+"-p2` for abilities and upgrades!")
    return message.channel.send(embed)
};

function fullBuildingInfoStatic(name,thumbnail,require,mins,gas,time,HP,armor,damage,hitspeed,range,DPS,targets,produce,attributes,unitname){
    let embed = new Discord.RichEmbed()
    .setDescription ("**"+name+"**")
    .setColor("#7FC5EB")
    .setThumbnail(thumbnail)
    .addField("Construction", "**Requires**: "+require)
    .addField("Resources", "**Minerals: **"+mins+", **Vespene**: "+gas+", **Build Time**: "+time)
    .addField("Defense", "**HP**: "+HP+", **Armor**: "+armor)
    .addField("Offense","**Damage**: "+damage+", **Hitspeed**: "+hitspeed+", **Range**: "+range+", **DPS**: "+DPS+", **Targets**: "+targets)
    .addField("Produces", produce)
    .addField("Attributes", "**"+attributes+"**") 
    .addField("More","Try `sc2-"+unitname+"-p2` for abilities and upgrades!")      
    return message.channel.send(embed)
};

//begin Terran Units
    //begin SCV
    if (cmd ===`${prefix}scv`){
        fullUnitInfo("Terran SCV", "https://vignette.wikia.nocookie.net/starcraft/images/6/61/SCV_SC2_Icon1.jpg/revision/latest?cb=20160107022653", "Command Center, Orbital Command, Planetary Fortress","none",50,0,1,12,45,"0(+1)",3.94,5,1.07,"Melee",4.67,"Ground","Biological, Mechanical, Light, Ground",8,1,"scv")
    }
    if (cmd ===`${prefix}scv-p2`){
    let scvembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**")
        .setColor("#7FC5EB")
        .addField("Repair", "**Effect**:  SCVs can repair friendly mechanical units and Terran buildings. Cost and time varies depending on unit.")
        .addField("More Info", "https://liquipedia.net/starcraft2/SCV_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-scv` for main stats!");
    message.channel.send(scvembed);
    }
    //begin Marine
    if (cmd ===`${prefix}marine`){
        fullUnitInfo("Terran Marine", "https://vignette.wikia.nocookie.net/starcraft/images/4/47/Marine_SC2_Icon1.jpg/revision/latest?cb=20160107022344", "Barracks","none", 50, 0, 1, 18, "45(+10)", "0(+1)", "3.15+1.57","6(+1)", "0.61-0.2",5,"9.8(+1.6) / 14.7(+2.4) (stim)", "Air and Ground","Biological, Light, Ground",9,1,"marine")
    }
    if (cmd ===`${prefix}marine-p2`){
        let marineembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB") 
        .addField("Combat Shield", "**Researched from:** Barracks Tech Lab, **Minerals**: 100, **Vespene**: 100, **Time**: 79, **Effect**: Every Marine gains a Combat Shield that gives 10 hitpoints. ")
        .addField("Stim Pack", "**Researched from:** Barracks Tech Lab, **Minerals**: 100, **Vespene**: 100, **Time**: 100, **Effect**: Increases the movement speed and firing rate by 50% for 11 secs at the cost of 10 HP")
        .addField("More Info", "https://liquipedia.net/starcraft2/Marine_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-marine` for main stats!");
    return message.channel.send(marineembed);
    }
    //begin Marauder
    if (cmd ===`${prefix}marauder`){
        fullUnitInfo("Terran Marauder","https://vignette.wikia.nocookie.net/starcraft/images/b/ba/Marauder_SC2_Icon1.jpg/revision/latest?cb=20160107022315","Barracks","Tech Lab",100,25,2,21,125,"1+1","3.15+1.57", "10(+1), **vs Armored**: 20(+2)","1.07-0.36",6,"9.3(+0.9) / 14.1(+1.4) (stim), **vs Armored**: 18.6(+1.8) / 24.2(+2.8) (stim)", "Ground", "Biological, Armored, Ground",10,2,"marauder")
    }
    if (cmd ===`${prefix}marauder-p2`){
        let mauraderembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")   
        .addField("Concussive Shells", "**Researched from:** Barracks Tech Lab, **Minerals**: 50, **Vespene**: 50, **Time**: 43, **Effect**: Slows an enemy's movement speed by 50% when hit by the Marauder's attack. Massive units are immune to the slow.")
        .addField("Stim Pack", "**Researched from:** Barracks Tech Lab, **Minerals**: 100, **Vespene**: 100, **Time**: 100, **Effect**: Increases the movement speed and firing rate by 50% for 11 secs at the cost of 20 HP")
        .addField("More Info", "https://liquipedia.net/starcraft2/Marauder_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-marauder` for main stats!");
    return message.channel.send(mauraderembed);
    }
    //begin Reaper
    if (cmd ===`${prefix}reaper`){
        fullUnitInfo("Terran Reaper","https://vignette.wikia.nocookie.net/starcraft/images/7/7d/Reaper_SC2_Icon1.jpg/revision/latest?cb=20160107022927","Barracks","none",50,50,1,32,60,"0(+1)",5.25,"4x2(+1x2)",0.79,5,"10.1(+2.5)","Ground","Biological, Light, Ground",9,1,"reaper")
    }
    if (cmd ===`${prefix}reaper-p2`){
        let reaperembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")   
        .addField("Jetpack", "Allows Reapers to travel up and down cliffs.")
        .addField("Combat Drugs", "Heals 2.8 HP every second if the Reaper is not attacked for 7 seconds.")
        .addField("KD8 Charge", "**Cooldown**: 14, **Effect**: Explodes after a short delay, dealing 5 damage and knocking back nearby units.") 
        .addField("More Info", "https://liquipedia.net/starcraft2/Reaper_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-reaper` for main stats!");
    return message.channel.send(reaperembed);
    }
    //begin Ghost
     if (cmd ===`${prefix}ghost`){
         fullUnitInfo("Terran Ghost","https://vignette.wikia.nocookie.net/starcraft/images/6/6e/Ghost_SC2_Icon1.jpg/revision/latest?cb=20160107022212","Barracks","Tech Lab and Ghost Academy",150,125,2,29,100,"0(+1)",3.94,"10(+1), **vs Light**: 20(+2)",1.07,6,"9.3(+0.93), **vs Light**: 18.6(+1.86)", "Air and Ground","Biological, Psionic, Ground",11,2,"ghost")
    }
    if (cmd ===`${prefix}ghost-p2`){
         let ghostembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB") 
        .addField("Enhanced Shockwaves","**Minerals**: 150, **Vespene**: 150, **Time**: 79, **Effect**:  Increases the radius of the Ghost’s EMP Round from 1.5 to 2.")
        .addField("Steady Targeting","**Energy**: 50, **Range**: 10, **Effect**: After carefully aiming for 1.43 seconds while not taking damage, the Ghost fires a sniper round dealing 170 damage. Ignores armor. Can only target biological units.")
        .addField("EMP Round","**Energy**: 75, **Range**: 10, **Radius**: 1.5, **Effect**: Fires an EMP Round that removes up to 100 shields and energy from every unit within the AoE. Also reveals cloaked units.")
        .addField("Cloak","**Researched from:** Ghost Academy, **Minerals**: 150, **Vespene**: 150, **Time**: 86, **Energy**: 25(+1.3/s), **Effect**: The Ghost becomes invisible until it runs out of energy or the player cancels Cloak.")
        .addField("Tac Nuke Strike","**Cooldown**: 14, **Range**: 12, **Effect**: Calls down a Nuclear strike at a target location. Nukes take 14 seconds to land and deal up to 300 (+200 vs. structures) damage in a large radius.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Ghost_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-ghost` for main stats!");
    return message.channel.send(ghostembed);
    }
    //begin Hellion
    if (cmd ===`${prefix}hellion`){
        fullUnitInfo("Terran Hellion","https://vignette.wikia.nocookie.net/starcraft/images/5/56/Hellion_SC2_Icon1.jpg/revision/latest?cb=20160107022248","Factory","none",100,0,2,21,90,"0(+1)",5.95,"8(+1), **vs Light**: 14(+1)+5(+1)",1.79,5,"4.48(+0.56), **vs Light**: 7.88(+0.56)+2.76(+0.56)", "Ground","Mechanical, Light, Ground",10,2,"hellion")
    }
    if (cmd ===`${prefix}hellion-p2`){
        let hellionembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB") 
       .addField("Infernal Pre-Igniter","**Researched from:** Factory Tech Lab, **Minerals**: 150, **Vespene**: 150, **Time**: 79, **Effect**: Improves the Hellion's bonus against Light units by +5 damage")
       .addField("Smart Servos","**Researched from:** Factory Tech Lab **Requires:** Armory, **Minerals**: 100, **Vespene**: 100, **Time**: 79, **Effect**: Allows Hellions and Hellbats to transform quickly between combat modes.")
       .addField("Hellbat Mode","**Requires:** Armory, **Effect**: Transforms the Hellion into its Hellbat form.")
       .addField("More Info", "https://liquipedia.net/starcraft2/Hellion_(Legacy_of_the_Void)")
       .addField("Back to Main","Try `sc2-hellion` for main stats!");
   return message.channel.send(hellionembed);
   }
    //begin Hellbat
    if (cmd ===`${prefix}hellbat`||cmd ===`${prefix}hellboi`){
        fullUnitInfo("Terran Hellbat","https://vignette.wikia.nocookie.net/starcraft/images/1/13/Hellbat_SC2-HotS_Icon1.jpg/revision/latest?cb=20160107025249","Factory","Armory",100,0,2,21,135,"0(+1)",3.15,"18(+2), **vs Light**: 18(+3)+12(+1)",1.43,2,"12.6(+1.4), **vs Light**:12.6(+0.7)+8.4(+0.7)","Ground","Biological, Mechanical, Light, Ground",10,4,"hellbat")
    }
    if (cmd ===`${prefix}hellbat-p2`||cmd ===`${prefix}hellboi-p2`){
        let hellbatembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB") 
       .addField("Infernal Pre-Igniter","**Researched from:** Factory Tech Lab, **Minerals**: 150, **Vespene**: 150, **Time**: 79, **Effect**: Improves the Hellbat's bonus against Light units by +12 damage.")
       .addField("Smart Servos","**Researched from:** Factory Tech Lab **Requires:** Armory, **Minerals**: 100, **Vespene**: 100, **Time**: 79, **Effect**: Allows Hellions and Hellbats to transform quickly between combat modes.")
       .addField("Hellion Mode","**Requires:** Armory, **Effect**: Transforms the Hellbat into its Hellion form.")
       .addField("More Info", "https://liquipedia.net/starcraft2/Hellbat_(Legacy_of_the_Void)")
       .addField("Back to Main","Try `sc2-hellbat` for main stats!");
   return message.channel.send(hellbatembed);
   }
    //begin Widow Mine
    if (cmd ===`${prefix}widowmine`|| cmd ===`${prefix}mine`){
        fullUnitInfo("Terran Widow Mine","https://vignette.wikia.nocookie.net/starcraft/images/3/3b/WidowMine_SC2-HotS_Icon1.jpg/revision/latest?cb=20160107025320","Factory","none",75,25,2,21,90,"0(+1)",3.94,"125 primary, 40 splash, **vs Shields**: 160 primary, 65 splash",29,9,"N/A","Air and Ground","Mechanical, Light, Ground",7,2,"mine")
    }
    if (cmd ===`${prefix}widowmine-p2`|| cmd ===`${prefix}mine-p2`){
        let mineembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB") 
        .addField("Drilling Claws","**Researched from:** Factory Tech Lab **Requires:** Armory, **Minerals**: 75, **Vespene**: 75, **Time**: 79, **Effect**: Allows Widow Mines to burrow and activate 3 times as fast.")
        .addField("Activate/Deactivate Mine","**Duration:** 2.5(-1.5), **Effect**: Burrows the Widow Mine and readies the weapon/Unburrows the Widow Mine and deactivates its weapon")
        .addField("Cloak Shile Reloading","**Requires:** Armory, **Effect**: A burrowed Widow Mine is now invisible while reloading.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Widow_Mine_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-mine` for main stats!");
    return message.channel.send(mineembed);
    }
   //begin Cyclone
   if (cmd ===`${prefix}cyclone`||cmd ===`${prefix}clone`){
        fullUnitInfo("Terran Cyclone","https://vignette.wikia.nocookie.net/starcraft/images/9/94/Cyclone_SC2-LotV_Icon1.jpg/revision/latest?cb=20160107025444","Factory","Tech Lab",150,100,3,32,120,"1(+1)",4.73,"18(+2)",0.71,5,"25.35(+2.81)","Air and Ground","Mechanical, Armored, Ground",11,4,"cyclone")
   }
   if (cmd ===`${prefix}cyclone-p2`||cmd ===`${prefix}clone-p2`){
        let cycloneembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB") 
        .addField("Lock On","**Cooldown**: 14, **Range**: 7 to cast, 15 effective, **DPS**: 28.57, **Effect**: Locks the Cyclone's weapons on the target air unit, dealing 400 damage over 14 seconds to targets. Can move while firing. Cancels if target moves out of range or vision.")
        .addField("Mag-Field Accelerator","**Researched from:** Factory Tech Lab, **Minerals**: 100, **Vespene**: 100, **Time**: 100, **Effect**: Lock On will deal 400 (+400 vs Armored) over 14 seconds to ground and flying targets.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Cyclone")
        .addField("Back to Main","Try `sc2-cyclone` for main stats!");
    return message.channel.send(cycloneembed);
    }
    //begin Siege Tank
    if (cmd ===`${prefix}siegetank`||cmd ===`${prefix}tank`){
        fullUnitInfo2("Terran Siege Tank","https://vignette.wikia.nocookie.net/starcraft/images/5/57/SiegeTank_SC2_Icon1.jpg/revision/latest?cb=20160107022749","Factory","Tech Lab",150,125,3,32,175,"1(+1)",3.15,"15(+2), **vs Armored**: 25(+3)", "40(+4), **vs Armored**: 70(+5)", 0.74, 2.14, 7, "2-13", "20.3(+2.7), **vs Armored**: 33.8(+4.1)", "18.7(+1.87), **vs Armored**: 32.7(+2.34)","Ground","Ground","Mechanical, Armored, Ground",11,4,"tank")
    }
    if (cmd ===`${prefix}siegetank-p2`||cmd ===`${prefix}tank-p2`){
        let tankembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB") 
        .addField("Tank/Siege Mode"," In Siege Mode, Siege Tanks have very long range and inflict area damage. Siege Tanks in this mode cannot move or attack targets at close range. In Tank mode, Siege Tanks can move, but they do less damage.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Siege_Tank_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-tank` for main stats!");
    return message.channel.send(tankembed);
    }
    //begin Thor
    if (cmd ===`${prefix}thor`){
        fullUnitInfo2("Terran Thor","https://vignette.wikia.nocookie.net/starcraft/images/e/ef/Thor_SC2_Icon1.jpg/revision/latest?cb=20160107022814","Factory","Tech Lab and Armory",300,200,6,43,400,"1(+1)",2.62,"30x2(+3x2)","6x4(+1x4), **vs Light**: 12x4(+2x4)",0.91,2.14,7,10,"65.9(+6.59)","11.2(+1.87), **vs Light**: 22.4(+3.72)", "Ground","Air","Mechanical, Armored, Massive, Ground",11,8,"thor",1,"40(+4), **vs Massive**: 55(+6)",1.71,11,"23.39(+2.35), **vs Massive** 32.16(+3.51)","Air")
    }
    if (cmd ===`${prefix}thor-p2`){
        let thorembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB") 
        .addField("High Impact/Explosive Payload", "The Thor's 250mm Punisher Cannons strike a single air target for heavy damage. The Thor's Javelin missile launchers deal splash damage to nearby air units and additional damage to Light units.")
        .addField("Smart Servos","**Researched from:** Factory Tech Lab **Requires:** Armory, **Minerals**: 100, **Vespene**: 100, **Time**: 79, **Effect**: Allows Thors to transform quickly between combat modes.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Thor_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-thor` for main stats!");
    return message.channel.send(thorembed);
    }
    //begin Viking
    if (cmd ===`${prefix}viking`){
        fullUnitInfo2("Terran Viking","https://vignette.wikia.nocookie.net/starcraft/images/2/2a/Viking_SC2_Icon1.jpg/revision/latest?cb=20160107022849","Starport","none",150,75,2,30,135,"0(+1)","3.85 air, 3.15 ground","10x2(+1x2), **vs Armored**: 14x2(+1x2)","12(+1), **vs Mech**: 20(+2)",1.43,0.71,9,6,"14(+1.4), **vs Armored**: 19.6(+1.4)","16.8(+1.4), **vs Mech**: 28.1(+2.8)","Air","Ground","Mechanical, Armored, Air (in air mode), Ground (in ground mode)",10,2,"viking")
    }
    if (cmd ===`${prefix}viking-p2`){
        let vikingembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB") 
        .addField("Fighter/Assualt Mode", "The Viking in Fighter Mode is an Air unit with an anti-air attack. The Viking in Assault Mode is a Ground unit with a ground attack.")
        .addField("Smart Servos","**Researched from:** Factory Tech Lab **Requires:** Armory, **Minerals**: 100, **Vespene**: 100, **Time**: 79, **Effect**: Allows Vikings to transform quickly between combat modes.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Viking_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-viking` for main stats!");
    return message.channel.send(vikingembed);
    }
    //begin Medevac
    if (cmd ===`${prefix}medivac`||cmd ===`${prefix}medevac`||cmd === `${prefix}healbus`||cmd === `${prefix}medic`){
        fullUnitInfoSpellcaster("Terran Medivac","https://vignette.wikia.nocookie.net/starcraft/images/d/db/Medivac_SC2_Icon1.jpg/revision/latest?cb=20160107022416","Starport","none",100,100,2,30,150,"1(+1)","3.5(+0.63), 5.94 (boost)","Mechanical, Armored, Air",11,"Provides 8","medivac")
    }
    if (cmd ===`${prefix}medivac-p2`||cmd ===`${prefix}medevac-p2`||cmd === `${prefix}healbus-p2`||cmd === `${prefix}medic-p2`){
        let medevacembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB") 
        .addField("Rapid Re-ignition System", "**Researched from:** Fusion Core, **Minerals**: 100, **Vespene**: 100, **Time**: 57, **Effect**: decreases Ignite Afterburners cooldown duration from 15 seconds to 9 seconds and increases the Medivac's base movement speed from 3.5 to 4.13.")
        .addField("Heal", "**Energy**: 1 per 4 HP, **Range**: 4, **HPS**: 12.6, **Targets**: Biological")
        .addField("Ignite Afterburners", "**Cooldown**: 14(-2), **Duration**: 6, **Effect**: Speed boost that increases Medivac's movement speed and acceleration to 5.94 for 4.3 seconds.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Medivac_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-medivac` for main stats!");
    return message.channel.send(medevacembed);
    }
    //begin Liberator
    if (cmd ===`${prefix}liberator`||cmd ===`${prefix}lib`){
        fullUnitInfo2("Terran Liberator","https://vignette.wikia.nocookie.net/starcraft/images/9/91/Liberator_SC2-LotV_Icon1.jpg/revision/latest?cb=20160107025400","Starport","none",150,150,3,43,180,"0(+1)",4.72,"5x2(+1x2)","75(+5)",1.29,1.14,5,"10(+3)","7.8(+1.4)","65.8(+4.4)","Air","Ground","Mechanical, Armored, Air","10 fighter, 13 defender","N/A","lib")
    }
    if (cmd ===`${prefix}liberator-p2`||cmd ===`${prefix}lib-p2`){
        let liberatorembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Advanced Ballistics", "**Researched from:** Fusion Core, **Minerals**: 150, **Vespene**: 150, **Time**: 79, **Effect**: Increases the range of Liberators in Defender Mode by 3.")
        .addField("Fighter/Defender Mode", "**Effect**: In Defender mode, Liberators inflict single target damage to ground units. Liberators in this mode cannot move. In Fighter mode, Liberators can move, but they can only target air units.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Liberator")
        .addField("Back to Main","Try `sc2-lib` for main stats!");
    return message.channel.send(liberatorembed);
    }
    //begin Banshee
    if (cmd ===`${prefix}banshee`||cmd ===`${prefix}shee`){
        fullUnitInfo("Terran Banshee","https://vignette.wikia.nocookie.net/starcraft/images/3/32/Banshee_SC2_Icon1.jpg/revision/latest?cb=20160107022109","Starport","Tech Lab",150,100,3,43,140,"0(+1)","3.85(+1.4)","12x2(1x2)",0.89,6,"27(+2.25)","Ground","Mechanical, Armored, Air",10,"N/A","banshee")
    }
    if (cmd ===`${prefix}banshee-p2`||cmd ===`${prefix}shee-p2`){
        let bansheeembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Hyperflight Rotors", "**Researched from:** Starport Tech Lab, **Minerals**: 150, **Vespene**: 150, **Time**: 121, **Effect**: Increases the movement speed of Banshees from 3.85 to 5.25.")
        .addField("Cloak","**Researched from:** Starport Tech Lab, **Minerals**: 100, **Vespene**: 100, **Time**: 79, **Energy**: 25(+1.3/s), **Effect**: The Banshee becomes invisible until it runs out of energy or the player cancels Cloak.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Banshee_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-banshee` for main stats!");
    return message.channel.send(bansheeembed);
    }
    //begin Raven
    if (cmd ===`${prefix}raven`||cmd ===`${prefix}ketroc`){
        fullUnitInfoSpellcaster("Terran Raven","https://vignette.wikia.nocookie.net/starcraft/images/d/d8/Raven_SC2_Icon1.jpg/revision/latest?cb=20160107022547","Starport","Tech Lab",100,200,2,43,140,"1(+1)",3.85,"Mechanical, Light, Detector, Air",11,"N/A","raven")
    }
    if (cmd ===`${prefix}raven-p2`||cmd ===`${prefix}ketroc-p2`){
        let ravenembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Build Auto-Turret", "**Energy**: 50, **Range**: 2, **Duration**: 10 **Effect**: The Raven drops an Auto-Turret at the target location.")
        .addField("Interference Matrix", "**Energy**: 50, **Range**: 9, **Duration**: 7.9 **Effect**: Disables a target unit rendering it unable to attack or use abilities for 7.9 seconds. Reveals Cloaked units. Can only target mechanical and psionic units.")
        .addField("Anti-Armor Missile", "**Energy**: 75, **Range**: 10, **Duration**: 21, **Radius**: 0.72 **Effect**: Deploys a Missile which pursues the target unit, reducing armor and shield armor of affected units by 3 for 21 seconds.")
        .addField("Corvid Reactor","**Researched from:** Starport Tech Lab, **Minerals**: 150, **Vespene**: 150, **Time**: 79, **Effect**: Increases the Raven's starting energy by 25.")
        .addField("Hi-Sec Auto Tracking","**Researched from:** Engineering Bay, **Minerals**: 100, **Vespene**: 100, **Time**: 57, **Effect**: Adds +1 attack range to Auto-Turrets")
        .addField("More Info", "https://liquipedia.net/starcraft2/Raven_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-raven` for main stats!");
    return message.channel.send(ravenembed);
    }
    //begin Battlecruiser
    if (cmd ===`${prefix}battlecruiser`||cmd === `${prefix}bc`||cmd === `${prefix}cattlebruiser`||cmd === `${prefix}cruiser`){
        fullUnitInfo2("Terran Battlecruiser","https://vignette.wikia.nocookie.net/starcraft/images/f/f5/Battlecruiser_SC2_Icon1.jpg/revision/latest?cb=20160107022138","Starport","Tech Lab and Fusion Core",400,300,6,64,550,"3(+1)",2.62,"8(+1)","5(+1)",0.16,0.16,6,6,"49.8(+6.2)","31.1(+6.2)","Ground","Air","Mechanical, Armored, Massive, Air",12,"N/A","bc")
    }
    if (cmd ===`${prefix}battlecruiser-p2`||cmd === `${prefix}bc-p2`||cmd === `${prefix}cattlebruiser-p2`||cmd === `${prefix}cruiser-p2`){
        let battlecruiserembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Yamato Cannon", "**Researched from:** Fusion Core, **Minerals**: 150, **Vespene**: 150, **Time**: 100, **Cooldown**: 71, **Range**: 10, **Channeling Time**: 2, **Effect**: Blasts a target with a devastating plasma cannon, causing 240 damage.")
        .addField("Tactical Jump", "**Cooldown**: 71, **Effect**: After 4 seconds, warps to the target location. Battlecruiser is invincible while warping. Stuns and puts the Battlecruiser into a 1 second vulnerability phase before it teleports. In this state, the Battlecruiser can be damaged, but Tactical Jump may not be canceled.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Battlecruiser_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-bc` for main stats!");
    return message.channel.send(battlecruiserembed);
    }
    //begin MULE
    if (cmd ===`${prefix}mule`){
        fullUnitInfoSpellcaster("Terran MULE","https://vignette.wikia.nocookie.net/starcraft/images/0/04/MULE_SC2_Icon1.jpg/revision/latest?cb=20160107022519","Orbital Command","none",0,0,0,0,60,"0(+1)",3.94,"Mechanical, Light, Ground",8,"N/A","mule")
    }
    if (cmd ===`${prefix}mule-p2`){
        let muleembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Repair", "**Effect**: MULEs can repair friendly mechanical units and Terran buildings. Cost and time varies depending on unit.")
        .addField("More Info", "https://liquipedia.net/starcraft2/MULE_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-mule` for main stats!");
    return message.channel.send(muleembed);
    }
//begin Protoss Units
    //begin Probe
    if (cmd ===`${prefix}probe`){
        fullUnitInfo("Protoss Probe","https://vignette.wikia.nocookie.net/starcraft/images/5/57/Icon_Protoss_Probe.jpg/revision/latest?cb=20160106180521","Nexus","none",50,0,1,12,"20+20","0(+1)",3.94,5,1.07,"Melee",4.67,"Ground","Mechanical, Light, Ground",8,1,"probe")
    }
    if (cmd ===`${prefix}probe-p2`){
        let probeembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("More Info", "https://liquipedia.net/starcraft2/Probe_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-probe` for main stats!");
    return message.channel.send(probeembed);
    }
    //begin Zealot
    if (cmd ===`${prefix}zealot`||cmd ===`${prefix}lot`){
        fullUnitInfo("Protoss Zealot","https://vignette.wikia.nocookie.net/starcraft/images/6/6e/Icon_Protoss_Zealot.jpg/revision/latest?cb=20160106180701","Gateway, Warp Gate","none",100,0,2,"27 (gateway), 20 (warp gate)","100+50","1(+1)","3.15+1.525 / 10.4 (charge)","8x2(+1x2)",0.86,"Melee","18.6(+2.33)","Ground","Biological, Light, Ground",9,2,"zealot")
    }
    if (cmd ===`${prefix}zealot-p2`||cmd ===`${prefix}lot-p2`){
        let zealotembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Charge", "**Researched from:** Twilight Counsel, **Minerals**: 100, **Vespene**: 100, **Time**: 100, **Cooldown**: 7, **Range**: 4, **Effect**: Temporarily increases the movement speed of a Zealot by 5.67, to a total of 10.4, allowing Zealots to intercept nearby enemies. Researching the upgrade increases the base movement speed of Zealots to 4.725, making a Zealot as fast as a stimmed Marine.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Zealot_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-zealot` for main stats!");
    return message.channel.send(zealotembed);
    }
    //begin Stalker
    if (cmd ===`${prefix}stalker`||cmd ===`${prefix}parting`){
        fullUnitInfo("Protoss Stalker","https://vignette.wikia.nocookie.net/starcraft/images/0/0d/Icon_Protoss_Stalker.jpg/revision/latest?cb=20160106180555","Gateway, Warp Gate","Cybernetics Core",125,50,2,"30 (gateway), 23 (warp gate)","80+80","1(+1)",4.13,"13(+1), **vs Armored**: 18(+2)",1.34,6, "9.7(+0.75), **vs Armored**: 13.4(+1.5)","Ground and Air","Mechanical, Armored, Ground",10,2,"stalker")
    }
    if (cmd ===`${prefix}stalker-p2`||cmd ===`${prefix}parting-p2`){
        let stalkerembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Blink", "**Researched from:** Twilight Counsel, **Minerals**: 100, **Vespene**: 100, **Time**: 121, **Cooldown**: 7, **Range**: 8, **Effect**: Teleports the Stalker to a nearby target location that is not obscured by Fog of War.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Stalker_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-stalker` for main stats!");
    return message.channel.send(stalkerembed);
    }
    //begin Sentry
    if (cmd ===`${prefix}sentry`||cmd ===`${prefix}ticklemonster`){
        fullUnitInfo("Protoss Sentry","https://vignette.wikia.nocookie.net/starcraft/images/a/ab/Icon_Protoss_Sentry.jpg/revision/latest?cb=20160106180539","Gateway, Warp Gate","Cybernetics Core",50,100,2,"26 (gateway), 23 (warp gate)","40+40","1(+1)",3.15,"6(+1)",0.71,5,"8.4(+1.4)","Ground and Air","Mechanical, Light, Psionic, Ground",10,2,"sentry")
    }
    if (cmd ===`${prefix}sentry-p2`||cmd ===`${prefix}ticklemonster-p2`){
        let sentryembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Force Field", "**Energy**: 50, **Range**: 11, **Radius**: 1.7, **Duration**: 11, **Effect**: Barrier that lasts 11 seconds and impedes movement of ground units. Massive units will shatter Force Fields on contact. Hallucinated Massive units cannot shatter Force Fields.")
        .addField("Guardian Shield","**Energy**: 75, **Radius**: 4.5, **Duration**: 11, **Effect**: Creates a range 4 aura that reduces incoming ranged damage to friendly units by 2.")
        .addField("Hallucination","**Energy**: 75, **Duration**: 43, **Effect**: Creates hallucinations of Protoss units at the caster's location, that cannot use active abilities, cannot deal damage, and die more easily. Enemy detectors can reveal hallucinations.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Sentry_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-sentry` for main stats!");
    return message.channel.send(sentryembed);
    }
    //begin Adept
    if (cmd ===`${prefix}adept`){
        fullUnitInfo("Protoss Adept","https://vignette.wikia.nocookie.net/starcraft/images/9/91/Icon_Protoss_Adept.jpg/revision/latest?cb=20160106231127","Gateway, Warp Gate","Cybernetics Core",100,25,2,"30 (gateway), 20 (warp gate)","70+70","1(+1)","3.5 (5.5 shade)","10(+1), **vs Light**: 22(+2)", "1.61(-0.5)",4,"6.2(+0.62)+2.8(+0.28), **vs Light**: 13.65(+1.24)+6.15(+0.56)","Ground", "Biological, Light, Ground","9 (4 shade)",2,"adept")
    }
    if (cmd ===`${prefix}adept-p2`){
            let adeptembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Resonating Glaives", "**Researched from:** Twilight Counsel, **Minerals**: 100, **Vespene**: 100, **Time**: 100, **Effect**: Increases the attack speed of the Adept by 45%. ")
        .addField("Psionic Transfer","**Duration**: 7, **Cooldown**: 11, **Effect**: Projects an invulnerable Shade that can move but cannot attack. After 7 seconds, the Adept teleports to the Shade's location.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Adept")
        .addField("Back to Main","Try `sc2-adept` for main stats!");
    return message.channel.send(adeptembed);
    }
    //begin High Templar
    if (cmd ===`${prefix}hightemplar`||cmd == `${prefix}ht`){
        fullUnitInfo("Protoss High Templar","https://vignette.wikia.nocookie.net/starcraft/images/a/a0/Icon_Protoss_High_Templar.jpg/revision/latest?cb=20160106180343","Gateway, Warp Gate","Templar Archives",50,150,2,"39 (gateway), 32 (warp gate)","40+40","0(+1)",2.62,"4(+1)",1.25,6,"3.2(+0.8)","Ground","Biological, Light, Psionic, Ground",10,2,"ht")
    }
    if (cmd ===`${prefix}-p2`||cmd == `${prefix}ht-p2`){
        let htembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Feedback", "**Energy**: 50, **Range**: 9, **Effect**: Only units with energy can be targeted with Feedback. Feedback removes all energy from the targeted unit, and converts it into direct damage dealt to the target at the rate of 0.5 damage per point of energy drained.")
        .addField("Psionic Storm","**Researched from:** Templar Archives, **Minerals**: 200, **Vespene**: 200, **Time**: 79, **Energy**: 75, **Cooldown**: 1.43 **Range**: 9, **Radius**: 1.5, **Duration**: 2.85, **Effect**: Creates a storm of psionic energy that lasts 2.85 seconds, causing up to 80 damage to all units in the target area.")
        .addField("Archon Warp","**Duration**: 9, **Effect**: Sacrifices 2 Templar to create an Archon.")
        .addField("More Info", "https://liquipedia.net/starcraft2/High_Templar_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-ht` for main stats!");
    return message.channel.send(htembed);
    }
    //begin Dark Templar
    if (cmd ===`${prefix}darktemplar`||cmd ==`${prefix}dt`){
        fullUnitInfo("Protoss Dark Templar","https://vignette.wikia.nocookie.net/starcraft/images/9/90/Icon_Protoss_Dark_Templar.jpg/revision/latest?cb=20160106180327","Gateway, Warp Gate","Dark Shrine",125,125,2,"39 (gateway), 32 (warp gate)","40+80","1(+1)",3.94,"45(+5)",1.21,"Melee","37.2(+4.13)","Ground","Biological, Light, Psionic, Ground",8,2,"dt")
    }
    if (cmd ===`${prefix}darktemplar-p2`||cmd ==`${prefix}dt-p2`){
        let dtembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Permanent Cloak","**Effect**: The Dark Templar is permanently cloaked.")
        .addField("Shadow Stride", "**Researched from:** Dark Shrine, **Minerals**: 100, **Vespene**: 100, **Time**: 100, **Cooldown**: 14, **Range**: 5, **Effect**: Teleports the Dark Templar to a nearby target location.")
        .addField("Archon Warp","**Duration**: 9, **Effect**: Sacrifices 2 Templar to create an Archon.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Dark_Templar_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-dt` for main stats!");
    return message.channel.send(dtembed);
    }
    //begin Archon
    if (cmd ===`${prefix}archon`){
        fullUnitInfo("Protoss Archon","https://vignette.wikia.nocookie.net/starcraft/images/5/56/Icon_Protoss_Archon.jpg/revision/latest?cb=20160106175702","2 Templar","N/A","varies","varies",4,9,"10+350","0(+1)",3.94,"25(+3), **vs Bio**: 35(+4)", 1.25,3,"20(+2.4), **vs Bio** 28(+3.2)", "Air and Ground","Massive, Psionic, Ground",9,4,"archon")
    }
    if (cmd ===`${prefix}archon-p2`){
        let archonembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("More Info", "https://liquipedia.net/starcraft2/Archon_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-archon` for main stats!");
    return message.channel.send(archonembed);
    }
    //begin Observer
    if (cmd ===`${prefix}observer`||cmd === `${prefix}obs`){
        fullUnitInfoSpellcaster("Protoss Observer","https://vignette.wikia.nocookie.net/starcraft/images/0/0a/Icon_Protoss_Observer.jpg/revision/latest?cb=20160106180448","Robotics Facility","none",25,75,1,21,"40+20","0(+1)","2.63(+1.31)","Light, Mechanical, Detector, Air","11(+2.75)", "N/A","obs")
    }
    if (cmd ===`${prefix}observer-p2`||cmd === `${prefix}obs-p2`){
        let obsembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Gravitic Boosters", "**Researched from:** Robotics Bay, **Minerals**: 100, **Vespene**: 100, **Time**: 57, **Effect**: Increases the movement speed of the Observer. Their speed and acceleration is increased by 50%.")
        .addField("Permanent Cloak","**Effect**: The Observer is permanently cloaked.")
        .addField("Surveillance Mode", "**Effect**: Transforms the Observer to Surveillance Mode. The Observer gains 25% wider vision, but loses the ability to move.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Observer_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-obs` for main stats!");
    return message.channel.send(obsembed);
    }
    //begin Warp Prism
    if (cmd ===`${prefix}warpprism`||cmd === `${prefix}prism`||cmd === `${prefix}has`){
        fullUnitInfoSpellcaster("Protoss Warp Prism","https://vignette.wikia.nocookie.net/starcraft/images/1/1f/Icon_Protoss_Warp_Prism.jpg/revision/latest?cb=20160106180644","Robotics Facility","none",250,0,2,36,"80+100","0(+1)","4.13(+1.23)","Armored, Mechanical, Psionic, Air",10,"Provides 8","prism")
    }
    if (cmd ===`${prefix}warpprism-p2`||cmd === `${prefix}prism-p2`||cmd === `${prefix}has-p2`){
        let prismembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Gravitic Drive", "**Researched from:** Robotics Bay, **Minerals**: 100, **Vespene**: 100, **Time**: 57, **Effect**: Increases the movement speed and acceleration of the Warp Prism.")
        .addField("Phasing/Transport Mode", "**Effect**: In Phasing Mode, the Warp Prism generates a power radius similar to that of a Pylon. The Warp Prism cannot move in this mode. The Warp Prism returns to being a mobile transport in Transport Mode.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Warp_Prism_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-prism` for main stats!");
    return message.channel.send(prismembed);
    }
    //begin Immortal
    if (cmd ===`${prefix}immortal`||cmd ===`${prefix}immo`){
        fullUnitInfo("Protoss Immortal","https://vignette.wikia.nocookie.net/starcraft/images/c/c1/Icon_Protoss_Immortal.jpg/revision/latest?cb=20160106180358","Robotics Facility","none",275,100,4,39,"200+100","1(+1)",3.15,"20(+2), **vs Armored**: 50(+5)",1.04,6,"19.2(+1.92), **vs Armored**: 48.1(+4.81)","Ground", "Mechanical, Armored, Ground",9,4,"immo")
    }
    if (cmd ===`${prefix}immortal-p2`||cmd ===`${prefix}immo-p2`){
        let immortalembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Barrier", "**Cooldown**: 32, **Duration**: 2, **Effect**: Absorbs up to 100 damage. Lasts for 2 seconds.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Immortal_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-immo` for main stats!");
    return message.channel.send(immortalembed);
    }
    //begin Colossus
    if (cmd ===`${prefix}colossus`||cmd ===`${prefix}colossi`||cmd ===`${prefix}giraffe`||cmd ===`${prefix}lasergiraffe`){
        fullUnitInfo ("**Protoss Colossus**","https://vignette.wikia.nocookie.net/starcraft/images/4/40/Icon_Protoss_Colossus.jpg/revision/latest?cb=20160106180305","Robotics Facility","Robotics Bay",300,200,6,54,"200+150","1(+1)",3.15,"10x2(+1x2), **vs Light**:15x2(+2x2)",1.07,"7(+2)","18.7(+1.87), **vs Light**: 28(+3.74)","Ground","Mechanical, Armored, Massive, Ground, Targetable by Air",10,8,"colossus")
    }
    if (cmd ===`${prefix}colossus-p2`||cmd ===`${prefix}colossi-p2`||cmd ===`${prefix}giraffe-p2`||cmd ===`${prefix}lasergiraffe-p2`){
        let colossusembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Extended Thermal Lance", "**Researched from:** Robotics Bay, **Minerals**: 150, **Vespene**: 150, **Time**: 100, **Effect**: Increases the range of the Colossus weapon by 2. ")
        .addField("Cliff Walk","Allows Colossus to travel up and down cliffs.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Colossus_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-colossus` for main stats!");
    return message.channel.send(colossusembed);
    }
    //begin Disruptor
    if (cmd ===`${prefix}disruptor`||cmd ===`${prefix}ruptor`){
        fullUnitInfoSpellcaster("Protoss Disruptor","https://vignette.wikia.nocookie.net/starcraft/images/6/64/Icon_Protoss_Disruptor.jpg/revision/latest?cb=20160106231158","Robotics Facility","Robotics Bay",150,150,3,36,"100+100","1(+1)",3.15,"chanical, Armored, Ground",9,4,"disruptor")
    }
    if (cmd ===`${prefix}disruptor-p2`||cmd ===`${prefix}ruptor-p2`){
        let ruptorembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Purification Nova", "**Cooldown**: 21.4, **Radius**: 1.5, **Duration**: 2.1, **Damage**: 145+55 vs shields, **Targets**: Ground, **Effect**: Shoots out a ball of energy that detonates after 2 seconds, dealing 145 splash damage and an additional 55 shield damage to nearby ground units and structures. The Disruptor is immobile while this is active and it's visual glow is dulled a little bit during cooldown.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Disruptor")
        .addField("Back to Main","Try `sc2-disruptor` for main stats!");
    return message.channel.send(ruptorembed);
    }
    //begin Phoenix
    if (cmd ===`${prefix}phoenix`||cmd ===`${prefix}nix`){
        fullUnitInfo("Protoss Phoenix","https://vignette.wikia.nocookie.net/starcraft/images/b/b1/Icon_Protoss_Phoenix.jpg/revision/latest?cb=20160106180507","Stargate","none",150,100,2,25,"120+60","0(+1)",5.95,"5x2(+1x2), **vs Light**: 10x2(+1x2)",0.97,"5(+2)","12.7(+2.5), **vs Light**: 25.4(+2.5)","Air","Mechanical, Light, Air",10,"N/A","phoenix")
    }
    if (cmd ===`${prefix}phoenix-p2`||cmd ===`${prefix}nix-p2`){
        let nixembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Anion Pulse-Crystals", "**Researched from:** Fleet Beacon, **Minerals**: 150, **Vespene**: 150, **Time**: 64, **Effect**: Increases the range of the Phoenix weapon by 2.")
        .addField("Graviton Beam","**Energy**: 50, **Range**: 4, **Duration**: 7, **Effect**: Makes the target unit float in the air, disabling its abilities. Massive units are immune.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Phoenix_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-phoenix` for main stats!");
    return message.channel.send(nixembed);
    }
    //begin Oracle
    if (cmd ===`${prefix}oracle`||cmd ===`${prefix}discoball`||cmd ===`${prefix}disco`){
        fullUnitInfo("Protoss Oracle","https://vignette.wikia.nocookie.net/starcraft/images/4/4b/Icon_Protoss_Oracle.jpg/revision/latest?cb=20160106231013","Stargate","none",150,150,3,37,"100+60","0(+1)",5.6,"15, **vs Light**: 22",0.61,4,"24.4, **vs Light**: 35.9","Ground","Mechanical, Armored, Psionic, Air",10,"N/A","oracle")
    }
    if (cmd ===`${prefix}oracle-p2`||cmd ===`${prefix}discoball-p2`||cmd ===`${prefix}disco-p2`){
        let oracleembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Revelation", "**Energy**: 25, **Cooldown**: 10, **Range**: 9, **Radius**: 6, **Duration**: 20 **Effect**: Causes enemy units and structures within the target area to grant vision for 20 seconds. Reveals cloaked or burrowed units and structures.")
        .addField("Stasis Ward","**Energy**: 50, **Range**: 6, **Radius**: 4, **Duration**: 170, **Effect Duration**: 21.5 **Effect**: Places a cloaked Stasis Ward at the target location that lasts 170 seconds. Once activated by an enemy ground unit, the ward traps nearby enemies in stasis for 21.5 seconds. Trapped units cannot be attacked or affected by abilities.")
        .addField("Pulsar Beam", "**Energy**:  25(+1.96/s), **Cooldown**: 4, **Effect**: Charges the Oracle's Pulsar Beam, which does spell damage to ground units while active.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Oracle_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-oracle` for main stats!");
    return message.channel.send(oracleembed);
    }
    //begin Void Ray
    if (cmd ===`${prefix}voidray`||cmd ===`${prefix}chadray`||cmd ===`${prefix}void`||cmd ===`${prefix}chad`){
        fullUnitInfo("Protoss Void Ray","https://vignette.wikia.nocookie.net/starcraft/images/1/1d/VoidRay_SC2_Rend1.jpg/revision/latest?cb=20090129011444","Stargate","none",200,150,4,37,"150+100","0(+1)","3.85(+0.8) / 2.6 (overcharge)","6(+1), **vs Armored**: 10+6(+1)",0.36, "4+2","16.8(+2.8), **vs Armored**: 28+16+8(+2.8)","Air and Ground","Mechanical, Armored, Air",10,"N/A","voidray")
    }
    if (cmd ===`${prefix}voidray-p2`||cmd ===`${prefix}chadray-p2`||cmd ===`${prefix}void-p2`||cmd ===`${prefix}chad-p2`){
        let voidembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Flux Vanes","**Researched from:** Fleet Beacon, **Minerals**: 100, **Vespene**: 100, **Time**: 57, **Effect**: Increases the Void Ray's movement speed by 0.798 and its acceleration by 0.962.")
        .addField("Prismatic Alignment","**Cooldown**: 43, **Duration**: 14.3, **Effect**: Realigns the Void Ray's Prismatic Beam to gain +6 damage vs. armored units for 14.3 seconds at the cost of 0.88 movespeed. This does not scale with upgrades.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Void_Ray_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-voidray` for main stats!");
    return message.channel.send(voidembed);
    }
    //begin Carrier
    if (cmd ===`${prefix}carrier`){
        fullUnitInfo("Protoss Carrier","https://vignette.wikia.nocookie.net/starcraft/images/2/2c/Icon_Protoss_Carrier.jpg/revision/latest?cb=20160106180238","Stargate","Fleet Beacon","350(+15*8)",250,6,64,"300+150","2(+1)",2.62,"5x2x8(+1x2x8)",2.14,"8+6","37.4(+7.5)","Air and Ground","Mechanical, Armored, Massive, Air",10, "N/A","interceptor or sc2-carrier")
    }    
    if (cmd ===`${prefix}carrier-p2`){
        let carrierembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("More Info", "https://liquipedia.net/starcraft2/Carrier_(Legacy_of_the_Void) or try sc2-interceptor")
        .addField("Back to Main","Try `sc2-carrier` for main stats!");
    return message.channel.send(carrierembed);
    }
    //begin Interceptor
    if (cmd ===`${prefix}interceptor-p2`){
        fullUnitInfo("Protos Interceptor","https://vignette.wikia.nocookie.net/starcraft/images/3/3b/Interceptor_SC2_Rend1.JPEG/revision/latest?cb=20110223005457","Carrier","none",15,0,0,9,"40+40","0(+1)",10.5,"5x2(+1x2)",2.14,2,"4.7(+0.93)","Air and Ground","Mechanical, Light, Air",7,1,"carrier or sc2-interceptor")
    }
    if (cmd ===`${prefix}interceptor-p2`){
        let carrierembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("More Info", "https://liquipedia.net/starcraft2/Carrier_(Legacy_of_the_Void) or try sc2-carrier")
        .addField("Back to Main","Try `sc2-interceptor` for main stats!");
    return message.channel.send(carrierembed);
    }
    //begin Tempest
    if (cmd ===`${prefix}tempest`){
        fullUnitInfo2("**Protoss Tempest**","https://vignette.wikia.nocookie.net/starcraft/images/a/a4/Icon_Protoss_Tempest.jpg/revision/latest?cb=20160106231047","Stargate","Fleet Beacon",250,175,5,43,"200+100","2(+1)",3.15,"30(+3), **vs Massive**: 52(+5)","40(+4), **vs Buildings (with upgrade)**: 80(+4)",2.36,2.36,15,10,"12.73(+1.273), **vs Massive**: 22.05(+2.12)","16.97(+1.697), **vs Buildings (with upgrade)**: 33.94(+1.697)","Air","Ground","Mechanical, Armored, Massive, Air",12,"N/A","tempest")
    }
    if (cmd ===`${prefix}tempest-p2`){
        let tempestembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Tectonic Destabilizers","**Researched from:** Fleet Beacon, **Minerals**: 150, **Vespene**: 150, **Time**: 100, **Effect**: Improves the Tempest's Resonance Coil to deal +40 damage vs structures.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Tempest_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-tempest` for main stats!");
    return message.channel.send(tempestembed);
    }
    //begin Mothership
    if (cmd ===`${prefix}mothership`||cmd ===`${prefix}mamaship`||cmd ===`${prefix}-400-400`){
        fullUnitInfo("Protoss Mothership","https://vignette.wikia.nocookie.net/starcraft/images/e/e1/Icon_Protoss_Mothership.jpg/revision/latest?cb=20160106180429","Nexus","Fleet Beacon",400,400,8,114,"350+350","2(+1)",2.62,"6x6(+1x6)",1.58,7,"22.8(+3.78)","Air and Ground","Mechanical, Armored, Massive, Psionic, Air",14, "N/A","mothership")
    }    
    if (cmd ===`${prefix}mothership-p2`||cmd ===`${prefix}mamaship-p2`||cmd ===`${prefix}-400-400-p2`){
        let mamaembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Cloaking Field","**Radius**: 5, **Effect**: The Mothership cloaks all nearby units and buildings.")
        .addField("Mass Recall","**Energy**: 100, **Range**: Infinite, **Radius**: 6.5, **Channeling Time**: 4, **Effect**: Recalls all player units in the target area to the Mothership.")
        .addField("Time Warp","**Energy**: 100, **Radius**: 3.5, **Range**: 9, **Duration**: 11, **Effect**: After a 1.79 second delay, warps spacetime within the target area for 7 seconds. Enemy units and structures within the field will have attack and movement speeds reduced by 50%.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Mothership_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-mothership` for main stats!");
    return message.channel.send(mamaembed);
    }
//Begin Zerg Units
    //begin Larva
    if (cmd ===`${prefix}larva`){
        fullUnitInfoSpellcaster("Zerg Larva","https://vignette.wikia.nocookie.net/starcraft/images/8/84/Icon_Zerg_Larva.jpg/revision/latest?cb=20160106233133","Hatchery/Lair/Hive/Inject Larva","none",0,0,0,11,25,10,0.79,"Biological, Light, Ground",5,"N/A","larva")
    }
    if (cmd ===`${prefix}larva`){
        let larvaembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("More Info", "https://liquipedia.net/starcraft2/Larva_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-larva` for main stats!");
    return message.channel.send(larvaembed);
    }               
    //begin Drone
    if (cmd ===`${prefix}drone`){ 
        fullUnitInfo("Zerg Drone","https://vignette.wikia.nocookie.net/starcraft/images/d/d1/Icon_Zerg_Drone.jpg/revision/latest?cb=20160106233237","Hatchery/Lair/Hive","none",50,0,1,12,"40","0(+1)",3.94,5,1.07,"Melee",4.67,"Ground","Biological, Light, Ground",8,1,"drone")
    }
    if (cmd ===`${prefix}drone-p2`){ 
        let droneembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Drone_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-drone` for main stats!");
    return message.channel.send(droneembed);
    }
    //begin Overlord
    if (cmd ===`${prefix}overlord`||cmd ===`${prefix}ovie`||cmd ===`${prefix}dropperlord`||cmd ===`${prefix}droplord`){
        fullUnitInfoSpellcaster("Zerg Overlord","https://vignette.wikia.nocookie.net/starcraft/images/4/4c/Icon_Zerg_Overlord.jpg/revision/latest?cb=201601062330520","Hatchery/Lair/Hive","none",100,0,-8,18,200,"0(+1)","0.902(+1.728)","Biological, Armored, Air",11,"Provides 8 (with Ventral Sacs)","overlord")
    }
    if (cmd ===`${prefix}overlord-p2`||cmd ===`${prefix}ovie-p2`||cmd ===`${prefix}dropperlord-p2`||cmd ===`${prefix}droplord-p2`){
        let overlordembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Pneumatized Carapace", "**Researched from:** Hatchery/Lair/Hive, **Minerals**: 75, **Vespene**: 75, **Time**: 43, **Effect**: Increases the movement speed of Overlords to 2.63")
        .addField("Mutate Ventral Sacs","**Requires:** Lair, **Minerals**: 25, **Vespene**: 25, **Time**: 12, **Effect**: Enables the Overlord to transport units.")
        .addField("Morph to Overseer","**Requires:** Lair, **Minerals**: 50, **Vespene**: 50, **Time**: 12, **Effect**: Morphs the selected Overlord into an Overseer.")
        .addField("Generate Creep","**Requires:** Lair, **Channeling Time**: 11, **Effect**: When selected, the Overlord will create Zerg creep beneath it, spreading out to a 2x2 area.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Overlord_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-overlord` for main stats!");
    return message.channel.send(overlordembed);
    }
    //begin Queen
    if (cmd ===`${prefix}queen`||cmd ===`${prefix}brenda`||cmd ===`${prefix}karen`){
        fullUnitInfo2("Zerg Queen","https://vignette.wikia.nocookie.net/starcraft/images/8/85/Icon_Zerg_Queen.jpg/revision/latest?cb=20160106233007","Hatchery/Lair/Hive (directly)","Spawning Pool",150,0,2,36,175,"1(+1)","3.5, **Off creep**: 1.31","4x2(+1x2)","9(+1)",0.71,0.71,5,7,"11.2(+2.8)","12.6(+1.4)","Ground","Air","Biological, Psionic, Ground",9,2,"queen")
    }
    if (cmd ===`${prefix}queen-p2`||cmd ===`${prefix}brenda-p2`||cmd ===`${prefix}karen-p2`){
        let queenembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Spawn Larva", "**Energy**: 25, **Range**: Melee, **Cooldown**: 1.8, **Duration**: 29, **Effect**: The Queen injects 3 Larva eggs into a Hatchery which after 29 seconds, hatch and 3 Larvae are ready to be used at the targeted Hatchery. If a Hatchery has more than 19 Larva, additional Larva will not be created. This will stack and queue if the target is already spawning additional larvae.")
        .addField("Spawn Creep Tumor", "**Energy**: 25, **Range**: Melee, **Duration**: 11, **Effect**: The Queen moves to and places a Creep Tumor at the targeted location. The tumor has 50 hit points and generates Creep. Each Creep Tumor can spawn one other Creep Tumor within a radius of 10.")
        .addField("Transfusion","**Energy**: 50, **Range**: 7, **Cooldown**: 1, **Targets**: Biological, **Effect**: The Queen heals a friendly, biological unit or building for 75 health instantly plus an additional 50 health over the next 7.14 seconds.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Queen_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-queen` for main stats!");
    return message.channel.send(queenembed);
    }
    //begin Zergling
    if (cmd ===`${prefix}zergling`||cmd ===`${prefix}zling`){
        fullUnitInfo("Zerg Zergling","https://vignette.wikia.nocookie.net/starcraft/images/a/ae/Icon_Zerg_Zergling.jpg/revision/latest?cb=20160106232911","Hatchery/Lair/Hive","Spawning Pool","25x2",0,"0.5x2",17,35,"0(+1)","5.37(+3.18), **Off creep**: 4.13(+2.45)","5(+1)", "0.497(-0.143)","Melee","10(+2)+4.3(+0.86)","Ground","Biological, Light, Ground",8,1,"zergling")
    }
    if (cmd ===`${prefix}zergling-p2`||cmd ===`${prefix}zling-p2`){
        let lingembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Metabolic Boost", "**Researched from:** Spawning Pool, **Minerals**: 100, **Vespene**: 100, **Time**: 93, **Effect**: Increases Zergling movement speed by 60% to 6.58(+2.45)")
        .addField("Adrenal Glands", "**Researched from:** Spawning Pool, **Requires:** Hive, **Minerals**: 200, **Vespene**: 200, **Time**: 93, **Effect**: Decreases Zergling attack cooldown to 0.35(-0.15)")
        .addField("Morph to Baneling","**Requires:** Baneling Nest, **Minerals**: 25, **Vespene**: 25, **Time**: 14, **Effect**: Morphs a Zergling into a Baneling.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Zergling_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-zergling` for main stats!");
    return message.channel.send(lingembed);
    }
    //begin Baneling
    if (cmd ===`${prefix}baneling`||cmd ===`${prefix}bling`||cmd ===`${prefix}bane`){
        fullUnitInfo2("Zerg Baneling","https://vignette.wikia.nocookie.net/starcraft/images/8/81/Icon_Zerg_Baneling.jpg/revision/latest?cb=20160106232838","Zergling Morph","Baneling Nest",25,25,0.5,14,"30(+5)","0(+1)","4.55(+0.82),**Off creep**: 3.5(+0.63)","16(+2), **vs Light**: 35(+4)","80(+5)","N/A","N/A",2.2,2.2,"N/A","N/A","Ground","Buildings","Biological, Ground",8,2,"bane")
    }
    if (cmd ===`${prefix}baneling-p2`||cmd ===`${prefix}bling-p2`||cmd ===`${prefix}bane-p2`){
        let baneembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Centrifugal Hooks", "**Researched from:** Baneling Nest, **Requires:** Lair, **Minerals**: 150, **Vespene**: 150, **Time**: 79, **Effect**: Increases Baneling movement speed to 4.13(+1.24) and hp to 35(+5). Banelings will roll instead of running.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Baneling_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-bane` for main stats!");
    return message.channel.send(baneembed);
    }
    //begin Roach
    if (cmd ===`${prefix}roach`){
        fullUnitInfo("Zerg Roach","https://vignette.wikia.nocookie.net/starcraft/images/7/73/Icon_Zerg_Roach.jpg/revision/latest?cb=20160106232950","Hatchery/Lair/Hive","Roach Warren",75,25,2,19,145,"1(+1)","4.09(+1.36), **Off creep**: 4.09(+1.36), **Burrowed**: 2.8(+1.6)","16(+2)",1.43,4,"11.2(+1.4)","Ground","Biological, Armored, Ground",9,2,"roach")
    }
    if (cmd ===`${prefix}roach-p2`){
        let roachembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Glial Reconstitution", "**Researched from:** Roach Warren, **Requires:** Lair, **Minerals**: 100, **Vespene**: 100, **Time**: 79, **Effect**: Increases Roach movement speed to 4.2(+1.05) while unburrowed, and to 4.4 while burrowed under creep.")
        .addField("Tunneling Claws", "**Researched from:** Roach Warren, **Requires:** Lair, **Minerals**: 100, **Vespene**: 100, **Time**: 79, **Effect**: Gives Roaches the ability to move while burrowed at a speed of 2.8.")
        .addField("Rapid Regeneration","**Effect**: While burrowed, the Roach regenerates its health at an extremely fast rate of 7 hit points per second.")
        .addField("Morph to Ravager","**Minerals**: 25, **Vespene**: 75, **Supply**: 1, **Time**: 9, **Effect**: Morphs a Roach into a Ravager.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Roach_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-roach` for main stats!");
    return message.channel.send(roachembed);
    }
    //begin Ravager
    if (cmd ===`${prefix}ravager`){
        fullUnitInfo("Zerg Ravager","https://vignette.wikia.nocookie.net/starcraft/images/b/b7/Icon_Zerg_Ravager.jpg/revision/latest?cb=20160106234631","Roach Morph","Roach Warren",25,75,3,9,120,"1(+1)","5.0, **Off creep**: 3.85","16(+2)",1.14,6,"14.04(+1.75)","Ground","Biological, Ground",9,4,"ravager")
    }
    if (cmd ===`${prefix}ravager-p2`){
        let ravagerembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Corrosive Bile", "**Cooldown**: 7, **Range**: 9, **Delay**: 2.5**Effect**: Launch a missile at the target location, dealing 60 damage to all units and destroying all Force Fields in the area upon impact.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Ravager")
        .addField("Back to Main","Try `sc2-ravager` for main stats!");
    return message.channel.send(ravagerembed);
    }
    //begin Overseer
    if (cmd ===`${prefix}overseer`||cmd ===`${prefix}flappynajib`){
        fullUnitInfoSpellcaster("Zerg Overseer","https://vignette.wikia.nocookie.net/starcraft/images/e/e4/Icon_Zerg_Overseer.jpg/revision/latest?cb=20160106233030","Overlord Morph","Lair",50,50,-8,12,200,"1(+1)","2.62(+2.1)","Biological, Armored, Detector, Air","11(+2.75)","N/A","overseer")
    }
    if (cmd ===`${prefix}overseer-p2`||cmd ===`${prefix}flappynajib-p2`){
        let seerembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Pneumatized Carapace", "**Researched from:** Hatchery/Lair/Hive, **Minerals**: 75, **Vespene**: 75, **Time**: 43, **Effect**: Increases the movement speed of Overseers to 3.375")
        .addField("Spawn Changeling", "**Energy**: 50, **Range**: Melee, **Duration**: 150, **Effect**: The Overseer can spawn a Changeling, which is a small Zerg unit. The Changeling can move freely and morph to take the shape of an enemy unit.")
        .addField("Contaminate", "**Energy**: 125, **Range**: 3, **Duration**: 30, **Effect**: The Overseer covers an enemy structure in slime. The structure will be unable to train units or research upgrades for 30 seconds.") 
        .addField("Oversight", "**Effect**: Grants the Overseer 25% wider vision, but removes its ability to move. This ability can be canceled after activation.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Overseer_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-overseer` for main stats!");
    return message.channel.send(seerembed);
    }
    //begin Changeling
    if (cmd ===`${prefix}changeling`){
        fullUnitInfoSpellcaster("Zerg Changeling","https://vignette.wikia.nocookie.net/starcraft/images/a/a4/Icon_Zerg_Changeling.jpg/revision/latest?cb=20160106232716","Overseer","none",0,0,0,0,5,0,"3.15 as marine or zealot, 4.13 as zergling","Biological, Light, Ground","9 as marine or zealot, 8 as zergling","N/A","changeling")
    }
    if (cmd ===`${prefix}changeling-p2`){
        let changeembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Disguise", "**Range**: 12, **Effect**: The Changeling will transform into a basic unit of the enemy that is near (Marine, Zergling, Zealot). The Changeling will also copy the upgraded models of those units (Combat Shield, Metabolic Boost).")
        .addField("More Info", "https://liquipedia.net/starcraft2/Changeling_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-changeling` for main stats!");
    return message.channel.send(changeembed);
    }
    //begin Hydralisk
    if (cmd ===`${prefix}hydralisk`||cmd ===`${prefix}hydra`){
        fullUnitInfo("Zerg Hydralisk","https://vignette.wikia.nocookie.net/starcraft/images/4/42/Icon_Zerg_Hydralisk.jpg/revision/latest?cb=20160106233216","Hatchery/Lair/Hive","Hydralisk Den",100,50,2,24,90,"0(+1)","4.09(+1.02), **Off creep**: 3.15(+0.78)","12(+1)",0.59,"5(+1)","20.34(+1.69)","Air and Ground","Biological, Light, Ground",9,2,"hydra")
    }
    if (cmd ===`${prefix}hydralisk-p2`||cmd ===`${prefix}hydra-p2`){
        let hydraembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Muscular Augments", "**Researched from:** Hydralisk Den, **Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Hydralisks move 25% faster speed both on and off of Creep. ")
        .addField("Grooved Spines", "**Researched from:** Hydralisk Den, **Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Increases the attack range of Hydralisks by +1.")
        .addField("Morph to Lurker","**Requires:** Lurker Den, **Minerals**: 50, **Vespene**: 100, **Supply**: 1, **Time**: 15, **Effect**: Morphs a Hydralisk into a Lurker. ")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Hydralisk_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-hydra` for main stats!");
    return message.channel.send(hydraembed);
    }
    //begin Lurker
    if (cmd ===`${prefix}lurker`){
        fullUnitInfo("Zerg Lurker","https://vignette.wikia.nocookie.net/starcraft/images/d/d7/Icon_Zerg_Lurker.jpg/revision/latest?cb=20160106234656","Hydralisk Morph","Lurker Den",50,100,3,18,200,"1(+1)","5.37(+0.537), **Off creep**: 4.13(+0.413)","20(+2), **vs Armored**: 30(+3)",1.43,"8(+2)","14.0(+1), **vs Armored**: 21.0(+1.7)","Ground","Biological, Armored, Ground",9,4,"lurker")
    }
    if (cmd ===`${prefix}lurker-p2`){
        let lurkerembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Adaptive Talons", "**Researched from:** Lurker Den, **Requires:** Hive, **Minerals**: 150, **Vespene**: 150, **Time**: 57, **Effect**: Reduces the time Lurkers take to burrow from 2 to 0.7 and increases movement speed by 10%.")
        .addField("Seismic Spines", "**Researched from:** Lurker Den, **Requires:** Hive, **Minerals**: 150, **Vespene**: 150, **Time**: 57, **Effect**: Increases the range of the Lurkers attack from 8 to 10. ")
        .addField("Burrow","**Effect**: Unlike other Zerg units, Burrow comes by default on the Lurker, and it can only attack while burrowed. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Lurker")
        .addField("Back to Main","Try `sc2-lurker` for main stats!");
    return message.channel.send(lurkerembed);
    }
    //begin Mutalisk
    if (cmd ===`${prefix}mutalisk`||cmd ===`${prefix}muta`||cmd ===`${prefix}mutmut`||cmd ===`${prefix}flappybird`||cmd ===`${prefix}flapflap`){
        fullUnitInfo("Zerg Mutalisk","https://vignette.wikia.nocookie.net/starcraft/images/f/fd/Icon_Zerg_Mutalisk.jpg/revision/latest?cb=20160106233117","Hatchery/Lair/Hive","Spire",100,100,2,24,120,"0(+1)",5.6,"9(+1)+3(+0.3)+1(+0.1)",1.09,3,"8.26(+0.92)+2.75(+0.31)+0.92(+0.1)","Air and Ground","Biological, Light, Air",11,"N/A","muta")
    }   
    if (cmd ===`${prefix}mutalisk-p2`||cmd ===`${prefix}muta-p2`||cmd ===`${prefix}mutmut-p2`||cmd ===`${prefix}-p2`||cmd ===`${prefix}flapflap-p2`){
        let mutaembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Tissue Regeneration", "**Effect**: Mutalisk health regeneration rate is accelerated to 1.4 HP/second")
        .addField("More Info", "https://liquipedia.net/starcraft2/Mutalisk_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-muta` for main stats!");
    return message.channel.send(mutaembed);
    }
    //begin Corruptor
    if (cmd ===`${prefix}corruptor`||cmd ===`${prefix}pee`){
        fullUnitInfo("Zerg Corruptor","https://vignette.wikia.nocookie.net/starcraft/images/d/d0/Icon_Zerg_Corruptor.jpg/revision/latest?cb=20160106233308","Hatchery/Lair/Hive","Spire",150,100,2,29,200,"2(+1)",4.725,"14(+1), **vs Massive**: 20(+2)",1.36,6,"10.28(+0.74), **vs Massive**: 14.69(+1.48)", "Air","Biological, Armored, Air",10,"N/A","corruptor")
    }
    if (cmd ===`${prefix}corruptor-p2`||cmd ===`${prefix}pee-p2`){
        let corrembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Caustic Spray", "**Cooldown**: 32, **Duration**: Channeled, **Effect**: The Corruptor emits a stream of acid that deals 7 damage per second for 4.3 seconds, then increases to 35 damage per second.")
        .addField("Morph to Brood Lord","**Requires:** Greater Spire, **Minerals**: 150, **Vespene**: 150, **Supply**: 2, **Time**: 24, **Effect**: Morphs a Corruptor into a Brood Lord. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Corruptor_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-corruptor` for main stats!");
    return message.channel.send(corrembed);
    }
    //begin Swarm Host
    if (cmd ===`${prefix}swarmhost`||cmd ===`${prefix}sh`||cmd ===`${prefix}host`){
        fullUnitInfoSpellcaster("Zerg Swarm Host","https://vignette.wikia.nocookie.net/starcraft/images/b/b2/Icon_Zerg_Swarm_Host.jpg/revision/latest?cb=20160106234810","Hatchery/Lair/Hive","Infestation Pit",100,75,3,29,160,"1(+1)","5.37, **Off creep**:3.15","Biological, Armored, Ground",10,4,"locust or sc2-swarmhost")
    }
    if (cmd ===`${prefix}swarmhost-p2`||cmd ===`${prefix}sh-p2`||cmd ===`${prefix}host-p2`){
        let hostembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Spawn Locusts", "**Cooldown**: 43, **Duration**: 18, **Effect**: Spawns 2 Locusts with an 18-second timed life.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Swarm_Host_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-swarmhost` for main stats!");
    return message.channel.send(hostembed);
    }
    //begin Locust
    if (cmd ===`${prefix}locust`||cmd ===`${shortprefix}freeunit`){
        fullUnitInfo("Zerg Locust","https://vignette.wikia.nocookie.net/starcraft/images/0/07/Locust_SC2-HotS_Rend1.jpg/revision/latest?cb=20140629130806","Swarm Host","none",0,0,0,3.6,50,"0(+1)","3.66, **Off creep**: 2.62","10(+1)",0.43,6,"23.25(+2.33)","Ground","Biological, Light, Air (before swoop), Ground (after swoop)",6,"N/A","swarmhost or sc2-locust")
    }
    if (cmd ===`${prefix}locust-p2`||cmd ===`${shortprefix}freeunit-p2`){
        let locustembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Swoop", "**Effect**: Orders the Locust to land at the targetted location, allowing it to attack.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Locust_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-locust` for main stats!");
    return message.channel.send(locustembed);
    }
    //begin Infestor
    if (cmd ===`${prefix}infestor`||cmd ===`${prefix}derpfestor`||cmd ===`${prefix}infest`){
        fullUnitInfoSpellcaster("Zerg Infestor","https://vignette.wikia.nocookie.net/starcraft/images/c/c1/Icon_Zerg_Infestor.jpg/revision/latest?cb=20160106233153","Hatchery/Lair/Hive","Infestation Pit",100,150,2,36,90,"0(+1)","4.01, **Off creep**: 3.15","Biological, Armored, Psionic, Ground",10,2,"infestor")
    }
    if (cmd ===`${prefix}infestor-p2`||cmd ===`${prefix}derpfestor-p2`||cmd ===`${prefix}infest-p2`){
        let infestorembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Pathogen Glands", "**Researched from:** Infestation Pit, **Minerals**: 150, **Vespene**: 150, **Time**: 57, **Effect**: Increases the starting energy of Infestors by 25.")
        .addField("Neural Parasite", "**Researched from:** Infestation Pit, **Minerals**: 150, **Vespene**: 150, **Time**: 79, **Energy**: 100, **Range**: 9 (14), **Duration**: 11,**Effect**: The Infestor temporarily takes control of target enemy unit. The player can cancel this ability, or it will automatically cancel if the controlling Infestor is killed or the targeted unit is moved out of 14 range.")
        .addField("Fungal Growth", "**Energy**: 75, **Range**: 10, **Duration**: 3, **Radius**: 2.25, **Effect**: Target units take 30 damage over 3 seconds and have movement speed reduced by 75%. Reveals cloaked and burrowed units. Disables all movement based abilities.") 
        .addField("Microbial Shroud", "**Energy**: 75, **Range**: 9, **Duration**: 11, **Radius** = 3.5, **Effect**: Creates a shroud that obscures ground units underneath, reducing damage taken from air units by 50%.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("Burrow Move","**Effect**: Can move while burrowed")
        .addField("More Info", "https://liquipedia.net/starcraft2/Infestor_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-infestor` for main stats!");
    return message.channel.send(infestorembed);
    }
    //begin Ultralisk
    if (cmd ===`${prefix}ultralisk`||cmd ===`${prefix}ultra`){
        fullUnitInfo("Zerg Ultralisk","https://vignette.wikia.nocookie.net/starcraft/images/3/37/Icon_Zerg_Ultralisk.jpg/revision/latest?cb=20160106232927","Hatchery/Lair/Hive","Ultralisk Cavern",300,200,6,39,500,"2+2(+1)","5.37, **Off creep**: 4.13(+0.82)","35(+3), splash 12(+1)",0.61,"Melee","57.38(+4.9), splash 19.13(+1.6)","Ground","Biological, Armored, Massive, Ground",9,8,"ultra")
    }
    if (cmd ===`${prefix}ultralisk-p2`||cmd ===`${prefix}ultra-p2`){
        let ultraembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Chitinous Plating", "**Researched from:** Ultralisk Cavern, **Minerals**: 150, **Vespene**: 150, **Time**: 79, **Effect**: This upgrade increases the armor of all Ultralisks by 2. ")
        .addField("Anabolic Synthesis", "**Researched from:** Ultralisk Cavern, **Minerals**: 150, **Vespene**: 150, **Time**: 42, **Effect**: Increases Ultralisk speed when off creep from 4.13 to 4.95. ")
        .addField("Frenzied", "**Effect**: Zerg unit is immune to snare, stun, mind control, and movement altering effects.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Ultralisk_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-ultra` for main stats!");
    return message.channel.send(ultraembed);
    }
    //begin Brood Lord
    if (cmd ===`${prefix}broodlord`||cmd ===`${prefix}brood`||cmd ===`${prefix}bl`){
        fullUnitInfo("Zerg Brood Lord","https://vignette.wikia.nocookie.net/starcraft/images/2/2b/Icon_Zerg_Brood_Lord.jpg/revision/latest?cb=20160106233254","Corruptor Morph","Greater Spire",150,150,4,23,225,"1(+1)",1.97,"20(+2)",1.79,10,"11.2(+1.1)","Ground","iological, Armored, Massive, Air",12,"N/A","broodling or sc2-broodlord")
    }
    if (cmd ===`${prefix}broodlord-p2`||cmd ===`${prefix}brood-p2`||cmd ===`${prefix}bl-p2`){
        let broodembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Swarm Seeds", "**Effect**: Spawns Broodlings upon each of the Brood Lord's attacks.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Brood_Lord_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-broodlord` for main stats!");
    return message.channel.send(broodembed);
    }
    //begin Broodling
    if (cmd ===`${prefix}broodling`){
            fullUnitInfo("Zerg Broodling","https://vignette.wikia.nocookie.net/starcraft/images/4/46/Icon_Zerg_Broodling.jpg/revision/latest?cb=20160106232656","Brood Lord, or most Zerg structures upon death","none",0,0,0,0,30,0,5.37,"4(+1)",0.46,"Melee","8.7(+2.17)","Ground","Biological, Light, Ground",7,"N/A","broodling")
    }
    if (cmd ===`${prefix}broodling-p2`){
            let broodlingembed = new Discord.RichEmbed()
            .setDescription ("**Abilites and Upgrades**") 
            .setColor("#7FC5EB")
            .addField("More Info", "https://liquipedia.net/starcraft2/Broodling_(Legacy_of_the_Void)")
            .addField("Back to Main","Try `sc2-broodling` for main stats!");
        return message.channel.send(broodlingembed);
    }
    //begin Viper
    if (cmd ===`${prefix}viper`||cmd ===`${prefix}yoink`){
        fullUnitInfoSpellcaster("Zerg Viper","https://vignette.wikia.nocookie.net/starcraft/images/3/3c/Icon_Zerg_Viper.jpg/revision/latest?cb=20160106234746","Hatchery/Lair/Hive","Hive",100,200,3,29,150,"1(+1)",4.13,"Biological, Armored, Psionic, Air",11, "N/A","viper")
    }
    if (cmd ===`${prefix}viper-p2`||cmd ===`${prefix}yoink-p2`){
        let viperembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Blinding Cloud", "**Energy**: 100, **Range**: 11, **Radius**: 2, **Duration**: 5.71, **Effect**: Creates a cloud for 5.71 seconds that reduces attack range of ground units and structures underneath to melee range.")
        .addField("Abduct", "**Energy**: 75, **Range**: 9, **Duration**: 10, **Effect**: Pulls a target unit to the location of the Viper.")
        .addField("Parasitic Bomb", "**Energy**: 125, **Range**: 8, **Radius**: 3, **Duration**: 7, **Effect**: Creates a parasitic cloud that deals 120 damage over 7 seconds to the target and enemy air units nearby. If the target dies, the cloud remains in the air where the enemy died until it expires.")
        .addField("Consume", "**Cooldown**: 1, **Range**: 7, **Duration**: 14, **Effect**: Targets friendly structure (except Creep Tumor) and consumes 200 life over 14 seconds converting the damage dealt into 50 energy.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Viper_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-viper` for main stats!");
    return message.channel.send(viperembed);
    }
//Begin Terran Structures
    //Begin Command Center
    if (cmd ===`${prefix}commandcenter`||cmd ===`${prefix}cc`){
        fullBuildingInfo("Terran Command Center","https://vignette.wikia.nocookie.net/starcraft/images/9/9e/CommandCenter_SC2_Icon1.jpg/revision/latest?cb=20160107024135","none",400,0,71,1500,"1(+2)","SCV","SCV, Supply Depot, Refinery, Engineering Bay","Mechanical, Armored, Structure","cc") 
    }
    if (cmd ===`${prefix}commandcenter-p2`||cmd ===`${prefix}cc-p2`){
        let commandembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Misc.", "**Cargo Capacity**: 5(+5), only SCVs, **Provides Supply**: 15")
        .addField("Lift off", "**Effect**: Lifts off a building, making it airborne and mobile. ")
        .addField("Neosteel Armor", "**Researched from:** Engineering Bay, **Minerals**: 150, **Vespene**: 150, **Time**: 100, **Effect**: Increases the armor of all Terran structures by 2. Increases the cargo space of Bunkers by 2 and the load space of Command Centers and Planetary Fortresses by 5. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Command_Center_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-cc` for main stats!");
    return message.channel.send(commandembed);
    }
    //Begin Orbital Command
    if (cmd ===`${prefix}orbitalcommand`||cmd ===`${prefix}orbital`){
        fullBuildingInfo("Terran Orbital Command","https://vignette.wikia.nocookie.net/starcraft/images/c/ca/OrbitalCommand_SC2_Icon1.jpg/revision/latest?cb=20160107024229","Barracks, Command Center Morph",150,0,25,1500,"1(+2)","SCV","MULE","Mechanical, Armored, Structure","orbital")
    }
    if (cmd ===`${prefix}orbitalcommand-p2`||cmd ===`${prefix}orbital-p2`){
        let orbitalembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Misc.", "**Provides Supply**: 15")
        .addField("Lift off", "**Effect**: Lifts off a building, making it airborne and mobile. ")
        .addField("Calldown: MULE", "**Energy**: 50, **Effect**: The Orbital Command calls down a MULE via Drop Pods. Mules can gather minerals at a faster rate than SCVs, and last for 64 seconds. One MULE and one SCV gather from the same mineral patch simultaneously.")
        .addField("Calldown: Extra Supplies","**Energy**: 50, **Effect**: The Orbital Command calls down additional supplies which permanently increase a Supply Depot's supply limit by 8.")
        .addField("Scanner Sweep","**Energy**: 50, **Radius**: 13, **Duration**: 9, **Effect**: The Orbital Command scans a target location on the map revealing cloaked, burrowed or hallucinated units temporarily.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Orbital_Command_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-orbital` for main stats!");
    return message.channel.send(orbitalembed);
    }
    //Begin Planetary Fortress
    if (cmd ===`${prefix}planetaryfortress`||cmd ===`${prefix}planetary`||cmd ===`${prefix}pf`){
        fullBuildingInfoStatic("Terran Plantery Fortress","https://vignette.wikia.nocookie.net/starcraft/images/9/90/PlanetaryFortress_SC2_Icon1.jpg/revision/latest?cb=20160107024345","Engineering Bay, Command Center Morph",150,150,26,1500,"3(+2)",40,1.43,"6(+1)",28,"Ground","SCV","Mechanical, Armored, Structure","planetary")
    }
    if (cmd ===`${prefix}planetaryfortress-p2`||cmd ===`${prefix}planetary-p2`||cmd ===`${prefix}pf-p2`){
        let pfembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Misc.", "**Cargo Capacity**: 5(+5), only SCVs, **Provides Supply**: 15")
        .addField("Hi-Sec Auto Tracking", "**Researched from:** Engineering Bay, **Minerals**: 100, **Vespene**: 100, **Time**: 57, **Effect**: Adds +1 attack range to Auto-Turrets, Missile Turrets, and Planetary Fortresses. ")
        .addField("Neosteel Armor", "**Researched from:** Engineering Bay, **Minerals**: 150, **Vespene**: 150, **Time**: 100, **Effect**: Increases the armor of all Terran structures by 2. Increases the cargo space of Bunkers by 2 and the load space of Command Centers and Planetary Fortresses by 5. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Planetary_Fortress_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-planetary` for main stats!");
    return message.channel.send(pfembed);
    }
    //Begin Supply Depot
    if (cmd ===`${prefix}supplydepot`||cmd ===`${prefix}depot`||cmd ===`${prefix}supply`){
        fullBuildingInfo("Terran Supply Depot","https://vignette.wikia.nocookie.net/starcraft/images/0/09/SupplyDepot_SC2_Icon1.jpg/revision/latest?cb=20160107024834","none",100,0,21,400,"1(+2)","N/A","Barracks","Mechanical, Armored, Structure","depot")
    }
    if (cmd ===`${prefix}supplydepot-p2`||cmd ===`${prefix}depot-p2`||cmd ===`${prefix}supply-p2`){
        let depotembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Misc.", "**Provides Supply**: 8")
        .addField("Lower/Raise", "**Effect**: Lowers/Raises the Supply Depot, allowing/preventing ground units to move accross it. If multiple Supply Depots with different states are selected, the first selected determines whether all would lower or raise.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Supply_Depot_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-depot` for main stats!");
    return message.channel.send(depotembed);
    }
    //Begin Refinery
    if (cmd ===`${prefix}refinery`){
        fullBuildingInfo("Terran Refinery","https://vignette.wikia.nocookie.net/starcraft/images/9/9e/Refinery_SC2_Icon1.jpg/revision/latest?cb=20160107024701","none",75,0,21,500,"1(+2)","N/A","none","Mechanical, Armored, Structure","refinery")
    }
    if (cmd ===`${prefix}refinery-p2`){
        let refineryembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("More Info", "https://liquipedia.net/starcraft2/Refinery_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-refinery` for main stats!");
    return message.channel.send(refineryembed);
    }
    //Begin Barracks
    if (cmd ===`${prefix}barracks`||cmd ===`${prefix}rax`){
        fullBuildingInfo("Terran Barracks","https://vignette.wikia.nocookie.net/starcraft/images/4/4b/Barracks_SC2_Icon1.jpg/revision/latest?cb=20160107024033","Command Center",150,0,46,1000,"1(+2)","Marine, Reaper, Marauder, Ghost","Marine, Reaper, Orbital Command, Bunker, Factory, Ghost Academy, Reactor, Tech Lab","Mechanical, Armored, Structure","barracks")
    }
    if (cmd ===`${prefix}barracks-p2`||cmd ===`${prefix}rax-p2`){
        let raxembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Lift off", "**Effect**: Lifts off a building, making it airborne and mobile. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Barracks_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-barracks` for main stats!");
    return message.channel.send(raxembed);
    }
    //Begin Engineering Bay
    if (cmd ===`${prefix}engineeringbay`||cmd ===`${prefix}ebay`||cmd ===`${prefix}engiebay`||cmd ===`${prefix}engie`){
        fullBuildingInfo("Terran Engineering Bay","https://vignette.wikia.nocookie.net/starcraft/images/7/7e/EngineeringBay_SC2_Icon1.jpg/revision/latest?cb=20160107024456","Command Center",125,0,25,850,"1(+2)","N/A","Planetary Fortress, Sensor Tower, Missile Turret","Mechanical, Armored, Structure","ebay")
    }
    if (cmd ===`${prefix}engineeringbay-p2`||cmd ===`${prefix}ebay-p2`||cmd ===`${prefix}engiebay-p2`||cmd ===`${prefix}engie-p2`){
        let engieembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Infantry Weapons Level 1", "**Minerals**: 100, **Vespene**: 100, **Time**: 114, **Effect**: Increase the damage of Terran infantry units. ")
        .addField("Infantry Weapons Level 2", "**Requires:** Armory, **Minerals**: 175, **Vespene**: 175, **Time**: 136, **Effect**: Increases the damage of Terran infantry units. ")
        .addField("Infantry Weapons Level 3", "**Requires:** Armory, **Minerals**: 250, **Vespene**: 250, **Time**: 157, **Effect**: Increases the damage of Terran infantry units. ")
        .addField("Infantry Armor Level 1", "**Minerals**: 100, **Vespene**: 100, **Time**: 114, **Effect**: Increases the armor of Terran infantry units. ")
        .addField("Infantry Armor Level 2", "**Requires:** Armory, **Minerals**: 175, **Vespene**: 175, **Time**: 136, **Effect**: Increases the armor of Terran infantry units. ")
        .addField("Infantry Armor Level 3", "**Requires:** Armory, **Minerals**: 250, **Vespene**: 250, **Time**: 157, **Effect**: Increases the armor of Terran infantry units. ")
        .addField("Hi-Sec Auto Tracking", "**Minerals**: 100, **Vespene**: 100, **Time**: 57, **Effect**: Adds +1 attack range to Auto-Turrets, Missile Turrets, and Planetary Fortresses. ")
        .addField("Neosteel Armor", "**Minerals**: 150, **Vespene**: 150, **Time**: 100, **Effect**: Increases the armor of all Terran structures by 2. Increases the cargo space of Bunkers by 2 and the load space of Command Centers and Planetary Fortresses by 5. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Engineering_Bay_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-ebay` for main stats!");
    return message.channel.send(engieembed);
    }
    //Begin Bunker
    if (cmd ===`${prefix}bunker`){
    fullBuildingInfo("Terran Bunker","https://vignette.wikia.nocookie.net/starcraft/images/c/c5/Bunker_SC2_Icon1.jpg/revision/latest?cb=20160107024055","Barracks",100,0,29,400,"1(+2)","N/A","none","Mechanical, Armored, Structure","bunker")
    }    
    if (cmd ===`${prefix}bunker-p2`){
    let commandembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Misc.", "**Cargo Capacity**: 4(+2), only infantry")
        .addField("Neosteel Armor", "**Minerals**: 100, **Vespene**: 100, **Time**: 100, **Effect**: Increases the armor of all Terran structures by 2. Increases the cargo space of Bunkers by 2 and the load space of Command Centers and Planetary Fortresses by 5. ")
        .addField("Salvage", "**Duration**: 4, **Effect**: Destroys the building and returns 75% of its cost. Cannot be cancelled once activated.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Bunker_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-bunker` for main stats!");
    return message.channel.send(commandembed);
    }
    //Begin Missile Turret
    if (cmd ===`${prefix}missileturret`||cmd ===`${prefix}turret`){
        fullBuildingInfoStatic("Terran Missile Turret","https://vignette.wikia.nocookie.net/starcraft/images/5/5f/MissileTurret_SC2_Icon1.jpg/revision/latest?cb=20160107024639","Engineering Bay",100,0,18,250,"0(+2)","12x2",0.61,"7(+1)",39.3,"Air","N/A","Mechanical, Armored, Detector, Structure","turret")
    }
    if (cmd ===`${prefix}missileturret-p2`||cmd ===`${prefix}turret-p2`){
        let turretembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Misc.", "**Detection Range**: 11")
        .addField("Hi-Sec Auto Tracking", "**Researched from:** Engineering Bay, **Minerals**: 100, **Vespene**: 100, **Time**: 57, **Effect**: Adds +1 attack range to Auto-Turrets, Missile Turrets, and Planetary Fortresses.  ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Missile_Turret_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-turret` for main stats!");
    return message.channel.send(turretembed);
    }    
    //Begin Sensor Tower
    if (cmd ===`${prefix}sensortower`||cmd ===`${prefix}sensor`){
        fullBuildingInfo("Terran Sensor Tower","https://vignette.wikia.nocookie.net/starcraft/images/d/d2/SensorTower_SC2_Icon1.jpg/revision/latest?cb=20160107024757","Engineering Bay",125,100,18,200,"0(+2)","N/A","none","Mechanical, Armored, Structure","sensor")
    }
    if (cmd ===`${prefix}sensortower-p2`||cmd ===`${prefix}sensor-p2`){
        let sensorembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Radar", "**Range**: 30, **Effect**: Enemies under fog of war within the range of the Sensor Tower are marked with a red symbol displaying an exclamation mark.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Sensor_Tower_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-sensor` for main stats!");
    return message.channel.send(sensorembed);
    }
    //Begin Reactor
    if (cmd ===`${prefix}reactor`){
        fullBuildingInfo("Terran Reactor","https://vignette.wikia.nocookie.net/starcraft/images/8/85/Reactor_SC2_Icon1.jpg/revision/latest?cb=20160107024915","Barracks, Factory, or Starport",50,50,36,400,"1(+2)","Allows Barracks, Factory, and Starport to create 2 units simultaneously","N/A","Mechanical, Armored, Structure, Add-on","reactor")
    }  
    if (cmd ===`${prefix}reactor-p2`){
        let reactorembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("More Info", "https://liquipedia.net/starcraft2/Reactor_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-reactor` for main stats!");
    return message.channel.send(reactorembed);
    }
    //Begin Tech Lab
    if (cmd ===`${prefix}techlab`||cmd ===`${prefix}lab`){
        fullBuildingInfo("Terran Tech Lab","https://vignette.wikia.nocookie.net/starcraft/images/8/8e/TechLab_SC2_Icon1.jpg/revision/latest?cb=20160107024940","Barracks, Factory, or Starport",50,25,18,400,"1(+2)","N/A","**on Barracks:** Marauder, **on Factory:** Siege Tank, **on Starport:** Banshee, Raven","Mechanical, Armored, Structure, Add-on","techlab")
    }
    if (cmd ===`${prefix}techlab-p2`||cmd ===`${prefix}lab-p2`){
        let labembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Combat Shield", "**Researched from:** Barracks Tech Lab, **Minerals**: 100, **Vespene**: 100, **Time**: 79, **Effect**: Every Marine gains a Combat Shield that gives 10 hitpoints. ")
        .addField("Stim Pack", "**Researched from:** Barracks Tech Lab, **Minerals**: 100, **Vespene**: 100, **Time**: 100, **Effect**: Increases the movement speed and firing rate by 50% for 11 secs at the cost of 10 HP for a marine, and 20 HP for a marauder")
        .addField("Concussive Shells", "**Researched from:** Barracks Tech Lab, **Minerals**: 50, **Vespene**: 50, **Time**: 43, **Effect**: Slows an enemy's movement speed by 50% when hit by the Marauder's attack. Massive units are immune to the slow.")
        .addField("Infernal Pre-Igniter","**Researched from:** Factory Tech Lab, **Minerals**: 150, **Vespene**: 150, **Time**: 79, **Effect**: Improves the Hellion's bonus against Light units by +5 damage and the Hellbat's bonus against Light units by +12 damage.")
        .addField("Smart Servos","**Researched from:** Factory Tech Lab **Requires:** Armory, **Minerals**: 100, **Vespene**: 100, **Time**: 79, **Effect**: Allows Hellions, Hellbats, Vikings, and Thors to transform quickly between combat modes. ")
        .addField("Mag-Field Accelerator","**Researched from:** Factory Tech Lab, **Minerals**: 100, **Vespene**: 100, **Time**: 100, **Effect**: Lock On will deal 400 (+400 vs Armored) over 14 seconds to ground and flying targets.")
        .addField("Drilling Claws","**Researched from:** Factory Tech Lab **Requires:** Armory, **Minerals**: 75, **Vespene**: 75, **Time**: 79, **Effect**: Allows Widow Mines to burrow and activate 3 times as fast. Also cloaks burrowed Widow Mines on cooldown.")
        .addField("Corvid Reactor","**Researched from:** Starport Tech Lab, **Minerals**: 150, **Vespene**: 150, **Time**: 79, **Effect**: Increases the Raven's starting energy by 25.")
        .addField("Hyperflight Rotors", "**Researched from:** Starport Tech Lab, **Minerals**: 150, **Vespene**: 150, **Time**: 121, **Effect**: Increases the movement speed of Banshees from 3.85 to 5.25.")
        .addField("Cloaking Field","**Researched from:** Starport Tech Lab, **Minerals**: 100, **Vespene**: 100, **Time**: 79, **Effect**: The Banshee becomes invisible until it runs out of energy or the player cancels Cloak.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Tech_Lab_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-techlab` for main stats!");
    return message.channel.send(labembed);
    }
    //Begin Factory
    if (cmd ===`${prefix}factory`||cmd ===`${prefix}fac`){
        fullBuildingInfo("Terran Factory","https://vignette.wikia.nocookie.net/starcraft/images/a/a8/Factory_SC2_Icon1.jpg/revision/latest?cb=20160107024519","Barracks",150,100,43,1250,"1(+2)","Hellion, Hellbat, Widow Mine, Cyclone, Siege Tank, Thor","Hellion, Widow Mine, Cyclone, Armory, Starport, Tactical Nuke","Mechanical, Armored, Structure","factory")
    }
    if (cmd ===`${prefix}factory-p2`||cmd ===`${prefix}fac-p2`){
        let factoryembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Lift off", "**Effect**: Lifts off a building, making it airborne and mobile. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Factory_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-factory` for main stats!");
    return message.channel.send(factoryembed);
    }
    //Begin Ghost Academy
    if (cmd ===`${prefix}ghostacademy`||cmd ===`${prefix}academy`){
        fullBuildingInfo("Terran Ghost Academy","https://vignette.wikia.nocookie.net/starcraft/images/1/1c/GhostAcademy_SC2_Icon1.jpg/revision/latest?cb=20160107024614","Barracks",150,50,29,1250,"1(+2)","Tactical Nuke","Ghost","Mechanical, Armored, Structure","ghostacademy")
    }
    if (cmd ===`${prefix}ghostacademy-p2`||cmd ===`${prefix}academy-p2`){
        let academyembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Cloak","**Minerals**: 150, **Vespene**: 150, **Time**: 86, **Energy**: 25(+1.3/s), **Effect**: The Ghost becomes invisible until it runs out of energy or the player cancels Cloak.")
        .addField("Enhanced Shockwaves","**Minerals**: 150, **Vespene**: 150, **Time**: 79, **Effect**:  Increases the radius of the Ghost’s EMP Round from 1.5 to 2.")
        .addField("Arm with Nuke", "**Requires:** Factory, **Minerals**: 100, **Vespene**: 100, **Time**: 43, **Effect**: Builds a Nuke that can be launched by a Ghost. Limited to one Nuke per Ghost Academy. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Ghost_Academy_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-ghostacademy` for main stats!");
    return message.channel.send(academyembed);
    }
    //Begin Armory
    if (cmd ===`${prefix}armory`){
        fullBuildingInfo("Terran Armory","https://vignette.wikia.nocookie.net/starcraft/images/c/cb/Armory_SC2_Icon1.jpg/revision/latest?cb=20160107023923","Factory",150,100,46,750,"1(+2)","N/A","Hellbat, Thor, Infantry Weapons and Armor Level 2, Drilling Claws, Smart Servos, Widow Mine Cloak","Mechanical, Armored, Structure","armory")
    }
    if (cmd ===`${prefix}armory-p2`){
        let armoryembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Vehicle Weapons Level 1", "**Minerals**: 100, **Vespene**: 100, **Time**: 114, **Effect**: Increase the damage of Terran vehicle units. ")
        .addField("Vehicle Weapons Level 2", "**Minerals**: 175, **Vespene**: 175, **Time**: 136, **Effect**: Increase the damage of Terran vehicle units. ")
        .addField("Vehicle Weapons Level 3", "**Minerals**: 250, **Vespene**: 250, **Time**: 157, **Effect**: Increase the damage of Terran vehicle units. ")
        .addField("Ship Weapons Level 1", "**Minerals**: 100, **Vespene**: 100, **Time**: 114, **Effect**: Increase the damage of Terran airship units. ")
        .addField("Ship Weapons Level 2", "**Minerals**: 175, **Vespene**: 175, **Time**: 136, **Effect**: Increase the damage of Terran airship units. ")
        .addField("Ship Weapons Level 3", "**Minerals**: 250, **Vespene**: 250, **Time**: 157, **Effect**: Increase the damage of Terran airship units. ")
        .addField("Vehicle and Ship Armor Level 1", "**Minerals**: 100, **Vespene**: 100, **Time**: 114, **Effect**: Increase the armor of Terran vehicle and airship units. ")
        .addField("Vehicle and Ship Armor Level 2", "**Minerals**: 175, **Vespene**: 175, **Time**: 136, **Effect**: Increase the armor of Terran vehicle and airship units. ")
        .addField("Vehicle and Ship Armor Level 3", "**Minerals**: 250, **Vespene**: 250, **Time**: 157, **Effect**: Increase the armor of Terran vehicle and airship units. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Armory_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-armory` for main stats!");
    return message.channel.send(armoryembed);
    }
    //Begin Starport
    if (cmd ===`${prefix}starport`||cmd ===`${prefix}port`){
        fullBuildingInfo("Terran Starport","https://vignette.wikia.nocookie.net/starcraft/images/2/21/Starport_SC2_Icon1.jpg/revision/latest?cb=20160107024816","Factory",150,100,36,1300,"1(+2)","Viking, Medivac, Liberator, Banshee, Raven, Battlecruiser","Viking, Medivac, Liberator, Fusion Core","Mechanical, Armored, Structure","starport")
    } 
    if (cmd ===`${prefix}starport-p2`||cmd ===`${prefix}port-p2`){
        let portembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Lift off", "**Effect**: Lifts off a building, making it airborne and mobile. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Starport_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-starport` for main stats!");
    return message.channel.send(portembed);
    }
    //Begin Fusion Core
    if (cmd ===`${prefix}fusioncore`){
        fullBuildingInfo("Terran Fusion Core","https://vignette.wikia.nocookie.net/starcraft/images/1/1f/FusionCore_SC2_Icon1.jpg/revision/latest?cb=20160107024547","Starport",150,150,46,750,"1(+2)","N/A","Battlecruiser","Mechanical, Armored, Structure","fusioncore")
    }   
    if (cmd ===`${prefix}fusioncore-p2`){
        let fusionembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Rapid Re-ignition System", "**Researched from:** Fusion Core, **Minerals**: 100, **Vespene**: 100, **Time**: 57, **Effect**: Reduces the cooldown of Medivac's Ignite Afterburners from 14 to 9 seconds and increases the Medivac's base movement speed from 3.5 to 4.13. However, this upgrade does not affect Medivac's movement speed during the Ignite Afterburners effect. ")
        .addField("Advanced Ballistics", "**Researched from:** Fusion Core, **Minerals**: 150, **Vespene**: 150, **Time**: 79, **Effect**: Increases the range of Liberators in Defender Mode by 4.")
        .addField("Yamato Cannon", "**Minerals**: 150, **Vespene**: 150, **Time**: 100, **Cooldown**: 71, **Range**: 10, **Channeling Time**: 2, **Effect**: Blasts a target with a devastating plasma cannon, causing 240 damage.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Fusion_Core_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-fusioncore` for main stats!");
    return message.channel.send(fusionembed);
    }
//Begin Protoss Structures
    //Begin Nexus
    if (cmd ===`${prefix}nexus`||cmd ===`${prefix}nexi`||cmd ===`${prefix}nexii`){
        fullBuildingInfo("Protoss Nexus","https://vignette.wikia.nocookie.net/starcraft/images/f/f9/Icon_Protoss_Nexus.jpg/revision/latest?cb=20160106231816","none",400,0,71,"1000+1000","1(+1)","Probe, Mothership","Pylon, Assilimator, Forge, Gateway","Armored, Structure","nexus")
    }
    if (cmd ===`${prefix}nexus-p2`||cmd ===`${prefix}nexi-p2`||cmd ===`${prefix}nexii-p2`){
        let nexusembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Chrono Boost", "**Energy**: 50, **Duration**: 20, **Effect**: Places target structure in a Chrono Boost, causing it to operate 50% faster for 20 seconds.")
        .addField("Strategic Recall", "**Energy**: 50, **Cooldown**: 130, **Radius**: 2.5, **Channeling Time**: 4, **Effect**: Recalls all units owned by the player in the target area to the Nexus.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Nexus_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-nexus` for main stats!");
    return message.channel.send(nexusembed);
    }
    //Begin Pylon
    if (cmd ===`${prefix}pylon`){
        fullBuildingInfo("Protoss Pylon","https://vignette.wikia.nocookie.net/starcraft/images/c/c0/Icon_Protoss_Pylon.jpg/revision/latest?cb=20160106231837","none",100,0,18,"200+200","1(+1)","N/A","none","Armored, Structure","pylon")
    }
    if (cmd ===`${prefix}pylon-p2`){
        let pylonembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Misc.", "**Provides Supply**: 8")
        .addField("Warp Conduit", "**Effect**: Increases the speed of warp in for units warped into the power field to 4 seconds, if the pylon is in range of a nexus or gateway/warp gate with warp gate researched ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Pylon_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-pylon` for main stats!");
    return message.channel.send(pylonembed);
    }
    //Begin Assimilator
    if (cmd ===`${prefix}assimilator`||cmd ===`${prefix}assim`){
        fullBuildingInfo("Protoss Assimilator","https://vignette.wikia.nocookie.net/starcraft/images/7/74/Icon_Protoss_Assimilator.jpg/revision/latest?cb=20160106231703","none",75,0,21,"300+300","1(+1)","N/A","none","Armored, Structure","assimilator")
    }
    if (cmd ===`${prefix}assimilator-p2`||cmd ===`${prefix}assim-p2`){
        let assimembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("More Info", "https://liquipedia.net/starcraft2/Assimilator_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-assimilator` for main stats!");
    return message.channel.send(assimembed);
    }
    //Begin Gateway
     if (cmd ===`${prefix}gateway`||cmd ===`${prefix}warpgate`){
        fullBuildingInfo("Protoss Gateway/Protoss Warp Gate","https://vignette.wikia.nocookie.net/starcraft/images/2/23/Icon_Protoss_Gateway.jpg/revision/latest?cb=20160106231803","Nexus",150,0,46,"500+500","1(+1)","Zealot, Stalker, Sentry, Adept, High Templar, Dark Templar","Zealot, Cybernetics Core","Armored, Structure","gateway")
    }
    if (cmd ===`${prefix}gateway-p2`||cmd ===`${prefix}warpgate-p2`){
        let gateembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Transform to Gateway/Transform to Warpgate", "**Minerals**: 50, **Vespene**: 50, **Time**:  114, **Duration**: 7, **Effect**: Transforms the Gateway into a Warp Gate. / The Warpgate transforms back into a Gateway.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Gateway_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-gateway` for main stats!");
    return message.channel.send(gateembed);
    }
    //Begin Forge
    if (cmd ===`${prefix}forge`){
        fullBuildingInfo("Protoss Forge","https://vignette.wikia.nocookie.net/starcraft/images/f/f8/Icon_Protoss_Forge.jpg/revision/latest?cb=20160106231751","Nexus",150,0,32,"400+400","1(+1)","N/A","Photon Cannon","Armored, Structure","forge")
    }
    if (cmd ===`${prefix}forge-p2`){
        let forgeembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Ground Weapons Level 1", "**Minerals**: 100, **Vespene**: 100, **Time**: 129, **Effect**: Increases the damage of Protoss ground units.")
        .addField("Ground Weapons Level 2", "**Requires:** Twilight Council, **Minerals**: 175, **Vespene**: 175, **Time**: 154, **Effect**: Increases the damage of Protoss ground units. ")
        .addField("Ground Weapons Level 3", "**Requires:** Twilight Council, **Minerals**: 250, **Vespene**: 250, **Time**: 179, **Effect**: Increases the damage of Protoss ground units. ")
        .addField("Ground Armor Level 1", "**Minerals**: 100, **Vespene**: 100, **Time**: 129, **Effect**: Increases the armor of Protoss ground units units. ")
        .addField("Ground Armor Level 2", "**Requires:** Twilight Council, **Minerals**: 175, **Vespene**: 175, **Time**: 154, **Effect**: Increases the armor of Protoss ground units. ")
        .addField("Ground Armor Level 3", "**Requires:** Twilight Council, **Minerals**: 250, **Vespene**: 250, **Time**: 179, **Effect**: Increases the armor of Protoss ground units. ")
        .addField("Shields Level 1", "**Minerals**: 150, **Vespene**: 150, **Time**: 129, **Effect**: Increases the shields of all Protoss units and structures. ")
        .addField("Shields Level 2", "**Requires:** Twilight Council, **Minerals**: 225, **Vespene**: 225, **Time**: 154, **Effect**: Increases the shields of all Protoss units and structures. ")
        .addField("Shields Level 3", "**Requires:** Twilight Council, **Minerals**: 300, **Vespene**: 300, **Time**: 179, **Effect**: Increases the shields of all Protoss units and structures. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Forge_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-forge` for main stats!");
    return message.channel.send(forgeembed);
    }
    //Begin Cybernetics Core
    if (cmd ===`${prefix}cyberneticscore`||cmd ===`${prefix}cybercore`||cmd ===`${prefix}cyber`){
        fullBuildingInfo("Protoss Cybernetics Core","https://vignette.wikia.nocookie.net/starcraft/images/9/97/Icon_Protoss_Cybernetics_Core.jpg/revision/latest?cb=20160106231716","Gateway",150,0,26,"550+550","1(+1)","N/A","Stalker, Sentry, Adept, Shield Battery, Warp Gate, Robotics Facility, Stargate, Twilight Council","Armored, Structure","cybercore")
    }
    if (cmd ===`${prefix}cyberneticscore-p2`||cmd ===`${prefix}cybercore-p2`||cmd ===`${prefix}cyber-p2`){
    let cyberembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Warp Gate", "**Minerals**: 50, **Vespene**: 50, **Time**:  100, **Duration**: 7, **Effect**: Transforms the Gateway into a Warp Gate. ")
        .addField("Air Weapons Level 1", "**Minerals**: 100, **Vespene**: 100, **Time**: 129, **Effect**: Increases the damage of Protoss air units.")
        .addField("Air Weapons Level 2", "**Requires:** Fleet Beacon, **Minerals**: 175, **Vespene**: 175, **Time**: 154, **Effect**: Increases the damage of Protoss air units. ")
        .addField("Air Weapons Level 3", "**Requires:** Fleet Beacon, **Minerals**: 250, **Vespene**: 250, **Time**: 179, **Effect**: Increases the damage of Protoss air units. ")
        .addField("Air Armor Level 1", "**Minerals**: 150, **Vespene**: 150, **Time**: 129, **Effect**: Increases the armor of Protoss air units units. ")
        .addField("Air Armor Level 2", "**Requires:** Fleet Beacon, **Minerals**: 225, **Vespene**: 225, **Time**: 154, **Effect**: Increases the armor of Protoss air units. ")
        .addField("Air Armor Level 3", "**Requires:** Fleet Beacon, **Minerals**: 300, **Vespene**: 300, **Time**: 179, **Effect**: Increases the armor of Protoss air units. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Cybernetics_Core_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-cybercore` for main stats!");
    return message.channel.send(cyberembed);
    }
    //Begin Photon Cannon
    if (cmd ===`${prefix}photoncannon`||cmd ===`${prefix}cannon`){
        fullBuildingInfoStatic("Protoss Photon Cannon","https://vignette.wikia.nocookie.net/starcraft/images/a/a3/Icon_Protoss_Photon_Cannon.jpg/revision/latest?cb=20160106231827","Forge",150,0,29,"150+150","1(+1)",20,0.89,7,22.4,"Air and Ground","N/A","Armored, Detector, Structure","cannon")
    }
    if (cmd ===`${prefix}photoncannon-p2`||cmd ===`${prefix}cannon-p2`){
        let cannonembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Misc.", "**Detection Range**: 11")
        .addField("More Info", "https://liquipedia.net/starcraft2/Photon_Cannon_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-cannon` for main stats!");
    return message.channel.send(cannonembed);
    }
    //Begin Shield Battery
    if (cmd ===`${prefix}shieldbattery`||cmd ===`${prefix}battery`){
        fullBuildingInfo("Protoss Shield Battery","https://vignette.wikia.nocookie.net/starcraft/images/d/db/ShieldBattery_SC2-LotV_Rend1.jpg/revision/latest?cb=20151205045214","Cybernetics Core",100,0,29,"150+150","1(+1)","N/A","none","Armored, Structure","battery")
    }
    if (cmd ===`${prefix}shieldbattery-p2`||cmd ===`${prefix}battery-p2`){
        let batteryembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Shield Restore", "**Energy**: 1 per 3 shields, **Rate**: 50.4 per sec, **Range**: 6, **Effect**: Restores target unit or structure's shields. Restores 3 shields per 1 energy. Autocasting targets units and defensive structures only.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Shield_Battery")
        .addField("Back to Main","Try `sc2-battery` for main stats!");
    return message.channel.send(batteryembed);
    }
    //Begin Robotics Facility
     if (cmd ===`${prefix}roboticsfacility`||cmd ===`${prefix}robotics`||cmd ===`${prefix}robo`){
         fullBuildingInfo("Protoss Robotics Facility","https://vignette.wikia.nocookie.net/starcraft/images/8/8a/Icon_Protoss_Robotics_Facility.jpg/revision/latest?cb=20160106231854","Cybernetics Core",150,100,46,"500+500","1(+1)","Observer, Warp Prism, Immortal, Colossus, Disruptor","Observer, Warp Prism, Immortal, Robotics Bay","Armored, Structure","robofacility")
    }
    if (cmd ===`${prefix}roboticsfacility-p2`||cmd ===`${prefix}robotics-p2`||cmd ===`${prefix}robo-p2`){
        let roboembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("More Info", "https://liquipedia.net/starcraft2/Robotics_Facility_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-robofacility` for main stats!");
    return message.channel.send(roboembed);
    }
    //Begin Robotics Bay
    if (cmd ===`${prefix}roboticsbay`||cmd ===`${prefix}robobay`||cmd ===`${prefix}rbay`){
        fullBuildingInfo("Protoss Robotics Bay","https://vignette.wikia.nocookie.net/starcraft/images/6/6a/Icon_Protoss_Robotics_Bay.jpg/revision/latest?cb=20160106231910","Robotics Facility",150,150,46,"500+500","1(+1)","N/A","Colossus, Disruptor","Armored, Structure","robobay")
    }
    if (cmd ===`${prefix}roboticsbay-p2`||cmd ===`${prefix}robobay-p2`||cmd ===`${prefix}rbay-p2`){
        let robobayembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Gravitic Boosters", "**Minerals**: 100, **Vespene**: 100, **Time**: 57, **Effect**: Increases the movement speed of the Observer. Their speed is increased from 3.01 to 3.52. ")
        .addField("Gravitic Drive", "**Minerals**: 100, **Vespene**: 100, **Time**: 57, **Effect**: Increases the movement speed and acceleration of the Warp Prism.")
        .addField("Extended Thermal Lance", "**Minerals**: 150, **Vespene**: 150, **Time**: 100, **Effect**: Increases the range of the Colossus weapon by 2. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Robotics_Bay_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-robobay` for main stats!");
    return message.channel.send(robobayembed);
    }    
    //Begin Stargate
    if (cmd ===`${prefix}stargate`||cmd ===`${prefix}starg`||cmd ===`${prefix}sg`){
         fullBuildingInfo("Protoss Stargate","https://vignette.wikia.nocookie.net/starcraft/images/b/bb/Icon_Protoss_Stargate.jpg/revision/latest?cb=20160106231924","Cybernetics Core",150,150,43,"600+600","1(+1)","Phoenix, Oracle, Void Ray, Tempest, Carrier","Phoenix, Oracle, Void Ray, Fleet Beacon","Armored, Structure","stargate")
    }
    if (cmd ===`${prefix}stargate-p2`||cmd ===`${prefix}starg-p2`||cmd ===`${prefix}sg-p2`){
         let stargateembed = new Discord.RichEmbed()
         .setDescription ("**Abilites and Upgrades**") 
         .setColor("#7FC5EB")
        .addField("More Info", "https://liquipedia.net/starcraft2/Stargate_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-stargate` for main stats!");
    return message.channel.send(stargateembed);
    }
    //Begin Fleet Beacon
    if (cmd ===`${prefix}fleetbeacon`||cmd ===`${prefix}beacon`){
        fullBuildingInfo("Protoss Fleet Beacon","https://vignette.wikia.nocookie.net/starcraft/images/3/3e/Icon_Protoss_Fleet_Beacon.jpg/revision/latest?cb=20160106231740","Stargate",300,200,43,"500+500","1(+1)","N/A","Carrier, Tempest, Mothership, Air Weapon and Armor Level 2","Armored, Structure","fleetbeacon")
    }
    if (cmd ===`${prefix}fleetbeacon-p2`||cmd ===`${prefix}beacon-p2`){
        let beaconembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Anion Pulse-Crystals", "**Minerals**: 150, **Vespene**: 150, **Time**: 64, **Effect**: Increases the range of the Phoenix weapon by 2.")
        .addField("Flux Vanes","**Minerals**: 100, **Vespene**: 100, **Time**: 57, **Effect**: Increases the Void Ray's movement speed by 0.798 and its acceleration by 0.962.")
        .addField("Tectonic Destabilizers","**Minerals**: 150, **Vespene**: 150, **Time**: 100, **Effect**: Improves the Tempest's Resonance Coil to deal +40 damage vs structures.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Fleet_Beacon_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-fleetbeacon` for main stats!");
    return message.channel.send(beaconembed);
    }
    //Begin Twilight Council
    if (cmd ===`${prefix}twilightcouncil`||cmd ===`${prefix}twilight`||cmd ===`${prefix}council`){
        fullBuildingInfo("Protoss Twilight Council","https://vignette.wikia.nocookie.net/starcraft/images/3/3c/Icon_Protoss_Twilight_Council.jpg/revision/latest?cb=20160106231949","Cybernetics Core",150,100,36,"500+500","1(+1)","N/A","Carrier, Tempest","Armored, Structure","twilight")
    }     
    if (cmd ===`${prefix}twilightcouncil-p2`||cmd ===`${prefix}twilight-p2`||cmd ===`${prefix}council-p2`){
        let twilightembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Charge", "**Minerals**: 100, **Vespene**: 100, **Time**: 100, **Cooldown**: 7, **Range**: 4, **Effect**: Temporarily increases the movement speed to 8.47, allowing Zealots to intercept nearby enemies, dealing 8 damage to the charged target.")
        .addField("Blink", "**Minerals**: 100, **Vespene**: 100, **Time**: 121, **Cooldown**: 7, **Range**: 8, **Effect**: Teleports the Stalker to a nearby target location that is not obscured by Fog of War.")
        .addField("Resonating Glaives", "**Minerals**: 100, **Vespene**: 100, **Time**: 100, **Effect**: Increases the attack speed of the Adept by 45%. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Twilight_Council_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-twilight` for main stats!");
    return message.channel.send(twilightembed);
    }
    //Begin Templar Archives
    if (cmd ===`${prefix}templararchives`||cmd ===`${prefix}archives`){
        fullBuildingInfo("Protoss Templar Archives","https://vignette.wikia.nocookie.net/starcraft/images/1/1c/Icon_Protoss_Templar_Archives.jpg/revision/latest?cb=20160106231937","Twilight Council",150,200,36,"500+500","1(+1)","N/A","High Templar, Archon","Armored, Structure","templararchives")
    }
    if (cmd ===`${prefix}templararchives-p2`||cmd ===`${prefix}archives-p2`){
        let archivesembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Psionic Storm","**Minerals**: 200, **Vespene**: 200, **Time**: 79, **Energy**: 75, **Cooldown**: 1.43 **Range**: 9, **Radius**: 1.5, **Duration**: 2.85, **Effect**: Creates a storm of psionic energy that lasts 2.85 seconds, causing up to 80 damage to all units in the target area.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Templar_Archives_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-templararchives` for main stats!");
    return message.channel.send(archivesembed);
    }    
    //Begin Dark Shrine
    if (cmd ===`${prefix}darkshrine`||cmd ===`${prefix}dankshrine`||cmd ===`${prefix}shrine`||cmd ===`${prefix}dtshrine`){
        fullBuildingInfo("Protoss Dark Shrine","https://vignette.wikia.nocookie.net/starcraft/images/a/a9/Icon_Protoss_Dark_Shrine.jpg/revision/latest?cb=20160106231728","Twilight Council",150,150,71,"500+500","1(+1)","N/A","Dark Templar, Archon","Armored, Structure","dtshrine")
    }
    if (cmd ===`${prefix}darkshrine-p2`||cmd ===`${prefix}dankshrine-p2`||cmd ===`${prefix}shrine-p2`||cmd ===`${prefix}dtshrine-p2`){
        let shrineembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Shadow Stride", "**Minerals**: 100, **Vespene**: 100, **Time**: 100, **Cooldown**: 14, **Range**: 5, **Effect**: Teleports the Dark Templar to a nearby target location.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Dark_Shrine_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-dtshrine` for main stats!");
    return message.channel.send(shrineembed);
    }           
//Begin Zerg Structures
    //Begin Hatchery
    if (cmd ===`${prefix}hatchery`||cmd ===`${prefix}hatch`){
        fullBuildingInfo("Zerg Hatchery","https://vignette.wikia.nocookie.net/starcraft/images/0/05/Icon_Zerg_Hatchery.jpg/revision/latest?cb=20160106235939","none",300,0,71,1500,1,"Larva, Queen","Drone, Overlord, Spawning Pool, Evolution Chamber","Biological, Armored, Structure","hatch")
    }
    if (cmd ===`${prefix}hatchery-p2`||cmd ===`${prefix}hatch-p2`){
        let hatchembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Misc.", "**Provides Supply**: 6")
        .addField("Resources", "**Minerals**: 300, **Vespene**: 0, **Provides Supply**: 6, **Build Time**: 71")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("Pneumatized Carapace", "**Researched from:** Hatchery/Lair/Hive, **Minerals**: 75, **Vespene**: 75, **Time**: 43, **Effect**: Increases the movement speed of Overlords to 2.63")
        .addField("More Info", "https://liquipedia.net/starcraft2/Hatchery_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-hatch` for main stats!");
    return message.channel.send(hatchembed);
    }
    //Begin Extractor
    if (cmd ===`${prefix}extractor`||cmd ===`${prefix}extract`){
        fullBuildingInfo("Zerg Extractor","https://vignette.wikia.nocookie.net/starcraft/images/1/1b/Icon_Zerg_Extractor.jpg/revision/latest?cb=20160106235953","none",25,0,21,500,1,"N/A","none","Biological, Armored, Structure","extractor")
    }
    if (cmd ===`${prefix}extractor-p2`||cmd ===`${prefix}extract-p2`){
        let extractembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("More Info", "https://liquipedia.net/starcraft2/Extractor_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-extractor` for main stats!");
    return message.channel.send(extractembed);
    }
    //Begin Spawning Pool
    if (cmd ===`${prefix}spawningpool`||cmd ===`${prefix}pool`){
        fullBuildingInfo("Zerg Spawning Pool","https://vignette.wikia.nocookie.net/starcraft/images/f/f7/Icon_Zerg_Spawning_Pool.jpg/revision/latest?cb=20160106235709","Hatchery",200,0,46,1500,1,"N/A","Spine Crawler, Spore Crawler, Roach Warren, Baneling Nest, Lair, Zergling, Queen","Biological, Armored, Structure","pool")
    }
    if (cmd ===`${prefix}spawningpool-p2`||cmd ===`${prefix}pool-p2`){
        let poolembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Metabolic Boost", "**Minerals**: 100, **Vespene**: 100, **Time**: 93, **Effect**: Increases Zergling movement speed by 60% to 6.58(+2.45)")
        .addField("Adrenal Glands", "**Requires:** Hive, **Minerals**: 200, **Vespene**: 200, **Time**: 93, **Effect**: Decreases Zergling attack cooldown to 0.35(-0.15)")
        .addField("More Info", "https://liquipedia.net/starcraft2/Spawning_Pool_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-pool` for main stats!");
    return message.channel.send(poolembed);
    }
    //Begin Evolution Chamber
    if (cmd ===`${prefix}evolutionchamber`||cmd ===`${prefix}evochamber`||cmd ===`${prefix}chamber`||cmd ===`${prefix}evo`){
        fullBuildingInfo("Zerg Evolution Chamber","https://vignette.wikia.nocookie.net/starcraft/images/4/43/Icon_Zerg_Evolution_Chamber.jpg/revision/latest?cb=20160107000003","Hatchery",75,0,25,750,1,"N/A","none","Biological, Armored, Structure","evochamber")
    }
    if (cmd ===`${prefix}evolutionchamber-p2`||cmd ===`${prefix}evochamber-p2`||cmd ===`${prefix}chamber-p2`||cmd ===`${prefix}evo-p2`){
        let evoembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Melee Attacks Level 1", "**Minerals**: 100, **Vespene**: 100, **Time**: 114, **Effect**: Increases the damage of Zerg ground and melee units.")
        .addField("Melee Attacks Level 2", "**Requires:** Lair, **Minerals**: 175, **Vespene**: 175, **Time**: 136, **Effect**: Increases the damage of Zerg ground and melee units. ")
        .addField("Melee Attacks Level 3", "**Requires:** Hive, **Minerals**: 250, **Vespene**: 250, **Time**: 157, **Effect**: Increases the damage of Zerg ground and melee units. ")
        .addField("Missile Attacks Level 1", "**Minerals**: 100, **Vespene**: 100, **Time**: 114, **Effect**: Increases the damage of Zerg ground and ranged units.")
        .addField("Missile Attacks Level 2", "**Requires:** Lair, **Minerals**: 175, **Vespene**: 175, **Time**: 136, **Effect**: Increases the damage of Zerg ground and ranged units. ")
        .addField("Missile Attacks Level 3", "**Requires:** Hive, **Minerals**: 250, **Vespene**: 250, **Time**: 157, **Effect**: Increases the damage of Zerg ground and ranged units. ")
        .addField("Ground Carapace Level 1", "**Minerals**: 100, **Vespene**: 100, **Time**: 114, **Effect**: Increases the armor of Zerg ground units units. ")
        .addField("Ground Carapace Level 2", "**Requires:** Lair, **Minerals**: 175, **Vespene**: 175, **Time**: 136, **Effect**: Increases the armor of Zerg ground units. ")
        .addField("Ground Carapace Level 3", "**Requires:** Hive, **Minerals**: 250, **Vespene**: 250, **Time**: 157, **Effect**: Increases the armor of Zerg ground units. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Evolution_Chamber_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-evochamber` for main stats!");
    return message.channel.send(evoembed);
    }                             
    //Begin Spine Crawler
    if (cmd ===`${prefix}spinecrawler`||cmd ===`${prefix}spine`){
        fullBuildingInfoStatic("Zerg Spine Crawler","https://vignette.wikia.nocookie.net/starcraft/images/6/6a/Icon_Zerg_Spine_Crawler.jpg/revision/latest?cb=20160106235654","Spawning Pool",100,0,36,300,2,"25, **vs Armored**: 30",1.32,7,"18.9, **vs Armored**: 21.7","Ground","N/A","Biological, Armored, Structure")
    }
    if (cmd ===`${prefix}spinecrawler-p2`||cmd ===`${prefix}spine-p2`){
        let spineembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Misc.","**Movespeed**: 2.5, **Off creep**: 1.0")
        .addField("Uproot/Root", "Uprooting allows the Spine Crawler to burrow in a new location. Rooting allows the Spine Crawler to root itself to the ground, gaining attack ability. Can be performed only on Creep.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Spine_Crawler_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-spine` for main stats!");
    return message.channel.send(spineembed);
    }
    //Begin Spore Crawler
    if (cmd ===`${prefix}sporecrawler`||cmd ===`${prefix}spore`){
        fullBuildingInfoStatic("Zerg Spore Crawler","https://vignette.wikia.nocookie.net/starcraft/images/5/56/Icon_Zerg_Spore_Crawler.jpg/revision/latest?cb=20160106235617","Spawning Pool",75,0,21,400,1,"15, **vs Bio**: 30",0.61,7,"24.4, **vs Bio**: 48.8","Air","N/A","Biological, Armored, Detector, Structure","spore")
    }
    if (cmd ===`${prefix}sporecrawler-p2`||cmd ===`${prefix}spore-p2`){
        let sporeembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Misc.", "**Detection Range**: 11, **Movespeed**: 2.5, **Off creep**: 1.0")
        .addField("Uproot/Root", "Uprooting allows the Spore Crawler to burrow in a new location. Rooting allows the Spore Crawler to root itself to the ground, gaining attack ability. Can be performed only on Creep.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Spore_Crawler_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-spore` for main stats!");
    return message.channel.send(sporeembed);
    }
    //Begin Roach Warren
    if (cmd ===`${prefix}roachwarren`||cmd ===`${prefix}warren`){
        fullBuildingInfo("Zerg Roach Warren","https://vignette.wikia.nocookie.net/starcraft/images/d/dc/Icon_Zerg_Roach_Warren.jpg/revision/latest?cb=20160106235726","Spawning Pool",150,0,39,850,1,"N/A","Roach, Ravager","Biological, Armored, Structure","roachwarren")
    }
        if (cmd ===`${prefix}roachwarren-p2`||cmd ===`${prefix}warren-p2`){
        let warrenembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Glial Reconstitution", "**Requires:** Lair, **Minerals**: 100, **Vespene**: 100, **Time**: 79, **Effect**: Increases Roach movement speed to 4.2(+1.05) while unburrowed, and to 4.4 while burrowed under creep.")
        .addField("Tunneling Claws", "**Requires:** Lair, **Minerals**: 100, **Vespene**: 100, **Time**: 79, **Effect**: Gives Roaches the ability to move while burrowed at a speed of 2.8.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Roach_Warren_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-roachwarren` for main stats!"); 
    return message.channel.send(warrenembed);
    }
    //Begin Baneling Nest
    if (cmd ===`${prefix}banelingnest`||cmd ===`${prefix}banenest`){
        fullBuildingInfo("Zerg Baneling Nest","https://vignette.wikia.nocookie.net/starcraft/images/9/99/Icon_Zerg_Baneling_Nest.jpg/revision/latest?cb=20160107000025","Spawning Pool",100,50,43,850,1,"N/A","Baneling","Biological, Armored, Structure","banenest")
    }
    if (cmd ===`${prefix}banelingnest-p2`||cmd ===`${prefix}banenest`){
        let banenestembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Centrifugal Hooks", "**Requires:** Lair, **Minerals**: 150, **Vespene**: 150, **Time**: 79, **Effect**: Increases Baneling movement speed to 4.13(+1.24) and hp to 35(+5). Banelings will roll instead of running.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Baneling_Nest_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-banenest` for main stats!"); 
    return message.channel.send(banenestembed);
    }
    //Begin Lair
    if (cmd ===`${prefix}lair`){
        fullBuildingInfo("Zerg Lair","https://vignette.wikia.nocookie.net/starcraft/images/a/ad/Icon_Zerg_Lair.jpg/revision/latest?cb=20160106235925","Spawning Pool, Hatchery Morph",150,100,57,2000,1,"Larva, Queen","Overseer, Hydralisk Den, Nydus Network, Infestation Pit, Spire, Generate Creep, Mutate Ventral Sacs, Melee and Missile Attacks Level 2, Ground Carapace Level 2, Glial Reconstitution, Tunneling Claws, Centrifugal Hooks","Biological, Armored, Structure","lair")
    }
    if (cmd ===`${prefix}lair-p2`){
        let lairembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Misc.", "**Provides Supply**: 6")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("Pneumatized Carapace", "**Researched from:** Hatchery/Lair/Hive, **Minerals**: 75, **Vespene**: 75, **Time**: 43, **Effect**: Increases the movement speed of Overlords to 2.63")
        .addField("More Info", "https://liquipedia.net/starcraft2/Lair_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-lair` for main stats!"); 
    return message.channel.send(lairembed);
    }
    //Begin Hydralisk Den
    if (cmd ===`${prefix}hydraliskden`||cmd ===`${prefix}hydraden`){
        fullBuildingInfo("Zerg Hydralisk Den","https://vignette.wikia.nocookie.net/starcraft/images/0/0b/Icon_Zerg_Hydralisk_Den.jpg/revision/latest?cb=20160106235827","Lair",100,100,29,850,1,"N/A","Hydralisk, Lurker Den","Biological, Armored, Structure","hydraden")
    }
        if (cmd ===`${prefix}hydraliskden-p2`||cmd ===`${prefix}hydraden-p2`){
        let hydradenembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Muscular Augments", "**Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Hydralisks move 25% faster speed both on and off of Creep. ")
        .addField("Grooved Spines", "**Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Increases the attack range of Hydralisks by +1.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Hydralisk_Den_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-hydraden` for main stats!");  
    return message.channel.send(hydradenembed);
    }
    //Begin Lurker Den
    if (cmd ===`${prefix}lurkerden`){
        fullBuildingInfo("Zerg Lurker Den","https://vignette.wikia.nocookie.net/starcraft/images/d/d1/LurkerDen_SC2_Icon1.png/revision/latest?cb=20160411135201","Lair, Hydralisk Den",100,150,86,850,1,"N/A","Lurker","Biological, Armored, Structure","lurkerden")
    }
    if (cmd ===`${prefix}lurkerden-p2`){
        let lurkerdenembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Adaptive Talons", "**Requires:** Hive, **Minerals**: 150, **Vespene**: 150, **Time**: 54, **Effect**: Reduces the time Lurkers take to burrow from 2 to 0.7 and increases movement speed by 10%.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Lurker_Den_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-lurkerden` for main stats!"); 
    return message.channel.send(lurkerdenembed);
    }
    //Begin Spire
    if (cmd ===`${prefix}spire`){
        fullBuildingInfo("Zerg Spire","https://vignette.wikia.nocookie.net/starcraft/images/9/97/Icon_Zerg_Spire.jpg/revision/latest?cb=20160106235643","Lair",200,200,71,850,1,"N/A","Mutalisk, Corruptor","Biological, Armored, Structure","spire")
    }
    if (cmd ===`${prefix}spire-p2`){
        let spireembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Flyer Attacks Level 1", "**Minerals**: 100, **Vespene**: 100, **Time**: 114, **Effect**: Increases the damage of Zerg air units.")
        .addField("Flyer Attacks Level 2", "**Requires:** Lair, **Minerals**: 175, **Vespene**: 175, **Time**: 136, **Effect**: Increases the damage of Zerg air units. ")
        .addField("Flyer Attacks Level 3", "**Requires:** Hive, **Minerals**: 250, **Vespene**: 250, **Time**: 157, **Effect**: Increases the damage of Zerg air units. ")
        .addField("Flyer Carapace Level 1", "**Minerals**: 150, **Vespene**: 150, **Time**: 114, **Effect**: Increases the armor of Zerg air units units. ")
        .addField("Flyer Carapace Level 2", "**Requires:** Lair, **Minerals**: 225, **Vespene**: 225, **Time**: 136, **Effect**: Increases the armor of Zerg air units. ")
        .addField("Flyer Carapace Level 3", "**Requires:** Hive, **Minerals**: 300, **Vespene**: 300, **Time**: 157, **Effect**: Increases the armor of Zerg air units. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Spire_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-spire` for main stats!"); 
    return message.channel.send(spireembed);
    }
    //Begin Infestation Pit
    if (cmd ===`${prefix}infestationpit`||cmd ===`${prefix}infestpit`){
        fullBuildingInfo("Zerg Infestation Pit","https://vignette.wikia.nocookie.net/starcraft/images/2/20/Icon_Zerg_Infestation_Pit.jpg/revision/latest?cb=20160106235813","Lair",100,100,36,850,1,"N/A","Infestor, Swarm Host, Hive","Biological, Armored, Structure","infestationpit")
    }
        if (cmd ===`${prefix}infestationpit-p2`||cmd ===`${prefix}infestpit-p2`){
        let infestpitembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Pathogen Glands", "**Minerals**: 150, **Vespene**: 150, **Time**: 57, **Effect**: Increases the starting energy of Infestors by 25.")
        .addField("Neural Parasite", "**Minerals**: 150, **Vespene**: 150, **Time**: 79, **Energy**: 100, **Range**: 9 (14), **Duration**: 11,**Effect**: The Infestor temporarily takes control of target enemy unit. The player can cancel this ability, or it will automatically cancel if the controlling Infestor is killed or the targeted unit is moved out of 14 range.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Infestation_Pit_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-infestationpit` for main stats!");  
    return message.channel.send(infestpitembed);
    }
    //Begin Nydus Network
    if (cmd ===`${prefix}nydusnetwork`||cmd ===`${prefix}nydusnet`){
        fullBuildingInfo("Zerg Nydus Network","https://vignette.wikia.nocookie.net/starcraft/images/7/77/Icon_Zerg_Nydus_Network.jpg/revision/latest?cb=20160106235751","Lair",150,150,36,850,1,"Nydus Worm","Nydus Worm","Biological, Armored, Structure","nydusnet")
    }
    if (cmd ===`${prefix}nydusnetwork-p2`||cmd ===`${prefix}nydusnet-p2`){
        let nydusnetembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Load Network","**Effect**: The Nydus Worms and Nydus Networks can load a maximum of 255 ground units into a shared underground network.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Nydus_Network_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-nydusnet` for main stats!");   
    return message.channel.send(nydusnetembed);
    }
    //Begin Nydus Worm
    if (cmd ===`${prefix}nydusworm`){
        fullBuildingInfo("Zerg Nydus Worm","https://vignette.wikia.nocookie.net/starcraft/images/c/cd/Icon_Zerg_Nydus_Worm.jpg/revision/latest?cb=20160106235740","Nydus Network",50,50,14,300,"1, **while emerging:** 3","N/A","none","Biological, Armored, Structure","nydusworm")
    }
    if (cmd ===`${prefix}nydusworm-p2`){
        let nyduswormembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Load Network","**Effect**: The Nydus Worms and Nydus Networks can load a maximum of 255 ground units into a shared underground network.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Nydus_Worm_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-nydusworm` for main stats!");    
    return message.channel.send(nyduswormembed);
    }
    //Begin Hive
    if (cmd ===`${prefix}hive`){
        fullBuildingInfo("Zerg Hive","https://vignette.wikia.nocookie.net/starcraft/images/3/36/Icon_Zerg_Hive.jpg/revision/latest?cb=20160106235851","Infestation Pit, Lair Morph",200,150,71,2500,1,"Larva, Queen","Viper, Greater Spire, Ultralisk Cavern, Melee and Missile Attacks Level 3, Ground Carapace Level 3, Flyer Attacks and Carapace Level 3, Adrenal Glands, Adaptive Talons","Biological, Armored, Structure","hive")
    }
    if (cmd ===`${prefix}hive-p2`){
        let hiveembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Misc.", "**Provides Supply**: 6")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals**: 100, **Vespene**: 100, **Time**: 71, **Effect**: Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("Pneumatized Carapace", "**Researched from:** Hatchery/Lair/Hive, **Minerals**: 75, **Vespene**: 75, **Time**: 43, **Effect**: Increases the movement speed of Overlords to 2.63")
        .addField("More Info", "https://liquipedia.net/starcraft2/Hive_(Legacy_of_the_Void)")
        .addField("Back to Main","Try `sc2-hive` for main stats!");    
    return message.channel.send(hiveembed);
    }
    //Begin Greater Spire
    if (cmd ===`${prefix}greaterspire`||cmd ===`${prefix}greatspire`){
        fullBuildingInfo("Zerg Greater Spire","https://vignette.wikia.nocookie.net/starcraft/images/2/2a/Icon_Zerg_Greater_Spire.jpg/revision/latest?cb=20160106235632","Hive, Spire Morph",100,150,71,1000,1,"N/A","Brood Lord","Biological, Armored, Structure","greaterspire")
    }
    if (cmd ===`${prefix}greaterspire-p2`||cmd ===`${prefix}greatspire-p2`){
        let greaterspireembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Flyer Attacks Level 1", "**Minerals**: 100, **Vespene**: 100, **Time**: 114, **Effect**: Increases the damage of Zerg air units.")
        .addField("Flyer Attacks Level 2", "**Requires:** Lair, **Minerals**: 175, **Vespene**: 175, **Time**: 136, **Effect**: Increases the damage of Zerg air units. ")
        .addField("Flyer Attacks Level 3", "**Requires:** Hive, **Minerals**: 250, **Vespene**: 250, **Time**: 157, **Effect**: Increases the damage of Zerg air units. ")
        .addField("Flyer Carapace Level 1", "**Minerals**: 150, **Vespene**: 150, **Time**: 114, **Effect**: Increases the armor of Zerg air units units. ")
        .addField("Flyer Carapace Level 2", "**Requires:** Lair, **Minerals**: 225, **Vespene**: 225, **Time**: 136, **Effect**: Increases the armor of Zerg air units. ")
        .addField("Flyer Carapace Level 3", "**Requires:** Hive, **Minerals**: 300, **Vespene**: 300, **Time**: 157, **Effect**: Increases the armor of Zerg air units. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Greater_Spire_(Legacy_of_the_Void)");
    return message.channel.send(greaterspireembed);
    }
    //Begin Ultralisk Cavern
    if (cmd ===`${prefix}ultraliskcavern`||cmd ===`${prefix}ultracavern`){
        fullBuildingInfo("Zerg Ultralisk Cavern","https://vignette.wikia.nocookie.net/starcraft/images/0/09/Icon_Zerg_Ultralisk_Cavern.jpg/revision/latest?cb=20160106235305","Hive",150,200,46,850,1,"N/A","Ultralisk","Biological, Armored, Structure","ultracavern")
    }
    if (cmd ===`${prefix}ultraliskcavern-p2`||cmd ===`${prefix}ultracavern-p2`){
        let ultracavernembed = new Discord.RichEmbed()
        .setDescription ("**Abilites and Upgrades**") 
        .setColor("#7FC5EB")
        .addField("Chitinous Plating", "**Minerals**: 150, **Vespene**: 150, **Time**: 79, **Effect**: This upgrade increases the armor of all Ultralisks by 2. ")
        .addField("Anabolic Synthesis", "**Minerals**: 150, **Vespene**: 150, **Time**: 42, **Effect**: Increases Ultralisk speed when off creep from 4.13 to 4.94. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Ultralisk_Cavern_(Legacy_of_the_Void)"); 
    return message.channel.send(ultracavernembed);
    }

//Begin disambiguations
    //begin "core"
    if (cmd === `${prefix}core`){
        return message.channel.send("Did you mean *sc2-cybercore* or *sc2-fusioncore*?");
        }
    //begin "nydus"
    if (cmd === `${prefix}nydus`){
        return message.channel.send("Did you mean *sc2-nydusnet* or *sc2-nydusworm*?");
        }
    //begin "bay"
    if (cmd === `${prefix}bay`){
        return message.channel.send("Did you mean *sc2-ebay* or *sc2-robobay*?");
        }
    //begin "ling"
    if (cmd === `${prefix}ling`){
        return message.channel.send("Did you mean *sc2-zergling* or *sc2-bane*?");
        }
    //begin "perv"    
    if (cmd === `${prefix}perv`||cmd === `${prefix}pervert`){
        return message.channel.send("Did you mean *sc2-obs* or *sc2-overseer*?");
    }
}),

//bot.login(botconfig.token);
bot.login(process.env.token);
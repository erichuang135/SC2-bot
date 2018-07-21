


const botconfig = require("./botconfig.json");
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

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
//begin Test command
    if (cmd === `${prefix}test`){
        return message.channel.send("test");
        }
//begin Help Command
    if (cmd === `${prefix}help`){
        let bicon = bot.user.displayAvatarURL;
        let botembed =  new Discord.RichEmbed()
        .setDescription("Help Info")
        .setColor("#7FC5EB")
        .setThumbnail(bicon)
        .addField("How to Use SC2 bot", "Type sc2-unit to see info on that unit. For example, sc2-marine will give you that statistics for the marine. Use only lowercase letters, no spaces. Type sc2-joke to get a random Starcraft themed laugh!")
        .addField("Support", "Visit https://discord.gg/xRhxfAN for questions, comments, and suggestions.")
        .addField("Credits", "All unit stats take from https://liquipedia.net/starcraft2, all images taken from the SC2 wikia");
    return message.channel.send(botembed);
    }
//begin Joke command
    if (cmd === `${prefix}joke`){
        var joke = Math.floor((Math.random() * 32) + 1);
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
            {return message.channel.send("A Probe hovers into a bar and immediately heads for the restroom. The bartender glances at him. *Whatever*, he says.But after an hour, the Probe still hasn't come out. The puzzled bartender opens the door, and is immediatly vaporized by 23 Photon Cannons.");}
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
        }
//begin Terran Units
    //begin SCV
    if (cmd ===`${prefix}scv`){
        let scvembed = new Discord.RichEmbed()
        .setDescription ("**Terran SCV**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/6/61/SCV_SC2_Icon1.jpg/revision/latest?cb=20160107022653")
        .addField("Construction", "**Built from:** Command Center, Orbital Command, Planetary Fortress")
        .addField("Resources", "**Minerals** - 50, **Vespene** - 0, **Supply** - 1, **Build Time** - 12")
        .addField("Defense", "**HP** - 45, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.94")
        .addField("Offense","**Damage** - 5, **Hitspeed** - 1.07, **Range** - Melee, **DPS** - 4.67 **Targets** - Ground")
        .addField("Attributes", "**Biological, Mechanical, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 8, **Cargo Size** - 1")
        .addField("Upgrades and Abilities","-")
        .addField("Repair", "**Effect** -  SCVs can repair friendly mechanical units and Terran buildings. Cost and time varies depending on unit.")
        .addField("More Info", "https://liquipedia.net/starcraft2/SCV_(Legacy_of_the_Void)");
    return message.channel.send(scvembed);
    }
    //begin Marine
    if (cmd ===`${prefix}marine`){
        let marineembed = new Discord.RichEmbed()
        .setDescription ("**Terran Marine**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/4/47/Marine_SC2_Icon1.jpg/revision/latest?cb=20160107022344")
        .addField("Construction", "**Built from:** Barracks")
        .addField("Resources", "**Minerals** - 50, **Vespene** - 0, **Supply** - 1, **Build Time** - 18")
        .addField("Defense", "**HP** - 45+10, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.15(+1.57 stimmed)")
        .addField("Offense","**Damage** - 6(+1 per upgrade), **Hitspeed** - 0.61(-0.2 stimmed), **Range** - 5, **DPS** - 9.8(+1.6 per upgrade), stimmed 14.7(+2.4 per upgrade) **Targets** - Air and Ground")
        .addField("Attributes", "**Biological, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 9, **Cargo Size** - 1")
        .addField("Abilites and Upgrades", "_")  
        .addField("Combat Shield", "**Researched from:** Barracks Tech Lab, **Minerals** - 100, **Vespene** - 100, **Time** - 79, **Effect** - Every Marine gains a Combat Shield that gives 10 hitpoints. ")
        .addField("Stim Pack", "**Researched from:** Barracks Tech Lab, **Minerals** - 100, **Vespene** - 100, **Time** - 121, **Effect** - Increases the movement speed and firing rate by 50% for 11 secs at the cost of 10 HP")
        .addField("More Info", "https://liquipedia.net/starcraft2/Marine_(Legacy_of_the_Void)");
    return message.channel.send(marineembed);
    }
    //begin Marauder
    if (cmd ===`${prefix}marauder`){
        let mauraderembed = new Discord.RichEmbed()
        .setDescription ("**Terran Marauder**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/b/ba/Marauder_SC2_Icon1.jpg/revision/latest?cb=20160107022315")
        .addField("Construction", "**Built from:** Barracks with Tech Lab")
        .addField("Resources", "**Minerals** - 100, **Vespene** - 25, **Supply** - 2, **Build Time** - 21")
        .addField("Defense", "**HP** - 125, **Armor** - 1(+1 per upgrade) **Movespeed** - 3.15(+1.57 stimmed)")
        .addField("Offense","**Damage** - 10(+1 per upgrade), vs armored 20(+2 per upgrade) **Hitspeed** - 1.07(-0.36 stimmed), **Range** - 6, **DPS** - 9.3(+0.9 per upgrade), stimmed 14.1(+1.4 per upgrade), vs armored 18.6(+1.8 per upgrade), stimmed vs armored 28.2(+2.8) **Targets** - Ground")
        .addField("Attributes", "**Biological, Armored, Ground**")
        .addField("Misc.", "**Sight Range** - 10, **Cargo Size** - 2")
        .addField("Abilites and Upgrades", "_")  
        .addField("Concussive Shells", "**Researched from:** Barracks Tech Lab, **Minerals** - 50, **Vespene** - 50, **Time** - 43, **Effect** - Slows an enemy's movement speed by 50% when hit by the Marauder's attack. Massive units are immune to the slow.")
        .addField("Stim Pack", "**Researched from:** Barracks Tech Lab, **Minerals** - 100, **Vespene** - 100, **Time** - 121, **Effect** - Increases the movement speed and firing rate by 50% for 11 secs at the cost of 20 HP")
        .addField("More Info", "https://liquipedia.net/starcraft2/Marauder_(Legacy_of_the_Void)");
    return message.channel.send(mauraderembed);
    }
    //begin Reaper
    if (cmd ===`${prefix}reaper`){
        let reaperembed = new Discord.RichEmbed()
        .setDescription ("**Terran Reaper**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/7/7d/Reaper_SC2_Icon1.jpg/revision/latest?cb=20160107022927")
        .addField("Construction", "**Built from:** Barracks")
        .addField("Resources", "**Minerals** - 50, **Vespene** - 50, **Supply** - 1, **Build Time** - 32")
        .addField("Defense", "**HP** - 60, **Armor** - 0(+1 per upgrade) **Movespeed** - 5.25")
        .addField("Offense","**Damage** - 4x2(+1x2 per upgrade), **Hitspeed** - 0.79, **Range** - 5, **DPS** - 10.1(+2.5 per upgrade) **Targets** - Ground")
        .addField("Attributes", "**Biological, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 9, **Cargo Size** - 1")
        .addField("Abilites and Upgrades", "_") 
        .addField("Jetpack", "Allows Reapers to travel up and down cliffs.")
        .addField("Combat Drugs", "Heals 2.8 HP every second if the Reaper is not attacked for 7 seconds.")
        .addField("KD8 Charge", "**Cooldown** - 14, **Effect** - Explodes after a short delay, dealing 5 damage and knocking back nearby units.") 
        .addField("More Info", "https://liquipedia.net/starcraft2/Reaper_(Legacy_of_the_Void)");
    return message.channel.send(reaperembed);
    }
    //begin Ghost
     if (cmd ===`${prefix}ghost`){
         let ghostembed = new Discord.RichEmbed()
        .setDescription ("**Terran Ghost**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/6/6e/Ghost_SC2_Icon1.jpg/revision/latest?cb=20160107022212")            
        .addField("Construction", "**Built from:** Barracks with Tech Lab, **Requires:** Ghost Academy")
        .addField("Resources", "**Minerals** - 150, **Vespene** - 125, **Supply** - 2, **Build Time** - 29")
        .addField("Defense", "**HP** - 100, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.94")
        .addField("Offense","**Damage** - 10(+1 per upgrade), vs light 20(+2 per upgrade) **Hitspeed** - 1.07, **Range** - 6, **DPS** - 9.3(+0.93 per upgrade), vs light 18.6 (+1.86 per upgrade) **Targets** - Air and Ground")
        .addField("Attributes", "**Biological, Psionic, Ground**")
        .addField("Misc.", "**Sight Range** - 11, **Cargo Size** - 2")
        .addField("Abilites and Upgrades", "_") 
        .addField("Steady Targeting","**Energy** - 50, **Range** - 10, **Effect** - After carefully aiming for 1.43 seconds while not taking damage, the Ghost fires a sniper round dealing 170 damage. Ignores armor. Can only target biological units.")
        .addField("EMP Round","**Energy** - 75, **Range** - 10, **Radius** - 1.5, **Effect** - Fires an EMP Round that removes up to 100 shields and energy from every unit within the AoE. Also reveals cloaked units.")
        .addField("Cloak","**Researched from:** Ghost Academy, **Minerals** - 150, **Vespene** - 150, **Time** - 86, **Energy** - 25(+1.3/s), **Effect** - The Ghost becomes invisible until it runs out of energy or the player cancels Cloak.")
        .addField("Tac Nuke Strike","**Cooldown** - 14, **Range** - 12, **Effect** - Calls down a Nuclear strike at a target location. Nukes take 14 seconds to land and deal up to 300 (+200 vs. structures) damage in a large radius.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Ghost_(Legacy_of_the_Void)");
    return message.channel.send(ghostembed);
    }
    //begin Hellion
    if (cmd ===`${prefix}hellion`){
        let hellionembed = new Discord.RichEmbed()
       .setDescription ("**Terran Hellion**")
       .setColor("#7FC5EB")
       .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/5/56/Hellion_SC2_Icon1.jpg/revision/latest?cb=20160107022248")            
       .addField("Construction", "**Built from:** Factory")
       .addField("Resources", "**Minerals** - 100, **Vespene** - 0, **Supply** - 2, **Build Time** - 21")
       .addField("Defense", "**HP** - 90, **Armor** - 0(+1 per upgrade) **Movespeed** - 5.95")
       .addField("Offense","**Damage** - 8(+1 per upgrade), vs light 14+5(+2 per upgrade) **Hitspeed** - 1.79, **Range** - 5, **DPS** - 4.48(+0.56 per upgrade), vs light 7.88+2.76(+1.12 per upgrade) **Targets** - Ground")
       .addField("Attributes", "**Mechanical, Light, Ground**")
       .addField("Misc.", "**Sight Range** - 10, **Cargo Size** - 2")
       .addField("Abilites and Upgrades", "_")
       .addField("Infernal Pre-Igniter","**Researched from:** Factory Tech Lab, **Minerals** - 150, **Vespene** - 150, **Time** - 79, **Effect** - Improves the Hellion's bonus against Light units by +5 damage")
       .addField("Smart Servos","**Researched from:** Factory Tech Lab **Requires:** Armory, **Minerals** - 100, **Vespene** - 100, **Time** - 79, **Effect** - Allows Hellions and Hellbats to transform quickly between combat modes.")
       .addField("Hellbat Mode","**Requires:** Armory, **Effect** - Transforms the Hellion into its Hellbat form.")
       .addField("More Info", "https://liquipedia.net/starcraft2/Hellion_(Legacy_of_the_Void)");
   return message.channel.send(hellionembed);
   }
    //begin Hellbat
    if (cmd ===`${prefix}hellbat`||cmd ===`${prefix}hellboi`){
        let hellbatembed = new Discord.RichEmbed()
       .setDescription ("**Terran Hellbat**")
       .setColor("#7FC5EB")
       .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/1/13/Hellbat_SC2-HotS_Icon1.jpg/revision/latest?cb=20160107025249")            
       .addField("Construction", "**Built from:** Factory, **Requires:** Armory")
       .addField("Resources", "**Minerals** - 100, **Vespene** - 0, **Supply** - 2, **Build Time** - 21")
       .addField("Defense", "**HP** - 135, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.15")
       .addField("Offense","**Damage** - 18(+2 per upgrade), vs light 18+12(+3 per upgrade) **Hitspeed** - 1.43, **Range** - 2, **DPS** - 12.6(+1.4 per upgrade), vs light 12.6+8.4(+2.1 per upgrade) **Targets** - Ground")
       .addField("Attributes", "**Biological, Mechanical, Light, Ground**")
       .addField("Misc.", "**Sight Range** - 10, **Cargo Size** - 4")
       .addField("Abilites and Upgrades", "_")
       .addField("Infernal Pre-Igniter","**Researched from:** Factory Tech Lab, **Minerals** - 150, **Vespene** - 150, **Time** - 79, **Effect** - Improves the Hellbat's bonus against Light units by +12 damage.")
       .addField("Smart Servos","**Researched from:** Factory Tech Lab **Requires:** Armory, **Minerals** - 100, **Vespene** - 100, **Time** - 79, **Effect** - Allows Hellions and Hellbats to transform quickly between combat modes.")
       .addField("Hellbat Mode","**Requires:** Armory, **Effect** - Transforms the Hellbat into its Hellion form.")
       .addField("More Info", "https://liquipedia.net/starcraft2/Hellbat_(Legacy_of_the_Void)");
   return message.channel.send(hellbatembed);
   }
    //begin Widow Mine
    if (cmd ===`${prefix}widowmine` || cmd ===`${prefix}mine`){
        let mineembed = new Discord.RichEmbed()
        .setDescription ("**Terran Widow Mine**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/3/3b/WidowMine_SC2-HotS_Icon1.jpg/revision/latest?cb=20160107025320")            
        .addField("Construction", "**Built from:** Factory")
        .addField("Resources", "**Minerals** - 75, **Vespene** - 25, **Supply** - 2, **Build Time** - 21")
        .addField("Defense", "**HP** - 90, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.94")
        .addField("Offense","**Damage** - 125(+35 vs shields) primary, 40(+25 vs shield) splash **Hitspeed** - 29, **Range** - 5 **Targets** - Air and Ground")
        .addField("Attributes", "**Mechanical, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 7, **Cargo Size** - 2")
        .addField("Abilites and Upgrades", "_")
        .addField("Smart Servos","**Researched from:** Factory Tech Lab **Requires:** Armory, **Minerals** - 75, **Vespene** - 75, **Time** - 79, **Effect** - Allows Widow Mines to burrow and activate 3 times as fast.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Widow_Mine_(Legacy_of_the_Void)");
    return message.channel.send(mineembed);
    }
   //begin Cyclone
   if (cmd ===`${prefix}cyclone`){
        let cycloneembed = new Discord.RichEmbed()
        .setDescription ("**Terran Cyclone**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/9/94/Cyclone_SC2-LotV_Icon1.jpg/revision/latest?cb=20160107025444")
        .addField("Construction", "**Built from:** Factory")
        .addField("Resources", "**Minerals** - 150, **Vespene** - 100, **Supply** - 3, **Build Time** - 32")
        .addField("Defense", "**HP** - 180, **Armor** - 1(+1 per upgrade) **Movespeed** - 4.13")
        .addField("Offense","**Damage** - 3(+1 per upgrade), vs armored 5(+1 per upgrade) **Hitspeed** - 0.1, **Range** - 6, **DPS** - 30(+10 per upgrade), vs armored 50(+10 per upgrade) **Targets** - Ground")
        .addField("Attributes", "**Mechanical, Armored, Ground**")
        .addField("Misc.", "**Sight Range** - 11, **Cargo Size** - 4")
        .addField("Abilites and Upgrades", "_")
        .addField("Lock On","**Cooldown** - 14, **Range** - 7 to cast, 15 effective, **Effect** - Locks the Cyclone's weapons on the target air unit, dealing 160 damage over 14 seconds to Flying targets. Can move while firing. Cancels if target moves out of range or vision.")
        .addField("Rapid Fire Launchers","**Researched from:** Factory Tech Lab, **Minerals** - 75, **Vespene** - 75, **Time** - 79, **Effect** - Increases the attack speed of the first 12 shots of the Cyclone's Lock On. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Cyclone");
    return message.channel.send(cycloneembed);
    }
    //begin Siege Tank
    if (cmd ===`${prefix}siegetank`||cmd ===`${prefix}tank`){
        let tankembed = new Discord.RichEmbed()
        .setDescription ("**Terran Siege Tank**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/5/57/SiegeTank_SC2_Icon1.jpg/revision/latest?cb=20160107022749")
        .addField("Construction", "**Built from:** Factory with Tech Lab")
        .addField("Resources", "**Minerals** - 150, **Vespene** - 125, **Supply** - 3, **Build Time** - 32")
        .addField("Defense", "**HP** - 175, **Armor** - 1(+1 per upgrade) **Movespeed** - 3.15")
        .addField("Offense (tank mode)","**Damage** - 15(+2 per upgrade), vs armored 25(+3 per upgrade) **Hitspeed** - 0.74, **Range** - 7, **DPS** - 20.3(+2.7 per upgrade), vs armored 33.8(+4.1 per upgrade) **Targets** - Ground")
        .addField("Offense (siege mode)","**Damage** - 40(+4 per upgrade), vs armored 70(+5 per upgrade) **Hitspeed** - 2.14, **Range** - 13 (minimum 2), **DPS** - 18.7(+1.87 per upgrade), vs armored 32.7(+2.34 per upgrade) **Targets** - Ground")
        .addField("Attributes", "**Mechanical, Armored, Ground**")
        .addField("Misc.", "**Sight Range** - 11, **Cargo Size** - 4")
        .addField("Abilites and Upgrades", "_")
        .addField("Tank/Siege Mode"," In Siege Mode, Siege Tanks have very long range and inflict area damage. Siege Tanks in this mode cannot move or attack targets at close range. In Tank mode, Siege Tanks can move, but they do less damage.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Siege_Tank_(Legacy_of_the_Void)");
    return message.channel.send(tankembed);
    }
    //begin Thor
    if (cmd ===`${prefix}thor`){
        let thorembed = new Discord.RichEmbed()
        .setDescription ("**Terran Thor**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/e/ef/Thor_SC2_Icon1.jpg/revision/latest?cb=20160107022814")
        .addField("Construction", "**Built from:** Factory with Tech Lab **Requires:** Armory")
        .addField("Resources", "**Minerals** - 300, **Vespene** - 200, **Supply** - 6, **Build Time** - 43")
        .addField("Defense", "**HP** - 400, **Armor** - 2(+1 per upgrade) **Movespeed** - 2.62")
        .addField("Offense 1","**Damage** - 30x2(+3x2 per upgrade) **Hitspeed** - 0.91, **Range** - 7, **DPS** - 65.9(+6.59 per upgrade) **Targets** - Ground")
        .addField("Offense 2","**Damage** - 6x4(+1x4 per upgrade), vs light 12x4(+2x4 per upgrade) **Hitspeed** - 2.14, **Range** - 10, **DPS** - 11.2(+1.87 per upgrade), vs light 22.4(+3.74 per upgrade) **Targets** - Air")
        .addField("Offense 3","**Damage** - 35(+3 per upgrade), vs armored 50(+5 per upgrade) **Hitspeed** - 2.14, **Range** - 10, **DPS** - 16.3(+1.4 per upgrade), vs armored 23.3(+2.33 per upgrade) **Targets** - Air")
        .addField("Attributes", "**Mechanical, Armored, Ground**")
        .addField("Misc.", "**Sight Range** - 11, **Cargo Size** - 8")
        .addField("Abilites and Upgrades", "_")
        .addField("High Impact/Explosive Payload", "The Thor's 250mm Punisher Cannons strike a single air target for heavy damage. The Thor's Javelin missile launchers deal splash damage to nearby air units and additional damage to Light units.")
        .addField("Smart Servos","**Researched from:** Factory Tech Lab **Requires:** Armory, **Minerals** - 100, **Vespene** - 100, **Time** - 79, **Effect** - Allows Thors to transform quickly between combat modes.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Thor_(Legacy_of_the_Void)");
    return message.channel.send(thorembed);
    }
    //begin Viking
    if (cmd ===`${prefix}viking`){
        let vikingembed = new Discord.RichEmbed()
        .setDescription ("**Terran Viking**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/2/2a/Viking_SC2_Icon1.jpg/revision/latest?cb=20160107022849")
        .addField("Construction", "**Built from:** Starport")
        .addField("Resources", "**Minerals** - 150, **Vespene** - 75, **Supply** - 2, **Build Time** - 30")
        .addField("Defense", "**HP** - 135, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.15 ground, 3.85 air")
        .addField("Offense (air mode)","**Damage** - 10x2(+1x2 per upgrade), vs armored 14x2(+1x2 per upgrade) **Hitspeed** - 1.43, **Range** - 9, **DPS** - 14(+1.4 per upgrade), vs armored 19.6(+1.4 per upgrade) **Targets** - Air")
        .addField("Offense (ground mode)","**Damage** - 12(+1 per upgrade), vs mech 20(+2 per upgrade) **Hitspeed** - 0.71, **Range** - 6, **DPS** - 16.8(+1.4 per upgrade), vs mech 28.1(+2.8 per upgrade) **Targets** - Ground")
        .addField("Attributes", "**Mechanical, Armored, Air (in air mode), Ground (in ground mode)**")
        .addField("Misc.", "**Sight Range** - 10, **Cargo Size** - 2")
        .addField("Abilites and Upgrades", "_")
        .addField("Fighter/Assualt Mode", "The Viking in Fighter Mode is an Air unit with an anti-air attack. The Viking in Assault Mode is a Ground unit with a ground attack.")
        .addField("Smart Servos","**Researched from:** Factory Tech Lab **Requires:** Armory, **Minerals** - 100, **Vespene** - 100, **Time** - 79, **Effect** - Allows Vikings to transform quickly between combat modes.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Viking_(Legacy_of_the_Void)");
    return message.channel.send(vikingembed);
    }
    //begin Medevac
    if (cmd ===`${prefix}medivac`||cmd ===`${prefix}medevac`||cmd === `${prefix}healbus`){
        let medevacembed = new Discord.RichEmbed()
        .setDescription ("**Terran Medivac**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/d/db/Medivac_SC2_Icon1.jpg/revision/latest?cb=20160107022416")
        .addField("Construction", "**Built from:** Starport")
        .addField("Resources", "**Minerals** - 100, **Vespene** - 100, **Supply** - 2, **Build Time** - 30")
        .addField("Defense", "**HP** - 150, **Armor** - 1(+1 per upgrade) **Movespeed** - 3.5(+2.44)")
        .addField("Attributes", "**Mechanical, Armored, Air**")
        .addField("Misc.", "**Sight Range** - 11, **Cargo Capacity** - 8")
        .addField("Abilites and Upgrades", "_")
        .addField("High Capacity Fuel Tanks", "**Researched from:** Starport Tech Lab, **Minerals** - 100, **Vespene** - 100, **Time** - 57, **Effect** - Increases the Medivac's fuel reserves, allowing Ignite Afterburners to last 50% longer. Average speed is increased from 4.232 to 4.455.")
        .addField("Heal", "**Energy** - 1 per 4 HP, **Range** - 4, **HPS** - 12.6, **Targets** - Biological**")
        .addField("Ignite Afterburners", "**Cooldown** - 14, **Effect** - Speed boost that increases Medivac's movement speed and acceleration to 5.94 for 6 seconds (9 seconds with the upgrade). Average speed is increased from 4.232 to 4.455.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Medivac_(Legacy_of_the_Void)");
    return message.channel.send(medevacembed);
    }
    //begin Liberator
    if (cmd ===`${prefix}liberator`||cmd ===`${prefix}lib`){
        let liberatorembed = new Discord.RichEmbed()
        .setDescription ("**Terran Liberator**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/9/91/Liberator_SC2-LotV_Icon1.jpg/revision/latest?cb=20160107025400")
        .addField("Construction", "**Built from:** Starport")
        .addField("Resources", "**Minerals** - 150, **Vespene** - 150, **Supply** - 3, **Build Time** - 43")
        .addField("Defense", "**HP** - 180, **Armor** - 1(+1 per upgrade) **Movespeed** - 4.72")
        .addField("Offense (fighter mode)","**Damage** - 5x2(+1x2 per upgrade) **Hitspeed** - 1.29, **Range** - 5, **DPS** - 7.8(+1.4 per upgrade) **Targets** - Air")
        .addField("Offense (defender mode)","**Damage** - 75(+5 per upgrade) **Hitspeed** - 1.14, **Range** - 10(+4), **DPS** - 65.8 (+4.4 per upgrade) **Targets** - Ground")
        .addField("Attributes", "**Mechanical, Armored, Air**")
        .addField("Misc.", "**Sight Range** - 10 fighter, 13 defender")
        .addField("Abilites and Upgrades", "_")
        .addField("Advanced Ballistics", "**Researched from:** Starport Tech Lab, **Requires:** Fusion Core, **Minerals** - 150, **Vespene** - 150, **Time** - 79, **Effect** - Increases the range of Liberators in Defender Mode by 4.")
        .addField("Fighter/Defender Mode", "**Effect** - In Defender mode, Liberators inflict single target damage to ground units. Liberators in this mode cannot move. In Fighter mode, Liberators can move, but they can only target air units.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Liberator");
    return message.channel.send(liberatorembed);
    }
    //begin Banshee
    if (cmd ===`${prefix}banshee`||cmd ===`${prefix}shee`){
        let bansheeembed = new Discord.RichEmbed()
        .setDescription ("**Terran Banshee**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/3/32/Banshee_SC2_Icon1.jpg/revision/latest?cb=20160107022109")
        .addField("Construction", "**Built from:** Starport with Tech Lab")
        .addField("Resources", "**Minerals** - 150, **Vespene** - 100, **Supply** - 3, **Build Time** - 43")
        .addField("Defense", "**HP** - 140, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.85(+1.4)")
        .addField("Offense","**Damage** - 12x2(+1x2 per upgrade) **Hitspeed** - 0.89, **Range** - 6, **DPS** - 27 (+2.25 per upgrade) **Targets** - Ground")
        .addField("Attributes", "**Mechanical, Armored, Air**")
        .addField("Misc.", "**Sight Range** - 10")
        .addField("Abilites and Upgrades", "_")
        .addField("Hyperflight Rotors", "**Researched from:** Starport Tech Lab, **Minerals** - 200, **Vespene** - 200, **Time** - 121, **Effect** - Increases the movement speed of Banshees from 3.85 to 5.25.")
        .addField("Cloak","**Researched from:** Starport Tech Lab, **Minerals** - 100, **Vespene** - 100, **Time** - 79, **Energy** - 25(+1.3/s), **Effect** - The Banshee becomes invisible until it runs out of energy or the player cancels Cloak.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Banshee_(Legacy_of_the_Void)");
    return message.channel.send(bansheeembed);
    }
    //begin Raven
    if (cmd ===`${prefix}raven`){
        let ravenembed = new Discord.RichEmbed()
        .setDescription ("**Terran Raven**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/d/d8/Raven_SC2_Icon1.jpg/revision/latest?cb=20160107022547")
        .addField("Construction", "**Built from:** Starport with Tech Lab")
        .addField("Resources", "**Minerals** - 100, **Vespene** - 200, **Supply** - 2, **Build Time** - 43")
        .addField("Defense", "**HP** - 140, **Armor** - 1(+1 per upgrade) **Movespeed** - 3.85")
        .addField("Attributes", "**Mechanical, Light, Detector, Air**")
        .addField("Misc.", "**Sight Range** - 11")
        .addField("Abilites and Upgrades", "_")
        .addField("Build Auto-Turret", "**Energy** - 50, **Range** - 2, **Duration** - 10 **Effect** - The Raven drops an Auto-Turret at the target location.")
        .addField("Interference Matrix", "**Energy** - 50, **Range** - 9, **Duration** - 7.9 **Effect** - Disables a target unit rendering it unable to attack or use abilities for 7.9 seconds. Reveals Cloaked units. Can only target mechanical and psionic units.")
        .addField("Anti-Armor Missile", "**Energy** - 75, **Range** - 10, **Duration** - 21, **Radius** - 0.72 **Effect** - Deploys a Missile which pursues the target unit, dealing 15 splash damage upon contact and reducing armor of affected units by 3 for 21 seconds.")
        .addField("Corvid Reactor","**Researched from:** Starport Tech Lab, **Minerals** - 150, **Vespene** - 150, **Time** - 79, **Effect** - Increases the Raven's starting energy by 25.")
        .addField("Hi-Sec Auto Tracking","**Researched from:** Engineering Bay, **Minerals** - 100, **Vespene** - 100, **Time** - 57, **Effect** - Adds +1 attack range to Auto-Turrets")
        .addField("More Info", "https://liquipedia.net/starcraft2/Raven_(Legacy_of_the_Void)");
    return message.channel.send(ravenembed);
    }
    //begin Banshee
    if (cmd ===`${prefix}battlecruiser`||cmd === `${prefix}bc`||cmd === `${prefix}cattlebruiser`){
        let battlecruiserembed = new Discord.RichEmbed()
        .setDescription ("**Terran Battlecruiser**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/f/f5/Battlecruiser_SC2_Icon1.jpg/revision/latest?cb=20160107022138")
        .addField("Construction", "**Built from:** Starport with Tech Lab **Requires:** Fusion Core")
        .addField("Resources", "**Minerals** - 400, **Vespene** - 300, **Supply** - 6, **Build Time** - 64")
        .addField("Defense", "**HP** - 550, **Armor** - 3(+1 per upgrade) **Movespeed** - 2.62")
        .addField("Offense 1","**Damage** - 8(+1 per upgrade) **Hitspeed** - 0.16, **Range** - 6, **DPS** - 50(+6.25 per upgrade) **Targets** - Ground")
        .addField("Offense 2","**Damage** - 6(+1 per upgrade) **Hitspeed** - 0.16, **Range** - 6, **DPS** - 37.5(+6.25 per upgrade) **Targets** - Ground")
        .addField("Attributes", "**Mechanical, Armored, Massive, Air**")
        .addField("Misc.", "**Sight Range** - 12")
        .addField("Abilites and Upgrades", "_")
        .addField("Yamato Cannon", "**Researched from:** Fusion Core, **Minerals** - 150, **Vespene** - 150, **Time** - 43, **Cooldown** - 71, **Range** - 10, **Channeling Time** - 2, **Effect** - Blasts a target with a devastating plasma cannon, causing 300 damage.")
        .addField("Tactical Jump", "**Cooldown** - 71, **Effect** - After 4 seconds, warps to the target location. Battlecruiser is invincible while warping.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Battlecruiser_(Legacy_of_the_Void)");
    return message.channel.send(battlecruiserembed);
    }
    //begin MULE
    if (cmd ===`${prefix}mule`){
        let muleembed = new Discord.RichEmbed()
        .setDescription ("**Terran MULE**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/0/04/MULE_SC2_Icon1.jpg/revision/latest?cb=20160107022519")
        .addField("Construction", "**Summoned from:** Orbital Command")
        .addField("Defense", "**HP** - 60, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.94")
        .addField("Attributes", "**Mechanical, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 8")
        .addField("Upgrades and Abilities","-")
        .addField("Repair", "**Effect** - MULEs can repair friendly mechanical units and Terran buildings. Cost and time varies depending on unit.")
        .addField("More Info", "https://liquipedia.net/starcraft2/MULE_(Legacy_of_the_Void)");
    return message.channel.send(muleembed);
    }
//begin Protoss Units
    //begin Probe
    if (cmd ===`${prefix}probe`){
        let probeembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Probe**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/5/57/Icon_Protoss_Probe.jpg/revision/latest?cb=20160106180521")
        .addField("Construction", "**Built from:** Nexus")
        .addField("Resources", "**Minerals** - 50, **Vespene** - 0, **Supply** - 1, **Build Time** - 12")
        .addField("Defense", "**HP+Shields** - 20+20, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.94")
        .addField("Offense","**Damage** - 5, **Hitspeed** - 1.07, **Range** - Melee, **DPS** - 4.67 **Targets** - Ground")
        .addField("Attributes", "**Mechanical, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 8, **Cargo Size** - 1")
        .addField("More Info", "https://liquipedia.net/starcraft2/Probe_(Legacy_of_the_Void)");
    return message.channel.send(probeembed);
    }
    //begin Zealot
    if (cmd ===`${prefix}zealot`){
        let zealotembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Zealot**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/6/6e/Icon_Protoss_Zealot.jpg/revision/latest?cb=20160106180701")
        .addField("Construction", "**Built from:** Gateway, Warp Gate")
        .addField("Resources", "**Minerals** - 100, **Vespene** - 0, **Supply** - 2, **Build Time** - 27")
        .addField("Defense", "**HP+Shields** - 100+50, **Armor** - 1(+1 per upgrade) **Movespeed** - 3.15+0.98(+4.62 when charging)")
        .addField("Offense","**Damage** - 8x2(+1x2 per upgrade), **Hitspeed** - 0.86, **Range** - Melee, **DPS** - 18.6(+2.33 per upgrade) **Targets** - Ground")
        .addField("Attributes", "**Biological, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 9, **Cargo Size** - 2")
        .addField("Upgrades and Abilities","-")
        .addField("Charge", "**Researched from:** Twilight Counsel, **Minerals** - 100, **Vespene** - 100, **Time** - 100, **Cooldown** - 7, **Range** - 4, **Effect** - Temporarily increases the movement speed to 8.47, allowing Zealots to intercept nearby enemies, dealing 8 damage to the charged target.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Zealot_(Legacy_of_the_Void)");
    return message.channel.send(zealotembed);
    }
    //begin Stalker
    if (cmd ===`${prefix}stalker`){
        let stalkerembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Stalker**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/0/0d/Icon_Protoss_Stalker.jpg/revision/latest?cb=20160106180555")
        .addField("Construction", "**Built from:** Gateway, Warp Gate, **Requires:** Cybernetics Core")
        .addField("Resources", "**Minerals** - 125, **Vespene** - 50, **Supply** - 2, **Build Time** - 30")
        .addField("Defense", "**HP+Shields** - 80+80, **Armor** - 1(+1 per upgrade) **Movespeed** - 4.13")
        .addField("Offense","**Damage** - 13(+1 per upgrade), vs armored 18(+2 per upgrade) **Hitspeed** - 1.34, **Range** - 6, **DPS** - 9.7(+0.75 per upgrade), vs armored 13.4(+1.5 per upgrade) **Targets** - Ground and Air")
        .addField("Attributes", "**Mechanical, Armored, Ground**")
        .addField("Misc.", "**Sight Range** - 10, **Cargo Size** - 2")
        .addField("Upgrades and Abilities","-")
        .addField("Blink", "**Researched from:** Twilight Counsel, **Minerals** - 150, **Vespene** - 150, **Time** - 121, **Cooldown** - 7, **Range** - 8, **Effect** - Teleports the Stalker to a nearby target location that is not obscured by Fog of War.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Stalker_(Legacy_of_the_Void)");
    return message.channel.send(stalkerembed);
    }
    //begin Sentry
    if (cmd ===`${prefix}sentry`){
        let sentryembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Sentry**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/a/ab/Icon_Protoss_Sentry.jpg/revision/latest?cb=20160106180539")
        .addField("Construction", "**Built from:** Gateway, Warp Gate, **Requires:** Cybernetics Core")
        .addField("Resources", "**Minerals** - 50, **Vespene** - 100, **Supply** - 2, **Build Time** - 26")
        .addField("Defense", "**HP+Shields** - 40+40, **Armor** - 1(+1 per upgrade) **Movespeed** - 3.15")
        .addField("Offense","**Damage** - 6(+1 per upgrade), **Hitspeed** - 0.71, **Range** - 5, **DPS** - 8.4(+1.4 per upgrade)**Targets** - Ground and Air")
        .addField("Attributes", "**Mechanical, Light, Psionic, Ground**")
        .addField("Misc.", "**Sight Range** - 10, **Cargo Size** - 2")
        .addField("Upgrades and Abilities","-")
        .addField("Force Field", "**Energy** - 50, **Range** - 11, **Radius** - 1.7, **Duration** - 11, **Effect** - Barrier that lasts 11 seconds and impedes movement of ground units. Massive units will shatter Force Fields on contact. Hallucinated Massive units cannot shatter Force Fields.")
        .addField("Guardian Shield","**Energy** - 75, **Radius** - 4, **Duration** - 11, **Effect** - Creates a range 4 aura that reduces incoming ranged damage to friendly units by 2.")
        .addField("Hallucination","**Energy** - 100, **Duration** - 43, **Effect** - Creates hallucinations of Protoss units at the caster's location, that cannot use active abilities, cannot deal damage, and die more easily. Enemy detectors can reveal hallucinations.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Sentry_(Legacy_of_the_Void)");
    return message.channel.send(sentryembed);
    }
    //begin Adept
    if (cmd ===`${prefix}adept`){
        let adeptembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Adept**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/9/91/Icon_Protoss_Adept.jpg/revision/latest?cb=20160106231127")
        .addField("Construction", "**Built from:** Gateway, Warp Gate, **Requires:** Cybernetics Core")
        .addField("Resources", "**Minerals** - 100, **Vespene** - 25, **Supply** - 2, **Build Time** - 27")
        .addField("Defense", "**HP+Shields** - 70+70, **Armor** - 1(+1 per upgrade) **Movespeed** - 3.5")
        .addField("Offense","**Damage** - 10(+1 per upgrade), vs light 22(+2 per upgrade) **Hitspeed** - 1.61(-0.5), **Range** - 4, **DPS** - 6.2(+0.62 per upgrade), vs light 13.65(+1.24 per upgrade), with glaives 9(+0.9 per upgrade), with glaives vs light 19.8(+1.8 per upgrade)  **Targets** - Ground")
        .addField("Attributes", "**Biological, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 9 (4 shade), **Cargo Size** - 2")
        .addField("Upgrades and Abilities","-")
        .addField("Resonating Glaives", "**Researched from:** Twilight Counsel, **Minerals** - 100, **Vespene** - 100, **Time** - 100, **Effect** - Increases the attack speed of the Adept by 45%. ")
        .addField("Psionic Transfer","**Duration** - 7, **Cooldown** - 11, **Effect** - Projects an invulnerable Shade that can move but cannot attack. After 7 seconds, the Adept teleports to the Shade's location.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Adept");
    return message.channel.send(adeptembed);
    }
    //begin High Templar
    if (cmd ===`${prefix}hightemplar`||cmd == `${prefix}ht`){
        let htembed = new Discord.RichEmbed()
        .setDescription ("**Protoss High Templar**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/a/a0/Icon_Protoss_High_Templar.jpg/revision/latest?cb=20160106180343")
        .addField("Construction", "**Built from:** Gateway, Warp Gate, **Requires:** Templar Archives")
        .addField("Resources", "**Minerals** - 50, **Vespene** - 150, **Supply** - 2, **Build Time** - 39")
        .addField("Defense", "**HP+Shields** - 40+40, **Armor** - 0(+1 per upgrade) **Movespeed** - 2.62")
        .addField("Offense","**Damage** - 4(+1 per upgrade), **Hitspeed** - 1.25, **Range** - 6, **DPS** - 3.2(+0.8 per upgrade)**Targets** - Ground")
        .addField("Attributes", "**Biological, Light, Psionic, Ground**")
        .addField("Misc.", "**Sight Range** - 10, **Cargo Size** - 2")
        .addField("Upgrades and Abilities","-")
        .addField("Feedback", "**Energy** - 50, **Range** - 9, **Effect** - Only units with energy can be targeted with Feedback. Feedback removes all energy from the targeted unit, and converts it into direct damage dealt to the target.")
        .addField("Psionic Storm","**Researched from:** Templar Archives, **Minerals** - 200, **Vespene** - 200, **Time** - 79, **Energy** - 75, **Cooldown** - 1.43 **Range** - 9, **Radius** - 1.5, **Duration** - 2.85, **Effect** - Creates a storm of psionic energy that lasts 2.85 seconds, causing up to 80 damage to all units in the target area.")
        .addField("Archon Warp","**Duration** - 9, **Effect** - Sacrifices 2 Templar to create an Archon.")
        .addField("More Info", "https://liquipedia.net/starcraft2/High_Templar_(Legacy_of_the_Void)");
    return message.channel.send(htembed);
    }
    //begin Dark Templar
    if (cmd ===`${prefix}darktemplar`||cmd ==`${prefix}dt`){
        let dtembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Dark Templar**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/9/90/Icon_Protoss_Dark_Templar.jpg/revision/latest?cb=20160106180327")
        .addField("Construction", "**Built from:** Gateway, Warp Gate, **Requires:** Dark Shrine")
        .addField("Resources", "**Minerals** - 125, **Vespene** - 125, **Supply** - 2, **Build Time** - 39")
        .addField("Defense", "**HP+Shields** - 40+80, **Armor** - 1(+1 per upgrade) **Movespeed** - 3.94")
        .addField("Offense","**Damage** - 45(+5 per upgrade), **Hitspeed** - 1.21, **Range** - Melee, **DPS** - 37.2(+4.13 per upgrade) **Targets** - Ground")
        .addField("Attributes", "**Biological, Light, Psionic, Ground**")
        .addField("Misc.", "**Sight Range** - 8, **Cargo Size** - 2")
        .addField("Upgrades and Abilities","-")
        .addField("Permanent Cloak","**Effect** - The Dark Templar is permanently cloaked.")
        .addField("Shadow Stride", "**Researched from:** Dark Shrine, **Minerals** - 100, **Vespene** - 100, **Time** - 121, **Cooldown** - 21, **Range** - 5, **Effect** - Teleports the Dark Templar to a nearby target location.")
        .addField("Archon Warp","**Duration** - 9, **Effect** - Sacrifices 2 Templar to create an Archon.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Dark_Templar_(Legacy_of_the_Void)");
    return message.channel.send(dtembed);
    }
    //begin Archon
    if (cmd ===`${prefix}archon`){
        let archonembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Archon**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/5/56/Icon_Protoss_Archon.jpg/revision/latest?cb=20160106175702")
        .addField("Construction", "**Built from:** 2 Templar, High or Dark")
        .addField("Resources", "**Minerals** - 100, 175, 250, **Vespene** - 300, 275, 250, **Supply** - 4, **Build Time** - 9")
        .addField("Defense", "**HP+Shields** - 10+350, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.94")
        .addField("Offense","**Damage** - 25(+3 per upgrade), vs bio 35(+4 per upgrade) **Hitspeed** - 1.25, **Range** - 3, **DPS** - 20(+2.4 per upgrade), vs bio 28(+3.2 per upgrade) **Targets** - Air and Ground")
        .addField("Attributes", "**Massive, Psionic, Ground**")
        .addField("Misc.", "**Sight Range** - 9, **Cargo Size** - 4")
        .addField("More Info", "https://liquipedia.net/starcraft2/Archon_(Legacy_of_the_Void)");
    return message.channel.send(archonembed);
    }
    //begin Observer
    if (cmd ===`${prefix}observer`||cmd === `${prefix}obs`){
        let obsembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Observer**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/5/56/Icon_Protoss_Archon.jpg/revision/latest?cb=20160106175702")
        .addField("Construction", "**Built from:** Robotics Facility")
        .addField("Resources", "**Minerals** - 25, **Vespene** - 75, **Supply** - 1, **Build Time** - 21")
        .addField("Defense", "**HP+Shields** - 40+20, **Armor** - 0(+1 per upgrade) **Movespeed** - 2.62(+1.32)")
        .addField("Attributes", "**Light, Mechanical, Detector, Air**")
        .addField("Misc.", "**Sight Range** - 11(+2.75)")
        .addField("Upgrades and Abilities","-")
        .addField("Gravitic Boosters", "**Researched from:** Robotics Bay, **Minerals** - 100, **Vespene** - 100, **Time** - 57, **Effect** - Increases the movement speed of the Observer. Their speed and acceleration is increased by 50%. ")
        .addField("Permanent Cloak","**Effect** - The Observer is permanently cloaked.")
        .addField("Surveillance Mode", "**Effect** - Transforms the Observer to Surveillance Mode. The Observer gains 25% wider vision, but loses the ability to move.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Observer_(Legacy_of_the_Void)");
    return message.channel.send(obsembed);
    }
    //begin Warp Prism
    if (cmd ===`${prefix}warpprism`||cmd === `${prefix}prism`){
        let prismembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Warp Prism**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/1/1f/Icon_Protoss_Warp_Prism.jpg/revision/latest?cb=20160106180644")
        .addField("Construction", "**Built from:** Robotics Facility")
        .addField("Resources", "**Minerals** - 200, **Vespene** - 0, **Supply** - 2, **Build Time** - 36")
        .addField("Defense", "**HP+Shields** - 80+100, **Armor** - 0(+1 per upgrade) **Movespeed** - 4.13(+1.23)")
        .addField("Attributes", "**Armored, Mechanical, Psionic, Air**")
        .addField("Misc.", "**Sight Range** - 10, **Cargo Capacity** - 8")
        .addField("Upgrades and Abilities","-")
        .addField("Gravitic Drive", "**Researched from:** Robotics Bay, **Minerals** - 100, **Vespene** - 100, **Time** - 57, **Effect** - Increases the movement speed and acceleration of the Warp Prism.")
        .addField("Phasing/Transport Mode", "**Effect** - In Phasing Mode, the Warp Prism generates a power radius similar to that of a Pylon. The Warp Prism cannot move in this mode. The Warp Prism returns to being a mobile transport in Transport Mode.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Warp_Prism_(Legacy_of_the_Void)");
    return message.channel.send(prismembed);
    }
    //begin Immortal
    if (cmd ===`${prefix}immortal`){
        let immortalembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Immortal**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/c/c1/Icon_Protoss_Immortal.jpg/revision/latest?cb=20160106180358")
        .addField("Construction", "**Built from:** Robotics Facility")
        .addField("Resources", "**Minerals** - 250, **Vespene** - 100, **Supply** - 4, **Build Time** - 39")
        .addField("Defense", "**HP+Shields** - 200+100, **Armor** - 1(+1 per upgrade) **Movespeed** - 3.15")
        .addField("Offense","**Damage** - 20(+2 per upgrade), vs armored 50(+5 per upgrade) **Hitspeed** - 1.04, **Range** - 6, **DPS** - 19.2(+1.92 per upgrade), vs armored 48.1(+4.81 per upgrade) **Targets** - Ground")
        .addField("Attributes", "**Mechanical, Armored, Ground**")
        .addField("Misc.", "**Sight Range** - 9, **Cargo Size** - 4")
        .addField("Upgrades and Abilities","-")
        .addField("Barrier", "**Cooldown** - 32, **Duration** - 2, **Effect** - Absorbs up to 100 damage. Lasts for 2 seconds.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Immortal_(Legacy_of_the_Void)");
    return message.channel.send(immortalembed);
    }
    //begin Colossus
    if (cmd ===`${prefix}colossus`||cmd ===`${prefix}colossi`||cmd ===`${prefix}giraffe`||cmd ===`${prefix}lasergiraffe`){
        let colossusembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Colossus**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/4/40/Icon_Protoss_Colossus.jpg/revision/latest?cb=20160106180305")
        .addField("Construction", "**Built from:** Robotics Facility, **Requires:** Robotics Bay")
        .addField("Resources", "**Minerals** - 300, **Vespene** - 200, **Supply** - 6, **Build Time** - 54")
        .addField("Defense", "**HP+Shields** - 200+150, **Armor** - 1(+1 per upgrade) **Movespeed** - 3.15")
        .addField("Offense","**Damage** - 10x2(+1x2 per upgrade), vs light 15x2(+2x2 per upgrade) **Hitspeed** - 1.07, **Range** - 7+2, **DPS** - 18.7(+1.87 per upgrade), vs light 28(+3.74 per upgrade) **Targets** - Ground")
        .addField("Attributes", "**Mechanical, Armored, Massive, Ground, Targetable by Air**")
        .addField("Misc.", "**Sight Range** - 10, **Cargo Size** - 8")
        .addField("Upgrades and Abilities","-")
        .addField("Extended Thermal Lance", "**Researched from:** Robotics Bay, **Minerals** - 150, **Vespene** - 150, **Time** - 100, **Effect** - Increases the range of the Colossus weapon by 2. ")
        .addField("Cliff Walk","Allows Colossus to travel up and down cliffs.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Colossus_(Legacy_of_the_Void)");
    return message.channel.send(colossusembed);
    }
    //begin Disruptor
    if (cmd ===`${prefix}disruptor`||cmd ===`${prefix}ruptor`){
        let ruptorembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Disruptor**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/6/64/Icon_Protoss_Disruptor.jpg/revision/latest?cb=20160106231158")
        .addField("Construction", "**Built from:** Robotics Facility, **Requires:** Robotics Bay")
        .addField("Resources", "**Minerals** - 150, **Vespene** - 150, **Supply** - 3, **Build Time** - 36")
        .addField("Defense", "**HP+Shields** - 100+100, **Armor** - 1(+1 per upgrade) **Movespeed** - 3.15")
        .addField("Attributes", "**Mechanical, Armored, Ground**")
        .addField("Misc.", "**Sight Range** - 9, **Cargo Size** - 4")
        .addField("Upgrades and Abilities","-")
        .addField("Purification Nova", "**Cooldown** - 14.3, **Radius** - 1.5, **Duration** - 2, **Damage** - 145+55 vs shields, **Targets** - Ground, **Effect** - Shoots out a ball of energy that detonates after 2 seconds or on contact with an enemy unit, dealing 145 splash damage and an additional 55 shield damage to nearby ground units and structures. The Disruptor is immobile while this is active. The Disruptor's visual glow is dulled a little bit during cool-down.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Disruptor");
    return message.channel.send(ruptorembed);
    }
    //begin Phoenix
    if (cmd ===`${prefix}phoenix`||cmd ===`${prefix}nix`){
        let nixembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Phoenix**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/b/b1/Icon_Protoss_Phoenix.jpg/revision/latest?cb=20160106180507")
        .addField("Construction", "**Built from:** Stargate")
        .addField("Resources", "**Minerals** - 150, **Vespene** - 100, **Supply** - 2, **Build Time** - 25")
        .addField("Defense", "**HP+Shields** - 120+60, **Armor** - 0(+1 per upgrade) **Movespeed** - 5.95")
        .addField("Offense","**Damage** - 5x2(+1x2 per upgrade), vs light 10x2(+1x2 per upgrade) **Hitspeed** - 0.97, **Range** - 5+2, **DPS** - 12.7(+2.5 per upgrade), vs light 25.4(+2.5 per upgrade) **Targets** - Air")
        .addField("Attributes", "**Mechanical, Light, Air**")
        .addField("Misc.", "**Sight Range** - 10")
        .addField("Upgrades and Abilities","-")
        .addField("Anion Pulse-Crystals", "**Researched from:** Fleet Beacon, **Minerals** - 150, **Vespene** - 150, **Time** - 64, **Effect** - Increases the range of the Phoenix weapon by 2.")
        .addField("Graviton Beam","**Energy** - 50, **Range** - 4, **Duration** - 7, **Effect** - Makes the target unit float in the air, disabling its abilities. Massive units are immune.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Phoenix_(Legacy_of_the_Void)");
    return message.channel.send(nixembed);
    }
    //begin Oracle
    if (cmd ===`${prefix}oracle`){
        let oracleembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Oracle**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/4/4b/Icon_Protoss_Oracle.jpg/revision/latest?cb=20160106231013")
        .addField("Construction", "**Built from:** Stargate")
        .addField("Resources", "**Minerals** - 150, **Vespene** - 150, **Supply** - 3, **Build Time** - 37")
        .addField("Defense", "**HP+Shields** - 100+60, **Armor** - 0(+1 per upgrade) **Movespeed** - 5.6")
        .addField("Offense","**Damage** - 15, vs light 22 **Hitspeed** - 0.61, **Range** - 4, **DPS** - 24.4, vs light 35.9 **Targets** - Ground")
        .addField("Attributes", "**Mechanical, Light, Psionic, Air**")
        .addField("Misc.", "**Sight Range** - 10")
        .addField("Upgrades and Abilities","-")
        .addField("Revelation", "**Energy** - 50, **Cooldown** - 2.2, **Range** - 9, **Radius** - 6, **Duration** - 30 **Effect** - Causes enemy units and structures within the target area to grant vision for 30 seconds. Reveals cloaked or burrowed units and structures.")
        .addField("Stasis Ward","**Energy** - 50, **Range** - 6, **Radius** - 4, **Duration** - 170, **Effect Duration** - 21.5 **Effect** - Places a cloaked Stasis Ward at the target location that lasts 170 seconds. Once activated by an enemy ground unit, the ward traps nearby enemies in stasis for 21.5 seconds. Trapped units cannot be attacked or affected by abilities.")
        .addField("Pulsar Beam", "**Energy** -  25(+1.96/s), **Cooldown** - 4, **Effect** - Charges the Oracle's Pulsar Beam, which does spell damage to ground units while active.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Oracle_(Legacy_of_the_Void)");
    return message.channel.send(oracleembed);
    }
    //begin Void Ray
    if (cmd ===`${prefix}voidray`||cmd ===`${prefix}chadray`||cmd ===`${prefix}void`){
        let voidembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Void Ray**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/1/1d/VoidRay_SC2_Rend1.jpg/revision/latest?cb=20090129011444")
        .addField("Construction", "**Built from:** Stargate")
        .addField("Resources", "**Minerals** - 250, **Vespene** - 100, **Supply** - 4, **Build Time** - 43")
        .addField("Defense", "**HP+Shields** - 150+100, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.5 (-1.4)")
        .addField("Offense","**Damage** - 6(+1 per upgrade), vs armored 4+6(+1 per upgrade) **Hitspeed** - 0.36, **Range** - 4+2, **DPS** - 16.8(+2.8 per upgrade), vs armored 28+28(+2.8 per upgrade) **Targets** - Air and Ground")
        .addField("Attributes", "**Mechanical, Armored, Air**")
        .addField("Misc.", "**Sight Range** - 10")
        .addField("Upgrades and Abilities","-")
        .addField("Prismatic Alignment","**Cooldown** - 43, **Duration** - 14.3, **Effect** - Realigns the Void Ray's Prismatic Beam to gain +6 damage vs. armored units for 14.3 seconds. This does not scale with upgrades.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Void_Ray_(Legacy_of_the_Void)");
    return message.channel.send(voidembed);
    }
    //begin Carrier
    if (cmd ===`${prefix}carrier`){
        let carrierembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Carrier**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/2/2c/Icon_Protoss_Carrier.jpg/revision/latest?cb=20160106180238")
        .addField("Construction", "**Built from:** Stargate, **Requires:** Fleet Beacon")
        .addField("Resources", "**Minerals** - 350(+15 per interceptor), **Vespene** - 250, **Supply** - 6, **Build Time** - 86")
        .addField("Defense", "**HP+Shields** - 250+150, **Armor** - 2(+1 per upgrade) **Movespeed** - 2.62")
        .addField("Offense","**Interceptor Count** - 8, see sc2-interceptor")
        .addField("Attributes", "**Mechanical, Armored, Massive, Air**")
        .addField("Misc.", "**Sight Range** - 10")
        .addField("Upgrades and Abilities","-")
        .addField("Graviton Catapult","**Researched from:** Fleet Beacon, **Minerals** - 150, **Vespene** - 150, **Time** - 80, **Effect** - The launch speed of the Interceptors is now increased. The first four interceptors are launched at a cooldown of .125, the last four at .25. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Carrier_(Legacy_of_the_Void)");
    return message.channel.send(carrierembed);
    }
    //begin Intercetpor
    if (cmd ===`${prefix}interceptor`){
        let carrierembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Interceptor**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/3/3b/Interceptor_SC2_Rend1.JPEG/revision/latest?cb=20110223005457")
        .addField("Construction", "**Built from:** Carrier")
        .addField("Resources", "**Minerals** - 15, **Vespene** - 0, **Supply** - 0, **Build Time** - 6")
        .addField("Defense", "**HP+Shields** - 40+40, **Armor** - 0(+1 per upgrade) **Movespeed** - 10.5")
        .addField("Offense","**Damage** - 5x2(+1x2 per upgrade), **Hitspeed** - 2.14, **Range** - 8+2, **DPS** -  4.7(+0.93 per upgrade) **Targets** - Air and Ground")
        .addField("Attributes", "**Mechanical, Light, Air**")
        .addField("Misc.", "**Sight Range** - 7")
        .addField("More Info", "https://liquipedia.net/starcraft2/Carrier_(Legacy_of_the_Void)");
    return message.channel.send(carrierembed);
    }
    //begin Tempest
    if (cmd ===`${prefix}tempest`){
        let tempestembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Tempest**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/a/a4/Icon_Protoss_Tempest.jpg/revision/latest?cb=20160106231047")
        .addField("Construction", "**Built from:** Stargate, **Requires:** Fleet Beacon")
        .addField("Resources", "**Minerals** - 300, **Vespene** - 200, **Supply** - 6, **Build Time** - 43")
        .addField("Defense", "**HP+Shields** - 300+150, **Armor** - 2(+1 per upgrade) **Movespeed** - 2.62")
        .addField("Offense 1","**Damage** - 30(+3 per upgrade), vs massive 52(+5 per upgrade) **Hitspeed** - 2.36, **Range** - 15, **DPS** - 12.73(+1.273 per upgrade), vs massive 22.05(+2.12 per upgrade) **Targets** - Air")
        .addField("Offense 2","**Damage** - 40(+4 per upgrade), **Hitspeed** - 2.36, **Range** - 10, **DPS** - 	16.97 (+1.697 per upgrade), **Targets** - Ground")
        .addField("Attributes", "**Mechanical, Armored, Massive, Air**")
        .addField("Misc.", "**Sight Range** - 12")
        .addField("More Info", "https://liquipedia.net/starcraft2/Tempest_(Legacy_of_the_Void)");
    return message.channel.send(tempestembed);
    }
    //begin Mothership
    if (cmd ===`${prefix}mothership`||cmd ===`${prefix}mamaship`){
        let mamaembed = new Discord.RichEmbed()
        .setDescription ("**Protoss Mothership**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/e/e1/Icon_Protoss_Mothership.jpg/revision/latest?cb=20160106180429")
        .addField("Construction", "**Built from:** Nexus, **Requires:** Fleet Beacon")
        .addField("Resources", "**Minerals** - 400, **Vespene** - 400, **Supply** - 8, **Build Time** - 114")
        .addField("Defense", "**HP+Shields** - 350+350, **Armor** - 2(+1 per upgrade) **Movespeed** - 2.62")
        .addField("Offense","**Damage** - 6x6(+1x6 per upgrade), **Hitspeed** - 1.58, **Range** - 7, **DPS** -  22.8(+3.78 per upgrade) **Targets** - Air and Ground")
        .addField("Attributes", "**Mechanical, Armored, Massive, Psionic, Air**")
        .addField("Misc.", "**Sight Range** - 14")
        .addField("Upgrades and Abilities","-")
        .addField("Cloaking Field","**Radius** - 5, **Effect** - The Mothership cloaks all nearby units and buildings.")
        .addField("Strategic Recall","**Energy** - 100, **Range** - Infinite, **Radius** - 6.5, **Channeling Time** - 4, **Effect** - Recalls all player units in the target area to the Mothership.")
        .addField("Time Warp","**Energy** - 100, **Radius** - 3.5, **Range** - 9, **Duration** - 11, **Effect** - After a 4-second delay, warps spacetime within the target area for 7 seconds. Enemy ground units within the field are slowed by 50%.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Mothership_(Legacy_of_the_Void)");
    return message.channel.send(mamaembed);
    }
//Begin Zerg Units
    //begin Larva
    if (cmd ===`${prefix}larva`){
        let larvaembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Larva**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/8/84/Icon_Zerg_Larva.jpg/revision/latest?cb=20160106233133")
        .addField("Construction", "**Built from:** Hatchery/Lair/Hive")
        .addField("Resources", "**Minerals** - 0, **Vespene** - 0, **Supply** - 0, **Build Time** - 11")
        .addField("Defense", "**HP** - 25, **Armor** - 10 **Movespeed** - 0.79")
        .addField("Production","**Can produce:** Drone, Overlord, Zergling x2, Roach, Hydralisk, Infestor, Swarm Host, Mutalisk, Corruptor, Viper, Ultralisk")
        .addField("Attributes", "**Biological, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 5")
        .addField("More Info", "https://liquipedia.net/starcraft2/Larva_(Legacy_of_the_Void)");
    return message.channel.send(larvaembed);
    }               
    //begin Drone
    if (cmd ===`${prefix}drone`){
        let droneembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Drone**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/d/d1/Icon_Zerg_Drone.jpg/revision/latest?cb=20160106233237")
        .addField("Construction", "**Built from:** Larva")
        .addField("Resources", "**Minerals** - 50, **Vespene** - 0, **Supply** - 1, **Build Time** - 12")
        .addField("Defense", "**HP** - 40, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.94")
        .addField("Offense","**Damage** - 5, **Hitspeed** - 1.07, **Range** - Melee, **DPS** - 4.67 **Targets** - Ground")
        .addField("Attributes", "**Biological, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 8, **Cargo Size** - 1")
        .addField("Upgrades and Abilities","-")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals** - 100, **Vespene** - 100, **Time** - 71, **Effect** - Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Drone_(Legacy_of_the_Void)");
    return message.channel.send(droneembed);
    }
    //begin Overlord
    if (cmd ===`${prefix}overlord`||cmd ===`${prefix}ovie`||cmd ===`${prefix}dropperlord`||cmd ===`${prefix}droplord`){
        let overlordembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Overlord**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/4/4c/Icon_Zerg_Overlord.jpg/revision/latest?cb=20160106233052")
        .addField("Construction", "**Built from:** Larva")
        .addField("Resources", "**Minerals** - 100, **Vespene** - 0, **Provides Supply** - 8, **Build Time** - 18")
        .addField("Defense", "**HP** - 200, **Armor** - 0(+1 per upgrade) **Movespeed** - 0.902(+1.728)")
        .addField("Attributes", "**Biological, Armored, Ground**")
        .addField("Misc.", "**Sight Range** - 11, **Cargo Capacity** - 8 (with Ventral Sacs)")
        .addField("Upgrades and Abilities","-")
        .addField("Pneumatized Carapace", "**Researched from:** Hatchery/Lair/Hive, **Minerals** - 100, **Vespene** - 100, **Time** - 43, **Effect** - Increases the movement speed of Overlords to 2.63")
        .addField("Mutate Ventral Sacs","**Requires:** Lair, **Minerals** - 25, **Vespene** - 25, **Time** - 12, **Effect** - Enables the Overlord to transport units.")
        .addField("Morph to Overseer","**Requires:** Lair, **Minerals** - 50, **Vespene** - 50, **Time** - 12, **Effect** - Morphs the selected Overlord into an Overseer.")
        .addField("Generate Creep","**Requires:** Lair, **Channeling Time** - 11, **Effect** - When selected, the Overlord will create Zerg creep beneath it, spreading out to a 2x2 area.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Overlord_(Legacy_of_the_Void)");
    return message.channel.send(overlordembed);
    }
    //begin Queen
    if (cmd ===`${prefix}queen`){
        let queenembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Queen**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/8/85/Icon_Zerg_Queen.jpg/revision/latest?cb=20160106233007")
        .addField("Construction", "**Built from:** Hatchery, **Requires:** Spawning Pool")
        .addField("Resources", "**Minerals** - 150, **Vespene** - 0, **Supply** - 2, **Build Time** - 36")
        .addField("Defense", "**HP** - 175, **Armor** - 1(+1 per upgrade) **Movespeed** - 1.31, on creep 3.5")
        .addField("Offense 1","**Damage** - 4x2(+1x2 per upgrade), **Hitspeed** - 0.71, **Range** - 5, **DPS** - 11.2(+2.8 per upgrade), **Targets** - Ground")
        .addField("Offense 2","**Damage** - 9(+1 per upgrade), **Hitspeed** - 0.71, **Range** - 8, **DPS** - 12.6(+1.4 per upgrade), **Targets** - Air")
        .addField("Attributes", "**Biological, Psionic, Ground**")
        .addField("Misc.", "**Sight Range** - 9, **Cargo Size** - 2")
        .addField("Upgrades and Abilities","-")
        .addField("Spawn Larva", "**Energy** - 25, **Range** - Melee, **Cooldown** - 1.8, **Duration** - 29, **Effect** - The Queen injects 3 Larva eggs into a Hatchery which after 29 seconds, hatch and 3 Larvae are ready to be used at the targeted Hatchery. If a Hatchery has more than 19 Larva, additional Larva will not be created. This will stack and queue if the target is already spawning additional larvae.")
        .addField("Spawn Creep Tumor", "**Energy** - 25, **Range** - Melee, **Duration** - 11, **Effect** - The Queen moves to and places a Creep Tumor at the targeted location. The tumor has 50 hit points and generates Creep. Each Creep Tumor can spawn one other Creep Tumor within a radius of 10.")
        .addField("Transfusion","**Energy** - 50, **Range** - 7, **Cooldown** - 1, **Targets** - Biological, **Effect** - The Queen heals a friendly, biological unit or building for 125 health.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals** - 100, **Vespene** - 100, **Time** - 71, **Effect** - Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Queen_(Legacy_of_the_Void)");
    return message.channel.send(queenembed);
    }
    //begin Zergling
    if (cmd ===`${prefix}zergling`||cmd ===`${prefix}ling`){
        let lingembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Zergling**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/a/ae/Icon_Zerg_Zergling.jpg/revision/latest?cb=20160106232911")
        .addField("Construction", "**Built from:** Larva, **Requires:** Spawning Pool")
        .addField("Resources", "**Minerals** - 25, **Vespene** - 0, **Supply** - 0.5, **Build Time** - 17")
        .addField("Defense", "**HP** - 35, **Armor** - 0(+1 per upgrade) **Movespeed** - 4.13(+2.45), on creep 5.37(+3.18)")
        .addField("Offense","**Damage** - 5(+1 per upgrade), **Hitspeed** - 0.497(-0.143), **Range** - Melee, **DPS** - 10(+2 per upgrade), with adrenal 14.3(+2.86), **Targets** - Ground")
        .addField("Attributes", "**Biological, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 8, **Cargo Size** - 1")
        .addField("Upgrades and Abilities","-")
        .addField("Metabolic Boost", "**Researched from:** Spawning Pool, **Minerals** - 100, **Vespene** - 100, **Time** - 93, **Effect** - Increases Zergling movement speed by 60% to 6.58(+2.45)")
        .addField("Adrenal Glands", "**Researched from:** Spawning Pool, **Requires:** Hive, **Minerals** - 200, **Vespene** - 200, **Time** - 93, **Effect** - Decreases Zergling attack cooldown to 0.35(-0.15)")
        .addField("Morph to Baneling","**Requires:** Baneling Nest, **Minerals** - 25, **Vespene** - 25, **Time** - 14, **Effect** - Morphs a Zergling into a Baneling.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals** - 100, **Vespene** - 100, **Time** - 71, **Effect** - Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Zergling_(Legacy_of_the_Void)");
    return message.channel.send(lingembed);
    }
    //begin Baneling
    if (cmd ===`${prefix}baneling`||cmd ===`${prefix}bling`||cmd ===`${prefix}bane`){
        let baneembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Baneling**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/8/81/Icon_Zerg_Baneling.jpg/revision/latest?cb=20160106232838")
        .addField("Construction", "**Morphed from:** Zergling, **Requires:** Baneling")
        .addField("Resources", "**Minerals** - 25, **Vespene** - 25, **Supply** - 0.5, **Build Time** - 14")
        .addField("Defense", "**HP** - 30+5, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.5(+0.63), on creep 4.55(+0.82)")
        .addField("Cocoon Defense", "**HP** - 50, **Armor** - 0(+1 per upgrade), **Sight Range** - 5")
        .addField("Offense 1","**Damage** - 20(+2 per upgrade), vs light 35(+4 per upgrade) **Range** - 2.2, **Targets** - Ground")
        .addField("Offense 2","**Damage** - 80(+5 per upgrade), **Range** - 2.2, **Targets** - Buildings")
        .addField("Attributes", "**Biological, Ground**")
        .addField("Misc.", "**Sight Range** - 8, **Cargo Size** - 2")
        .addField("Upgrades and Abilities","-")
        .addField("Centrifugal Hooks", "**Researched from:** Baneling Nest, **Requires:** Lair, **Minerals** - 150, **Vespene** - 150, **Time** - 79, **Effect** - Increases Baneling movement speed to 4.13(+1.24) and hp to 35(+5). Banelings will roll instead of running.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals** - 100, **Vespene** - 100, **Time** - 71, **Effect** - Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Baneling_(Legacy_of_the_Void)");
    return message.channel.send(baneembed);
    }
    //begin Roach
    if (cmd ===`${prefix}roach`){
        let roachembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Roach**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/7/73/Icon_Zerg_Roach.jpg/revision/latest?cb=20160106232950")
        .addField("Construction", "**Built from:** Larva, **Requires:** Roach Warren")
        .addField("Resources", "**Minerals** - 75, **Vespene** - 25, **Supply** - 2, **Build Time** - 19")
        .addField("Defense", "**HP** - 145, **Armor** - 1(+1 per upgrade) **Movespeed** - 3.15(+1.05), on creep 4.09(+1.36), burrowed 2.8(+1.6)")
        .addField("Offense","**Damage** - 16(+2 per upgrade), **Hitspeed** - 1.43, **Range** - 4, **DPS** - 11.2(+1.4 per upgrade), **Targets** - Ground")
        .addField("Attributes", "**Biological, Armored, Ground**")
        .addField("Misc.", "**Sight Range** - 9, **Cargo Size** - 2")
        .addField("Upgrades and Abilities","-")
        .addField("Glial Reconstitution", "**Researched from:** Roach Warren, **Requires:** Lair, **Minerals** - 100, **Vespene** - 100, **Time** - 79, **Effect** - Increases Roach movement speed to 4.2(+1.05) while unburrowed, and to 4.4 while burrowed under creep.")
        .addField("Tunneling Claws", "**Researched from:** Roach Warren, **Requires:** Lair, **Minerals** - 150, **Vespene** - 150, **Time** - 79, **Effect** - Gives Roaches the ability to move while burrowed at a speed of 2.8 and increases the health regeneration rate of Roaches to 14 HP/sec below ground.")
        .addField("Rapid Regeneration","**Effect** - While burrowed, the Roach regenerates its health at an extremely fast rate of 7 hit points per second.")
        .addField("Morph to Ravager","**Minerals** - 25, **Vespene** - 75, **Supply** - 1, **Time** - 9, **Effect** - Morphs a Roach into a Ravager.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals** - 100, **Vespene** - 100, **Time** - 71, **Effect** - Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Roach_(Legacy_of_the_Void)");
    return message.channel.send(roachembed);
    }
    //begin Ravager
    if (cmd ===`${prefix}ravager`){
        let ravagerembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Ravager**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/b/b7/Icon_Zerg_Ravager.jpg/revision/latest?cb=20160106234631")
        .addField("Construction", "**Morphed from:** Roach")
        .addField("Resources", "**Minerals** - 25, **Vespene** - 75, **Supply** - 3, **Build Time** - 9")
        .addField("Defense", "**HP** - 120, **Armor** - 1(+1 per upgrade) **Movespeed** - 3.85, on creep 5.0")
        .addField("Cocoon Defense","**HP** - 100, **Armor** - 5")
        .addField("Offense","**Damage** - 16(+2 per upgrade), **Hitspeed** - 1.14, **Range** - 6, **DPS** - 14.04(+1.75 per upgrade), **Targets** - Ground")
        .addField("Attributes", "**Biological, Ground**")
        .addField("Misc.", "**Sight Range** - 9, **Cargo Size** - 4")
        .addField("Upgrades and Abilities","-")
        .addField("Corrosive Bile", "**Cooldown** - 7, **Range** - 9, **Delay** - 2.5**Effect** - Launch a missile at the target location, dealing 60 damage to all units and destroying all Force Fields in the area upon impact.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals** - 100, **Vespene** - 100, **Time** - 71, **Effect** - Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Ravager");
    return message.channel.send(ravagerembed);
    }
    //begin Overseer
    if (cmd ===`${prefix}overseer`||cmd ===`${prefix}flappynajib`){
        let seerembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Overseer**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/e/e4/Icon_Zerg_Overseer.jpg/revision/latest?cb=20160106233030")
        .addField("Construction", "**Morphed from:** Overlord, **Requires:** Lair")
        .addField("Resources", "**Minerals** - 50, **Vespene** - 50, **Provides Supply** - 8, **Build Time** - 12")
        .addField("Defense", "**HP** - 200, **Armor** - 1(+1 per upgrade) **Movespeed** - 2.62(+2.1)")
        .addField("Attributes", "**Biological, Armored, Detector, Air**")
        .addField("Misc.", "**Sight Range** - 11(+2.75), **Cargo Size** - 2")
        .addField("Upgrades and Abilities","-")
        .addField("Pneumatized Carapace", "**Researched from:** Hatchery/Lair/Hive, **Minerals** - 100, **Vespene** - 100, **Time** - 43, **Effect** - Increases the movement speed of Overseers to 3.375")
        .addField("Spawn Changeling", "**Energy** - 50, **Range** - Melee, **Duration** - 150, **Effect** - The Overseer can spawn a Changeling, which is a small Zerg unit. The Changeling can move freely and morph to take the shape of an enemy unit.")
        .addField("Contaminate", "**Energy** - 125, **Range** - 3, **Duration** - 30, **Effect** - The Overseer covers an enemy structure in slime. The structure will be unable to train units or research upgrades for 30 seconds.") 
        .addField("Oversight", "**Effect** - Grants the Overseer 25% wider vision, but removes its ability to move. This ability can be canceled after activation.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Overseer_(Legacy_of_the_Void)");
    return message.channel.send(seerembed);
    }
    //begin Changeling
    if (cmd ===`${prefix}changeling`){
        let changeembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Changeling**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/a/a4/Icon_Zerg_Changeling.jpg/revision/latest?cb=20160106232716")
        .addField("Construction", "**Spawned from:** Overseer")
        .addField("Resources", "**Energy** - 50")
        .addField("Defense", "**HP** - 5, **Armor** - 0 **Movespeed** - 3.15, (4.13 as Zergling)")
        .addField("Attributes", "**Biological, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 9, (8 as zergling)")
        .addField("Upgrades and Abilities","-")
        .addField("Disguise", "**Range** - 12, **Effect** - The Changeling will transform into a basic unit of the enemy that is near (Marine, Zergling, Zealot). The Changeling will also copy the upgraded models of those units (Combat Shield, Metabolic Boost).")
        .addField("More Info", "https://liquipedia.net/starcraft2/Changeling_(Legacy_of_the_Void)");
    return message.channel.send(changeembed);
    }
    //begin Hydralisk
    if (cmd ===`${prefix}hydralisk`||cmd ===`${prefix}hydra`){
        let hydraembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Hydralisk**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/4/42/Icon_Zerg_Hydralisk.jpg/revision/latest?cb=20160106233216")
        .addField("Construction", "**Built from:** Larva, **Requires:** Hydralisk Den")
        .addField("Resources", "**Minerals** - 100, **Vespene** - 50, **Supply** - 2, **Build Time** - 24")
        .addField("Defense", "**HP** - 90, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.15(+0.78), on creep 4.09(+1.02)")
        .addField("Offense","**Damage** - 12(+1 per upgrade), **Hitspeed** - 0.54, **Range** - 5(+1), **DPS** - 22.4(+1.87 per upgrade), **Targets** - Air and Ground")
        .addField("Attributes", "**Biological, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 9, **Cargo Size** - 2")
        .addField("Upgrades and Abilities","-")
        .addField("Muscular Augments", "**Researched from:** Hydralisk Den, **Minerals** - 100, **Vespene** - 100, **Time** - 71, **Effect** - Hydralisks move 25% faster speed both on and off of Creep. ")
        .addField("Grooved Spines", "**Researched from:** Hydralisk Den, **Minerals** - 100, **Vespene** - 100, **Time** - 71, **Effect** - Increases the attack range of Hydralisks by +1.")
        .addField("Morph to Lurker","**Requires:** Lurker Den, **Minerals** - 50, **Vespene** - 100, **Supply** - 1, **Time** - 15, **Effect** - Morphs a Hydralisk into a Lurker. ")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals** - 100, **Vespene** - 100, **Time** - 71, **Effect** - Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Hydralisk_(Legacy_of_the_Void)");
    return message.channel.send(hydraembed);
    }
    //begin Lurker
    if (cmd ===`${prefix}lurker`){
        let lurkerembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Lurker**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/d/d7/Icon_Zerg_Lurker.jpg/revision/latest?cb=20160106234656")
        .addField("Construction", "**Morphed from:** Hydralisk, **Requires:** Lurker Den")
        .addField("Resources", "**Minerals** - 50, **Vespene** - 100, **Supply** - 3, **Build Time** - 18")
        .addField("Defense", "**HP** - 200, **Armor** - 1(+1 per upgrade) **Movespeed** - 4.13(+0.413), on creep 5.37(+0.537)")
        .addField("Cocoon Defense","**HP** - 100, **Armor** - 1")
        .addField("Offense","**Damage** - 20(+2 per upgrade), vs armored 30(+3 per upgrade) **Hitspeed** - 1.43, **Range** - 9, **DPS** - 14.0(+1 per upgrade), vs armored 21(+1.7 per upgrade), **Targets** - Ground")
        .addField("Attributes", "**Biological, Armored, Ground**")
        .addField("Misc.", "**Sight Range** - 9, **Cargo Size** - 4")
        .addField("Upgrades and Abilities","-")
        .addField("Adaptive Talons", "**Researched from:** Lurker Den, **Requires:** Hive, **Minerals** - 150, **Vespene** - 150, **Time** - 54, **Effect** - Reduces the time Lurkers take to burrow from 2 to 0.7 and increases movement speed by 10%.")
        .addField("Burrow","**Effect** - Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Lurker");
    return message.channel.send(lurkerembed);
    }
    //begin Mutalisk
    if (cmd ===`${prefix}mutalisk`||cmd ===`${prefix}muta`||cmd ===`${prefix}mutmut`||cmd ===`${prefix}muttmutt`||cmd ===`${prefix}flappybird`){
        let mutaembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Mutalisk**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/f/fd/Icon_Zerg_Mutalisk.jpg/revision/latest?cb=20160106233117")
        .addField("Construction", "**Built from:** Larva, **Requires:** Spire")
        .addField("Resources", "**Minerals** - 100, **Vespene** - 100, **Supply** - 2, **Build Time** - 24")
        .addField("Defense", "**HP** - 120, **Armor** - 0(+1 per upgrade) **Movespeed** - 5.6")
        .addField("Offense","**Damage** - 9(+1 per upgrade) + 3(+0.3) + 1(+0.1), **Hitspeed** - 1.09, **Range** - 3, **DPS** - 8.26(+0.92 per upgrade) + 2.75(+0.31) + 0.92(+0.1), **Targets** - Air and Ground")
        .addField("Attributes", "**Biological, Light, Air**")
        .addField("Misc.", "**Sight Range** - 11")
        .addField("Upgrades and Abilities","-")
        .addField("Tissue Regeneration", "**Effect** - Mutalisk health regeneration rate is accelerated to 1.4 HP/second")
        .addField("More Info", "https://liquipedia.net/starcraft2/Mutalisk_(Legacy_of_the_Void)");
    return message.channel.send(mutaembed);
    }
    //begin Corruptor
    if (cmd ===`${prefix}corruptor`){
        let corrembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Corruptor**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/d/d0/Icon_Zerg_Corruptor.jpg/revision/latest?cb=20160106233308")
        .addField("Construction", "**Built from:** Larva, **Requires:** Spire")
        .addField("Resources", "**Minerals** - 150, **Vespene** - 100, **Supply** - 2, **Build Time** - 29")
        .addField("Defense", "**HP** - 120, **Armor** - 0(+1 per upgrade) **Movespeed** - 4.725")
        .addField("Offense","**Damage** - 14(+1 per upgrade), vs massive 20(+2 per upgrade) **Hitspeed** - 1.36, **Range** - 6, **DPS** - 10.29(+0.74 per upgrade), vs massive 14.69(+1.48 per upgrade), **Targets** - Air")
        .addField("Attributes", "**Biological, Armored, Air**")
        .addField("Misc.", "**Sight Range** - 10")
        .addField("Upgrades and Abilities","-")
        .addField("Caustic Spray", "**Cooldown** - 32, **Duration** - Channeled, **Effect** - The Corruptor emits a stream of acid that deals 7 damage per second for 4.3 seconds, then increases to 35 damage per second.")
        .addField("Morph to Brood Lord","**Requires:** Greater Spire, **Minerals** - 150, **Vespene** - 150, **Supply** - 2, **Time** - 24, **Effect** - Morphs a Corruptor into a Brood Lord. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Corruptor_(Legacy_of_the_Void)");
    return message.channel.send(corrembed);
    }
    //begin Swarm Host
    if (cmd ===`${prefix}swarmhost`||cmd ===`${prefix}sh`){
        let lurkerembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Swarm Host**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/b/b2/Icon_Zerg_Swarm_Host.jpg/revision/latest?cb=20160106234810")
        .addField("Construction", "**Built from:** Larva, **Requires:** Infestation Pit")
        .addField("Resources", "**Minerals** - 100, **Vespene** - 75, **Supply** - 3, **Build Time** - 29")
        .addField("Defense", "**HP** - 160, **Armor** - 1(+1 per upgrade) **Movespeed** - 3.15, on creep 5.37")
        .addField("Attributes", "**Biological, Armored, Ground**")
        .addField("Misc.", "**Sight Range** - 10, **Cargo Space** - 4")
        .addField("Upgrades and Abilities","-")
        .addField("Spawn Locusts", "**Cooldown** - 43, **Duration** - 18, **Effect** - Spawns 2 Locusts with an 18-second timed life.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals** - 100, **Vespene** - 100, **Time** - 71, **Effect** - Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Swarm_Host_(Legacy_of_the_Void)");
    return message.channel.send(lurkerembed);
    }
    //begin Locust
    if (cmd ===`${prefix}locust`){
        let locustembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Locust**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/0/07/Locust_SC2-HotS_Rend1.jpg/revision/latest?cb=20140629130806")
        .addField("Construction", "**Spawned From from:** Swarm Host")
        .addField("Resources", "**Build Time** - 5, **Lifespan** - 18")
        .addField("Defense", "**HP** - 50, **Armor** - 0(+1 per upgrade) **Movespeed** - 2.62, on creep 3.66")
        .addField("Offense","**Damage** - 10(+1 per upgrade), **Hitspeed** - 0.43, **Range** - 6, **DPS** - 23.25(+2.33 per upgrade), **Targets** - Ground")
        .addField("Attributes", "**Biological, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 6")
        .addField("Upgrades and Abilities","-")
        .addField("Swoop", "**Effect** - Orders the Locust to land at the targetted location, allowing it to attack.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Locust_(Legacy_of_the_Void)");
    return message.channel.send(locustembed);
    }
    //begin Infestor
    if (cmd ===`${prefix}infestor`||cmd ===`${prefix}derpfestor`){
        let infestorembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Infestor**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/c/c1/Icon_Zerg_Infestor.jpg/revision/latest?cb=20160106233153")
        .addField("Construction", "**Built from:** Larva, **Requires:** Infestation Pit")
        .addField("Resources", "**Minerals** - 100, **Vespene** - 150, **Supply** - 2, **Build Time** - 36")
        .addField("Defense", "**HP** - 90, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.15, on creep 4.01")
        .addField("Attributes", "**Biological, Armored, Psionic, Ground**")
        .addField("Misc.", "**Sight Range** - 10, **Cargo Size** - 2")
        .addField("Upgrades and Abilities","-")
        .addField("Pathogen Glands", "**Researched from:** Infestation Pit, **Minerals** - 150, **Vespene** - 150, **Time** - 57, **Effect** - Increases the starting energy of Infestors by 25.")
        .addField("Neural Parasite", "**Researched from:** Infestation Pit, **Minerals** - 150, **Vespene** - 150, **Time** - 79, **Energy** - 100, **Range** - 9 (14), **Duration** - 11,**Effect** - The Infestor temporarily takes control of target enemy unit. The player can cancel this ability, or it will automatically cancel if the controlling Infestor is killed or the targeted unit is moved out of 14 range.")
        .addField("Fungal Growth", "**Energy** - 50, **Range** - Melee, **Duration** - 150, **Effect** - The Overseer can spawn a Changeling, which is a small Zerg unit. The Changeling can move freely and morph to take the shape of an enemy unit.")
        .addField("Contaminate", "**Energy** - 75, **Range** - 10, **Duration** - 3, **Radius** - 2.25, **Effect** - Target units take 30 damage over 3 seconds and have movement speed reduced by 75%. Reveals cloaked and burrowed units.") 
        .addField("Infested Terran", "**Energy** - 25, **Range** - 7, **Duration** - 5+21, **Effect** - Spawns an Infested Swarm Egg, which takes 5 seconds to hatch and has 70 health. An Infested Terran has 50 health, lives for 21 seconds and has a ranged attack.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals** - 100, **Vespene** - 100, **Time** - 71, **Effect** - Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("Burrow Move","**Effect** - Can move while burrowed")
        .addField("More Info", "https://liquipedia.net/starcraft2/Infestor_(Legacy_of_the_Void)");
    return message.channel.send(infestorembed);
    }
    //begin Infested Terran
    if (cmd ===`${prefix}infestedterran`||cmd ===`${prefix}infested`){
        let infestedembed = new Discord.RichEmbed()
        .setDescription ("**Infested Terran**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/7/7a/Icon_Zerg_Infested_Terran.jpg/revision/latest?cb=20160106232746")
        .addField("Construction", "**Spawned from:** Infestor")
        .addField("Resources", "**Energy** - 25, **Build Time** - 3, **Lifespan** - 21")
        .addField("Defense", "**HP** - 50, **Armor** - 0(+1 per upgrade) **Movespeed** - 1.31, on creep 1.71")
        .addField("Egg Defense","**HP** - 70, **Armor** - 2")
        .addField("Offense 1","**Damage** - 6(+1 per upgrade), **Hitspeed** - 0.61, **Range** - 5, **DPS** - 10(+1.6 per upgrade), **Targets** - Ground")
        .addField("Offense 2","**Damage** - 14(+1 per upgrade), **Hitspeed** - 0.95, **Range** - 6, **DPS** - 14.7(+1.1 per upgrade), **Targets** - Air")
        .addField("Attributes", "**Biological, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 9")
        .addField("Upgrades and Abilities","-")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals** - 100, **Vespene** - 100, **Time** - 71, **Effect** - Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Infested_Terran_(Legacy_of_the_Void)");
    return message.channel.send(infestedembed);
    }
    //begin Broodling
    if (cmd ===`${prefix}broodling`){
        let broodlingembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Broodling**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/4/46/Icon_Zerg_Broodling.jpg/revision/latest?cb=20160106232656")
        .addField("Construction", "**Spawned from:** Brood Lord, any structure except Spine and Spore Crawler")
        .addField("Resources", "**Lifespan** - 8")
        .addField("Defense", "**HP** - 30, **Armor** - 0(+1 per upgrade) **Movespeed** - 5.37")
        .addField("Offense","**Damage** - 4(+1 per upgrade), **Hitspeed** - 0.46, **Range** - Melee, **DPS** - 8.7(+2.17 per upgrade), **Targets** - Ground")
        .addField("Attributes", "**Biological, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 7")
        .addField("More Info", "https://liquipedia.net/starcraft2/Broodling_(Legacy_of_the_Void)");
    return message.channel.send(broodlingembed);
    }
    //begin Ultralisk
    if (cmd ===`${prefix}ultralisk`||cmd ===`${prefix}ultra`){
        let ultraembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Ultralisk**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/3/37/Icon_Zerg_Ultralisk.jpg/revision/latest?cb=20160106232927")
        .addField("Construction", "**Built from:** Larva, **Requires:** Ultralisk Cavern")
        .addField("Resources", "**Minerals** - 300, **Vespene** - 200, **Supply** - 6, **Build Time** - 39")
        .addField("Defense", "**HP** - 500, **Armor** - 2+2(+1 per upgrade) **Movespeed** - 4.13, on creep 5.37")
        .addField("Offense","**Damage** - 35(+3 per upgrade), splash 12(+1 per upgrade), **Hitspeed** - 0.61, **Range** - Melee, **DPS** - 57.38(+4.9 per upgrade), **Targets** - Ground")
        .addField("Attributes", "**Biological, Armored, Massive, Ground**")
        .addField("Misc.", "**Sight Range** - 9, **Cargo Size** - 8")
        .addField("Upgrades and Abilities","-")
        .addField("Chitinous Plating", "**Researched from:** Ultralisk Cavern, **Minerals** - 150, **Vespene** - 150, **Time** - 79, **Effect** - This upgrade increases the armor of all Ultralisks by 2. ")
        .addField("Frenzied", "**Effect** - Zerg unit is immune to snare, stun, mind control, and movement altering effects.")
        .addField("Burrow","**Researched from:** Hatchery/Lair/Hive, **Minerals** - 100, **Vespene** - 100, **Time** - 71, **Effect** - Enables all Zerg ground units to use the Burrow ability. Burrow allows a unit to take cover underground, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Ultralisk_(Legacy_of_the_Void)");
    return message.channel.send(ultraembed);
    }
    //begin Brood Lord
    if (cmd ===`${prefix}broodlord`||cmd ===`${prefix}brood`||cmd ===`${prefix}blord`||cmd ===`${prefix}bl`){
        let broodembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Brood Lord**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/2/2b/Icon_Zerg_Brood_Lord.jpg/revision/latest?cb=20160106233254")
        .addField("Construction", "**Morphed from:** Corruptor, **Requires:** Greater Spire")
        .addField("Resources", "**Minerals** - 150, **Vespene** - 150, **Supply** - 4, **Build Time** - 23")
        .addField("Defense", "**HP** - 225, **Armor** - 1(+1 per upgrade) **Movespeed** - 1.97")
        .addField("Offense","**Damage** - 20(+2 per upgrade), **Hitspeed** - 1.79, **Range** - 10, **DPS** - 11.2(+1.1 per upgrade), **Targets** - Ground")
        .addField("Attributes", "**Biological, Armored, Massive, Air**")
        .addField("Misc.", "**Sight Range** - 12")
        .addField("Upgrades and Abilities","-")
        .addField("Swarm Seeds", "**Effect** - Spawns Broodlings upon each of the Brood Lord's attacks.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Brood_Lord_(Legacy_of_the_Void)");
    return message.channel.send(broodembed);
    }
    //begin Viper
    if (cmd ===`${prefix}viper`){
        let viperembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Viper**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/3/3c/Icon_Zerg_Viper.jpg/revision/latest?cb=20160106234746")
        .addField("Construction", "**Built from:** Larva, **Requires:** Hive")
        .addField("Resources", "**Minerals** - 100, **Vespene** - 200, **Supply** - 3, **Build Time** - 29")
        .addField("Defense", "**HP** - 150, **Armor** - 1(+1 per upgrade) **Movespeed** - 4.13")
        .addField("Attributes", "**Biological, Armored, Air**")
        .addField("Misc.", "**Sight Range** - 11")
        .addField("Upgrades and Abilities","-")
        .addField("Blinding Cloud", "**Energy** - 100, **Range** - 11, **Radius** - 2, **Duration** - 5.71, **Effect** - Creates a cloud for 5.71 seconds that reduces attack range of ground units and structures underneath to melee range.")
        .addField("Abduct", "**Energy** - 75, **Range** - 9, **Duration** - 10, **Effect** - Pulls a target unit to the location of the Viper.")
        .addField("Parasitic Bomb", "**Energy** - 125, **Range** - 8, **Radius** - 3, **Duration** - 7, **Effect** - Creates a parasitic cloud that deals 120 damage over 7 seconds to the target and enemy air units nearby. If the target dies, the cloud remains in the air where the enemy died until it expires.")
        .addField("Consume", "**Cooldown** - 1, **Range** - 7, **Duration** - 14, **Effect** - Targets friendly structure (except Creep Tumor) and consumes 200 life over 14 seconds converting the damage dealt into 50 energy.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Viper_(Legacy_of_the_Void)");
    return message.channel.send(viperembed);
    }
//Begin Terran Buildings
    //Begin Command Center
    if (cmd ===`${prefix}commandcenter`||cmd ===`${prefix}cc`){
        let commandembed = new Discord.RichEmbed()
        .setDescription ("**Terran Command Center**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/9/9e/CommandCenter_SC2_Icon1.jpg/revision/latest?cb=20160107024135")
        .addField("Resources", "**Minerals** - 400, **Vespene** - 0, **Provides Supply** - 15, **Build Time** - 71")
        .addField("Defense", "**HP** - 1500, **Armor** - 1(+2)")
        .addField("Produces", "SCV")
        .addField("Attributes", "**Mechanical, Armored, Structure**")
        .addField("Misc.", "**Cargo Capacity** - 5(+5), only SCVs")
        .addField("Upgrades and Abilities","-")
        .addField("Lift off", "**Effect** - Lifts off a building, making it airborne and mobile. ")
        .addField("Neosteel Frame", "**Researched from:** Engineering Bay, **Minerals** - 100, **Vespene** - 100, **Time** - 79, **Effect** - Increases the cargo space of a Bunker by 2 and the load space of a Command Center or Planetary Fortress by 5. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Command_Center_(Legacy_of_the_Void)");
    return message.channel.send(commandembed);
    }
    //Begin Orbital Command
    if (cmd ===`${prefix}orbitalcommand`||cmd ===`${prefix}orbital`){
        let orbitalembed = new Discord.RichEmbed()
        .setDescription ("**Terran Orbital Command**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/c/ca/OrbitalCommand_SC2_Icon1.jpg/revision/latest?cb=20160107024229")
        .addField("Resources", "**Upgraded from:** Command Center, **Requires:** Barracks, **Minerals** - 150, **Vespene** - 0, **Provides Supply** - 15, **Build Time** - 25")
        .addField("Defense", "**HP** - 1500, **Armor** - 1(+2)")
        .addField("Produces", "SCV")
        .addField("Attributes", "**Mechanical, Armored, Structure**")
        .addField("Upgrades and Abilities","-")
        .addField("Lift off", "**Effect** - Lifts off a building, making it airborne and mobile. ")
        .addField("Calldown: MULE", "**Energy** - 50, **Effect** - The Orbital Command calls down a MULE via Drop Pods. Mules can gather minerals at a faster rate than SCVs, and last for 64 seconds. One MULE and one SCV gather from the same mineral patch simultaneously.")
        .addField("Calldown: Extra Supplies","**Energy** - 50, **Effect** - The Orbital Command calls down additional supplies which permanently increase a Supply Depot's supply limit by 8.")
        .addField("Scanner Sweep","**Energy** - 50, **Radius** - 13, **Duration** - 9, **Effect** - The Orbital Command scans a target location on the map revealing cloaked, burrowed or hallucinated units temporarily.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Orbital_Command_(Legacy_of_the_Void)");
    return message.channel.send(orbitalembed);
    }
    //Begin Planetary Fortress
    if (cmd ===`${prefix}planetaryfortress`||cmd ===`${prefix}planetary`||cmd ===`${prefix}pf`){
        let pfembed = new Discord.RichEmbed()
        .setDescription ("**Terran Planetary Fortress**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/9/90/PlanetaryFortress_SC2_Icon1.jpg/revision/latest?cb=20160107024345")
        .addField("Resources", "**Upgraded from:** Command Center, **Requires:** Engineering Bay, **Minerals** - 150, **Vespene** - 150, **Provides Supply** - 15, **Build Time** - 26")
        .addField("Defense", "**HP** - 1500, **Armor** - 3(+2)")
        .addField("Offense", "**Damage** - 40, **Hitspeed** - 1.43, **Range** - 6+1, **DPS** - 28, **Targets** - Ground")
        .addField("Produces", "SCV")
        .addField("Attributes", "**Mechanical, Armored, Structure**")
        .addField("Misc.", "**Cargo Capacity** - 5(+5), only SCVs")
        .addField("Upgrades and Abilities","-")
        .addField("Hi-Sec Auto Tracking", "**Researched from:** Engineering Bay, **Minerals** - 100, **Vespene** - 100, **Time** - 57, **Effect** - Adds +1 attack range to Auto-Turrets, Missile Turrets, Point Defense Drones, and Planetary Fortresses. ")
        .addField("Neosteel Frame", "**Researched from:** Engineering Bay, **Minerals** - 100, **Vespene** - 100, **Time** - 79, **Effect** - Increases the cargo space of a Bunker by 2 and the load space of a Command Center or Planetary Fortress by 5. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Planetary_Fortress_(Legacy_of_the_Void)");
    return message.channel.send(pfembed);
    }
    //Begin Supply Depot
    if (cmd ===`${prefix}supplydepot`||cmd ===`${prefix}depot`||cmd ===`${prefix}supply`){
        let depotembed = new Discord.RichEmbed()
        .setDescription ("**Terran Supply Depot**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/0/09/SupplyDepot_SC2_Icon1.jpg/revision/latest?cb=20160107024834")
        .addField("Resources", "**Minerals** - 100, **Vespene** - 0, **Provides Supply** - 8, **Build Time** - 21")
        .addField("Defense", "**HP** - 400, **Armor** - 1(+2)")
        .addField("Attributes", "**Mechanical, Armored, Structure**")
        .addField("Upgrades and Abilities","-")
        .addField("Lower/Raise", "**Effect** - Lowers/Raises the Supply Depot, allowing/preventing ground units to move accross it. If multiple Supply Depots with different states are selected, the first selected determines whether all would lower or raise.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Supply_Depot_(Legacy_of_the_Void)");
    return message.channel.send(depotembed);
    }
    //Begin Refinery
    if (cmd ===`${prefix}refinery`){
        let refineryembed = new Discord.RichEmbed()
        .setDescription ("**Terran Refinery**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/9/9e/Refinery_SC2_Icon1.jpg/revision/latest?cb=20160107024701")
        .addField("Resources", "**Minerals** - 75, **Vespene** - 0, **Build Time** - 21, **Must be built on a Vespene Geyser**")
        .addField("Defense", "**HP** - 500, **Armor** - 1(+2)")
        .addField("Attributes", "**Mechanical, Armored, Structure**")
        .addField("More Info", "https://liquipedia.net/starcraft2/Refinery_(Legacy_of_the_Void)");
    return message.channel.send(refineryembed);
    }
    //Begin Barracks
    if (cmd ===`${prefix}barracks`||cmd ===`${prefix}rax`){
        let commandembed = new Discord.RichEmbed()
        .setDescription ("**Terran Barracks**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/4/4b/Barracks_SC2_Icon1.jpg/revision/latest?cb=20160107024033")
        .addField("Resources", "**Requires:** Supply Depot, **Minerals** - 150, **Vespene** - 0, **Build Time** - 46")
        .addField("Defense", "**HP** - 1000, **Armor** - 1(+2)")
        .addField("Produces", "**By default** - Marine, Reaper, **with Tech Lab** - Marauder, **with Tech Lab and Ghost Academy** - Ghost")
        .addField("Attributes", "**Mechanical, Armored, Structure**")
        .addField("Upgrades and Abilities","-")
        .addField("Lift off", "**Effect** - Lifts off a building, making it airborne and mobile. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Barracks_(Legacy_of_the_Void)");
    return message.channel.send(commandembed);
    }
    //Begin Engineering Bay
    if (cmd ===`${prefix}engineeringbay`||cmd ===`${prefix}ebay`||cmd ===`${prefix}engiebay`||cmd ===`${prefix}engie`){
        let engieembed = new Discord.RichEmbed()
        .setDescription ("**Terran Engineering Bay**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/7/7e/EngineeringBay_SC2_Icon1.jpg/revision/latest?cb=20160107024456")
        .addField("Resources", "**Requires:** Command Center, **Minerals** - 125, **Vespene** - 0, **Build Time** - 25")
        .addField("Defense", "**HP** - 850, **Armor** - 1(+2)")
        .addField("Attributes", "**Mechanical, Armored, Structure**")
        .addField("Upgrades and Abilities","-")
        .addField("Note", "Infantry units include Marines, Reapers, Marauders, Ghosts, and SCVs (armor upgrades only)")
        .addField("Infantry Weapons Level 1", "**Minerals** - 100, **Vespene** - 100, **Time** - 114, **Effect** - Increase the damage of Terran infantry units. ")
        .addField("Infantry Weapons Level 2", "**Requires:** Armory, **Minerals** - 175, **Vespene** - 175, **Time** - 136, **Effect** - Increase the damage of Terran infantry units. ")
        .addField("Infantry Weapons Level 3", "**Requires:** Armory, **Minerals** - 250, **Vespene** - 250, **Time** - 157, **Effect** - Increase the damage of Terran infantry units. ")
        .addField("Infantry Armor Level 1", "**Minerals** - 100, **Vespene** - 100, **Time** - 114, **Effect** - Increase the armor of Terran infantry units. ")
        .addField("Infantry Armor Level 2", "**Requires:** Armory, **Minerals** - 175, **Vespene** - 175, **Time** - 136, **Effect** - Increase the armor of Terran infantry units. ")
        .addField("Infantry Armor Level 3", "**Requires:** Armory, **Minerals** - 250, **Vespene** - 250, **Time** - 157, **Effect** - Increase the armor of Terran infantry units. ")
        .addField("Hi-Sec Auto Tracking", "**Minerals** - 100, **Vespene** - 100, **Time** - 57, **Effect** - Adds +1 attack range to Auto-Turrets, Missile Turrets, Point Defense Drones, and Planetary Fortresses. ")
        .addField("Structure Armor", "**Minerals** - 100, **Vespene** - 100, **Time** - 79, **Effect** - Increases the armor of the Point Defense Drone, Auto-Turret, Missile Turret, Planetary Fortress, and all other Terran structures by 2. ")
        .addField("Neosteel Frame", "**Minerals** - 100, **Vespene** - 100, **Time** - 100, **Effect** - Increases the cargo space of a Bunker by 2 and the load space of a Command Center or Planetary Fortress by 5. ")
        .addField("More Info", "https://liquipedia.net/starcraft2/Engineering_Bay_(Legacy_of_the_Void)");
    return message.channel.send(engieembed);
    }
}),
bot.login(process.env.token);



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
        .addField("How to Use SC2 bot", "Type sc2-unit to see info on that unit. For example, sc2-marine will give you that statistics for the marine. Use only lowercase letters, no spaces.")
        .addField("Support", "Contact @RoyalAlchemist#9802 for questions, comments, and suggestions.")
        .addField("Credits", "All unit stats take from https://liquipedia.net/starcraft2, all images taken from the SC2 wikia");
    return message.channel.send(botembed);
    }
//begin Joke command
    if (cmd === `${prefix}joke`){
        var joke = Math.floor((Math.random() * 15) + 1);
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
        .addField("Misc.", "**Sight Range** - 11")
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
        .addField("Misc.", "**Sight Range** - 10")
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
    if (cmd ===`${prefix}voidray`||cmd ===`${prefix}chadray`){
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
    //begin Drone
    if (cmd ===`${prefix}drone`){
        let droneembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Drone**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/d/d1/Icon_Zerg_Drone.jpg/revision/latest?cb=20160106233237")
        .addField("Construction", "**Built from:** Hatchery")
        .addField("Resources", "**Minerals** - 50, **Vespene** - 0, **Supply** - 1, **Build Time** - 12")
        .addField("Defense", "**HP+Shields** - 40, **Armor** - 0(+1 per upgrade) **Movespeed** - 3.94")
        .addField("Offense","**Damage** - 5, **Hitspeed** - 1.07, **Range** - Melee, **DPS** - 4.67 **Targets** - Ground")
        .addField("Attributes", "**Biological, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 8, **Cargo Size** - 1")
        .addField("More Info", "https://liquipedia.net/starcraft2/Drone_(Legacy_of_the_Void)");
    return message.channel.send(droneembed);
    }
    //begin Zergling
    if (cmd ===`${prefix}zergling`||cmd ===`${prefix}ling`){
        let lingembed = new Discord.RichEmbed()
        .setDescription ("**Zerg Zergling**")
        .setColor("#7FC5EB")
        .setThumbnail("https://vignette.wikia.nocookie.net/starcraft/images/a/ae/Icon_Zerg_Zergling.jpg/revision/latest?cb=20160106232911")
        .addField("Construction", "**Built from:** Hatchery, **Requires:** Spawning Pool")
        .addField("Resources", "**Minerals** - 25, **Vespene** - 0, **Supply** - 0.5, **Build Time** - 17")
        .addField("Defense", "**HP** - 35, **Armor** - 0(+1 per upgrade) **Movespeed** - 4.13(+2.45), on creep 5.37 (+3.18)")
        .addField("Offense","**Damage** - 5(+1 per upgrade), **Hitspeed** - 0.497(-0.143), **Range** - Melee, **DPS** - 10(+2 per upgrade), with andrenal 14.3(+2.86), **Targets** - Ground")
        .addField("Attributes", "**Biological, Light, Ground**")
        .addField("Misc.", "**Sight Range** - 8, **Cargo Size** - 1")
        .addField("Upgrades and Abilities","-")
        .addField("Metabolic Boost", "**Researched from:** Spawning Pool, **Minerals** - 100, **Vespene** - 100, **Time** - 93, **Effect** - Increases Zergling movement speed by 60% to 6.58 (+2.45)")
        .addField("Adrenal Glands", "**Researched from:** Spawning Pool, **Requires:** Hive, **Minerals** - 200, **Vespene** - 200, **Time** - 93, **Effect** - Decreases Zergling attack cooldown to 0.35 (-0.15)")
        .addField("Morph to Baneling","**Requires:** Baneling Nest, **Minerals** - 25, **Vespene** - 25, **Time** - 14, **Effect** - Morphs a Zergling into a Baneling.")
        .addField("More Info", "https://liquipedia.net/starcraft2/Zergling_(Legacy_of_the_Void)");
    return message.channel.send(lingembed);
    }
}),
bot.login(process.env.token);
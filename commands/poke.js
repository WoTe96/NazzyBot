const Discord = require('discord.js');

const bot = new Discord.Client();


module.exports = {
  name: 'poke',
	description: 'Wanna spawn pokemons while away? I got you! (Requires Pokecord Bot)',
	async execute(message, args) {
		  var mem = message.mentions.members.first();
      var id = mem.id;
      var nam = mem.username;

      //console.log(nam + ': ' + id);

      if(bot.users.get(id) != bot.users.bot){
        message.channel.send('Error: Not Pokecord Bot! Command Aborted.');
        return;
      }

	},
};

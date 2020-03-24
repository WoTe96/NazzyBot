message.channel.send(body.file);
		}

		if(args[0] === 'simp'){
			const { body } = await snekfetch.get('https://simp.ceo/api/breeds/image/random');
			message.channel.send(body.message);
		}

	},
};

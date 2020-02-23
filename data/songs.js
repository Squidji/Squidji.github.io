function createlist(order, todivid) {
	let olist = [];
	if (order === 'release') {

		for (let i=0; i<songData.length; i++) {
			if (songData[i].canon) {
				olist.push(songData[i]);
			};
		};

	} else if (order === 'timeline') {

	} else if (order === 'alphabet') {

		let alist = [];
		for (let i=0; i<songData.length; i++) {alist.push(songData[i].title)};
		alist = alist.sort();
		for (let a=0; a<alist.length; a++) {
			for (let b=0; b<songData.length; b++) {
				if (songData[b].title === alist[a] && songData[b].canon) {
					olist.push(songData[b]);
				};
			};
		};
		console.log(olist);

	} else if (order === 'noncanon') {

		for (let i=0; i<songData.length; i++) {
			if (songData[i].canon === false) {
				olist.push(songData[i]);
			};
		};

	};

	for (let i=0; i<olist.length; i++) {
		let item = document.createElement('div');
		item.appendChild(document.createTextNode(olist[i].title));

		let c = document.createAttribute('onclick');
		c.value = 'open_a(' + olist[i].id + ');';
		item.setAttributeNode(c);

		let h = document.createElement('h2');
		if (order === 'release' || order === 'noncanon') {
			h.appendChild(document.createTextNode(olist[i].dateWritten));
		};
		item.appendChild(h);

		document.getElementById(todivid).appendChild(item);
	};
};

function open_a(id) {
	let get;
	for (let i=0; i<songData.length; i++) {
		if (songData[i].id == id) {
			get = songData[i];
		};
	};

	document.getElementById('A_H1').innerText = get.title;
	document.getElementById('A_H2').innerText = get.dateWritten;
	if (get.revised !== undefined) {
		document.getElementById('A_H2').innerText += ', Revised ' + get.revised
	};
	if (get.pov !== undefined) {
		document.getElementById('A_H3').innerText = 'From ' + get.pov;
	};
	document.getElementById('A_H4').innerText = get.timelineWritten;
	document.getElementById('A_P' ).innerText = get.text;

	let alltabs = document.getElementsByClassName('tabpage');
	for (let i=0; i<alltabs.length; i++) {
		alltabs[i].style.display = 'none';
	};
	document.getElementById('Page_A').style.display = 'block';

};

const timeDates = {
	'months': [
		'Elisue', 'Ature',
		'Deti', 'Evufiun',
		'Lane', 'Okatad',
		'Nefuvas'
	],
	'eras': [
		['Seirei', -500, -201],
		['Rekishi', -200, -1],
		['First', 0, 199],
		['Noble', 200, 299],
		['Neon', 600, 699],
		['End', 700, 712]
		['New', 9990000, 9990099],
		['Final', 9995000, 9995999]
	]
};

const songData = [ // In timeline order
	{
		'title': 'Song of Space',
		'id': 0,
		'dateWritten': 'Jan. 27th, 2020',
		'revised': 'Feb. 19th, 2020',
		'timeline': {'y': 9995380},
		'timelineWritten': 'Final Era, 5380 ASP',
		'pov': 'Eini Ikit',
		'canon': true,
		'text': "The sky shone a royal purple, with small yet bright stars scattered across it like freckles. A few stray clouds flew below the sky as a gray foregroud. Below it all, I lied on a hill– facing the beautiful painting of space above. The hill, covered in tall yellow grass that peacefully fluttered in the light breeze, was perfectly angled for admiring the sky.\n\nAuo turned to face me, \"You're lost, aren't you?\"\n\n\"It's beautiful though, how can one not be lost inside of it?\"\n\n\"What a simpleton you are, too lost in the sky to pay attention to yourself.\"\n\n\"Well, I've only been sitting here for a week.\"\n\n\"A week? You're absurd! Of course, that must sound like no time at all for a person like you.\"\n\n\"Can you blame me? Immortality is boring. Well, there are goods and bads that come with everything.\"\n\n\"Such and idiot. I envy your simpleminded way of looking at things. Life must be so much easier.\"\n\n\"Well when you've lived so long and seen so much, theres a level of desensitization that comes with it.\"\n\nAuo didn't give a response.\n\n\"What is it like,\" I asked, \"knowing that someday you might lose your life?\"\n\nAuo stayed silent. I looked down from the beautiful sky and over at them. To me, they were just someone else and no one important. I had known many people, most of which had died, to really care much about them.\n\n\"You're a fool, a true idiot to say the least,\" they finally answered, \"This world will not last forever and one day it will cease to be here. By this point I will most assuredly be long gone, but what about you? You can't possibly stay here, looking up at the sky.\"\n\n\"Nothing really lasts forever, does it? At that point, I suppose that I will cease to exist myself.\"\n\nAuo chuckled a little at my answer, \"I guess even immortality has its limits. How strange. It seems to render the entire point of immortality useless, does it not?\"\n\nI smiled, \"I guess you could say that.\""
	},
	{
		'title': 'Jazz Knives',
		'id': 1,
		'dateWritten': 'Jan. 28th, 2020',
		'revised': 'Feb. 19th, 2020',
		'timeline': {'y': 251},
		'timelineWritten': 'Noble Era, 251 SRB',
		'canon': true,
		'text': "The Golden Diamond Ball, an event only occuring every 10 years in commemoration of the famous Golden Diamond. In a large hall, where real gold acted only as decoration, rich partygoers dressed in fancy masks gambled and chatted and dined with one another, the moon shining through a large window that took up a whole wall.\n\nThe window stood there, static for only a moment, before a tall, slender man crashed it so gracefully you might have ignored the mess of an entrance made. He wore a fancy black and white mask that concealed the area around his eyes. It glittered from the surrounding lights of the party hall. With medium length black hair, a top hat, and a full suit,  he was really working for that dapper look. He tossed a yellow gemstone up in the air before catching it in his hands, a wide smirk on his face. A guard yelled from the croud of people, \"Quick, that man stole the Golden Diamond! Catch him!\"\n\n\"Oh dear, it appears I've been found out,\" he said ironically. The man jumped into the air, and a knife flew from inside his sleeve– a knife that soon lodged itself in the yelling guard's neck. And all as this masacre happened, the man wore a wicked grin on his face, as if this was only a game to him.\nThe party guests panicked, running left and right while screaming. More guards, this time armed with guns, ran to stop the thefty intruder. However, their efforts were to no avail, as they were killed mercilessly by knives before they could even set their guns on the theif.\n\nKnives and blood gracefully danced through the air as if the party had not been crashed, and the man looked more pleased every time another person fell to his deadly weapons.\n\n\"This is Milton Moss, chief of police! Put your hands where I can see them!\" A man, curly brown hair and a gun pointed straight for the theif, was the only one left standing.\n\n\"What is mightier: The gun or the knife?\" mocked the theif.\n\n\"Why dont we see for ourselves?\" the chief talked back. A shot rang from the gun, but the strange man deflected the bullet like it was nothing more than a nuisance.\n\nFire after fire was deflected perfectly, the theif grazed not by a single bullet. \"Excellent! Keep this up, and you will soon run out of ammunition. What will you do then, sir?\"\n\nThe cheif of police winced, outmatched. \"You've got me,\" he called as the theif's smirk grew tenfold, \"I challenge you to and Gentleman Battle—\"\n\n\"Good choice.\"\n\nAnd with that, the contract was sealed as universal law, unchageable, and everything went black."
	},
	{
		'title': 'Song of Darkness - Chapter 1',
		'id': 2.1,
		'dateWritten': 'Jan. 30th, 2020',
		'timeline': {'y': 689},
		'timelineWritten': 'Neon Era, 689 SRB',
		'pov': 'Nou Kaiyo',
		'canon': true,
		'text': "I walked through the corridors of the vacant building. Stained concrete floors and walls that knew nothing but pain. There were no windows to decorate the walls, so the beautiful cityscape outside was hidden from view. The only thing lighting the room was a small broken down lightbulb that hung freely from the ceiling by a thin wire.\n\nIt was a disgusting place that smelt of vomit and blood, and the memories this room awakened were not pleasant in the slightest. I walked around the room a bit longer, examining the dangerous machines that I had used to opperate myself.\n\nThere I noticed, its back slouched against a concrete pillar, a small rabbit doll. It stared across the room and looked at me, sadness in its eyes. And with that doll came thousands of more memories I had once believed were forgotten.\n\nI had been there as early as I could remember, operating the machines since I was 7 at least. Many children, including myself, were gathered or stolen from around the city to act as slaves for our Gokuri, our overseers and enslavers. The Gokuri were scary, nameless adults. They wore leather masks in various shapes and dark maroon cloaks around their bodies. Anyone who had ever seen a Gokuri's face died not long after.\n\nThe conditions there were horrible. We had nothing to sleep on but the rough concrete floor, and ate nothing but water and flour. The room was only illuminated by that one small light, just enough for us to barely see. None of us had seen or at least remembered what the sun had looked like, same for the moon. Really, we had no concept of day and night at all. Many of us couldn't speak well, so we had to learn from either what the Gokuri said to us, or ask our fellow slaves for help.\n\nThe machines we used were not at all difficult to operate, and as a result us children managed to use them without too much difficulty. Still, they were truly dangerous tools. Many childen had lost a few fingers, and some had only one arm. Those with no arms had been killed by the Gokuri out of uselessness.\n\nThe machines themselves were old and rugged, peeling wood structures that pulled wires that led upstairs, a forbidden place that shook us children in our worn socks. We worked with what  the Gokuri had called Midori, a material that looked like a glowing green rock.  We crushed them using one machine and turned into liquid by mixing it with some weird gray liquid, called Shiroi, with another machine.\n\nFew of us children lasted very long. At least half of everyone died every year. Some died using the machines, but most died due to sickness or malnourishment. Then, every few months the Gokuri brought in another batch to replace those who didn't make it.\n\nEven in these harsh conditions, I managed to make friends among all of the children. Aran Nane was maybe about a month older than me. He was a hard worker, and was very kind to me and all of the other children. He used to carry around a cute rabbit plush that he had somehow found, showing it off and using it to play with everyone when we weren't working the machines.\n\n\"You need a break?\" Nane had initially asked me, \"You look really tired. I can take over your shift if you want.\" We grew close after that, spending all of our free time talking with one another. Nane's friendship brought some reason into my life. He was truly a ray of light shining in the dark concrete room.\n\nNot all of the other children thought the same however. When we were maybe around 12, Nane was pushed into one of the rock-crushing machines by another child a few years older than us.\n\nI don't remember that boy's name, but his face still sticks in my mind. He was the first person I had ever killed. He wasn't fortunate enough to die quickly at the hands of a machine, but was beaten to death slowly and painfully by my own bare hands. When the Gokuri found that I had killed one of their workers, I was confronted and punished with lashings on my bare back.\n\nAs the months and then years passed, I continued to live on working in that room, required to move on after the death of Nane. I never managed to die in that dark room, something very lucky for the children who worked there. I had only lost my left hand's ring and middle fingers. I was sick a few times, but I always managed to somehow get better. When I was around 15, there were maybe only 6 kids my age or older that were still alive."
	},
	{
		'title': 'Song of Darkness - Chapter 2',
		'id': 2.2,
		'dateWritten': 'Jan. 30th, 2020',
		'timeline': {'y': 704, 'p': 7},
		'timelineWritten': 'Nefuvas - End Era, 704 SRB',
		'pov': 'Nou Kaiyo',
		'canon': true,
		'text': "\"Pst, hey you, here,\" a whisper came from the floor one night, while I was just falling asleep on the solid concrete floor.\n\nI inched a little closer to the hole and pretended like I was sleeping. \"Who is this?\" I asked.\n\n\"Koni Fuuni,\" she replied, \"You?\"\n\n\"Nou Kaiyo.\"\n\n\"I want to get you out of here.\"\n\n\"Out of here? Like upstairs? That would be bad, no one has ever been there and returned.\"\n\n\"No, I mean outside.\"\n\n\"I don't follow.\"\n\n\"Do you not know what the 'outside' is?\" She paused for a second, \"How long have you been here?\"\n\n\"As long as I can remember.\"\n\n\"You're kidding me!\"\n\nThis was the point in my life that I learned there was more than just the dead, old room I grew up in.\n\nFuuni and I talked with each other through the hole for the next few days, coming back every night. Fuuni had told me she was a towerscavenger, she climbed abandoned buildings in search of items to sell for a profit. The concept of giant structures, currency, and all of the items she collected had blown my mind at the time. She was exploring when she found our room, an off-the-grid child labor factory, she called it.\n\n\"Lets to get you out of this shit-hole,\" she had told me around 8 days after I had first started talking to her, \"I think we should put serious thought into you escaping.\"\n\n\"Escaping? But where would I go, theres no exit.\"\n\n\"Of course theres an exit, theres no way your Gokuri could get in and out without one.\"\n\n\"Alright, I'll look for one when any Gokuri try to leave tomorrow night, hiding among the machines.\"\n\n\"Good idea, but be safe.\"\n\n\"Of course I will, I've managed to live this long.\"\n\n\"What do you plan to do once you escape?\"\n\n\"I want to see the room upstairs first. I want to know what happened to those who tried to go up there.\"\n\n\"I see, that makes sense.\"\n\n\"After that, I want to see that sun you keep talking about.\"\n\nThe next day, I was running a machine when a Gokuri called for me. The Gokuri, who was wearing a toucan-beak shaped mask, had told me to go upstairs with them. I was worried I was going to die soon, so close to escaping and seeing the outside.\n\nThey opened a hidden hatch in the ceiling, revealing a ladder, and brought me upstairs to a place I thought I would never see in all of my life. Upstairs held a giant machine, larger than those in the room below and made of metal and glass, connected to what looked like hundreds of large tubes of the green liquid we had been making. \n\nBy the machine was another Gokuri, their rabbit mask reminding me of the rabbit doll Nane had once cherished, holding a girl around my age with a gun pointed at her head. I did not know what a gun was at the time, however I could feel the ill intentions of what it meant from across the room.\n\n\"It has been brought to our attention that you have been communicating with an outsider. The punishment for this will of course be death. So sad, to lose one of the older children. It will be very difficult to replace you, but you have left us with little other choice,\" the Gokuri that brought me here talked.\n\n\"Nou,\" said the girl, who I then realized was Fuuni, \"Don't worry about me, you need to escape.\"\n\n\"What, no! If I escaped without you it would all be for nothing!\"\n\n\"Thoughts of escaping? How could you, after the shelter and the food and the care we've given you! You are contributing to the GREAT CAUSE YOU UNGRATEFUL BITCH!!\" The Gokuri finally let their emotions loose and kicked me in the back, causing me to fall to the floor face-down. The Gokuri proceded to kick and beat me as I lied down, helpless. \"HOW DARE YOU!\" They looked over to see Fuuni, her face covered in worry and sorrow.\n\n\"Shoot the outsider,\" they ordered.\n\nFire.\n\nI lost it.\n\nI couldnt handle it.\n\nAfterwards, the room was covered in blood, belonging not only to the two Gokuri, but my own as well. The glass tubes full of the green liquid were shattered, puddles of the Midori liquid lied stagnant below my still body. I sat on my knees for what felt like forever.\n\nNo one.\n\nNo one would hurt someone I loved ever again.\nI found the exit, hidden in the room above the machines and stared out. From the top of a large towering building, I could see the sun setting over the horizon. The first time I had seen the sun had brought me a true spark of happiness. I felt that now that I had seen the sun, my mission was complete. I kneeled at the edge of the building and continued to stare at the setting sun, yellows and purples and blue mixed together into a shade of something I had never Imagined was real. I cried, tears falling unwaveringly down my face.\n\nAnd then I feel foward, and down the building, beautiful air blowing past my face, my long hair shaped straight up to where I fell from. It was a beautiful way to die.\n\nI couldn't seem to die."
	},
	{
		'title': 'Jackal\'s Apple',
		'id': 3,
		'dateWritten': 'Jan. 31st, 2020',
		'timeline': {'y': -495},
		'timelineWritten': 'Seirei Period, 495 BRB',
		'pov': 'Ward',
		'canon': true,
		'text': "The world was once fragmented and small, and humans only existed in small villages. 500 years before history records began, what would be called the Seirei Era, spirits had ruled the land, a land that was fresh and undisturbed.\n\n\"You,\" I pointed towards the other spirit, \"This is my land, so get out of here.\" \n\nThis spirit was a small jackal, meaning they were a Kemino (or animal) type spirit. Their fur was white and lime green, and looked very soft to pet. I thought about trying to pet it for a moment before realizing the circumstances I was in. A yellow apple sat on the jackal's head, and although it appeared it would fall, it never did.\n\nThe jackal snickered, \"So this is the house you've taken as your own?\"\n\nWe spirits couldn't create any structures on the earth, so we took shelter in the homes of humans or at spots in nature.\nI had once lived in a hidden cave behind a waterfall before being kicked out by a more powerful spirit. After that, I decided to stay in a house built and inhabited with humans. These humans couldn't see me, but as I watched them all this time, I grew to love them.\n\n\"Yes, this is my home.\"\n\n\"I see. Is there not room for two of us?\" The little spirit tilted their head to the side.\n\nThe nerve of this Kemino, \"Why should I let you live here as well?\" This was my house! I wasn't about to let this suspicious jackal let my gaurd down.\n\n\"I just need a place to say is all. I was kicked out of a temple down the road, so I've been living on the streets for the past few days. It has been awful...\"\n\nThis spirit knew how to make me feel sympathetic, but I couldn't let it drag me down too far. \"I suppose, but whats in it for me?\"\n\nThe jackal paused for a second, looking into my eyes and seeing everything. \"Well, I could pledge to protect the people of this home for you.\"\n\nHow would they have known exactly what I was looking for? Damn, this tricky spirit was good. There must be more to it's tricky ways than there appears to be. \"Y-you can read minds, can't you?\"\n\n\"Yes, I suppose that was easy to guess from my responses. I shouldn't have used it so much.. but my housing situation was no lie. If I have to protect your people to live here, then I will.\"\n\nA mind reader. I was correct. Most spirits have a special ability called a Kyoku, and the sly jackal's must have been mind-reading.\n\nIn any case, I had to believe their words. Protection for my humans was important to me. I had only one problem. \"And how do you plan to protect them?\"\n\n\"This Amomori,\" the jackal looked up towards the apple on it's head, \"has the ability to protect the souls of humans from danger.\"\n\nAmonori are objects that have their own special ability, similar to spirits' Kyoku. The ability of this apple seemed to be coincidentaly perfect for protecting the humans in my house.\n\n\"I had been protecting the people of the temple since I was born using this,\" it continued, \"Sadly, it doesn't protect us peaceful spirits from hostile spirits, only humans.\"\n\n\"I see. Well then, I guess I have no option but to accept your offer. Whats your name, little jackal?\"\n\n\"Desi. Your name?\"\n\n\"I'm Ward. Pleased to be living with you, Desi.\""
	},
	{
		'title': 'Fallen Encounter',
		'id': 4,
		'dateWritten': 'Feb. 4th, 2020',
		'timeline': {'y': 704, 'p': 7},
		'timelineWritten': 'Neon Era, 704 SRB',
		'pov': 'Eini Ikit',
		'canon': false,
		'text': "Rain pelted the roof of the umbrella I held in my left hand that dark night. A girl cried in front of me, wearing rough looking garment that loosely draped over her. She lied on the rough pavement of the street– lied in a puddle of her own blood. I watched her, crying in the rain from the protective cover of my own umbrella. They waited to die. They wanted to die.\n\nThe girl stopped for a moment, and the world felt frozen. She looked up, her eyes red and swolen, barely able to see past the tears that built up in her eyes.\nThis was an abandoned edge of the city, so she was likely a towerscavenger who had fallen from a building above.\n\nI leaned down to them, \"It's ok, you're going to be– Ow!\"\n\nShe lunged foward and bit my hand before crawling away from me. She turned towards me, staring. Her eyes were full of fear and tears. \"N-no,\" she stuttered, \"no more nice people. I'm done meeting nice people.\"\n\n\"Nice people..?\"\n\n\"They always end up dying. I don't want any more nice people to die.\"\n\n\"Everyone dies though.\"\n\nShe looked down at the puddles in the road. \"I wish they didn't.\"\n\n\"That would be nice, but that isn't the way the world works.\"\n\n\"The world.. the outside,\" she muttered.\n\nI helped her onto her feet and supported her as we walked towards a bench, \"What happened?\"\n\n\"I fell. That's all.\"\n\nI felt that there was more to her story, but I decided not to question it at this moment. \"Where are you from?\" I asked.\n\n\"Here.\"\n\n\"Your name?\"\n\n\"Nou.\"\n\n\"Just Nou?\"\n\n\"No.\"\n\nI sat her at the bench and sat down right next to her.\n\n\"Wheres the sun?\" Nou asked me.\n\n\"The sun? It's night time.\"\n\n\"What's that?\"\n\nI chuckled, \"Who are you?\"\n\n\"I'm Nou.\"\n\nI paused, thinking for a moment. This girl was quite strange, and she obviously didn't know what she was doing.\n\n\"You must be sore, but your body is mostly healed. You must have not fallen from that high up. How long has it been since you fell?\"\n\n\"Hm. The sun had disappeared three times, this is the fourth time.\"\n\nFour nights? How had she survived? \"It's a miracle you're still alive, then.\"\n\n\"No, not a blessing.\""
	},
	{
		'title': 'Fallen Savior',
		'id': 5,
		'dateWritten': 'Feb. 13th, 2020',
		'timeline': {'y': 704, 'p': 7},
		'timelineWritten': 'Neon Era, 704 SRB',
		'pov': 'Nou Kaiyo',
		'canon': false,
		'text': "It was quite dark outside. Tall gray figures looked down me as I lied still in a puddle of blood. I waited there, unmoving.\n\nThe sun, a strange concept, had fallen and was replaced by a black sky of white specks. The sun was not gone however, it would rise opposite of the direction it fell only a time later. After the first time I saw the sun on the edge of the earth, I got to witness the sun another three times. This was now the fourth time I have witnessed the dark sky.\n\nThe sky began to cry, thousands of water spears struck me. The clothes I wore were soaked in an instant. Some of my blood began to wash away, down the path of moving water the ground shaped.\n\nA man walked foward, a strange item in his hand. He leaned down close to me, this item blocking the angry water from hitting me. His face was dark, a soft smile on his face and a trace of sorrow in his eyes. What did he wan't from me? He didn't seem to pose any threat, but I couldn't trust them.\n\nAt that moment, I realized I had been crying, my eyes imitating the falling sky water. I stopped crying and I stopped moving, lying on the rough ground as though I was as lifeless as the ground itself.\n\n\"It's ok,\" the man calmy said to me, \"You're going to be- Ow!\"\n\nI bit him. It was my only offensive move against him. I couldn't trust him, I shouldn't have to listen to what he said. The first thing he gave me was an act of kindness. Kindness is something you can't repay. I moved myself along the ground, away from him. I turned towars this enemy, determination and tears in my eyes.\n\n\"N-no,\" I said, \"no more nice people. I'm done meeting nice people.\"\n\n\"Nice people?\" he looked confused.\n\n\"They always end up dying. I don't want any more nice people to die.\"\n\n\"Everyone dies though.\"\n\n\"I wish they didn't.\"\n\n\"That would be nice,\" he looked up towards the sparkled sky, \"but that isn't the way the world works.\"\n\"The world... the outside.\"\n\nThe outside, something I couldn't begin to imagine. I hadn't even known it existed until not long ago. It was truly beautiful, but I guess all beautiful things come with a cost.\n\nAs I thought, the man quickly picked me up to my shoulders and wraped one of my arms over his back. We walked together over to some structure and sat down on it. Every muscle in my body was sore. I hoped I didn't have to move again anytime soon.\n\nThe man himself was fairly well built, at least compared to the other children I knew. He wore well made looking clothes and had clean dark-gray hair. His eyes were large and a light blue.\n\n\"What happened?\"\n\nI shouldn't trust this man. I can't trust this man. I don't have to tell him anything.\n\n\"I fell. That's all,\" I said\n\nHe looked suspicious, but decided not to ask anything more about it. \"Where are you from?\"\n\nWhere was I from? What did that mean? I wasn't really from anyplace at all. \"Here.\"\n\n\"Your name?\"\n\n\"Nou,\" I answered.\n\n\"Just Nou?\" he pushed.\n\n\"No,\" I told him.\n\nHe decided to stop asking about that, too. Good. It was my turn to ask him a question.\n\n\"Where's the sun?\"\n\n\"The sun? It's night time.\" What a unsatisfactory answer.\n\n\"What's that?\" I had to ask.\n\nHe chuckled just a little, softly. \"Who are you?\"\n\n\"I already told you, I'm Nou.\"\n\nHe started to look concerned, my answer seemed to trouble him.\n\n\"You must be sore,\" he said, and I definitely was, \"You must have not fallen from that high up. How long has it been since you fell?\"\n\n\"The sun has disappeared three times. This is the fourth.\"\n\nThis seemed to trouble him even more. \"It's a miracle you're still alive, then.\"\n\n\"No, not a blessing.\"\n\nA curse. If I was dead, maybe I could be with them. With Nane. With Fuuni.\n\n\"Can you stand at all?\" he asked.\n\n\"I would prefer not to.\"\n\n\"I see.\"\n\n\"Your name,\" I said, \"You haven't told me your name.\"\n\"I guess I haven't,\" he said, \"My name is Eieni Ikit. Just call me Ikit.\"\n\nIkit. A man I shouldn't trust. I shouldn't trust him, I shouldn't–\n\n\"Kaiyo.\" I told him.\n\n\"Hm?\"\n\n\"Nou Kaiyo. My name.\"\n\nI seriously messed up now. I can't do this.\n\nThis man will die."
	},
	{
		'title': 'Song of Nature',
		'id': 6,
		'dateWritten': 'Feb. 15th, 2020',
		'timeline': {'y': 7},
		'timelineWritten': 'First Era, 7 SRB',
		'pov': 'Eriato',
		'canon': true,
		'text': "I thought to myself, poking at the lake water with a stick. Ripples grew from where I put the branch, but they dwindled off over time.\n\nBehind me, the tall green trees of the Ksiak Forest loomed. Light filtered down through the leaves, making the forest bright with the light of the sun.\n\nIt was a bright summer day, my body warm from sitting in the sun for so long. I finally sat up, and looked at the forest behind me. Although I saw no animal life, I heard the song of some type of bird miles away.\n\nI began to pick around at the pebbles that lined the lake. One that was round and light and had a dark swirl in it, and another a dark stone that was jagged and rough. After hours of looking through the stones, I found something truly marvelous. I held the stone in my hand and grasped it tightly.\n\nI stepped off of the shore and onto the water, moving on top of the clear lake as if it were a solid. My warm, bare feet felt nice on the cool water below. I created own ripples as I walked that grew and died off. As I grew more comfortable walking like this, I sped up into a run and continued to make my way across the water. The trees flew by as I ran faster and faster until they were just a blur.\n\nFinally, I made it to my destination. My house, built on top of the water, supported by wooden logs I had placed there myself. A few more wooden logs held up a large piece of cloth that matched the colors of the forest's leaves, and acted as a roof to my house. It was, more or less, a large tent on the water.\n\nA gray duck sat before the entrance, waiting for me calmly, sunbathing. \"Hey duck, I found a real nice stone down the lake!\" The duck quacked back happily.\n\nAs I walked through the entrance, a large hole in the cloth canopy sheilded by many beaded ropes, the duck sat up and waddled behind me.\n\nThe first room in the tent somewhat of a lobby. \nThe walls were the same green fabric as the outside was, and the floor was the same type of wood that held up the tent but covered with a straw mat that was more comfortable to walk on.\n\nA large lit candle sat in the center of the room, although it was mostly unecessary since sunlight made its way through small holes in the tent's fabric. The candle was surrounded by many pillows that acted as seats, so it was almost more of a meeting room. I hadn't had many visitors in a while though.\nThere were two doors at the back of this room, one on the left and the other on the right. Between these two doors sat a ladder that brought you upstairs.\n\nI made my way through through the left door and into a larger room full of all the interesting things I found- it was my collection. The duck stayed in the lobby, napping on one of the pillows.\n\nI made my way over to the back of this room, trying not to trip or break any of the cool objects I had lying around everywhere. I finally made it to the back, where a wooden desk sat with a magnifying glass on top of it. I put the rock I found on the desk and picked up the magnifying glass.\n\nThe stone was a yellowish color, golden some might say. It shimmered with the bits of sunlight that filtered in the collection room. Truly marvelous, this stone was. It was the prettiest stone I now had in my collection.\n\nI inspected the stone under the magnifying glass for a bit before returning to the lobby. I entered the door on the right this time. The duck, now that I had returned from the clustered room, began to follow me once again.\n\nThis new room was my study. About as large as the collection room, it housed many shelves full of books. Pots of glowing yellow plants hanging from the ceiling lit up the room, as the re were no holes for natural light in this room.\n\nI sat at a desk near the room's entrance, and opened the book that was sitting on it, Eriato Records XZV. These books of records were written by myself, collections of history and science.\n\nI had once traveled around the world, learning about how the things worked. Although I don't travel too far away anymore, I still fill whole books full of information and knowledge from the stuff I collect and the experiments I run.\n\nI picked up my pen, a hollow stick, and poked it into a jar filled with a few special rocks. The inside of the pen filled with a black liquid and I began to write about the gem I found. The Golden Diamond, an object that, unbeknownst to me, would become one of the world's greatest treasures."
	},
	{
		'title': 'Song of History - Chapter 1',
		'id': 7.1,
		'dateWritten': 'Feb. 19th, 2020',
		'timeline': {'y': -1},
		'timelineWritten': 'Rekishi Period, 1 year BRB',
		'pov': 'Eriato',
		'canon': true,
		'text': "\"Eriato! Are you there?\" a wayward spirit cried from the front of my house.\n\nI lit the candle in the meeting room. It was late at night, and although I was tired and wanted nothing more than to rest, it was my duty to help the spirits who called for me.\n\nI parted the beaded ropes that acted as my front door, and looked down at the small fox spirit that had called for me.\n\n\"I'm a jackal, not a fox,\" the spirit corrected.\n\n\"Desi, what have I told you about reading my mind?\" I scolded him.\n\n\"I know, I get it, it just kind of ticks me off when people confuse me with a fox.\"\n\nI sighed, \"What do you need from me?\"\n\n\"Oh yeah, I might have gotten in a bit of a fight with a powerful spirit. I need your help.\"\n\n\"Uh, where is this powerful spirit?\"\n\n\"Chasing after me right now.\"\n\n\"Shouldn't you have started with that!?\"\n\nThe trickster jackal chuckled at me. He was going to pay when this was all over...\n\n\"I heard that,\" Desi looked at me with a smile.\n\nRead my mind again, I thought, and you'll wish you were dead.\n\nThat shut him up easily.\n\nA large humanoid spirit then rose from the water, covered in scales and seaweed. The aquatic figure looked at Desi and I with glowing red eyes. It was twice as tall as the tall trees in the forest surrounding the lake, and it made waves in the river that rocked my house.\n\n\"Excuse me, sir,\" I spoke to the fishlike spirit, \"How can I help you?\"\n\n\"Just by handing me that pipsqueek who lost a bet with me. He's now my food,\" he answered in a deep, gargling voice that stung my ears.\n\n\"You damned jackal,\" I muttered under my breath. Desi looked away as if he wasn't paying attention.\n\n\"I'm sorry but I can't let you have this Kemino,\" I told the enemy spirit, \"as much as I would love to let you eat him,\" I added. \"May I ask for your name?\"\n\n\"My name is Akaiyo, and I'm afraid I cannot let you have the meal that was promissed to me,\" he lifted up his large tale and swung it through the water and towards us. A torrential wave flew speedily in our direction.\n\nI quickly picked up the trickster spirit, and faced the enemy's attack head on. I put up my hand, as if it alone could block the entire tsunami. A bright green fire sparked in my eyes and outwards.\n\nA green, semitransparent shield spawned in front of me, blocking the wave from hitting Desi or I. The small animal spirit looked amazed by my ability.\n\nSadly, my sheild couldnt stop my house from being completely drenched and on the verge of collapsing. The tsunami was much stronger than I anticipated, and I began to be pushed back by its force myself.\n\nDesi held on to my shirt tighter, \"I'm... sorry... Eriato.\"\n\n\"It's ok,\" I assured him.\n\nMy sheild collapsed, and the tsunami collapsed around us.\n\nI awoke in the middle of a desert, a confusing setting after coming from a forest lake. Desi was sleeping on my lap with his ears perked up lightly. Akaiyo must have had some sort of special Kyoku, a very powerful one, to transport us here.\n\nOut of the frying pan and into the fire, as some say.\n\nI patted Desi on the head, waking him up. \"Ugh, my head hurts,\" he complained.\n\n\"Good, you probably deserve it. Now how the hell do we get home?\"\n\n\"Thats the least of my concerns!\" Desi spoke up, \"That shield. Since when did you have a Kyoku?\"\n\n\"I'm a half spirit, you know this. Thats how I'm able to see and speak to you and other spirits. You know this...\"\n\n\"I know but I didn't know you had a Kyoku!\"\n\n\"Isn't it best practice to never tell or reveal your Kyokus unless necessary?\"\n\nDesi pouted, \"I know, but I would have liked to know..\"\n\n\"Enough, we have to find some way out of this dry desert.\" I was already sweating profusely from the heat.\n\n\"My senses tell me that we should move west.\"\n\n\"Good, we're going east then.\"\n\nWe walked east through the desert for hours, slowly and thirstily. Finally, I had found a glimpse of hope, a structure in the distance.\n\n\"Just so you know,\" I bragged, \"east was clearly the right way to go.\"\n\n\"Stay behind me,\" I told Desi as we got closer, \"and dont say a word.\" Too tired to do anything, he followed my directions.\n\nThe structure was a large stone temple, surrounded by a few houses. If this was a village, it was quite the sad one. The streets were barren and the few farm animals roamed wherever they pleased. As we passed through the place longer and longer, I began to realize it was a ghost town.\n\nLets check out the temple, I thought to Desi, who understood.\n\nWe walked up the stairs slowly, still tired from the hours long trip here. We entered the large door and found a woman who looked older than the crumbling temple itself. Her skin wrinkled into itself and was tanned by the bright desert sun. She wore long, white cloths around her. When she heard us walk in, she turned towars me. \n\n\"Welcome. How may I help you, wandering soul?,\" she spoke."
	}
]
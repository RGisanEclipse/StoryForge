import React from "react";
import PostCard from "./PostCard";
import RevealY from "../utils/RevealY";
export default function FeedHome() {
  const userID = localStorage.getItem("userID");
  console.log(userID);
  const posts = [
    {
      authorProfile:
        "https://pbs.twimg.com/profile_images/1676116130275143680/BkUKyvp7_400x400.jpg",
      author: "@RGisanEclipse",
      banner:
        "https://cdn.cdnparenting.com/articles/2022/04/30170320/Monkey-and-the-crocodile-story.webp",
      title: "The Story of Crocodile and Monkey",
      overview: `A crocodile who lives near a river with his wife. He befriends a monkey that resides in a tree along the bank of the river to give his heart to his wife for dinner. As a result, the monkey primarily falls for his trap but smartly learns about the crocodile’s intentions and fakes that his heart is left on the tree. He saves himself from the crocodile’s trap.`,
      description: `A lovely river called Nallar flows through the Chambal forest. There was a fox named Kullan. The Nallar River was home to several crocodiles. Mandu had an island with fruit trees in the middle of the river.
            In the tree, a troop of monkeys lived. The crocodile Mandu and the fox Kullan got along well. One day, Mandavi, Mandu's wife, expressed to her husband that she desired to eat a monkey's heart. Mandu retorted that since monkeys resided in trees, it was challenging for him to trap one. But Mandavi stated that she needed to eat a monkey's heart since she had heard they were delicious. 
            Mandu was disheartened. He was sobbing while he lay on the edge of the Nallar River, and Kullan, a friend of Mandu's, the fox, visited the river to drink water. When Kullan noticed Mandu crying, he asked, "Why are you so unhappy, my friend?" “Oh, my friend, my wicked wife wants to devour a monkey's heart,” Mandu retorted. Mandu burst into loud sobbing. "My friend, don't worry," Kullan reassured. For your benefit, I'm here. I'll give you a good idea for catching a monkey.Kullan instructed Mandu to bring some fruit from the island and put it at the bank. Monkeys will taste them. They can expect you to get them back. Take them one by one and offer their bodies to your wife and me, respectively.”
            The following morning, Mandu fetched some bananas from the beach and placed them next to a tree home to some monkeys. Young and active, Kapilesh was a monkey. He had intelligence as well. He observed the freshly planted fruits along the banks. He descended gradually and took a bite. Kapish screamed, "Oh! These fruits are excellent," as he was delighted. “What is their origin?”
            “It is what I gave my pal," said Mandu. "I can assist you in going to the beach to consume greater quantities of these fruits and have fun in the ocean. You can easily be carried on my back, too." Kapish and Mandu grew to be close friends. Mandu used to take Kapish for a short journey into the river each day and bring him fruits. Mandu's wife once scolded him for failing to obtain a monkey's heart for supper. Mandu also promised to deliver a monkey's heart the next day. Kapish then enquired the following day, "Mandu! Will you accompany me to the beach today?"
            Kapish sat behind Mandu. Mandu set off in the direction of the island. Mandu said to Kapish as he got closer to the island, "My friend, we are not heading to the island to eat bananas." Your body will be given to my friend Kullan, and I'll take out your heart and give it to my wife. Mandu laughed, saying, "You know Kapish, my spouse adores your heart."
            Kapilesh responded, "You won't discover my heart in my body. I'm sorry, Mandu, my friend.” “Where is it? Be honest with your pal.” Asked Mandu.
            Kapish replied, "My friend, I hung my heart from a tree near my house." "We'll head there and take your heart," Mandu responded. Kapush said, "Please turn around and head quickly towards the tree." When they got close to the river Nallar's bank, Kapish leapt onto the bank and went up a tree.
            He then yelled at Mandu from the tree, "You stupid!" My heart is within me, Mandu. Everyone's heart is inside them, And it cannot be kept away or removed. You will never succeed in winning my heart. Mandu realised Kapish had played a ruse on him. He floated back to his wife after becoming quite discouraged.`,
    },
    {
      authorProfile:
        "https://pbs.twimg.com/profile_images/1676116130275143680/BkUKyvp7_400x400.jpg",
      author: "@RGisanEclipse",
      banner:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*RqH8lGWSdCdSHVPM.jpg",
      title: "Monkeys and The Capseller",
      overview: `In a beautiful village, Sunil, a cap seller, encounters mischievous monkeys who steal his caps while he is sleeping under a tree. He fools the mischievous monkeys and takes back their caps from them. Sunil learned an important lesson of cleverness and quick thinking. He continues his journey by sharing his stories and inspiring others with stories of his victories.`,
      description: `Once upon a time there lived a cap seller in a small village, whose name was Sunil. Sunil was a good hearted and hard working man who used to make and sell caps of different colors and designs and earn his living. His caps were famous all over the world and people from neighboring villages used to come to buy his beautiful caps .
      One morning when Sunil was going to sell his caps, his eyes fell on the movement in the trees. He saw that a group of mischievous monkeys were jumping in the branches of the tree. He gets scared seeing the herd of those monkeys. Frightened, Sunil continues his onward journey thinking little of the animals at play.As he grows inside the forest, the strong sunlight starts falling on him and he starts feeling tired. To avoid the heat, he thinks of taking rest under a big tree. He falls asleep with his big bag full of hats next to him. Little did Sunil know that the mischievous monkeys had been watching over him all the way.
      Attracted by the colorful caps, the monkeys decided to play a prank on Sunil. One by one all the monkeys came down from the trees and stole the caps from his bag.
      Waking up from a restful sleep, Sunil prepared to proceed on his journey. But when he bagged the caps, he was heartbroken because his bag was empty. The mischievous monkeys had stolen all his caps.
      To get back his caps, Sunil started looking here and there, hoping to find something about those mischievous monkeys. He saw monkeys on the top of the high branches of the tree. They were teasing Sunil wearing those caps and laughing at him.
      Sunil made a clever plan to get his caps. He decided to fool the monkeys, to get back their caps. Taking off his own cap, he took it in his hand and threw it on the ground. Surprisingly, the monkeys also started repeating his act and started throwing their caps.
      Sunil understood that the monkeys were imitating him, so he started repeating the same thing again. He started throwing his cap on the ground again and again and every time the monkeys also started throwing their caps. Soon a huge pile of colorful caps formed in front of him.
      There came a time when Sunil collected his caps one by one and put them back in his bag. The monkeys kept watching in astonishment, while Sunil heaved a sigh of relief. The monkeys also realized that they had been fooled, so they ran away, leaving Sunil to continue his journey.
      From that day onwards Sunil became ever alert and kept an eye on his caps. He learned a valuable lesson that cleverness and quick thinking can help him overcome any difficulty. No matter what challenge or obstacle came his way, he knew that he could deal with any difficult situation with cleverness and utility.
      And so Sunil, the one with the colorful caps, kept moving ahead with the caps in his bag. By telling his stories, he kept helping to bring light in the lives of people. His story of monkeys and caps became famous in all the villages, became a symbol of cleverness and quick thinking power.`,
    },
  ];
  return (
    <div
      className="h-full w-full overflow-y-auto md:py-3 border-white"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="max-w-md mx-auto px-4">
        <div className="relative flex items-center w-full h-12 rounded-lg bg-white overflow-hidden bg-opacity-10">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full text-sm text-white pr-2 bg-transparent outline-none"
            type="text"
            id="search"
            placeholder="Search"
            style={{ border: "none", outline: "none" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-2">
        <RevealY>
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </RevealY>
      </div>
    </div>
  );
}

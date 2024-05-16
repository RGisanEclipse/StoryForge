import React from "react";
import PostCard from "./PostCard";
import RevealY from "../utils/RevealY";
export default function FeedHome() {
  return (
    <div className="h-full w-full overflow-y-auto md:py-3">
      <div className="max-w-md mx-auto px-4">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden bg-opacity-10">
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
            className="peer h-full w-full outline-none text-sm text-white pr-2 bg-transparent"
            type="text"
            id="search"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-2">
        <RevealY>
          <PostCard
            authorProfile="https://pbs.twimg.com/profile_images/1676116130275143680/BkUKyvp7_400x400.jpg"
            author="@RGisanEclipse"
            banner="https://cdn.cdnparenting.com/articles/2022/04/30170320/Monkey-and-the-crocodile-story.webp"
            title="The Story of Crocodile and Monkey"
            overview={`A crocodile who lives near a river with his wife. He befriends a monkey that resides in a tree along the bank of the river to give his heart to his wife for dinner. As a result, the monkey primarily falls for his trap but smartly learns about the crocodile’s intentions and fakes that his heart is left on the tree. He saves himself from the crocodile’s trap.`}
            description={`A lovely river called Nallar flows through the Chambal forest. There was a fox named Kullan. The Nallar River was home to several crocodiles. Mandu had an island with fruit trees in the middle of the river.
          In the tree, a troop of monkeys lived. The crocodile Mandu and the fox Kullan got along well. One day, Mandavi, Mandu's wife, expressed to her husband that she desired to eat a monkey's heart. Mandu retorted that since monkeys resided in trees, it was challenging for him to trap one. But Mandavi stated that she needed to eat a monkey's heart since she had heard they were delicious. 
          Mandu was disheartened. He was sobbing while he lay on the edge of the Nallar River, and Kullan, a friend of Mandu's, the fox, visited the river to drink water. When Kullan noticed Mandu crying, he asked, "Why are you so unhappy, my friend?" “Oh, my friend, my wicked wife wants to devour a monkey's heart,” Mandu retorted. Mandu burst into loud sobbing. "My friend, don't worry," Kullan reassured. For your benefit, I'm here. I'll give you a good idea for catching a monkey.Kullan instructed Mandu to bring some fruit from the island and put it at the bank. Monkeys will taste them. They can expect you to get them back. Take them one by one and offer their bodies to your wife and me, respectively.”
          The following morning, Mandu fetched some bananas from the beach and placed them next to a tree home to some monkeys. Young and active, Kapilesh was a monkey. He had intelligence as well. He observed the freshly planted fruits along the banks. He descended gradually and took a bite. Kapish screamed, "Oh! These fruits are excellent," as he was delighted. “What is their origin?”
          “It is what I gave my pal," said Mandu. "I can assist you in going to the beach to consume greater quantities of these fruits and have fun in the ocean. You can easily be carried on my back, too." Kapish and Mandu grew to be close friends. Mandu used to take Kapish for a short journey into the river each day and bring him fruits. Mandu's wife once scolded him for failing to obtain a monkey's heart for supper. Mandu also promised to deliver a monkey's heart the next day. Kapish then enquired the following day, "Mandu! Will you accompany me to the beach today?"
          Kapish sat behind Mandu. Mandu set off in the direction of the island. Mandu said to Kapish as he got closer to the island, "My friend, we are not heading to the island to eat bananas." Your body will be given to my friend Kullan, and I'll take out your heart and give it to my wife. Mandu laughed, saying, "You know Kapish, my spouse adores your heart."
          Kapilesh responded, "You won't discover my heart in my body. I'm sorry, Mandu, my friend.” “Where is it? Be honest with your pal.” Asked Mandu.
          Kapish replied, "My friend, I hung my heart from a tree near my house." "We'll head there and take your heart," Mandu responded. Kapush said, "Please turn around and head quickly towards the tree." When they got close to the river Nallar's bank, Kapish leapt onto the bank and went up a tree.
          He then yelled at Mandu from the tree, "You stupid!" My heart is within me, Mandu. Everyone's heart is inside them, And it cannot be kept away or removed. You will never succeed in winning my heart. Mandu realised Kapish had played a ruse on him. He floated back to his wife after becoming quite discouraged.`}
          />
        </RevealY>
      </div>
    </div>
  );
}

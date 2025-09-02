import React from "react";

export default function Error() {
  const jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I told my wife she should embrace her mistakes… She gave me a hug.",
    "Parallel lines have so much in common… it’s a shame they’ll never meet.",
    "I asked my dog what’s two minus two. He said nothing.",
    "Why don’t eggs tell jokes? They’d crack each other up.",
    "What do you call fake spaghetti? An impasta.",
    "Why couldn’t the bicycle stand up by itself? It was two tired.",
    "I told my computer I needed a break… it froze.",
    "What do you call cheese that isn’t yours? Nacho cheese.",
    "Why don’t oysters donate to charity? Because they’re shellfish.",
    "I told my phone a joke… now it won’t stop giggling.",
    "What do you call a fish wearing a bowtie? Sofishticated.",
    "I used to play piano by ear, but now I use my hands.",
    "Why was the math book sad? It had too many problems.",
    "I told my boss I needed a raise. He said the only thing going up is my blood pressure.",
    "I tried to catch fog yesterday. Mist.",
    "Why don’t programmers like nature? Too many bugs.",
    "I told my girlfriend she drew her eyebrows too high. She looked surprised.",
    "Why can’t your nose be 12 inches long? Because then it would be a foot.",
    "I asked my calendar if it was free… it was fully booked.",
    "Why did the scarecrow win an award? He was outstanding in his field.",
    "I tried to make a belt out of watches… it was a waist of time.",
  ];

  // Pick random joke
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page not found 😅</p>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-xl">
        <h2 className="text-lg font-semibold mb-2">Here’s a joke to cheer you up:</h2>
        <p className="text-xl italic">{randomJoke}</p>
      </div>

      <a
        href="/"
        className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold transition"
      >
        Go Back Home
      </a>
    </div>
  );
}

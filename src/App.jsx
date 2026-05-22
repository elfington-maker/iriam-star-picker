import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Shuffle, Sparkles, Star } from "lucide-react";

const starMessages = [
  "That star’s small enough to keep in your pocket for emotional support.",
  "You can place that star under your pillow for the Star Fairy. Results not guaranteed.",
  "That star goes really well grated over pasta. Very sparkly parmesan.",
  "Careful, that one starts making dial-up internet noises if you shake it.",
  "That’s enough starlight to legally blind a Victorian child.",
  "Scientists hate this star because it keeps escaping the lab.",
  "Don’t feed that star after midnight. We still don’t know what happens.",
  "That star can be exchanged for exactly one cryptic prophecy.",
  "This star smells faintly like blueberries and bad decisions.",
  "That star has ascended. It now pays taxes in a different dimension.",
  "That one is legally classified as too whimsical to approach.",
  "Congratulations, we’ve reached the amount needed to summon a suspicious little wizard.",
  "The moon just texted me asking you to calm down.",
  "That star now comes with cup holders and heated seats.",
  "We can finally afford one whole dragon egg. Slightly cracked.",
  "That’s enough cosmic energy to microwave soup unevenly.",
  "Somewhere, a raccoon just became a prophet.",
  "That star has unionized and requested dental.",
  "We’re approaching levels of whimsy previously thought impossible.",
  "The forest has acknowledged your crimes.",
  "Reality is buffering.",
  "That star hatches into a smaller, angrier star.",
  "The IRS has started asking where the starlight is coming from.",
  "That star can now parallel park itself.",
  "Historians will refer to this as The Incident.",
  "We’re officially banned from several observatories.",
  "This star is beginner-friendly and only mildly haunted.",
  "You may now adopt one tiny sparkle. Name it responsibly.",
  "This star comes with a tiny instruction manual written in moon language.",
  "Keep it away from houseplants. It teaches them ambition.",
  "This star is dishwasher safe, but emotionally fragile.",
  "We’re legally required to offer it a tiny hat.",
  "This one makes soup taste like adventure and poor choices.",
  "The forest has started whispering nice.",
  "This star has learned to open doors. We’re monitoring the situation.",
  "That’s enough sparkle to confuse a local wizard.",
  "Please store it in a cool, dry prophecy.",
  "The star is now asking to speak with management.",
  "We can now power one cursed nightlight.",
  "This one tastes like blueberries and foreshadowing.",
  "This star knows three secrets and none of them are useful.",
  "Do not microwave. It gets philosophical.",
  "That’s enough to bribe a goblin accountant.",
  "The star has started a podcast about mushrooms.",
  "That one can be used as a bookmark in forbidden tomes.",
  "It’s not cursed. It’s just dramatically seasoned.",
  "A raccoon somewhere just felt inspired.",
  "That star is now wearing sunglasses indoors.",
  "It hums softly when exposed to nonsense.",
  "The moon has entered the chat.",
  "That one is eighty percent sparkle and twenty percent tax evasion.",
  "Please keep your hands and wishes inside the stream at all times.",
  "We’ve unlocked premium sparkle. It does nothing, but louder.",
  "The forest has upgraded your nonsense license.",
  "This is no longer a star. This is a tiny celestial problem.",
  "We can now summon a suspiciously polite goblin.",
  "The star has requested a little cape and a dramatic entrance.",
  "Somewhere, a wizard just dropped their soup.",
  "Reality has begun lightly seasoning itself.",
  "That star can now legally operate a tiny forklift.",
  "The forest has filed paperwork about this.",
  "We’ve entered advanced sparkle territory. Goggles recommended.",
  "That star now has a tiny rival and a tragic backstory.",
  "Please stop giving the stars ideas.",
  "This is enough glitter to start a minor kingdom.",
  "The star has joined a book club and it’s making everyone uncomfortable.",
  "We’re approaching weaponized whimsy.",
  "This one comes with a warning label and a tiny spoon.",
  "The forest is pretending it’s not impressed. It is.",
  "The star now answers only to your majesty.",
  "We’re one sparkle away from a side quest.",
  "This is how constellations get overconfident.",
  "This star can see through walls, but only boring ones.",
  "The forest is now legally considered festive.",
  "I’m pretty sure this one has a lawyer.",
  "The moon is typing, deleting, and typing again.",
  "That’s enough sparkle to make a dragon feel underdressed.",
  "We’re now in don’t tell the observatory territory.",
  "The star has developed a catchphrase. It’s terrible.",
  "This one should not be stored near important decisions.",
  "I can hear the constellations gossiping.",
  "We have achieved forbidden sparkle density.",
  "Someone get the tiny crown. The star demands ceremony.",
];

function getRandomItem(items, previous) {
  if (items.length === 1) return items[0];
  let next = items[Math.floor(Math.random() * items.length)];
  while (next === previous) {
    next = items[Math.floor(Math.random() * items.length)];
  }
  return next;
}

export default function IriamStarShoutoutApp() {
  const [message, setMessage] = useState(
    "Press the button to pull a silly star message."
  );
  const [copied, setCopied] = useState(false);

  const pullMessage = () => {
    setMessage(getRandomItem(starMessages, message));
    setCopied(false);
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl grid gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center grid gap-3"
        >
          <div className="flex justify-center">
            <div className="rounded-full bg-yellow-300/10 border border-yellow-200/20 px-4 py-2 flex items-center gap-2 text-yellow-100">
              <Sparkles className="h-4 w-4" />
              IRIAM Star Message Picker
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Pull a silly star message
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            One button. One star line. Perfect for quick live shoutouts.
          </p>
        </motion.div>

        <div className="bg-slate-900/80 border border-slate-700 shadow-2xl rounded-2xl p-5 sm:p-8 grid gap-6">
            <motion.div
              key={message}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-yellow-200/20 bg-yellow-300/10 p-6 sm:p-9 min-h-52 flex items-center justify-center text-center"
            >
              <p className="text-2xl sm:text-4xl font-semibold leading-snug text-yellow-50">
                {message}
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={pullMessage}
                className="rounded-2xl bg-yellow-300 text-slate-950 hover:bg-yellow-200 text-lg py-7 flex-1 flex items-center justify-center gap-2"
              >
                <Shuffle className="h-5 w-5" />
                Pull Star Message
              </button>
              <button
                onClick={copyMessage}
                variant="outline"
                className="rounded-2xl bg-yellow-300 text-slate-950 hover:bg-yellow-200 text-lg py-7 flex-1 flex items-center justify-center gap-2"
              >
                <Copy className="h-5 w-5" />
                {copied ? "Copied!" : "Copy Message"}
              </button>
            </div>
          
        </div>

        <p className="text-center text-sm text-slate-400 flex items-center justify-center gap-2">
          <Star className="h-4 w-4" />
          Tip: keep this open during stream and click whenever a star message comes in.
        </p>
      </div>
    </div>
  );
}

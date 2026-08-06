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
  "Space has acknowledged your crimes.",
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
  "This star was voted most likely to become a cryptid.",
  "This star has learned to open doors. We’re monitoring the situation.",
  "That’s enough sparkle to confuse a local wizard.",
  "Please store it in a cool, dry prophecy.",
  "The star is now asking to speak with management.",
  "We can now power one cursed nightlight.",
  "This one tastes like blueberries and foreshadowing.",
  "This star knows three secrets and none of them are useful.",
  "Do not microwave. It gets philosophical.",
  "That’s enough to bribe a stellar cop.",
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
  "This is no longer a star. This is a tiny celestial problem.",
  "We can now summon a suspiciously polite starborn.",
  "The star has requested a little cape and a dramatic entrance.",
  "Somewhere, a wizard just dropped their soup.",
  "Reality has begun lightly seasoning itself.",
  "That star can now legally operate a tiny forklift.",
  "That star has accepted the terms and conditions.",
  "We’ve entered advanced sparkle territory. Goggles recommended.",
  "That star now has a tiny rival and a tragic backstory.",
  "Please stop giving the stars ideas.",
  "This is enough glitter to start a minor kingdom.",
  "The star has joined a book club and it’s making everyone uncomfortable.",
  "We’re approaching weaponized whimsy.",
  "This one comes with a warning label and a tiny spoon.",
  "That star has excellent credit.",
  "The star now answers only to your majesty.",
  "We’re one sparkle away from a side quest.",
  "This is how constellations get overconfident.",
  "This star can see through walls, but only boring ones.",
  "The room is now legally considered festive, because of just that one more star.",
  "I’m pretty sure this one has a lawyer.",
  "The moon is typing, deleting, and typing again.",
  "That’s enough sparkle to make a dragon feel underdressed.",
  "We’re now in don’t tell the observatory territory.",
  "The star has developed a catchphrase. It’s terrible.",
  "This one should not be stored near important decisions.",
  "I can hear the constellations gossiping.",
  "We have achieved forbidden sparkle density.",
  "Someone get the tiny crown. The star demands ceremony.",
  "A starbloon for the performace! Thank you for your patronage!",
  "That star is now a certified forklift operator.",
  "This star comes with a manufacturer's warranty.",
  "This star has been pre-approved for a small business loan.",
  "That star just challenged gravity to a duel.",
  "This star is considered a delicacy in exactly one dimension.",
  "That star has excellent credit.",
  "That star is wanted for excessive whimsy.",
  "This star knows your browser history and is disappointed.",
  "That star is currently buffering.",
  "This star was voted most likely to become a cryptid.",
  "That star has a learner's permit.",
  "This star has a black belt in interpretive dance.",
  "That star is technically somebody's emotional support star.",
  "This star can only be stored in a container labeled 'probably fine.'",
  "That star was raised free-range.",
  "This star has strong opinions about soup.",
  "That star just subscribed to three conspiracy newsletters.",
  "This star has already spent the money.",
  "That star is running for local office.",
  "This star was banned from competitive hide and seek.",
  "That star is currently double parked.",
  "This star has a side hustle.",
  "That star has accepted the terms and conditions.",
  "This star is available in four exciting flavors.",
  "That star just discovered jazz.",
  "This star has been referred to management.",
  "That star keeps trying to learn magic tricks.",
  "This star has a suspicious amount of confidence.",
  "That star was assembled with leftover stardust.",
  "This star insists it could beat a shark in a fight.",
  "That star is legally distinct from other stars.",
  "This star has a podcast nobody asked for.",
  "That star keeps spoiling movies from the future.",
  "This star was rated five stars by other stars.",
  "That star has become self-employed.",
  "This star comes with complimentary side effects.",
  "That star just found twenty dollars in an old coat pocket.",
  "This star is surprisingly aerodynamic.",
  "That star has never lost an argument because it leaves first.",
  "This star was generated by 100% organic nonsense.",
  "That star keeps trying to become a constellation.",
  "This star failed upward successfully.",
  "That star was recently promoted.",
  "This star has an appointment next Thursday.",
  "That star was caught jaywalking across the Milky Way.",
  "This star has unresolved character development.",
  "That star believes in you more than is reasonable.",
  "This star is somehow tax deductible.",
  "That star was briefly considered a national treasure.",
  "This star is powered entirely by good intentions.",
  "That star has accidentally become a minor celebrity.",
  "This star was found in the lost and found.",
  "That star comes with free shipping and handling.",
  "This star keeps asking difficult philosophical questions.",
  "That star just unlocked a new achievement.",
  "This star is currently in airplane mode.",
  "That star has a suspiciously detailed backstory.",
  "This star once won a staring contest with the sun.",
  "That star has been banned from three separate timelines.",
  "This star was made with 100% recycled stardust.",
  "That star has a coupon for free breadsticks.",
  "This star just got verified on social media.",
  "That star is the reason warning labels exist.",
  "This star has an impressive collection of spoons.",
  "That star has been practicing its evil laugh.",
  "This star can recite the alphabet backwards and won't stop doing it.",
  "That star briefly considered becoming a moon.",
  "This star has never met a consequence it couldn't ignore.",
  "That star is somehow both early and late.",
  "This star has a favorite chair and will not elaborate.",
  "That star was last seen heading toward adventure.",
  "That star just got its own parking space.",
  "This star has been promoted to Senior Sparkle.",
  "That star failed the vibe check.",
  "This star is gluten-free, emotionally speaking.",
  "That star has excellent handwriting for a celestial object.",
  "This star keeps forgetting why it walked into the room.",
  "That star has a coupon that expired three centuries ago.",
  "This star insists pineapple belongs on everything.",
  "That star has already read tomorrow's newspaper.",
  "This star is somehow louder than it looks.",
  "That star is 90% confidence and 10% glitter.",
  "This star has a PhD in unnecessary drama.",
  "That star just remembered an embarrassing moment from 2009.",
  "This star has been trying to reach you about your wagon's extended warranty.",
  "That star has a secret handshake with the moon.",
  "This star gets nervous around telescopes.",
  "That star has a gym membership it never uses.",
  "This star was voted 'Most Likely to Cause Shenanigans.'",
  "That star comes with complimentary dramatic lighting.",
  "This star just won a lifetime supply of absolutely nothing.",
  "That star was handcrafted by overworked space interns.",
  "This star has an unhealthy obsession with collecting rubber ducks.",
  "That star just started learning the recorder. Sorry.",
  "This star always claps when the plane lands.",
  "That star knows where missing socks go.",
  "This star has challenged a black hole to rock-paper-scissors.",
  "That star has an oddly specific fear of geese.",
  "This star can make microwave popcorn without burning it.",
  "That star got distracted halfway through becoming famous.",
  "This star still uses 'password123.'",
  "That star is running entirely on caffeine and optimism.",
  "This star has an imaginary friend named Steve.",
  "That star keeps saying, 'Trust me, I have a plan.'",
  "This star just discovered bubble wrap.",
  "That star once lost an argument with a toaster.",
  "This star has perfect attendance at imaginary meetings.",
  "That star has a collection of novelty mugs.",
  "This star accidentally joined three book clubs.",
  "That star keeps trying to high-five comets.",
  "This star still believes it can fix the printer.",
  "That star was once mistaken for a disco ball.",
  "This star has an autograph from itself.",
  "That star just got into interpretive yodeling.",
  "This star has a favorite cloud.",
  "That star always picks the slowest checkout line.",
  "This star just invented a new color. It refuses to describe it.",
  "That star has the emotional range of a golden retriever.",
  "This star keeps buying plants it can't take care of.",
  "That star was almost cast in a documentary about spoons.",
  "That star has mastered the ancient art of looking busy.",
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
              What does that Star do?
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

        <div className="text-center text-sm text-slate-400 flex flex-col items-center gap-4">
			<p className="flex items-center justify-center gap-2">
				<Star className="h-4 w-4" />
				Tip: keep this open during stream and click whenever a star message comes in.
			</p>

			<a
				href="https://ko-fi.com/elfington"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 px-4 py-2 text-yellow-300 hover:bg-yellow-300/10 transition-all"
			>
				Support development of free tools for IRIAM streamers
			</a>
		</div>
      </div>
    </div>
  );
}

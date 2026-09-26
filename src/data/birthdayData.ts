/**
 * 🌸 KIRAN YADAV'S BIRTHDAY SURPRISE DATA CONFIGURATION 🌸
 * 
 * You can customize photos, friend messages, captions, and jokes below.
 * Place your real photos in the /assets/ folder (e.g., assets/photo1.jpg, assets/photo2.jpg)
 * or use any URL or base64 data.
 * High-quality fallback photos and illustrations are included so the website
 * looks stunning immediately out-of-the-box!
 */

export interface BirthdayPerson {
  name: string;
  nickname: string;
  targetExam: string;
  insideJoke: string;
  birthdayDate: string; // ISO date or time
}

export interface MemoryPhoto {
  id: string;
  image: string;
  fallbackImage: string;
  title: string;
  caption: string;
  date?: string;
  sticker?: 'bow' | 'heart' | 'star' | 'flower' | 'sparkle';
  tilt?: number; // degrees
}

export interface FlipQuality {
  id: number;
  emoji: string;
  title: string;
  description: string;
  vibe: string;
}

export interface FriendMessage {
  id: string;
  name: string;
  relationship: string;
  avatar?: string;
  message: string;
  envelopeColor?: string;
  stampEmoji?: string;
}

// ----------------------------------------------------
// 🎀 CORE DETAILS
// ----------------------------------------------------
export const birthdayPerson: BirthdayPerson = {
  name: "Kiran Yadav",
  nickname: "Minus 2",
  targetExam: "CA Final",
  insideJoke: "Cop ylot",
  birthdayDate: "2026-09-27T00:00:00", // 12:00 AM
};

// ----------------------------------------------------
// 📸 OUR MEMORIES (PHOTOS)
// Add your real photos to assets/photo1.jpg, etc.
// ----------------------------------------------------
export const memories: MemoryPhoto[] = [
  {
    id: "mem-1",
    image: "assets/photo1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    title: "That Unforgettable Day 🩷",
    caption: "One of those laughter-filled memories worth keeping forever. Even when you were in full Minus 2 mode!",
    date: "Unconditional Laughs",
    sticker: "bow",
    tilt: -3
  },
  {
    id: "mem-2",
    image: "assets/photo2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    title: "Candid Perfection ✨",
    caption: "Proof that you can look like an angel right before blurting out something totally chaotic.",
    date: "Golden Hour Glow",
    sticker: "sparkle",
    tilt: 2.5
  },
  {
    id: "mem-3",
    image: "assets/photo3.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    title: "The Signature Kiran Smile 🥹",
    caption: "The smile that lights up any room, cures bad moods, and tricks everyone into thinking she is innocent.",
    date: "Pure Happiness",
    sticker: "heart",
    tilt: -2
  },
  {
    id: "mem-4",
    image: "assets/photo4.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    title: "Study Sessions & Shenanigans 📚",
    caption: "90% talking about life, 8% complaining about CA syllabus, 2% actual studying.",
    date: "Late Night Talks",
    sticker: "star",
    tilt: 3
  },
  {
    id: "mem-5",
    image: "assets/photo5.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    title: "Partner in Crime 👯‍♀️",
    caption: "Life wouldn't be half as entertaining without our endless inside jokes and your iconic commentary.",
    date: "Forever Vibes",
    sticker: "flower",
    tilt: -1.5
  },
  {
    id: "mem-6",
    image: "assets/photo6.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    title: "Future CA Kiran Yadav 📈",
    caption: "Looking forward to calling you CA Kiran Yadav. You are going to conquer those exams with flying colors!",
    date: "Destined for Greatness",
    sticker: "bow",
    tilt: 2
  }
];

// ----------------------------------------------------
// 💕 12 THINGS THAT MAKE KIRAN SPECIAL (FLIP CARDS)
// ----------------------------------------------------
export const specialQualities: FlipQuality[] = [
  {
    id: 1,
    emoji: "🥹",
    title: "Your Warm Heart",
    description: "You genuinely care for the people in your life, even when you pretend you're just here to roast us.",
    vibe: "Pure Warmth"
  },
  {
    id: 2,
    emoji: "😂",
    title: "Your Sense of Humour",
    description: "Nobody else can make a typo or a mispronounced word become a whole multi-year meme like you do.",
    vibe: "Comedy Queen"
  },
  {
    id: 3,
    emoji: "📚",
    title: "Relentless Determination",
    description: "Preparing for CA Final is no joke, but your grit and discipline through late nights are deeply inspiring.",
    vibe: "Unstoppable"
  },
  {
    id: 4,
    emoji: "✨",
    title: "The Little Things You Do",
    description: "Remembering tiny details, checking in on friends, and bringing an infectious energy everywhere.",
    vibe: "Thoughtful Soul"
  },
  {
    id: 5,
    emoji: "🌸",
    title: "Your Radiant Smile",
    description: "A smile so bright that it makes everyone around you instantly feel happier and at ease.",
    vibe: "Sunshine Energy"
  },
  {
    id: 6,
    emoji: "🎀",
    title: "The Real Minus 2",
    description: "One of a kind. Impossible to replace. Slightly impossible to explain to normal human beings.",
    vibe: "Iconic Legend"
  },
  {
    id: 7,
    emoji: "🦋",
    title: "Your Resilience",
    description: "No matter how tough the days get, you dust yourself off, make a funny remark, and keep moving forward.",
    vibe: "Fierce Strength"
  },
  {
    id: 8,
    emoji: "🎧",
    title: "Best Vibe Contributor",
    description: "Whether it is listening to music, ranting about life, or sharing memes, you make time fly by.",
    vibe: "Top Tier Company"
  },
  {
    id: 9,
    emoji: "🧠",
    title: "Sharp & Brilliant",
    description: "Behind the silly jokes is an incredibly smart mind capable of crunching the toughest accounting standards.",
    vibe: "Brain & Beauty"
  },
  {
    id: 10,
    emoji: "☕",
    title: "Chai & Rant Companion",
    description: "The official world champion of turning a 5-minute study break into a 45-minute philosophical debate.",
    vibe: "Certified Chatterbox"
  },
  {
    id: 11,
    emoji: "🧮",
    title: "Future CA Energy",
    description: "You have that natural aura of someone who will sign audit reports with royal confidence.",
    vibe: "Boss Lady"
  },
  {
    id: 12,
    emoji: "🩷",
    title: "A Truly Loyal Friend",
    description: "Someone who stays by your side, celebrates your wins, and makes you feel truly valued and seen.",
    vibe: "Friend for Life"
  }
];

// ----------------------------------------------------
// 💌 MESSAGES FROM YOUR PEOPLE (ENVELOPES)
// Easily customize friend names & personal letters!
// ----------------------------------------------------
export const friendMessages: FriendMessage[] = [
  {
    id: "msg-1",
    name: "Aman",
    relationship: "Study Partner & Meme Co-conspirator",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    message: "Happy Birthday Kiran!! 🎂 May this year bring you clearing both groups of CA Final with exemptions everywhere! Keep being the hilarious Minus 2 we all adore. Have the sweetest day!",
    envelopeColor: "#FFD1DC",
    stampEmoji: "💌"
  },
  {
    id: "msg-2",
    name: "Pooja",
    relationship: "Chai & Gossip Partner",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    message: "Happiest Birthday to the girl who brings all the sunshine! 🌸 Thank you for always listening to my endless rants and laughing at the dumbest things with me. So proud of you always!",
    envelopeColor: "#FFE4EC",
    stampEmoji: "🌸"
  },
  {
    id: "msg-3",
    name: "Rohan",
    relationship: "The Cop ylot Witness",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80",
    message: "Happy Birthday Minus 2! 😂 I still laugh whenever I see the word Copilot anywhere. Wishing you a year full of victories, tasty food, and fewer viral typos. You're the best!",
    envelopeColor: "#FFB6C8",
    stampEmoji: "✈️"
  },
  {
    id: "msg-4",
    name: "Sneha",
    relationship: "Late Night Call Buddy",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    message: "To the most hardworking, sweet, and wonderfully crazy girl: HAPPY BIRTHDAY! 🩷 Never doubt how capable you are. CA Kiran Yadav is loading, and we are ready to party!",
    envelopeColor: "#FFF0F5",
    stampEmoji: "🎀"
  },
  {
    id: "msg-5",
    name: "Vikram",
    relationship: "College Bestie",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    message: "Happy Birthday Kiran! 🎉 Another year of being iconic. May all your ledgers balance, your tax computations be exact, and your smile stay as radiant as ever. Cheers to you!",
    envelopeColor: "#FFD1DC",
    stampEmoji: "📊"
  },
  {
    id: "msg-6",
    name: "Ananya",
    relationship: "Heart to Heart Soul",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    message: "Dearest Kiran, seeing you strive for your goals while keeping your kind heart intact makes me so proud. Wish you infinite happiness, boundless peace, and all the cake! 🎂✨",
    envelopeColor: "#FFE4EC",
    stampEmoji: "💖"
  }
];

// ----------------------------------------------------
// 🎁 FINAL SURPRISE DATA
// Best photo together + closing heartfelt letter
// ----------------------------------------------------
export const finalSurpriseData = {
  bestPhoto: "assets/best-photo.jpg",
  fallbackPhoto: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
  title: "Forever Grateful for You 🩷",
  dateText: "Happy Birthday, Kiran! 🎂🎀",
  letterLines: [
    "Keep smiling.",
    "Keep laughing.",
    "Keep chasing your dreams.",
    "Keep annoying your friends.",
    "And please...",
    "Never stop saying “Cop ylot”. 😂",
    "I hope this year brings you happiness, success, peace and everything you've been wishing for.",
    "And hopefully one day very soon...",
    "CA KIRAN YADAV 🥹✨",
    "Until then...",
    "Stay the same crazy, wonderful Minus 2.",
    "Happy Birthday! 🎂🩷🎀✨"
  ],
  signoff: "— From someone who is lucky to have you as a friend ❤️"
};

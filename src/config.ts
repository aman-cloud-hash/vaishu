/**
 * BIRTHDAY SURPRISE WEBSITE CONFIGURATION (Respectful Roman Hinglish)
 * 
 * Saari details, captions, messages aur configuration yahan se control hoti hain.
 * Tone: Respectful Roman Hinglish using 'aap', 'aapko', 'aapka', 'aapki', 'aapke'.
 */

export interface PhotoItem {
  id: number;
  originalFilename: string;
  src: string;
  thumb: string;
  width: number;
  height: number;
  aspectRatio: number;
  orientation: 'portrait' | 'landscape' | 'square';
  caption: string;
  rotation: number;
}

export interface BirthdayConfig {
  // Personal Details
  recipientName: string;
  senderName: string;
  birthdayDate?: string;

  // Visual Theme Colors
  theme: {
    sand: string;
    ivory: string;
    seafoam: string;
    teal: string;
    coral: string;
    peach: string;
    lavender: string;
    ink: string;
  };

  // Invitation Gate Screen
  invitation: {
    teaser: string;
    headline: string;
    buttonText: string;
    badgeText: string;
    subNote: string;
  };

  // Hero Section
  hero: {
    badge: string;
    headline: string;
    supportingLine: string;
    primaryCta: string;
    secondaryCta: string;
    scrollHint: string;
    featuredPhotoIds: number[];
  };

  // Gallery Section
  gallery: {
    sectionTitle: string;
    sectionSubtitle: string;
    hintText: string;
    badgeText: string;
    endNote: string;
    controls: {
      prevPhoto: string;
      nextPhoto: string;
      closeModal: string;
      filterAll: string;
      filterPortraits: string;
      filterLandscape: string;
      viewScrapbook: string;
      viewGrid: string;
    };
    photos: PhotoItem[];
  };

  // Birthday Letter Section
  letter: {
    heading: string;
    subheading: string;
    dateBadge: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    stampTag: string;
    stampSub: string;
  };

  // Interactive Surprise (Cake & Wish)
  interactiveSurprise: {
    heading: string;
    instruction: string;
    buttonAria: string;
    actionButtonText: string;
    revealedMessage: string;
    resetButtonText: string;
    badgeText: string;
    wishLockedTitle: string;
  };

  // Footer Closing
  footer: {
    line1: string;
    line2: string;
    replayText: string;
    backToTop: string;
    footnote: string;
  };
}

export const birthdayConfig: BirthdayConfig = {
  // Personal Details
  recipientName: 'Vaishu',
  senderName: 'Aman',
  birthdayDate: 'Special Day',

  // Coastal Scrapbook Palette
  theme: {
    sand: '#F3E6D3',
    ivory: '#FFF9F1',
    seafoam: '#C5E6DD',
    teal: '#246B70',
    coral: '#EE9B87',
    peach: '#F6C9A7',
    lavender: '#D7CCE8',
    ink: '#203C43',
  },

  // Opening Gate / Invitation
  invitation: {
    teaser: 'Aapke liye ek chhota sa birthday surprise hai! 💛',
    headline: 'Aapke liye ek chhota sa birthday surprise hai! 💛',
    buttonText: 'Surprise dekhein! ✨',
    badgeText: 'Khaas Aapke Liye 💌',
    subNote: 'Aapki pyaari photos aur dil se likhe messages ke saath sajaya gaya hai.',
  },

  // Hero Section
  hero: {
    badge: 'Beachside Birthday Scrapbook 🐚',
    headline: 'Happy Birthday, Vaishu! 🥳',
    supportingLine: 'Aap meri closest friend hain, toh birthday surprise bhi kuch special hona chahiye tha! Ye chhoti si website sirf aapke liye.',
    primaryCta: 'Apni photos dekhein 📸',
    secondaryCta: 'Aapke liye ek message 💌',
    scrollHint: 'Neeche scroll kijiye aur apni photos dekhein ✨',
    featuredPhotoIds: [1, 7, 11, 23, 27],
  },

  // Memories Gallery
  gallery: {
    sectionTitle: 'Aapki photos, dher saari smiles!',
    sectionSubtitle: 'Socha aapki photos ko ek special jagah de doon. Aaj birthday girl ki poori gallery toh banti hai!',
    hintText: 'Kisi bhi photo pe tap kijiye poori screen pe dekhne ke liye ✨',
    badgeText: 'Aapki Khaas Yaadein 📸',
    endNote: 'Saari photos dil se sajayi gayi hain aapke birthday ke liye ✨',
    controls: {
      prevPhoto: 'Pichhli photo',
      nextPhoto: 'Agli photo',
      closeModal: 'Band karein',
      filterAll: 'Saari Photos',
      filterPortraits: 'Portraits',
      filterLandscape: 'Landscape',
      viewScrapbook: 'Scrapbook Andaaz',
      viewGrid: 'Clean Grid',
    },
    photos: [
  {
    "id": 1,
    "originalFilename": "IMG-20261016-WA0040.jpg",
    "src": "/photos/vaishu-01.jpg",
    "thumb": "/photos/thumbs/vaishu-01-thumb.jpg",
    "width": 1092,
    "height": 1600,
    "aspectRatio": 0.6825,
    "orientation": "portrait",
    "caption": "Ye smile toh banti hai! \u2728",
    "rotation": -1.5
  },
  {
    "id": 2,
    "originalFilename": "IMG-20261016-WA0044.jpg",
    "src": "/photos/vaishu-02.jpg",
    "thumb": "/photos/thumbs/vaishu-02-thumb.jpg",
    "width": 1363,
    "height": 1439,
    "aspectRatio": 0.9472,
    "orientation": "portrait",
    "caption": "Birthday girl ka main character moment.",
    "rotation": 1.2
  },
  {
    "id": 3,
    "originalFilename": "IMG-20261016-WA0046.jpg",
    "src": "/photos/vaishu-03.jpg",
    "thumb": "/photos/thumbs/vaishu-03-thumb.jpg",
    "width": 960,
    "height": 720,
    "aspectRatio": 1.3333,
    "orientation": "landscape",
    "caption": "Bas aise hi khush rahiye \ud83d\udc9b",
    "rotation": -0.8
  },
  {
    "id": 4,
    "originalFilename": "IMG-20261016-WA0052.jpg",
    "src": "/photos/vaishu-04.jpg",
    "thumb": "/photos/thumbs/vaishu-04-thumb.jpg",
    "width": 720,
    "height": 1280,
    "aspectRatio": 0.5625,
    "orientation": "portrait",
    "caption": "Aapki ye smile sabse bright lagti hai.",
    "rotation": 1.8
  },
  {
    "id": 5,
    "originalFilename": "IMG-20261016-WA0055.jpg",
    "src": "/photos/vaishu-05.jpg",
    "thumb": "/photos/thumbs/vaishu-05-thumb.jpg",
    "width": 720,
    "height": 1280,
    "aspectRatio": 0.5625,
    "orientation": "portrait",
    "caption": "Har frame mein ek positivity hai \u2728",
    "rotation": -1.2
  },
  {
    "id": 6,
    "originalFilename": "IMG-20261016-WA0058.jpg",
    "src": "/photos/vaishu-06.jpg",
    "thumb": "/photos/thumbs/vaishu-06-thumb.jpg",
    "width": 720,
    "height": 1280,
    "aspectRatio": 0.5625,
    "orientation": "portrait",
    "caption": "Ye photo sach mein bahut achhi hai!",
    "rotation": 0.9
  },
  {
    "id": 7,
    "originalFilename": "IMG-20261016-WA0060.jpg",
    "src": "/photos/vaishu-07.jpg",
    "thumb": "/photos/thumbs/vaishu-07-thumb.jpg",
    "width": 900,
    "height": 1200,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "caption": "Aapke birthday album ki ek pyaari si yaad.",
    "rotation": -1.7
  },
  {
    "id": 8,
    "originalFilename": "IMG-20261016-WA0066.jpg",
    "src": "/photos/vaishu-08.jpg",
    "thumb": "/photos/thumbs/vaishu-08-thumb.jpg",
    "width": 928,
    "height": 1920,
    "aspectRatio": 0.4833,
    "orientation": "portrait",
    "caption": "Kitni sweet aur genuine smile hai aapki!",
    "rotation": 1.4
  },
  {
    "id": 9,
    "originalFilename": "IMG-20261016-WA0068.jpg",
    "src": "/photos/vaishu-09.jpg",
    "thumb": "/photos/thumbs/vaishu-09-thumb.jpg",
    "width": 1440,
    "height": 1920,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "caption": "Hamesha aise hi muskurate rahiye \ud83c\udf38",
    "rotation": -0.9
  },
  {
    "id": 10,
    "originalFilename": "IMG-20261016-WA0071.jpg",
    "src": "/photos/vaishu-10.jpg",
    "thumb": "/photos/thumbs/vaishu-10-thumb.jpg",
    "width": 1440,
    "height": 1920,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "caption": "Aapka ye andaaz bilkul natural aur khushnuma hai.",
    "rotation": 1.6
  },
  {
    "id": 11,
    "originalFilename": "IMG-20261016-WA0086.jpg",
    "src": "/photos/vaishu-11.jpg",
    "thumb": "/photos/thumbs/vaishu-11-thumb.jpg",
    "width": 1086,
    "height": 1448,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "caption": "Ye smile toh banti hai! \u2728",
    "rotation": -1.4
  },
  {
    "id": 12,
    "originalFilename": "IMG-20261016-WA0088.jpg",
    "src": "/photos/vaishu-12.jpg",
    "thumb": "/photos/thumbs/vaishu-12-thumb.jpg",
    "width": 1086,
    "height": 1448,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "caption": "Birthday girl ka gorgeous look!",
    "rotation": -1.5
  },
  {
    "id": 13,
    "originalFilename": "IMG-20261016-WA0089.jpg",
    "src": "/photos/vaishu-13.jpg",
    "thumb": "/photos/thumbs/vaishu-13-thumb.jpg",
    "width": 960,
    "height": 1280,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "caption": "Golden moments jo hamesha yaad rahenge.",
    "rotation": 1.2
  },
  {
    "id": 14,
    "originalFilename": "IMG-20261016-WA0092.jpg",
    "src": "/photos/vaishu-14.jpg",
    "thumb": "/photos/thumbs/vaishu-14-thumb.jpg",
    "width": 960,
    "height": 1280,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "caption": "Aapki khushi dekh kar sabka din ban jaye.",
    "rotation": -0.8
  },
  {
    "id": 15,
    "originalFilename": "IMG-20261016-WA0093.jpg",
    "src": "/photos/vaishu-15.jpg",
    "thumb": "/photos/thumbs/vaishu-15-thumb.jpg",
    "width": 960,
    "height": 1280,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "caption": "Aapka sabse favorite candid shot!",
    "rotation": 1.8
  },
  {
    "id": 16,
    "originalFilename": "IMG-20261016-WA0094.jpg",
    "src": "/photos/vaishu-16.jpg",
    "thumb": "/photos/thumbs/vaishu-16-thumb.jpg",
    "width": 963,
    "height": 1280,
    "aspectRatio": 0.7523,
    "orientation": "portrait",
    "caption": "Bas aise hi chamakte rahiye \ud83c\udf1f",
    "rotation": -1.2
  },
  {
    "id": 17,
    "originalFilename": "IMG-20261016-WA0098.jpg",
    "src": "/photos/vaishu-17.jpg",
    "thumb": "/photos/thumbs/vaishu-17-thumb.jpg",
    "width": 720,
    "height": 1280,
    "aspectRatio": 0.5625,
    "orientation": "portrait",
    "caption": "Ek aur khoobsurat yaad aapke safar se.",
    "rotation": 0.9
  },
  {
    "id": 18,
    "originalFilename": "IMG-20261016-WA0100.jpg",
    "src": "/photos/vaishu-18.jpg",
    "thumb": "/photos/thumbs/vaishu-18-thumb.jpg",
    "width": 720,
    "height": 960,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "caption": "Aapka style aur smile dono unmatched hain.",
    "rotation": -1.7
  },
  {
    "id": 19,
    "originalFilename": "IMG-20261016-WA0101.jpg",
    "src": "/photos/vaishu-19.jpg",
    "thumb": "/photos/thumbs/vaishu-19-thumb.jpg",
    "width": 899,
    "height": 1599,
    "aspectRatio": 0.5622,
    "orientation": "portrait",
    "caption": "Ye photo sach mein dil khush kar deti hai.",
    "rotation": 1.4
  },
  {
    "id": 20,
    "originalFilename": "IMG-20261016-WA0102.jpg",
    "src": "/photos/vaishu-20.jpg",
    "thumb": "/photos/thumbs/vaishu-20-thumb.jpg",
    "width": 843,
    "height": 1920,
    "aspectRatio": 0.4391,
    "orientation": "portrait",
    "caption": "Har photo mein aapka alag hi charm hai.",
    "rotation": -0.9
  },
  {
    "id": 21,
    "originalFilename": "IMG-20261016-WA0103.jpg",
    "src": "/photos/vaishu-21.jpg",
    "thumb": "/photos/thumbs/vaishu-21-thumb.jpg",
    "width": 960,
    "height": 1280,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "caption": "Birthday girl ka main character moment.",
    "rotation": 1.6
  },
  {
    "id": 22,
    "originalFilename": "IMG-20261016-WA0104.jpg",
    "src": "/photos/vaishu-22.jpg",
    "thumb": "/photos/thumbs/vaishu-22-thumb.jpg",
    "width": 562,
    "height": 1280,
    "aspectRatio": 0.4391,
    "orientation": "portrait",
    "caption": "Aapki happiness sabse zyada matter karti hai.",
    "rotation": -1.4
  },
  {
    "id": 23,
    "originalFilename": "IMG-20261016-WA0105.jpg",
    "src": "/photos/vaishu-23.jpg",
    "thumb": "/photos/thumbs/vaishu-23-thumb.jpg",
    "width": 1200,
    "height": 1600,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "caption": "Aapki ye smile sach mein sabse khaas hai \ud83d\udc9b",
    "rotation": -1.5
  },
  {
    "id": 24,
    "originalFilename": "IMG-20261016-WA0107.jpg",
    "src": "/photos/vaishu-24.jpg",
    "thumb": "/photos/thumbs/vaishu-24-thumb.jpg",
    "width": 963,
    "height": 1280,
    "aspectRatio": 0.7523,
    "orientation": "portrait",
    "caption": "Aapke chehre pe ye khushi hamesha rahe.",
    "rotation": 1.2
  },
  {
    "id": 25,
    "originalFilename": "IMG-20261016-WA0108.jpg",
    "src": "/photos/vaishu-25.jpg",
    "thumb": "/photos/thumbs/vaishu-25-thumb.jpg",
    "width": 720,
    "height": 1280,
    "aspectRatio": 0.5625,
    "orientation": "portrait",
    "caption": "Kitna pyaara click hai ye!",
    "rotation": -0.8
  },
  {
    "id": 26,
    "originalFilename": "IMG-20261016-WA0111.jpg",
    "src": "/photos/vaishu-26.jpg",
    "thumb": "/photos/thumbs/vaishu-26-thumb.jpg",
    "width": 960,
    "height": 1280,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "caption": "Aapka ye cheerful vibe sabse best hai.",
    "rotation": 1.8
  },
  {
    "id": 27,
    "originalFilename": "IMG-20261016-WA0112.jpg",
    "src": "/photos/vaishu-27.jpg",
    "thumb": "/photos/thumbs/vaishu-27-thumb.jpg",
    "width": 899,
    "height": 1599,
    "aspectRatio": 0.5622,
    "orientation": "portrait",
    "caption": "Pure happiness aur positive energy \u2728",
    "rotation": -1.2
  },
  {
    "id": 28,
    "originalFilename": "IMG-20261016-WA0114.jpg",
    "src": "/photos/vaishu-28.jpg",
    "thumb": "/photos/thumbs/vaishu-28-thumb.jpg",
    "width": 540,
    "height": 960,
    "aspectRatio": 0.5625,
    "orientation": "portrait",
    "caption": "Aapke liye dher saari khushiyan aur best wishes.",
    "rotation": 0.9
  },
  {
    "id": 29,
    "originalFilename": "IMG-20261016-WA0115.jpg",
    "src": "/photos/vaishu-29.jpg",
    "thumb": "/photos/thumbs/vaishu-29-thumb.jpg",
    "width": 899,
    "height": 1599,
    "aspectRatio": 0.5622,
    "orientation": "portrait",
    "caption": "Ek aisi photo jo hamesha yaad rahegi.",
    "rotation": -1.7
  },
  {
    "id": 30,
    "originalFilename": "IMG-20261016-WA0116.jpg",
    "src": "/photos/vaishu-30.jpg",
    "thumb": "/photos/thumbs/vaishu-30-thumb.jpg",
    "width": 720,
    "height": 1280,
    "aspectRatio": 0.5625,
    "orientation": "portrait",
    "caption": "Ye smile toh banti hai! \u2728",
    "rotation": 1.4
  },
  {
    "id": 31,
    "originalFilename": "IMG-20261016-WA0117.jpg",
    "src": "/photos/vaishu-31.jpg",
    "thumb": "/photos/thumbs/vaishu-31-thumb.jpg",
    "width": 720,
    "height": 1280,
    "aspectRatio": 0.5625,
    "orientation": "portrait",
    "caption": "Aapka ye pyaara sa andaaz hamesha yaad rahega.",
    "rotation": -0.9
  },
  {
    "id": 32,
    "originalFilename": "IMG-20261016-WA0118.jpg",
    "src": "/photos/vaishu-32.jpg",
    "thumb": "/photos/thumbs/vaishu-32-thumb.jpg",
    "width": 720,
    "height": 1280,
    "aspectRatio": 0.5625,
    "orientation": "portrait",
    "caption": "Bas aise hi khush rahiye \ud83d\udc9b",
    "rotation": 1.6
  },
  {
    "id": 33,
    "originalFilename": "IMG-20261016-WA0119.jpg",
    "src": "/photos/vaishu-33.jpg",
    "thumb": "/photos/thumbs/vaishu-33-thumb.jpg",
    "width": 720,
    "height": 1280,
    "aspectRatio": 0.5625,
    "orientation": "portrait",
    "caption": "Aaj ka poora din sirf aapke naam!",
    "rotation": -1.4
  }
]
  },

  // Birthday Letter
  letter: {
    heading: 'Aapke liye kuch dil se 💌',
    subheading: 'Meri sabse khaas dost ke liye',
    dateBadge: 'Aapka Birthday 🎂',
    salutation: 'Dearest Vaishu,',
    paragraphs: [
      'Happy Birthday, Vaishu! 🥳♥️',
      'Aaj ka din tumhare liye khaas hai, toh khoob enjoy karo aur hamesha aise hi muskurati raho 😊',
      'Dekhte-dekhte apni friendship ko 5–6 saal ho gaye hain. Tumhe apni sabse achhi dost bolun ya phir kuch aur, bas itna pata hai ki mere liye tum sabse best ho 😁',
      'Tum meri baatein sunti ho, mujhe samajhti ho, aur mujhe pareshan bhi bahut karti ho 🤫😂 Mazak kar raha hoon… lekin sach mein, tum meri life mein bahut khaas ban gayi ho. Aur haan madam, humare beech kabhi jhagda ho jaaye toh maaf kar diya karo… kuchu puchu 😚😂',
      'Subah uthkar mummy ke baad tumhe hi dhoondhta hoon—phone dekhta hoon ki Vaishu ka message aaya hai ya nahi 🙂 Ab tumse baat karna mere din ka ek pyara sa hissa ban gaya hai.',
      'Aage ka future kisi ne nahi dekha, isliye abhi se bade-bade promises nahi karunga. Lekin aaj jo apna saath hai, woh mere liye bahut special hai. Bas yahi chahta hoon ki tum mere saath raho aur hum aise hi baatein karte rahein, ek dusre ko samajhte rahein aur thoda-bahut pareshan bhi karte rahein 😚😂',
      'Jaldi milenge, Vaishu 🫶 Jab milenge na, toh sabse pehle ek dusre ko tight hug karenge 🫂 Phir saath mein time spend karenge, dher saari baatein karenge aur ghoomenge 😁',
      'Tumhe Marine Drive pasand hai na? Wahan bhi jayenge, baithkar aaram se baatein karenge… aur jahan-jahan tumhara mann karega, sab jagah jayenge. Bas tum Mumbai aa jao, sweetheart 😚♥️',
      'Aaj aur kya bolun… bas itna hi ki **you are a very special person to me** ♥️',
      'Sooo, Happy Birthday toooo you, Vaishu! 😊😚\nAaj khoob enjoy karo madam, aur cake mein mera hissa yaad rakhna! 🎂😁'
    ],
    closing: 'Dil se duaon aur dosti ke saath,',
    signature: 'Aman',
    stampTag: 'Sabse Khaas Dost',
    stampSub: 'Hamesha khush rahiye'
  },

  // Interactive Birthday Cake & Wish
  interactiveSurprise: {
    heading: 'Ab ek wish toh banti hai! 🎂',
    instruction: 'Pehle ek wish maangiye, phir candles pe tap kijiye.',
    buttonAria: 'Candles pe tap karke wish maangiye',
    actionButtonText: 'Candles blow kijiye 🎂',
    revealedMessage: 'Wish secret rakhiye… bas dil se chahta hoon ki poori ho! ✨',
    resetButtonText: 'Ek baar aur! 😄',
    badgeText: 'Interactive Wish 🕯️',
    wishLockedTitle: 'Aapki Wish Lock Ho Gayi! ✨',
  },

  // Footer Closing
  footer: {
    line1: 'Aaj ka din aapke naam, Vaishu! 💛',
    line2: 'Hamesha aise hi muskurati rahiye. Happy Birthday, meri sabse khaas dost!',
    replayText: 'Surprise dobara dekhein 💌',
    backToTop: 'Upar jayein ⬆️',
    footnote: 'Aapke liye dil se banaya gaya ek chhota sa birthday surprise • Aman',
  }
};

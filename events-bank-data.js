/** Default odds are decimal multipliers (higher = rarer / bigger payout). */

window.BET_CATEGORIES = [
  { id: "catchphrases", label: "Catchphrases & clichés" },
  { id: "dates",        label: "Dates & activities" },
  { id: "romance",      label: "Romance & physical" },
  { id: "drama",        label: "Drama & conflict" },
  { id: "emotions",     label: "Emotions & personal" },
  { id: "ceremonies",   label: "Ceremonies & roses" },
  { id: "twists",       label: "Guests & twists" },
  { id: "production",   label: "Production & editing" },
];

window.MASTER_BET_EVENTS = [
  /* ── Catchphrases & clichés ── */
  { text: "Someone says \u201Cjourney\u201D about the process", odds: 1.5, category: "catchphrases" },
  { text: "Someone mentions being \u201Cvulnerable\u201D", odds: 1.5, category: "catchphrases", phase: "late-heavy" },
  { text: "Someone says \u201Cconnection\u201D (unironically)", odds: 1.5, category: "catchphrases" },
  { text: "Someone says \u201CI\u2019m really being myself in here\u201D", odds: 1.7, category: "catchphrases" },
  { text: "Someone says they\u2019re \u201Call in\u201D", odds: 2, category: "catchphrases", phase: "late-heavy" },
  { text: "The Bachelorette says she\u2019s \u201Cconfused\u201D", odds: 2.1, category: "catchphrases", phase: "mid-peak" },
  { text: "The Bachelorette says \u201CI\u2019m overwhelmed\u201D", odds: 2, category: "catchphrases" },
  { text: "Excessive use of \u201Cliterally\u201D", odds: 2.1, category: "catchphrases" },
  { text: "Someone says they\u2019re \u201Cfalling\u201D for someone", odds: 2.2, category: "catchphrases", phase: "late-heavy" },
  { text: "The Bachelorette says she needs \u201Cclarity\u201D before the rose ceremony", odds: 2.1, category: "catchphrases", phase: "mid-peak" },
  { text: "Mie or Sofie mentions High School Musical, pink, or Stig Rossen", odds: 3.5, category: "catchphrases" },

  /* ── Dates & activities ── */
  { text: "Group date with a physical challenge", odds: 1.9, category: "dates", phase: "early-heavy" },
  { text: "Date involving water (boat, beach, pool)", odds: 2, category: "dates" },
  { text: "Cooking / kitchen date", odds: 2, category: "dates" },
  { text: "Dancing happens on a date", odds: 2.1, category: "dates" },
  { text: "Picnic with blanket and basket aesthetic", odds: 2, category: "dates" },
  { text: "Italian language or culture is explicitly themed on a date", odds: 2.2, category: "dates" },
  { text: "City-trip montage (scooter, convertible)", odds: 2.4, category: "dates" },
  { text: "Painting, ceramics, or art class as a date", odds: 2.5, category: "dates" },
  { text: "Spa, massage, or wellness activity", odds: 2.6, category: "dates", phase: "late-heavy" },
  { text: "Karaoke or lip-sync battle", odds: 2.8, category: "dates", phase: "early-heavy" },

  /* ── Romance & physical ── */
  { text: "Candles / fairy lights / romantic setup cliché", odds: 1.8, category: "romance" },
  { text: "A kiss happens", odds: 2, category: "romance", phase: "late-heavy" },
  { text: "Sunset shot used as a transition", odds: 2.2, category: "romance" },
  { text: "Kids / how many / family plans are discussed", odds: 2.4, category: "romance", phase: "late-heavy" },
  { text: "More than one kissing scene in the episode", odds: 2.6, category: "romance", phase: "late-heavy" },
  { text: "Hot tub, pool, or \u201Cshirtless\u201D footage", odds: 2.7, category: "romance" },
  { text: "First kiss of the season (clearly highlighted)", odds: 3.2, category: "romance", phase: "early-heavy" },
  { text: "A suitor says \u201CI love you\u201D or \u201CI\u2019m falling in love\u201D", odds: 7, category: "romance", phase: "late-heavy" },

  /* ── Drama & conflict ── */
  { text: "Steals time at the cocktail party (\u201CCan I steal you?\u201D)", odds: 1.7, category: "drama", phase: "early-heavy" },
  { text: "A suitor interrupts another mid-conversation with Mie or Sofie", odds: 2, category: "drama", phase: "early-heavy" },
  { text: "Two suitors argue openly", odds: 2.5, category: "drama", phase: "mid-peak" },
  { text: "A suitor leaves the show voluntarily", odds: 12, category: "drama" },

  /* ── Emotions & personal ── */
  { text: "At least one suitor cries on camera", odds: 1.3, category: "emotions", phase: "late-heavy" },
  { text: "At least one suitor says \u201CI\u2019m so nervous\u201D", odds: 1.4, category: "emotions", phase: "early-heavy" },
  { text: "A suitor mentions their family back home", odds: 1.5, category: "emotions" },
  { text: "Someone cries during a conversation (not ITM)", odds: 2.2, category: "emotions", phase: "late-heavy" },
  { text: "Mie mentions her job as a nurse", odds: 2, category: "emotions" },
  { text: "An ex is mentioned", odds: 2.4, category: "emotions" },
  { text: "Past relationship trauma is shared", odds: 2.1, category: "emotions", phase: "mid-peak" },
  { text: "Someone is seen working out / fitness footage", odds: 2.3, category: "emotions" },
  { text: "A suitor mentions a past relationship that hurt him", odds: 2.5, category: "emotions", phase: "mid-peak" },
  { text: "Sofie mentions her dog Lulu", odds: 2.5, category: "emotions" },
  { text: "Love languages are discussed", odds: 3.1, category: "emotions", phase: "mid-peak" },
  { text: "Parent video message or FaceTime", odds: 3.7, category: "emotions", phase: "late-heavy" },
  { text: "Zodiac / astrology / Mercury retrograde comes up", odds: 4.2, category: "emotions" },
  { text: "A suitor has been married or has kids, and it comes out", odds: 6, category: "emotions", phase: "early-heavy" },

  /* ── Ceremonies & roses ── */
  { text: "Cocktail party before a rose ceremony", odds: 1.8, category: "ceremonies" },
  { text: "To-be-continued cliffhanger mid-ceremony", odds: 3.4, category: "ceremonies" },
  { text: "No cocktail party (announced or skipped)", odds: 4.3, category: "ceremonies" },
  { text: "Surprise rose rule twist", odds: 4.5, category: "ceremonies" },
  { text: "Extra rose or save by the host", odds: 4.6, category: "ceremonies" },
  { text: "A suitor rejects a rose, but no one else has to leave", odds: 8, category: "ceremonies" },

  /* ── Guests & twists ── */
  { text: "Petra comforts a crying suitor", odds: 3, category: "twists", phase: "late-heavy" },
  { text: "Friend shows up to give advice mid-season", odds: 3.5, category: "twists", phase: "mid-peak" },
  { text: "Surprise guest (friend, family, ex-season alumni)", odds: 4, category: "twists", phase: "late-heavy" },
  { text: "Fortune teller, tarot, or psychic segment", odds: 4, category: "twists" },
  { text: "Petra announces a \u201Csurprise\u201D or twist", odds: 4, category: "twists" },
  { text: "Petra pulls a suitor aside for a private chat", odds: 5, category: "twists", phase: "mid-peak" },
  { text: "Petra interrupts a date or interaction midway", odds: 8, category: "twists" },
  { text: "A new suitor enters the show mid-season", odds: 15, category: "twists", phase: "early-heavy" },

  /* ── Production & editing ── */
  { text: "Someone brings a gift on a date", odds: 2.6, category: "production" },
  { text: "Costume party theme (80s, masquerade, etc.)", odds: 3, category: "production" },
];

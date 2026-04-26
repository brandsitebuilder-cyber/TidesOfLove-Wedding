export type Language = 'en';

export const content = {
  en: {
    nav: {
      landing: "Home",
      story: "Our Story",
      invitation: "Invitation",
      schedule: "Schedule",
      dressCode: "Dress Code & RSVP",
      accommodation: "Accommodation & Travel",
      thingsToDo: "Things To Do",
      faq: "FAQ",
      gallery: "Gallery"
    },
    hero: {
      names: "Sarah & Kyle",
      date: "12 June 2027",
      venue: "Azure Beach Resort · Ballito, KwaZulu-Natal",
      rsvpBtn: "RSVP"
    },
    story: {
      subtitle: "Where the Ocean Meets the Sky",
      title: "Our Story",
      p1: "They met while scuba diving off the coast of Mozambique. Sarah was a marine biologist documenting coral reefs, Kyle was a photographer capturing the ocean's beauty. A shared air tank during an unexpected current turned into dinner on the beach, and the rest is history.",
      p2: "What started as a dive buddy partnership quickly became something deeper. Between underwater adventures and sunset walks along the shore, they discovered a love as vast and constant as the ocean itself.",
      p3: "From the beaches of Mozambique to the shores of Ballito, their journey has been guided by the tides. Every wave brought them closer, every sunset painted their story more beautifully.",
      p4: "Today, they are a perfect balance — she is his anchor, and he is her horizon. We are privileged to celebrate the beautiful life they have woven together."
    },
    invitation: {
      title: "Save the Date",
      intro: "With the sand between our toes and the ocean breeze in the air,",
      names: "Sarah Mitchell & Kyle Reynolds",
      action: "are getting married.",
      message: "Join us as we exchange vows beachside and begin our forever together, surrounded by the people we love most.",
      datetime: "Saturday, 12 June 2027 at 15:00",
      venue: "Azure Beach Resort, Ballito",
      attire: "Attire: Beach Formal / Tropical Elegance",
      closing: "We can't wait to celebrate with you under the sun, sand, and stars."
    },
    schedule: {
      subtitle: "The Timeline",
      title: "Schedule",
      items: [
        { time: "14:00", event: "Guest Arrival & Welcome Cocktails" },
        { time: "15:00", event: "Wedding Ceremony (Beachside)" },
        { time: "16:00", event: "Canapés & Sundowners" },
        { time: "18:30", event: "Reception & Dinner" },
        { time: "20:00", event: "Speeches & Cake Cutting" },
        { time: "21:00", event: "Dancing Under the Stars" }
      ]
    },
    details: {
      title: "Details & RSVP",
      attireSubtitle: "What to Wear",
      attireTitle: "Tropical Elegance",
      attireIntro: "We invite you to embrace the beachside atmosphere with tropical elegance.",
      attireList: [
        "For gentlemen: Linen suits or smart chinos in light colours, no ties.",
        "For ladies: Flowy maxi dresses, bright colours, wedges for the sand.",
        "Barefoot ceremony optional — feel the sand between your toes!"
      ],
      rsvpSubtitle: "Join Us",
      rsvpTitle: "RSVP",
      rsvpText: "We kindly ask that you confirm your attendance before 31 March 2027. You may RSVP via the form below.",
      dietarySubtitle: "Menu",
      dietaryTitle: "Dietary Requirements",
      dietaryText: "Please let us know if you have any allergies or specific dietary needs so we can ensure you are well cared for on the day.",
      thankYou: "Thank You",
      form: {
        name: "Full Name(s)",
        cellphone: "Cellphone Number",
        cellphonePlaceholder: "082 123 4567",
        attending: "Number Attending",
        dietary: "Dietary Requirements",
        message: "Message for the Couple",
        submit: "Submit RSVP",
        duplicateError: "It looks like you've already RSVP'd with this number!",
        networkError: "Failed to connect to the server. Please check your connection.",
        genericError: "Something went wrong. Please try again later."
      }
    },
    accommodation: {
      subtitle: "Stay & Travel",
      title: "Accommodation & Travel",
      intro: "We look forward to welcoming you to Ballito. We have gathered the following information to ensure your travel and stay are as seamless and enjoyable as possible.",
      onsiteTitle: "Recommended Stays",
      onsiteList: [
        "Ballito offers a range of beautiful accommodation options along the Dolphin Coast.",
        "Consider booking early as June is peak whale-watching season.",
        "Shuttle services are available from King Shaka International Airport."
      ],
      tableTitle: "Accommodation Options",
      tableHeaders: ["Accommodation", "Dist.", "Notes", ""],
      tableData: [
        ["Azure Beach Resort (Venue, On-site)", "0 km", "On-site", "Venue"],
        ["The Sandcastle B&B", "~2 km", "Beachfront, cosy", "ballitobnb.co.za"],
        ["Moya Beach Lodge", "~5 km", "Luxury beach lodge", "moyabeachlodge.co.za"],
        ["Ocean View Guest House", "~8 km", "Sea views, affordable", "oceanviewballito.co.za"],
        ["Various Airbnbs", "Ballito", "Self-catering options", "airbnb.com"]
      ],
      transportTitle: "Transport Tips",
      transportList: [
        "E-Hailing: Uber and Bolt are active in Ballito, ideal for point-to-point trips.",
        "Shuttles: Ensure you book early. When booking, ask for late night shuttle services.",
        "Parking on-site: Parking is available at the venue. We strongly recommend using a transport service so everyone can enjoy the celebration."
      ],
      shuttleTitle: "Recommended Shuttles",
      shuttleData: [
        ["Ballito Shuttle Services", "ballitoshuttle.co.za"],
        ["Dolphin Coast Transfers", "dolphincoasttransfers.co.za"],
        ["King Shaka Airport Shuttle", "ksiairportshuttle.co.za"],
        ["KZN Private Transfers", "kznprivatetransfers.co.za"]
      ]
    },
    faq: {
      subtitle: "Details",
      title: "FAQ",
      questions: [
        {
          q: "Is there accommodation on-site?",
          a: "Yes! Azure Beach Resort has beautiful rooms available. Please contact the resort directly for group booking rates."
        },
        {
          q: "What about transport from the airport?",
          a: "King Shaka International Airport is about 15 minutes from Ballito. We recommend booking a shuttle service — see our recommended providers in the Accommodation section."
        },
        {
          q: "Can we swim at the beach?",
          a: "Yes! The beach is beautiful. June is winter in South Africa but the coast remains mild (18-22°C). Perfect for walks, though swimming may be a bit cool."
        },
        {
          q: "Is it adults-only?",
          a: "Yes, we want everyone to relax and enjoy. The celebration is adults-only, so please make the most of it!"
        },
        {
          q: "When should I RSVP by?",
          a: "Please kindly submit your RSVP by 31 March 2027. We look forward to celebrating with you."
        }
      ]
    },
    thingsToDo: {
      subtitle: "Explore",
      title: "Things to Do in Ballito",
      intro: "The Dolphin Coast offers endless beauty and adventure. Here are our suggestions for your stay:",
      list: [
        { name: "Ballito Beach Walk", desc: "A beautiful stretch of golden sand perfect for morning walks, sunset strolls, and dolphin spotting." },
        { name: "Whale Watching", desc: "June is peak whale season! Book a boat tour to see the majestic southern right whales migrating along the coast." },
        { name: "Thompson Bay Tidal Pools", desc: "Natural tidal pools along the rocky shore, perfect for a refreshing dip and exploring marine life." },
        { name: "Holla Trails", desc: "Coastal hiking trails with breathtaking views of the Indian Ocean — suitable for all fitness levels." },
        { name: "Local Seafood Restaurants", desc: "Ballito is famous for its fresh seafood. Try the linefish, prawns, and the local favorite — Durban-style bunny chow." },
        { name: "King Shaka International Airport", desc: "Just 15 minutes from Ballito, making travel to and from the coast a breeze." }
      ]
    },
    gallery: {
      subtitle: "Moments",
      title: "Gallery"
    },
    footer: {
      text: "Sarah & Kyle · 12 June 2027 · Tides of Love"
    }
  }
};

(() => {
  // English text on the page -> Kiswahili. Edit the Swahili on the right, never the English on the left.
  const SW = {
    // shared
    "Skip to content": "Ruka hadi maudhui",
    "Mon – Fri: 7:30 – 16:00": "Jumatatu – Ijumaa: 7:30 – 16:00",
    "Pre & Primary School": "Shule ya Awali na Msingi",
    "Almasi Pre & Primary School": "Shule ya Awali na Msingi Almasi",
    "Almasi Pre and Primary School, home": "Shule ya Awali na Msingi Almasi, nyumbani",
    "Menu": "Menyu",
    "Main": "Kuu",
    "Language": "Lugha",
    "Home": "Nyumbani",
    "About": "Kuhusu Sisi",
    "Classes": "Madarasa",
    "Admissions & Fees": "Uandikishaji na Ada",
    "Gallery": "Picha",
    "Contact": "Mawasiliano",
    "Contact us": "Wasiliana Nasi",
    "Explore": "Viungo Muhimu",
    "Nursery, Standard 1 and Standard 2. A small school with big care.": "Chekechea, Darasa la Kwanza na Darasa la Pili. Shule ndogo yenye malezi bora.",
    "© 2026 Almasi Pre & Primary School. All rights reserved.": "© 2026 Shule ya Awali na Msingi Almasi. Haki zote zimehifadhiwa.",
    "Chat with us on WhatsApp": "Zungumza nasi kupitia WhatsApp",
    "Chat on WhatsApp": "Zungumza kwenye WhatsApp",
    "Photo viewer": "Kitazamaji cha picha",
    "Close photo": "Funga picha",

    // page titles
    "Almasi Pre & Primary School | Nursery, Standard 1 and Standard 2": "Shule ya Awali na Msingi Almasi | Chekechea, Darasa la Kwanza na Darasa la Pili",
    "Contact | Almasi Pre & Primary School": "Mawasiliano | Shule ya Awali na Msingi Almasi",
    "Admissions & Fees | Almasi Pre & Primary School": "Uandikishaji na Ada | Shule ya Awali na Msingi Almasi",
    "Classes | Almasi Pre & Primary School": "Madarasa | Shule ya Awali na Msingi Almasi",
    "About | Almasi Pre & Primary School": "Kuhusu Sisi | Shule ya Awali na Msingi Almasi",
    "Gallery | Almasi Pre & Primary School": "Picha | Shule ya Awali na Msingi Almasi",

    // home: slideshow
    "Highlights": "Mambo Muhimu",
    "1 of 3": "1 kati ya 3",
    "2 of 3": "2 kati ya 3",
    "3 of 3": "3 kati ya 3",
    "Previous slide": "Slaidi iliyotangulia",
    "Next slide": "Slaidi inayofuata",
    "Pause slideshow": "Simamisha slaidi",
    "Go to slide 1": "Nenda kwenye slaidi 1",
    "Go to slide 2": "Nenda kwenye slaidi 2",
    "Go to slide 3": "Nenda kwenye slaidi 3",
    "Nursery · Standard 1 · Standard 2": "Chekechea · Darasa la Kwanza · Darasa la Pili",
    "Small classes.": "Madarasa madogo.",
    "Big care.": "Malezi bora.",
    "A strong start.": "Mwanzo imara.",
    "We help young children learn, play and grow with confidence, one class at a time.": "Tunawasaidia watoto wadogo kujifunza, kucheza na kukua kwa kujiamini, darasa kwa darasa.",
    "Apply now": "Jiunge Sasa",
    "Learn about us": "Tufahamu Zaidi",
    "Pupils sitting together on a swing in the school playground": "Wanafunzi wameketi pamoja kwenye bembea uwanjani shuleni",
    "Admissions": "Uandikishaji",
    "New pupils are": "Wanafunzi wapya",
    "welcome": "wanakaribishwa",
    "Registration is free. Next term starts on 5 January 2027.": "Usajili ni bure. Muhula ujao unaanza tarehe 5 Januari 2027.",
    "How to apply": "Jinsi ya Kuomba",
    "A pupil in the yellow and black Almasi school uniform": "Mwanafunzi aliyevaa sare ya njano na nyeusi ya Shule ya Almasi",
    "Safe and caring": "Mahali salama penye upendo",
    "A safe place to": "Mahali salama pa",
    "play and learn": "kucheza na kujifunza",
    "A fenced playground with swings and play equipment, and teachers who know every child.": "Uwanja wa michezo uliozungushiwa uzio wenye bembea na vifaa vya kuchezea, na walimu wanaomfahamu kila mtoto.",
    "See our gallery": "Tazama Picha Zetu",
    "Visit us": "Tutembelee",
    "Two pupils in school uniform holding hands": "Wanafunzi wawili waliovaa sare za shule wakiwa wameshikana mikono",

    // home: classes, why, band
    "Our classes": "Madarasa yetu",
    "Three classes. One caring community.": "Madarasa matatu. Jumuiya moja yenye upendo.",
    "Nursery": "Chekechea",
    "A gentle, play-based start: letters, numbers, songs and learning to share.": "Mwanzo mpole wa kujifunza kupitia michezo: herufi, namba, nyimbo na kujifunza kushirikiana.",
    "Learn more →": "Soma zaidi →",
    "Standard 1": "Darasa la Kwanza",
    "Reading, writing and number work, built on what children learn in nursery.": "Kusoma, kuandika na hesabu, kwa kujenga juu ya yale watoto wanayojifunza chekechea.",
    "Standard 2": "Darasa la Pili",
    "Growing confidence in reading, writing and maths, with close attention to every child.": "Kujiamini kunakoongezeka katika kusoma, kuandika na hisabati, kwa uangalizi wa karibu kwa kila mtoto.",
    "Why Almasi": "Kwa Nini Almasi",
    "A small school where every child is known": "Shule ndogo ambapo kila mtoto anajulikana",
    "Small classes": "Madarasa madogo",
    "About 70 pupils across three classes, so teachers know every child by name.": "Takriban wanafunzi 70 katika madarasa matatu, hivyo walimu wanamfahamu kila mtoto kwa jina.",
    "A safe place to play": "Mahali salama pa kucheza",
    "A fenced playground with swings and a merry-go-round, where children burn energy and make friends.": "Uwanja wa michezo uliozungushiwa uzio wenye bembea na vifaa vya kuchezea, ambapo watoto hucheza na kupata marafiki.",
    "Officially registered": "Shule iliyosajiliwa rasmi",
    "Almasi Pre and Primary School is a registered school, with its own school bank account for fees.": "Shule ya Awali na Msingi Almasi ni shule iliyosajiliwa, yenye akaunti yake ya benki kwa ajili ya ada.",
    "New pupils are welcome": "Wanafunzi wapya wanakaribishwa",

    // contact
    "We would love to hear from you": "Tungependa kusikia kutoka kwako",
    "Call us, message us on WhatsApp, or come and visit.": "Tupigie simu, tutumie ujumbe kwenye WhatsApp, au njoo ututembelee.",
    "Phone and WhatsApp": "Simu na WhatsApp",
    "Email": "Barua pepe",
    "Address": "Anwani",
    "Opening hours": "Saa za kazi",
    "Monday to Friday, 7:30 – 16:00": "Jumatatu hadi Ijumaa, 7:30 – 16:00",
    "WhatsApp us": "Tuandikie WhatsApp",
    "Call now": "Piga simu sasa",
    "Map showing the location of Almasi Pre and Primary School in Mkombozi, Kibaha": "Ramani inayoonyesha mahali Shule ya Awali na Msingi Almasi ilipo Mkombozi, Kibaha",
    "Open in Google Maps →": "Fungua kwenye Google Maps →",

    // admissions
    "Join Almasi Pre and Primary School": "Jiunge na Shule ya Awali na Msingi Almasi",
    "New pupils are welcome. Registration is free.": "Wanafunzi wapya wanakaribishwa. Usajili ni bure.",
    "Free": "Bure",
    "Registration": "Usajili",
    "5 January 2027": "5 Januari 2027",
    "Next term starts": "Muhula ujao unaanza",
    "Meals included": "Chakula kimejumuishwa",
    "For Standard 1 and 2": "Kwa Darasa la Kwanza na la Pili",
    "School fees, paid per quarter (robo muhula)": "Ada ya shule, inayolipwa kila robo muhula",
    "Class": "Darasa",
    "Fee": "Ada",
    "Standard day, 7:30 – 13:00": "Siku ya kawaida, 7:30 – 13:00",
    "Extended day, until 16:00": "Siku ndefu, hadi 16:00",
    "Standard 1 and Standard 2": "Darasa la Kwanza na Darasa la Pili",
    "Other costs": "Gharama nyingine",
    "Item": "Kipengele",
    "Cost": "Gharama",
    "School uniform": "Sare za shule",
    "Books and textbooks": "Vitabu na vitabu vya kiada",
    "All classes, paid once a year": "Madarasa yote, hulipwa mara moja kwa mwaka",
    "Please ask us for the school's official payment details before you pay any fees.": "Tafadhali tuulize maelezo rasmi ya malipo ya shule kabla ya kulipa ada yoyote.",
    "Three simple steps": "Hatua tatu rahisi",
    "Message or call us": "Tutumie ujumbe au utupigie simu",
    "Tell us your child's age and the class you are interested in.": "Tuambie umri wa mtoto wako na darasa unalolitaka.",
    "Visit the school": "Tembelea shule",
    "Come and see the classrooms and playground, and meet the teachers.": "Njoo uone madarasa na uwanja wa michezo, na ukutane na walimu.",
    "Register your child": "Msajili mtoto wako",
    "Registration is free. Your child is ready to start when the term opens.": "Usajili ni bure. Mtoto wako yuko tayari kuanza muhula utakapofunguliwa.",
    "Ready to join us?": "Uko tayari kujiunga nasi?",
    "Send us a message and we will tell you what to do next.": "Tutumie ujumbe nasi tutakueleza hatua inayofuata.",
    "Message us on WhatsApp": "Tutumie ujumbe WhatsApp",

    // classes
    "Nursery, Standard 1 and Standard 2": "Chekechea, Darasa la Kwanza na Darasa la Pili",
    "Three small classes, each with close attention to every child.": "Madarasa matatu madogo, kila moja likiwa na uangalizi wa karibu kwa kila mtoto.",
    "A gentle start to school. Through play, songs, stories and simple activities, children learn letters, numbers, and how to listen, share and take turns.": "Mwanzo mpole wa shule. Kupitia michezo, nyimbo, hadithi na shughuli rahisi, watoto hujifunza herufi, namba, na jinsi ya kusikiliza, kushirikiana na kusubiri zamu.",
    "School day": "Siku ya shule",
    "Extended day": "Siku ndefu",
    "Children can stay until 16:00": "Watoto wanaweza kubaki hadi 16:00",
    "Fee per quarter": "Ada kwa robo muhula",
    "TZS 50,000 (TZS 100,000 for the extended day)": "TZS 50,000 (TZS 100,000 kwa siku ndefu)",
    "TZS 60,000 per year": "TZS 60,000 kwa mwaka",
    "See fees and how to apply": "Angalia ada na jinsi ya kuomba",
    "Children begin formal learning. They build reading, writing and number skills step by step, with teachers who know each child by name.": "Watoto huanza masomo rasmi. Hujenga ujuzi wa kusoma, kuandika na hesabu hatua kwa hatua, wakiwa na walimu wanaomfahamu kila mtoto kwa jina.",
    "Meals": "Chakula",
    "Included": "Kimejumuishwa",
    "Children grow in confidence. They practise reading, writing and maths every day, with close attention to every child.": "Watoto hukua kwa kujiamini. Hufanya mazoezi ya kusoma, kuandika na hisabati kila siku, wakiwa na uangalizi wa karibu kwa kila mtoto.",
    "Come and see for yourself": "Njoo ujionee mwenyewe",

    // about
    "About us": "Kuhusu sisi",
    "Our story": "Hadithi Yetu",
    "Almasi Pre and Primary School began in 2018.": "Shule ya Awali na Msingi Almasi ilianza mwaka 2018.",
    "How Almasi began": "Jinsi Almasi ilivyoanza",
    "Started by one man who wanted to build a school": "Ilianzishwa na mtu mmoja aliyetaka kujenga shule",
    "Almasi Pre and Primary School was started in 2018 by Ramadhani Almasi, who wanted to build a school.": "Shule ya Awali na Msingi Almasi ilianzishwa mwaka 2018 na Ramadhani Almasi, aliyetaka kujenga shule.",
    "Today the school is run by his son. It welcomes children from Nursery to Standard 2, in small classes where teachers know every child.": "Leo shule inaendeshwa na mwanawe. Inawakaribisha watoto kuanzia Chekechea hadi Darasa la Pili, katika madarasa madogo ambapo walimu wanamfahamu kila mtoto.",
    "Almasi Pre and Primary School is an officially registered school in Mkombozi, Kibaha.": "Shule ya Awali na Msingi Almasi ni shule iliyosajiliwa rasmi iliyoko Mkombozi, Kibaha.",
    "See our classes": "Tazama madarasa yetu",
    "Pupils sitting at their wooden desks in an Almasi classroom": "Wanafunzi wameketi kwenye madawati yao ya mbao katika darasa la Almasi",
    "Year the school was founded": "Mwaka shule ilipoanzishwa",
    "About 70": "Takriban 70",
    "Pupils": "Wanafunzi",
    "Classes: Nursery, Standard 1 and Standard 2": "Madarasa: Chekechea, Darasa la Kwanza na Darasa la Pili",
    "Come and meet us": "Njoo ukutane nasi",

    // gallery
    "Life at Almasi": "Maisha ya Almasi",
    "A look at our school, our classrooms and our pupils.": "Mtazamo wa shule yetu, madarasa yetu na wanafunzi wetu.",
    "The Almasi school building, painted sky blue with a rainbow": "Jengo la shule ya Almasi, lililopakwa rangi ya samawati na upinde wa mvua",
    "Pupils sitting at their wooden desks in a classroom": "Wanafunzi wameketi kwenye madawati yao ya mbao darasani",
    "Children playing on the merry-go-round": "Watoto wakicheza kwenye kifaa cha kuzunguka uwanjani",
    "A smiling pupil holding a pre-school certificate": "Mwanafunzi anayetabasamu akiwa ameshika cheti cha elimu ya awali",
    "A pupil proudly holding a certificate": "Mwanafunzi akiwa ameshika cheti kwa fahari",
    "Swings and play equipment in the school playground": "Bembea na vifaa vya kuchezea katika uwanja wa shule",
    "Come and see us in person": "Njoo utuone ana kwa ana",
  };

  const STORE = 'almasi-lang';
  const ATTRS = ['alt', 'aria-label', 'title'];
  const norm = (s) => s.replace(/\s+/g, ' ').trim();
  const textOriginals = new WeakMap();
  const attrOriginals = new WeakMap();
  const englishTitle = document.title;
  let buttons = [];

  function translateText(lang) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => /^(SCRIPT|STYLE|NOSCRIPT)$/.test(n.parentNode.nodeName)
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT,
    });
    let node;
    while ((node = walker.nextNode())) {
      if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue);
      const en = textOriginals.get(node);
      const key = norm(en);
      if (!key) continue;
      const sw = lang === 'sw' ? SW[key] : undefined;
      node.nodeValue = sw ? en.match(/^\s*/)[0] + sw + en.match(/\s*$/)[0] : en;
    }
  }

  function translateAttrs(lang) {
    document.querySelectorAll(ATTRS.map((a) => `[${a}]`).join(',')).forEach((el) => {
      let saved = attrOriginals.get(el);
      if (!saved) { saved = {}; attrOriginals.set(el, saved); }
      ATTRS.forEach((a) => {
        if (!el.hasAttribute(a)) return;
        if (!(a in saved)) saved[a] = el.getAttribute(a);
        const sw = lang === 'sw' ? SW[norm(saved[a])] : undefined;
        el.setAttribute(a, sw || saved[a]);
      });
    });
  }

  function setLang(lang) {
    document.documentElement.lang = lang;
    document.title = lang === 'sw' ? (SW[norm(englishTitle)] || englishTitle) : englishTitle;
    translateText(lang);
    translateAttrs(lang);
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    try { localStorage.setItem(STORE, lang); } catch (e) { /* storage blocked: ignore */ }
  }

  function buildSwitch() {
    const wrap = document.createElement('div');
    wrap.className = 'lang';
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', 'Language');
    const made = [['en', 'EN', 'English'], ['sw', 'SW', 'Kiswahili']].map(([code, label, name]) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.dataset.lang = code;
      b.textContent = label;
      b.setAttribute('aria-label', name);
      b.addEventListener('click', () => setLang(code));
      wrap.append(b);
      return b;
    });
    const anchor = document.querySelector('.nav-toggle');
    if (anchor) anchor.before(wrap);
    else document.querySelector('.site-header .container')?.append(wrap);
    return made;
  }

  function initialLang() {
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'sw' || q === 'en') return q;
    try {
      const saved = localStorage.getItem(STORE);
      if (saved === 'sw' || saved === 'en') return saved;
    } catch (e) { /* ignore */ }
    return (navigator.language || '').toLowerCase().startsWith('sw') ? 'sw' : 'en';
  }

  buttons = buildSwitch();
  setLang(initialLang());
})();
const continentsData = {
    america: {
        "paleo-indians": {
    title: "Paleo-Indians",
    sub_title: "First Peoples of the Americas",
    timeline: "c. 20,000 – 8,000 BCE",
    civ_desc: "The Paleo-Indians were the earliest known inhabitants of the Americas, arriving from Asia via the Bering Land Bridge during the last Ice Age. They lived as nomadic hunter-gatherers, adapting to harsh climates and pursuing megafauna like mammoths and bison. Their migration laid the foundation for all future civilizations across the continents.",
    dyk_fact: "Archaeologists have found Paleo-Indian stone tools spread from Alaska to South America, showing how fast these people expanded across two continents.",
    "food & cooking": {
      desc: "Hunted large animals like mammoths and bison, gathered wild plants.",
      modal_desc: "Paleo-Indians were highly skilled hunters, using spears tipped with stone points to bring down mammoths, mastodons, and giant bison. They supplemented hunting with gathered berries, nuts, and roots. Fire was central for cooking meat, which was roasted on open flames or dried for storage.",
      modal_pic: "paleo-food.jpg"
    },
    "clothing & adornment": {
      desc: "Animal hides provided warmth and protection.",
      modal_desc: "Clothing was fashioned from mammoth and bison hides, often sewn with bone needles. Fur-lined garments kept them warm in Ice Age environments. Ornamentation was rare but some evidence suggests simple beads and pendants made from bone or shells.",
      modal_pic: "paleo-clothing.jpg"
    },
    "housing & settlement": {
      desc: "Temporary shelters made from hides, wood, and bones.",
      modal_desc: "Most Paleo-Indians were nomadic, constructing shelters from mammoth bones covered in hides, or simple wooden frames with branches. Camps were often near rivers or hunting grounds and were occupied seasonally depending on resource availability.",
      modal_pic: "paleo-houses.jpg"
    },
    "art & beliefs": {
      desc: "Rock art and carvings show spiritual traditions.",
      modal_desc: "Petroglyphs and carvings on bones suggest early symbolic thinking and spirituality. Some groups may have believed in animal spirits and practiced rituals before hunts, though evidence is limited.",
      modal_pic: "paleo-art.jpg"
    },
    "festivals & celebration": {
      desc: "Communal gatherings for hunting and survival.",
      modal_desc: "While large ceremonial festivals are not well-documented, gatherings for major hunts may have involved rituals, music using bone flutes, and storytelling around fires. These communal events reinforced group survival.",
      modal_pic: "paleo-festival.jpg"
    }
  },

  "clovis": {
    title: "Clovis Culture",
    sub_title: "Masters of Flint Technology",
    timeline: "c. 13,000 – 11,000 BCE",
    civ_desc: "The Clovis people are famous for their distinct stone tools, known as Clovis points, which were used for hunting megafauna. They were among the earliest widespread cultures in North America, spreading rapidly across the continent. Their disappearance coincided with the extinction of large Ice Age animals.",
    dyk_fact: "Clovis spear points have been found from Alaska to Venezuela, showing a shared technology across thousands of kilometers.",
    "food & cooking": {
      desc: "Relied heavily on hunting mammoths, mastodons, and bison.",
      modal_desc: "Clovis hunters used large, fluted stone points to bring down massive Ice Age animals. They also ate smaller game, fish, and wild plants. Meat was roasted or dried for portability during migrations.",
      modal_pic: "clovis-food.jpg"
    },
    "clothing & adornment": {
      desc: "Animal hide clothing with bone and shell ornaments.",
      modal_desc: "Clothing was adapted to the Ice Age climate, made from hides of hunted animals. Ornaments such as shell beads and bone carvings suggest a growing symbolic culture.",
      modal_pic: "clovis-clothing.jpg"
    },
    "housing & settlement": {
      desc: "Seasonal camps near rivers and hunting sites.",
      modal_desc: "Clovis people built temporary shelters of wood, hides, and brush. Camps were set near water sources and migratory routes of animals. Some evidence points to semi-permanent base camps in favorable regions.",
      modal_pic: "clovis-houses.jpg"
    },
    "art & beliefs": {
      desc: "Stone tool craftsmanship was central to their culture.",
      modal_desc: "Clovis points were not just functional but also symbolic, showing advanced flintknapping skills. Beliefs likely centered on animal spirits, with rituals before hunts. Burial sites show respect for the dead.",
      modal_pic: "clovis-art.jpg"
    },
    "festivals & celebration": {
      desc: "Hunting rituals and group feasts.",
      modal_desc: "Feasts likely followed successful hunts, with storytelling, music, and rituals dedicated to hunting spirits. These communal gatherings strengthened group bonds.",
      modal_pic: "clovis-festival.jpg"
    }
  },

  "olmec": {
    title: "Olmec Civilization",
    sub_title: "The Mother Culture of Mesoamerica",
    timeline: "c. 1500 – 400 BCE",
    civ_desc: "The Olmec were the earliest major civilization in Mesoamerica, thriving in the tropical lowlands of modern-day Mexico. They are best known for their colossal stone heads and for laying the cultural groundwork for later civilizations like the Maya and Aztec. Their religion, art, and urban planning influenced Mesoamerican culture for centuries.",
    dyk_fact: "The Olmecs invented the first writing system and calendar in the Americas.",
    "food & cooking": {
      desc: "Staple crops included maize, beans, squash, and cacao.",
      modal_desc: "The Olmec were skilled agriculturalists, cultivating maize as a staple, along with beans and squash. Cacao (used for chocolate drinks) was consumed in elite rituals. Fishing and hunting supplemented their diet, and they likely prepared tamales and other maize-based foods.",
      modal_pic: "olmec-food.jpg"
    },
    "clothing & adornment": {
      desc: "Cotton garments, feathered headdresses, and jade ornaments.",
      modal_desc: "Olmec elites wore cotton tunics and decorated themselves with elaborate feathered headdresses. Jade was highly valued, used for masks, pendants, and ear spools. Common people wore simpler woven clothing.",
      modal_pic: "olmec-clothing.jpg"
    },
    "housing & settlement": {
      desc: "Villages of thatched homes near rivers, with ceremonial centers.",
      modal_desc: "Most Olmecs lived in small villages of wattle-and-daub houses with thatched roofs. Their cities, like San Lorenzo and La Venta, contained ceremonial complexes with pyramids and ball courts, foreshadowing later Mesoamerican cities.",
      modal_pic: "olmec-houses.jpg"
    },
    "art & beliefs": {
      desc: "Famous for colossal stone heads and jaguar motifs.",
      modal_desc: "Olmec art reflected deep spiritual beliefs, with jaguar-human hybrids symbolizing shamanic power. Colossal basalt heads likely represented rulers. They practiced ritual bloodletting and possibly influenced the later Mesoamerican ballgame.",
      modal_pic: "olmec-art.jpg"
    },
    "festivals & celebration": {
      desc: "Religious ceremonies linked to agriculture and rulers.",
      modal_desc: "Festivals centered around fertility, rain, and harvest cycles. Priests performed rituals involving music, dance, and offerings to gods associated with maize and rain. Rulers may have presided over grand public ceremonies.",
      modal_pic: "olmec-festival.jpg"
    }
  },

  "maya_civilization": {
    title: "Maya Civilization",
    sub_title: "Central America",
    timeline: "2000 BCE – 1500 CE",
    civ_desc: "Advanced Mesoamerican civilization known for its writing, architecture, and astronomy.",
    dyk_fact: "Maya civilization developed a complex calendar system and hieroglyphic writing.",
    "food & cooking": {
      desc: "Corn, beans, and squash formed the dietary staple.",
      modal_desc: "Maya cuisine heavily relied on maize, chili peppers, and cacao, which was also used as currency.",
      modal_pic: "maya_food.jpg",
    },
    "clothing & adornment": {
      desc: "Wore cotton clothing, decorated with feathers and jade jewelry.",
      modal_desc: "Clothing indicated social status; nobles wore elaborate headdresses and ornaments.",
      modal_pic: "maya_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Lived in city-states with pyramids, plazas, and palaces.",
      modal_desc: "Houses were typically made of stone or adobe; cities featured monumental architecture.",
      modal_pic: "maya_housing.jpg",
    },
    "art & beliefs": {
      desc: "Believed in many gods; art included pottery, murals, and stelae.",
      modal_desc: "Religion influenced every aspect of life; monumental art depicted rulers and rituals.",
      modal_pic: "maya_art.jpg",
    },
    "festivals & celebration": {
      desc: "Celebrated agricultural and religious ceremonies.",
      modal_desc: "Festivals included music, dance, and offerings to gods tied to maize and rain cycles.",
      modal_pic: "maya_festival.jpg",
    }
  },

  "teotihuacan": {
    title: "Teotihuacan",
    sub_title: "Mexico",
    timeline: "100 BCE – 550 CE",
    civ_desc: "One of the largest pre-Columbian cities in the Americas, known for pyramids and urban planning.",
    dyk_fact: "Teotihuacan influenced later Mesoamerican civilizations, including the Aztecs.",
    "food & cooking": {
      desc: "Maize, beans, and squash were staples.",
      modal_desc: "Diet also included chili peppers, amaranth, and domesticated turkeys.",
      modal_pic: "teotihuacan_food.jpg",
    },
    "clothing & adornment": {
      desc: "Wore cotton garments and ornamental jewelry.",
      modal_desc: "Jewelry made from obsidian, jade, and shells indicated rank and role.",
      modal_pic: "teotihuacan_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Lived in apartment compounds and ceremonial centers.",
      modal_desc: "Urban grid layout with avenues, plazas, and temples.",
      modal_pic: "teotihuacan_housing.jpg",
    },
    "art & beliefs": {
      desc: "Beliefs centered on gods like the Feathered Serpent; art included murals and sculptures.",
      modal_desc: "Religious art adorned temples, depicting deities, rituals, and mythical creatures.",
      modal_pic: "teotihuacan_art.jpg",
    },
    "festivals & celebration": {
      desc: "Ceremonial processions and offerings at temples.",
      modal_desc: "Festivals celebrated gods of rain, sun, and fertility.",
      modal_pic: "teotihuacan_festival.jpg",
    }
  },

  "moche_civilization": {
    title: "Moche Civilization",
    sub_title: "Peru",
    timeline: "100 – 700 CE",
    civ_desc: "South American civilization known for its sophisticated pottery, irrigation, and metalwork.",
    dyk_fact: "Moche produced detailed ceramics depicting everyday life and rituals.",
    "food & cooking": {
      desc: "Corn, potatoes, beans, and seafood were staples.",
      modal_desc: "Agriculture thrived due to advanced irrigation systems along rivers.",
      modal_pic: "moche_food.jpg",
    },
    "clothing & adornment": {
      desc: "Clothing made from cotton, adorned with gold and feathers.",
      modal_desc: "Elite wore elaborate headdresses and jewelry to signify status.",
      modal_pic: "moche_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Built adobe structures and ceremonial pyramids.",
      modal_desc: "Settlements centered around temples and plazas for religious and civic life.",
      modal_pic: "moche_housing.jpg",
    },
    "art & beliefs": {
      desc: "Polytheistic; art included pottery, murals, and metalwork.",
      modal_desc: "Religious rituals often depicted in ceramics showing sacrifice and mythology.",
      modal_pic: "moche_art.jpg",
    },
    "festivals & celebration": {
      desc: "Ceremonial feasts and offerings to gods.",
      modal_desc: "Festivals tied to agriculture, rivers, and fertility cycles.",
      modal_pic: "moche_festival.jpg",
    }
  },

  "nazca_civilization": {
    title: "Nazca Civilization",
    sub_title: "Peru",
    timeline: "100 BCE – 800 CE",
    civ_desc: "Known for the Nazca Lines and advanced aqueduct systems in arid regions.",
    dyk_fact: "The Nazca Lines are massive geoglyphs visible only from the air.",
    "food & cooking": {
      desc: "Mainly corn, beans, squash, and potatoes.",
      modal_desc: "Irrigation systems supported agriculture in desert conditions.",
      modal_pic: "nazca_food.jpg",
    },
    "clothing & adornment": {
      desc: "Wore cotton and decorated textiles.",
      modal_desc: "Textiles were dyed with natural pigments and featured geometric patterns.",
      modal_pic: "nazca_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Lived in adobe houses; settlements were small and scattered.",
      modal_desc: "Nazca developed underground aqueducts called puquios to sustain villages.",
      modal_pic: "nazca_housing.jpg",
    },
    "art & beliefs": {
      desc: "Polytheistic; famous for geoglyphs and pottery.",
      modal_desc: "Art often depicted animals, plants, and ceremonial scenes.",
      modal_pic: "nazca_art.jpg",
    },
    "festivals & celebration": {
      desc: "Agricultural and religious ceremonies.",
      modal_desc: "Celebrations involved offerings to deities for rain and fertility.",
      modal_pic: "nazca_festival.jpg",
    }
  },

  "aztec_empire": {
    title: "Aztec Empire",
    sub_title: "Mexico",
    timeline: "1345 – 1521 CE",
    civ_desc: "Powerful Mesoamerican empire centered on Tenochtitlán, known for military prowess and human sacrifices.",
    dyk_fact: "Aztec capital Tenochtitlán was one of the largest cities in the world at its peak.",
    "food & cooking": {
      desc: "Maize, beans, squash, and chili peppers.",
      modal_desc: "Used cacao as currency and made beverages like chocolate for nobles.",
      modal_pic: "aztec_food.jpg",
    },
    "clothing & adornment": {
      desc: "Wore cotton garments; nobles had elaborate feathered attire.",
      modal_desc: "Jewelry and headdresses indicated social rank.",
      modal_pic: "aztec_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Lived in densely populated cities with canals and causeways.",
      modal_desc: "Tenochtitlán featured temples, markets, and palaces built on lake islands.",
      modal_pic: "aztec_housing.jpg",
    },
    "art & beliefs": {
      desc: "Polytheistic; famous for temples, sculptures, and codices.",
      modal_desc: "Religion influenced art, warfare, and daily life.",
      modal_pic: "aztec_art.jpg",
    },
    "festivals & celebration": {
      desc: "Celebrated ceremonies dedicated to gods like Huitzilopochtli.",
      modal_desc: "Festivals included dance, music, and ritual sacrifices.",
      modal_pic: "aztec_festival.jpg",
    }
  },

  "inca_empire": {
    title: "Inca Empire",
    sub_title: "Andes",
    timeline: "1438 – 1533 CE",
    civ_desc: "Largest empire in pre-Columbian America; known for engineering, roads, and quipu record system.",
    dyk_fact: "The Inca built Machu Picchu and an extensive road network across mountains.",
    "food & cooking": {
      desc: "Potatoes, maize, quinoa, and llamas for meat.",
      modal_desc: "Terraced farming and storage systems enabled food security.",
      modal_pic: "inca_food.jpg",
    },
    "clothing & adornment": {
      desc: "Wore tunics and mantles woven from llama and alpaca wool.",
      modal_desc: "Clothing designs indicated social status and region.",
      modal_pic: "inca_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Stone architecture in highland settlements.",
      modal_desc: "Terraced cities like Machu Picchu and administrative centers like Cusco.",
      modal_pic: "inca_housing.jpg",
    },
    "art & beliefs": {
      desc: "Worshiped Inti (sun god); produced textiles, ceramics, and metalwork.",
      modal_desc: "Art and architecture were deeply tied to religion and cosmology.",
      modal_pic: "inca_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious ceremonies for agriculture and sun worship.",
      modal_desc: "Inti Raymi festival celebrated the sun god with rituals and feasts.",
      modal_pic: "inca_festival.jpg",
    }
  },

  "mississippian_culture": {
    title: "Mississippian Culture",
    sub_title: "North America (Cahokia Mounds)",
    timeline: "800 – 1600 CE",
    civ_desc: "Native American civilization known for mound-building and complex societies.",
    dyk_fact: "Cahokia Mounds is the largest pre-Columbian settlement north of Mexico.",
    "food & cooking": {
      desc: "Corn, beans, squash, and hunting-gathering.",
      modal_desc: "Diet supplemented by hunting deer, turkey, and fishing.",
      modal_pic: "mississippian_food.jpg",
    },
    "clothing & adornment": {
      desc: "Wore woven fabrics, deerskin, and jewelry.",
      modal_desc: "Clothing often decorated with shells, beads, and feathers.",
      modal_pic: "mississippian_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Lived in wooden structures atop mounds and villages.",
      modal_desc: "Villages organized around central plazas and ceremonial mounds.",
      modal_pic: "mississippian_housing.jpg",
    },
    "art & beliefs": {
      desc: "Beliefs in nature spirits; art included pottery, stone carvings, and effigies.",
      modal_desc: "Mounds served religious and social purposes; art often symbolic.",
      modal_pic: "mississippian_art.jpg",
    },
    "festivals & celebration": {
      desc: "Seasonal and agricultural ceremonies.",
      modal_desc: "Festivals marked planting and harvest seasons with dance and rituals.",
      modal_pic: "mississippian_festival.jpg",
    }
  },

  "colonial_americas": {
    title: "Colonial Americas",
    sub_title: "North and South America",
    timeline: "1500s – 1800s",
    civ_desc: "Period of European colonization, trade, and cultural exchange in the Americas.",
    dyk_fact: "Colonial Americas saw the blending of Indigenous, European, and African cultures.",
    "food & cooking": {
      desc: "Combination of native and European foods.",
      modal_desc: "Introduced new crops, livestock, and cooking methods from Europe.",
      modal_pic: "colonial_food.jpg",
    },
    "clothing & adornment": {
      desc: "European-style clothing mixed with native fabrics.",
      modal_desc: "Colonists wore layered garments; indigenous people retained traditional styles.",
      modal_pic: "colonial_clothing.jpg",
    },
    "housing & settlement": {
      desc: "European-style houses alongside native settlements.",
      modal_desc: "Colonial towns featured churches, town squares, and farms.",
      modal_pic: "colonial_housing.jpg",
    },
    "art & beliefs": {
      desc: "Religious art and European influence prevalent.",
      modal_desc: "Mix of European art styles with local indigenous techniques.",
      modal_pic: "colonial_art.jpg",
    },
    "festivals & celebration": {
      desc: "Christian religious festivals became prominent.",
      modal_desc: "Celebrated Christmas, Easter, and harvest festivals blending native traditions.",
      modal_pic: "colonial_festival.jpg",
    }
  },

  "modern_americas": {
    title: "Modern Americas",
    sub_title: "North and South America",
    timeline: "1800s – Present",
    civ_desc: "Era marked by independence, industrialization, cultural diversity, and technological advancement.",
    dyk_fact: "Modern Americas encompass a wide range of cultures, economies, and political systems.",
    "food & cooking": {
      desc: "Diverse cuisines influenced by global and local traditions.",
      modal_desc: "Fusion foods and modern culinary techniques thrive in urban centers.",
      modal_pic: "modern_food.jpg",
    },
    "clothing & adornment": {
      desc: "Contemporary global fashion mixed with traditional attire.",
      modal_desc: "Clothing reflects personal expression and cultural heritage.",
      modal_pic: "modern_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Urban cities, suburbs, and rural areas with modern infrastructure.",
      modal_desc: "Architecture ranges from historic buildings to skyscrapers.",
      modal_pic: "modern_housing.jpg",
    },
    "art & beliefs": {
      desc: "Diverse art forms; secular and spiritual beliefs coexist.",
      modal_desc: "Art ranges from traditional crafts to modern installations and media arts.",
      modal_pic: "modern_art.jpg",
    },
    "festivals & celebration": {
      desc: "National, cultural, and religious festivals celebrated widely.",
      modal_desc: "Festivals include Independence Day, Carnival, Thanksgiving, and local traditions.",
      modal_pic: "modern_festival.jpg",
    }
  }
    },
    africa: { 
        "prehistoric_africa": {
    title: "Prehistoric Africa",
    sub_title: "Various regions across Africa",
    timeline: "c. 3,000,000 BCE – 3000 BCE",
    civ_desc: "Early humans, hunter-gatherers, and the development of stone tools and fire.",
    dyk_fact: "Africa is the cradle of humankind; earliest Homo sapiens fossils were found here.",
    "food & cooking": {
      desc: "Foraging, hunting, and fishing.",
      modal_desc: "Diet consisted of wild plants, fruits, nuts, and hunted animals; cooking methods included roasting over fire.",
      modal_pic: "prehistoric_food.jpg",
    },
    "clothing & adornment": {
      desc: "Animal hides, simple garments, and body decoration.",
      modal_desc: "Used natural materials like leaves, hides, and beads; body painting and jewelry signified identity and rituals.",
      modal_pic: "prehistoric_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Caves, huts, and temporary shelters.",
      modal_desc: "Shelters were made from wood, branches, leaves, and stone; nomadic lifestyle was common.",
      modal_pic: "prehistoric_housing.jpg",
    },
    "art & beliefs": {
      desc: "Rock art, carvings, and early spiritual practices.",
      modal_desc: "Cave paintings depicted animals, hunting scenes, and rituals; spiritual beliefs centered around nature and ancestors.",
      modal_pic: "prehistoric_art.jpg",
    },
    "festivals & celebration": {
      desc: "Rituals and communal gatherings.",
      modal_desc: "Ceremonies celebrated hunting successes, fertility, and seasonal changes.",
      modal_pic: "prehistoric_festival.jpg",
    }
  },

  "ancient_egypt": {
    title: "Ancient Egypt",
    sub_title: "Nile Valley",
    timeline: "c. 3100 BCE – 30 BCE",
    civ_desc: "One of the world’s earliest civilizations, known for pyramids, hieroglyphs, and pharaohs.",
    dyk_fact: "Egyptians believed in life after death and built monumental tombs for the pharaohs.",
    "food & cooking": {
      desc: "Grains, bread, beer, fish, and vegetables.",
      modal_desc: "Bread and beer were staples; Nile provided fish and irrigation for crops.",
      modal_pic: "egypt_food.jpg",
    },
    "clothing & adornment": {
      desc: "Linen garments and elaborate jewelry.",
      modal_desc: "Clothing was lightweight for the hot climate; jewelry made from gold, stones, and faience indicated status.",
      modal_pic: "egypt_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Mudbrick houses and monumental architecture.",
      modal_desc: "Homes were simple for commoners; pharaohs lived in palaces and temples.",
      modal_pic: "egypt_housing.jpg",
    },
    "art & beliefs": {
      desc: "Polytheistic; temples, statues, and hieroglyphs.",
      modal_desc: "Art depicted gods, pharaohs, and daily life; religion influenced architecture and society.",
      modal_pic: "egypt_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious festivals for gods and harvests.",
      modal_desc: "Celebrated festivals like Opet, honoring gods with processions, music, and rituals.",
      modal_pic: "egypt_festival.jpg",
    }
  },

  "kingdom_of_kush": {
    title: "Kingdom of Kush / Nubia",
    sub_title: "Nile Valley (South of Egypt)",
    timeline: "c. 1070 BCE – 350 CE",
    civ_desc: "African kingdom south of Egypt known for trade, pyramids, and ironwork.",
    dyk_fact: "Kushite rulers once controlled Egypt as the 25th Dynasty.",
    "food & cooking": {
      desc: "Grains, millet, sorghum, and livestock.",
      modal_desc: "Agriculture along the Nile supported a varied diet including meat and fish.",
      modal_pic: "kush_food.jpg",
    },
    "clothing & adornment": {
      desc: "Cotton and linen clothing; gold and jewelry.",
      modal_desc: "Clothing reflected status; jewelry made from gold and precious stones.",
      modal_pic: "kush_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Mudbrick homes and palace complexes.",
      modal_desc: "Settlements centered around trade hubs and royal palaces.",
      modal_pic: "kush_housing.jpg",
    },
    "art & beliefs": {
      desc: "Shared Egyptian religious beliefs; pyramids and temples.",
      modal_desc: "Art included temple carvings, statues, and painted tombs.",
      modal_pic: "kush_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and agricultural celebrations.",
      modal_desc: "Festivals involved honoring gods, royalty, and harvest cycles.",
      modal_pic: "kush_festival.jpg",
    }
  },

  "carthage": {
    title: "Carthage",
    sub_title: "North Africa (Tunisia)",
    timeline: "c. 814 BCE – 146 BCE",
    civ_desc: "Phoenician colony turned powerful city-state known for trade and naval strength.",
    dyk_fact: "Carthage was famous for its maritime trade and rivalry with Rome in the Punic Wars.",
    "food & cooking": {
      desc: "Grains, olives, fish, and wine.",
      modal_desc: "Carthaginians cultivated olives and grapes; seafood was a staple along the coast.",
      modal_pic: "carthage_food.jpg",
    },
    "clothing & adornment": {
      desc: "Wool and linen garments; jewelry for elites.",
      modal_desc: "Clothing styles influenced by Phoenician and Mediterranean cultures.",
      modal_pic: "carthage_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Urban city with fortified walls.",
      modal_desc: "Houses had courtyards; city featured harbors, markets, and temples.",
      modal_pic: "carthage_housing.jpg",
    },
    "art & beliefs": {
      desc: "Polytheistic; temples, sculptures, and mosaics.",
      modal_desc: "Worshipped gods like Baal and Tanit; art reflected religious and maritime themes.",
      modal_pic: "carthage_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious ceremonies and maritime festivals.",
      modal_desc: "Festivals honored gods and sea voyages; included sacrifices and feasting.",
      modal_pic: "carthage_festival.jpg",
    }
  },

  "aksumite_empire": {
    title: "Aksumite Empire",
    sub_title: "Horn of Africa (Ethiopia/Eritrea)",
    timeline: "c. 100 CE – 940 CE",
    civ_desc: "Trading empire known for monumental obelisks, Christianity, and coinage.",
    dyk_fact: "Aksum was one of the first major empires to adopt Christianity officially.",
    "food & cooking": {
      desc: "Teff, grains, livestock, and honey.",
      modal_desc: "Diet included injera (flatbread) and stews; traded goods added variety.",
      modal_pic: "aksum_food.jpg",
    },
    "clothing & adornment": {
      desc: "Cotton garments; beads and jewelry.",
      modal_desc: "Clothing reflected status; gold and silver jewelry were common among elites.",
      modal_pic: "aksum_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Stone-built houses and palaces.",
      modal_desc: "Urban centers had fortified palaces and churches; villages had simpler dwellings.",
      modal_pic: "aksum_housing.jpg",
    },
    "art & beliefs": {
      desc: "Christianity and traditional religions; carved stelae.",
      modal_desc: "Obelisks and church carvings reflected religious devotion.",
      modal_pic: "aksum_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious ceremonies and trade festivals.",
      modal_desc: "Christian festivals like Epiphany, alongside local ceremonies, were celebrated.",
      modal_pic: "aksum_festival.jpg",
    }
  },

  "mali_empire": {
    title: "Mali Empire",
    sub_title: "West Africa",
    timeline: "c. 1235 – 1600 CE",
    civ_desc: "West African empire famous for trade (gold, salt), education, and Timbuktu.",
    dyk_fact: "Mansa Musa, Mali's ruler, is considered one of the wealthiest people in history.",
    "food & cooking": {
      desc: "Millet, sorghum, rice, and livestock.",
      modal_desc: "Staple foods included porridge, grains, and fish; trade brought spices.",
      modal_pic: "mali_food.jpg",
    },
    "clothing & adornment": {
      desc: "Woven cotton garments; jewelry and colorful fabrics.",
      modal_desc: "Clothing reflected social class; gold jewelry and intricate patterns were prized.",
      modal_pic: "mali_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Mudbrick structures and mosques.",
      modal_desc: "Cities featured marketplaces, mosques, and royal palaces.",
      modal_pic: "mali_housing.jpg",
    },
    "art & beliefs": {
      desc: "Islamic influence and traditional beliefs; art included manuscripts and carvings.",
      modal_desc: "Architecture, metalwork, and manuscripts reflected cultural and religious synthesis.",
      modal_pic: "mali_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and cultural celebrations.",
      modal_desc: "Festivals included Islamic holidays and harvest celebrations.",
      modal_pic: "mali_festival.jpg",
    }
  },

  "songhai_empire": {
    title: "Songhai Empire",
    sub_title: "West Africa",
    timeline: "c. 1464 – 1591 CE",
    civ_desc: "Successor to Mali Empire, known for trade, learning, and military power.",
    dyk_fact: "Songhai’s capital, Gao, was a major center of commerce and scholarship.",
    "food & cooking": {
      desc: "Grains, millet, rice, and fish.",
      modal_desc: "Diet based on agriculture and riverine resources.",
      modal_pic: "songhai_food.jpg",
    },
    "clothing & adornment": {
      desc: "Cotton garments; turbans and jewelry.",
      modal_desc: "Elite attire included embroidered robes and gold ornaments.",
      modal_pic: "songhai_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Mudbrick cities with mosques and marketplaces.",
      modal_desc: "Urban centers like Timbuktu and Gao were cultural and economic hubs.",
      modal_pic: "songhai_housing.jpg",
    },
    "art & beliefs": {
      desc: "Islamic influence; manuscript production and architecture.",
      modal_desc: "Art and scholarship flourished under rulers promoting Islamic learning.",
      modal_pic: "songhai_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and trade festivals.",
      modal_desc: "Islamic festivals celebrated with prayer, feasting, and communal events.",
      modal_pic: "songhai_festival.jpg",
    }
  },

  "great_zimbabwe": {
    title: "Great Zimbabwe",
    sub_title: "Southern Africa",
    timeline: "c. 1100 – 1450 CE",
    civ_desc: "Kingdom known for stone city ruins and control over regional trade.",
    dyk_fact: "Great Zimbabwe was a major center for gold trade and had impressive stone architecture.",
    "food & cooking": {
      desc: "Sorghum, millet, cattle, and game meat.",
      modal_desc: "Diet included grains and livestock; trade brought exotic foods.",
      modal_pic: "zimbabwe_food.jpg",
    },
    "clothing & adornment": {
      desc: "Animal hides, woven fabrics, and jewelry.",
      modal_desc: "Adornment included beads, shells, and metal ornaments.",
      modal_pic: "zimbabwe_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Stone structures and huts.",
      modal_desc: "Houses built with stone enclosures; central complexes served political and ceremonial purposes.",
      modal_pic: "zimbabwe_housing.jpg",
    },
    "art & beliefs": {
      desc: "Traditional religion; stone sculpture and carvings.",
      modal_desc: "Art depicted spiritual and royal symbolism; religion influenced architecture.",
      modal_pic: "zimbabwe_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and harvest ceremonies.",
      modal_desc: "Festivals celebrated ancestors, agricultural cycles, and royal events.",
      modal_pic: "zimbabwe_festival.jpg",
    }
  },

  "swahili_coast_states": {
    title: "Swahili Coast States",
    sub_title: "East Africa (Kenya, Tanzania, Mozambique)",
    timeline: "c. 1000 – 1600 CE",
    civ_desc: "Trading city-states known for commerce across the Indian Ocean.",
    dyk_fact: "Swahili culture is a blend of African, Arab, and Persian influences.",
    "food & cooking": {
      desc: "Rice, fish, coconut, and spices.",
      modal_desc: "Diet influenced by trade; seafood and tropical crops were staples.",
      modal_pic: "swahili_food.jpg",
    },
    "clothing & adornment": {
      desc: "Light fabrics; jewelry and turbans.",
      modal_desc: "Clothing reflected status and cultural influences from trade partners.",
      modal_pic: "swahili_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Stone and coral houses with courtyards.",
      modal_desc: "Coastal towns had markets, mosques, and ports for trade.",
      modal_pic: "swahili_housing.jpg",
    },
    "art & beliefs": {
      desc: "Islamic influence and local traditions.",
      modal_desc: "Architecture, calligraphy, and wood carvings were prominent.",
      modal_pic: "swahili_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and cultural festivals.",
      modal_desc: "Islamic festivals blended with local customs; trade fairs were celebrated events.",
      modal_pic: "swahili_festival.jpg",
    }
  },

  "kingdom_of_kongo": {
    title: "Kingdom of Kongo",
    sub_title: "Central Africa",
    timeline: "c. 1390 – 1914 CE",
    civ_desc: "Central African kingdom known for centralized governance and trade.",
    dyk_fact: "The Kingdom of Kongo converted to Christianity under Portuguese influence in the 15th century.",
    "food & cooking": {
      desc: "Yams, cassava, grains, and fish.",
      modal_desc: "Diet combined agriculture and riverine resources; trade brought new foods.",
      modal_pic: "kongo_food.jpg",
    },
    "clothing & adornment": {
      desc: "Woven cloths, beads, and jewelry.",
      modal_desc: "Clothing indicated rank; beads and metal ornaments were popular.",
      modal_pic: "kongo_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Villages with circular huts and palaces.",
      modal_desc: "Settlements were organized around central courts and marketplaces.",
      modal_pic: "kongo_housing.jpg",
    },
    "art & beliefs": {
      desc: "Traditional religion and later Christian influences.",
      modal_desc: "Art included sculptures, masks, and religious artifacts.",
      modal_pic: "kongo_art.jpg",
    },
    "festivals & celebration": {
      desc: "Agricultural and religious festivals.",
      modal_desc: "Celebrations honored ancestors, harvest, and Christian holidays post-conversion.",
      modal_pic: "kongo_festival.jpg",
    }
  },

  "colonial_africa": {
    title: "Colonial Africa",
    sub_title: "Entire continent",
    timeline: "c. 1500s – 1960s",
    civ_desc: "Period of European colonization, exploitation, and cultural change across Africa.",
    dyk_fact: "Colonial Africa was shaped by trade, resource extraction, and European political control.",
    "food & cooking": {
      desc: "Blend of native and European cuisines.",
      modal_desc: "Colonial influence introduced new crops, cooking methods, and livestock.",
      modal_pic: "colonial_africa_food.jpg",
    },
    "clothing & adornment": {
      desc: "European-style clothing mixed with traditional attire.",
      modal_desc: "Colonial and local styles merged; clothing reflected social status.",
      modal_pic: "colonial_africa_clothing.jpg",
    },
    "housing & settlement": {
      desc: "European-style towns alongside native settlements.",
      modal_desc: "Colonial architecture featured administrative buildings, churches, and urban planning.",
      modal_pic: "colonial_africa_housing.jpg",
    },
    "art & beliefs": {
      desc: "European artistic influence; traditional beliefs persisted.",
      modal_desc: "Art reflected hybridization of European and African aesthetics.",
      modal_pic: "colonial_africa_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and national celebrations introduced by colonizers.",
      modal_desc: "Colonial festivals included European holidays; locals maintained traditional ceremonies.",
      modal_pic: "colonial_africa_festival.jpg",
    }
  },

  "modern_africa": {
    title: "Modern & Contemporary Africa",
    sub_title: "Entire continent",
    timeline: "1960s – Present",
    civ_desc: "Post-independence era marked by nation-building, cultural revival, and economic development.",
    dyk_fact: "Modern Africa is home to diverse cultures, languages, and rapidly growing cities.",
    "food & cooking": {
      desc: "Mix of traditional and modern cuisines.",
      modal_desc: "Urban centers feature fusion dishes and contemporary culinary trends.",
      modal_pic: "modern_africa_food.jpg",
    },
    "clothing & adornment": {
      desc: "Modern fashion blended with traditional attire.",
      modal_desc: "Clothing reflects heritage, global fashion trends, and self-expression.",
      modal_pic: "modern_africa_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Urban, suburban, and rural settlements with modern infrastructure.",
      modal_desc: "Architecture ranges from traditional huts to skyscrapers in major cities.",
      modal_pic: "modern_africa_housing.jpg",
    },
    "art & beliefs": {
      desc: "Diverse contemporary and traditional art forms.",
      modal_desc: "Art includes music, painting, sculpture, and digital media reflecting cultural identity.",
      modal_pic: "modern_africa_art.jpg",
    },
    "festivals & celebration": {
      desc: "Cultural, national, and religious festivals.",
      modal_desc: "Festivals include Independence Day, religious holidays, and traditional ceremonies.",
      modal_pic: "modern_africa_festival.jpg",
    }
  }
     },
    europe: { 
        "prehistoric_europe": {
    title: "Prehistoric Europe",
    sub_title: "Various regions across Europe",
    timeline: "c. 1,000,000 BCE – 3,000 BCE",
    civ_desc: "Early humans, hunter-gatherers, and development of stone tools and settlements.",
    dyk_fact: "Europe has famous prehistoric sites like Stonehenge and cave paintings in Lascaux.",
    "food & cooking": {
      desc: "Hunting, fishing, and foraging.",
      modal_desc: "Diet included wild plants, animals, and fish; cooking over open fire.",
      modal_pic: "prehistoric_europe_food.jpg",
    },
    "clothing & adornment": {
      desc: "Animal skins and simple garments.",
      modal_desc: "Clothing was made from hides and furs; adorned with bones or shells.",
      modal_pic: "prehistoric_europe_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Caves and temporary shelters.",
      modal_desc: "Early humans built temporary huts from wood, leaves, and stone.",
      modal_pic: "prehistoric_europe_housing.jpg",
    },
    "art & beliefs": {
      desc: "Cave paintings and early symbolic art.",
      modal_desc: "Art depicted animals, hunting, and rituals; beliefs centered on nature and spirits.",
      modal_pic: "prehistoric_europe_art.jpg",
    },
    "festivals & celebration": {
      desc: "Rituals for fertility, hunting, and seasons.",
      modal_desc: "Communal gatherings marked seasonal changes and successful hunts.",
      modal_pic: "prehistoric_europe_festival.jpg",
    }
  },

  "minoans": {
    title: "Minoans",
    sub_title: "Crete, Greece",
    timeline: "c. 3000 – 1450 BCE",
    civ_desc: "Early Bronze Age civilization known for palaces, trade, and art.",
    dyk_fact: "Minoans built the famous palace of Knossos and had a written script called Linear A.",
    "food & cooking": {
      desc: "Olives, wine, grains, and seafood.",
      modal_desc: "Diet relied on Mediterranean crops, fish, and trade-imported foods.",
      modal_pic: "minoan_food.jpg",
    },
    "clothing & adornment": {
      desc: "Colorful garments and jewelry.",
      modal_desc: "Clothing included flowing robes; jewelry made from gold, stones, and shells.",
      modal_pic: "minoan_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Palaces and towns.",
      modal_desc: "Knossos had advanced architecture with multiple stories, drainage, and frescoes.",
      modal_pic: "minoan_housing.jpg",
    },
    "art & beliefs": {
      desc: "Polytheistic; frescoes and pottery.",
      modal_desc: "Art depicted nature, animals, and religious rituals; worship included goddess cults.",
      modal_pic: "minoan_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious ceremonies and feasts.",
      modal_desc: "Festivals included bull-leaping ceremonies and seasonal celebrations.",
      modal_pic: "minoan_festival.jpg",
    }
  },

  "mycenaeans": {
    title: "Mycenaeans",
    sub_title: "Greece",
    timeline: "c. 1600 – 1100 BCE",
    civ_desc: "Bronze Age civilization known for fortified palaces and Linear B script.",
    dyk_fact: "Mycenaeans were early Greeks mentioned in Homer’s epics.",
    "food & cooking": {
      desc: "Grains, olives, wine, meat, and seafood.",
      modal_desc: "Agriculture and livestock provided staples; feasting was common in palaces.",
      modal_pic: "mycenaean_food.jpg",
    },
    "clothing & adornment": {
      desc: "Wool and linen garments with jewelry.",
      modal_desc: "Clothing indicated status; jewelry and armor were common among elites.",
      modal_pic: "mycenaean_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Fortified citadels and palaces.",
      modal_desc: "Structures built with stone walls; palaces served as administrative and military centers.",
      modal_pic: "mycenaean_housing.jpg",
    },
    "art & beliefs": {
      desc: "Polytheistic; pottery, frescoes, and weaponry art.",
      modal_desc: "Art depicted gods, warriors, and daily life.",
      modal_pic: "mycenaean_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and ceremonial feasts.",
      modal_desc: "Festivals celebrated harvests, military victories, and religious rituals.",
      modal_pic: "mycenaean_festival.jpg",
    }
  },

  "ancient_greece": {
    title: "Ancient Greece",
    sub_title: "Greece",
    timeline: "c. 800 – 146 BCE",
    civ_desc: "Classical civilization known for philosophy, democracy, art, and architecture.",
    dyk_fact: "The Greeks invented democracy, theater, and made lasting contributions to science and philosophy.",
    "food & cooking": {
      desc: "Olives, grains, wine, and fish.",
      modal_desc: "Diet centered on Mediterranean staples; banquets and symposiums were cultural highlights.",
      modal_pic: "greece_food.jpg",
    },
    "clothing & adornment": {
      desc: "Wool and linen garments; jewelry and sandals.",
      modal_desc: "Clothing styles like chitons and himations; jewelry reflected wealth and status.",
      modal_pic: "greece_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Stone and mudbrick houses in city-states.",
      modal_desc: "Urban planning included agora, temples, and theaters; rural homes were simpler.",
      modal_pic: "greece_housing.jpg",
    },
    "art & beliefs": {
      desc: "Polytheistic; architecture, sculptures, and literature.",
      modal_desc: "Belief in gods like Zeus and Athena shaped temples, festivals, and myths.",
      modal_pic: "greece_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and athletic festivals.",
      modal_desc: "Olympics, Dionysia, and harvest festivals celebrated with music, theater, and competitions.",
      modal_pic: "greece_festival.jpg",
    }
  },

  "roman_republic_empire": {
    title: "Roman Republic & Empire",
    sub_title: "Italy and Mediterranean",
    timeline: "509 BCE – 476 CE",
    civ_desc: "Powerful civilization known for law, military, engineering, and culture.",
    dyk_fact: "Romans built extensive roads, aqueducts, and left a lasting legal legacy.",
    "food & cooking": {
      desc: "Grains, olives, wine, and meat.",
      modal_desc: "Urban diet included bread, olive oil, and wine; banquets were common among elites.",
      modal_pic: "rome_food.jpg",
    },
    "clothing & adornment": {
      desc: "Togas, tunics, and jewelry.",
      modal_desc: "Clothing reflected citizenship and social rank; rich wore elaborate jewelry.",
      modal_pic: "rome_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Villas, insulae, and urban planning.",
      modal_desc: "Cities had forums, baths, and amphitheaters; rural villas focused on agriculture.",
      modal_pic: "rome_housing.jpg",
    },
    "art & beliefs": {
      desc: "Polytheistic; architecture, sculptures, and mosaics.",
      modal_desc: "Belief in Roman gods influenced temples and public art.",
      modal_pic: "rome_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious, military, and civic festivals.",
      modal_desc: "Festivals honored gods, military victories, and civic events.",
      modal_pic: "rome_festival.jpg",
    }
  },

  "byzantine_europe": {
    title: "Byzantine Europe",
    sub_title: "Eastern Roman Empire",
    timeline: "330 – 1453 CE",
    civ_desc: "Continuation of Roman Empire in the East; known for Orthodox Christianity and art.",
    dyk_fact: "Hagia Sophia in Constantinople is a masterpiece of Byzantine architecture.",
    "food & cooking": {
      desc: "Grains, olives, wine, and fish.",
      modal_desc: "Diet similar to Mediterranean cuisine; banquets for nobility included imported spices.",
      modal_pic: "byzantine_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silk garments and jewelry.",
      modal_desc: "Emperors wore elaborate robes; embroidery and jewelry denoted status.",
      modal_pic: "byzantine_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Stone and brick houses with fortifications.",
      modal_desc: "Urban planning included churches, palaces, and marketplaces.",
      modal_pic: "byzantine_housing.jpg",
    },
    "art & beliefs": {
      desc: "Christianity; mosaics, icons, and churches.",
      modal_desc: "Art depicted religious scenes, emperors, and saints.",
      modal_pic: "byzantine_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious feasts and imperial ceremonies.",
      modal_desc: "Easter, Christmas, and coronation ceremonies were celebrated.",
      modal_pic: "byzantine_festival.jpg",
    }
  },

  "viking_age": {
    title: "Viking Age",
    sub_title: "Scandinavia",
    timeline: "c. 793 – 1066 CE",
    civ_desc: "Norse seafarers known for exploration, trade, and raids.",
    dyk_fact: "Vikings reached North America centuries before Columbus.",
    "food & cooking": {
      desc: "Fish, meat, grains, and dairy.",
      modal_desc: "Diet based on fishing, livestock, and cultivated grains.",
      modal_pic: "viking_food.jpg",
    },
    "clothing & adornment": {
      desc: "Wool and linen garments; metal jewelry.",
      modal_desc: "Clothing was practical for cold climates; jewelry indicated wealth and craftsmanship.",
      modal_pic: "viking_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Longhouses and fortified settlements.",
      modal_desc: "Longhouses housed extended families; fortifications protected trade centers.",
      modal_pic: "viking_housing.jpg",
    },
    "art & beliefs": {
      desc: "Polytheistic; runes, carvings, and metalwork.",
      modal_desc: "Beliefs in gods like Odin and Thor influenced art and rituals.",
      modal_pic: "viking_art.jpg",
    },
    "festivals & celebration": {
      desc: "Seasonal festivals and rituals.",
      modal_desc: "Celebrated solstices, harvests, and warrior feats with feasts and games.",
      modal_pic: "viking_festival.jpg",
    }
  },

  "feudal_europe": {
    title: "Feudal Europe",
    sub_title: "Western & Central Europe",
    timeline: "c. 9th – 15th Century CE",
    civ_desc: "Society structured around lords, vassals, and serfs; castles and manors dominated landscape.",
    dyk_fact: "Feudalism shaped medieval European politics, economy, and military structure.",
    "food & cooking": {
      desc: "Grains, meat, and vegetables.",
      modal_desc: "Diet varied by class; nobles feasted while peasants ate simple grains and vegetables.",
      modal_pic: "feudal_food.jpg",
    },
    "clothing & adornment": {
      desc: "Wool and linen garments; belts, cloaks, and jewelry for nobles.",
      modal_desc: "Nobility wore luxurious fabrics; serfs wore simple garments.",
      modal_pic: "feudal_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Castles, villages, and monasteries.",
      modal_desc: "Castles served defense and governance; peasants lived in huts near manors.",
      modal_pic: "feudal_housing.jpg",
    },
    "art & beliefs": {
      desc: "Christianity dominated; illuminated manuscripts and gothic architecture.",
      modal_desc: "Churches, cathedrals, and religious art were central to society.",
      modal_pic: "feudal_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and seasonal festivals.",
      modal_desc: "Feasts celebrated saints’ days, harvests, and royal events.",
      modal_pic: "feudal_festival.jpg",
    }
  },

  "crusades_era": {
    title: "Crusades Era",
    sub_title: "Western & Eastern Europe, Middle East",
    timeline: "c. 1096 – 1291 CE",
    civ_desc: "Period of religious wars sanctioned by the Latin Church to reclaim holy lands.",
    dyk_fact: "The Crusades facilitated trade, cultural exchange, and the spread of knowledge between Europe and the Middle East.",
    "food & cooking": {
      desc: "Grains, meats, and imported spices.",
      modal_desc: "European cuisine incorporated spices and goods from the Middle East; banquets were common for nobility.",
      modal_pic: "crusades_food.jpg",
    },
    "clothing & adornment": {
      desc: "Armor, tunics, and cloaks.",
      modal_desc: "Knights wore chainmail or plate armor; nobility wore silk and embroidered garments.",
      modal_pic: "crusades_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Castles, fortified towns, and monasteries.",
      modal_desc: "Defensive architecture was crucial; monasteries served religious and educational purposes.",
      modal_pic: "crusades_housing.jpg",
    },
    "art & beliefs": {
      desc: "Christianity; religious art and architecture.",
      modal_desc: "Gothic cathedrals, illuminated manuscripts, and religious sculptures flourished.",
      modal_pic: "crusades_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious feasts and tournaments.",
      modal_desc: "Celebrations included saints’ days, harvests, and knightly tournaments.",
      modal_pic: "crusades_festival.jpg",
    }
  },

  "renaissance": {
    title: "Renaissance",
    sub_title: "Italy and Western Europe",
    timeline: "c. 14th – 17th Century CE",
    civ_desc: "Cultural revival emphasizing art, science, literature, and humanism.",
    dyk_fact: "Leonardo da Vinci, Michelangelo, and Galileo shaped art, science, and philosophy during this period.",
    "food & cooking": {
      desc: "Grains, meat, vegetables, and wine.",
      modal_desc: "Italian cuisine flourished with pasta, olive oil, and refined cooking techniques.",
      modal_pic: "renaissance_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silks, velvets, and ornate jewelry.",
      modal_desc: "Fashion reflected wealth, social status, and artistic flair.",
      modal_pic: "renaissance_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Urban villas, palaces, and renaissance cities.",
      modal_desc: "Architecture emphasized symmetry, proportion, and classical influence.",
      modal_pic: "renaissance_housing.jpg",
    },
    "art & beliefs": {
      desc: "Humanism, Christianity, and classical revival.",
      modal_desc: "Art depicted human figures, biblical stories, and mythological themes.",
      modal_pic: "renaissance_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and cultural festivals.",
      modal_desc: "Music, theater, and civic celebrations were popular alongside church feasts.",
      modal_pic: "renaissance_festival.jpg",
    }
  },

  "age_of_exploration": {
    title: "Age of Exploration",
    sub_title: "Western Europe",
    timeline: "c. 15th – 17th Century CE",
    civ_desc: "European nations explored and colonized the world, establishing trade routes and empires.",
    dyk_fact: "Explorers like Columbus, Magellan, and Vasco da Gama expanded European influence globally.",
    "food & cooking": {
      desc: "Introduction of New World crops and spices.",
      modal_desc: "Potatoes, tomatoes, and chocolate were brought to Europe; trade influenced culinary diversity.",
      modal_pic: "exploration_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silks, velvets, and imported fabrics.",
      modal_desc: "Fashion reflected wealth, global trade, and cultural influences.",
      modal_pic: "exploration_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Urban growth and fortified towns.",
      modal_desc: "Cities expanded due to trade; new architectural styles incorporated Renaissance elements.",
      modal_pic: "exploration_housing.jpg",
    },
    "art & beliefs": {
      desc: "Humanism, Christianity, and global influence.",
      modal_desc: "Maps, globes, and art reflected exploration; churches and cathedrals remained central.",
      modal_pic: "exploration_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and civic celebrations.",
      modal_desc: "Festivals honored saints, exploration achievements, and trade milestones.",
      modal_pic: "exploration_festival.jpg",
    }
  },

  "reformation_enlightenment": {
    title: "Reformation & Enlightenment",
    sub_title: "Western & Central Europe",
    timeline: "c. 16th – 18th Century CE",
    civ_desc: "Period of religious reform, intellectual awakening, and scientific revolution.",
    dyk_fact: "Martin Luther’s 95 Theses sparked the Protestant Reformation; Enlightenment thinkers shaped modern thought.",
    "food & cooking": {
      desc: "Grains, meats, and imported spices.",
      modal_desc: "Diet varied by region; coffee and chocolate became popular.",
      modal_pic: "reformation_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silks, lace, and wigs.",
      modal_desc: "Fashion reflected social status and European trends influenced by courts.",
      modal_pic: "reformation_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Baroque architecture and urban planning.",
      modal_desc: "Cities featured ornate palaces, churches, and public squares.",
      modal_pic: "reformation_housing.jpg",
    },
    "art & beliefs": {
      desc: "Religious, scientific, and philosophical art.",
      modal_desc: "Art depicted religious reform, classical revival, and enlightenment ideas.",
      modal_pic: "reformation_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and intellectual gatherings.",
      modal_desc: "Salons, fairs, and church feasts reflected culture and learning.",
      modal_pic: "reformation_festival.jpg",
    }
  },

  "industrial_revolution": {
    title: "Industrial Revolution",
    sub_title: "Western Europe",
    timeline: "c. 1760 – 1840 CE",
    civ_desc: "Era of industrialization, urbanization, and technological innovation.",
    dyk_fact: "Steam engines, factories, and mechanized production transformed society and economy.",
    "food & cooking": {
      desc: "Mass-produced goods and urban diets.",
      modal_desc: "Industrialization introduced canned foods and refined products.",
      modal_pic: "industrial_food.jpg",
    },
    "clothing & adornment": {
      desc: "Factory-made textiles and mass fashion.",
      modal_desc: "Clothing became more accessible; styles reflected industrial society.",
      modal_pic: "industrial_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Urban housing and factories.",
      modal_desc: "Cities expanded rapidly; working-class housing was dense and industrial.",
      modal_pic: "industrial_housing.jpg",
    },
    "art & beliefs": {
      desc: "Romanticism, realism, and scientific thought.",
      modal_desc: "Art reflected social changes, technology, and industrial landscapes.",
      modal_pic: "industrial_art.jpg",
    },
    "festivals & celebration": {
      desc: "National and civic celebrations.",
      modal_desc: "Public holidays and fairs reflected industrial progress and community.",
      modal_pic: "industrial_festival.jpg",
    }
  },

  "colonial_empire": {
    title: "Colonial Empire",
    sub_title: "Western European powers",
    timeline: "c. 16th – 20th Century CE",
    civ_desc: "European nations established colonies worldwide, influencing global politics, trade, and culture.",
    dyk_fact: "Colonial empires reshaped global trade, culture, and introduced European languages worldwide.",
    "food & cooking": {
      desc: "Fusion of European and colonial ingredients.",
      modal_desc: "Imported spices, sugar, and new crops influenced European cuisine.",
      modal_pic: "colonial_food.jpg",
    },
    "clothing & adornment": {
      desc: "European fashion with colonial influences.",
      modal_desc: "Styles reflected global trade and wealth accumulation.",
      modal_pic: "colonial_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Urban expansion and colonial architecture.",
      modal_desc: "Architecture combined classical European and exotic colonial styles.",
      modal_pic: "colonial_housing.jpg",
    },
    "art & beliefs": {
      desc: "European artistic dominance and cultural exchange.",
      modal_desc: "Art depicted colonial achievements, landscapes, and trade scenes.",
      modal_pic: "colonial_art.jpg",
    },
    "festivals & celebration": {
      desc: "National, imperial, and cultural events.",
      modal_desc: "Celebrations reflected monarchy, empire, and civic pride.",
      modal_pic: "colonial_festival.jpg",
    }
  },

  "world_wars": {
    title: "World Wars",
    sub_title: "Europe",
    timeline: "1914 – 1945 CE",
    civ_desc: "Period of global conflicts originating in Europe, shaping modern history.",
    dyk_fact: "World War I and II caused massive geopolitical changes and technological advancements.",
    "food & cooking": {
      desc: "Rationed foods and preserved goods.",
      modal_desc: "Diet relied on limited rations during wartime; preserved and canned foods became common.",
      modal_pic: "worldwars_food.jpg",
    },
    "clothing & adornment": {
      desc: "Military uniforms and practical civilian clothing.",
      modal_desc: "Fashion adapted to wartime needs; uniforms were standardized for soldiers.",
      modal_pic: "worldwars_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Reconstruction and urban planning.",
      modal_desc: "Cities rebuilt after destruction; temporary shelters and military barracks were common.",
      modal_pic: "worldwars_housing.jpg",
    },
    "art & beliefs": {
      desc: "Modernism, propaganda art, and remembrance.",
      modal_desc: "Art reflected wartime experiences, political ideologies, and memory of fallen soldiers.",
      modal_pic: "worldwars_art.jpg",
    },
    "festivals & celebration": {
      desc: "National commemorations and peace celebrations.",
      modal_desc: "Events honored military service and national recovery.",
      modal_pic: "worldwars_festival.jpg",
    }
  },

  "contemporary_europe": {
    title: "Contemporary Europe",
    sub_title: "Entire continent",
    timeline: "1945 CE – Present",
    civ_desc: "Modern Europe is characterized by democracy, technological advancement, and cultural diversity.",
    dyk_fact: "European Union unites multiple countries politically and economically; Europe leads in arts, science, and technology.",
    "food & cooking": {
      desc: "Fusion of traditional and modern cuisines.",
      modal_desc: "Urban centers offer diverse foods influenced by immigration and globalization.",
      modal_pic: "modern_europe_food.jpg",
    },
    "clothing & adornment": {
      desc: "Modern fashion with traditional influences.",
      modal_desc: "Clothing reflects heritage, global trends, and individual expression.",
      modal_pic: "modern_europe_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Urban, suburban, and rural settlements with modern infrastructure.",
      modal_desc: "Architecture ranges from historical preservation to modern skyscrapers and smart cities.",
      modal_pic: "modern_europe_housing.jpg",
    },
    "art & beliefs": {
      desc: "Contemporary art, literature, and cultural diversity.",
      modal_desc: "Art reflects social issues, multicultural influences, and modern creativity.",
      modal_pic: "modern_europe_art.jpg",
    },
    "festivals & celebration": {
      desc: "Cultural, national, and religious festivals.",
      modal_desc: "Festivals include music, film, heritage, and national holidays.",
      modal_pic: "modern_europe_festival.jpg",
    }
  }
     },
    asia: { 
        "prehistoric_asia": {
    title: "Prehistoric Asia",
    sub_title: "Various regions across Asia",
    timeline: "c. 1,500,000 BCE – 3,000 BCE",
    civ_desc: "Early humans in Asia, developing stone tools, hunting-gathering, and early settlements.",
    dyk_fact: "Asia has some of the oldest human fossils, including Homo erectus remains in Java and China.",
    "food & cooking": {
      desc: "Foraging, hunting, and fishing.",
      modal_desc: "Diet included wild plants, fruits, meat, and fish; cooking over fire was common.",
      modal_pic: "prehistoric_asia_food.jpg",
    },
    "clothing & adornment": {
      desc: "Animal hides and natural fibers.",
      modal_desc: "Clothing was made from hides and plant materials; simple adornments like bones or shells were used.",
      modal_pic: "prehistoric_asia_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Temporary shelters and caves.",
      modal_desc: "Early humans lived in caves or simple huts made of wood, leaves, and stone.",
      modal_pic: "prehistoric_asia_housing.jpg",
    },
    "art & beliefs": {
      desc: "Cave paintings and early ritualistic symbols.",
      modal_desc: "Art depicted hunting scenes and symbolic imagery; beliefs centered on nature and spirits.",
      modal_pic: "prehistoric_asia_art.jpg",
    },
    "festivals & celebration": {
      desc: "Rituals for hunting success and seasonal cycles.",
      modal_desc: "Communal gatherings celebrated seasonal changes, fertility, and hunts.",
      modal_pic: "prehistoric_asia_festival.jpg",
    }
  },

  "mesopotamia_sumerians": {
    title: "Mesopotamia / Sumerians",
    sub_title: "Modern Iraq region",
    timeline: "c. 4500 – 1900 BCE",
    civ_desc: "First urban civilization with city-states, cuneiform writing, and advanced irrigation.",
    dyk_fact: "Sumerians invented writing, the wheel, and the earliest known codified laws.",
    "food & cooking": {
      desc: "Barley, wheat, dates, and fish.",
      modal_desc: "Diet relied on agriculture and river resources; bread and beer were staples.",
      modal_pic: "sumer_food.jpg",
    },
    "clothing & adornment": {
      desc: "Wool garments and simple jewelry.",
      modal_desc: "Clothing was mostly woolen; jewelry made from precious stones and metals indicated status.",
      modal_pic: "sumer_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Mudbrick houses and ziggurats.",
      modal_desc: "Cities had organized streets; temples (ziggurats) were religious and administrative centers.",
      modal_pic: "sumer_housing.jpg",
    },
    "art & beliefs": {
      desc: "Polytheistic; sculpture and temple art.",
      modal_desc: "Belief in multiple gods; art included statues, reliefs, and ceremonial artifacts.",
      modal_pic: "sumer_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and agricultural festivals.",
      modal_desc: "Festivals honored gods, harvests, and seasonal events.",
      modal_pic: "sumer_festival.jpg",
    }
  },

  "indus_valley": {
    title: "Indus Valley Civilization",
    sub_title: "Modern Pakistan and northwest India",
    timeline: "c. 3300 – 1300 BCE",
    civ_desc: "Bronze Age civilization known for urban planning, drainage systems, and trade.",
    dyk_fact: "Cities like Mohenjo-daro and Harappa had advanced sanitation and grid layouts.",
    "food & cooking": {
      desc: "Grains, legumes, fruits, and dairy.",
      modal_desc: "Diet included wheat, barley, lentils, and milk; cooking involved baking and boiling.",
      modal_pic: "indus_food.jpg",
    },
    "clothing & adornment": {
      desc: "Cotton garments and jewelry.",
      modal_desc: "Clothes made from cotton; ornaments made from beads, gold, and semi-precious stones.",
      modal_pic: "indus_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Urban houses with wells and drainage.",
      modal_desc: "Multi-room houses with courtyards; cities had well-planned streets and drainage systems.",
      modal_pic: "indus_housing.jpg",
    },
    "art & beliefs": {
      desc: "Proto-Hindu practices and symbolic art.",
      modal_desc: "Art included terracotta figurines, seals, and early religious symbols.",
      modal_pic: "indus_art.jpg",
    },
    "festivals & celebration": {
      desc: "Likely seasonal and agricultural rituals.",
      modal_desc: "Ceremonies possibly celebrated harvests and fertility, though exact details are unknown.",
      modal_pic: "indus_festival.jpg",
    }
  },

  "shang_dynasty": {
    title: "Shang Dynasty",
    sub_title: "China",
    timeline: "c. 1600 – 1046 BCE",
    civ_desc: "Early Chinese dynasty known for bronze casting, oracle bones, and urban settlements.",
    dyk_fact: "Shang Dynasty produced the earliest known Chinese writing and large bronze ritual vessels.",
    "food & cooking": {
      desc: "Millets, rice, vegetables, and pork.",
      modal_desc: "Diet was based on grains and livestock; ceremonial meals included ritual foods.",
      modal_pic: "shang_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silk garments and jade ornaments.",
      modal_desc: "Nobility wore silk; jade and bronze jewelry were status symbols.",
      modal_pic: "shang_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Walled cities and palaces.",
      modal_desc: "Urban centers had wooden and rammed-earth structures; royal palaces dominated cities.",
      modal_pic: "shang_housing.jpg",
    },
    "art & beliefs": {
      desc: "Ancestor worship, polytheism; bronze ritual art.",
      modal_desc: "Art included bronze vessels, oracle bones, and religious ceremonies honoring ancestors.",
      modal_pic: "shang_art.jpg",
    },
    "festivals & celebration": {
      desc: "Ritual ceremonies for ancestors and harvests.",
      modal_desc: "Festivals involved offerings, feasts, and ritual dances.",
      modal_pic: "shang_festival.jpg",
    }
  },

  "zhou_dynasty": {
    title: "Zhou Dynasty",
    sub_title: "China",
    timeline: "c. 1046 – 256 BCE",
    civ_desc: "Longest-lasting Chinese dynasty; known for feudalism, philosophy, and early Confucianism.",
    dyk_fact: "The Zhou introduced the Mandate of Heaven concept to legitimize rulers.",
    "food & cooking": {
      desc: "Rice, wheat, millet, vegetables, and pork.",
      modal_desc: "Agricultural staples supported population growth; ritual foods were part of ceremonies.",
      modal_pic: "zhou_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silk robes and jade ornaments.",
      modal_desc: "Clothing indicated rank; scholars and nobility wore elaborate silk robes.",
      modal_pic: "zhou_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Walled cities and rural settlements.",
      modal_desc: "Urban centers were administrative hubs; rural areas had farming villages.",
      modal_pic: "zhou_housing.jpg",
    },
    "art & beliefs": {
      desc: "Ancestor worship, Daoism, Confucianism, ritual bronzes.",
      modal_desc: "Philosophical ideas influenced governance, morality, and ceremonial practices.",
      modal_pic: "zhou_art.jpg",
    },
    "festivals & celebration": {
      desc: "Agricultural and ancestral festivals.",
      modal_desc: "Rituals marked planting, harvests, and honored ancestors.",
      modal_pic: "zhou_festival.jpg",
    }
  },

  // "prehistoric_asia": {
  //   title: "Prehistoric Asia",
  //   sub_title: "Various regions across Asia",
  //   timeline: "c. 1,500,000 BCE – 3,000 BCE",
  //   civ_desc: "Early humans in Asia, developing stone tools, hunting-gathering, and early settlements.",
  //   dyk_fact: "Asia has some of the oldest human fossils, including Homo erectus remains in Java and China.",
  //   "food & cooking": {
  //     desc: "Foraging, hunting, and fishing.",
  //     modal_desc: "Diet included wild plants, fruits, meat, and fish; cooking over fire was common.",
  //     modal_pic: "prehistoric_asia_food.jpg",
  //   },
  //   "clothing & adornment": {
  //     desc: "Animal hides and natural fibers.",
  //     modal_desc: "Clothing was made from hides and plant materials; simple adornments like bones or shells were used.",
  //     modal_pic: "prehistoric_asia_clothing.jpg",
  //   },
  //   "housing & settlement": {
  //     desc: "Temporary shelters and caves.",
  //     modal_desc: "Early humans lived in caves or simple huts made of wood, leaves, and stone.",
  //     modal_pic: "prehistoric_asia_housing.jpg",
  //   },
  //   "art & beliefs": {
  //     desc: "Cave paintings and early ritualistic symbols.",
  //     modal_desc: "Art depicted hunting scenes and symbolic imagery; beliefs centered on nature and spirits.",
  //     modal_pic: "prehistoric_asia_art.jpg",
  //   },
  //   "festivals & celebration": {
  //     desc: "Rituals for hunting success and seasonal cycles.",
  //     modal_desc: "Communal gatherings celebrated seasonal changes, fertility, and hunts.",
  //     modal_pic: "prehistoric_asia_festival.jpg",
  //   }
  // },

  // "mesopotamia_sumerians": {
  //   title: "Mesopotamia / Sumerians",
  //   sub_title: "Modern Iraq region",
  //   timeline: "c. 4500 – 1900 BCE",
  //   civ_desc: "First urban civilization with city-states, cuneiform writing, and advanced irrigation.",
  //   dyk_fact: "Sumerians invented writing, the wheel, and the earliest known codified laws.",
  //   "food & cooking": {
  //     desc: "Barley, wheat, dates, and fish.",
  //     modal_desc: "Diet relied on agriculture and river resources; bread and beer were staples.",
  //     modal_pic: "sumer_food.jpg",
  //   },
  //   "clothing & adornment": {
  //     desc: "Wool garments and simple jewelry.",
  //     modal_desc: "Clothing was mostly woolen; jewelry made from precious stones and metals indicated status.",
  //     modal_pic: "sumer_clothing.jpg",
  //   },
  //   "housing & settlement": {
  //     desc: "Mudbrick houses and ziggurats.",
  //     modal_desc: "Cities had organized streets; temples (ziggurats) were religious and administrative centers.",
  //     modal_pic: "sumer_housing.jpg",
  //   },
  //   "art & beliefs": {
  //     desc: "Polytheistic; sculpture and temple art.",
  //     modal_desc: "Belief in multiple gods; art included statues, reliefs, and ceremonial artifacts.",
  //     modal_pic: "sumer_art.jpg",
  //   },
  //   "festivals & celebration": {
  //     desc: "Religious and agricultural festivals.",
  //     modal_desc: "Festivals honored gods, harvests, and seasonal events.",
  //     modal_pic: "sumer_festival.jpg",
  //   }
  // },

  // "indus_valley": {
  //   title: "Indus Valley Civilization",
  //   sub_title: "Modern Pakistan and northwest India",
  //   timeline: "c. 3300 – 1300 BCE",
  //   civ_desc: "Bronze Age civilization known for urban planning, drainage systems, and trade.",
  //   dyk_fact: "Cities like Mohenjo-daro and Harappa had advanced sanitation and grid layouts.",
  //   "food & cooking": {
  //     desc: "Grains, legumes, fruits, and dairy.",
  //     modal_desc: "Diet included wheat, barley, lentils, and milk; cooking involved baking and boiling.",
  //     modal_pic: "indus_food.jpg",
  //   },
  //   "clothing & adornment": {
  //     desc: "Cotton garments and jewelry.",
  //     modal_desc: "Clothes made from cotton; ornaments made from beads, gold, and semi-precious stones.",
  //     modal_pic: "indus_clothing.jpg",
  //   },
  //   "housing & settlement": {
  //     desc: "Urban houses with wells and drainage.",
  //     modal_desc: "Multi-room houses with courtyards; cities had well-planned streets and drainage systems.",
  //     modal_pic: "indus_housing.jpg",
  //   },
  //   "art & beliefs": {
  //     desc: "Proto-Hindu practices and symbolic art.",
  //     modal_desc: "Art included terracotta figurines, seals, and early religious symbols.",
  //     modal_pic: "indus_art.jpg",
  //   },
  //   "festivals & celebration": {
  //     desc: "Likely seasonal and agricultural rituals.",
  //     modal_desc: "Ceremonies possibly celebrated harvests and fertility, though exact details are unknown.",
  //     modal_pic: "indus_festival.jpg",
  //   }
  // },

  // "shang_dynasty": {
  //   title: "Shang Dynasty",
  //   sub_title: "China",
  //   timeline: "c. 1600 – 1046 BCE",
  //   civ_desc: "Early Chinese dynasty known for bronze casting, oracle bones, and urban settlements.",
  //   dyk_fact: "Shang Dynasty produced the earliest known Chinese writing and large bronze ritual vessels.",
  //   "food & cooking": {
  //     desc: "Millets, rice, vegetables, and pork.",
  //     modal_desc: "Diet was based on grains and livestock; ceremonial meals included ritual foods.",
  //     modal_pic: "shang_food.jpg",
  //   },
  //   "clothing & adornment": {
  //     desc: "Silk garments and jade ornaments.",
  //     modal_desc: "Nobility wore silk; jade and bronze jewelry were status symbols.",
  //     modal_pic: "shang_clothing.jpg",
  //   },
  //   "housing & settlement": {
  //     desc: "Walled cities and palaces.",
  //     modal_desc: "Urban centers had wooden and rammed-earth structures; royal palaces dominated cities.",
  //     modal_pic: "shang_housing.jpg",
  //   },
  //   "art & beliefs": {
  //     desc: "Ancestor worship, polytheism; bronze ritual art.",
  //     modal_desc: "Art included bronze vessels, oracle bones, and religious ceremonies honoring ancestors.",
  //     modal_pic: "shang_art.jpg",
  //   },
  //   "festivals & celebration": {
  //     desc: "Ritual ceremonies for ancestors and harvests.",
  //     modal_desc: "Festivals involved offerings, feasts, and ritual dances.",
  //     modal_pic: "shang_festival.jpg",
  //   }
  // },

  // "zhou_dynasty": {
  //   title: "Zhou Dynasty",
  //   sub_title: "China",
  //   timeline: "c. 1046 – 256 BCE",
  //   civ_desc: "Longest-lasting Chinese dynasty; known for feudalism, philosophy, and early Confucianism.",
  //   dyk_fact: "The Zhou introduced the Mandate of Heaven concept to legitimize rulers.",
  //   "food & cooking": {
  //     desc: "Rice, wheat, millet, vegetables, and pork.",
  //     modal_desc: "Agricultural staples supported population growth; ritual foods were part of ceremonies.",
  //     modal_pic: "zhou_food.jpg",
  //   },
  //   "clothing & adornment": {
  //     desc: "Silk robes and jade ornaments.",
  //     modal_desc: "Clothing indicated rank; scholars and nobility wore elaborate silk robes.",
  //     modal_pic: "zhou_clothing.jpg",
  //   },
  //   "housing & settlement": {
  //     desc: "Walled cities and rural settlements.",
  //     modal_desc: "Urban centers were administrative hubs; rural areas had farming villages.",
  //     modal_pic: "zhou_housing.jpg",
  //   },
  //   "art & beliefs": {
  //     desc: "Ancestor worship, Daoism, Confucianism, ritual bronzes.",
  //     modal_desc: "Philosophical ideas influenced governance, morality, and ceremonial practices.",
  //     modal_pic: "zhou_art.jpg",
  //   },
  //   "festivals & celebration": {
  //     desc: "Agricultural and ancestral festivals.",
  //     modal_desc: "Rituals marked planting, harvests, and honored ancestors.",
  //     modal_pic: "zhou_festival.jpg",
  //   }
  // },

  "three_kingdoms_korea": {
    title: "Three Kingdoms Korea",
    sub_title: "Korea",
    timeline: "c. 57 BCE – 668 CE",
    civ_desc: "Period of Goguryeo, Baekje, and Silla kingdoms; known for consolidation of territory and cultural development.",
    dyk_fact: "Silla eventually unified Korea in 668 CE with support from Tang China.",
    "food & cooking": {
      desc: "Rice, barley, vegetables, fish, and fermented foods.",
      modal_desc: "Staple foods included rice and barley; fermented dishes like kimchi originated in this period.",
      modal_pic: "three_kingdoms_korea_food.jpg",
    },
    "clothing & adornment": {
      desc: "Hemp and silk garments, ornamental jewelry.",
      modal_desc: "Clothing reflected social rank; nobles wore silk robes and elaborate hair accessories.",
      modal_pic: "three_kingdoms_korea_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Fortified towns, palaces, and village dwellings.",
      modal_desc: "Architecture included defensive structures, royal palaces, and rural settlements.",
      modal_pic: "three_kingdoms_korea_housing.jpg",
    },
    "art & beliefs": {
      desc: "Buddhism, shamanism, and tomb art.",
      modal_desc: "Art included Buddhist sculptures, murals, and tomb paintings.",
      modal_pic: "three_kingdoms_korea_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and seasonal festivals.",
      modal_desc: "Festivals honored ancestors, harvests, and Buddhist ceremonies.",
      modal_pic: "three_kingdoms_korea_festival.jpg",
    }
  },

  "yamato_japan": {
    title: "Yamato Japan (Kofun Period)",
    sub_title: "Japan",
    timeline: "c. 250 – 538 CE",
    civ_desc: "Formation of a centralized state; known for kofun tombs and early Shinto practices.",
    dyk_fact: "The kofun burial mounds indicate powerful clan leaders and social hierarchy.",
    "food & cooking": {
      desc: "Rice, fish, and vegetables.",
      modal_desc: "Diet centered on rice cultivation and seafood; fermented foods like miso emerged.",
      modal_pic: "yamato_japan_food.jpg",
    },
    "clothing & adornment": {
      desc: "Hemp robes and ceremonial garments.",
      modal_desc: "Clothing indicated rank; elites wore patterned robes with ceremonial adornments.",
      modal_pic: "yamato_japan_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Pit dwellings and early wooden structures.",
      modal_desc: "Villages had pit houses; elites had raised-floor buildings and tomb complexes.",
      modal_pic: "yamato_japan_housing.jpg",
    },
    "art & beliefs": {
      desc: "Shinto beliefs, burial mounds, and haniwa figurines.",
      modal_desc: "Art included clay haniwa figures, ritual objects, and early religious symbols.",
      modal_pic: "yamato_japan_art.jpg",
    },
    "festivals & celebration": {
      desc: "Rituals honoring ancestors and nature spirits.",
      modal_desc: "Festivals celebrated seasonal cycles and clan ancestors.",
      modal_pic: "yamato_japan_festival.jpg",
    }
  },

  "tang_dynasty": {
    title: "Tang Dynasty",
    sub_title: "China",
    timeline: "618 – 907 CE",
    civ_desc: "Golden age of Chinese culture, trade, and international influence.",
    dyk_fact: "Tang China had extensive trade along the Silk Road and welcomed foreign diplomats and scholars.",
    "food & cooking": {
      desc: "Rice, wheat, tea, meat, and vegetables.",
      modal_desc: "Diet included staple grains, tea, and variety of meats; banquets showcased culinary refinement.",
      modal_pic: "tang_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silk robes, elaborate hairstyles, and jewelry.",
      modal_desc: "Fashion reflected social rank and court status; silk and embroidered garments were common.",
      modal_pic: "tang_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Urban centers with markets and palaces.",
      modal_desc: "Cities like Chang’an were planned with grids, marketplaces, and imperial palaces.",
      modal_pic: "tang_housing.jpg",
    },
    "art & beliefs": {
      desc: "Buddhism, Taoism, Confucianism; poetry, painting, and sculpture.",
      modal_desc: "Art flourished in sculpture, poetry, painting, and ceramics; Buddhist art was prominent.",
      modal_pic: "tang_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious, seasonal, and cultural festivals.",
      modal_desc: "Festivals included Lantern Festival, Buddhist ceremonies, and harvest celebrations.",
      modal_pic: "tang_festival.jpg",
    }
  },

  "heian_japan": {
    title: "Heian Japan",
    sub_title: "Japan",
    timeline: "794 – 1185 CE",
    civ_desc: "Period of cultural refinement and courtly life; known for literature and art.",
    dyk_fact: "The Tale of Genji, written by Murasaki Shikibu, is considered the world's first novel.",
    "food & cooking": {
      desc: "Rice, fish, vegetables, and fermented foods.",
      modal_desc: "Court cuisine included rice dishes, seafood, and sweets; seasonal ingredients were emphasized.",
      modal_pic: "heian_japan_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silk robes (junihitoe) and elaborate hairstyles.",
      modal_desc: "Court nobles wore multi-layered silk robes; adornments signified rank and aesthetics.",
      modal_pic: "heian_japan_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Palaces and aristocratic mansions.",
      modal_desc: "Architecture emphasized wooden structures, tatami mats, and gardens.",
      modal_pic: "heian_japan_housing.jpg",
    },
    "art & beliefs": {
      desc: "Shinto, Buddhism; poetry, calligraphy, and painting.",
      modal_desc: "Cultural achievements included calligraphy, literature, and Buddhist temple art.",
      modal_pic: "heian_japan_art.jpg",
    },
    "festivals & celebration": {
      desc: "Courtly and seasonal festivals.",
      modal_desc: "Celebrations included cherry blossom viewing, seasonal ceremonies, and religious observances.",
      modal_pic: "heian_japan_festival.jpg",
    }
  },

  "khmer_empire": {
    title: "Khmer Empire",
    sub_title: "Cambodia",
    timeline: "c. 802 – 1431 CE",
    civ_desc: "Southeast Asian empire famous for Angkor Wat and hydraulic engineering.",
    dyk_fact: "Angkor Wat is the largest religious monument in the world, originally dedicated to Vishnu.",
    "food & cooking": {
      desc: "Rice, fish, tropical fruits, and spices.",
      modal_desc: "Diet centered on rice cultivation, freshwater fish, and local vegetables and fruits.",
      modal_pic: "khmer_food.jpg",
    },
    "clothing & adornment": {
      desc: "Cotton and silk garments; gold jewelry.",
      modal_desc: "Clothing indicated status; decorative jewelry and headdresses were common for royalty.",
      modal_pic: "khmer_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Stone temples, urban centers, and villages.",
      modal_desc: "Urban areas had grand temples; rural settlements supported agriculture.",
      modal_pic: "khmer_housing.jpg",
    },
    "art & beliefs": {
      desc: "Hinduism and Buddhism; temple art and sculpture.",
      modal_desc: "Art included temple carvings, Buddha statues, and ceremonial architecture.",
      modal_pic: "khmer_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and agricultural festivals.",
      modal_desc: "Celebrations included Buddhist and Hindu ceremonies, harvest rituals, and royal events.",
      modal_pic: "khmer_festival.jpg",
    }
  },

  "abbasid_caliphate": {
    title: "Abbasid Caliphate",
    sub_title: "Middle East",
    timeline: "750 – 1258 CE",
    civ_desc: "Islamic golden age; known for science, mathematics, architecture, and trade.",
    dyk_fact: "The House of Wisdom in Baghdad was a major center for learning and translation of ancient texts.",
    "food & cooking": {
      desc: "Grains, dates, lamb, and spices.",
      modal_desc: "Diet included rice, wheat, lamb, dates, and aromatic spices; feasting was common among elites.",
      modal_pic: "abbasid_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silk and cotton robes, jewelry.",
      modal_desc: "Clothing indicated social status; ornate jewelry was popular among the wealthy.",
      modal_pic: "abbasid_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Urban centers with mosques, palaces, and markets.",
      modal_desc: "Cities like Baghdad had elaborate architecture, markets (souks), and grand palaces.",
      modal_pic: "abbasid_housing.jpg",
    },
    "art & beliefs": {
      desc: "Islamic culture; calligraphy, architecture, and science.",
      modal_desc: "Art focused on geometric patterns, calligraphy, and religious architecture; scientific advancements flourished.",
      modal_pic: "abbasid_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and cultural festivals.",
      modal_desc: "Celebrations included Islamic holidays like Ramadan and Eid, as well as cultural gatherings.",
      modal_pic: "abbasid_festival.jpg",
    }
  },

  "delhi_sultanate": {
    title: "Delhi Sultanate",
    sub_title: "India",
    timeline: "1206 – 1526 CE",
    civ_desc: "Islamic sultanate in northern India; known for architecture, trade, and cultural synthesis.",
    dyk_fact: "The Qutb Minar in Delhi is one of the tallest brick minarets in the world, built during this period.",
    "food & cooking": {
      desc: "Rice, wheat, meat, and spices.",
      modal_desc: "Cuisine blended Indian and Persian flavors; bread, rice, and meat dishes were common.",
      modal_pic: "delhi_sultanate_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silk robes, turbans, and jewelry.",
      modal_desc: "Clothing reflected rank and heritage; nobles wore elaborate robes and ornaments.",
      modal_pic: "delhi_sultanate_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Fortresses, mosques, and urban centers.",
      modal_desc: "Cities had fortified walls, grand mosques, palaces, and bustling markets.",
      modal_pic: "delhi_sultanate_housing.jpg",
    },
    "art & beliefs": {
      desc: "Islamic art and architecture; Persian influence.",
      modal_desc: "Art included intricate calligraphy, mosque architecture, and Persian-influenced sculptures.",
      modal_pic: "delhi_sultanate_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and seasonal festivals.",
      modal_desc: "Celebrations included Islamic religious festivals and regional harvest ceremonies.",
      modal_pic: "delhi_sultanate_festival.jpg",
    }
  },

  "srivijaya_empire": {
    title: "Srivijaya Empire",
    sub_title: "Indonesia / Maritime Southeast Asia",
    timeline: "c. 650 – 1377 CE",
    civ_desc: "Maritime trading empire controlling trade routes and Buddhist culture in Southeast Asia.",
    dyk_fact: "Srivijaya dominated trade through the Malacca and Sunda Straits and was a center of Buddhist learning.",
    "food & cooking": {
      desc: "Rice, seafood, tropical fruits, and spices.",
      modal_desc: "Diet included rice as staple, seafood from coastal regions, and locally grown fruits and spices.",
      modal_pic: "srivijaya_food.jpg",
    },
    "clothing & adornment": {
      desc: "Cotton and silk garments, gold ornaments.",
      modal_desc: "Clothing indicated social status; elaborate jewelry and textiles were used by elites.",
      modal_pic: "srivijaya_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Coastal settlements, wooden houses, and trade ports.",
      modal_desc: "Urban centers were built near ports; wooden houses with raised floors were common in villages.",
      modal_pic: "srivijaya_housing.jpg",
    },
    "art & beliefs": {
      desc: "Buddhism; temple and sculpture art.",
      modal_desc: "Art included temple complexes, Buddha statues, and religious artifacts.",
      modal_pic: "srivijaya_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and maritime festivals.",
      modal_desc: "Festivals celebrated Buddhist holidays, sea voyages, and trade-related rituals.",
      modal_pic: "srivijaya_festival.jpg",
    }
  },

  "mongol_empire": {
    title: "Mongol Empire",
    sub_title: "Central Asia / Eurasia",
    timeline: "1206 – 1368 CE",
    civ_desc: "Vast empire founded by Genghis Khan; known for military prowess, trade networks, and cultural exchange.",
    dyk_fact: "The Mongols established the largest contiguous land empire in history and protected the Silk Road for trade.",
    "food & cooking": {
      desc: "Meat, dairy, and grains.",
      modal_desc: "Diet consisted mainly of horse milk, meat, and some grains; fermented mare’s milk (kumis) was common.",
      modal_pic: "mongol_food.jpg",
    },
    "clothing & adornment": {
      desc: "Fur and leather garments, simple jewelry.",
      modal_desc: "Clothing suited to nomadic life; decorated with fur and embroidery for status.",
      modal_pic: "mongol_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Yurts (portable tents) and temporary camps.",
      modal_desc: "Nomadic lifestyle involved movable yurts; urban centers were rare and administrative.",
      modal_pic: "mongol_housing.jpg",
    },
    "art & beliefs": {
      desc: "Tengriism, Buddhism; minimalistic art.",
      modal_desc: "Beliefs centered on sky worship and shamanism; art included symbolic motifs and Buddhist influence in conquered regions.",
      modal_pic: "mongol_art.jpg",
    },
    "festivals & celebration": {
      desc: "Seasonal and religious ceremonies.",
      modal_desc: "Festivals honored ancestors, seasonal changes, and military victories.",
      modal_pic: "mongol_festival.jpg",
    }
  },

  "goryeo_korea": {
    title: "Goryeo Korea",
    sub_title: "Korea",
    timeline: "918 – 1392 CE",
    civ_desc: "Dynasty known for unifying the Korean peninsula, creating celadon pottery, and establishing civil service exams.",
    dyk_fact: "The Goryeo dynasty is where the English word 'Korea' originates.",
    "food & cooking": {
      desc: "Rice, vegetables, meat, and fermented foods.",
      modal_desc: "Diet centered on rice and fermented foods like kimchi; soups and stews were common.",
      modal_pic: "goryeo_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silk and hemp garments, ceremonial robes.",
      modal_desc: "Nobles wore silk and hemp robes; ornamental accessories signified status.",
      modal_pic: "goryeo_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Palaces, temples, and villages.",
      modal_desc: "Urban centers had palaces and Buddhist temples; rural areas focused on agriculture.",
      modal_pic: "goryeo_housing.jpg",
    },
    "art & beliefs": {
      desc: "Buddhism, Confucianism; celadon pottery and Buddhist sculptures.",
      modal_desc: "Art included finely crafted celadon ceramics, temple carvings, and Buddhist imagery.",
      modal_pic: "goryeo_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and seasonal festivals.",
      modal_desc: "Celebrations included Buddhist ceremonies and harvest-related events.",
      modal_pic: "goryeo_festival.jpg",
    }
  },

  "ming_dynasty": {
    title: "Ming Dynasty",
    sub_title: "China",
    timeline: "1368 – 1644 CE",
    civ_desc: "Renowned for stability, trade, architecture, and cultural achievements including the Great Wall renovations.",
    dyk_fact: "The Ming Dynasty strengthened the Great Wall and sponsored Zheng He’s maritime expeditions.",
    "food & cooking": {
      desc: "Rice, wheat, tea, pork, and vegetables.",
      modal_desc: "Diet included staple grains, meats, and tea; culinary refinement was emphasized in banquets.",
      modal_pic: "ming_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silk robes, hats, and jade ornaments.",
      modal_desc: "Clothing reflected rank and status; elaborate robes and ceremonial attire were common.",
      modal_pic: "ming_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Imperial palaces, urban centers, and rural villages.",
      modal_desc: "Architecture included the Forbidden City, city walls, markets, and farm villages.",
      modal_pic: "ming_housing.jpg",
    },
    "art & beliefs": {
      desc: "Confucianism, Taoism, Buddhism; painting, porcelain, and literature.",
      modal_desc: "Art included blue-and-white porcelain, calligraphy, painting, and religious temples.",
      modal_pic: "ming_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and seasonal festivals.",
      modal_desc: "Celebrations included Lunar New Year, Lantern Festival, and harvest festivals.",
      modal_pic: "ming_festival.jpg",
    }
  },

  "ottoman_empire": {
    title: "Ottoman Empire",
    sub_title: "Anatolia / Middle East",
    timeline: "1299 – 1923 CE",
    civ_desc: "Islamic empire spanning Southeast Europe, Western Asia, and North Africa; known for architecture, military, and administration.",
    dyk_fact: "The Ottomans ruled over three continents at their height and left a rich architectural legacy including mosques and palaces.",
    "food & cooking": {
      desc: "Grains, lamb, vegetables, and spices.",
      modal_desc: "Cuisine included pilaf, meat dishes, sweets, and use of spices; banquets were elaborate in palaces.",
      modal_pic: "ottoman_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silk, cotton, and wool robes; turbans and jewelry.",
      modal_desc: "Clothing indicated rank and ethnicity; sultans and elites wore elaborate robes and headgear.",
      modal_pic: "ottoman_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Palaces, mosques, bazaars, and urban centers.",
      modal_desc: "Cities like Istanbul had grand mosques, palaces, bridges, and bustling markets.",
      modal_pic: "ottoman_housing.jpg",
    },
    "art & beliefs": {
      desc: "Islamic art and architecture; calligraphy, tile work, and miniature painting.",
      modal_desc: "Art focused on architecture, mosaics, calligraphy, and decorative arts with Islamic motifs.",
      modal_pic: "ottoman_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and state festivals.",
      modal_desc: "Celebrations included Islamic holidays (Ramadan, Eid) and royal ceremonies.",
      modal_pic: "ottoman_festival.jpg",
    }
  },

  "mughal_empire": {
    title: "Mughal Empire",
    sub_title: "India",
    timeline: "1526 – 1857 CE",
    civ_desc: "Islamic empire known for architecture, administration, art, and cultural synthesis with Indian traditions.",
    dyk_fact: "The Taj Mahal, built by Emperor Shah Jahan, is one of the most iconic monuments of the Mughal era.",
    "food & cooking": {
      desc: "Rice, wheat, meats, spices, and sweets.",
      modal_desc: "Cuisine blended Persian and Indian flavors; rich curries, breads, and desserts were common.",
      modal_pic: "mughal_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silk and cotton robes, jewelry, turbans.",
      modal_desc: "Elaborate clothing signified nobility; embroidery, jewelry, and turbans were prominent.",
      modal_pic: "mughal_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Palaces, forts, and gardens.",
      modal_desc: "Urban centers had grand forts, palaces, and Mughal-style gardens; villages supported agriculture.",
      modal_pic: "mughal_housing.jpg",
    },
    "art & beliefs": {
      desc: "Islamic art with Persian influence; architecture, painting, and calligraphy.",
      modal_desc: "Art included miniature paintings, mosques, tombs, and manuscript illustrations.",
      modal_pic: "mughal_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and imperial festivals.",
      modal_desc: "Festivals included Islamic holidays, royal ceremonies, and seasonal celebrations.",
      modal_pic: "mughal_festival.jpg",
    }
  },

  "tokugawa_japan": {
    title: "Tokugawa (Edo) Japan",
    sub_title: "Japan",
    timeline: "1603 – 1868 CE",
    civ_desc: "Period of stability and isolation; known for urbanization, arts, and samurai governance.",
    dyk_fact: "The Tokugawa shogunate enforced over 250 years of relative peace and strict social order.",
    "food & cooking": {
      desc: "Rice, seafood, vegetables, and soy products.",
      modal_desc: "Staple diet included rice, fish, pickled vegetables, and fermented soy products like miso and tofu.",
      modal_pic: "tokugawa_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silk kimonos and ceremonial robes.",
      modal_desc: "Clothing reflected social hierarchy; samurai and nobility wore intricate kimonos.",
      modal_pic: "tokugawa_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Urban Edo centers, castles, and rural villages.",
      modal_desc: "Cities like Edo (Tokyo) were densely populated; castles housed daimyo, and villages supported agriculture.",
      modal_pic: "tokugawa_housing.jpg",
    },
    "art & beliefs": {
      desc: "Shinto, Buddhism; ukiyo-e, Noh theatre, and calligraphy.",
      modal_desc: "Art included woodblock prints, theatre, poetry, and religious practices.",
      modal_pic: "tokugawa_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious, seasonal, and cultural festivals.",
      modal_desc: "Festivals included cherry blossom viewing, temple ceremonies, and New Year celebrations.",
      modal_pic: "tokugawa_festival.jpg",
    }
  },

  "joseon_korea": {
    title: "Joseon Korea",
    sub_title: "Korea",
    timeline: "1392 – 1897 CE",
    civ_desc: "Dynasty known for Confucian governance, Korean script (Hangul), and cultural achievements.",
    dyk_fact: "King Sejong the Great introduced Hangul, making literacy more accessible to common people.",
    "food & cooking": {
      desc: "Rice, vegetables, fermented foods, and meat.",
      modal_desc: "Diet centered on rice, kimchi, vegetables, and occasional meat; royal cuisine was elaborate.",
      modal_pic: "joseon_food.jpg",
    },
    "clothing & adornment": {
      desc: "Hanbok (traditional garments) and jewelry.",
      modal_desc: "Clothing reflected status; nobles wore elaborate hanbok with accessories.",
      modal_pic: "joseon_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Palaces, temples, and rural villages.",
      modal_desc: "Architecture included hanok houses with wooden frames, tiled roofs, and courtyards.",
      modal_pic: "joseon_housing.jpg",
    },
    "art & beliefs": {
      desc: "Confucianism, Buddhism; painting, ceramics, and calligraphy.",
      modal_desc: "Art included Confucian-inspired paintings, celadon pottery, and scholarly works.",
      modal_pic: "joseon_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and seasonal festivals.",
      modal_desc: "Celebrations included Confucian rituals, Lunar New Year, and harvest festivals.",
      modal_pic: "joseon_festival.jpg",
    }
  },

  "ayutthaya_kingdom": {
    title: "Ayutthaya Kingdom",
    sub_title: "Thailand",
    timeline: "1350 – 1767 CE",
    civ_desc: "Southeast Asian kingdom known for trade, diplomacy, and temple architecture.",
    dyk_fact: "Ayutthaya became a major trade hub connecting Europe, China, Japan, and India.",
    "food & cooking": {
      desc: "Rice, fish, tropical fruits, and spices.",
      modal_desc: "Staple diet included rice and freshwater fish; tropical fruits and spices were common.",
      modal_pic: "ayutthaya_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silk garments, jewelry, and ceremonial attire.",
      modal_desc: "Clothing reflected status; gold jewelry and patterned silk were worn by nobility.",
      modal_pic: "ayutthaya_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Palaces, temples, and riverside towns.",
      modal_desc: "Urban centers had grand temples and palaces; homes were built on stilts near rivers.",
      modal_pic: "ayutthaya_housing.jpg",
    },
    "art & beliefs": {
      desc: "Buddhism; temple and sculpture art.",
      modal_desc: "Art included Buddhist statues, murals, and ornate temple architecture.",
      modal_pic: "ayutthaya_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and seasonal festivals.",
      modal_desc: "Festivals included Buddhist holidays, river ceremonies, and royal celebrations.",
      modal_pic: "ayutthaya_festival.jpg",
    }
  },

  "majapahit_empire": {
    title: "Majapahit Empire",
    sub_title: "Indonesia",
    timeline: "1293 – 1527 CE",
    civ_desc: "Maritime empire dominating trade in Southeast Asia; Hindu-Buddhist cultural center.",
    dyk_fact: "The Majapahit empire is considered a precursor to modern Indonesia due to its influence and territory.",
    "food & cooking": {
      desc: "Rice, seafood, tropical fruits, and spices.",
      modal_desc: "Diet centered on rice cultivation, seafood, and tropical fruits; use of spices was widespread.",
      modal_pic: "majapahit_food.jpg",
    },
    "clothing & adornment": {
      desc: "Cotton and silk garments; gold ornaments.",
      modal_desc: "Clothing indicated status; royalty and nobles adorned themselves with silk and gold jewelry.",
      modal_pic: "majapahit_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Urban centers, palaces, and coastal settlements.",
      modal_desc: "Cities and port towns were built for trade; palaces reflected Hindu-Buddhist influence.",
      modal_pic: "majapahit_housing.jpg",
    },
    "art & beliefs": {
      desc: "Hinduism and Buddhism; temple architecture and sculptures.",
      modal_desc: "Art included temple carvings, statues, and ceremonial objects reflecting Hindu-Buddhist traditions.",
      modal_pic: "majapahit_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and seasonal festivals.",
      modal_desc: "Festivals celebrated Hindu and Buddhist holidays, harvests, and royal ceremonies.",
      modal_pic: "majapahit_festival.jpg",
    }
  },

  "timurid_empire": {
    title: "Timurid Empire",
    sub_title: "Central Asia / Persia",
    timeline: "1370 – 1507 CE",
    civ_desc: "Empire founded by Timur (Tamerlane); known for Persianate culture, architecture, and arts.",
    dyk_fact: "Samarkand, the Timurid capital, became a major center of Islamic art, architecture, and learning.",
    "food & cooking": {
      desc: "Grains, meat, dairy, and fruits.",
      modal_desc: "Diet included wheat, rice, lamb, and dried fruits; elaborate royal banquets were common.",
      modal_pic: "timurid_food.jpg",
    },
    "clothing & adornment": {
      desc: "Silk robes, fur, and jewelry.",
      modal_desc: "Nobility wore silk and fur garments adorned with precious metals and jewels.",
      modal_pic: "timurid_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Palaces, madrasas, and urban centers.",
      modal_desc: "Architecture included grand palaces, madrasas, and monumental public buildings.",
      modal_pic: "timurid_housing.jpg",
    },
    "art & beliefs": {
      desc: "Islamic art, Persian culture; architecture, miniature painting, and calligraphy.",
      modal_desc: "Art included intricate tilework, manuscript illustration, and mosque architecture.",
      modal_pic: "timurid_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and cultural festivals.",
      modal_desc: "Festivals celebrated Islamic holidays, royal ceremonies, and cultural events.",
      modal_pic: "timurid_festival.jpg",
    }
  },

  "kievan_rus": {
    title: "Kievan Rus",
    sub_title: "Eastern Europe / Modern Ukraine & Russia",
    timeline: "c. 882 – 1240 CE",
    civ_desc: "Early East Slavic state; known for trade, Orthodox Christianity, and cultural foundations of Russia, Ukraine, and Belarus.",
    dyk_fact: "Kievan Rus adopted Orthodox Christianity in 988 CE under Prince Vladimir, shaping Eastern Slavic culture.",
    "food & cooking": {
      desc: "Grains, fish, meat, dairy, and root vegetables.",
      modal_desc: "Diet included rye bread, porridge, fish, preserved meats, and dairy products.",
      modal_pic: "kievan_rus_food.jpg",
    },
    "clothing & adornment": {
      desc: "Wool and linen garments, furs, simple jewelry.",
      modal_desc: "Clothing was practical for cold climates; elites wore fur-lined robes and decorative jewelry.",
      modal_pic: "kievan_rus_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Wooden houses, fortresses, and urban centers.",
      modal_desc: "Villages used log houses; cities had wooden churches and fortifications.",
      modal_pic: "kievan_rus_housing.jpg",
    },
    "art & beliefs": {
      desc: "Orthodox Christianity, pagan traditions; icon painting and architecture.",
      modal_desc: "Art included Orthodox icons, frescoes, and wooden church architecture.",
      modal_pic: "kievan_rus_art.jpg",
    },
    "festivals & celebration": {
      desc: "Religious and seasonal festivals.",
      modal_desc: "Celebrations included Orthodox Christian holidays, seasonal harvests, and local rituals.",
      modal_pic: "kievan_rus_festival.jpg",
    }
  },

  
 "colonial_period_asia": {
    title: "Colonial Period",
    sub_title: "Asia",
    timeline: "c. 16th – 20th century CE",
    civ_desc: "Period marked by European colonization, trade, and influence in Asia, impacting political, social, and economic structures.",
    dyk_fact: "Colonial powers such as Britain, the Netherlands, France, and Portugal established trade ports and controlled vast territories in Asia.",
    "food & cooking": {
      desc: "Hybrid cuisine combining local and European influences.",
      modal_desc: "Colonial diets saw the introduction of new crops, cooking methods, and fusion dishes blending local and European tastes.",
      modal_pic: "colonial_asia_food.jpg",
    },
    "clothing & adornment": {
      desc: "Traditional garments influenced by European styles.",
      modal_desc: "Clothing styles combined local fabrics and designs with European fashions, especially among elites.",
      modal_pic: "colonial_asia_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Colonial administrative buildings, forts, and urban expansion.",
      modal_desc: "European architectural styles appeared in administrative centers, port cities, and urban planning.",
      modal_pic: "colonial_asia_housing.jpg",
    },
    "art & beliefs": {
      desc: "Blend of local and European artistic traditions.",
      modal_desc: "Art and architecture incorporated European techniques with traditional motifs; religion and cultural practices adapted under colonial influence.",
      modal_pic: "colonial_asia_art.jpg",
    },
    "festivals & celebration": {
      desc: "Traditional festivals continued, sometimes influenced by colonial presence.",
      modal_desc: "Local festivals persisted alongside colonial holidays and hybrid cultural celebrations.",
      modal_pic: "colonial_asia_festival.jpg",
    }
  },

  "modern_asia": {
    title: "Modern & Contemporary Asia",
    sub_title: "Asia",
    timeline: "20th century CE – Present",
    civ_desc: "Period of independence, modernization, technological advancement, and globalization in Asian countries.",
    dyk_fact: "Many Asian nations achieved independence after World War II, leading to rapid industrialization, economic growth, and cultural revival.",
    "food & cooking": {
      desc: "Diverse modern cuisine influenced by globalization.",
      modal_desc: "Food incorporates traditional, fusion, and international influences; urban areas feature diverse restaurants and culinary experimentation.",
      modal_pic: "modern_asia_food.jpg",
    },
    "clothing & adornment": {
      desc: "Mix of traditional, modern, and global fashion.",
      modal_desc: "Clothing ranges from traditional garments for cultural events to modern Western-style fashion in everyday life.",
      modal_pic: "modern_asia_clothing.jpg",
    },
    "housing & settlement": {
      desc: "Urbanization, skyscrapers, and modern infrastructure.",
      modal_desc: "Major cities showcase modern architecture, high-rise buildings, and advanced transportation systems, alongside traditional housing in rural areas.",
      modal_pic: "modern_asia_housing.jpg",
    },
    "art & beliefs": {
      desc: "Modern art, cinema, literature, and diverse religions.",
      modal_desc: "Artistic expression includes contemporary visual arts, film, music, and literature, reflecting a mix of traditional and global influences.",
      modal_pic: "modern_asia_art.jpg",
    },
    "festivals & celebration": {
      desc: "Traditional, national, and global cultural celebrations.",
      modal_desc: "Festivals include traditional cultural events, national holidays, and international celebrations reflecting global interconnectedness.",
      modal_pic: "modern_asia_festival.jpg",
    }
  }
     },
    oceania: { 
        "lapita": {
    title: "Lapita Culture",
    sub_title: "Ancestors of Polynesia",
    timeline: "1600 – 500 BCE",
    civ_desc: "The Lapita people were skilled navigators and potters who spread across Oceania, laying the foundation for Polynesian cultures.",
    dyk_fact: "Lapita pottery is found across 4,500 km of Pacific islands, one of the largest prehistoric cultural spreads.",
    "food & cooking": {
      desc: "Fishing, taro, yam, and coconut cultivation.",
      modal_desc: "Lapita communities practiced horticulture and fishing, with root crops like taro and yam complemented by coconut and marine resources.",
      modal_pic: "lapita_food.jpg"
    },
    "clothing & adornment": {
      desc: "Bark cloth and shell ornaments.",
      modal_desc: "Bark cloth dyed with natural pigments and jewelry made of shells, bones, and animal teeth were commonly used.",
      modal_pic: "lapita_clothing.jpg"
    },
    "housing & settlement": {
      desc: "Stilt houses over lagoons.",
      modal_desc: "Raised stilt houses provided safety from flooding and pests, often grouped in coastal settlements.",
      modal_pic: "lapita_houses.jpg"
    },
    "art & beliefs": {
      desc: "Geometric pottery and ancestor reverence.",
      modal_desc: "Intricate pottery designs had symbolic meanings tied to ancestor worship and oral traditions.",
      modal_pic: "lapita_art.jpg"
    },
    "festivals & celebration": {
      desc: "Ceremonies for navigation and harvest.",
      modal_desc: "Voyages, planting cycles, and community events were celebrated with rituals, dance, and storytelling.",
      modal_pic: "lapita_festivals.jpg"
    }
  },

  "aboriginal": {
    title: "Aboriginal Australia",
    sub_title: "World’s Oldest Continuous Culture",
    timeline: "50,000 BCE – Present",
    civ_desc: "Aboriginal Australians developed rich spiritual traditions and sustainable ways of living deeply tied to the land.",
    dyk_fact: "The Aboriginal culture is recognized as the oldest continuing culture in the world.",
    "food & cooking": {
      desc: "Hunter-gatherer diet with bush tucker.",
      modal_desc: "Kangaroo, emu, fish, fruits, yams, and honey ants were staples. Fire-stick farming managed land productivity.",
      modal_pic: "aboriginal_food.jpg"
    },
    "clothing & adornment": {
      desc: "Body paint and animal skins.",
      modal_desc: "Ochre body paint, woven fibers, and animal skins were used in daily and ceremonial life.",
      modal_pic: "aboriginal_clothing.jpg"
    },
    "housing & settlement": {
      desc: "Seasonal shelters and caves.",
      modal_desc: "Depending on location, bark huts, windbreaks, or caves decorated with ancient art were used as dwellings.",
      modal_pic: "aboriginal_houses.jpg"
    },
    "art & beliefs": {
      desc: "Dreamtime stories and rock art.",
      modal_desc: "The Dreamtime explains creation and guides spiritual life, expressed through rock art, sand drawings, and oral tradition.",
      modal_pic: "aboriginal_art.jpg"
    },
    "festivals & celebration": {
      desc: "Corroborees of dance and song.",
      modal_desc: "Community ceremonies marked seasonal events and initiations through music, storytelling, and sacred rituals.",
      modal_pic: "aboriginal_festivals.jpg"
    }
  },

  "polynesian": {
    title: "Polynesian Expansion",
    sub_title: "Masters of the Pacific",
    timeline: "1000 BCE – 1200 CE",
    civ_desc: "The Polynesians were remarkable navigators who explored and settled the vast Pacific Ocean, establishing far-reaching cultures.",
    dyk_fact: "Polynesian explorers settled islands thousands of kilometers apart without modern instruments, guided by stars and ocean swells.",
    "food & cooking": {
      desc: "Root crops, breadfruit, and fishing.",
      modal_desc: "Polynesians cultivated taro, yam, breadfruit, and bananas, while fishing and pig rearing supported communities.",
      modal_pic: "polynesian_food.jpg"
    },
    "clothing & adornment": {
      desc: "Bark cloth and tattoos.",
      modal_desc: "Clothing was woven from tapa (bark cloth), and tattoos held deep spiritual and social significance.",
      modal_pic: "polynesian_clothing.jpg"
    },
    "housing & settlement": {
      desc: "Communal villages with canoe houses.",
      modal_desc: "Houses were built of wood and thatch, and specialized canoe houses sheltered voyaging vessels.",
      modal_pic: "polynesian_houses.jpg"
    },
    "art & beliefs": {
      desc: "Myths of gods and navigational chants.",
      modal_desc: "Mythology centered around gods of the sea and sky, preserved through oral chants and symbolic carvings.",
      modal_pic: "polynesian_art.jpg"
    },
    "festivals & celebration": {
      desc: "Harvest and voyaging rituals.",
      modal_desc: "Festivals involved dances, feasting, and rituals to honor gods and safe navigation.",
      modal_pic: "polynesian_festivals.jpg"
    }
  },

  "hawaiian": {
    title: "Hawaiian Kingdoms",
    sub_title: "Isles of Chiefs and Gods",
    timeline: "1200 CE – 1893 CE",
    civ_desc: "The Hawaiian Islands developed a hierarchical society led by chiefs (ali’i) and rich cultural traditions tied to land and sea.",
    dyk_fact: "Ancient Hawaiians built massive fishponds for sustainable aquaculture centuries before modern techniques.",
    "food & cooking": {
      desc: "Poi, fish, and taro staples.",
      modal_desc: "Poi (taro paste) was central to diet, along with fish, breadfruit, and pig feasts at luau gatherings.",
      modal_pic: "hawaiian_food.jpg"
    },
    "clothing & adornment": {
      desc: "Feather cloaks and leis.",
      modal_desc: "Chiefs wore feathered capes and helmets, while leis made from flowers and shells symbolized respect.",
      modal_pic: "hawaiian_clothing.jpg"
    },
    "housing & settlement": {
      desc: "Thatched hale houses.",
      modal_desc: "Homes were built from wood and grass, often clustered in villages near taro fields and fishponds.",
      modal_pic: "hawaiian_houses.jpg"
    },
    "art & beliefs": {
      desc: "Hula dance and gods of nature.",
      modal_desc: "Hula, chants, and carvings honored gods of the sea, volcanoes, and fertility, central to Hawaiian spirituality.",
      modal_pic: "hawaiian_art.jpg"
    },
    "festivals & celebration": {
      desc: "Makahiki harvest festival.",
      modal_desc: "A season of peace and sports celebrating harvest, with offerings to the god Lono.",
      modal_pic: "hawaiian_festivals.jpg"
    }
  },

  "maori": {
    title: "Māori Civilization",
    sub_title: "Guardians of Aotearoa",
    timeline: "1300 CE – Present",
    civ_desc: "The Māori people of New Zealand built a warrior society rich in mythology, carving, and oral tradition.",
    dyk_fact: "The haka, a traditional Māori war dance, is now performed globally as a symbol of cultural pride.",
    "food & cooking": {
      desc: "Hāngi earth oven feasts.",
      modal_desc: "Food like kumara (sweet potato), meat, and fish was slow-cooked underground in earth ovens.",
      modal_pic: "maori_food.jpg"
    },
    "clothing & adornment": {
      desc: "Woven cloaks and tattoos.",
      modal_desc: "Cloaks woven from flax fibers and intricate moko tattoos marked social rank and identity.",
      modal_pic: "maori_clothing.jpg"
    },
    "housing & settlement": {
      desc: "Fortified villages (pā).",
      modal_desc: "Pā villages were built on hilltops with wooden palisades for defense.",
      modal_pic: "maori_houses.jpg"
    },
    "art & beliefs": {
      desc: "Carvings and oral mythology.",
      modal_desc: "Mythology emphasized gods of the sky, earth, and sea, expressed through carvings and chants.",
      modal_pic: "maori_art.jpg"
    },
    "festivals & celebration": {
      desc: "Seasonal and communal gatherings.",
      modal_desc: "Festivals included feasts, haka performances, and storytelling to honor ancestors and gods.",
      modal_pic: "maori_festivals.jpg"
    }
  },

  "rapanui": {
    title: "Rapa Nui (Easter Island)",
    sub_title: "Island of Moai",
    timeline: "1200 CE – 1800 CE",
    civ_desc: "Rapa Nui developed in isolation, most famous for its colossal moai statues representing ancestors.",
    dyk_fact: "Nearly 900 moai statues were carved and transported across the island, some weighing over 80 tons.",
    "food & cooking": {
      desc: "Fishing and sweet potato farming.",
      modal_desc: "The diet relied on fish, chickens, and crops like sweet potatoes, with limited fresh water and soil fertility.",
      modal_pic: "rapanui_food.jpg"
    },
    "clothing & adornment": {
      desc: "Feather headdresses and body paint.",
      modal_desc: "Ceremonial dress included feather ornaments, barkcloth, and painted bodies for rituals.",
      modal_pic: "rapanui_clothing.jpg"
    },
    "housing & settlement": {
      desc: "Stone houses near coastlines.",
      modal_desc: "Villages featured stone houses shaped like overturned canoes, often near moai platforms (ahu).",
      modal_pic: "rapanui_houses.jpg"
    },
    "art & beliefs": {
      desc: "Moai statues and ancestor worship.",
      modal_desc: "Moai represented deified ancestors, central to Rapa Nui’s spiritual and social order.",
      modal_pic: "rapanui_art.jpg"
    },
    "festivals & celebration": {
      desc: "Birdman cult competition.",
      modal_desc: "The Tangata manu ritual involved retrieving the first sooty tern egg, symbolizing leadership and renewal.",
      modal_pic: "rapanui_festivals.jpg"
    }
  },

  "colonial": {
    title: "Colonial Oceania",
    sub_title: "Encounter and Transformation",
    timeline: "1500 CE – 1900 CE",
    civ_desc: "European explorers and colonizers reshaped Oceania through trade, missions, and conquest, profoundly affecting local societies.",
    dyk_fact: "Captain James Cook’s voyages in the 18th century mapped vast Pacific regions, leading to colonization.",
    "food & cooking": {
      desc: "Introduction of new crops and livestock.",
      modal_desc: "Colonization brought sugarcane, wheat, and cattle ranching, transforming indigenous diets and land use.",
      modal_pic: "colonial_food.jpg"
    },
    "clothing & adornment": {
      desc: "Western dress influenced locals.",
      modal_desc: "Traditional attire mixed with European fabrics, especially in mission-influenced communities.",
      modal_pic: "colonial_clothing.jpg"
    },
    "housing & settlement": {
      desc: "Missions and port towns.",
      modal_desc: "Colonial architecture replaced or blended with indigenous settlements, with churches and administrative centers.",
      modal_pic: "colonial_houses.jpg"
    },
    "art & beliefs": {
      desc: "Christian missions replaced traditions.",
      modal_desc: "Conversion efforts suppressed many rituals, though syncretism allowed blending of old and new beliefs.",
      modal_pic: "colonial_art.jpg"
    },
    "festivals & celebration": {
      desc: "Christian and colonial observances.",
      modal_desc: "Local calendars absorbed Christmas, Easter, and colonial national days into community life.",
      modal_pic: "colonial_festivals.jpg"
    }
  },

  "modern_oceania": {
    title: "Modern Oceania",
    sub_title: "Nations of the Pacific",
    timeline: "1900 CE – Present",
    civ_desc: "Modern Oceania includes Australia, New Zealand, and Pacific Island nations balancing tradition and modernity.",
    dyk_fact: "Australia and New Zealand are among the world’s most multicultural societies, home to hundreds of ethnic groups.",
    "food & cooking": {
      desc: "Fusion of traditional and global cuisines.",
      modal_desc: "Diets feature Pacific seafood, root crops, alongside modern international dishes influenced by migration.",
      modal_pic: "modern_food.jpg"
    },
    "clothing & adornment": {
      desc: "Western wear with traditional symbols.",
      modal_desc: "Suits and dresses dominate, but leis, Māori cloaks, and Pacific tattoos remain important symbols of identity.",
      modal_pic: "modern_clothing.jpg"
    },
    "housing & settlement": {
      desc: "Urban cities and rural villages.",
      modal_desc: "Skyscrapers in Sydney and Auckland contrast with traditional villages across Pacific islands.",
      modal_pic: "modern_houses.jpg"
    },
    "art & beliefs": {
      desc: "Blend of traditional and contemporary art.",
      modal_desc: "Indigenous art, haka, and hula coexist with modern films, literature, and global pop culture.",
      modal_pic: "modern_art.jpg"
    },
    "festivals & celebration": {
      desc: "National and cultural festivals.",
      modal_desc: "Events like Waitangi Day, Pacific Island festivals, and global celebrations like New Year highlight diversity.",
      modal_pic: "modern_festivals.jpg"
    }
  }
}
  };


export default continentsData;
// src/data/topicsData.tsx
import { Topic } from "@/types";
import { 
  wildlife,
  poverty,
  economies,
  solar,
  chocolate,
  debtBurden,
  darkContinent,
  youngestContinent,
  diseaseBurden,
  foodInsecurity,
  ethnic,
  ageingLeadership,
  rhythmicHub,
  politicalInstability,
  globalEnergy,
  corruption,
  fintech,
  powerhouse,
  economicNetwork,
  capitalFlow,
  polycrisis,
  globalInfluence,
  preachingHub,
  breadbasket,
  increasedPresence

 } from "@/utils/images";

export const topics: Topic[] = [
  {
    id: 1,
    title: "Youngest Continent",
    category: "known",
    shortDescription: "With over 60% of its population under 25 (AfDB, 2024), Africa has significant potential for economic transformation, akin to China and India.",
    fullDescription: "With over 60% of its population under 25 (AfDB, 2024), Africa has significant potential for economic transformation, akin to China and India. However, despite rising education levels, 75% of young Africans struggle with employment, political disillusionment, and limited decision-making power under gerontocratic leaderships. Consequently, nearly 50% consider emigration (Africa Youth Survey, 2024), a trend fueled by social media highlighting opportunities abroad. To harness this demographic dividend and transition from raw material exports to industrialization, Africa must prioritize investment in vocational training, digital infrastructure, and SME development.",
    imageUrl: youngestContinent,
    slug: "youngest-continent"
  },
  {
    id: 2,
    title: "Fastest Growing Economies",
    category: "known",
    shortDescription: "Hosts to six of the world's ten fastest-growing economies (AfDB), Africa´s growth trajectory is however, not shared by all countries.",
    fullDescription: "Hosts to six of the world's ten fastest-growing economies (AfDB), Africa´s growth trajectory is however, not shared by all countries. According to (McKinsey, 2024), from 2010 to 2019, 'consistent growers' like Ethiopia, Rwanda, Ghana, and Kenya maintained GDP growth above 4%, while 'recent accelerator' such as Niger and Côte d'Ivoire show promising momentum. Also, 'recent slowdowns' in major economies—South Africa, Egypt, and Nigeria—along with 'slow growers' like Algeria, continue to overshadow growth prospects. With a young workforce and abundant resources, driving Africa´s emergence as a major global force requires substantial investment in manufacturing and agriculture to enhance productivity and global competitiveness.",
    imageUrl: economies,
    slug: "fastest-growing-economies"
  },
  {
    id: 3,
    title: "Sunshine Galore",
    category: "known",
    shortDescription: "Africa holds about 60% of the world's prime solar resources but contributes only 1% to global solar energy generation (IEA).",
    fullDescription: "Africa holds about 60% of the world's prime solar resources but contributes only 1% to global solar energy generation (IEA). The Sahel region, for example, receives around 150 days of sunlight annually, underscoring the continent’s untapped renewable energy potential. To bridge the energy deficit and light up the `dark continent`, substantial investments are crucial to harness the continent’s solar potential.",
    imageUrl: solar,
    slug: "sunshine-galore"
  },
  {
    id: 4,
    title: "Wildlife/Safari Paradise",
    category: "known",
    shortDescription: "Africa hosts approximately 25% of the world’s mammal and bird species and an estimated 50,000–73,000 plant species (Frontiers), reinforcing its status as a premier destination for safari tourism.",
    fullDescription: "Africa hosts approximately 25% of the world’s mammal and bird species and an estimated 50,000–73,000 plant species (Frontiers), reinforcing its status as a premier destination for safari tourism. Travelers who visit Africa love it because it is unique, beautiful, boundless, and welcoming. This sector generates over $12 billion annually for leading wildlife destinations (Economics Review) and contributed 8.2% to South Africa’s GDP in 2023 (South Africa). To maximize this economic potential and ensure long-term sustainability, increased investment in protected areas is crucial (UNEP).",
    imageUrl: wildlife,
    slug: "wildlife-paradise"
  },
  {
    id: 5,
    title: "Debt Burden",
    category: "known",
    shortDescription: "Although Africa's average public debt-to-GDP ratio is projected to decline from 67.5% in 2024 to 64.3% by 2025 (ECOFIN Agency), sovereign credit ratings continue to deteriorate due to economic instability and geopolitical tensions, driving up borrowing costs (Credit Benchmark).",
    fullDescription: "Although Africa's average public debt-to-GDP ratio is projected to decline from 67.5% in 2024 to 64.3% by 2025 (ECOFIN Agency), sovereign credit ratings continue to deteriorate due to economic instability and geopolitical tensions, driving up borrowing costs (Credit Benchmark). The AfDB estimates that high debt servicing, projected at $163 billion in 2024, diverts critical funds from essential services, hindering socio-economic development. Africa’s debt burden resembles a calabash with hidden cracks—while the water level appears lower, unseen fissures from past crises and enduring hardships continue to sap the life-giving liquid essential for the village's survival.",
    imageUrl: debtBurden,
    slug: "debt-burden"
  },

  {
    id: 6,
    title: "Rhythmic Hub",
    category: "known",
    shortDescription: "The African music industry is worth over $5 billion annually, with Afrobeat and Amapiano earning global recognition.",
    fullDescription: "According to UNESCO, Africa’s music industry generates over $5 billion annually, with genres like Afrobeat and Amapiano achieving global prominence. Maximizing this growth and cultural potential requires targeted investments to overcome structural constraints, including underfunding and inadequate infrastructure within the creative sector (Africanofilter).",
    imageUrl: rhythmicHub,
    slug: "rhythmic-hub"
  },
  {
    id: 7,
    title: "Chocolate Lifeline",
    category: "known",
    shortDescription: "Africa produces approximately 70% of the world's cocoa beans, serving as the backbone of the global chocolate industry.",
    fullDescription: "Africa accounts for approximately 70% of global cocoa bean production, underpinning the multi-billion-dollar chocolate industry (Statista). However, the continent captures only 6% of industry revenues, with farmers receiving less than 2% (CapMad). Examples from Ghana and Côte d'Ivoire highlight the necessity of increased investment in local cocoa processing and value chain development to enhance value retention and economic benefits.",
    imageUrl: chocolate,
    slug: "chocolate-lifeline"
  },
  {
    id: 8,
    title: "Culturally diverse",
    category: "known",
    shortDescription: "With 3,000+ ethnic groups and 2,000+ languages, Africa is the most culturally diverse continent. ",
    fullDescription: "With 3,000+ ethnic groups and 2,000+ languages, Africa is the most culturally diverse continent. Nigeria alone has over 500 languages, one of the highest concentrations of linguistic diversity in the world Encyclopaedia Britannica. To harness the potential of this diversity for sustainable development, policies like effective communication, multilingual education systems, and equitable resource distribution are needed.",
    imageUrl: ethnic,
    slug: "culturally-diverse"
  },
  {
    id: 9,
    title: "Poverty",
    category: "known",
    shortDescription: "Despite rising economic growth in Africa, inequality remains high, limiting its impact on poverty reduction, as seen in countries like Mozambique and Zambia.",
    fullDescription: "Despite rising economic growth in Africa, inequality remains high, limiting its impact on poverty reduction, as seen in countries like Mozambique and Zambia. As of 2024, approximately 429 million Africans lived in extreme poverty, surviving on less than $2.15 per day (IMF, 2024). While GDP per capita varies widely across the continent, the overall average remains low, highlighting persistently high poverty levels. Africa's persistent poverty starkly contrasts with its vast economic potential, underscoring the need for a strategic approach to natural resource utilization. This includes strengthening local investments in value addition, diversifying key sectors, and channeling resource revenues into a sovereign wealth fund—like the case in Botswana.",
    imageUrl: poverty,
    slug: "poverty"
  },
  {
    id: 10,
    title: "Food Insecurity",
    category: "known",
    shortDescription: "FAO (2023) estimates that around 20% of the population—282 million individuals—was undernourished in 2022.",
    fullDescription: " FAO (2023) estimates that around 20% of the population—282 million individuals—was undernourished in 2022. Additionally, 61% faced moderate or severe food insecurity, with 24% experiencing severe food insecurity. These figures stand in stark contrast to Africa’s vast reserves of uncultivated arable land, highlighting the need for investment in modern technology to enhance local productivity.",
    imageUrl: foodInsecurity,
    slug: "food-insecurity"
  },
  {
    id: 11,
    title: "The Dark Continent",
    category: "known",
    shortDescription: "Despite its vast renewable resources, Africa remains underpowered",
    fullDescription: "Despite its vast renewable resources, Africa remains underpowered. Home to 17% of the global population, the continent consumes just 5% of global energy, leaving over 600 million people without electricity (Africa Energy Outlook, 2023). Initiatives such as the Africa Renewable Energy Initiative (AREI) and Mission 300 hold promise in bridging this gap, unlocking Africa’s energy potential while driving economic growth, industrial productivity, global competitiveness, and sustainable development.",
    imageUrl: darkContinent,
    slug: "the-dark-continent"
  },
  {
    id: 12,
    title: "Disease Burden",
    category: "known",
    shortDescription: "HIV/AIDS affects 25.6 million people in sub-Saharan Africa, causing 380,000 deaths in 2022, while malaria claims nearly 500,000 lives annually, mostly among young children (WHO AFRO).",
    fullDescription: "HIV/AIDS affects 25.6 million people in sub-Saharan Africa, causing 380,000 deaths in 2022, while malaria claims nearly 500,000 lives annually, mostly among young children (WHO AFRO). Tuberculosis remains a major global health challenge, exacerbating the disease burden. This severe disease burden strains African economies by reducing workforce productivity and increasing healthcare costs, hindering development. Paradoxically, this crisis exists despite the continent’s immense biodiversity and rich reservoir of medicinal plants with potential cures, highlighting the need for investments in healthcare infrastructure, research, and access to medicine.",
    imageUrl: diseaseBurden,
    slug: "disease-burden"
  },
  {
    id: 13,
    title: "Graft",
    category: "known",
    shortDescription: "According to UNECA (2024), Africa loses between $60–100 billion annually to corruption, including resource theft and tax evasion, depleting 3.7% of its GDP.",
    fullDescription: "According to UNECA (2024), Africa loses between $60–100 billion annually to corruption, including resource theft and tax evasion, depleting 3.7% of its GDP. This diverts critical funds from healthcare, education, and infrastructure, exacerbating poverty and hindering economic growth. Corruption weakens institutions, erodes public trust, deters both domestic and foreign investment, and stalls progress. While Africa is often seen as a wellspring of wealth, corruption acts as a persistent leak, draining its potential and leaving its people thirsty for progress.",
    imageUrl: corruption,
    slug: "graft"
  },
  {
    id: 14,
    title: "Ageing Leadership",
    category: "known",
    shortDescription: "Africa, the youngest continent is governed by some of the world's oldest leaders, raising concerns about generational representation, and youth empowerment.",
    fullDescription: " Africa, the youngest continent is governed by some of the world's oldest leaders, raising concerns about generational representation, and youth empowerment. Faced with an evolving global landscape where powerful leaders like Trump, Putin, and Jinping increasingly prioritize national interests above all else, these aging gerontocrats may not be able to adopt a similarly strategic and assertive approach for their people. Embracing youth leadership, fostering intergenerational dialogue, and implementing governance reforms are key to ensuring Africa's leadership aligns with its dynamic and youthful population.",
    imageUrl: ageingLeadership,
    slug: "ageing-leadership"
  },
  {
    id: 15,
    title: "Political Instability",
    category: "known",
    shortDescription: "Military coups in Africa are gaining tacit support amid corruption and lack of democratic alternance, while resource-driven conflicts escalate.",
    fullDescription: "Military coups in Africa are gaining tacit support amid corruption and lack of democratic alternance, while resource-driven conflicts escalate. SIPRI reports over 35 active conflicts, with 18 of 49 sub-Saharan states experiencing armed violence in 2021. Sudan, for examples, faces one of the world's most severe conflicts, with over 8 million IDPs and approximately 25 million in need of humanitarian assistance (UNHCR 2025). Africans must recognize the reality that political instability portrays Africa as a treasure chest rattling with unrest, where the wealth beneath its soil fuels conflict rather than prosperity.",
    imageUrl: politicalInstability,
    slug: "political-instability"
  },
  // Hidden 
  {
    id: 16,
    title: "Global FinTech Trailblazer",
    category: "hidden",
    shortDescription: "Africa's fintech sector is experiencing tremendous growth, with the market projected to reach $312 billion by 2028.",
    fullDescription: "Africa’s fintech market is projected to reach $312 billion by 2028 (Statista, 2023). Despite the initial challenges in venture capital sustainability, mobile money platforms such as M-Pesa in Kenya remain pivotal to financial inclusion, processing over $50 billion annually (GSMA, 2023). Additionally, the Pan-African Payment and Settlement System (PAPSS) enables instant, secure cross-border transactions in local currencies, strengthening intra-African trade and reducing dependency on foreign intermediaries. Africa's growing FinTech influence, driven by a tech-savvy youth and rising adoption, is set to expand through strategic digital investments.",
    imageUrl: fintech,
    slug: "fintech-trailblazer"
  },
  {
    id: 17,
    title: "Battery of the World",
    category: "hidden",
    shortDescription: "Africa has the potential to power the world with its supply of approximately 70% of global cobalt and over 70% of global platinum.",
    fullDescription: "Africa holds a strategic position in the global energy transition, supplying approximately 70% of the world’s cobalt—critical for electric vehicle (EV) batteries, smartphones, and renewable energy storage (USGS, 2023)—and over 70% of global platinum, essential for catalytic converters (World Platinum Investment Council, 2023). Strengthening local refining and processing capabilities could transform Africa into a key hub for EV production and renewable energy storage, unlocking significant value beyond raw material exports and fostering long-term industrial growth.",
    imageUrl: globalEnergy,
    slug: "battery-world"
  },
  {
    id: 18,
    title: "Diaspora - Offshore Powerhouse",
    category: "hidden",
    shortDescription: "Often overlooked, Africa’s 55th state—its diaspora—is an offshore powerhouse for development, frequently stepping in where local governance falls short.",
    fullDescription: "Often overlooked, Africa’s 55th state—its diaspora—is an offshore powerhouse for development, frequently stepping in where local governance falls short. In 2023, remittances to Africa reached approximately $100 billion, accounting for nearly 6% of the continent’s GDP (WB, 2023). However, the diaspora’s impact must extend beyond financial support to encompass knowledge transfer, skills development, and socio-political initiatives that drive sustainable change. Examples from Senegal and Morrocco demonstrate that when governments create an enabling environment to leverage the full potential of the diaspora, the impact on local development is substantial.",
    imageUrl: powerhouse,
    slug: "diaspora-powerhouse"
  },
  {
    id: 19,
    title: "Largest Economic Network",
    category: "hidden",
    shortDescription: "The African Continental Free Trade Area (AfCFTA), one of the largest in the world with 1.4 billion people and a $3.4 trillion market value (AU, 2023), offers significant potential for cross-border trade, innovation, and regional integration.",
    fullDescription: "The African Continental Free Trade Area (AfCFTA), one of the largest in the world with 1.4 billion people and a $3.4 trillion market value (AU, 2023), offers significant potential for cross-border trade, innovation, and regional integration. While Africa currently trades more with other world regions than itself, boosting intra-African trade requires addressing trade barriers, improving critical infrastructure, harmonizing regulations, and ensuring a unified market unlocks greater opportunities for businesses across the continent.",
    imageUrl: economicNetwork,
    slug: "largest-economic-network"
  },
  {
    id: 20,
    title: "`Polycrisis` Shock absorber",
    category: "hidden",
    shortDescription: "Global exogenous shocks—including the COVID-19 pandemic, the war in Ukraine, and the escalating climate crisis—continue to challenge Africa’s growth and development (The Guardian).",
    fullDescription: "Global exogenous shocks—including the COVID-19 pandemic, the war in Ukraine, and the escalating climate crisis—continue to challenge Africa’s growth and development (The Guardian). However, like the resilient baobab tree, the continent continues to show resilience amid this `polycrisis` with economic growth projected to stabilize at 4.1% in 2024–25 (Afreximbank Media). Additionally, the Green Climate Fund's approval of $686.8 million for 11 projects across 42 countries is expected to enhance resilience, benefiting 115 million people.",
    imageUrl: polycrisis,
    slug: "polycrisis-shock-absorber"
  },
  {
    id: 21,
    title: "Increased Partner's Presence",
    category: "hidden",
    shortDescription: "Africa's economic potential is drawing increased global interest, with emerging players such as China, the UAE, Turkey, and Russia expanding investments in its resource sectors.",
    fullDescription: "Africa's economic potential is drawing increased global interest, with emerging players such as China, the UAE, Turkey, and Russia expanding investments in its resource sectors. Like a resilient acacia tree attracting many birds to its branches, Africa must capitalize on this opportunity – nurturing its deep roots - by strengthening economic self-reliance, reducing external dependencies, and leveraging its resource wealth for sustainable development.",
    imageUrl: increasedPresence,
    slug: "increased-partner-presence"
  },
  {
    id: 22,
    title: "Reversed Capital Flows",
    category: "hidden",
    shortDescription: "Despite Africa's economic potential, capital outflows exceed inflows, with illicit financial flows (IFFs) reaching $88.6 billion in 2020—3.7% of GDP (UNCTAD), surpassing annual ODA and FDI combined (Social Europe).",
    fullDescription: "Despite Africa's economic potential, capital outflows exceed inflows, with illicit financial flows (IFFs) reaching $88.6 billion in 2020—3.7% of GDP (UNCTAD), surpassing annual ODA and FDI combined (Social Europe). These losses constrain investment in critical sectors, impeding sustainable development. To mitigate IFFs and strengthen domestic financial resources, African nations must enhance international tax cooperation, align with global asset recovery frameworks, and leverage diaspora engagement in economic development.",
    imageUrl: capitalFlow,
    slug: "reversed-capital-flows"
  },
  {
    id: 23,
    title: "Low Global Influence",
    category: "hidden",
    shortDescription: "Africa rises in global resource importance but remains marginal in shaping global agendas.",
    fullDescription: "Africa rises in global resource importance but remains marginal in shaping global agendas. It contributes just 2.7% to global GDP and 2% to trade (World Economic Forum), holds only one G20 seat, lacks a permanent UN Security Council seat, and has disproportionately low voting power in the IMF and World Bank. This is akin to a hidden oasis in a vast desert—its abundant, life-giving resources remain excluded from the grand councils where global decisions are made.",
    imageUrl: globalInfluence,
    slug: "low-global-influence"
  },
  {
    id: 24,
    title: "Prosperity-preaching Hub",
    category: "hidden",
    shortDescription: "Africa is a key hub for prosperity preaching, driven by the rapid rise of a kind of Pentecostalism that merges faith with promises of prosperity.",
    fullDescription: "Africa is a key hub for prosperity preaching, driven by the rapid rise of a kind of Pentecostalism that merges faith with promises of prosperity.  The Glory Dome in Abuja, Nigeria, is the world's largest church auditorium, seating 100,000 people. While these churches uplift many facing economic hardships, some preachers exploit followers by pressuring them for financial contributions in exchange for promised blessings. Collaborating with faith groups on education and entrepreneurship will fosters economic resilience while leveraging trusted networks to drive social and economic development.",
    imageUrl: preachingHub,
    slug: "prosperity-preaching-hub"
  },
  {
    id: 25,
    title: "Potential Global Breadbasket",
    category: "hidden",
    shortDescription: "Africa holds 60% of the world’s uncultivated arable land (WB, FAO), yet only 6% of its cultivated land is irrigated, below the 14% global average (AfDB).",
    fullDescription: "Africa holds 60% of the world’s uncultivated arable land (WB, FAO), yet only 6% of its cultivated land is irrigated, below the 14% global average (AfDB). With agriculture projected to fetch $1 trillion by 2030 (McKinsey), boosting productivity and local sustainability through research, value addition, and modern technology is critical. Strengthening value chains in cocoa, coffee, bananas, tea, and cotton will drive food security and unluck opportunities for youth employment. ",
    imageUrl: breadbasket,
    slug: "potential-global-breadbasket"
  },


];

// Helper function to get topic by slug
export const getTopicBySlug = (slug: string): Topic | null => {
  return topics.find(topic => topic.slug === slug) || null;
};


// Helper function to get next and previous topics
export const getNextPrevTopics = (currentId: number) => {
  const currentIndex = topics.findIndex(topic => topic.id === currentId);
  const prevTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;
  
  return { prevTopic, nextTopic };
};
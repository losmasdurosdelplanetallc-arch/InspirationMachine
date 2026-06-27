const translations = {
  en: {
    manifesto: "Break the silence. Write your story.", how: "How it works", favorites: "Favorites",
    controlLabel: "Creative controls", chooseTitle: "Choose what to randomize", toggleAll: "All on",
    stageKicker: "Tune into the unknown", orbText: "Spark<br>something real", spark: "Spark",
    sparkHint: "Press the machine. Follow the first feeling.",
    note: "No idea is too weird. No rule is too wild. Let’s make something unforgettable.",
    challenge: "Challenge mode", challengeDesc: "Let the machine choose everything. No safety net.", challengeNudge: "Feeling fearless?",
    signal: "Creative signal", signalStatus: "Open frequency", transmission: "Transmission received",
    yourMission: "Your mission", save: "Save", copy: "Copy",
    emptyMission: "Your next song is waiting inside the machine.", howEyebrow: "A ritual, not a rulebook",
    howTitle: "Three steps out of the loop", step1Title: "Choose your chaos",
    step1Text: "Switch on the ingredients you want the machine to reshape.", step2Title: "Spark the signal",
    step2Text: "Generate a mission. Keep what hits; reroll what doesn’t.", step3Title: "Write before judging",
    step3Text: "Give the prompt ten honest minutes. Surprise lives past the obvious.",
    toolEyebrow: "Keep the current moving", extraTools: "Extra tools",
    toolPrompt: "Choose a tool to summon a smaller spark.", footerText: "Made for midnight demos, unfinished bridges, and the brave first line.",
    copied: "Mission copied to clipboard", saved: "Idea saved to your library", unsaved: "Removed from your library",
    challengeOn: "Challenge mode is live", challengeOff: "Challenge mode is off", noSelection: "Choose at least one ingredient—or turn on Challenge Mode.",
    allOn: "All on", allOff: "All off", generateAgain: "Spark again",
    libraryEyebrow: "Your private constellation", libraryTitle: "Saved idea library",
    libraryDescription: "The sparks worth returning to, kept on this device.", ideasSaved: "ideas saved",
    libraryEmptyTitle: "Nothing saved—yet", libraryEmptyText: "Generate a mission, tap the heart, and it will appear here for your next writing session.",
    savedIdea: "Saved idea", restore: "Open idea", delete: "Delete", ideaCopied: "Saved idea copied", restored: "Idea reopened",
    rhymeLabel: "What needs an echo?", rhymePlaceholder: "Type a word — light, fire, home…", findRhymes: "Find rhymes",
    rhymeEmpty: "Type a word first", rhymeResults: "Rhymes + lyrical near-rhymes",
    uniqueExhausted: "You’ve explored every available variation for these controls. Switch on another ingredient to open new paths.",
    toolExhausted: "You’ve summoned every idea in this tool for this visit. Try another creative tool."
  },
  es: {
    manifesto: "Rompe el silencio. Escribe tu historia.", how: "Cómo funciona", favorites: "Favoritos",
    controlLabel: "Controles creativos", chooseTitle: "Elige qué quieres combinar", toggleAll: "Todo sí",
    stageKicker: "Sintoniza lo desconocido", orbText: "Enciende<br>una idea", spark: "Encender",
    sparkHint: "Pulsa la máquina. Sigue la primera sensación.",
    note: "Ninguna idea es demasiado rara. Ninguna regla es demasiado loca. Vamos a crear algo inolvidable.",
    challenge: "Modo desafío", challengeDesc: "Deja que la máquina elija todo. Sin red de seguridad.", challengeNudge: "¿Sin miedo?",
    signal: "Señal creativa", signalStatus: "Frecuencia abierta", transmission: "Transmisión recibida",
    yourMission: "Tu misión", save: "Guardar", copy: "Copiar",
    emptyMission: "Tu próxima canción te espera dentro de la máquina.", howEyebrow: "Un ritual, no un manual",
    howTitle: "Tres pasos para salir del bucle", step1Title: "Elige tu caos",
    step1Text: "Activa los ingredientes que quieres que la máquina transforme.", step2Title: "Enciende la señal",
    step2Text: "Genera una misión. Conserva lo que vibra; cambia lo que no.", step3Title: "Escribe antes de juzgar",
    step3Text: "Dale diez minutos sinceros. La sorpresa vive más allá de lo obvio.",
    toolEyebrow: "Mantén la corriente viva", extraTools: "Herramientas extra",
    toolPrompt: "Elige una herramienta para invocar una chispa pequeña.", footerText: "Hecho para demos de medianoche, puentes sin terminar y primeras líneas valientes.",
    copied: "Misión copiada", saved: "Idea guardada en tu biblioteca", unsaved: "Eliminada de tu biblioteca",
    challengeOn: "Modo desafío activado", challengeOff: "Modo desafío desactivado", noSelection: "Elige al menos un ingrediente o activa el Modo Desafío.",
    allOn: "Todo sí", allOff: "Todo no", generateAgain: "Encender otra vez",
    libraryEyebrow: "Tu constelación privada", libraryTitle: "Biblioteca de ideas guardadas",
    libraryDescription: "Las chispas que merecen otra visita, guardadas en este dispositivo.", ideasSaved: "ideas guardadas",
    libraryEmptyTitle: "Nada guardado… todavía", libraryEmptyText: "Genera una misión, pulsa el corazón y aparecerá aquí para tu próxima sesión.",
    savedIdea: "Idea guardada", restore: "Abrir idea", delete: "Eliminar", ideaCopied: "Idea guardada copiada", restored: "Idea abierta",
    rhymeLabel: "¿Qué palabra necesita un eco?", rhymePlaceholder: "Escribe una palabra — amor, fuego, luna…", findRhymes: "Buscar rimas",
    rhymeEmpty: "Escribe una palabra primero", rhymeResults: "Rimas + ecos líricos cercanos",
    uniqueExhausted: "Ya exploraste todas las variaciones disponibles con estos controles. Activa otro ingrediente para abrir nuevos caminos.",
    toolExhausted: "Ya invocaste todas las ideas de esta herramienta durante esta visita. Prueba otra herramienta creativa."
  }
};

const optionDefs = [
  { id:"genre", icon:"◉", color:"#ff58c6", en:["Genre","Neo soul, dembow, folk…"], es:["Género","Neo soul, dembow, folk…"] },
  { id:"emotion", icon:"♥", color:"#ff6b89", en:["Emotion","What should it ache like?"], es:["Emoción","¿Cómo debe doler?"] },
  { id:"setting", icon:"⌂", color:"#61e9e1", en:["Story / Setting","Build a world"], es:["Historia / Escenario","Construye un mundo"] },
  { id:"perspective", icon:"◐", color:"#9a72ff", en:["Perspective","Change the storyteller"], es:["Perspectiva","Cambia quien cuenta"] },
  { id:"words", icon:"ABC", color:"#ffb44c", en:["Random Words","Three unexpected sparks"], es:["Palabras al azar","Tres chispas inesperadas"] },
  { id:"constraint", icon:"⌁", color:"#bfff55", en:["Constraint","A rule to push against"], es:["Restricción","Una regla que desafiar"] },
  { id:"mood", icon:"◫", color:"#59d89a", en:["Visual Mood","See the song first"], es:["Mood visual","Mira la canción primero"] },
  { id:"extra", icon:"⌇", color:"#c481ff", en:["Extra Music Info","Tempo, instruments + more"], es:["Info musical extra","Tempo, instrumentos y más"] }
];

const pairs = (en, es) => en.map((value, i) => ({ en:value, es:es[i] }));
const data = {
  genre: pairs(
    ["Neo Soul + Dembow","Dream Pop + Bachata","Indie Folk + UK Garage","Alt R&B + Bolero","Synthwave + Cumbia","Acoustic Punk + Bossa Nova","Gospel + Jersey Club","Trip Hop + Flamenco"],
    ["Neo Soul + Dembow","Dream Pop + Bachata","Indie Folk + UK Garage","R&B alternativo + Bolero","Synthwave + Cumbia","Punk acústico + Bossa Nova","Gospel + Jersey Club","Trip Hop + Flamenco"]),
  emotion: pairs(
    ["Hope after betrayal","Jealousy disguised as peace","Nostalgia with teeth","Relief at the wrong time","Tenderness after a fight","Joy you don't quite trust","Grief turning into gratitude","Revenge softened by distance"],
    ["Esperanza después de la traición","Celos disfrazados de paz","Nostalgia con rabia","Alivio en el momento equivocado","Ternura después de una pelea","Alegría que no terminas de creer","Dolor que se vuelve gratitud","Venganza suavizada por la distancia"]),
  setting: pairs(
    ["An empty laundromat at 2 AM","The last train out of town","A rooftop during a blackout","A motel room with one lamp","A beach after the storm","The kitchen from your childhood","A gas station at 3 AM","A wedding where no one is dancing"],
    ["Una lavandería vacía a las 2 AM","El último tren fuera de la ciudad","Una azotea durante un apagón","Un motel con una sola lámpara","Una playa después de la tormenta","La cocina de tu infancia","Una gasolinera vacía a las 3 AM","Una boda donde nadie baila"]),
  perspective: pairs(
    ["Your future self","An unanswered voicemail","The person who stayed","A stranger in the next room","Your shadow","The city watching you leave","A photo that remembers everything","Someone pretending not to care"],
    ["Tu yo del futuro","Un mensaje de voz sin respuesta","La persona que se quedó","Un extraño en la habitación de al lado","Tu sombra","La ciudad viéndote partir","Una foto que lo recuerda todo","Alguien que finge no sentir"]),
  constraint: pairs(
    ["Every chorus must end with a question.","Never use the word “love.”","Each verse loses one line.","The hook is only five words.","Begin every verse with the same image.","No line may contain more than seven syllables.","Write the bridge as a confession.","The title never appears in the lyrics."],
    ["Cada coro debe terminar con una pregunta.","No puedes usar la palabra “amor.”","Cada verso pierde una línea.","El hook solo tiene cinco palabras.","Empieza cada verso con la misma imagen.","Ninguna línea puede tener más de siete sílabas.","Escribe el puente como una confesión.","El título nunca aparece en la letra."]),
  mood: pairs(
    ["Green neon, heavy rain, disposable camera","Red velvet, candle smoke, deep shadows","Blue hour, empty highway, film grain","Silver chrome, flash photography, cold fog","Sun-faded orange, dust, Super 8 film","Ultraviolet club light, mirrors, wet pavement","Black-and-white kitchen, one yellow flower","Moonlit water, sheer curtains, slow motion"],
    ["Neón verde, lluvia fuerte, cámara desechable","Terciopelo rojo, humo de vela, sombras profundas","Hora azul, carretera vacía, grano de película","Cromo plateado, flash, niebla fría","Naranja desteñido, polvo, película Super 8","Luz ultravioleta, espejos, asfalto mojado","Cocina en blanco y negro, una flor amarilla","Agua bajo la luna, cortinas transparentes, cámara lenta"]),
  tempo: [72,78,84,88,92,96,102,108,116,124,132],
  additional: pairs(
    ["Electric piano, 808 bass, soft guitar","Nylon guitar, sub bass, distant choir","Detuned synth, handclaps, cello","Rhodes, brushed drums, vocal chops","Muted trumpet, tape hiss, floor tom","Baritone guitar, analog bass, glass percussion","Upright piano, breakbeat, reverse strings","Acoustic guitar, kick drum, room noise"],
    ["Piano eléctrico, bajo 808, guitarra suave","Guitarra de nylon, sub-bajo, coro lejano","Sintetizador desafinado, palmas, violonchelo","Rhodes, batería con escobillas, cortes vocales","Trompeta con sordina, ruido de cinta, tom de piso","Guitarra barítona, bajo analógico, percusión de vidrio","Piano vertical, breakbeat, cuerdas al revés","Guitarra acústica, bombo, sonido de la habitación"]),
  twist: pairs(
    ["The chorus changes the meaning.","The final verse reveals the narrator lied.","The love song is actually a goodbye.","The bridge jumps ten years forward.","The last line answers the first.","The listener is the person being left.","The happiest line contains the darkest truth.","The second chorus belongs to someone else."],
    ["El coro cambia el significado.","El último verso revela que quien narra mintió.","La canción de amor es en realidad una despedida.","El puente salta diez años al futuro.","La última línea responde a la primera.","Quien escucha es la persona abandonada.","La línea más feliz contiene la verdad más oscura.","El segundo coro pertenece a otra persona."]),
  wordPools: {
    en:["Plastic","Mercury","Cigarette","Velvet","Static","Motel","Honey","Satellite","Polaroid","Thunder","Lipstick","Mirror","Basement","Halo","Receipt","Ash","Elevator","Cherry","Radio","Matchstick","Concrete","Perfume","Window","Gold"],
    es:["Plástico","Mercurio","Cigarrillo","Terciopelo","Estática","Motel","Miel","Satélite","Polaroid","Trueno","Carmín","Espejo","Sótano","Halo","Recibo","Ceniza","Ascensor","Cereza","Radio","Cerilla","Concreto","Perfume","Ventana","Oro"]
  }
};

const cardMeta = {
  genre:["♫","#bfff55"], emotion:["♥","#ff58a9"], perspective:["◐","#a56aff"], setting:["⌂","#61e9e1"],
  words:["ABC","#ffb44c"], constraint:["⌁","#ffca64"], mood:["◉","#bfff55"], tempo:["⌇","#9970ff"],
  additional:["♩","#cf6dff"], twist:["✦","#ff61bf"]
};
const labels = {
  en:{genre:"Genre",emotion:"Emotion",perspective:"Perspective",setting:"Story / Setting",words:"Words",constraint:"Constraint",mood:"Visual Mood",tempo:"Tempo",additional:"Additional",twist:"Twist"},
  es:{genre:"Género",emotion:"Emoción",perspective:"Perspectiva",setting:"Historia / Escenario",words:"Palabras",constraint:"Restricción",mood:"Mood visual",tempo:"Tempo",additional:"Extra",twist:"Giro"}
};

const toolDefs = [
  {id:"lyric",icon:"✣",color:"#9a5cff",en:["Lyric starter","A line to begin with"],es:["Inicio de letra","Una línea para empezar"]},
  {id:"chords",icon:"♬",color:"#ffb44c",en:["Chord progression","Four chords, one door"],es:["Progresión de acordes","Cuatro acordes, una puerta"]},
  {id:"melody",icon:"〰",color:"#ff58bd",en:["Melody idea","A shape for the hook"],es:["Idea melódica","Una forma para el hook"]},
  {id:"structure",icon:"☷",color:"#bfff55",en:["Song structure","Give the chaos a frame"],es:["Estructura","Dale un marco al caos"]},
  {id:"rhyme",icon:"Aa",color:"#61e9e1",en:["Rhyme helper","A family of echoes"],es:["Ayuda de rima","Una familia de ecos"]}
];
const toolsData = {
  lyric: pairs(
    ["I kept the porch light on for the version of us that never came home.","Your name still flickers in the microwave clock.","We were brave until the room got quiet.","I learned your goodbye from the shape of the door.","The city wore your perfume long after you left.","I only miss you when the room starts telling the truth.","At 3:17, the ceiling finally answered me.","We split the silence like the last cigarette.","Your ghost knows every shortcut to my door.","I put our summer in a box marked fragile.","Nobody warned me freedom could sound this lonely.","The rearview mirror kept the version of me you knew."],
    ["Dejé la luz encendida para la versión de nosotros que nunca volvió.","Tu nombre aún parpadea en el reloj del microondas.","Fuimos valientes hasta que la habitación quedó en silencio.","Aprendí tu adiós por la forma de la puerta.","La ciudad llevó tu perfume mucho después de que te fueras.","Solo te extraño cuando la habitación empieza a decir la verdad.","A las 3:17, el techo por fin me respondió.","Partimos el silencio como el último cigarrillo.","Tu fantasma conoce todos los atajos hacia mi puerta.","Guardé nuestro verano en una caja que decía frágil.","Nadie me advirtió que la libertad sonaría tan sola.","El retrovisor guardó la versión de mí que tú conocías."]),
  chords:["Am7 — Fmaj7 — C — G6","Dm9 — G13 — Cmaj7 — A7","Em — Cmaj7 — G — D/F♯","Bm7 — E9 — Amaj7 — F♯m7","Cmaj7 — Em7 — Dm9 — G13","F♯m7 — B7 — Emaj7 — C♯m7","Cm9 — A♭maj7 — E♭maj7 — G7","Gm7 — C9 — Fmaj7 — D7","Amaj7 — E/G♯ — F♯m7 — Dmaj7","Dm — B♭maj7 — F — Cadd9","C♯m — A — E — Bsus4","Em9 — A13 — Dmaj7 — B7alt"],
  melody: pairs(
    ["Start low on beat four, leap a fifth on the title, then fall by steps.","Repeat one note through the verse; let the chorus climb three notes.","Sing the hook as two short questions and one long answer.","Hum a descending line, then reverse only its rhythm.","Enter before beat one with a breathy pickup; land the hook squarely on the downbeat.","Build the verse from three notes, then introduce one unexpected high note in the chorus.","Make every phrase rise except the title, which should fall like a confession.","Write a call-and-response between the lead vocal and a distant falsetto.","Hold one long note over the chord change, then answer it with quick syllables.","Let the melody avoid the root until the final word of the chorus.","Start the hook with silence on beat one and let the first word arrive late.","Turn a spoken phrase into melody by repeating its natural rhythm three times."],
    ["Empieza grave en el cuarto pulso, salta una quinta en el título y baja por grados.","Repite una nota en el verso; deja que el coro suba tres notas.","Canta el hook como dos preguntas cortas y una respuesta larga.","Tararea una línea descendente y luego invierte solo su ritmo.","Entra antes del primer pulso con una respiración y aterriza el hook justo en el tiempo fuerte.","Construye el verso con tres notas y presenta una nota aguda inesperada en el coro.","Haz que cada frase suba excepto el título, que cae como una confesión.","Escribe una llamada y respuesta entre la voz principal y un falsete lejano.","Sostén una nota larga sobre el cambio de acorde y respóndela con sílabas rápidas.","Evita la tónica hasta la última palabra del coro.","Empieza el hook con silencio en el primer pulso y deja que la primera palabra llegue tarde.","Convierte una frase hablada en melodía repitiendo su ritmo natural tres veces."]),
  structure: pairs(
    ["Intro — Verse — Pre — Chorus — Verse — Chorus — Bridge — Double Chorus","Cold Open — Verse — Hook — Verse — Hook — Instrumental — Final Hook","Verse — Chorus — Verse — Chorus — False Ending — Bridge — Chorus","Intro — Verse — Chorus — Post-Chorus — Verse — Chorus — Bridge — Half-Time Chorus","Hook — Verse — Hook — Verse — Bridge — Hook — Outro","Ambient Intro — Verse — Lift — Drop — Verse — Drop — Breakdown — Final Drop","Verse — Refrain — Verse — Refrain — Bridge — Refrain — Coda","Spoken Opening — Verse — Pre — Chorus — Rap Break — Bridge — Final Chorus","Instrumental Hook — Verse — Pre — Hook — Verse — Bridge — Hook","Verse — Verse — Bridge — Verse — Instrumental Outro"],
    ["Intro — Verso — Pre-coro — Coro — Verso — Coro — Puente — Coro doble","Entrada en frío — Verso — Hook — Verso — Hook — Instrumental — Hook final","Verso — Coro — Verso — Coro — Falso final — Puente — Coro","Intro — Verso — Coro — Post-coro — Verso — Coro — Puente — Coro a medio tiempo","Hook — Verso — Hook — Verso — Puente — Hook — Outro","Intro ambiental — Verso — Subida — Drop — Verso — Drop — Breakdown — Drop final","Verso — Estribillo — Verso — Estribillo — Puente — Estribillo — Coda","Apertura hablada — Verso — Pre-coro — Coro — Rap — Puente — Coro final","Hook instrumental — Verso — Pre-coro — Hook — Verso — Puente — Hook","Verso — Verso — Puente — Verso — Outro instrumental"]),
  rhyme: {
    en:["light · night · satellite · rewrite · out of sight","fire · wire · desire · choir · climb higher","room · perfume · bloom · assume · afterglow"],
    es:["cielo · hielo · desvelo · consuelo · vuelo","camino · destino · divino · vecino · clandestino","corazón · canción · estación · contradicción · habitación"]
  }
};

const rhymeLexicon = {
  en: {
    light:["night","bright","flight","sight","white","ignite","midnight","rewrite"],
    love:["above","dove","glove","enough","rough","touch","young","blood"],
    heart:["start","apart","art","chart","depart","dark","spark","scar"],
    fire:["higher","wire","desire","choir","inspire","liar","tired","wild"],
    time:["rhyme","climb","chime","prime","sublime","lifetime","skyline","goodbye"],
    rain:["pain","train","chain","remain","again","vein","windowpane","hurricane"],
    dream:["seem","stream","beam","scream","scheme","between","machine","memory"],
    blue:["you","true","through","new","view","undo","tattoo","room"],
    home:["alone","known","stone","phone","roam","ghost","road","slow"],
    moon:["soon","tune","June","room","bloom","wound","blue","you"],
    stay:["away","day","gray","say","decay","parade","escape","rain"],
    gone:["dawn","on","drawn","lawn","wrong","long","ghost","alone"],
    soul:["whole","control","role","coal","gold","low","home","alone"],
    name:["flame","same","game","frame","blame","rain","change","again"],
    night:["light","sight","bright","flight","white","alive","silence","midnight"],
    room:["bloom","perfume","assume","gloom","moon","you","truth","blue"]
  },
  es: {
    amor:["dolor","calor","color","temor","rumor","ardor","alrededor","voz"],
    corazon:["canción","razón","estación","habitación","contradicción","perdón","reloj","adiós"],
    vida:["herida","salida","perdida","venida","encendida","medida","ceniza","arriba"],
    luna:["cuna","fortuna","ninguna","una","bruma","duda","azul","luz"],
    cielo:["hielo","vuelo","desvelo","consuelo","suelo","miedo","lejos","invierno"],
    noche:["coche","broche","reproche","derroche","doce","nombre","norte","golpe"],
    cancion:["corazón","razón","estación","habitación","emoción","perdón","voz","reloj"],
    dolor:["amor","calor","color","temor","rumor","ardor","sol","voz"],
    tiempo:["viento","cuento","siento","lento","momento","invierno","cuerpo","recuerdo"],
    fuego:["juego","luego","ruego","ciego","nuevo","cuerpo","lejos","beso"],
    mar:["mirar","quedar","escapar","temblar","regresar","lugar","final","sal"],
    sueno:["dueño","pequeño","diseño","empeño","leño","cielo","lejos","recuerdo"],
    luz:["cruz","azul","capuz","tú","sur","club","virtud","quietud"],
    piel:["miel","papel","fiel","carrusel","hotel","ayer","pared","beber"],
    voz:["dos","adiós","reloj","sol","dolor","canción","noche","nombre"],
    beso:["regreso","peso","preso","exceso","proceso","cuerpo","fuego","lejos"]
  }
};

const rhymeCorpus = {
  en:"air affair alive alone apart art away blame blood bloom blue bright chain change chime climb cloud control dark dawn day decay desire door dream enough fire flame flight frame game ghost glass gloom gold gone gray heart higher home ignite light long love machine midnight mind moon name night pain phone prime rain remain rewrite rhyme road roam room rough scar scream seem sight silence sky slow soul spark start stay stone stream sublime time tired touch true tune view white wild window wire wrong you young".split(" "),
  es:"adiós alrededor amor ardor ayer azul canción calor camino ceniza cielo color corazón cuerpo dolor emoción encendida estación fuego habitación herida hielo invierno juego lejos lento luz mar miedo miel momento noche papel perdón piel razón regreso reloj rumor sal salida sol suelo sueño temor tiempo viento vida voz vuelo".split(" ")
};

let language = "en";
let currentMission = null;
const FAVORITES_KEY = "inspiration-machine-library-v1";
const GENERATION_HISTORY_KEY = "inspiration-machine-generation-history-v1";
const TOOL_HISTORY_KEY = "inspiration-machine-tool-history-v1";
let savedIdeas = loadSavedIdeas();
const generationHistory = loadGenerationHistory();
const toolHistory = loadToolHistory();
let activeTool = null;

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const random = arr => arr[Math.floor(Math.random() * arr.length)];
const localized = item => typeof item === "string" ? item : item[language];

function loadSavedIdeas() {
  try {
    const saved = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch { return []; }
}

function persistSavedIdeas() {
  try { localStorage.setItem(FAVORITES_KEY, JSON.stringify(savedIdeas)); } catch { /* Private storage may be unavailable. */ }
}

function loadGenerationHistory() {
  try {
    const history = JSON.parse(sessionStorage.getItem(GENERATION_HISTORY_KEY) || "[]");
    return new Set(Array.isArray(history) ? history : []);
  } catch { return new Set(); }
}

function rememberGeneration(mission) {
  generationHistory.add(missionSignature(mission));
  try { sessionStorage.setItem(GENERATION_HISTORY_KEY, JSON.stringify([...generationHistory])); } catch { /* In-memory history still prevents repeats. */ }
}

function loadToolHistory() {
  try {
    const history = JSON.parse(sessionStorage.getItem(TOOL_HISTORY_KEY) || "{}");
    return history && typeof history === "object" ? history : {};
  } catch { return {}; }
}

function freshToolValue(id) {
  const pool = toolsData[id];
  const used = new Set(toolHistory[id] || []);
  const available = pool.map((_, index) => index).filter(index => !used.has(index));
  if (!available.length) return null;
  const index = random(available);
  toolHistory[id] = [...used, index];
  try { sessionStorage.setItem(TOOL_HISTORY_KEY, JSON.stringify(toolHistory)); } catch { /* In-memory history still prevents repeats. */ }
  return localized(pool[index]);
}

function missionSignature(mission) {
  return mission ? JSON.stringify(mission) : "";
}

function savedIndexFor(mission) {
  const signature = missionSignature(mission);
  return savedIdeas.findIndex(idea => missionSignature(idea.mission) === signature);
}

function renderOptions() {
  const list = $("#optionList");
  const previous = Object.fromEntries($$("input", list).map(i => [i.dataset.option, i.checked]));
  list.innerHTML = optionDefs.map((opt, index) => {
    const copy = opt[language];
    const checked = previous[opt.id] ?? false;
    return `<label class="option-card" style="--icon-color:${opt.color}">
      <span class="option-icon">${opt.icon}</span>
      <span class="option-copy"><strong>${copy[0]}</strong><small>${copy[1]}</small></span>
      <input type="checkbox" data-option="${opt.id}" ${checked ? "checked" : ""}>
      <span class="check-ui">✓</span>
    </label>`;
  }).join("");
  const allSelected = $$('[data-option]', list).every(input => input.checked);
  $("#toggleAll").textContent = translations[language][allSelected ? "allOff" : "allOn"];
}

function renderTools() {
  $("#toolGrid").innerHTML = toolDefs.map(tool => {
    const copy = tool[language];
    return `<button class="tool-card" data-tool="${tool.id}" style="--tool-color:${tool.color}" type="button">
      <span>${tool.icon}</span><h3>${copy[0]}</h3><p>${copy[1]}</p>
    </button>`;
  }).join("");
  $$(".tool-card").forEach(button => button.addEventListener("click", () => generateTool(button.dataset.tool)));
}

function setLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => el.innerHTML = translations[lang][el.dataset.i18n]);
  $$(".lang").forEach(button => button.classList.toggle("active", button.dataset.lang === lang));
  renderOptions();
  renderTools();
  renderLibrary();
  if (activeTool === "rhyme") renderRhymeForm();
  if (currentMission) renderMission(currentMission, false);
}

function pickUnique(arr, count) {
  const pool = [...arr];
  const result = [];
  while (result.length < count && pool.length) result.push(pool.splice(Math.floor(Math.random()*pool.length),1)[0]);
  return result;
}

function buildMission(selected) {
  const mission = {};
  if (selected.has("genre")) mission.genre = random(data.genre);
  if (selected.has("emotion")) mission.emotion = random(data.emotion);
  if (selected.has("perspective")) mission.perspective = random(data.perspective);
  if (selected.has("setting")) mission.setting = random(data.setting);
  if (selected.has("words")) {
    const wordIndexes = pickUnique(data.wordPools.en.map((_, index) => index), 3);
    mission.words = {
      en: wordIndexes.map(index => data.wordPools.en[index]).join(", "),
      es: wordIndexes.map(index => data.wordPools.es[index]).join(", ")
    };
  }
  if (selected.has("constraint")) mission.constraint = random(data.constraint);
  if (selected.has("mood")) mission.mood = random(data.mood);
  if (selected.has("extra")) {
    mission.tempo = `${random(data.tempo)} BPM`;
    mission.additional = random(data.additional);
  }
  mission.twist = random(data.twist);
  return mission;
}

function generateMission() {
  const challenge = $("#challengeMode").checked;
  const selected = new Set($$("[data-option]:checked").map(input => input.dataset.option));
  if (!selected.size && !challenge) { showToast(translations[language].noSelection); return; }
  if (challenge) optionDefs.forEach(option => selected.add(option.id));

  let mission = null;
  for (let attempt=0; attempt<1000; attempt++) {
    const candidate = buildMission(selected);
    if (!generationHistory.has(missionSignature(candidate))) {
      mission = candidate;
      break;
    }
  }
  if (!mission) { showToast(translations[language].uniqueExhausted); return; }
  rememberGeneration(mission);
  currentMission = mission;

  const stage = $(".spark-stage");
  stage.classList.remove("generating");
  void stage.offsetWidth;
  stage.classList.add("generating");
  $("#sparkButton [data-i18n]").textContent = language === "en" ? "Tuning…" : "Sintonizando…";
  updateFavoriteButton();
  window.setTimeout(() => {
    renderMission(mission, true);
    $("#sparkButton [data-i18n]").textContent = translations[language].generateAgain;
    $("#mission").scrollIntoView({behavior:"smooth",block:"start"});
  }, 720);
}

function renderMission(mission, animate=true) {
  const order = ["genre","emotion","perspective","setting","words","constraint","mood","tempo","additional","twist"];
  $("#missionGrid").innerHTML = order.filter(key => mission[key]).map((key,index) => {
    const [icon,color] = cardMeta[key];
    return `<article class="mission-card" style="--card-color:${color};--delay:${animate ? index*.07 : 0}s">
      <header><span>${icon}</span>${labels[language][key]}</header>
      <p>${localized(mission[key])}</p>
    </article>`;
  }).join("");
  updateFavoriteButton();
}

function missionText(mission=currentMission) {
  if (!mission) return "";
  return Object.entries(mission).map(([key,value]) => `${labels[language][key]}: ${localized(value)}`).join("\n");
}

function updateFavoriteButton() {
  const active = currentMission && savedIndexFor(currentMission) >= 0;
  const button = $("#favoriteMission");
  button.classList.toggle("active", Boolean(active));
  button.querySelector("span").textContent = active ? "♥" : "♡";
}

function renderLibrary() {
  $(".favorite-link i").textContent = savedIdeas.length;
  $("#libraryCount").textContent = savedIdeas.length;
  const grid = $("#libraryGrid");
  if (!savedIdeas.length) {
    grid.innerHTML = `<article class="library-empty">
      <span class="empty-orbit">✦</span>
      <h3>${translations[language].libraryEmptyTitle}</h3>
      <p>${translations[language].libraryEmptyText}</p>
    </article>`;
    return;
  }

  grid.innerHTML = savedIdeas.slice().reverse().map((idea, displayIndex) => {
    const mission = idea.mission;
    const title = localized(mission.genre || mission.mood || mission.twist);
    const subtitle = localized(mission.emotion || mission.setting || mission.constraint || mission.twist);
    const details = ["perspective","setting","words","constraint","mood","tempo","additional","twist"]
      .filter(key => mission[key]).slice(0,4)
      .map(key => `<span class="idea-detail"><b>${labels[language][key]}</b>${localized(mission[key])}</span>`).join("");
    const date = new Date(idea.savedAt).toLocaleDateString(language === "es" ? "es-ES" : "en-US", {month:"short",day:"numeric",year:"numeric"});
    return `<article class="idea-card" data-idea-id="${idea.id}" style="--idea-color:${displayIndex % 2 ? "#ff58bd" : "#bfff55"}">
      <div class="idea-topline"><span class="idea-number"><i>✦</i>${translations[language].savedIdea} ${savedIdeas.length-displayIndex}</span><time class="idea-date">${date}</time></div>
      <h3>${title}</h3><p>${subtitle}</p>
      <div class="idea-details">${details}</div>
      <div class="idea-actions">
        <button class="idea-action primary" data-library-action="restore" type="button">↗ ${translations[language].restore}</button>
        <button class="idea-action" data-library-action="copy" type="button" aria-label="${translations[language].copy}">⧉</button>
        <button class="idea-action delete" data-library-action="delete" type="button" aria-label="${translations[language].delete}">×</button>
      </div>
    </article>`;
  }).join("");
}

function generateTool(id) {
  activeTool = id;
  if (id === "rhyme") { renderRhymeForm(); return; }
  const value = freshToolValue(id);
  if (!value) { showToast(translations[language].toolExhausted); return; }
  const output = $("#toolOutput");
  output.innerHTML = `<span>✦</span><p>${value}</p>`;
  output.classList.remove("flash"); void output.offsetWidth; output.classList.add("flash");
}

function renderRhymeForm() {
  const output = $("#toolOutput");
  output.innerHTML = `<span>✦</span><form id="rhymeForm" class="rhyme-lab">
    <label for="rhymeInput">${translations[language].rhymeLabel}</label>
    <div class="rhyme-entry"><input id="rhymeInput" maxlength="40" autocomplete="off" placeholder="${translations[language].rhymePlaceholder}"><button class="rhyme-submit" type="submit">${translations[language].findRhymes}</button></div>
    <div id="rhymeResults" class="rhyme-results"></div>
  </form>`;
  output.classList.remove("flash"); void output.offsetWidth; output.classList.add("flash");
  $("#rhymeForm").addEventListener("submit", event => {
    event.preventDefault();
    const word = $("#rhymeInput").value.trim();
    if (!word) return showToast(translations[language].rhymeEmpty);
    showRhymes(word);
  });
  $("#rhymeInput").focus();
}

function normalizeWord(word) {
  return word.toLocaleLowerCase(language === "es" ? "es" : "en").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zñ]/g, "");
}

function endingScore(a, b) {
  let score = 0;
  for (let i=1; i<=Math.min(a.length,b.length); i++) {
    if (a.at(-i) !== b.at(-i)) break;
    score++;
  }
  return score;
}

function findRhymes(word) {
  const key = normalizeWord(word);
  const curated = rhymeLexicon[language][key] || [];
  if (curated.length) return curated.slice(0,10);
  const ranked = rhymeCorpus[language]
    .filter(candidate => normalizeWord(candidate) !== key && !curated.includes(candidate))
    .map(candidate => ({word:candidate,score:endingScore(key,normalizeWord(candidate))}))
    .filter(candidate => candidate.score >= (language === "es" ? 2 : 1))
    .sort((a,b) => b.score-a.score || a.word.localeCompare(b.word))
    .map(candidate => candidate.word);
  return [...new Set([...curated,...ranked])].slice(0,10);
}

function showRhymes(word) {
  const results = findRhymes(word);
  if (!results.length) {
    const endings = language === "es" ? ["ción","ar","ado","ía"] : ["ight","air","own","ime"];
    results.push(...endings.map(ending => `${normalizeWord(word).slice(0,Math.max(1,normalizeWord(word).length-2))}${ending}`));
  }
  $("#rhymeResults").innerHTML = `<small class="rhyme-note">${translations[language].rhymeResults}</small>${results.map((result,index) => `<button class="rhyme-chip" type="button" style="--chip-delay:${index*.035}s" title="${language === "es" ? "Copiar" : "Copy"}">${result}</button>`).join("")}`;
  $$(".rhyme-chip", $("#rhymeResults")).forEach(chip => chip.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(chip.textContent); } catch { /* Clipboard may be unavailable on file:// */ }
    showToast(language === "es" ? `“${chip.textContent}” copiado` : `“${chip.textContent}” copied`);
  }));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function createAtmosphere() {
  const field = $("#particleField");
  for (let i=0;i<38;i++) {
    const particle = document.createElement("i");
    particle.className = "particle";
    const size = Math.random()*2.4+.7;
    particle.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*86}%;width:${size}px;height:${size}px;--duration:${4+Math.random()*8}s;--opacity:${.15+Math.random()*.55};color:${Math.random()>.72?"#bfff55":Math.random()>.45?"#ff4fbb":"#aa7aff"}`;
    field.append(particle);
  }
  const glyphs = ["A","R","?","♫","M","S","✦","N","♪","E","3","L","~","B","C","!"];
  $("#orbitLetters").innerHTML = glyphs.map((glyph,i) => `<span class="float-glyph" style="--angle:${i*(360/glyphs.length)}deg;--radius:${120+Math.random()*50}px;--speed:${12+Math.random()*16}s;--delay:${-Math.random()*18}s;--size:${11+Math.random()*10}px;--glyph:${i%3===0?"#bfff55":i%2?"#ff7acb":"#c795ff"}">${glyph}</span>`).join("");
}

function initCustomCursor() {
  const cursor = $("#customCursor");
  const finePointer = window.matchMedia("(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)");
  if (!finePointer.matches) return;

  let clickTimer;

  window.addEventListener("pointermove", event => {
    const x = `${event.clientX}px`;
    const y = `${event.clientY}px`;
    cursor.style.setProperty("--cursor-x", x);
    cursor.style.setProperty("--cursor-y", y);
    cursor.style.setProperty("--orbit-x", x);
    cursor.style.setProperty("--orbit-y", y);
    document.documentElement.classList.add("has-custom-cursor");
    cursor.classList.toggle("is-hidden", Boolean(event.target.closest("input, textarea, [contenteditable='true']")));
    cursor.classList.toggle("is-interactive", Boolean(event.target.closest("a, button, label, .option-card, .tool-card, .idea-card, .mission-card")));
  }, {passive:true});

  document.addEventListener("pointerdown", () => {
    cursor.classList.add("is-pressed");
    cursor.classList.remove("is-clicked");
    void cursor.offsetWidth;
    cursor.classList.add("is-clicked");
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => cursor.classList.remove("is-clicked"), 480);
  }, {passive:true});
  document.addEventListener("pointerup", () => cursor.classList.remove("is-pressed"), {passive:true});
  document.documentElement.addEventListener("mouseleave", () => cursor.classList.add("is-hidden"));
  document.documentElement.addEventListener("mouseenter", () => cursor.classList.remove("is-hidden"));
}

$("#sparkButton").addEventListener("click", generateMission);
$("#toggleAll").addEventListener("click", () => {
  const inputs = $$("[data-option]");
  const enable = !inputs.every(input => input.checked);
  inputs.forEach(input => input.checked = enable);
  $("#toggleAll").textContent = translations[language][enable ? "allOff" : "allOn"];
});
$("#challengeMode").addEventListener("change", event => showToast(translations[language][event.target.checked ? "challengeOn" : "challengeOff"]));
$$(".lang").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
$$("[data-scroll]").forEach(button => button.addEventListener("click", () => $(button.dataset.scroll).scrollIntoView({behavior:"smooth"})));
$("#copyMission").addEventListener("click", async () => {
  if (!currentMission) return showToast(translations[language].emptyMission);
  try { await navigator.clipboard.writeText(missionText()); } catch { /* Clipboard may be unavailable on file:// */ }
  showToast(translations[language].copied);
});
$("#favoriteMission").addEventListener("click", () => {
  if (!currentMission) return showToast(translations[language].emptyMission);
  const existingIndex = savedIndexFor(currentMission);
  if (existingIndex >= 0) {
    savedIdeas.splice(existingIndex, 1);
    showToast(translations[language].unsaved);
  } else {
    savedIdeas.push({ id:`idea-${Date.now()}-${Math.random().toString(36).slice(2,7)}`, savedAt:new Date().toISOString(), mission:currentMission });
    showToast(translations[language].saved);
  }
  persistSavedIdeas();
  renderLibrary();
  updateFavoriteButton();
});
$(".favorite-link").addEventListener("click", () => $("#favoritesLibrary").scrollIntoView({behavior:"smooth",block:"start"}));
$("#libraryGrid").addEventListener("click", async event => {
  const actionButton = event.target.closest("[data-library-action]");
  if (!actionButton) return;
  const card = actionButton.closest("[data-idea-id]");
  const ideaIndex = savedIdeas.findIndex(idea => idea.id === card.dataset.ideaId);
  if (ideaIndex < 0) return;
  const action = actionButton.dataset.libraryAction;
  if (action === "delete") {
    savedIdeas.splice(ideaIndex, 1);
    persistSavedIdeas();
    renderLibrary();
    updateFavoriteButton();
    showToast(translations[language].unsaved);
  } else if (action === "copy") {
    try { await navigator.clipboard.writeText(missionText(savedIdeas[ideaIndex].mission)); } catch { /* Clipboard may be unavailable on file:// */ }
    showToast(translations[language].ideaCopied);
  } else if (action === "restore") {
    currentMission = savedIdeas[ideaIndex].mission;
    renderMission(currentMission, true);
    $("#mission").scrollIntoView({behavior:"smooth",block:"start"});
    showToast(translations[language].restored);
  }
});

createAtmosphere();
initCustomCursor();
renderOptions();
renderTools();
renderLibrary();

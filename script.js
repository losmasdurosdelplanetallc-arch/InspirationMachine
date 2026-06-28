const translations = {
  en: {
    manifesto: "Make a song. Start here.", how: "How to play", favorites: "Saved",
    controlLabel: "Setup", chooseTitle: "Pick what to randomize", toggleAll: "All on",
    stageKicker: "Song prompt generator", orbText: "Build<br>your next song", spark: "Generate",
    sparkHint: "Pick options, then generate.",
    challenge: "Full random", challengeDesc: "Uses every category.", challengeNudge: "Want everything?",
    transmission: "New prompt", yourMission: "Song challenge", challengeBrief: "The brief", save: "Save", copy: "Copy",
    emptyMission: "Pick at least one category and press Generate.", howEyebrow: "How to play",
    howTitle: "Pick. Generate. Write.", step1Title: "Pick categories",
    step1Text: "Turn on only what you want randomized.", step2Title: "Generate",
    step2Text: "Get one complete song challenge.", step3Title: "Write or retry",
    step3Text: "Use it, save it, or generate another.",
    toolEyebrow: "Need a starting point?", extraTools: "Quick tools",
    toolPrompt: "Choose a tool.", footerText: "Built for songwriters who need a starting point.",
    copied: "Prompt copied", saved: "Prompt saved", unsaved: "Prompt removed",
    challengeOn: "Full random is on", challengeOff: "Full random is off", noSelection: "Pick at least one category or turn on Full random.",
    generationError: "Something interrupted that prompt. Try Generate again.",
    allOn: "All on", allOff: "All off", generateAgain: "Generate again",
    libraryEyebrow: "Your list", libraryTitle: "Saved prompts",
    libraryDescription: "Stored on this device.", ideasSaved: "prompts saved",
    libraryEmptyTitle: "Nothing saved", libraryEmptyText: "Generate a prompt and press Save.",
    savedIdea: "Saved prompt", restore: "Open", delete: "Delete", ideaCopied: "Prompt copied", restored: "Prompt opened",
    rhymeLabel: "Enter a word", rhymePlaceholder: "Example: light, fire, home", findRhymes: "Find rhymes",
    rhymeEmpty: "Enter a word first", rhymeResults: "Rhyme options",
    perfectRhymes: "Perfect", perfectHint: "Same stressed ending",
    closeRhymes: "Close", closeHint: "Flexible near-rhymes",
    phoneticRhymes: "Phonetic", phoneticHint: "Similar sound",
    rhymeNoMatches: "No strong matches yet. Try a shorter word.",
    uniqueExhausted: "No unused combinations remain for these settings. Turn on another category.",
    toolExhausted: "You used all 100 results in this tool for this visit.",
    twistExhausted: "You used all 100 plot twists in this visit. Start a new visit to reset them."
  },
  es: {
    manifesto: "Haz una canción. Empieza aquí.", how: "Cómo jugar", favorites: "Guardados",
    controlLabel: "Configuración", chooseTitle: "Elige qué quieres sortear", toggleAll: "Activar todo",
    stageKicker: "Generador de ideas para canciones", orbText: "Crea<br>tu próxima canción", spark: "Generar",
    sparkHint: "Elige opciones y genera.",
    challenge: "Todo al azar", challengeDesc: "Usa todas las categorías.", challengeNudge: "¿Quieres todo?",
    transmission: "Nueva idea", yourMission: "Reto de canción", challengeBrief: "El resumen", save: "Guardar", copy: "Copiar",
    emptyMission: "Elige al menos una categoría y pulsa Generar.", howEyebrow: "Cómo jugar",
    howTitle: "Elige. Genera. Escribe.", step1Title: "Elige categorías",
    step1Text: "Activa solo lo que quieres sortear.", step2Title: "Genera",
    step2Text: "Recibe un reto completo para una canción.", step3Title: "Escribe o repite",
    step3Text: "Úsalo, guárdalo o genera otro.",
    toolEyebrow: "¿Necesitas un punto de partida?", extraTools: "Herramientas rápidas",
    toolPrompt: "Elige una herramienta.", footerText: "Hecho para compositores que necesitan un punto de partida.",
    copied: "Idea copiada", saved: "Idea guardada", unsaved: "Idea eliminada",
    challengeOn: "Todo al azar activado", challengeOff: "Todo al azar desactivado", noSelection: "Elige al menos una categoría o activa Todo al azar.",
    generationError: "Algo interrumpió esa idea. Pulsa Generar otra vez.",
    allOn: "Activar todo", allOff: "Desactivar todo", generateAgain: "Generar otra",
    libraryEyebrow: "Tu lista", libraryTitle: "Ideas guardadas",
    libraryDescription: "Guardadas en este dispositivo.", ideasSaved: "ideas guardadas",
    libraryEmptyTitle: "Nada guardado", libraryEmptyText: "Genera una idea y pulsa Guardar.",
    savedIdea: "Idea guardada", restore: "Abrir", delete: "Eliminar", ideaCopied: "Idea copiada", restored: "Idea abierta",
    rhymeLabel: "Escribe una palabra", rhymePlaceholder: "Ejemplo: amor, fuego, luna", findRhymes: "Buscar rimas",
    rhymeEmpty: "Escribe una palabra primero", rhymeResults: "Opciones de rima",
    perfectRhymes: "Perfectas", perfectHint: "Misma terminación tónica",
    closeRhymes: "Cercanas", closeHint: "Coincidencia flexible",
    phoneticRhymes: "Fonéticas", phoneticHint: "Sonido similar",
    rhymeNoMatches: "Aún no hay coincidencias fuertes. Prueba una palabra más corta.",
    uniqueExhausted: "No quedan combinaciones nuevas con esta configuración. Activa otra categoría.",
    toolExhausted: "Ya usaste los 100 resultados de esta herramienta durante esta visita.",
    twistExhausted: "Ya usaste los 100 giros durante esta visita. Inicia una visita nueva para reiniciarlos."
  }
};

const optionDefs = [
  { id:"genre", icon:"◉", color:"#ff58c6", en:["Genre","Music style"], es:["Género","Estilo musical"] },
  { id:"emotion", icon:"♥", color:"#ff6b89", en:["Emotion","Core feeling"], es:["Emoción","Emoción principal"] },
  { id:"setting", icon:"⌂", color:"#61e9e1", en:["Setting","Place and situation"], es:["Escenario","Lugar y situación"] },
  { id:"perspective", icon:"◐", color:"#9a72ff", en:["Perspective","Who is speaking"], es:["Perspectiva","Quién habla"] },
  { id:"words", icon:"ABC", color:"#ffb44c", en:["Random Words","3 words"], es:["Palabras al azar","3 palabras"] },
  { id:"constraint", icon:"⌁", color:"#bfff55", en:["Rule","Writing rule"], es:["Regla","Regla de escritura"] },
  { id:"mood", icon:"◫", color:"#59d89a", en:["Visual Mood","Visual direction"], es:["Estilo visual","Dirección visual"] },
  { id:"extra", icon:"⌇", color:"#c481ff", en:["Music Details","Tempo and instruments"], es:["Datos musicales","Tempo e instrumentos"] }
];

const pairs = (en, es) => en.map((value, i) => ({ en:value, es:es[i] }));
const data = {
  genre: pairs(
    ["Neo Soul + Dembow","Dream Pop + Bachata","Indie Folk + UK Garage","Alt R&B + Bolero","Synthwave + Cumbia","Acoustic Punk + Bossa Nova","Gospel + Jersey Club","Trip Hop + Flamenco","Afrobeats + Shoegaze","Hyperpop + Salsa","Lo-fi Hip Hop + Fado","Drill + Mariachi","Ambient Techno + Ranchera","Dancehall + Jazz Waltz","Garage Rock + Merengue","Deep House + Corrido","Trap Soul + Tango","Indie Rock + Vallenato","Drum & Bass + Rumba","Psychedelic Pop + Son Cubano"],
    ["Neo Soul + Dembow","Dream Pop + Bachata","Indie Folk + UK Garage","R&B alternativo + Bolero","Synthwave + Cumbia","Punk acústico + Bossa Nova","Gospel + Jersey Club","Trip Hop + Flamenco","Afrobeats + Shoegaze","Hyperpop + Salsa","Hip Hop lo-fi + Fado","Drill + Mariachi","Techno ambiental + Ranchera","Dancehall + Vals jazz","Garage Rock + Merengue","Deep House + Corrido","Trap Soul + Tango","Indie Rock + Vallenato","Drum & Bass + Rumba","Pop psicodélico + Son Cubano"]),
  emotion: pairs(
    ["Hope after betrayal","Jealousy disguised as peace","Nostalgia with teeth","Relief at the wrong time","Tenderness after a fight","Joy you don't quite trust","Grief turning into gratitude","Revenge softened by distance","Confidence hiding panic","Forgiveness without reunion","Longing for a place you've never visited","Pride after being underestimated","Guilt mixed with relief","Desire interrupted by doubt","Peace after burning a bridge","Wonder at becoming a stranger","Loneliness in a crowded room","Devotion turning into resentment","Freedom that feels like grief","Courage seconds before leaving"],
    ["Esperanza después de la traición","Celos disfrazados de paz","Nostalgia con rabia","Alivio en el momento equivocado","Ternura después de una pelea","Alegría que no terminas de creer","Dolor que se vuelve gratitud","Venganza suavizada por la distancia","Confianza que esconde pánico","Perdón sin reencuentro","Añoranza por un lugar que nunca visitaste","Orgullo después de ser subestimado","Culpa mezclada con alivio","Deseo interrumpido por la duda","Paz después de quemar un puente","Asombro al convertirte en un extraño","Soledad en una habitación llena","Devoción que se vuelve resentimiento","Libertad que se siente como duelo","Valentía segundos antes de partir"]),
  setting: pairs(
    ["An empty laundromat at 2 AM","The last train out of town","A rooftop during a blackout","A motel room with one lamp","A beach after the storm","The kitchen from your childhood","A gas station at 3 AM","A wedding where no one is dancing","A closed amusement park in winter","A hospital parking lot at sunrise","The backstage hallway after the last show","A diner where the jukebox is broken","An airport gate after every flight is canceled","A flooded apartment with music upstairs","A corner store on the final night of summer","A cemetery during a meteor shower","A recording booth after everyone leaves","A borrowed car crossing the desert","A hotel elevator stuck between floors","A childhood bedroom being packed into boxes"],
    ["Una lavandería vacía a las 2 AM","El último tren fuera de la ciudad","Una azotea durante un apagón","Un motel con una sola lámpara","Una playa después de la tormenta","La cocina de tu infancia","Una gasolinera vacía a las 3 AM","Una boda donde nadie baila","Un parque de diversiones cerrado en invierno","El estacionamiento de un hospital al amanecer","El pasillo detrás del escenario después del último show","Un restaurante donde la rocola está rota","Una puerta de aeropuerto después de cancelar todos los vuelos","Un apartamento inundado con música arriba","Una tienda de la esquina en la última noche del verano","Un cementerio durante una lluvia de meteoros","Una cabina de grabación cuando todos se han ido","Un carro prestado cruzando el desierto","Un ascensor de hotel detenido entre pisos","Un dormitorio de infancia guardado en cajas"]),
  perspective: pairs(
    ["Your future self","An unanswered voicemail","The person who stayed","A stranger in the next room","Your shadow","The city watching you leave","A photo that remembers everything","Someone pretending not to care","Your childhood best friend","The lie itself","A house that misses its family","The moon overhearing an argument","Your name in someone else's mouth","The person you almost became","A taxi driver who knows the ending","An old jacket in the back of a closet","The last text message in the thread","A mirror that refuses to flatter you","The one person who saw through everything","Your heartbeat during a difficult conversation"],
    ["Tu yo del futuro","Un mensaje de voz sin respuesta","La persona que se quedó","Un extraño en la habitación de al lado","Tu sombra","La ciudad viéndote partir","Una foto que lo recuerda todo","Alguien que finge no sentir","Tu mejor amistad de la infancia","La mentira misma","Una casa que extraña a su familia","La luna escuchando una discusión","Tu nombre en la boca de otra persona","La persona en la que casi te convertiste","Un taxista que conoce el final","Una chaqueta vieja al fondo del armario","El último mensaje del chat","Un espejo que se niega a halagarte","La única persona que lo vio todo","Tu corazón durante una conversación difícil"]),
  constraint: pairs(
    ["Every chorus must end with a question.","Never use the word “love.”","Each verse loses one line.","The hook is only five words.","Begin every verse with the same image.","No line may contain more than seven syllables.","Write the bridge as a confession.","The title never appears in the lyrics.","Every verse must contain one exact time.","Use only concrete images in the first verse.","The chorus may use just two chords.","Include a line that means its opposite later.","Write one verse with no first-person pronouns.","Every section begins with a color.","The pre-chorus is a single repeated sentence.","Use one word in three different meanings.","The bridge must contradict the chorus.","End the song one line earlier than expected.","Each chorus changes one important word.","Write the first and final lines as a perfect pair."],
    ["Cada coro debe terminar con una pregunta.","No puedes usar la palabra “amor.”","Cada verso pierde una línea.","El hook solo tiene cinco palabras.","Empieza cada verso con la misma imagen.","Ninguna línea puede tener más de siete sílabas.","Escribe el puente como una confesión.","El título nunca aparece en la letra.","Cada verso debe contener una hora exacta.","Usa solamente imágenes concretas en el primer verso.","El coro solo puede usar dos acordes.","Incluye una línea que después signifique lo contrario.","Escribe un verso sin pronombres en primera persona.","Cada sección comienza con un color.","El pre-coro es una sola oración repetida.","Usa una palabra con tres significados distintos.","El puente debe contradecir el coro.","Termina la canción una línea antes de lo esperado.","Cada coro cambia una palabra importante.","Escribe la primera y la última línea como una pareja perfecta."]),
  mood: pairs(
    ["Green neon, heavy rain, disposable camera","Red velvet, candle smoke, deep shadows","Blue hour, empty highway, film grain","Silver chrome, flash photography, cold fog","Sun-faded orange, dust, Super 8 film","Ultraviolet club light, mirrors, wet pavement","Black-and-white kitchen, one yellow flower","Moonlit water, sheer curtains, slow motion","Amber streetlights, snow, scratched 35mm film","Hot pink motel sign, desert wind, VHS tracking","Hospital white, pale sunrise, security camera","Deep ocean blue, floating fabric, underwater light","Golden grocery aisle, midnight, fisheye lens","Forest green, fireflies, handheld home video","Crimson theater curtains, empty seats, spotlight dust","Pastel sunrise, rooftop antennas, dreamy soft focus","Harsh flash, crowded hallway, silver jewelry","Sepia afternoon, ceiling fan, faded family photo","Electric blue arcade, fogged glass, analog noise","Soft lavender bedroom, storm shadows, Polaroid blur"],
    ["Neón verde, lluvia fuerte, cámara desechable","Terciopelo rojo, humo de vela, sombras profundas","Hora azul, carretera vacía, grano de película","Cromo plateado, flash, niebla fría","Naranja desteñido, polvo, película Super 8","Luz ultravioleta, espejos, asfalto mojado","Cocina en blanco y negro, una flor amarilla","Agua bajo la luna, cortinas transparentes, cámara lenta","Faroles ámbar, nieve, película de 35 mm rayada","Letrero de motel rosa, viento del desierto, tracking VHS","Blanco de hospital, amanecer pálido, cámara de seguridad","Azul de océano, tela flotante, luz submarina","Pasillo de supermercado dorado, medianoche, lente ojo de pez","Verde bosque, luciérnagas, video casero en mano","Cortinas carmesí, butacas vacías, polvo en el reflector","Amanecer pastel, antenas en la azotea, enfoque suave","Flash duro, pasillo lleno, joyería plateada","Tarde sepia, ventilador de techo, foto familiar desteñida","Arcade azul eléctrico, vidrio empañado, ruido analógico","Dormitorio lavanda, sombras de tormenta, Polaroid borrosa"]),
  tempo: [64,68,72,75,78,80,84,86,88,90,92,96,98,102,105,108,112,116,120,124,128,132,140,146],
  additional: pairs(
    ["Electric piano, 808 bass, soft guitar","Nylon guitar, sub bass, distant choir","Detuned synth, handclaps, cello","Rhodes, brushed drums, vocal chops","Muted trumpet, tape hiss, floor tom","Baritone guitar, analog bass, glass percussion","Upright piano, breakbeat, reverse strings","Acoustic guitar, kick drum, room noise","Wurlitzer, congas, bowed bass","Twelve-string guitar, gated snare, Mellotron","Prepared piano, rim clicks, breath samples","Marimba, distorted bass, whispered doubles","Accordion, electronic kick, vinyl crackle","Steel guitar, drum machine, humming choir","Muted synth brass, claves, fretless bass","Harp, low toms, granular vocal cloud","Mandolin, sub kick, train ambience","Organ, tambourine, tremolo guitar","Kalimba, broken beat, pitched-down ad-libs","Clean electric guitar, tablas, mono synth"],
    ["Piano eléctrico, bajo 808, guitarra suave","Guitarra de nylon, sub-bajo, coro lejano","Sintetizador desafinado, palmas, violonchelo","Rhodes, batería con escobillas, cortes vocales","Trompeta con sordina, ruido de cinta, tom de piso","Guitarra barítona, bajo analógico, percusión de vidrio","Piano vertical, breakbeat, cuerdas al revés","Guitarra acústica, bombo, sonido de la habitación","Wurlitzer, congas, contrabajo con arco","Guitarra de doce cuerdas, redoblante con gate, Mellotron","Piano preparado, golpes de aro, muestras de respiración","Marimba, bajo distorsionado, voces susurradas dobles","Acordeón, bombo electrónico, crujido de vinilo","Steel guitar, caja de ritmos, coro tarareado","Metales de sintetizador apagados, claves, bajo fretless","Arpa, toms graves, nube vocal granular","Mandolina, sub-bombo, ambiente de tren","Órgano, pandereta, guitarra con trémolo","Kalimba, ritmo roto, ad-libs graves","Guitarra eléctrica limpia, tablas, sintetizador mono"]),
  twist: pairs(
    ["The chorus changes the meaning.","The final verse reveals the narrator lied.","The love song is actually a goodbye.","The bridge jumps ten years forward.","The last line answers the first.","The listener is the person being left.","The happiest line contains the darkest truth.","The second chorus belongs to someone else.","The narrator is singing to a place, not a person.","The first verse happens after the final chorus.","The title is revealed to be someone's nickname.","The bridge exposes a memory that never happened.","The person being blamed is the narrator.","The final chorus removes every word except the truth.","The song begins as advice and ends as an apology.","The setting slowly becomes a dream.","The background vocal tells the real story.","The final line reveals the two characters are the same person.","The chorus is a promise the narrator cannot keep.","The instrumental break contains the emotional answer."],
    ["El coro cambia el significado.","El último verso revela que quien narra mintió.","La canción de amor es en realidad una despedida.","El puente salta diez años al futuro.","La última línea responde a la primera.","Quien escucha es la persona abandonada.","La línea más feliz contiene la verdad más oscura.","El segundo coro pertenece a otra persona.","La voz le canta a un lugar, no a una persona.","El primer verso ocurre después del último coro.","El título resulta ser el apodo de alguien.","El puente revela un recuerdo que nunca ocurrió.","La persona culpada es quien narra.","El coro final elimina todas las palabras excepto la verdad.","La canción empieza como consejo y termina como disculpa.","El escenario se convierte lentamente en un sueño.","La voz de fondo cuenta la historia real.","La última línea revela que ambos personajes son la misma persona.","El coro es una promesa que quien narra no puede cumplir.","El interludio instrumental contiene la respuesta emocional."]),
  wordPools: {
    en:["Plastic","Mercury","Cigarette","Velvet","Static","Motel","Honey","Satellite","Polaroid","Thunder","Lipstick","Mirror","Basement","Halo","Receipt","Ash","Elevator","Cherry","Radio","Matchstick","Concrete","Perfume","Window","Gold","Compass","Glitter","Hospital","Keyhole","Lemon","Marble","Neon","Ocean","Postcard","Quartz","Ribbon","Siren","Telephone","Umbrella","Voltage","Whiskey","X-ray","Yearbook","Zipper","Carnation","Freeway","Lantern","Snowglobe","Tangerine"],
    es:["Plástico","Mercurio","Cigarrillo","Terciopelo","Estática","Motel","Miel","Satélite","Polaroid","Trueno","Carmín","Espejo","Sótano","Halo","Recibo","Ceniza","Ascensor","Cereza","Radio","Cerilla","Concreto","Perfume","Ventana","Oro","Brújula","Brillantina","Hospital","Cerradura","Limón","Mármol","Neón","Océano","Postal","Cuarzo","Cinta","Sirena","Teléfono","Paraguas","Voltaje","Whisky","Radiografía","Anuario","Cremallera","Clavel","Autopista","Linterna","Bola de nieve","Mandarina"]
  }
};

const cardMeta = {
  genre:["♫","#bfff55"], emotion:["♥","#ff58a9"], perspective:["◐","#a56aff"], setting:["⌂","#61e9e1"],
  words:["ABC","#ffb44c"], constraint:["⌁","#ffca64"], mood:["◉","#bfff55"], tempo:["⌇","#9970ff"],
  additional:["♩","#cf6dff"], twist:["✦","#ff61bf"]
};
const labels = {
  en:{genre:"Genre",emotion:"Emotion",perspective:"Perspective",setting:"Setting",words:"Words",constraint:"Rule",mood:"Visual Mood",tempo:"Tempo",additional:"Music Details",twist:"Twist"},
  es:{genre:"Género",emotion:"Emoción",perspective:"Perspectiva",setting:"Escenario",words:"Palabras",constraint:"Regla",mood:"Estilo visual",tempo:"Tempo",additional:"Datos musicales",twist:"Giro"}
};

const toolDefs = [
  {id:"lyric",icon:"✣",color:"#9a5cff",en:["Opening line","Generate a first line"],es:["Primera línea","Genera una línea inicial"]},
  {id:"chords",icon:"♬",color:"#ffb44c",en:["Chord progression","Generate four chords"],es:["Progresión","Genera cuatro acordes"]},
  {id:"melody",icon:"〰",color:"#ff58bd",en:["Melody rule","Generate a melody prompt"],es:["Regla melódica","Genera una idea melódica"]},
  {id:"structure",icon:"☷",color:"#bfff55",en:["Song structure","Generate section order"],es:["Estructura","Genera el orden de secciones"]},
  {id:"rhyme",icon:"Aa",color:"#61e9e1",en:["Rhyme finder","Type a word"],es:["Buscador de rimas","Escribe una palabra"]}
];
const toolsData = {
  lyric: pairs(
    ["I kept the porch light on for the version of us that never came home.","Your name still flickers in the microwave clock.","We were brave until the room got quiet.","I learned your goodbye from the shape of the door.","The city wore your perfume long after you left.","I only miss you when the room starts telling the truth.","At 3:17, the ceiling finally answered me.","We split the silence like the last cigarette.","Your ghost knows every shortcut to my door.","I put our summer in a box marked fragile.","Nobody warned me freedom could sound this lonely.","The rearview mirror kept the version of me you knew.","Tonight the moon is wearing all my excuses.","I changed the locks, but the memories kept their keys.","The rain signed your name across the windshield.","We danced like the floor had never heard a goodbye.","I found tomorrow hiding underneath your old coat.","The truth arrived barefoot and asked to stay.","Every red light gave me time to change my mind.","Your silence has been louder since I learned to listen."],
    ["Dejé la luz encendida para la versión de nosotros que nunca volvió.","Tu nombre aún parpadea en el reloj del microondas.","Fuimos valientes hasta que la habitación quedó en silencio.","Aprendí tu adiós por la forma de la puerta.","La ciudad llevó tu perfume mucho después de que te fueras.","Solo te extraño cuando la habitación empieza a decir la verdad.","A las 3:17, el techo por fin me respondió.","Partimos el silencio como el último cigarrillo.","Tu fantasma conoce todos los atajos hacia mi puerta.","Guardé nuestro verano en una caja que decía frágil.","Nadie me advirtió que la libertad sonaría tan sola.","El retrovisor guardó la versión de mí que tú conocías.","Esta noche la luna lleva puestas todas mis excusas.","Cambié las cerraduras, pero los recuerdos conservaron sus llaves.","La lluvia escribió tu nombre sobre el parabrisas.","Bailamos como si el piso nunca hubiera escuchado un adiós.","Encontré el mañana escondido bajo tu abrigo viejo.","La verdad llegó descalza y pidió quedarse.","Cada luz roja me dio tiempo para cambiar de opinión.","Tu silencio suena más fuerte desde que aprendí a escuchar."]),
  chords:["Am7 — Fmaj7 — C — G6","Dm9 — G13 — Cmaj7 — A7","Em — Cmaj7 — G — D/F♯","Bm7 — E9 — Amaj7 — F♯m7","Cmaj7 — Em7 — Dm9 — G13","F♯m7 — B7 — Emaj7 — C♯m7","Cm9 — A♭maj7 — E♭maj7 — G7","Gm7 — C9 — Fmaj7 — D7","Amaj7 — E/G♯ — F♯m7 — Dmaj7","Dm — B♭maj7 — F — Cadd9","C♯m — A — E — Bsus4","Em9 — A13 — Dmaj7 — B7alt","E♭maj9 — Gm7 — Cm9 — A♭maj7","A♭maj7 — B♭6 — Gm7 — Cm7","Fmaj7 — E7 — Am9 — Gm7 C9","B♭m9 — E♭m9 — G♭maj7 — F7","Dmaj9 — C♯m7 — Bm7 — E13","Fm9 — D♭maj7 — A♭ — E♭sus4","Gmaj7 — B7 — Em9 — Cmaj7","Am9 — D9 — Gmaj7 — C♯m7♭5"],
  melody: pairs(
    ["Start low on beat four, leap a fifth on the title, then fall by steps.","Repeat one note through the verse; let the chorus climb three notes.","Sing the hook as two short questions and one long answer.","Hum a descending line, then reverse only its rhythm.","Enter before beat one with a breathy pickup; land the hook squarely on the downbeat.","Build the verse from three notes, then introduce one unexpected high note in the chorus.","Make every phrase rise except the title, which should fall like a confession.","Write a call-and-response between the lead vocal and a distant falsetto.","Hold one long note over the chord change, then answer it with quick syllables.","Let the melody avoid the root until the final word of the chorus.","Start the hook with silence on beat one and let the first word arrive late.","Turn a spoken phrase into melody by repeating its natural rhythm three times.","Use a three-note motif that shifts one beat later in every section.","Let the verse whisper around one pitch, then make the chorus answer in octaves.","Write the hook entirely in descending thirds.","Stretch the title across two bars while the chords move underneath it.","Begin each chorus phrase on the same note but end somewhere new.","Make the melody climb chromatically into one sudden open interval.","Echo the final word of each line one octave higher.","Write a melody that sounds complete until the last note refuses to resolve."],
    ["Empieza grave en el cuarto pulso, salta una quinta en el título y baja por grados.","Repite una nota en el verso; deja que el coro suba tres notas.","Canta el hook como dos preguntas cortas y una respuesta larga.","Tararea una línea descendente y luego invierte solo su ritmo.","Entra antes del primer pulso con una respiración y aterriza el hook justo en el tiempo fuerte.","Construye el verso con tres notas y presenta una nota aguda inesperada en el coro.","Haz que cada frase suba excepto el título, que cae como una confesión.","Escribe una llamada y respuesta entre la voz principal y un falsete lejano.","Sostén una nota larga sobre el cambio de acorde y respóndela con sílabas rápidas.","Evita la tónica hasta la última palabra del coro.","Empieza el hook con silencio en el primer pulso y deja que la primera palabra llegue tarde.","Convierte una frase hablada en melodía repitiendo su ritmo natural tres veces.","Usa un motivo de tres notas que llegue un pulso más tarde en cada sección.","Deja que el verso susurre alrededor de una nota y que el coro responda en octavas.","Escribe el hook completamente en terceras descendentes.","Estira el título durante dos compases mientras los acordes cambian debajo.","Empieza cada frase del coro en la misma nota pero termina en un lugar nuevo.","Haz que la melodía suba cromáticamente hasta un intervalo abierto inesperado.","Repite la última palabra de cada línea una octava más arriba.","Escribe una melodía que parece completa hasta que la última nota se niega a resolver."]),
  structure: pairs(
    ["Intro — Verse — Pre — Chorus — Verse — Chorus — Bridge — Double Chorus","Cold Open — Verse — Hook — Verse — Hook — Instrumental — Final Hook","Verse — Chorus — Verse — Chorus — False Ending — Bridge — Chorus","Intro — Verse — Chorus — Post-Chorus — Verse — Chorus — Bridge — Half-Time Chorus","Hook — Verse — Hook — Verse — Bridge — Hook — Outro","Ambient Intro — Verse — Lift — Drop — Verse — Drop — Breakdown — Final Drop","Verse — Refrain — Verse — Refrain — Bridge — Refrain — Coda","Spoken Opening — Verse — Pre — Chorus — Rap Break — Bridge — Final Chorus","Instrumental Hook — Verse — Pre — Hook — Verse — Bridge — Hook","Verse — Verse — Bridge — Verse — Instrumental Outro","Chorus — Verse — Chorus — Verse — Bridge — Silent Bar — Final Chorus","Voice Note Intro — Hook — Verse — Hook — Interlude — Verse — Hook","Intro — Verse — Pre — Drop — Verse — Pre — Double Drop — Outro","Verse A — Verse B — Refrain — Verse C — Refrain — Coda","Percussion Intro — Chorus — Verse — Chorus — Breakdown — Chorus","Verse — Lift — Chorus — Post — Verse — Lift — Chorus — A Cappella Outro","Sample Intro — Verse — Hook — Beat Switch — Verse — Hook — Reprise","Piano Intro — Verse — Chorus — Bridge — Key Change — Final Chorus","Hook — Verse — Pre — Hook — Dance Break — Bridge — Triple Hook","Ambient Cold Open — Verse — Refrain — Instrumental Journey — Final Refrain"],
    ["Intro — Verso — Pre-coro — Coro — Verso — Coro — Puente — Coro doble","Entrada en frío — Verso — Hook — Verso — Hook — Instrumental — Hook final","Verso — Coro — Verso — Coro — Falso final — Puente — Coro","Intro — Verso — Coro — Post-coro — Verso — Coro — Puente — Coro a medio tiempo","Hook — Verso — Hook — Verso — Puente — Hook — Outro","Intro ambiental — Verso — Subida — Drop — Verso — Drop — Breakdown — Drop final","Verso — Estribillo — Verso — Estribillo — Puente — Estribillo — Coda","Apertura hablada — Verso — Pre-coro — Coro — Rap — Puente — Coro final","Hook instrumental — Verso — Pre-coro — Hook — Verso — Puente — Hook","Verso — Verso — Puente — Verso — Outro instrumental","Coro — Verso — Coro — Verso — Puente — Compás en silencio — Coro final","Intro de nota de voz — Hook — Verso — Hook — Interludio — Verso — Hook","Intro — Verso — Pre-coro — Drop — Verso — Pre-coro — Drop doble — Outro","Verso A — Verso B — Estribillo — Verso C — Estribillo — Coda","Intro de percusión — Coro — Verso — Coro — Breakdown — Coro","Verso — Subida — Coro — Post — Verso — Subida — Coro — Outro a capela","Intro con sample — Verso — Hook — Cambio de beat — Verso — Hook — Reprise","Intro de piano — Verso — Coro — Puente — Cambio de tono — Coro final","Hook — Verso — Pre-coro — Hook — Break de baile — Puente — Hook triple","Entrada ambiental — Verso — Estribillo — Viaje instrumental — Estribillo final"]),
  rhyme: {
    en:["light · night · satellite · rewrite · out of sight","fire · wire · desire · choir · climb higher","room · perfume · bloom · assume · afterglow"],
    es:["cielo · hielo · desvelo · consuelo · vuelo","camino · destino · divino · vecino · clandestino","corazón · canción · estación · contradicción · habitación"]
  }
};

function crossPairs(left, right, joinEnglish, joinSpanish) {
  return left.flatMap(a => right.map(b => ({ en:joinEnglish(a.en,b.en), es:joinSpanish(a.es,b.es) })));
}

function fillPairedPool(pool, candidates, target=100) {
  const seen = new Set(pool.map(item => `${item.en}|${item.es}`));
  for (const candidate of candidates) {
    const key = `${candidate.en}|${candidate.es}`;
    if (!seen.has(key)) { pool.push(candidate); seen.add(key); }
    if (pool.length >= target) break;
  }
}

function fillStringPool(pool, candidates, target=100) {
  const seen = new Set(pool);
  for (const candidate of candidates) {
    if (!seen.has(candidate)) { pool.push(candidate); seen.add(candidate); }
    if (pool.length >= target) break;
  }
}

function expandLibraries() {
  data.genre.length = 0;
  const focusedGenres = pairs(
    ["Neo Soul","Alternative R&B","Dream Pop","Indie Folk","Synthwave","Afrobeats","Trip Hop","Garage Rock","Deep House","Psychedelic Pop","Dembow","Bachata","Bolero","Cumbia","Flamenco","Salsa","Tango","Merengue","Bossa Nova","Son Cubano","Alternative Reggaeton","Acoustic Pop","Latin Trap","Lo-fi Hip Hop","Jersey Club","Corrido","Vallenato","Shoegaze","Gospel","Dancehall"],
    ["Neo Soul","R&B alternativo","Dream Pop","Indie Folk","Synthwave","Afrobeats","Trip Hop","Garage Rock","Deep House","Pop psicodélico","Dembow","Bachata","Bolero","Cumbia","Flamenco","Salsa","Tango","Merengue","Bossa Nova","Son Cubano","Reggaetón alternativo","Pop acústico","Trap latino","Hip Hop lo-fi","Jersey Club","Corrido","Vallenato","Shoegaze","Gospel","Dancehall"]);
  fillPairedPool(data.genre, focusedGenres);
  const genresA = pairs(
    ["Neo Soul","Alt R&B","Dream Pop","Indie Folk","Synthwave","Afrobeats","Trip Hop","Garage Rock","Deep House","Psychedelic Pop"],
    ["Neo Soul","R&B alternativo","Dream Pop","Indie Folk","Synthwave","Afrobeats","Trip Hop","Garage Rock","Deep House","Pop psicodélico"]);
  const genresB = pairs(
    ["Dembow","Bachata","Bolero","Cumbia","Flamenco","Salsa","Tango","Merengue","Bossa Nova","Son Cubano"],
    ["Dembow","Bachata","Bolero","Cumbia","Flamenco","Salsa","Tango","Merengue","Bossa Nova","Son Cubano"]);
  fillPairedPool(data.genre, crossPairs(genresA, genresB, (a,b)=>`${a} + ${b}`, (a,b)=>`${a} + ${b}`));

  const emotions = pairs(
    ["Hope","Jealousy","Nostalgia","Relief","Tenderness","Joy","Grief","Anger","Desire","Calm"],
    ["Esperanza","Celos","Nostalgia","Alivio","Ternura","Alegría","Duelo","Rabia","Deseo","Calma"]);
  const emotionContexts = pairs(
    ["after a hard truth","before saying goodbye","with nowhere to go","after being underestimated","mixed with guilt","that feels unsafe","after a long silence","without an apology","while starting over","at the wrong time"],
    ["después de una verdad difícil","antes de decir adiós","sin ningún lugar adonde ir","después de que nadie creyera en ti","junto con culpa","que genera inseguridad","después de un largo silencio","sin una disculpa","mientras empiezas de nuevo","en el momento equivocado"]);
  fillPairedPool(data.emotion, crossPairs(emotions, emotionContexts, (a,b)=>`${a} ${b}`, (a,b)=>`${a} ${b}`));

  data.setting.length = 0;
  const places = pairs(
    ["A kitchen table","A parked car","A childhood bedroom","A grocery store aisle","A train platform","An apartment hallway","A family party","A workplace after hours","An airport gate","An old neighborhood"],
    ["Una mesa de cocina","Un auto estacionado","El dormitorio de tu infancia","El pasillo de un supermercado","Un andén de tren","El pasillo de un edificio","Una fiesta familiar","El trabajo fuera de horario","Una puerta de embarque","Un viejo vecindario"]);
  const conditions = pairs(
    ["after an argument","while waiting for a call","the day before moving away","after finding an old message","when someone finally tells the truth","while avoiding a difficult conversation","after seeing someone from the past","during a conversation that changes everything","while pretending everything is normal","after deciding not to go back"],
    ["después de una discusión","mientras esperas una llamada","el día antes de mudarte","después de encontrar un mensaje viejo","cuando alguien por fin dice la verdad","mientras evitas una conversación difícil","después de ver a alguien del pasado","durante una conversación que lo cambia todo","mientras finges que todo está bien","después de decidir no volver"]);
  fillPairedPool(data.setting, crossPairs(places, conditions, (a,b)=>`${a} ${b}`, (a,b)=>`${a} ${b}`));

  data.perspective.length = 0;
  const narrators = pairs(
    ["Your future self","Your younger self","The person who left","The person who stayed","A parent who never apologized","A friend you outgrew","Someone starting over","Someone hiding how hurt they are","The person you became after the breakup","A sibling who remembers it differently"],
    ["Tu yo del futuro","Tu yo más joven","La persona que se fue","La persona que se quedó","Un padre o una madre que nunca se disculpó","Una amistad que quedó atrás","Alguien que empieza de nuevo","Alguien que oculta cuánto le duele","La persona en quien te convertiste después de la ruptura","Un hermano o una hermana que lo recuerda de otra manera"]);
  const narratorFrames = pairs(
    ["looking back five years later","finally saying what they avoided","writing a message they will never send","after seeing an old photo","on the day they decide to move on","trying to explain their side","admitting what they got wrong","speaking to one specific person","after an unexpected reunion","with nothing left to prove"],
    ["mirando atrás cinco años después","diciendo por fin lo que evitó","escribiendo un mensaje que nunca enviará","después de ver una foto vieja","el día que decide seguir adelante","intentando explicar su versión","admitiendo en qué se equivocó","hablándole a una sola persona","después de un reencuentro inesperado","sin nada que demostrar"]);
  fillPairedPool(data.perspective, crossPairs(narrators, narratorFrames, (a,b)=>`${a}, ${b}`, (a,b)=>`${a}, ${b}`));

  const ruleSubjects = pairs(
    ["Every verse","Every chorus","Each section","Every second line","The bridge","The pre-chorus","The final chorus","Each four-line block","Every repeated phrase","The final line"],
    ["Cada verso","Cada coro","Cada sección","Cada segunda línea","El puente","El pre-coro","El coro final","Cada bloque de cuatro líneas","Cada frase repetida","La última línea"]);
  const ruleActions = pairs(
    ["must contain a question","must include a number","must avoid first-person pronouns","must use seven syllables or fewer","must repeat one exact phrase","must describe something visible","must change one key word","must use internal rhyme","must contradict the section before it","must end with the title"],
    ["debe contener una pregunta","debe incluir un número","debe evitar pronombres en primera persona","debe usar siete sílabas o menos","debe repetir una frase exacta","debe describir algo visible","debe cambiar una palabra clave","debe usar rima interna","debe contradecir la sección anterior","debe terminar con el título"]);
  fillPairedPool(data.constraint, crossPairs(ruleSubjects, ruleActions, (a,b)=>`${a} ${b}.`, (a,b)=>`${a} ${b}.`));

  const palettes = pairs(
    ["Green neon","Deep red","Cold blue","Silver chrome","Faded orange","Ultraviolet","Black and white","Soft lavender","Amber streetlight","Electric pink"],
    ["Neón verde","Rojo profundo","Azul frío","Cromo plateado","Naranja desteñido","Ultravioleta","Blanco y negro","Lavanda suave","Luz ámbar","Rosa eléctrico"]);
  const treatments = pairs(
    ["heavy rain and film grain","hard flash and deep shadows","empty highway and soft focus","fogged glass and analog noise","dust and Super 8 film","mirrors and wet pavement","one bright object and still frames","storm shadows and Polaroid blur","snow and scratched 35mm film","desert wind and VHS tracking"],
    ["lluvia fuerte y grano de película","flash duro y sombras profundas","carretera vacía y enfoque suave","vidrio empañado y ruido analógico","polvo y película Super 8","espejos y asfalto mojado","un objeto brillante y planos fijos","sombras de tormenta y Polaroid borrosa","nieve y película de 35 mm rayada","viento del desierto y tracking VHS"]);
  fillPairedPool(data.mood, crossPairs(palettes, treatments, (a,b)=>`${a}, ${b}`, (a,b)=>`${a}, ${b}`));

  const leads = pairs(
    ["Electric piano","Nylon guitar","Detuned synth","Rhodes","Muted trumpet","Baritone guitar","Upright piano","Accordion","Marimba","Organ"],
    ["Piano eléctrico","Guitarra de nylon","Sintetizador desafinado","Rhodes","Trompeta con sordina","Guitarra barítona","Piano vertical","Acordeón","Marimba","Órgano"]);
  const textures = pairs(
    ["808 bass and soft guitar","sub bass and distant choir","handclaps and cello","brushed drums and vocal chops","tape hiss and floor tom","analog bass and glass percussion","breakbeat and reverse strings","electronic kick and vinyl crackle","distorted bass and whispered doubles","tambourine and tremolo guitar"],
    ["bajo 808 y guitarra suave","sub-bajo y coro lejano","palmas y violonchelo","batería con escobillas y cortes vocales","ruido de cinta y tom de piso","bajo analógico y percusión de vidrio","breakbeat y cuerdas al revés","bombo electrónico y crujido de vinilo","bajo distorsionado y voces susurradas dobles","pandereta y guitarra con trémolo"]);
  fillPairedPool(data.additional, crossPairs(leads, textures, (a,b)=>`${a}, ${b}`, (a,b)=>`${a}, ${b}`));

  data.twist.length = 0;
  const twistSources = pairs(
    ["The final line reveals that","The bridge makes it clear that","In the second verse, we learn that","The last chorus admits that","A background vocal reveals that","The title finally means that","By the end, it becomes clear that","The narrator finally accepts that","The opening memory is reframed when we learn that","The final image shows that"],
    ["La última línea revela que","El puente deja claro que","En el segundo verso descubrimos que","El último coro admite que","Una voz de fondo revela que","El título finalmente significa que","Al final queda claro que","Quien narra por fin acepta que","El recuerdo inicial cambia cuando descubrimos que","La imagen final muestra que"]);
  const twistResults = pairs(
    ["they were asking for forgiveness, not another chance","the person they blamed was trying to protect them","the goodbye happened years ago and they are only now accepting it","they are singing to a parent they never got to know","the relationship ended because both people were afraid to be honest","the promise in the chorus was never meant to be kept","the memory was happier than the relationship itself","they became the person they once resented","the person they miss is their former self","the apology arrived after the other person had moved on"],
    ["pedía perdón, no otra oportunidad","la persona a quien culpaba intentaba protegerle","la despedida ocurrió hace años y apenas ahora la acepta","le canta a un padre o una madre que nunca llegó a conocer","la relación terminó porque ambos tenían miedo de ser honestos","la promesa del coro nunca iba a cumplirse","el recuerdo era más feliz que la relación","se convirtió en la persona que antes le causaba resentimiento","la persona que extraña es quien era antes","la disculpa llegó cuando la otra persona ya había seguido adelante"]);
  fillPairedPool(data.twist, crossPairs(twistSources, twistResults, (a,b)=>`${a} ${b}.`, (a,b)=>`${a} ${b}.`));

  data.tempo = Array.from({length:100}, (_,index) => 55 + index);
  const extraWords = pairs(
    "Anchor|Balcony|Candle|Diamond|Envelope|Feather|Garden|Highway|Island|Jacket|Knife|Lighthouse|Magnet|Newspaper|Orange|Photograph|Queen|River|Shadow|Ticket|Uniform|Violin|Wallpaper|Yacht|Zero|Bedroom|Camera|Dust|Engine|Fountain|Glass|Heartbeat|Ink|Jungle|Kerosene|Letter|Motorcycle|Needle|Overpass|Piano|Ring|Staircase|Tattoo|Underpass|Voice|Watch|Alley|Bottle|Coin|Doorway|Echo|Flag|Glove|Ice|Jewelry|Kitchen|Lock|Mask|Notebook|Pillow".split("|"),
    "Ancla|Balcón|Vela|Diamante|Sobre|Pluma|Jardín|Carretera|Isla|Chaqueta|Cuchillo|Faro|Imán|Periódico|Naranja|Fotografía|Reina|Río|Sombra|Boleto|Uniforme|Violín|Papel tapiz|Yate|Cero|Dormitorio|Cámara|Polvo|Motor|Fuente|Vidrio|Latido|Tinta|Jungla|Queroseno|Carta|Motocicleta|Aguja|Paso elevado|Piano|Anillo|Escalera|Tatuaje|Paso subterráneo|Voz|Reloj|Callejón|Botella|Moneda|Umbral|Eco|Bandera|Guante|Hielo|Joya|Cocina|Candado|Máscara|Cuaderno|Almohada".split("|"));
  const seenWords = new Set(data.wordPools.en);
  extraWords.forEach(word => { if (!seenWords.has(word.en)) { data.wordPools.en.push(word.en); data.wordPools.es.push(word.es); seenWords.add(word.en); } });

  toolsData.lyric.length = 0;
  const standaloneOpeningLines = pairs(
    [
      "Some nights I wonder if leaving was brave or simply easier.",
      "On the drive home, I finally understood why you stopped trying.",
      "Every time my phone lights up, a small part of me expects your name.",
      "Whenever it rains, I remember the conversation we never finished.",
      "Since we stopped talking, I have learned how loud a quiet room can be.",
      "At family dinners, your empty seat still changes the conversation.",
      "When I pass our old street, I slow down without meaning to.",
      "On the days I feel okay, I almost feel guilty for moving on.",
      "Before I fall asleep, I rewrite the goodbye I should have given you.",
      "Now that enough time has passed, I can admit we were both afraid.",
      "My mother still asks about you, and I still change the subject.",
      "I deleted your number, but my hands still remember it.",
      "The hardest part was learning that love could be real and still not work.",
      "We became strangers so slowly that neither of us noticed.",
      "I knew it was over when the truth felt easier than another excuse.",
      "Nobody tells you how ordinary the morning after a heartbreak looks.",
      "I keep defending you to people who already stopped asking.",
      "You apologized for leaving, but never for making me wait.",
      "I miss the friendship more than I miss the way you held me.",
      "The house got quieter when you left, but my mind did not.",
      "I thought closure would feel like peace, not another unanswered question.",
      "Your birthday passed, and I practiced not reaching out.",
      "We said forever because neither of us knew what change would cost.",
      "I learned loneliness can sit beside you and still hold your hand.",
      "The last thing you said makes more sense now than it did then.",
      "I still check the door twice, as if you might come back the second time.",
      "We were honest only after honesty could no longer save us.",
      "I forgive who you were, but I am still healing from who I became.",
      "The photo makes us look happier than I remember being.",
      "I stayed too long because starting over felt like another kind of loss.",
      "You left with the confidence of someone who had already said goodbye alone.",
      "My father taught me how to leave before anyone could leave me.",
      "I wish I had told the truth before silence became our habit.",
      "The first morning without you was painfully normal.",
      "We loved each other well, just not at the same time.",
      "I stopped waiting for your apology and started listening to my own anger.",
      "The argument ended, but I kept answering you for months.",
      "I became good at pretending the memory no longer hurt.",
      "Sometimes healing looks less like forgiveness and more like distance.",
      "I know now that being chosen should never feel like an audition.",
      "The empty chair across from me knows everything I did not say.",
      "I heard our song in a grocery store and forgot what I came to buy.",
      "I kept your secret so long that it started to feel like mine.",
      "We both knew the answer, but neither of us wanted to ask the question.",
      "I wanted an apology until I realized it would not return the years.",
      "Your silence taught me the difference between patience and self-abandonment.",
      "I packed my life into boxes and left one memory in every room.",
      "The cruelest part was how kind you were on the day you left.",
      "I met someone good and had to unlearn what you called love.",
      "We outgrew each other before we found the courage to say it.",
      "I can finally say your name without turning it into a question.",
      "The night before moving, every room asked me to stay.",
      "My sister remembers our childhood as happier than I do.",
      "I mistook being needed for being loved.",
      "You were not the villain, but you still hurt me.",
      "I still owe myself the apology I kept asking from you.",
      "We spent years avoiding the one conversation that could have freed us.",
      "I wonder whether you miss me or only miss being understood.",
      "The kitchen light was on when we decided to stop pretending.",
      "I left my keys on the table and took every unsaid word with me.",
      "My friends stopped mentioning you before I stopped hoping they would.",
      "The truth was not dramatic; it was simply impossible to ignore.",
      "I changed the subject every time someone asked if I was happy.",
      "You called too late, and I answered too quickly.",
      "I miss the person I was before loving you became work.",
      "I used to think staying meant I had not given up.",
      "The apology sounded sincere, but it arrived after I had healed.",
      "We survived the worst year of our lives and still lost each other.",
      "I saw your mother downtown and almost asked how you were.",
      "I have become someone the old me would not recognize.",
      "The distance did not break us; it showed us what was already broken.",
      "Our last conversation keeps changing every time I remember it.",
      "I wanted you to fight for us, but I never told you I was leaving.",
      "The day I stopped checking on you was the day I started returning to myself.",
      "We made plans for a future neither of us was becoming.",
      "I carried the anger longer than I carried the relationship.",
      "Your name came up, and for once I did not need to leave the room.",
      "I finally opened the message I had been afraid to read.",
      "I was so busy being strong that I forgot to be honest.",
      "The breakup ended in one night; the letting go took years.",
      "I remember the exact moment I stopped feeling safe with you.",
      "We kept the peace by never saying what we needed.",
      "I am learning that missing someone is not a reason to return.",
      "You loved the version of me that asked for the least.",
      "The first lie was small enough to fit inside a promise.",
      "I stayed because hope can sound a lot like fear.",
      "I hope you found the life you could not build beside me.",
      "We were both trying, just in directions that led us apart.",
      "The room looked the same after you left, and that felt unfair.",
      "I do not miss us; I miss believing we would be okay.",
      "No one warned me that relief could arrive dressed as grief.",
      "I kept one message to remember why I could not go back.",
      "The real goodbye happened weeks before either of us said it.",
      "I confused familiarity with a future.",
      "We promised to stay friends because the ending felt too final.",
      "I no longer rehearse what I would say if you returned.",
      "I saw an old photo and felt tenderness instead of pain.",
      "The person I blamed for leaving was the one who taught me to choose myself.",
      "If I called tonight, I know exactly which silence would answer.",
      "I think growing up is learning which doors deserve to stay closed."
    ],
    [
      "Algunas noches me pregunto si irme fue valiente o simplemente más fácil.",
      "De camino a casa, por fin entendí por qué dejaste de intentarlo.",
      "Cada vez que se enciende mi teléfono, una parte de mí espera ver tu nombre.",
      "Siempre que llueve, recuerdo la conversación que nunca terminamos.",
      "Desde que dejamos de hablar, aprendí cuánto ruido puede hacer una habitación en silencio.",
      "En las cenas familiares, tu silla vacía todavía cambia la conversación.",
      "Cuando paso por nuestra vieja calle, bajo la velocidad sin darme cuenta.",
      "En los días en que me siento bien, casi me da culpa seguir adelante.",
      "Antes de dormir, reescribo la despedida que debí darte.",
      "Ahora que ha pasado suficiente tiempo, puedo admitir que ambos teníamos miedo.",
      "Mi madre todavía pregunta por ti y yo todavía cambio de tema.",
      "Borré tu número, pero mis manos todavía lo recuerdan.",
      "Lo más difícil fue aprender que el amor puede ser real y aun así no funcionar.",
      "Nos convertimos en extraños tan lentamente que ninguno lo notó.",
      "Supe que había terminado cuando la verdad se sintió más fácil que otra excusa.",
      "Nadie te cuenta lo normal que parece la mañana después de que te rompen el corazón.",
      "Sigo defendiéndote frente a personas que ya dejaron de preguntar.",
      "Te disculpaste por irte, pero nunca por hacerme esperar.",
      "Extraño más nuestra amistad que la forma en que me abrazabas.",
      "La casa quedó más silenciosa cuando te fuiste, pero mi mente no.",
      "Pensé que cerrar esa etapa se sentiría como paz, no como otra pregunta sin respuesta.",
      "Pasó tu cumpleaños y practiqué no buscarte.",
      "Dijimos para siempre porque ninguno sabía cuánto costaría cambiar.",
      "Aprendí que la soledad puede sentarse a tu lado y aun así tomarte de la mano.",
      "Lo último que dijiste tiene más sentido ahora que entonces.",
      "Todavía reviso la puerta dos veces, como si pudieras volver en la segunda.",
      "Solo fuimos honestos cuando la honestidad ya no podía salvarnos.",
      "Perdono quien fuiste, pero todavía sano de la persona en que me convertí.",
      "En la foto parecemos más felices de lo que recuerdo haber sido.",
      "Me quedé demasiado porque empezar de nuevo parecía otra forma de perder.",
      "Te fuiste con la seguridad de alguien que ya se había despedido a solas.",
      "Mi padre me enseñó a irme antes de que alguien pudiera dejarme.",
      "Ojalá hubiera dicho la verdad antes de que el silencio se volviera costumbre.",
      "La primera mañana sin ti fue dolorosamente normal.",
      "Nos amamos bien, pero no al mismo tiempo.",
      "Dejé de esperar tu disculpa y empecé a escuchar mi propio enojo.",
      "La discusión terminó, pero seguí respondiéndote durante meses.",
      "Aprendí a fingir que el recuerdo ya no dolía.",
      "A veces sanar se parece menos al perdón y más a la distancia.",
      "Ahora sé que ser elegido nunca debería sentirse como una audición.",
      "La silla vacía frente a mí sabe todo lo que no dije.",
      "Escuché nuestra canción en un supermercado y olvidé qué iba a comprar.",
      "Guardé tu secreto tanto tiempo que empezó a sentirse como mío.",
      "Ambos sabíamos la respuesta, pero ninguno quería hacer la pregunta.",
      "Quise una disculpa hasta que entendí que no devolvería los años.",
      "Tu silencio me enseñó la diferencia entre paciencia y abandonarme a mí mismo.",
      "Guardé mi vida en cajas y dejé un recuerdo en cada habitación.",
      "Lo más cruel fue lo amable que fuiste el día que te marchaste.",
      "Conocí a alguien bueno y tuve que desaprender lo que tú llamabas amor.",
      "Nos superamos antes de encontrar el valor para decirlo.",
      "Por fin puedo decir tu nombre sin convertirlo en una pregunta.",
      "La noche antes de mudarme, cada habitación me pidió que me quedara.",
      "Mi hermana recuerda nuestra infancia más feliz que yo.",
      "Confundí que me necesitaran con que me amaran.",
      "No eras el villano, pero aun así me hiciste daño.",
      "Todavía me debo la disculpa que seguía pidiéndote.",
      "Pasamos años evitando la única conversación que podía liberarnos.",
      "Me pregunto si me extrañas o si solo extrañas sentirte comprendido.",
      "La luz de la cocina estaba encendida cuando decidimos dejar de fingir.",
      "Dejé mis llaves sobre la mesa y me llevé cada palabra que no dijimos.",
      "Mis amistades dejaron de mencionarte antes de que yo dejara de esperarlo.",
      "La verdad no fue dramática; simplemente era imposible ignorarla.",
      "Cambiaba de tema cada vez que alguien preguntaba si era feliz.",
      "Llamaste demasiado tarde y respondí demasiado rápido.",
      "Extraño la persona que era antes de que amarte se volviera un trabajo.",
      "Antes creía que quedarme significaba que no me había rendido.",
      "La disculpa sonó sincera, pero llegó después de que había sanado.",
      "Sobrevivimos el peor año de nuestras vidas y aun así nos perdimos.",
      "Vi a tu madre en el centro y casi le pregunté cómo estabas.",
      "Me convertí en alguien que mi antiguo yo no reconocería.",
      "La distancia no nos rompió; nos mostró lo que ya estaba roto.",
      "Nuestra última conversación cambia cada vez que la recuerdo.",
      "Quería que lucharas por nosotros, pero nunca te dije que me iba.",
      "El día que dejé de buscarte fue el día que empecé a volver a mí.",
      "Hicimos planes para un futuro en el que ninguno se estaba convirtiendo.",
      "Cargué con el enojo más tiempo que con la relación.",
      "Mencionaron tu nombre y, por primera vez, no tuve que salir del lugar.",
      "Por fin abrí el mensaje que me daba miedo leer.",
      "Estaba tan ocupado tratando de ser fuerte que olvidé ser honesto.",
      "La ruptura terminó en una noche; soltar tomó años.",
      "Recuerdo el momento exacto en que dejé de sentirme a salvo contigo.",
      "Mantuvimos la paz sin decir nunca lo que necesitábamos.",
      "Estoy aprendiendo que extrañar a alguien no es una razón para volver.",
      "Amabas la versión de mí que pedía menos.",
      "La primera mentira era lo bastante pequeña para caber dentro de una promesa.",
      "Me quedé porque la esperanza puede sonar demasiado parecida al miedo.",
      "Espero que hayas encontrado la vida que no pudiste construir a mi lado.",
      "Ambos lo intentábamos, pero en direcciones que nos separaban.",
      "La habitación se veía igual después de que te fuiste, y eso parecía injusto.",
      "No extraño lo nuestro; extraño creer que íbamos a estar bien.",
      "Nadie me advirtió que el alivio podía llegar vestido de duelo.",
      "Guardé un mensaje para recordar por qué no podía volver.",
      "La verdadera despedida ocurrió semanas antes de que la dijéramos.",
      "Confundí lo conocido con un futuro.",
      "Prometimos seguir siendo amigos porque el final se sentía demasiado definitivo.",
      "Ya no ensayo lo que diría si volvieras.",
      "Vi una foto vieja y sentí ternura en lugar de dolor.",
      "La persona a quien culpé por irse fue quien me enseñó a elegirme.",
      "Si llamara esta noche, sé exactamente qué silencio respondería.",
      "Creo que crecer es aprender qué puertas merecen permanecer cerradas."
    ]
  );
  fillPairedPool(toolsData.lyric, standaloneOpeningLines);

  const melodyShapes = pairs(
    ["Start with a three-note rising motif","Build the verse around one repeated pitch","Make every phrase fall except the title","Begin each line one note higher","Hold the first note across the chord change","Write the hook in descending thirds","Delay the first word until beat two","Use a wide leap only once","End every phrase on an unresolved note","Echo each final word an octave higher"],
    ["Empieza con un motivo ascendente de tres notas","Construye el verso alrededor de una nota repetida","Haz que cada frase baje excepto el título","Empieza cada línea una nota más arriba","Sostén la primera nota durante el cambio de acorde","Escribe el hook en terceras descendentes","Retrasa la primera palabra hasta el segundo pulso","Usa un salto amplio una sola vez","Termina cada frase en una nota sin resolver","Repite cada palabra final una octava más arriba"]);
  const melodyRhythms = pairs(
    ["keep the rhythm syncopated","use long notes in the chorus","answer it with short phrases","leave beat one empty","repeat the rhythm three times","switch to half-time in the hook","use one breath per line","place the title before the downbeat","double the rhythm in the final chorus","end with a full bar of silence"],
    ["mantén el ritmo sincopado","usa notas largas en el coro","respóndelo con frases cortas","deja vacío el primer pulso","repite el ritmo tres veces","cambia a medio tiempo en el hook","usa una respiración por línea","coloca el título antes del tiempo fuerte","duplica el ritmo en el coro final","termina con un compás completo de silencio"]);
  fillPairedPool(toolsData.melody, crossPairs(melodyShapes, melodyRhythms, (a,b)=>`${a}; ${b}.`, (a,b)=>`${a}; ${b}.`));

  const structureStarts = pairs(
    ["Cold Open","Instrumental Intro","Voice Note Intro","Hook","Verse","A Cappella Intro","Percussion Intro","Sample Intro","Piano Intro","Ambient Intro"],
    ["Entrada en frío","Intro instrumental","Intro de nota de voz","Hook","Verso","Intro a capela","Intro de percusión","Intro con sample","Intro de piano","Intro ambiental"]);
  const structureRoutes = pairs(
    ["Verse — Pre — Chorus — Verse — Bridge — Final Chorus","Hook — Verse — Hook — Bridge — Hook — Outro","Verse — Chorus — Post — Verse — Chorus — Coda","Verse — Lift — Drop — Verse — Breakdown — Final Drop","Verse — Refrain — Verse — Refrain — Instrumental Outro","Chorus — Verse — Chorus — Bridge — Double Chorus","Verse — Pre — Hook — Beat Switch — Verse — Final Hook","Verse A — Verse B — Refrain — Bridge — Refrain","Verse — Chorus — False Ending — Bridge — Chorus","Hook — Verse — Dance Break — Bridge — Triple Hook"],
    ["Verso — Pre-coro — Coro — Verso — Puente — Coro final","Hook — Verso — Hook — Puente — Hook — Outro","Verso — Coro — Post — Verso — Coro — Coda","Verso — Subida — Drop — Verso — Breakdown — Drop final","Verso — Estribillo — Verso — Estribillo — Outro instrumental","Coro — Verso — Coro — Puente — Coro doble","Verso — Pre-coro — Hook — Cambio de beat — Verso — Hook final","Verso A — Verso B — Estribillo — Puente — Estribillo","Verso — Coro — Falso final — Puente — Coro","Hook — Verso — Break de baile — Puente — Hook triple"]);
  fillPairedPool(toolsData.structure, crossPairs(structureStarts, structureRoutes, (a,b)=>`${a} — ${b}`, (a,b)=>`${a} — ${b}`));

  const notes = ["C","D♭","D","E♭","E","F","F♯","G","A♭","A","B♭","B"];
  const chordPatterns = [
    [[0,"maj7"],[9,"m7"],[2,"m9"],[7,"13"]], [[0,"m9"],[5,"maj7"],[8,"maj7"],[7,"7"]],
    [[0,"m7"],[3,"maj7"],[10,"maj7"],[5,"9"]], [[0,"maj9"],[4,"m7"],[9,"m7"],[2,"13"]],
    [[0,"m"],[10,"maj7"],[3,"maj7"],[7,"sus4"]], [[0,"maj7"],[7,"6"],[9,"m9"],[5,"maj7"]],
    [[0,"m9"],[2,"m7♭5"],[7,"7alt"],[0,"m9"]], [[0,"6"],[5,"maj7"],[2,"m7"],[10,"maj7"]],
    [[0,"m7"],[8,"maj7"],[5,"m9"],[7,"7"]], [[0,"maj9"],[11,"m7♭5"],[4,"7"],[9,"m9"]]
  ];
  const generatedChords = notes.flatMap((_,root) => chordPatterns.map(pattern => pattern.map(([offset,suffix]) => `${notes[(root+offset)%12]}${suffix}`).join(" — ")));
  fillStringPool(toolsData.chords, generatedChords);
}

expandLibraries();

const rhymeFamily = (perfect, close, phonetic) => ({
  perfect:perfect.split("|"), close:close.split("|"), phonetic:phonetic.split("|")
});

// A compact offline rhyme bank. Categories follow the familiar exact / near / similar-sound model,
// but all groupings below are original to this project and tuned for songwriting vocabulary.
const rhymeFamilies = {
  en: [
    rhymeFamily("light|night|bright|flight|sight|right|tight|write", "life|shine|eyes|rise|time|mind|alive", "late|laid|line|like|lit|lighter|lightning"),
    rhymeFamily("day|say|way|stay|play|gray|away|delay", "face|made|rain|change|late|safe|awake", "they|date|shade|stage|save|same|fade"),
    rhymeFamily("rain|pain|chain|train|gain|lane|main|remain", "name|change|again|dream|time|flame|home", "reign|rein|range|ran|ring|runway|rainy"),
    rhymeFamily("love|above|dove|glove|shove", "enough|rough|touch|young|blood|come|one", "live|leave|lovely|lover|loved|loaf|laugh"),
    rhymeFamily("heart|start|part|art|chart|smart|apart|depart", "hard|dark|scar|spark|arms|stars|far", "hurt|heard|heat|hearty|harder|earth|hour"),
    rhymeFamily("fire|higher|wire|desire|choir|inspire|entire|acquire", "tired|wild|life|rise|night|alive|liar", "fear|fair|far|flare|fiery|fighter|final"),
    rhymeFamily("time|rhyme|climb|chime|prime|crime|sublime|lifetime", "mind|life|eyes|light|night|inside|goodbye", "tame|team|timer|tiny|tide|timing|timeline"),
    rhymeFamily("home|roam|chrome|dome|foam|comb|loam|gnome", "alone|known|stone|phone|road|slow|ghost", "hope|hum|hometown|homeless|homely|room|name"),
    rhymeFamily("moon|soon|noon|tune|June|spoon|balloon|cartoon", "room|bloom|blue|you|wound|move|through", "moan|main|mine|mood|morning|lunar|month"),
    rhymeFamily("blue|you|true|through|new|due|view|crew", "room|moon|move|loose|truth|youth|too", "blow|below|glue|clue|blur|bloom|blew"),
    rhymeFamily("name|same|flame|game|frame|blame|shame|claim", "rain|change|day|face|again|time|remain", "numb|named|naming|nominee|aim|nameplate|nameless"),
    rhymeFamily("gone|dawn|on|drawn|lawn|spawn|yawn|fawn", "wrong|long|alone|down|home|known|song", "gun|gain|going|cone|gown|again|begin"),
    rhymeFamily("soul|whole|role|goal|coal|bowl|control|patrol", "gold|home|alone|low|road|old|hope", "sole|sale|seal|soil|soulful|solar|solid"),
    rhymeFamily("dream|seem|stream|beam|scream|scheme|team|theme", "green|between|machine|believe|sleep|free|memory", "drum|drown|dreamer|dreaming|dim|drama|drawn"),
    rhymeFamily("air|care|dare|fair|hair|pair|share|stare", "heart|hard|there|wear|prayer|fear|near", "heir|ear|are|airy|arrow|error|area"),
    rhymeFamily("sound|ground|found|round|bound|hound|pound|around", "down|town|gone|song|storm|home|alone", "sand|sent|sing|soundly|surround|sudden|silent"),
    rhymeFamily("cold|told|hold|fold|gold|old|bold|sold", "road|home|soul|slow|world|alone|below", "called|curled|could|coat|code|cooled|color"),
    rhymeFamily("face|grace|place|space|trace|case|base|embrace", "fade|safe|change|day|late|rain|name", "phase|fast|feast|voice|fierce|facing|faces"),
    rhymeFamily("deep|keep|sleep|cheap|weep|steep|sweep|creep", "dream|free|leave|need|believe|beneath|peace", "dip|drip|drop|deeper|depth|tip|leap"),
    rhymeFamily("mind|find|kind|blind|grind|behind|remind|signed", "time|night|life|inside|light|eyes|mine", "mined|mend|meant|mood|mindless|winding|memory"),
    rhymeFamily("life|wife|knife|strife|afterlife|wildlife|nightlife", "light|night|time|mind|eyes|alive|goodbye", "live|leaf|leave|laugh|love|lifelong|lifeline"),
    rhymeFamily("eyes|rise|lies|skies|cries|tries|surprise|disguise", "life|light|night|time|mind|inside|goodbye", "ice|eye|gaze|is|ease|sight|eyelids"),
    rhymeFamily("alone|known|phone|stone|grown|shown|tone|bone", "home|roam|gone|dawn|long|road|slow", "a loan|lonely|only|along|unknown|on|one"),
    rhymeFamily("truth|youth|booth|tooth|sleuth|uncouth", "you|blue|through|move|lose|room|proof", "truce|true|trust|truly|roots|ruthless|truthful"),
    rhymeFamily("world|curled|hurled|twirled|swirled|unfurled", "girl|word|heard|burned|turn|learn|yearn", "whirl|wild|worried|worldly|wound|wall|old"),
    rhymeFamily("orange", "door hinge|four-inch|storage|porridge|forest|chorus|morning", "arrange|range|change|foreign|origin|urgent|orchard")
  ],
  es: [
    rhymeFamily("amor|dolor|calor|color|temor|rumor|ardor|alrededor", "sol|voz|adiós|corazón|mejor|pasión|interior", "amar|amé|amargo|amigo|humor|enamorar|memoria"),
    rhymeFamily("corazón|canción|razón|perdón|pasión|ilusión|decisión|habitación", "amor|voz|reloj|sol|mejor|adiós|control", "coraza|coraje|coro|acorde|correo|corona|caricia"),
    rhymeFamily("vida|herida|salida|perdida|medida|venida|encendida|compartida", "arriba|ceniza|caricia|amiga|día|todavía|despedida", "vidrio|visita|viva|vital|viaje|vacío|mirada"),
    rhymeFamily("luna|cuna|fortuna|ninguna|oportuna|aceituna|vacuna|laguna", "bruma|duda|ruta|lluvia|oscura|una|altura", "lona|lana|línea|lunar|lunes|luz|urna"),
    rhymeFamily("cielo|hielo|vuelo|suelo|consuelo|desvelo|anhelo|pañuelo", "miedo|invierno|lejos|tiempo|recuerdo|cuerpo|silencio", "celo|silo|sello|sierra|celos|cielito|cicatriz"),
    rhymeFamily("noche|coche|broche|reproche|derroche|trasnoche|medianoche|anoche", "nombre|norte|golpe|doce|hombre|rompe|entonces", "nudo|nube|nicho|ancho|ocho|nochebuena|nochecita"),
    rhymeFamily("tiempo|destiempo|contratiempo|pasatiempo", "viento|cuento|siento|lento|momento|intento|invierno", "templo|tiemblo|tiento|tengo|cuerpo|recuerdo|tienda"),
    rhymeFamily("fuego|juego|luego|ruego", "ciego|nuevo|miedo|cuerpo|lejos|beso|recuerdo", "foco|fuga|fue|fuera|figura|fuerza|freno"),
    rhymeFamily("mar|mirar|quedar|escapar|regresar|lugar|temblar|llorar", "final|señal|ciudad|verdad|atrás|jamás|igual", "mal|más|mamá|marea|margen|amar|mirada"),
    rhymeFamily("luz|cruz|andaluz|tragaluz|contraluz|avestruz", "azul|sur|club|virtud|quietud|tú|salud", "los|las|lupa|luna|lujo|lucir|luce"),
    rhymeFamily("piel|miel|fiel|carrusel|hotel|papel|pincel|nivel", "ayer|pared|beber|volver|caer|mujer|querer", "pie|bien|piedra|pierna|pieles|cielo|piano"),
    rhymeFamily("beso|peso|preso|regreso|exceso|proceso|acceso|suceso", "cuerpo|fuego|lejos|nuevo|recuerdo|miedo|tiempo", "vaso|paso|piso|belleza|besar|base|brisa"),
    rhymeFamily("camino|destino|divino|vecino|clandestino|fino|vino|peregrino", "conmigo|ritmo|mismo|sitio|frío|vacío|suspiro", "camina|cambio|camisa|cariño|comida|canino|cámara"),
    rhymeFamily("verdad|ciudad|soledad|libertad|mitad|realidad|claridad|amistad", "final|señal|igual|jamás|detrás|lugar|mar", "verde|virtud|variedad|verdadero|vereda|edad|herida"),
    rhymeFamily("voz|dos|adiós|feroz|veloz|atroz|arroz|portavoz", "sol|reloj|dolor|amor|mejor|control|corazón", "vos|vez|vas|vozarrón|vocal|vacío|vaso"),
    rhymeFamily("llave|calle|valle|detalle|falle|estalle|batalle|halle", "tarde|suave|grave|aire|nadie|baile|sangre", "llueve|lluvia|lleve|yate|cable|clase|clave"),
    rhymeFamily("tarde|alarde|cobarde|aguarde|resguarde|arde", "calle|nadie|aire|suave|grave|parte|arte", "torre|tierra|traje|tarea|latido|tal vez|detalle"),
    rhymeFamily("suave|grave|nave|clave|ave|lave|trabe", "calle|aire|tarde|nadie|baile|sangre|llave", "sabe|salve|suavecito|nuevo|sube|nube|sueño"),
    rhymeFamily("sombra|alfombra|asombra|nombra|renombra", "hombre|nombre|hambre|costumbre|noche|monte|donde", "sobra|son|sombrero|sombreado|asombro|compra|siembra"),
    rhymeFamily("frío|río|mío|vacío|desafío|confío|rocío|desvío", "ruido|brillo|camino|destino|suspiro|perdido|olvido", "filo|giro|freno|feria|faro|frase|futuro"),
    rhymeFamily("sueño|dueño|pequeño|diseño|empeño|leño|risueño|isleño", "cielo|tiempo|recuerdo|cuerpo|miedo|invierno|lejos", "sueno|sonar|seña|sonido|soñé|suelo|ensueño"),
    rhymeFamily("recuerdo|acuerdo|desacuerdo|concuerdo", "cuerpo|fuego|nuevo|luego|miedo|tiempo|invierno", "recordar|recado|regreso|resguardo|cuento|cuerda|memoria"),
    rhymeFamily("miedo", "cielo|hielo|tiempo|invierno|lejos|cuerpo|recuerdo", "medio|mido|miro|niego|pienso|muero|misterio"),
    rhymeFamily("querer|beber|volver|caer|renacer|conocer|perder|aprender", "piel|fiel|papel|pared|final|amor|ayer", "quererme|querido|quedé|quizás|quien|quedar|cuidar"),
    rhymeFamily("alma|calma|palma", "falta|casa|nada|mañana|lágrima|palabra|mirada", "arma|alta|alba|alarma|ama|al mar|amable"),
    rhymeFamily("olvido|vivido|perdido|sentido|herido|querido|dormido|partido", "camino|destino|conmigo|suspiro|frío|vacío|ruido", "olvidar|oído|alivio|ovillo|ola|vidrio|latido"),
    rhymeFamily("nada|mirada|parada|llegada|madrugada|callada|cansada|olvidada", "casa|alma|mañana|lágrima|palabra|calma|distancia", "nado|nadie|nena|nudo|nueva|nota|nunca")
  ]
};

const rhymeCorpus = Object.fromEntries(Object.entries(rhymeFamilies).map(([lang, families]) => [
  lang,
  [...new Set(families.flatMap(family => [...family.perfect, ...family.close, ...family.phonetic]))]
]));

let language = "en";
let currentMission = null;
const FAVORITES_KEY = "inspiration-machine-library-v1";
const GENERATION_HISTORY_KEY = "inspiration-machine-generation-history-v1";
const TOOL_HISTORY_KEY = "inspiration-machine-tool-history-v1";
const TWIST_HISTORY_KEY = "inspiration-machine-twist-history-v1";
let savedIdeas = loadSavedIdeas();
const generationHistory = loadGenerationHistory();
const toolHistory = loadToolHistory();
const twistHistory = loadTwistHistory();
let activeTool = null;

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const random = arr => arr[Math.floor(Math.random() * arr.length)];
const localized = item => item == null ? "" : typeof item === "string" ? item : item[language] || "";

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

function loadTwistHistory() {
  const used = new Set();
  try {
    const saved = JSON.parse(sessionStorage.getItem(TWIST_HISTORY_KEY) || "[]");
    if (Array.isArray(saved)) saved.forEach(index => used.add(index));
  } catch { /* Rebuild from generated missions below. */ }

  // Include twists generated before this dedicated history was introduced.
  for (const signature of generationHistory) {
    try {
      const mission = JSON.parse(signature);
      if (!mission.twist) continue;
      const twistSignature = JSON.stringify(mission.twist);
      const index = data.twist.findIndex(twist => JSON.stringify(twist) === twistSignature);
      if (index >= 0) used.add(index);
    } catch { /* Ignore malformed legacy entries. */ }
  }
  return used;
}

function rememberTwist(index) {
  twistHistory.add(index);
  try { sessionStorage.setItem(TWIST_HISTORY_KEY, JSON.stringify([...twistHistory])); } catch { /* In-memory history still prevents repeats. */ }
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

function buildMission(selected, twist) {
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
  mission.twist = twist;
  return mission;
}

function generateMission() {
  const challenge = $("#challengeMode").checked;
  const selected = new Set($$("[data-option]:checked").map(input => input.dataset.option));
  if (!selected.size && !challenge) { showToast(translations[language].noSelection); return; }
  if (challenge) optionDefs.forEach(option => selected.add(option.id));

  const availableTwists = data.twist.map((_,index) => index).filter(index => !twistHistory.has(index));
  let mission = null;
  let twistIndex = null;
  while (availableTwists.length) {
    const availableIndex = Math.floor(Math.random() * availableTwists.length);
    const candidateTwistIndex = availableTwists.splice(availableIndex, 1)[0];
    const candidate = buildMission(selected, data.twist[candidateTwistIndex]);
    if (!generationHistory.has(missionSignature(candidate))) {
      mission = candidate;
      twistIndex = candidateTwistIndex;
      break;
    }
  }
  if (!mission) { showToast(translations[language].twistExhausted); return; }
  rememberTwist(twistIndex);
  rememberGeneration(mission);
  currentMission = mission;

  const stage = $(".spark-stage");
  stage.classList.remove("generating");
  void stage.offsetWidth;
  stage.classList.add("generating");
  $("#sparkButton [data-i18n]").textContent = language === "en" ? "Generating…" : "Generando…";
  updateFavoriteButton();
  window.setTimeout(() => {
    try {
      renderMission(mission, true);
      $("#mission").scrollIntoView({behavior:"smooth",block:"start"});
    } catch (error) {
      console.error("Prompt generation failed", error);
      showToast(translations[language].generationError);
    } finally {
      $("#sparkButton [data-i18n]").textContent = translations[language].generateAgain;
      stage.classList.remove("generating");
    }
  }, 720);
}

function renderMission(mission, animate=true) {
  const order = ["genre","emotion","perspective","setting","words","constraint","mood","tempo","additional","twist"];
  const summary = $("#challengeSummary");
  summary.hidden = false;
  summary.innerHTML = `<span>✦ ${translations[language].challengeBrief}</span><p>${challengeSummary(mission)}</p>`;
  summary.classList.remove("reveal");
  if (animate) { void summary.offsetWidth; summary.classList.add("reveal"); }
  $("#missionGrid").innerHTML = order.filter(key => mission[key]).map((key,index) => {
    const [icon,color] = cardMeta[key];
    return `<article class="mission-card" style="--card-color:${color};--delay:${animate ? index*.07 : 0}s">
      <header><span>${icon}</span>${labels[language][key]}</header>
      <p>${localized(mission[key])}</p>
    </article>`;
  }).join("");
  updateFavoriteButton();
}

function lowerFirst(value) {
  return value ? value.charAt(0).toLocaleLowerCase(language === "es" ? "es" : "en") + value.slice(1) : "";
}

function challengeSummary(mission=currentMission) {
  if (!mission) return "";
  const genre = localized(mission.genre);
  const perspective = localized(mission.perspective);
  const emotion = localized(mission.emotion);
  const setting = localized(mission.setting);
  let summary;

  if (language === "es") {
    summary = genre ? `Escribe una canción de ${genre}` : "Escribe una canción";
    if (perspective) summary += ` desde la perspectiva de ${lowerFirst(perspective)}`;
    if (emotion) summary += `, con ${lowerFirst(emotion)}`;
    if (setting) summary += `, ambientada en ${lowerFirst(setting)}`;
    summary += ".";
    if (!genre && !perspective && !emotion && !setting && mission.constraint) summary += ` Cumple esta regla: ${localized(mission.constraint)}`;
    else if (!genre && !perspective && !emotion && !setting && mission.mood) summary += ` Usa esta dirección visual: ${localized(mission.mood)}.`;
  } else {
    summary = genre ? `Write ${/^[aeiou]/i.test(genre) ? "an" : "a"} ${genre} song` : "Write a song";
    if (perspective) summary += ` from the perspective of ${lowerFirst(perspective)}`;
    if (emotion) summary += `, driven by ${lowerFirst(emotion)}`;
    if (setting) summary += `, set around ${lowerFirst(setting)}`;
    summary += ".";
    if (!genre && !perspective && !emotion && !setting && mission.constraint) summary += ` Follow this rule: ${localized(mission.constraint)}`;
    else if (!genre && !perspective && !emotion && !setting && mission.mood) summary += ` Use this visual direction: ${localized(mission.mood)}.`;
  }
  return summary;
}

function missionText(mission=currentMission) {
  if (!mission) return "";
  return `${translations[language].challengeBrief}: ${challengeSummary(mission)}\n\n${Object.entries(mission).map(([key,value]) => `${labels[language][key]}: ${localized(value)}`).join("\n")}`;
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
  return word.toLocaleLowerCase(language === "es" ? "es" : "en")
    .replace(/ñ/g,"\u0000").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\u0000/g,"ñ").replace(/[^a-zñ]/g, "");
}

function endingScore(a, b) {
  let score = 0;
  for (let i=1; i<=Math.min(a.length,b.length); i++) {
    if (a.at(-i) !== b.at(-i)) break;
    score++;
  }
  return score;
}

function phoneticize(word) {
  let value = normalizeWord(word);
  if (language === "es") {
    return value
      .replace(/qu/g,"k").replace(/gu(?=[ei])/g,"g").replace(/ll/g,"y")
      .replace(/v/g,"b").replace(/z/g,"s").replace(/c(?=[ei])/g,"s")
      .replace(/c/g,"k").replace(/h/g,"").replace(/j/g,"x").replace(/g(?=[ei])/g,"x");
  }
  return value
    .replace(/^kn/,"n").replace(/^wr/,"r").replace(/ph/g,"f")
    .replace(/tion/g,"shun").replace(/ght/g,"t").replace(/gh/g,"")
    .replace(/c(?=[eiy])/g,"s").replace(/c/g,"k").replace(/q/g,"k").replace(/x/g,"ks");
}

function lastVowelSound(word) {
  const groups = normalizeWord(word).match(/[aeiouy]+/g);
  return groups?.at(-1) || "";
}

function uniqueRhymes(words, query, excluded=new Set()) {
  const seen = new Set(excluded);
  seen.add(normalizeWord(query));
  return words.filter(word => {
    const key = normalizeWord(word);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function rankedRhymes(query, scoreCandidate, minimum=1) {
  return rhymeCorpus[language]
    .map(word => ({word, score:scoreCandidate(word)}))
    .filter(item => normalizeWord(item.word) !== query && item.score >= minimum)
    .sort((a,b) => b.score-a.score || a.word.localeCompare(b.word, language))
    .map(item => item.word);
}

function findRhymes(word) {
  const key = normalizeWord(word);
  const family = rhymeFamilies[language].find(group => group.perfect.some(candidate => normalizeWord(candidate) === key));

  if (family) {
    const perfect = uniqueRhymes(family.perfect, key).slice(0,12);
    const perfectKeys = new Set(perfect.map(normalizeWord));
    const close = uniqueRhymes(family.close, key, perfectKeys).slice(0,12);
    const usedKeys = new Set([...perfectKeys, ...close.map(normalizeWord)]);
    const phonetic = uniqueRhymes(family.phonetic, key, usedKeys).slice(0,12);
    return {perfect, close, phonetic};
  }

  const perfect = [];
  const perfectKeys = new Set(perfect.map(normalizeWord));
  const vowel = lastVowelSound(key);
  const close = uniqueRhymes(rankedRhymes(key, candidate => {
    const candidateKey = normalizeWord(candidate);
    const suffix = endingScore(key,candidateKey);
    if (suffix < 2) return 0;
    return suffix*2 + (vowel && lastVowelSound(candidateKey) === vowel ? 2 : 0) + (Math.abs(key.length-candidateKey.length) <= 2 ? 1 : 0);
  }, 5), key, perfectKeys).slice(0,12);
  const usedKeys = new Set([...perfectKeys, ...close.map(normalizeWord)]);
  const soundKey = phoneticize(key);
  const phonetic = uniqueRhymes(rankedRhymes(key, candidate => {
    const candidateSound = phoneticize(candidate);
    const suffix = endingScore(soundKey,candidateSound);
    const sameStart = soundKey[0] === candidateSound[0];
    if (suffix < 2 && !sameStart) return 0;
    return suffix*2 + (sameStart ? 2 : 0) + (Math.abs(soundKey.length-candidateSound.length) <= 2 ? 1 : 0);
  }, 4), key, usedKeys).slice(0,12);
  return {perfect, close, phonetic};
}

function showRhymes(word) {
  const results = findRhymes(word);
  const groups = [
    {id:"perfect", label:translations[language].perfectRhymes, hint:translations[language].perfectHint, results:results.perfect},
    {id:"close", label:translations[language].closeRhymes, hint:translations[language].closeHint, results:results.close},
    {id:"phonetic", label:translations[language].phoneticRhymes, hint:translations[language].phoneticHint, results:results.phonetic}
  ];
  const total = groups.reduce((sum,group) => sum+group.results.length,0);
  $("#rhymeResults").innerHTML = total
    ? `<small class="rhyme-note">${translations[language].rhymeResults}</small><div class="rhyme-groups">${groups.map((group,groupIndex) => `
      <section class="rhyme-group rhyme-group--${group.id}">
        <div class="rhyme-group-title"><strong>${group.label}</strong><small>${group.hint}</small></div>
        <div class="rhyme-chip-list">${group.results.length ? group.results.map((result,index) => `<button class="rhyme-chip" type="button" style="--chip-delay:${(groupIndex*4+index)*.025}s" title="${language === "es" ? "Copiar" : "Copy"}">${result}</button>`).join("") : `<span class="rhyme-empty">—</span>`}</div>
      </section>`).join("")}</div>`
    : `<p class="rhyme-no-match">${translations[language].rhymeNoMatches}</p>`;
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

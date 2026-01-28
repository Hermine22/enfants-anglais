// Base de données des 13 audios disponibles
const audioData = [
    // Audio 01
    {
        id: 1,
        number: "Audio 01",
        title: "L'alphabet chanté",
        category: "partie1",
        categoryName: "Premiers Pas",
        icon: "🎵",
        duration: "2:30",
        advice: "Écoutez cet audio en boucle 5 minutes par jour. Encouragez votre enfant à chanter avec la voix !",
        audioFile: "audios/audio01.mp3"
    },
    // Audio 03
    {
        id: 3,
        number: "Audio 03",
        title: "Les salutations",
        category: "partie1",
        categoryName: "Premiers Pas",
        icon: "👋",
        duration: "2:45",
        advice: "Utilisez ces salutations chaque matin et soir à la maison. Créez une routine familiale en anglais !",
        audioFile: "audios/audio03.mp3"
    },
    // Audio 04
    {
        id: 4,
        number: "Audio 04",
        title: "Mini-dialogue 1 (Première rencontre)",
        category: "partie1",
        categoryName: "Premiers Pas",
        icon: "💬",
        duration: "1:50",
        advice: "Jouez les deux personnages avec votre enfant. Alternez les rôles pour plus de fun !",
        audioFile: "audios/audio04.mp3"
    },
    // Audio 06
    {
        id: 6,
        number: "Audio 06",
        title: "Mini-dialogue 2 (Âge)",
        category: "partie2",
        categoryName: "Dialogues",
        icon: "🗣️",
        duration: "2:00",
        advice: "Demandez chaque jour \"How old are you?\" à votre enfant en anglais. Faites-en un jeu quotidien !",
        audioFile: "audios/audio06.mp3"
    },
    // Audio 08
    {
        id: 8,
        number: "Audio 08",
        title: "Mini-dialogue 3 (Conversations)",
        category: "partie2",
        categoryName: "Dialogues",
        icon: "💬",
        duration: "2:30",
        advice: "Écoutez les conversations naturelles et répétez-les ensemble en famille !",
        audioFile: "audios/audio08.mp3"
    },
    // Audio 10
    {
        id: 10,
        number: "Audio 10",
        title: "Chanson des couleurs",
        category: "partie3",
        categoryName: "Chansons",
        icon: "🎶",
        duration: "2:45",
        advice: "Chantez cette chanson en voiture ou avant le coucher. Ajoutez des gestes pour chaque couleur !",
        audioFile: "audios/audio10.mp3"
    },
    // Audio 11
    {
        id: 11,
        number: "Audio 11",
        title: "Nombres 1-10",
        category: "partie2",
        categoryName: "Vocabulaire",
        icon: "🔢",
        duration: "2:50",
        advice: "Comptez tout en anglais : les escaliers, les jouets, les fruits... Intégrez les nombres au quotidien !",
        audioFile: "audios/audio11.mp3"
    },
    // Audio 12
    {
        id: 12,
        number: "Audio 12",
        title: "Nombres 11-20",
        category: "partie2",
        categoryName: "Vocabulaire",
        icon: "🔢",
        duration: "3:00",
        advice: "Comptez jusqu'à 20 chaque soir avant de dormir. Faites-en une routine apaisante !",
        audioFile: "audios/audio12.mp3"
    },
    // Audio 16
    {
        id: 16,
        number: "Audio 16",
        title: "La famille",
        category: "partie2",
        categoryName: "Vocabulaire",
        icon: "👨‍👩‍👧",
        duration: "3:20",
        advice: "Regardez des photos de famille et nommez chacun en anglais. Créez un album bilingue !",
        audioFile: "audios/audio16.mp3"
    },
    // Audio 17
    {
        id: 17,
        number: "Audio 17",
        title: "Phrases famille",
        category: "partie2",
        categoryName: "Vocabulaire",
        icon: "💬",
        duration: "2:40",
        advice: "Faites présenter chaque membre de la famille à votre enfant en anglais. C'est amusant et utile !",
        audioFile: "audios/audio17.mp3"
    },
    // Audio 22
    {
        id: 22,
        number: "Audio 22",
        title: "Les verbes d'action",
        category: "partie2",
        categoryName: "Vocabulaire",
        icon: "🏃",
        duration: "3:40",
        advice: "Faites mimer chaque verbe pendant l'écoute. Bougez, dansez, sautez ! L'apprentissage par le corps fonctionne !",
        audioFile: "audios/audio22.mp3"
    },
    // Audio 25
    {
        id: 25,
        number: "Audio 25",
        title: "Les jours de la semaine",
        category: "partie2",
        categoryName: "Vocabulaire",
        icon: "📅",
        duration: "2:20",
        advice: "Chaque matin, annoncez le jour en anglais : \"Today is Monday!\" Créez un calendrier visuel.",
        audioFile: "audios/audio25.mp3"
    },
    // Audio 36
    {
        id: 36,
        number: "Audio 36",
        title: "Chanson joyeuse",
        category: "partie3",
        categoryName: "Chansons",
        icon: "🎵",
        duration: "2:20",
        advice: "Chantez cette chanson quand votre enfant est content ! Associez les émotions positives à l'anglais.",
        audioFile: "audios/audio36.mp3"
    }
];

// Exporter pour utilisation dans app.js
window.audioData = audioData;

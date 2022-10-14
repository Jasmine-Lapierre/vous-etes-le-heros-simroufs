
  let chaptersObj = {
    accueil : {
        subtitle: "Le commencement",
        text: "Proche d'ne guerre entre les fourmis et les abeilles, vous, la reine des fourmis, devez resoudre le conflit imminent. Devriez-vous déclarer la guerre contre les abeilles ou tenter la diplomacie?",
        img: "fourmisok.jpg",
        options: [
            {text: 'Guerre', action: 'aGuerre'},
            {text: 'Diplomacie', action: 'bDiplomacie'},
                  ]
        },
    aGuerre : {
        subtitle: "La guerre",
        text: "La guerre est déclarées. Le chef de guerre est appelé devant la cours. Que doit-il faire? Préparer une bonne défense ou attaquer le plus vite possible?",
        img: "image2.jpg",
        options: [
            {text: 'Défendre', action: 'goToChapter("aDefaiteDefense")'},
            {text: 'Première offensive', action: 'goToChapter("aTroupesCombat")'},
          ]

    },
    aDefaiteDefense : {
        subtitle: "Défaite!",
        text: "Après une longue attente, les fourmis s'endorment et des milliers d'abeilles detruisent le nid",
        img: "image3.jpg",
        options: [
            {text: 'Recommencer', action: 'goToChapter("accueil")'},
          ]
    },
    aTroupesCombat : {
        subtitle: "La stratégie",
        text: "Les troupes sont regroupées, il ne reste plus qu'à aller à l'attaque, mais quelle stratégie devraient-elles employer? Peinture oui ou non",
        img: "image4.jpg",
        options: [
            {text: 'Toutes les troupes.', action: 'goToChapter("aDefaiteStrategie")'},
            {text: 'Petites ambuscades.', action: 'goToChapter("aCamouflage")'},
          ]
        
    },    
    aDefaiteStrategie : {
        subtitle: "Défaite!",
        text: "La grande densité de troupes attirent d'autres prédateurs, l'armée est annihilée",
        img: "image5.jpg",
        options: [
            {text: 'Recommencer', action: 'goToChapter("accueil")'},
          ]    
        },
    aDefaitePeinture : {
        subtitle: "Défaite!",
        text: "Les fourmis se font détecter par les abeilles et meurent",
        img: "image6.jpg",
        options: [
            {text: 'Recommencer', action: 'goToChapter("accueil")'},
          ]    
        },             
    aCamouflage : {
        subtitle: "Défaite!",
        text: "devrait-on epargner la reine ou non?",
        img: "image7.jpg",
        options: [
          {text: 'oui', action: 'goToChapter("aDefaiteEpargner")'},
          {text: 'non', action: 'goToChapter("aVictoireGuerre")'},

        ]
    },  
    aDefaiteEpargner : {
        subtitle: "Défaite!",
        text: "Les abeilles ne sont pas du genre à abandoner et détruisent la colonie de fourmis",
        img: "image8.jpg",
        options: [
            {text: 'Recommencer', action: 'goToChapter("accueil")'},
          ]
            },              
    aVictoireGuerre: {
        subtitle: "Victoire!",
        text: "La guerre est finie et les fourmis sont sauvées!",
        img: "image9.jpg",
        options: [
          {text: 'Recommencer', action: 'goToChapter("accueil")'},
        ]
        
    },
    bDiplomacie: {
        subtitle: "Victoire!",
        text: "Le diplomate vous propose deux idées de génie. Soit il peut envoyer un texto à la reine des abeilles, car c'est le moyen de communication le plus rapide et qu'il n'y a pas de temps à perdre, soit il peut aller voir la reine des abeilles",
        img: "image10.jpg",
        options: [
          {text: 'Texto', action: 'goToChapter("bDefaiteTexto")'},
          {text: 'Aller voir la reine', action: 'goToChapter("bDefaiteTexto")'},
        ]
    },
    bDefaiteTexto: {
        subtitle: "Défaite!",
        text: "Le diplomate a fait une faute d'orthographe et les abeilles sont très fâchées, car elles n'aiment pas les illéttrés. Elles décident d'attaquer la colonie et cette derniere se fait détruire.",
        img: "image11.jpg",
        options: [
            {text: 'Recommencer', action: 'goToChapter("accueil")'},
          ]
            },
    bDirecte: {
        subtitle: "Victoire!",
        text: "Le diplomate arrive devant la reine des abeilles, mais que doit-il lui dire afin de règler le conflit? Il se demande s'il devrait donner un discours émouvant sur les ressemblances entre les abeilles et les fourmis, ou s'il devrait plutôt donner un discours rassembleur sur la haine commune envers les guêpes.",
        img: "image12.jpg",
        options: [
          {text: 'Discours émouvant', action: 'goToChapter("dDefaiteEmouvant")'},
          {text: 'Discours rassembleur', action: 'goToChapter("bVictoireAlliance")'},
        ]
    },    
    bDefaiteEmouvant: {
        subtitle: "Défaite!",
        text: "Les abeilles ne sont pas du tout convaincues et décident de tuer le diplomate et de détruire la colonie",
        img: "image13.jpg",
        options: [
            {text: 'Recommencer', action: 'goToChapter("accueil")'},
          ]
    },
    bVictoireAlliance: {
        subtitle: "Victoire!",
        text: "Les abeilles se font convaincre et décident de s'allier à la colonie de fourmis. Les fourmis leurs apprennent à creuser des petits trous dans le sol et elles apprennent aux fourmis à créer de la peinture. Un drapeau d'amitié peint par les deux colonies est érigé au milieu de la colonie!!!.... mais est-ce vraiment la fin? (La peinture est maintenant débloquée)",
        img: "image14.jpg",
        options: [
          {text: 'Recommencer?', action: 'goToChapter("accueil")'},
        ]
    },
  }
function goToChapter(chapterName){
    document.querySelector(".titre").textContent = chaptersObj[chapterName]['subtitle']
    document.querySelector(".texte").textContent = chaptersObj[chapterName]['text']
    document.querySelector(".image").innerHTML = "<img src='assets/"+ chaptersObj[chapterName]['img']+"'>";
    console.log(chaptersObj[chapterName]['subtitle']);
    console.log(chaptersObj[chapterName]['text']);
  }


  /*

  diplomacie : {
        subtitle: "Sed ut perspiciatis",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        img: "fourmisok.jpg"
    },

    */
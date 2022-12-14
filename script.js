
  let chaptersObj = {
    accueil : {
        subtitle: "Le commencement",
        text: "Proche d'ne guerre entre les fourmis et les abeilles, vous, la reine des fourmis, devez resoudre le conflit imminent. Devriez-vous déclarer la guerre contre les abeilles ou tenter la diplomacie?",
        img: "fourmisok.jpg",
        video:"video_accueil.mp4",
        options: [
            {text: 'Guerre', action: 'goToChapter("aGuerre")'},
            {text: 'Diplomacie', action: 'goToChapter("bDiplomacie")'},
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
        video:"video_defaite_1.mp4",
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
            {text: 'Petites ambuscades.', action: 'peintureVerification("aCamouflage")'},
          ]
        
    },    
    aDefaiteStrategie : {
        subtitle: "Défaite!",
        text: "La grande densité de troupes attirent d'autres prédateurs, l'armée est annihilée",
        img: "image5.jpg",
        video:"video_defaite_2.mp4",
        options: [
            {text: 'Recommencer', action: 'goToChapter("accueil")'},
          ]    
        },
    aDefaitePeinture : {
        subtitle: "Défaite!",
        text: "Les fourmis se font détecter par les abeilles et meurent",
        img: "image6.jpg",
        video:"video_defaite_3.mp4",
        options: [
            {text: 'Recommencer', action: 'goToChapter("accueil")'},
          ]    
        },             
    aCamouflage : {
        subtitle: "Épargner?",
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
        video:"video_defaite_4.mp4",
        options: [
            {text: 'Recommencer', action: 'goToChapter("accueil")'},
          ]
            },              
    aVictoireGuerre: {
        subtitle: "Victoire!",
        text: "La guerre est finie et les fourmis sont sauvées!",
        img: "image9.jpg",
        video:"video_victoire_guerre.mp4",
        options: [
          {text: 'Recommencer', action: 'goToChapter("accueil")'},
        ]
        
    },
    bDiplomacie: {
        subtitle: "La diplomacie",
        text: "Le diplomate vous propose deux idées de génie. Soit il peut envoyer un texto à la reine des abeilles, car c'est le moyen de communication le plus rapide et qu'il n'y a pas de temps à perdre, soit il peut aller voir la reine des abeilles",
        img: "image10.jpg",
        options: [
          {text: 'Texto', action: 'goToChapter("bDefaiteTexto")'},
          {text: 'Aller voir la reine', action: 'goToChapter("bDirecte")'},
        ]
    },
    bDefaiteTexto: {
        subtitle: "Défaite!",
        text: "Le diplomate a fait une faute d'orthographe et les abeilles sont très fâchées, car elles n'aiment pas les illéttrés. Elles décident d'attaquer la colonie et cette derniere se fait détruire.",
        img: "image11.jpg",
        video:"video_defaite_5.mp4",

        options: [
            {text: 'Recommencer', action: 'goToChapter("accueil")'},
          ]
            },
    bDirecte: {
        subtitle: "Le discours",
        text: "Le diplomate arrive devant la reine des abeilles, mais que doit-il lui dire afin de règler le conflit? Il se demande s'il devrait donner un discours émouvant sur les ressemblances entre les abeilles et les fourmis, ou s'il devrait plutôt donner un discours rassembleur sur la haine commune envers les guêpes.",
        img: "image12.jpg",
        options: [
          {text: 'Discours émouvant', action: 'goToChapter("bDefaiteEmouvant")'},
          {text: 'Discours rassembleur', action: 'goToChapter("bVictoireAlliance")'},
        ]
    },    
    bDefaiteEmouvant: {
        subtitle: "Défaite!",
        text: "Les abeilles ne sont pas du tout convaincues et décident de tuer le diplomate et de détruire la colonie",
        img: "image13.jpg",
        video:"video_defaite_6.mp4",

        options: [
            {text: 'Recommencer', action: 'goToChapter("accueil")'},
          ]
    },
    bVictoireAlliance: {
        subtitle: "Victoire!",
        text: "Les abeilles se font convaincre et décident de s'allier à la colonie de fourmis. Les fourmis leurs apprennent à creuser des petits trous dans le sol et elles apprennent aux fourmis à créer de la peinture. Un drapeau d'amitié peint par les deux colonies est érigé au milieu de la colonie!!!.... mais est-ce vraiment la fin? (La peinture est maintenant débloquée)",
        img: "image14.jpg",
        video:"video_victoire_diplomacie.mp4",
        options: [
          {text: 'Recommencer?', action: 'peintureTrue("accueil")'},
        ]
    },
  }
let peinture;
let bodyElement = document.querySelector('body')

function peintureTrue(chapterName){
peinture = true;
localStorage.setItem("peinture","existe")
goToChapter(chapterName);
}
function peintureVerification(chapterName){
  if (peinture){
    goToChapter(chapterName)
  }
  else{
    goToChapter('aDefaitePeinture');
  }
}

let audioActivation = true;

function goToChapter(chapterName){
  bodyElement.className=chapterName;
  let audio1 = new Audio('assets/son_1.mp3');
  let audio2 = new Audio('assets/son_2.mp3');
  let audio3 = new Audio('assets/son_3.mp3');
  nombreRandom = Math.ceil(Math.random()*3);

  localStorage.setItem("nomChapitre", chapterName);

if (audioActivation===true && nombreRandom===1){
  audio1.play()
}
if (audioActivation===true && nombreRandom==2){
  audio2.play()
}
if (audioActivation===true && nombreRandom==3){
  audio3.play()
}
  let optionsDiv = document.querySelector('.options');
  optionsDiv.innerHTML=""
    for (element of chaptersObj[chapterName]['options']){
      let boutonsChoix = document.createElement("button")
      boutonsChoix.setAttribute('onclick',element["action"])
      boutonsChoix.setAttribute('type','button')
      boutonsChoix.appendChild(document.createTextNode(element['text']))
      optionsDiv.appendChild(boutonsChoix)
    }
     chaptersObj[chapterName]['options']
    document.querySelector(".titre").textContent = chaptersObj[chapterName]['subtitle']
    document.querySelector(".texte").textContent = chaptersObj[chapterName]['text']
    if(chaptersObj[chapterName]["video"]){
      document.querySelector(".image").innerHTML = `<video src="assets/${chaptersObj[chapterName]['video']}" autoplay muted loop> `
    } else{    document.querySelector(".image").innerHTML = `<img src="assets/${chaptersObj[chapterName]['img']}"> `}

    console.log(chaptersObj[chapterName]['subtitle']);
    console.log(chaptersObj[chapterName]['text']);


  }


  if (localStorage.getItem("nomChapitre")){
    goToChapter(localStorage.getItem("nomChapitre"));
  } else{
    goToChapter("accueil")
  }

  if (localStorage.getItem("peinture")){
    peinture = true;
  }else{
    peinture = false;
  }

 function reset(){
  peinture=false;
  localStorage.clear();
  goToChapter('accueil');
}
let boutonpipicaca = document.querySelector('.pipicaca')
let boutonAudio = document.querySelector('#AudioCheckbox')
boutonAudio.addEventListener('click',function(){
  if (boutonAudio.checked){
    audioActivation=true;
  }else{
    audioActivation=false
  }
})

boutonpipicaca.addEventListener('click',function(){
  reset();
})

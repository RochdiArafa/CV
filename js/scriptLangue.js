var tnum = 'fr';

$(document).ready(function(){
  
  $(document).click( function(e) {
       $('.translate_wrapper, .more_lang').removeClass('active');     
  });
  
  $('.translate_wrapper .current_lang').click(function(e){    
    e.stopPropagation();
    $(this).parent().toggleClass('active');
    
    setTimeout(function(){
      $('.more_lang').toggleClass('active');
    }, 5);
  });
  

  /*TRANSLATE*/
  translate(tnum);
  
  $('.more_lang .lang').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.more_lang').removeClass('active');  
    
    var img = $(this).find('img').attr('src');    
    var lang = $(this).attr('data-value');
    var tnum = lang;
    translate(tnum);
    
    $('.current_lang .lang-txt').text(lang);
    $('.current_lang img').attr('src', img);
    
    if(lang == 'ar'){
      $('body').attr('dir', 'rtl');
    }else{
      $('body').attr('dir', 'ltr');
    }
    
  });
});

function translate(tnum){
  $('.accueil').text(trans[0][tnum]);
  $('.about').text(trans[1][tnum]);
  $('.formation').text(trans[2][tnum]);
  $('.projet').text(trans[3][tnum]);
  $('.compt').text(trans[4][tnum]);
  $('.cert').text(trans[5][tnum]);
  $('.langue').text(trans[6][tnum]);
  $('.contact').text(trans[7][tnum]);
  $('.writing-text').text(trans[8][tnum]);

  $('#cvbtn').text(trans[9][tnum]);
  $('#desc').text(trans[10][tnum]);
  $('#NomP').text(trans[11][tnum]);
  $('.email').text(trans[12][tnum]);
  $('.tel').text(trans[13][tnum]);
  $('#esprit').text(trans[14][tnum]);
  $('#dateEsprit').text(trans[15][tnum]);
  $('#DiplEsprit').text(trans[16][tnum]);
  $('.fsb').text(trans[17][tnum]);
  $('#DiplFSB').text(trans[18][tnum]);
  $('#dateProjet6').text(trans[19][tnum]);
  $('#placeProjet6').text(trans[20][tnum]);
  $('#descProjet6').text(trans[21][tnum]);
  $('.techProjet').text(trans[22][tnum]);
  $('#dateProjet5').text(trans[23][tnum]);
  $('#placeProjet5').text(trans[24][tnum]);
  $('#descProjet5').text(trans[25][tnum]);
  $('#dateProjet4').text(trans[26][tnum]);
  $('#placeProjet4').text(trans[27][tnum]);
  $('#descProjet4').text(trans[28][tnum]);
  $('#dateProjet3').text(trans[29][tnum]);
  $('#placeProjet3').text(trans[30][tnum]);
  $('#descProjet3').text(trans[31][tnum]);
  $('#dateProjet2').text(trans[32][tnum]);
  $('#placeProjet2').text(trans[33][tnum]);
  $('#descProjet2').text(trans[34][tnum]);
  $('#dateProjet1').text(trans[35][tnum]);
  $('#placeProjet1').text(trans[36][tnum]);
  $('#descProjet1').text(trans[37][tnum]);
  
  //$('.content a span').text(trans[2][tnum]);
}

var trans = [ 
  { 
    en : 'Home',
    fr : 'Accueil',
    ar : 'إستقبال'
  },{ 
    en : 'About',
    fr : 'À propos',
    ar : 'معلومات عني '
  },{ 
    en : 'training',
    fr : 'Formation',
    ar : 'تدريب'
  },{ 
    en : 'Project & Experience',
    fr : 'Projet & Expérience',
    ar : 'المشروع والخبرة'
  },{ 
    en : 'Skill',
    fr : 'Compétence',
    ar : 'كفاءة'
  },{ 
    en : 'Certificate',
    fr : 'Certificat',
    ar : 'شهادة'
  },{ 
    en : 'Language',
    fr : 'Langue',
    ar : 'لغة'
  },{ 
    en : 'Contact',
    fr : 'Contact',
    ar : 'اتصل'
  },{ 
    en : 'Fullstack web Ingineer',
    fr : 'Ingénieur Web Fullstack',
    ar : 'مهندس تطبيقات الويب '
  },{ 
    en : 'Download CV',
    fr : 'Télècharger CV',
    ar : 'تحميل السيرة الذاتية'
  },{ 
    en : 'My name is Rachid Arafa, I have developed many applications on different platforms. I am a self-sufficient, highly motivated, energetic and results-oriented person, but I also value cooperation and team spirit.',
    fr : "Je m'appelle Rachid Arafa,J'ai développé pas mal d’application sur différentes plateformes. Je suis quelqu’un d’autonome, très motivé, énergique et axé sur les résultats, mais je valorise aussi la coopération et l'esprit d'équipe.",
    ar : 'اسمي رشيد عرافة ، لقد قمت بتطوير عديد التطبيقات على منصات مختلفة. أنا شخص مكتفٍ ذاتيًا ، ومتحفز للغاية ، وحيوي ، وموجه نحو النتائج ، لكنني أيضًا أقدر التعاون وروح الفريق.'
  },{ 
    en : 'Full Name: ',
    fr : 'Nom & prénom: ',
    ar : 'الإسم واللقب: '
  },{ 
    en : 'Email: ',
    fr : 'Email: ',
    ar : 'البريد الإلكتروني: '
  },
  { 
    en : 'Mobile:',
    fr : 'Téléphone:',
    ar : 'الهاتف:'
  },{ 
    en : 'Private Higher School of Engineering and Technologies (ESPRIT)',
    fr : "Ecole Superieur Privée d'Ingénierie et de Technologies (ESPRIT)",
    ar : 'المدرسة العليا الخاصة للمهندسين والتقنيات (ESPRIT)'
  },{ 
    en : "2018 - Today",
    fr : "2018 - Aujourd'hui",
    ar : '2018 - الوقت الحاضر'
  },{ 
    en : 'Computer science engineering degree specializing in web technologies',
    fr : "Diplôme d'ingénieur en informatique spécialisé dans les technologies du web",
    ar : 'شهادة في هندسة علوم الكمبيوتر متخصص في تقنيات الويب'
  },{ 
    en : 'Faculty of Sciences of Bizerte (FSB)',
    fr : "Faculté Des Sciences De Bizerte (FSB)",
    ar : 'كلية العلوم ببنزرت (FSB)'
  },{ 
    en : 'Computer science degree',
    fr : "Licence fondamentale en Science de l'Informatique",
    ar : 'شهادة في علوم الحاسوب'
  },
  { 
    en : 'January 2020 - May 2020',
    fr : "Janvier 2020 - Mai 2020",
    ar : 'يناير 2020 - مايو 2020'
  },{ 
    en : 'Full Stack JS project at ESPRIT & TrustIt',
    fr : "Projet Full Stack JS à ESPRIT & TrustIt",
    ar : 'مشروع Full Stack JS في ESPRIT & TrustIt'
  },{ 
    en : 'Development of a TrustIt Web Scraping web application that allows you to collect ads from different websites, filter data and contact the owner of the ad by email or telephone message...',
    fr : "Développement d'une application web TrustIt Web Scraping qui permet de collecter les annonces à partir de différente sites internet, de filtrer les donnés et de contacter le propriétaire de l’annonce par email ou par un message téléphonique... ",
    ar : 'تطوير تطبيق ويب TrustIt Web Scraping يسمح لك بجمع الإعلانات من مواقع الويب المختلفة وتصفية البيانات والاتصال بمالك الإعلان عن طريق البريد الإلكتروني أو الرسائل الهاتفية'
  },{ 
    en : 'Technologies used :',
    fr : "Technologies utilisées :",
    ar : 'التقنيات المستخدمة :'
  },{ 
    en : 'September 2019 - December 2019',
    fr : "Septembre 2019 – Decembre 2019",
    ar : 'سبتمبر 2019 - ديسمبر 2019'
  },{ 
    en : 'FullStack project at ESPRIT',
    fr : "Projet FullStack à ESPRIT",
    ar : 'مشروع FullStack في ESPRIT'
  },{ 
    en : 'Development of a PFE internship platform. It allows the processing of end of studies projects within a school, from the start of the internship until the defense. It also displays a complete Dashboard which serves as a decision support tool to allow the school to update study plans (for example: add or delete modules) ...',
    fr : "Développement d'une plateforme de Stage de PFE.Il permettre le traitement des projets de fin d’études au sein d’une école, dès le début du stage jusqu'à la soutenance. Elle aussi afficher un Dashboard complet qui serve comme outil d’aide à la décision pour permettre à l’école de mettre à jour les plans d’étude (par exemple : ajouter ou supprimer des modules)...",
    ar : 'تطوير منصة تدريب PFE. تسمح بمعالجة مشاريع نهاية الدراسات داخل المدرسة ، من بداية التدريب حتى الدفاع. كما تعرض أيضًا لوحة معلومات كاملة تعمل كأداة لدعم القرار للسماح للمدرسة بتحديث خطط الدراسة (على سبيل المثال: إضافة أو حذف وحدات) ...'
  },{ 
    en : 'August 2019 - September 2019',
    fr : "Aout 2019 - Septembre 2019",
    ar : 'أغسطس 2019 - سبتمبر 2019'
  },{ 
    en : 'Summer internship at Familia Chic',
    fr : "Stage d'été à Familia Chic",
    ar : 'تدريب صيفي في Familia Chic'
  },{ 
    en : 'Development of an E-commerce site which is particularly useful to all people who own a store.',
    fr : "Développement d'un site E-commerce qui est particulièrement utile à tous personnes qui possèdent une boutique.",
    ar : 'تطوير موقع للتجارة الإلكترونية يكون مفيدًا بشكل خاص لجميع الأشخاص الذين يمتلكون متجرًا.'
  },{ 
    en : 'January 2018 - April 2018',
    fr : "Janvier 2018 – Avril 2018",
    ar : 'يناير 2018 - أبريل 2018'
  },{ 
    en : 'PIDEV project at ESPRIT',
    fr : "Projet PIDEV à ESPRIT",
    ar : 'مشروع PIDEV في ESPRIT'
  },{ 
    en : 'Development of a cross-platform nursery application. This application contains several functionalities, for example, the user can create his garden, and added plants to it, he can also ask questions about any plant, and others can answer it, ...',
    fr : "Développement d'une application multi-plateforme de pépiniere. Cette application contient plusieurs fonctionnalités, par exemple, l’utilisateur peut créer son jardin, et ajouté des plantes a ce dernier, il peut aussi poser des questions concernant une plante quel quand, et d’autre peuvent le répondre, ...",
    ar : 'تطوير تطبيق حضانة عبر منصة. يحتوي هذا التطبيق على العديد من الوظائف ، على سبيل المثال ، يمكن للمستخدم إنشاء حديقته ، وإضافة النباتات إليها ، كما يمكنه طرح أسئلة حول النبات ، ويمكن للآخرين الإجابة عليه ، ...'
  },{ 
    en : 'January 2018 - April 2018',
    fr : "Janvier 2018 - Avril 2018",
    ar : 'يناير 2018 - أبريل 2018'
  },{ 
    en : 'End of studies project internship at Diamont Soft',
    fr : "Stage de projet de fin d’études à Diamont Soft",
    ar : 'مشروع PIDEV في ESPRIT'
  },{ 
    en : 'Development of a web and a hybrid mobile application accessible to the public to search for driving schools and accessible for the manager of a driving school to manage his work ...',
    fr : "Développement d'une application web et mobile hybride accessible pour le public pour rechercher des auto-écoles et accessible pour le responsable d’une auto-école pour gérer son travail ...",
    ar : 'تطوير شبكة ويب  وتطبيق هجينة للهاتف المحمول يمكن الزوار الوصول إليه للبحث عن مدارس تعليم القيادة ويمكن الوصول إليها من قبل مدير مدرسة لتعليم القيادة لإدارة عمله ...'
  },{ 
    en : 'January 2017 - April 2017',
    fr : "Janvier 2017 - Avril 2017",
    ar : 'يناير 2017 - أبريل 2017'
  },{ 
    en : 'End of year project at FSB',
    fr : "Projet fin d'année à FSB",
    ar : 'مشروع نهاية العام في FSB'
  },{ 
    en : 'Development of a primary school management application, schedule management, notebooks ...',
    fr : "Développement d'une application de gestion d'école primaire , gestion des emplois de temps, carnets de notes....",
    ar : 'تطوير تطبيق إدارة المدارس الابتدائية ، وإدارة الجداول ، وأجهزة الكمبيوتر المحمولة ...'
  },
  
];

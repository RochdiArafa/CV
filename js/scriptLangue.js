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
  $('#fsb').text(trans[17][tnum]);
  $('#DiplFSB').text(trans[18][tnum]);

  
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
  
];

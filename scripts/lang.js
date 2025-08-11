// langchange.js

document.addEventListener('DOMContentLoaded', function () {
  // Check if there is a saved language in localStorage
  const savedLanguage = localStorage.getItem('selectedLanguage');
  if (savedLanguage) {
      changeLanguage(savedLanguage);
  }

  // Add event listeners to language change links
  const languageLinks = document.querySelectorAll('.language-menu a');
  languageLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          const language = event.target.className;
          changeLanguage(language);
      });
  });
});

function changeLanguage(language) {
  // Store the selected language in localStorage
  localStorage.setItem('selectedLanguage', language);

  // Change the language text and flag image
  const flag = document.getElementById('flag');
  const flagText = document.getElementById('flagtext');

  if (language === 'hu') {
      flag.src = 'images/flag_hu.png';
      flagText.textContent = 'HU';
      document.documentElement.lang = 'hu';
  } else if (language === 'eng') {
      flag.src = 'images/flag_eng.png';
      flagText.textContent = 'ENG';
      document.documentElement.lang = 'en';
  } else if (language === 'de') {
      flag.src = 'images/flag_de.png';
      flagText.textContent = 'DE';
      document.documentElement.lang = 'de';
  }

  // Translate the page content
  translatePageContent(language);
}

function translatePageContent(language) {
  // Define translations for each language
  const translations = {
      hu: {
          kezdolap: 'Kezdőlap',
          bemutatkozas: 'Bemutatkozás',
          nyitvatartas: 'Nyitvatartás',
          kapcsolat: 'Kapcsolat',
          //index page
          welcome_text_first_line: 'Kedves Állattartók! Üdvözlöm Önöket a rendelőm honlapján!',
          first_page_button: 'Időpontfoglalás védőoltáshoz',
          //about page
          about_title: 'Dr. Kovács Péter',
          about_i: 'Üdvözlöm Önöket rendelőm honlapján!',
          about_ii: 'A rendelőm 2002 óta működik Siófokon.',
          about_iii: 'Elsősorban ambuláns betegellátást végzek. A gyógyításban főként a modern orvostudomány vívmányait használom, de hiszek abban, hogy a szervezet öngyógyító ereje (különösen állatoknál) igen hatékony, ezért alternatív irányokat (homeopátia) is szívesen alkalmazok.',
          about_j: 'Munkám során legfontosabb célom a gyógyító munka, de lényegesnek tartom megjegyezni, hogy az állatok helyes tartása, táplálása, a betegségek megelőzése (pl. védőoltásokkal vagy az élősködők irtásával) sokkal olcsóbb és egyszerűbb megoldás a gazda és állata számára, mint a kialakult bajok gyógyíttatása.',
          about_jj: 'Ezért kérem, hogy ne csak állatuk betegsége esetén keressenek meg, hanem bármilyen, az állatot érintő kérdéssel kapcsolatban forduljanak hozzám bizalommal.',
          eletutButton: 'Életút',
          //eletut_page
          eletut_title: 'ÉLETÚT',
          eletut_1: 'Debrecen, KLTE Gyakorló Gimnáziuma',
          eletut_2: 'Debrecen, Állategészségügyi Állomás Állatkórháza (gyakornok)',
          eletut_3: 'Állatorvostudományi Egyetem',
          eletut_4: 'USA, Cleveland, Emergency Pet Clinic (gyakornok)',
          eletut_5: 'Állatorvosi Diploma',
          eletut_6: 'Házasságkötés: feleségem Dudás Andrea',
          eletut_7: '(gyerekek: 1992. Kristóf, 1994. Bálint, 1997. Vica)',
          eletut_8: 'Németország, Kiel, Christian Albrechts Egyetem',
          eletut_9: '(Debreceni Agrártudományi Egyetem TEMPUS ösztöndíjasa)',
          eletut_10: 'PhD fokozat (Takarmányozás-tudományok Doktori cím)',
          eletut_11: 'Debrecen, Agrártudományi Egyetem (adjunktus)',
          eletut_12: 'Siófok, Kiliti Állatgyógyászati Centrum (alkalmazott állatorvos)',
          eletut_13: 'Homeopátia szakvizsga',
          eletut_14: 'Siófoki, Tabi Járás (hatósági állatorvos)',
          eletut_15: 'Siófok, Klapka utcai állatorvosi rendelő (magánállatorvos)',
          vissza: 'Vissza',
          //hours page
          nyitvatartas_fontos_text: '2025. augusztus 22-én a rendelés szünetel!',
          nyitvatartas_text: "A legfrissebb nyitvatartási időpontokért látogass el Facebook oldalunkra!",
          nyitvatartas_click: "Aktuális nyitvatartásunkat facebookon is megnézheted!",
          hetfo: 'Hétfő:',
          kedd: 'Kedd:',
          szerda: 'Szerda:',
          csutortok: 'Csütörtök:',
          pentek: 'Péntek:',
          szombat: 'Szombat:',
          vasarnap: 'Vasárnap:',
          zarva: 'zárva',
          zarva2: 'zárva',
          zarva3: 'zárva',
          fehervar_hivas: 'Sürgősségi esetben a Székesfehérvári Állatkórházat hívhatja:',
          fehervar_nev: 'székesfehérvári állatkórház ügyelet',
          kornyeki: 'A környéken dolgozó kollégák:',
          //contact page
          contact_title: 'Kapcsolat',
          contact_fb_name: 'Kó-Pé Állatorvosi Rendelő',
          contact_maps: 'Elhelyezkedés',
          contact_address: 'Klapka György utca 51, Siófok, Magyarország',
          contact_maps_zoom: 'Nagyításhoz kattintson ide'
      },
      eng: {
          kezdolap: 'Home',
          bemutatkozas: 'About Us',
          nyitvatartas: 'Opening Hours',
          kapcsolat: 'Contact',
          //index page
          welcome_text_first_line: 'Dear Pet Owners! Welcome to my clinic\'s website!',
          first_page_button: 'Make an appointment for vaccination',
          //about page
          about_title: 'Dr. Péter Kovács',
          about_i: 'Welcome to the website of my practice!',
          about_ii: 'My practice has been operating in Siófok since 2002.',
          about_iii: 'I mainly provide outpatient care, mainly using the achievements of modern medicine, but I believe that the body\'s self-healing power (especially in animals) is very effective, so I also like to use alternative medicine (homeopathy).',
          about_j: 'In my work, my main aim is to cure, but I think it is important to note that keeping animals well, feeding them and preventing disease (e.g. by vaccination or parasite control) is a much cheaper and simpler solution for the owner and his animal than curing the problems that arise.',
          about_jj: 'Therefore, please do not only contact me if your pet is ill, but also if you have any questions concerning your pet.',
          eletutButton: 'Life path',
          //eletut_page
          eletut_title: 'LIFE PATH',
          eletut_1: 'Debrecen, Secondary Training School of Lajos Kossuth University',
          eletut_2: 'Debrecen, Veterinary Station Animal Hospital (trainee)',
          eletut_3: 'University of Veterinary Medicine',
          eletut_4: 'USA, Cleveland, Emergency Pet Clinic (trainee)',
          eletut_5: 'Veterinary Diploma',
          eletut_6: 'Marriage: my wife Andrea Dudás',
          eletut_7: '(children: Kristóf 1992, Bálint 1994, Vica 1997)',
          eletut_8: 'Germany, Kiel, Christian Albrechts University',
          eletut_9: '(with TEMPUS scholarship of the University of Agricultural Sciences Debrecen)',
          eletut_10: 'PhD degree (Doctorate in Feed Science)',
          eletut_11: 'Debrecen, University of Agricultural Sciences (adjunct professor)',
          eletut_12: 'Siófok, Kiliti Veterinary Centre (employed veterinarian)',
          eletut_13: 'Completion of the Homeopathy professional examination',
          eletut_14: 'Siófok, Tab District (official veterinarian)',
          eletut_15: 'Siófok, Klapka Street Veterinary Clinic (independent veterinarian)',
          vissza: 'Back',
          //hours page
          nyitvatartas_fontos_text: 'The practice will be closed on August 22nd.',
          nyitvatartas_text: "For the latest opening hours, visit our Facebook page!",
          nyitvatartas_click: "You can also view the current opening hours on Facebook!",
          hetfo: 'Monday:',
          kedd: 'Tuesday:',
          szerda: 'Wednesday:',
          csutortok: 'Thursday:',
          pentek: 'Friday:',
          szombat: 'Saturday:',
          vasarnap: 'Sunday:',
          zarva: 'closed',
          zarva2: 'closed',
          zarva3: 'closed',
          fehervar_hivas: 'In case of emergency you can call the Székesfehérvár Animal Hospital:',
          fehervar_nev: 'on-call service veterinary clinic székesfehérvár',
          kornyeki: 'Other vets in the area:',
          //contact page
          contact_title: 'Contact',
          contact_fb_name: 'Kó-Pé Veterinary Practice',
          contact_maps: 'Location',
          contact_address: 'Klapka György utca 51, Siófok, Hungary',
          contact_maps_zoom: 'Click here to zoom in'
      },
      de: {
          kezdolap: 'Startseite',
          bemutatkozas: 'Über uns',
          nyitvatartas: 'Öffnungszeiten',
          kapcsolat: 'Kontakt',
          //index page
          welcome_text_first_line: 'Liebe Tierhalter! Willkommen auf der Website meiner Praxis!',
          first_page_button: 'Termin für Impfung buchen',
          //about page
          about_title: 'Dr. Péter Kovács',
          about_i: 'Herzlich willkommen auf der Website meiner Praxis!',
          about_ii: 'Meine Praxis befindet sich seit 2002 in Siófok.',
          about_iii: 'Ich biete hauptsächlich ambulante Behandlungen an. Ich setze vor allem die Errungenschaften der modernen Medizin ein, glaube aber, dass die Selbstheilungskräfte des Körpers (vor allem bei Tieren) sehr wirksam sind, deshalb verwende ich auch gerne die alternative Medizin (Homöopathie).',
          about_j: 'Mein Hauptziel bei meiner Arbeit ist es, auf eine Heilung hinzuarbeiten, aber ich halte es für wichtig, darauf hinzuweisen, dass die Gesunderhaltung der Tiere, ihre Fütterung und die Vorbeugung von Krankheiten (z. B. durch Impfung oder Parasitenbekämpfung) eine viel billigere und einfachere Lösung für den Besitzer und sein Tier ist als die Heilung der auftretenden Probleme.',
          about_jj: 'Bitte wenden Sie sich daher nicht nur an mich, wenn Ihr Tier krank ist, sondern auch, wenn Sie Fragen zu Ihrem Tier haben.',
          eletutButton: 'Lebensweg',
          //eletut_page
          eletut_title: 'LEBENSWEG',
          eletut_1: 'Debrecen, Gymnasium der Lajos Kossuth Universität',
          eletut_2: 'Debrecen, Tierärztliche Klinik (Praktikant)',
          eletut_3: 'Universität für Veterinärmedizin',
          eletut_4: 'USA, Cleveland, Emergency Pet Clinic (Praktikant)',
          eletut_5: 'Diplom - Veterinärmedizin',
          eletut_6: 'Eheschließung mit Andrea Dudás',
          eletut_7: '(Kinder: Kristóf 1992, Bálint 1994, Vica 1997)',
          eletut_8: 'Deutschland, Kiel, Christian Albrechts Universität',
          eletut_9: '(PhD Studium am Institut für Tierzucht und Tierernärung)',
          eletut_10: 'Erfolgreiche Verteidigung der PhD-Arbeit im Bereich Tierernärung',
          eletut_11: 'Debrecen, Universität für Agrarwissenschaften (Wissenschaftlicher Mitarbeiter)',
          eletut_12: 'Siófok, Kiliti Veterinärzentrum (angestellter Tierarzt)',
          eletut_13: 'Zusatz-Weiterbildung für Homöopathie',
          eletut_14: 'Beamter im Öffentlichen Dienst für Tiergesundheitswesen',
          eletut_15: 'Siófok, Tierarztpraxis Ko-Perfekt',
          vissza: 'Zurück',
          //hours page
          nyitvatartas_fontos_text: 'Am 22. August bleibt die Praxis geschlossen.',
          nyitvatartas_text: "Die aktuellen Öffnungszeiten finden Sie auf unserer Facebook-Seite!",
          nyitvatartas_click: "Die aktuellen Öffnungszeiten auch auf Facebook!",
          hetfo: 'Montag:',
          kedd: 'Dienstag:',
          szerda: 'Mittwoch:',
          csutortok: 'Donnerstag:',
          pentek: 'Freitag:',
          szombat: 'Samstag:',
          vasarnap: 'Sonntag:',
          zarva: 'geschlossen',
          zarva2: 'geschlossen',
          zarva3: 'geschlossen',
          fehervar_hivas: 'In Notfällen können Sie  die Tierklinik Székesfehérvár anrufen:',
          fehervar_nev: 'bereitschaftsdienst tierklinik székesfehérvár',
          kornyeki: 'Tierärzte/Tierärztinnen in der Nähe:',
          //contact page
          contact_title: 'Kontakt',
          contact_fb_name: 'Kó-Pé Tierarztpraxis',
          contact_maps: 'Standort',
          contact_address: 'Klapka György utca 51, Siófok, Ungarn',
          contact_maps_zoom: 'Hier klicken zum Vergrößern'
      }
  };

  // Get all elements that need to be translated
  const elementsToTranslate = [
      { id: 'kezdolap', key: 'kezdolap' },
      { id: 'bemutatkozas', key: 'bemutatkozas' },
      { id: 'nyitvatartas', key: 'nyitvatartas' },
      { id: 'kapcsolat', key: 'kapcsolat' },
      { id: 'welcome_text_first_line', key: 'welcome_text_first_line' },
      { id: 'first_page_button', key: 'first_page_button' },
      //eletut page
      { id: 'eletut_title', key: 'eletut_title' },
      { id: 'eletut_1', key: 'eletut_1' },
      { id: 'eletut_2', key: 'eletut_2' },
      { id: 'eletut_3', key: 'eletut_3' },
      { id: 'eletut_4', key: 'eletut_4' },
      { id: 'eletut_5', key: 'eletut_5' },
      { id: 'eletut_6', key: 'eletut_6' },
      { id: 'eletut_7', key: 'eletut_7' },
      { id: 'eletut_8', key: 'eletut_8' },
      { id: 'eletut_9', key: 'eletut_9' },
      { id: 'eletut_10', key: 'eletut_10' },
      { id: 'eletut_11', key: 'eletut_11' },
      { id: 'eletut_12', key: 'eletut_12' },
      { id: 'eletut_13', key: 'eletut_13' },
      { id: 'eletut_14', key: 'eletut_14' },
      { id: 'eletut_15', key: 'eletut_15' },
      { id: 'vissza', key: 'vissza' },
      //hours page
      { id: 'nyitvatartas_fontos_text', key: 'nyitvatartas_fontos_text'},
      { id: 'nyitvatartas_text', key: 'nyitvatartas_text'},
      { id: 'nyitvatartas_click', key: 'nyitvatartas_click'},
      { id: 'hetfo', key: 'hetfo'},
      { id: 'kedd', key: 'kedd'},
      { id: 'szerda', key: 'szerda'},
      { id: 'csutortok', key: 'csutortok'},
      { id: 'pentek', key: 'pentek'},
      { id: 'szombat', key: 'szombat'},
      { id: 'vasarnap', key: 'vasarnap'},
      { id: 'zarva', key: 'zarva'},
      { id: 'zarva2', key: 'zarva2'},
      { id: 'zarva3', key: 'zarva3'},
      { id: 'fehervar_hivas', key: 'fehervar_hivas'},
      { id: 'fehervar_nev', key: 'fehervar_nev'},
      { id: 'kornyeki', key: 'kornyeki'},
      //about page
      { id: 'about_title', key: 'about_title'},
      { id: 'about_i', key: 'about_i'},
      { id: 'about_ii', key: 'about_ii'},
      { id: 'about_iii', key: 'about_iii'},
      { id: 'about_j', key: 'about_j'},
      { id: 'about_jj', key: 'about_jj'},
      { id: 'eletutButton', key: 'eletutButton'},
      //contact page
      { id: 'contact_title', key: 'contact_title'},
      { id: 'contact_fb_name', key: 'contact_fb_name'},
      { id: 'contact_maps', key: 'contact_maps'},
      { id: 'contact_address', key: 'contact_address'},
      { id: 'contact_maps_zoom', key: 'contact_maps_zoom'}
  ];

  // Apply the translations
  elementsToTranslate.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
          element.textContent = translations[language][item.key];
      }
  });
}

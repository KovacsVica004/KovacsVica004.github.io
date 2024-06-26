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
          about_jjj: 'Az ambuláns betegellátáson kívül vállalok ivartalanítási-, kisebb lágysebészeti műtéteket, illetve fogkő-eltávolítást. Az ilyen beavatkozásokat a rendeléstől időben elkülönítve, telefonos egyeztetés alapján végzem.',
          //hours page
          nyitvatartas_title: 'Nyitvatartás',
          nyitvatartas_text: "A legfrissebb nyitvatartási időpontokért látogass el Facebook oldalunkra!",
          nyitvatartas_click: "Kattints ide",
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
          about_jjj: 'In addition to outpatient care, I also undertake spay/neuter, minor soft tissue surgery and tartar removal. I perform these procedures separately from regular practice hours, by telephone appointment.',
          //hours page
          nyitvatartas_title: 'Opening hours',
          nyitvatartas_text: "For the latest opening hours, visit our Facebook page!",
          nyitvatartas_click: "Click here",
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
          about_jjj: 'Neben der ambulanten Versorgung übernehme ich auch Kastrationen, kleinere Weichteiloperationen und Zahnsteinentfernungen. Diese Eingriffe führe ich außerhalb der regulären Praxiszeiten, nach telefonischer Terminvereinbarung durch.',
          //hours page
          nyitvatartas_title: 'Öffnungszeiten',
          nyitvatartas_text: "Die aktuellen Öffnungszeiten finden Sie auf unserer Facebook-Seite!",
          nyitvatartas_click: "Hier klicken",
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
      { id: 'nyitvatartas_title', key: 'nyitvatartas_title'},
      { id: 'nyitvatartas_text', key: 'nyitvatartas_text'},
      { id: 'nyitvatartas_click', key: 'nyitvatartas_click'},
      { id: 'about_title', key: 'about_title'},
      { id: 'about_i', key: 'about_i'},
      { id: 'about_ii', key: 'about_ii'},
      { id: 'about_iii', key: 'about_iii'},
      { id: 'about_j', key: 'about_j'},
      { id: 'about_jj', key: 'about_jj'},
      { id: 'about_jjj', key: 'about_jjj'},
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

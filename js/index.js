document.addEventListener("DOMContentLoaded", function () {
  console.log("Index script DOMContentLoaded");

  function showThankYouMessage() {
    document.getElementById("contactForm").classList.add("hidden");
    document.getElementById("thank-you").classList.remove("hidden");
  }

  function handleSubmit(event) {
    event.preventDefault();

    showThankYouMessage();
  }

  document
    .getElementById("contactForm")
    .addEventListener("submit", handleSubmit);
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Index script DOMContentLoaded");

  function toggleLanguage() {
    let switchElement = document.getElementById("language-toggle");
    let language = switchElement.checked ? "EN" : "DE";
    translatePage(language);
  }

  function translatePage(language) {
    console.log("Current language:", language);
    const elementsToTranslate = document.querySelectorAll("[data-translate]");

    elementsToTranslate.forEach((element) => {
      const translationKey = element.getAttribute("data-translate");
      const translatedText = translations[translationKey]
        ? translations[translationKey][language]
        : null;

      if (translatedText) {
        console.log(`Translating "${translationKey}" to "${translatedText}"`);
        element.textContent = translatedText;
      } else {
        console.warn(`Translation not found for key "${translationKey}"`);
      }
    });
  }
  let switchElement = document.getElementById("language-toggle");
  switchElement.addEventListener("click", toggleLanguage);

  toggleLanguage();
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Translation script loaded");
});

const translations = {
  homepageTitle: {
    EN: "Elvira Graf | Front-end developer",
    DE: "Elvira Graf | Frontend-Entwicklerin",
  },

  langDE: {
    EN: "GE",
    DE: "DE",
  },

  langEN: {
    EN: "EN",
    DE: "EN",
  },

  navAbout: {
    EN: "About",
    DE: "Über",
  },

  navWork: {
    EN: "Work",
    DE: "Arbeit",
  },

  navContact: {
    EN: "Contact",
    DE: "Kontakt",
  },

  welcomeHello: {
    EN: "Hello, my name is",
    DE: "Hallo, mein Name ist",
  },

  welcomeDeveloper: {
    EN: "Frontend Developer, based in Switzerland, Berlingen.",
    DE: "Frontend-Entwicklerin aus der Schweiz, Berlingen.",
  },

  welcomeGetStarted: {
    EN: "Get started",
    DE: "Loslegen",
  },

  projectDictionary: {
    EN: "Dictionary",
    DE: "Wörterbuch",
  },
  projectDictionaryDescription: {
    EN: "Explore the world of words",
    DE: "Erkunden Sie die Welt der Wörter",
  },
  projectDictionaryDetails: {
    EN: "Immerse yourself in the world of our dictionary, where you can effortlessly discover correct spellings, listen to accurate pronunciations, explore definitions, examples, and synonyms. We also offer illustrative images and phonetic spellings. With our user-friendly features and intuitive interface, finding words and their meanings has never been easier.",
    DE: "Tauchen Sie ein in die Welt unseres Wörterbuchs, in dem Sie mühelos korrekte Schreibweisen entdecken, akkurate Aussprachen hören, Definitionen, Beispiele und Synonyme erkunden können. Wir bieten auch illustrierte Bilder und phonetische Schreibweisen an. Mit unseren benutzerfreundlichen Funktionen und der intuitiven Benutzeroberfläche war es noch nie einfacher, Wörter und ihre Bedeutungen zu finden.",
  },

  viewProject: {
    EN: "View the project",
    DE: "Projekt ansehen",
  },

  projectWeatherAppReact: {
    EN: "Weather-App in React",
    DE: "Wetter-App in React",
  },
  projectWeatherAppReactDescription: {
    EN: "Stay Updated with Real-time Weather Information",
    DE: "Bleiben Sie mit Echtzeit-Wetterinformationen auf dem Laufenden",
  },
  projectWeatherAppReactDetails: {
    EN: "Stay informed with real-time weather updates including temperature, humidity, wind speed, and more. Animated icons depict current weather conditions while the background dynamically adjusts. Our user-friendly interface makes staying updated on the weather effortless.",
    DE: "Bleiben Sie mit Echtzeit-Wetterupdates einschließlich Temperatur, Luftfeuchtigkeit, Windgeschwindigkeit und mehr informiert. Animationsicons zeigen die aktuellen Wetterbedingungen an, während sich der Hintergrund dynamisch anpasst. Unsere benutzerfreundliche Oberfläche erleichtert es Ihnen, über das Wetter auf dem Laufenden zu bleiben.",
  },

  projectKoreanSkincare: {
    EN: "Korean-Skincare",
    DE: "Koreanische Hautpflege",
  },
  projectKoreanSkincareDescription: {
    EN: "Discover the Art of Korean Skincare",
    DE: "Entdecken Sie die Kunst der koreanischen Hautpflege",
  },
  projectKoreanSkincareDetails: {
    EN: "Dive into the world of Korean skincare with our interactive website/app. Discover curated skincare routines and products, and stay connected with us through our contact form. Experience a seamless interface designed to enhance your skincare journey.",
    DE: "Tauchen Sie ein in die Welt der koreanischen Hautpflege mit unserer interaktiven Website/App. Entdecken Sie kuratierte Hautpflegeroutinen und Produkte und bleiben Sie über unser Kontaktformular mit uns verbunden. Erleben Sie eine nahtlose Benutzeroberfläche, die entwickelt wurde, um Ihre Hautpflege-Reise zu verbessern.",
  },

  projectWorldClocks: {
    EN: "World-Clocks",
    DE: "Weltuhren",
  },
  projectWorldClocksDescription: {
    EN: "Observes the times around the world",
    DE: "Beobachtet die Zeiten rund um die Welt",
  },
  projectWorldClocksDetails: {
    EN: "Embark on a journey through time on our website, where you can effortlessly compare and choose time zones globally, simplifying your cross-border planning. With user-friendly features and an intuitive interface, managing international schedules has never been more convenient.",
    DE: "Begib dich auf eine Reise durch die Zeit auf unserer Website, wo du mühelos Zeitzonen weltweit vergleichen und auswählen kannst, um deine länderübergreifende Planung zu vereinfachen. Mit benutzerfreundlichen Funktionen und einer intuitiven Benutzeroberfläche war das Verwalten internationaler Zeitpläne noch nie so bequem.",
  },

  projectRhymeAlchemist: {
    EN: "Rhyme-Alchemist",
    DE: "Reim-Alchemist",
  },
  projectRhymeAlchemistDescription: {
    EN: "Elevate Your Words: Rhyme-Alchemist, Your Creative Companion for beautiful French Poetry.",
    DE: "Erhebe deine Worte: Reim-Alchemist, dein kreativer Begleiter für schöne französische Poesie.",
  },
  projectRhymeAlchemistDetails: {
    EN: "Indulge in the art of poetry with our AI-powered French poem generator. Enter a keyword, and watch as the magic unfolds, presenting you with beautifully crafted verses that captivate the essence of your chosen theme.",
    DE: "Tauche ein in die Kunst der Poesie mit unserem KI-gestützten französischen Gedichtsgenerator. Gib ein Stichwort ein und sieh zu, wie die Magie sich entfaltet und dir wunderschön verfasste Verse präsentiert, die die Essenz deines gewählten Themas einfangen.",
  },

  projectWeatherApp: {
    EN: "Weather-App",
    DE: "Wetter-App",
  },
  projectWeatherAppDescription: {
    EN: "Discover Weather Bliss: A Minimalist and User-Friendly Weather App",
    DE: "Entdecken Sie Weather Bliss: Eine minimalistische und benutzerfreundliche Wetter-App",
  },
  projectWeatherAppDetails: {
    EN: "Immerse yourself in the simplicity of our weather app. Get instant access to current weather conditions and a concise forecast. Experience weather tracking made easy and enjoyable.",
    DE: "Tauche ein in die Einfachheit unserer Wetter-App. Erhalte sofortigen Zugang zu aktuellen Wetterbedingungen und einer prägnanten Wettervorhersage. Erlebe eine unkomplizierte und angenehme Wetterverfolgung.",
  },

  /*about-me*/

  aboutpageTitle: {
    EN: "About | Overview the projects and the pictures of Ellas work",
    DE: "Über | Überblick über die Projekte und Bilder von Ellas Arbeit",
  },

  welcomeAbout: {
    EN: "Hi I am Elvira Angelina Graf",
    DE: "Hallo, ich bin Elvira Angelina Graf",
  },

  aboutMeCard: {
    EN: "As a Frontend Wizard, I conjure digital wonders through the power of code, crafting user experiences that are as seamless as a wizard's spell and visually captivating as a magical potion. With a keen eye for design and a knack for elegant solutions, I embark on an epic quest to bring ideas to life in the ever-evolving web realm. Each line of code is a magical incantation, woven with care to transform concepts into interactive, user-friendly interfaces that not only meet but surpass expectations. As I navigate the intricate dance between creativity and functionality, I am fueled by the belief that exceptional web design is akin to conducting a symphony - harmonizing elements to create a delightful online experience that leaves users spellbound.",
    DE: "Als Frontend-Entwickler zaubere ich digitale Wunder durch die Macht des Codes, indem ich Benutzererlebnisse kreiere, die so nahtlos sind wie ein Zauberspruch und so visuell ansprechend wie ein magischer Trank. Mit einem geschulten Auge für Design und einem Gespür für elegante Lösungen begebe ich mich auf eine epische Quest, um Ideen im ständig wandelnden Web-Universum zum Leben zu erwecken. Jede Codezeile ist eine magische Beschwörung, mit Sorgfalt gewoben, um Konzepte in interaktive, benutzerfreundliche Schnittstellen zu verwandeln, die nicht nur Erwartungen erfüllen, sondern übertreffen. Während ich den komplexen Tanz zwischen Kreativität und Funktionalität navigiere, treibt mich der Glaube an, dass außergewöhnliches Webdesign dem Dirigieren einer Symphonie ähnelt - Elemente harmonisieren, um ein bezauberndes Online-Erlebnis zu schaffen, das die Benutzer verzaubert.",
  },

  AboutMe: {
    EN: "About Me",
    DE: "Über mich",
  },

  AboutMeLi1: {
    EN: "Frontend developer",
    DE: "Frontend-Entwickler",
  },

  AboutMeLi2: {
    EN: "Successfully completed SheCodes program",
    DE: "Erfolgreicher Abschluss des SheCodes-Programms",
  },

  AboutMeLi3: {
    EN: "Advanced proficiency in HTML, CSS, JavaScript, and React",
    DE: "Fortgeschrittene Kenntnisse in HTML, CSS, JavaScript und React",
  },

  Skills: {
    EN: "My Skills include",
    DE: "Meine Fähigkeiten umfassen",
  },

  SkillsLi1: {
    EN: "HTML, CSS, and JavaScript proficiency",
    DE: "Gute Kenntnisse in HTML, CSS und JavaScript",
  },

  SkillsLi2: {
    EN: "Experience with VSCode, API integration, Git, and GitHub",
    DE: "Erfahrung mit VSCode, API-Integration, Git und GitHub",
  },

  SkillsLi3: {
    EN: "Knowledge of hosting services and AI technologies",
    DE: "Verständnis von Hosting-Diensten und KI-Technologien",
  },

  SkillsLi4: {
    EN: "Familiarity with Bootstrap for rapid development",
    DE: "Vertrautheit mit Bootstrap für schnelle Entwicklung",
  },

  SkillsLi5: {
    EN: "Understanding of SEO principles",
    DE: "Kenntnisse in SEO-Prinzipien",
  },

  SkillsLi6: {
    EN: "Expertise in responsive web design",
    DE: "Expertenwissen in responsivem Webdesign",
  },

  SkillsLi7: {
    EN: "Proficient in React.js for dynamic web applications",
    DE: "Geschickter Umgang mit React.js für dynamische Webanwendungen",
  },

  Interests: {
    EN: "My Interests and Focus Areas",
    DE: "Meine Interessen und Schwerpunkte",
  },
  InterestsLi1: {
    EN: "Web animations and interactivity",
    DE: "Webanimationen und Interaktivität",
  },
  InterestsLi2: {
    EN: "UI/UX design principles",
    DE: "UI/UX Designprinzipien",
  },
  InterestsLi3: {
    EN: "Project management with agile development methods",
    DE: "Projektmanagement mit agilen Entwicklungsmethoden",
  },

  Learning: {
    EN: "Learning Environment",
    DE: "Lernumgebung",
  },

  LearningLi1: {
    EN: "SheCodes: Intensive frontend development program",
    DE: "SheCodes: Intensives Frontend-Entwicklungsprogramm",
  },
  LearningLi2: {
    EN: "CS50 (Harvard): Deepening knowledge in algorithmic concepts and software development",
    DE: "CS50 (Harvard): Vertiefung der Kenntnisse in algorithmischen Konzepten und Softwareentwicklung",
  },

  AboutText: {
    EN: "I look forward to applying my acquired skills in practice and realizing innovative web projects.",
    DE: "Ich freue mich darauf, meine erworbenen Fähigkeiten in die Praxis umzusetzen und mehr innovative Webprojekte zu realisieren.",
  },

  ContactMe: {
    EN: "Contact me",
    DE: "Kontaktiere mich",
  },
  /* work */

  workTitle: {
    EN: "Work| Overview the projects of Elvira Graf",
    DE: "Arbeit | Überblick über die Projekte von Elvira Graf",
  },

  titleProjects: {
    EN: "My Projects",
    DE: "Meine Projekte",
  },

  projectDictionaryDescriptionWork: {
    EN: "Immerse yourself in the fascinating world of words with our interactive dictionary. Discover correct spellings effortlessly, listen to precise pronunciations, explore definitions, examples, and synonyms. We also provide illustrated images and phonetic spellings. With our user-friendly features and intuitive interface, finding words and their meanings has never been easier.",
    DE: "Vertiefe dich in die faszinierende Welt der Wörter mit unserem interaktiven Wörterbuch. Entdecke korrekte Schreibweisen mühelos, höre präzise Aussprachen, erkunde Definitionen, Beispiele und Synonyme. Wir bieten auch illustrierte Bilder und phonetische Schreibweisen an. Mit unseren benutzerfreundlichen Funktionen und intuitiven Schnittstellen war es noch nie einfacher, Wörter und ihre Bedeutungen zu finden.",
  },

  projectButton: {
    EN: "Click here to see the whole project",
    DE: "Klicke hier, um das gesamte Projekt zu sehen",
  },

  projectWeatherAppReactDescriptionWork: {
    EN: "Stay up-to-date with live weather updates, covering temperature, humidity, wind speed, and more. Dynamic animated icons reflect current weather conditions as the background adapts accordingly. Our intuitive interface ensures effortless access to the latest weather information.",
    DE: "Bleiben Sie mit Live-Wetteraktualisierungen auf dem neuesten Stand, die Temperatur, Luftfeuchtigkeit, Windgeschwindigkeit und mehr abdecken. Dynamische animierte Symbole spiegeln die aktuellen Wetterbedingungen wider, während sich der Hintergrund entsprechend anpasst. Unsere intuitive Benutzeroberfläche gewährleistet einen mühelosen Zugang zu den neuesten Wetterinformationen.",
  },

  projectKoreanSkincareDescriptionWork: {
    EN: "Dive into the world of Korean skincare with our interactive website/app. Explore curated skincare routines and products, and stay connected with us through our contact form. Experience a seamless interface designed to enhance your skincare journey.",
    DE: "Tauchen Sie ein in die Welt der koreanischen Hautpflege mit unserer interaktiven Website/App. Entdecken Sie kuratierte Hautpflegeroutinen und Produkte und bleiben Sie über unser Kontaktformular mit uns verbunden. Erleben Sie eine nahtlose Benutzeroberfläche, die entwickelt wurde, um Ihre Hautpflege-Reise zu verbessern.",
  },

  projectWorldClocksDescriptionWork: {
    EN: "Explore global time zones effortlessly with our World Clock web application. Track time in various cities around the world, including London, New York, Seoul, and more. Seamlessly switch between locations using our intuitive interface. Created with passion by Ella Graf, this project is open-source and available on GitHub. Stay connected to different time zones with World Clock! 🌐⏰",
    DE: "Entdecken Sie mühelos verschiedene Zeitzonen auf der ganzen Welt mit unserer Webanwendung World Clock. Verfolgen Sie die Uhrzeiten in verschiedenen Städten weltweit, darunter London, New York, Seoul und mehr. Wechseln Sie nahtlos zwischen den Standorten mit unserer benutzerfreundlichen Oberfläche. Dieses Projekt wurde mit Leidenschaft von Ella Graf erstellt und ist auf GitHub als Open Source verfügbar. Bleiben Sie mit ´World Clock´ in verschiedenen Zeitzonen verbunden! 🌐⏰",
  },

  projectRhymeAlchemistDescriptionWork: {
    EN: "Immerse yourself in the world of poetry with our AI Rhyme Alchemist. Create beautiful poems effortlessly with the power of AI. Our project, Rhyme Alchemist, allows you to craft rhyming poems seamlessly. Simply input a word you'd like to rhyme, and let the magic of AI take over. This AI project was crafted with love by Ella Graf and is open-sourced on GitHub. It's also hosted on Netlify. Give it a try and unleash your creativity! 📝✨",
    DE: "Tauchen Sie ein in die Welt der Poesie mit unserem AI-Rhyme-Alchemist. Erstellen Sie mühelos wunderschöne Gedichte mit der Kraft der Künstlichen Intelligenz. Unser Projekt, Rhyme Alchemist, ermöglicht es Ihnen, Gedichte zu kreieren, die sich reimen. Geben Sie einfach ein Wort ein, das Sie reimen möchten, und lassen Sie die Magie der KI wirken. Dieses AI-Projekt wurde mit Leidenschaft von Ella Graf entwickelt und ist auf GitHub als Open Source verfügbar. Es wird auch von Netlify gehostet. Probieren Sie es aus und lassen Sie Ihrer Kreativität freien Lauf! 📝✨",
  },
  projectWeatherAppDescriptionWork: {
    EN: "Stay ahead of the elements with our Weather Insights App. 🌦️ Enter the city of your choice and instantly access real-time information including current time, humidity, and wind speed. The app's clean and adaptable design ensures a seamless experience on both desktop and smartphone screens. 📱 Dive deeper into the forecast with a detailed outlook for the next 5 days, providing you with the essential information you need for any plans. Embrace weather awareness in a user-friendly package, tailored for your convenience. 🌐",
    DE: "Bleiben Sie mit unserer Wetter Insights App stets einen Schritt voraus. 🌦️ Geben Sie die Stadt Ihrer Wahl ein und erhalten Sie sofortigen Zugriff auf Echtzeitinformationen wie aktuelle Uhrzeit, Luftfeuchtigkeit und Windgeschwindigkeit. Das saubere und anpassungsfähige Design der App sorgt für ein nahtloses Erlebnis sowohl auf Desktop- als auch auf Smartphone-Bildschirmen. 📱 Tauchen Sie tiefer in die Vorhersage ein mit einem detaillierten Ausblick für die nächsten 5 Tage, der Ihnen die wesentlichen Informationen liefert, die Sie für jede Planung benötigen. Nutzen Sie Wetterbewusstsein in einem benutzerfreundlichen Paket, maßgeschneidert für Ihre Bequemlichkeit. 🌐",
  },

  FrontendWork: {
    EN: "Frontend Developer Skills",
    DE: "Frontend-Entwickler-Fähigkeiten",
  },
  FrontendWork1Description: {
    EN: "Proficient in creating webpage structures using HTML, styling elements with CSS, and implementing interactive features through JavaScript (Vanilla & React).",
    DE: "Versiert in der Erstellung von Webseitenstrukturen mit HTML, dem Styling von Elementen mit CSS und der Implementierung interaktiver Funktionen mit JavaScript (Vanilla & React).",
  },
  FrontendWork2Titel: {
    EN: "Responsive Web Design",
    DE: "Responsives Webdesign",
  },

  FrontendWork2Description: {
    EN: "Experience in developing websites that adapt to various devices and screen sizes to ensure an optimal user experience.",
    DE: "Erfahrung in der Entwicklung von Websites, die sich an verschiedene Geräte und Bildschirmgrößen anpassen, um eine optimale Benutzererfahrung zu gewährleisten.",
  },

  FrontendWork3Titel: {
    EN: "JavaScript Frameworks and Libraries",
    DE: "JavaScript-Frameworks und -Bibliotheken",
  },

  FrontendWork3Description: {
    EN: "Deep expertise in at least one JavaScript framework such as React, Angular, or Vue.js to create complex and engaging user interfaces.",
    DE: "Tiefgreifendes Fachwissen in mindestens einem JavaScript-Framework wie React, Angular oder Vue.js, um komplexe und ansprechende Benutzeroberflächen zu erstellen.",
  },

  FrontendWork4Titel: {
    EN: "Version Control/Git",
    DE: "Version Control/Git",
  },

  FrontendWork4Description: {
    EN: "Proficient in using version control systems, particularly Git, for collaborative development and code management.",
    DE: "Professionell im Umgang mit Versionskontrollsystemen, insbesondere Git, für die kollaborative Entwicklung und das Code-Management.",
  },

  FrontendWork5Titel: {
    EN: "Build Tools/Task Runners",
    DE: "Build Tools/Task Runners",
  },

  FrontendWork5Description: {
    EN: "Experience with build tools like Webpack or task runners like Gulp to streamline the development workflow and optimize code.",
    DE: "Erfahrung mit Build-Tools wie Webpack oder Task-Runnern wie Gulp, um den Entwicklungsworkflow zu optimieren und den Code zu optimieren.",
  },

  FrontendWork6Titel: {
    EN: "Web Performance Optimization",
    DE: "Web-Performance-Optimierung",
  },

  FrontendWork6Description: {
    EN: "Knowledge of techniques to optimize website performance, including lazy loading, code splitting, and minimizing HTTP requests.",
    DE: "Kenntnisse über Techniken zur Optimierung der Website-Performance, einschließlich Lazy Loading, Code-Splitting und Minimierung von HTTP-Anfragen",
  },

  FrontendWork7Titel: {
    EN: "Cross-Browser Compatibility",
    DE: "Kompatibilität mit verschiedenen Browsern",
  },

  FrontendWork7Description: {
    EN: "Ensuring that web applications work consistently across various browsers and platforms, addressing compatibility issues.",
    DE: "Sicherstellen, dass Webanwendungen konsistent auf verschiedenen Browsern und Plattformen funktionieren, indem Kompatibilitätsprobleme behoben werden.",
  },

  FrontendWork8Titel: {
    EN: "Testing/Debugging",
    DE: "Testen/Debuggen",
  },

  FrontendWork8Description: {
    EN: "Proficient in testing methodologies and debugging techniques to identify and resolve issues during the development process.",
    DE: "Versiert in Testmethodologien und Debugging-Techniken, um Probleme während des Entwicklungsprozesses zu identifizieren und zu beheben.",
  },

  FrontendWork9Titel: {
    EN: "UI/UX Design Principles",
    DE: "UI/UX Design Grundlagen",
  },

  FrontendWork9Description: {
    EN: "Understanding of user interface and user experience design principles to create visually appealing and user-friendly interfaces.",
    DE: "Verständnis von Benutzeroberflächen- und Benutzererfahrungsdesignprinzipien zur Erstellung optisch ansprechender und benutzerfreundlicher Oberflächen.",
  },

  FrontendWork10Titel: {
    EN: "Communication/Collaboration",
    DE: "Kommunikation/Zusammenarbeit",
  },

  FrontendWork10Description: {
    EN: "Effective communication skills and ability to collaborate with cross-functional teams, including designers and backend developers.",
    DE: "Effektive Kommunikationsfähigkeiten und die Fähigkeit zur Zusammenarbeit mit funktionsübergreifenden Teams, einschließlich Designern und Backend-Entwicklern.",
  },

  LearnMebtn: {
    EN: "Learn more about me",
    DE: "Entdecke mehr über mich",
  },

  /*contact*/

  ContactMeText: {
    EN: "Feel free to reach out for more information or collaboration. I'm available for any inquiries, suggestions, or projects. Simply fill out the form, and I'll get back to you as soon as possible.",
    DE: "Fühl dich frei, mich für weitere Informationen oder Zusammenarbeit zu kontaktieren. Ich bin für alle Anfragen, Vorschläge oder Projekte verfügbar. Fülle einfach das Formular aus, und ich werde mich so schnell wie möglich bei dir melden",
  },

  ThankYouMessage: {
    EN: "Thanks for reaching out! I'll be in touch shortly!",
    DE: "Vielen Dank für die Kontaktaufnahme! Ich werde mich in Kürze melden.",
  },

  SendMessageBtn: {
    EN: "Send Message",
    DE: "Nachricht senden",
  },
};

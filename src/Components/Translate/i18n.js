import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
          tit1: "Hi! My name is Grzegorz, you can call me Greg!",
          tit2: "I'm Full Stack Web Developer,",
          tit3: "And Udemy certified Alumni.",
          button1:"Certificate",
          button2:"Resume",
          linked1: "https://grzesiek90.github.io/mycourses/postpage/fs/crteng1.html",
          linked2: "https://grzesiek90.github.io/GrzegorzKuzeraCV/cveng.html",
          scrl: "🢃  Scroll down to see the rest of the portfolio! 🢃",
          about: "About me:",
          a1: "I'm a 33 years old Polish man living in Benejuzar, Alicante, Spain. The qualities that distinguish me are the ability to solve problems, an open perspective to new solutions, full dedication to my duties, and real pleasure in my work. In addition, at this point I speak three languages at a high level, they are Polish, Spanish and English.",
          a2: "I am looking for work preferably in the form of remote work from my place of residence, but it is also not excluded to work on site in a particular company, everything is a matter of agreement. Above all, I focus on personal development, good atmosphere, and adequate remuneration. Unfortunately, at this time I can not offer work experience in the fields of programming, for that I can assure you that I will be a great person for the job due to my conscientiousness, punctuality, diligence, persistence in achieving the goal, the ability to quickly learn new things, and flexibility to adapt to the situation.",
          programming: "A little bit of history and currently what I do:",
          a3: "My adventure with programming began in mid-2022, however, due to the requirement to balance studies and work my first course The Complete Web Developer in 2023: Zero to Mastery was completed on December 23, 2022. I completed all the projects related to the course, and a few others to practice the knowledge gained from the course. You can see the results of the work further down in the portfolio. ",
          a4: "I am currently in the middle of an assignment to build a website for a local small business, in addition to practicing the skills I learned in the course, learning from other courses to improve my skills, learn about new programming languages, programming tools, and new developments in programming fields.",
          hobby: "My hobby:",
          a5: "My interests are computer science in all forms, technological innovations and technology but I am most interested in the programming and design side of new or existing projects. In addition, I enjoy music, meditation and physical development. Due to my sedentary work style, the gym and outdoor sports have become a great addition to my day.",
          projects: "Some of my projects:",
          app1: "This was my very first web page, made only with HTML. There are some photos from some of my trips.",
          app2: "Is a Simple-Calculator web page made mostly in HTML. Aslo have some styling CSS and code JavaScript.",
          app3: "This is a animation of moving circles made mostly in CSS. Was made for event Animation-Nation.",
          app4: "Is a Background Generator made mostly in JavaScript, but also slightly CSS and HTML.",
          app5: "Kitten Friends app made in React JS. Is using fetching and advanced functions like searching in real time. Is fetched to simple database.",
          app6: "Pokedex App made in React JS. Is fetching to pokemon Api database and responding with all 151 pokemons from serie Red and Blue.",
          app7: "Smart Brain App, made in React JS. Have own backend and data base. Log in, paste photo link with your face, or random one and see how app will find it.",
          app8: "The Travel Finder app, created in ReactJS, refers to Google's API. It is designed to search for a trip destination and find restaurants, hotels or attractions.",
          tech1: "Languages, tools, and solutions which I was studing and using till now:",
          tech2: "Level of my skills in my opinion:",
          cf1: "Hire Me!",
          cf2: "My address:",
          cf3: "Contact with me:",
          cfb1: "Thank you for contacting me!",
          cfb2: "I will be in touch with you soon!",
          cfb3: "Send a message",
        }
      },
      es: {
        translation: {
          tit1: "Hola! Me llamo Grzegorz, pero puedes llamarme Greg!",
          tit2: "Soy Full Stack Web Developer,",
          tit3: "Y Alumni certificado por Udemy.",
          button1:"Certificado",
          button2:"Curriculum Vitae",
          linked1: "https://grzesiek90.github.io/mycourses/postpage/fs/crtesp1.html",
          linked2: "https://grzesiek90.github.io/GrzegorzKuzeraCV/cvesp.html",
          scrl: "🢃  Desplácese hacia abajo para ver el resto de la cartera! 🢃",
          about: "Sobre mi:",
          a1: "Soy un hombre polaco de 33 años que vive en Benejuzar, Alicante, España. Las cualidades que me distinguen son la capacidad para resolver problemas, una perspectiva abierta a nuevas soluciones, plena dedicación en el desempeño de mis funciones y un verdadero placer en mi trabajo. Además, en este momento hablo tres idiomas a un nivel alto, que son el polaco, el español y el inglés.",
          a2: "Busco trabajo, preferiblemente en forma de trabajo a distancia desde mi lugar de residencia, pero tampoco se excluye el trabajo presencial en una empresa determinada, todo es cuestión de ponerse de acuerdo. Ante todo, busco el desarrollo personal, un buen ambiente y una remuneración adecuada. Desafortunadamente, en este momento no puedo ofrecer experiencia laboral en el campo de la programación, pero puedo asegurarles que seré una gran persona para el trabajo debido a mi esmero, puntualidad, diligencia, persistencia en la consecución del objetivo, capacidad para aprender rápidamente cosas nuevas y flexibilidad para adaptarme a la situación.",
          programming: "Un poco de historia y actualmente lo que hago:",
          a3: "Mi aventura en la programación comenzó a mediados de 2022, sin embargo debido a la exigencia de compaginar estudios y trabajo mi primer curso The Complete Web Developer en 2023: Zero to Mastery finalizó el 23 de diciembre de 2022. Completé todos los proyectos relacionados con el curso y algunos otros para poner en práctica los conocimientos adquiridos en el curso. Puede ver los resultados del trabajo más abajo en la cartera. ",
          a4: "Actualmente estoy en el proceso de completar una tarea para construir un sitio web para una pequeña empresa local, además de practicar las habilidades aprendidas en el curso, aprender de otros cursos para mejorar mis habilidades, aprender sobre nuevos lenguajes de programación, herramientas de programación y nuevos desarrollos en los campos de programación.",
          hobby: "Mi hobby:",
          a5: "Mis intereses son la informática en todas sus formas, las innovaciones tecnológicas y la tecnología, pero lo que más me interesa es la parte de programación y diseño de proyectos nuevos o ya existentes. Aparte de eso, me gusta la música, la meditación y el desarrollo físico. Debido a mi estilo de trabajo sedentario, el gimnasio y los deportes al aire libre se han convertido en un gran complemento de mi jornada.",
          projects: "Algunos de mis proyectos:",
          app1: "Esta fue mi primera página web, hecha sólo con HTML. Hay algunas fotos de algunos de mis viajes.",
          app2: "Es una página web Simple-Calculator hecha principalmente en HTML. También tiene algunos estilos CSS y código JavaScript.",
          app3: "Esta es una animación de círculos en movimiento hecha principalmente en CSS. Fue hecha para el evento Animation-Nation.",
          app4: "Es un generador de fondos hecho principalmente en JavaScript, pero también ligeramente en CSS y HTML.",
          app5: "Kitten Friends aplicación hecha en React JS. Utiliza fetching y funciones avanzadas como la búsqueda en tiempo real. Se obtiene de una base de datos simple.",
          app6: "Pokedex App hecha en React JS. Es la obtención de la base de datos Api pokemon y responde con todos los 151 pokemons de la serie Roja y Azul.",
          app7: "Smart Brain App, hecha en React JS. Tiene propio backend y base de datos. Iniciar sesión, pegar enlace de la foto con su cara, o uno al azar y ver cómo la aplicación va a encontrar.",
          app8: "La aplicación Travel Finder, creada en ReactJS, hace referencia a la API de Google. Está diseñada para buscar el destino de un viaje y encontrar restaurantes, hoteles o atracciones.",
          tech1: "Lenguajes, herramientas y soluciones que he estudiado y utilizado hasta ahora:",
          tech2: "Nivel de mis habilidades en mi opinión:",
          cf1: "Contrátame!",
          cf2: "Mi dirección:",
          cf3: "Contacte conmigo:",
          cfb1: "Gracias por ponerse en contacto conmigo!",
          cfb2: "En breve me pondré en contacto con usted!",
          cfb3: "Enviar mensaje",
        }
      },
      pl: {
        translation: {
          tit1: "Witaj! Mam na imię Grzegorz!",
          tit2: "Jestem Full Stack Web Deweloperem,",
          tit3: "I certyfikowanym absolwentem Udemy.",
          button1:"Certyfikat",
          button2:"Curriculum Vitae",
          linked1: "https://grzesiek90.github.io/mycourses/postpage/fs/crtpl1.html",
          linked2: "https://grzesiek90.github.io/GrzegorzKuzeraCV/cvpl.html",
          scrl: "🢃  Przewiń w dół by zobaczyć resztę portfolio! 🢃",
          about: "O mnie:",
          a1: "Jestem 33 letnim Polakiem mieszkającym w Benejuzar, powiat Alicante, Hiszpania. Cechami wyróżniającymi mnie są zdolność do rozwiązywania problemów, otwarta perspektywa na nowe rozwiązania, pełne poświęcenie w wykonywaniu obowiązków, oraz realne czerpanie przyjemności z wykonywanej pracy. Dodatkowo na ten moment posługuje się trzema językami na poziomie wysokim, są to Polski, Hiszpański oraz Angielski.",
          a2: "Poszukuje pracy najlepiej w formie zdalnej z mojego miejsca zamieszkania, lecz nie wykluczona jest również praca na miejscu w danej firmie, wszystko jest kwestią porozumienia. Przede wszystkim stawiam na rozwój osobisty, dobrą atmosferę, oraz adekwatne wynagrodzenie. Niestety na ten moment nie mogę zaoferować doświadczenia zawodowego z dziedzin programowania, za to mogę zapewnić, że będę świetną osobą na stanowisko pracy ze względu na moją sumienność, punktualność, pracowitość, upór w dążeniu do osiągnięcia celu, możliwości szybkiej nauki nowych rzeczy, oraz elastyczność w dostosowaniu się do sytuacji.",
          programming: "Trochę historii i aktualnie co robię:",
          a3: "Moja przygoda z programowaniem zaczęła się w połowie 2022 roku, jednakże ze względu na wymóg pogodzenia nauki oraz pracy mój pierwszy kurs The Complete Web Developer in 2023: Zero to Mastery ukończyłem 23 grudnia 2022. Wykonałem wszystkie projekty związane z kursem, oraz kilka innych, które miały za zadanie praktykować wiedzę zdobytą z kursu. Można zobaczyć efekty pracy w dalszej części portfolio. ",
          a4: "Aktualnie jestem w trakcie wykonywania zlecenia budowy strony internetowej dla lokalnej małej firmy, poza tym praktykuje umiejętności zdobyte na kursie, oraz uczę się z innych kursów dla poprawy umiejętności, poznania nowych języków programowania, narzędzi programistycznych oraz nowych rozwiązań w dziedzinach programowania.",
          hobby: "Moje hobby:",
          a5: "Moimi zainteresowaniami są informatyka w każdej postaci, nowinki technologiczne i technologia lecz najbardziej interesuje mnie strona programowania i projektowania nowych bądź istniejących projektów. Poza tym lubuję się w muzyce, medytacji oraz rozwoju fizycznym. Ze względu na siedzący tryb pracy siłownia i sport na zewnątrz stał się dla mnie świetnym uzupełnieniem dnia.",
          projects: "Niektóre z moich projektów:",
          app1: "To była moja pierwsza strona internetowa, zrobiona tylko za pomocą HTML. Znajduje się na niej kilka zdjęć z niektórych moich podróży.",
          app2: "Jest to strona internetowa Simple-Calculator wykonana głównie w HTML. Posiada również trochę stylizacji CSS oraz kod JavaScript.",
          app3: "Jest to animacja ruchomych okręgów wykonana w większości w CSS. Została wykonana na event Animation-Nation.",
          app4: "Jest to generator tła wykonanym głównie w JavaScript, ale także w niewielkim stopniu w CSS i HTML.",
          app5: "Aplikacja Kitten Friends wykonana w React JS. Wykorzystuje fetching oraz zaawansowane funkcje jak wyszukiwanie w czasie rzeczywistym. Pobiera dane z prostej bazy danych.",
          app6: "Aplikacja Pokedex wykonana w React JS. Pobiera baze danych Pokemon Api i odpowiada listą wszystkich 151 pokemonami z serii Red i Blue.",
          app7: "Smart Brain App, wykonana w React JS. Posiada własny backend i bazę danych. Zaloguj się, wklej link ze zdjęciem swojej twarzy lub losowej i zobacz jak aplikacja ją znajduje.",
          app8: "Aplikacja Travel Finder stworzona w ReactJS, nawiązuje do API Google. Ma za zadanie wyszukać cel podróży wycieczki i znaleźć restauracje, hotele bądź atrakcje.",
          tech1: "Języki, narzędzia i rozwiązania, których uczyłem się i używam do teraz:",
          tech2: "Poziom moich umiejętności w mojej ocenie:",
          cf1: "Zatrudnij mnie!",
          cf2: "Mój adres:",
          cf3: "Kontakt ze mną:",
          cfb1: "Dziękuję że się ze mną skontaktowałeś!",
          cfb2: "Wkrótce się z Tobą skontaktuję!",
          cfb3: "Wyślij wiadomość",
        }
      }
    }
  });

export default i18n;
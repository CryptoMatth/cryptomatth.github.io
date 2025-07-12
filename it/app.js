const { useState, useEffect } = React;

// Oggetto per le traduzioni di tutto il contenuto testuale
const translations = {
  it: {
    common: { // Traduzioni comuni a più pagine o elementi globali
      title: "Matematica & Crittografia",
      searchPlaceholder: "Cerca nel sito...",
      indexTitle: "Indice",
      footerText: "Matematica & Crittografia. Tutti i diritti riservati.",
      pageNotFound: "Pagina non trovata",
      pageNotFoundText: "Siamo spiacenti, la pagina che stai cercando non esiste.",
      searchResultsTitle: "Risultati della Ricerca per:",
      noSearchResults: "Nessun risultato trovato per la tua ricerca.",
      backToHome: "Torna alla Home",
    },
    sidebar: { // Traduzioni per la sidebar, ora con struttura gerarchica
      items: [
        { key: 'home', title: "Introduzione al Progetto" },
        { key: 'matematica', title: "Fondamenti Matematici" },
        {
          key: 'crittografia',
          title: "Principi di Crittografia",
          children: [
            {
              key: 'symmetric',
              title: "Crittografia Simmetrica",
              children: [
                { key: 'caesar', title: "Cifrario di Cesare" },
                { key: 'vigenere', title: "Cifrario di Vigenère" }
              ]
            },
            {
              key: 'asymmetric',
              title: "Crittografia Asimmetrica",
              children: [
                { key: 'rsa', title: "Algoritmo RSA" }
              ]
            }
          ]
        },
        { key: 'algoritmi', title: "Algoritmi Comuni" },
        { key: 'applicazioni', title: "Applicazioni Pratiche" },
        { key: 'contatti', title: "Contatti" }, // Voce per la pagina Contatti
        { key: 'risorse', title: "Risorse Aggiuntive" },
      ]
    },
    homePage: { // Traduzioni specifiche per la HomePage
      projectDescription: "Descrizione del Progetto: Matematica e Crittografia",
      welcomeTitle: "Benvenuti nel Mondo della Sicurezza Digitale",
      introText1: "Questo progetto è dedicato all'esplorazione dell'affascinante intersezione tra la matematica pura e l'arte della crittografia. La crittografia, la scienza di proteggere le comunicazioni, si basa profondamente su concetti matematici complessi, dalla teoria dei numeri all'algebra astratta. Il nostro obiettivo è demistificare questi argomenti, rendendoli accessibili a studenti, appassionati e professionisti.",
      introText2: "Attraverso articoli chiari, esempi pratici e illustrazioni intuitive, vi guideremo attraverso i principi fondamentali che rendono sicure le nostre interazioni digitali quotidiane, dalle transazioni bancarie online alla messaggistica istantanea.",
      imageAlt: "Immagine concettuale di crittografia e matematica",
      objectivesTitle: "I Nostri Obiettivi",
      objective1: "Spiegare i concetti matematici alla base della crittografia moderna.",
      objective2: "Analizzare i principali algoritmi crittografici (RSA, AES, Elliptic Curve Cryptography).",
      objective3: "Illustrare le applicazioni pratiche della crittografia nella vita di tutti i giorni.",
      objective4: "Promuovere la comprensione dell'importanza della sicurezza informatica.",
      objective5: "Fornire risorse e strumenti per approfondire gli studi.",
      audienceTitle: "A Chi è Rivolto?",
      audienceText: "Questo sito è pensato per chiunque sia curioso di capire come funziona la sicurezza digitale. Che tu sia uno studente di informatica o matematica, un professionista della sicurezza, o semplicemente una persona interessata a proteggere la propria privacy online, troverai contenuti utili e stimolanti. Non sono richieste conoscenze pregresse avanzate, solo una mente aperta e la voglia di imparare!",
      contactTitle: "Contattaci", // Questo titolo è per la sezione nella home, ora non più usata
      contactText: "Per domande, suggerimenti o collaborazioni, non esitate a contattarci all'indirizzo", // Questo testo è per la sezione nella home, ora non più usata
    },
    matematicaPage: { // Traduzioni specifiche per la pagina Fondamenti Matematici
      title: "Fondamenti Matematici",
      content: "Qui troverai articoli e risorse sui fondamenti matematici che sono alla base della crittografia, come la teoria dei numeri, l'algebra astratta e la complessità computazionale. L'algebra modulare è un concetto chiave in molti algoritmi crittografici."
    },
    crittografiaPage: { // Traduzioni specifiche per la pagina Crittografia
      title: "Principi di Crittografia", // Titolo generale della pagina
      introText: "La crittografia è la pratica e lo studio delle tecniche per una comunicazione sicura in presenza di terzi (avversari). Più in generale, si occupa di costruire e analizzare protocolli che impediscono a terzi o al pubblico di leggere messaggi privati.",
      symmetricCrypto: "Crittografia Simmetrica",
      symmetricIntro: "Nella crittografia simmetrica, la stessa chiave segreta viene utilizzata sia per la cifratura che per la decifratura. È efficiente e veloce, ideale per grandi quantità di dati.",
      asymmetricCrypto: "Crittografia Asimmetrica",
      asymmetricIntro: "La crittografia asimmetrica, o crittografia a chiave pubblica, utilizza una coppia di chiavi: una pubblica e una privata. La chiave pubblica può essere condivisa liberamente, mentre la chiave privata deve rimanere segreta. È fondamentale per la sicurezza delle comunicazioni moderne e le firme digitali. Un esempio è l'algoritmo RSA, che si basa su problemi di algebra modulare.",
      caesarCipher: "Cifrario di Cesare",
      caesarIntro: "Il Cifrario di Cesare è uno dei più antichi e semplici cifrari di sostituzione. È un tipo di cifrario a sostituzione monoalfabetica in cui ogni lettera nel testo in chiaro viene sostituita da una lettera che si trova un certo numero di posizioni più avanti o più indietro nell'alfabeto.",
      vigenereCipher: "Cifrario di Vigenère",
      vigenereIntro: "Il Cifrario di Vigenère è un metodo di cifratura polialfabetico che utilizza una serie di cifrari di Cesare diversi in sequenza, basati sulle lettere di una parola chiave. È stato considerato un cifrario molto robusto per secoli.",
    },
    algoritmiPage: { // Traduzioni specifiche per la pagina Algoritmi Comuni
      title: "Algoritmi Comuni",
      content: "Questa sezione esplora gli algoritmi crittografici più diffusi e le loro applicazioni, come RSA, AES, e le curve ellittiche. L'algoritmo RSA, ad esempio, fa ampio uso di concetti di algebra modulare."
    },
    applicazioniPage: { // Traduzioni specifiche per la pagina Applicazioni Pratiche
      title: "Applicazioni Pratiche",
      content: "Scopri come la crittografia viene utilizzata nella vita di tutti i giorni, dalla sicurezza delle transazioni online alle VPN e alle blockchain."
    },
    risorsePage: { // Traduzioni specifiche per la pagina Risorse Aggiuntive
      title: "Risorse Aggiuntive",
      content: "Una raccolta di libri, articoli, corsi online e strumenti per approfondire la matematica e la crittografia."
    },
    rsaPage: { // Nuove traduzioni per la pagina RSA
      title: "Algoritmo RSA",
      intro: "RSA (Rivest–Shamir–Adleman) è uno dei primi algoritmi a chiave pubblica ed è ampiamente utilizzato per la trasmissione sicura dei dati. Si basa sulla difficoltà computazionale di fattorizzare numeri interi grandi, ovvero trovare i due numeri primi che, moltiplicati tra loro, danno il numero originale.",
      keyGenerationTitle: "Generazione delle Chiavi",
      keyGenerationSteps: [
        "Scegli due numeri primi grandi e distinti, $p$ e $q$.",
        "Calcola $n = pq$. Questo è il modulo per le chiavi pubblica e privata.",
        "Calcola la funzione totiente di Eulero: $\\phi(n) = (p-1)(q-1)$.",
        "Scegli un intero $e$ (esponente pubblico) tale che $1 < e < \\phi(n)$ e $\\gcd(e, \\phi(n)) = 1$.",
        "Calcola $d$ (esponente privato) tale che $d \\cdot e \\equiv 1 \\pmod{\\phi(n)}$.",
        "La chiave pubblica è $(e, n)$. La chiave privata è $(d, n)$.",
      ],
      encryptionTitle: "Cifratura",
      encryptionFormula: "$C = M^e \\pmod{n}$",
      encryptionDescription: "Dove $M$ è il messaggio in chiaro (un numero intero $0 \\le M < n$), $e$ è l'esponente pubblico e $n$ è il modulo.",
      decryptionTitle: "Decifratura",
      decryptionFormula: "$M = C^d \\pmod{n}$",
      decryptionDescription: "Dove $C$ è il testo cifrato, $d$ è l'esponente privato e $n$ è il modulo.",
      imageAlt: "Diagramma concettuale dell'algoritmo RSA",
      note: "Nota: Le formule sono visualizzate usando HTML e CSS per la massima compatibilità."
    },
    contactPage: { // Nuove traduzioni per la pagina Contatti (semplificata)
      title: "Contattaci",
      intro: "Per domande, suggerimenti o collaborazioni, non esitare a contattarci. Siamo sempre felici di ricevere feedback e di connetterci con la nostra comunità.",
      emailAddress: "info@matematicaecrittografia.it",
      emailPrompt: "Inviaci una email",
    }
  },
  en: {
    common: {
      title: "Mathematics & Cryptography",
      searchPlaceholder: "Search the site...",
      indexTitle: "Index",
      footerText: "Mathematics & Cryptography. All rights reserved.",
      pageNotFound: "Page Not Found",
      pageNotFoundText: "Sorry, the page you are looking for does not exist.",
      searchResultsTitle: "Search Results for:",
      noSearchResults: "No results found for your search.",
      backToHome: "Back to Home",
    },
    sidebar: {
      items: [
        { key: 'home', title: "Introduction to the Project" },
        { key: 'matematica', title: "Mathematical Foundations" },
        {
          key: 'crittografia',
          title: "Principles of Cryptography",
          children: [
            {
              key: 'symmetric',
              title: "Symmetric Cryptography",
              children: [
                { key: 'caesar', title: "Caesar Cipher" },
                { key: 'vigenere', title: "Vigenere Cipher" }
              ]
            },
            {
              key: 'asymmetric',
              title: "Asymmetric Cryptography",
              children: [
                { key: 'rsa', title: "RSA Algorithm" }
              ]
            }
          ]
        },
        { key: 'algoritmi', title: "Common Algorithms" },
        { key: 'applicazioni', title: "Practical Applications" },
        { key: 'risorse', title: "Additional Resources" },
        { key: 'contatti', title: "Contact Us" }, // New entry for Contact page
      ]
    },
    homePage: {
      projectDescription: "Project Description: Mathematics and Cryptography",
      welcomeTitle: "Welcome to the World of Digital Security",
      introText1: "This project is dedicated to exploring the fascinating intersection between pure mathematics and the art of cryptography. Cryptography, the science of securing communications, relies deeply on complex mathematical concepts, from number theory to abstract algebra. Our goal is to demystify these topics, making them accessible to students, enthusiasts, and professionals.",
      introText2: "Through clear articles, practical examples, and intuitive illustrations, we will guide you through the fundamental principles that secure our daily digital interactions, from online banking transactions to instant messaging.",
      imageAlt: "Conceptual image of cryptography and mathematics",
      objectivesTitle: "Our Objectives",
      objective1: "Explain the mathematical concepts underlying modern cryptography.",
      objective2: "Analyze key cryptographic algorithms (RSA, AES, Elliptic Curve Cryptography).",
      objective3: "Illustrate practical applications of cryptography in everyday life.",
      objective4: "Promote understanding of the importance of cybersecurity.",
      objective5: "Provide additional resources and tools for further study.",
      audienceTitle: "Who is it For?",
      audienceText: "This site is designed for anyone curious about how digital security works. Whether you are a computer science or mathematics student, a security professional, or simply someone interested in protecting your online privacy, you will find useful and stimulating content. No advanced prior knowledge is required, just an open mind and a desire to learn!",
      contactTitle: "Contact Us", // This title is for the section in home, now not used
      contactText: "For questions, suggestions, or collaborations, do not hesitate to contact us at", // This text is for the section in home, now not used
    },
    matematicaPage: {
      title: "Mathematical Foundations",
      content: "Here you will find articles and resources on the mathematical foundations underlying cryptography, such as number theory, abstract algebra, and computational complexity. Modular algebra is a key concept in many cryptographic algorithms."
    },
    crittografiaPage: {
      title: "Principles of Cryptography",
      introText: "Cryptography is the practice and study of techniques for secure communication in the presence of third parties (adversaries). More generally, it is about constructing and analyzing protocols that prevent third parties or the public from reading private messages.",
      symmetricCrypto: "Symmetric Cryptography",
      symmetricIntro: "In symmetric-key cryptography, the same secret key is used for both encryption and decryption. It is efficient and fast, ideal for large amounts of data.",
      asymmetricCrypto: "Asymmetric Cryptography",
      asymmetricIntro: "Asymmetric-key cryptography, or public-key cryptography, uses a pair of keys: a public key and a private key. The public key can be freely shared, while the private key must remain secret. It is fundamental for modern secure communications and digital signatures. An example is the RSA algorithm, which relies on modular algebra problems.",
      caesarCipher: "Caesar Cipher",
      caesarIntro: "The Caesar Cipher is one of the oldest and simplest substitution ciphers. It is a type of monoalphabetic substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down or up the alphabet.",
      vigenereCipher: "Vigenere Cipher",
      vigenereIntro: "The Vigenere Cipher is a method of polyalphabetic encryption that uses a series of different Caesar ciphers in sequence, based on the letters of a keyword. It was considered a very robust cipher for centuries.",
    },
    algoritmiPage: {
      title: "Common Algorithms",
      content: "This section explores the most common cryptographic algorithms and their applications, such as RSA, AES, and elliptic curves. The RSA algorithm, for example, makes extensive use of modular algebra concepts."
    },
    applicazioniPage: {
      title: "Practical Applications",
      content: "Discover how cryptography is used in everyday life, from securing online transactions to VPNs and blockchains."
    },
    risorsePage: {
      title: "Additional Resources",
      content: "A collection of books, articles, online courses, and tools to deepen your understanding of mathematics and cryptography."
    },
    rsaPage: { // New translations for RSA page
      title: "RSA Algorithm",
      intro: "RSA (Rivest–Shamir–Adleman) is one of the first public-key cryptosystems and is widely used for secure data transmission. It relies on the computational difficulty of factoring large integers, that is, finding the two large prime numbers that multiply to the original number.",
      keyGenerationTitle: "Key Generation",
      keyGenerationSteps: [
        "Choose two large and distinct prime numbers, $p$ and $q$.",
        "Calculate $n = pq$. This is the modulus for both the public and private keys.",
        "Calculate Euler's totient function: $\\phi(n) = (p-1)(q-1)$.",
        "Scegli un intero $e$ (public exponent) tale che $1 < e < \\phi(n)$ e $\\gcd(e, \\phi(n)) = 1$.",
        "Calculate $d$ (private exponent) such that $d \\cdot e \\equiv 1 \\pmod{\\phi(n)}$.",
        "The public key is $(e, n)$. The private key is $(d, n)$.",
      ],
      encryptionTitle: "Encryption",
      encryptionFormula: "$C = M^e \\pmod{n}$",
      encryptionDescription: "Where $M$ is the plaintext message (an integer $0 \\le M < n$), $e$ is the public exponent, and $n$ is the modulus.",
      decryptionTitle: "Decryption",
      decryptionFormula: "$M = C^d \\pmod{n}$",
      decryptionDescription: "Where $C$ is the ciphertext, $d$ is the private exponent, and $n$ is the modulus.",
      imageAlt: "Diagramma concettuale dell'algoritmo RSA",
      note: "Nota: Le formule sono visualizzate usando HTML e CSS per la massima compatibilità."
    },
    contactPage: { // Nuove traduzioni per la pagina Contatti (semplificata)
      title: "Contattaci",
      intro: "Per domande, suggerimenti o collaborazioni, non esitare a contattarci. Siamo sempre felici di ricevere feedback e di connetterci con la nostra comunità.",
      emailAddress: "info@matematicaecrittografia.it",
      emailPrompt: "Inviaci una email",
    }
  },
};

// Oggetto che contiene tutto il contenuto testuale ricercabile, organizzato per lingua e chiave
const pageTextContent = {
  it: {
    home: translations.it.homePage.projectDescription + " " +
          translations.it.homePage.welcomeTitle + " " +
          translations.it.homePage.introText1 + " " +
          translations.it.homePage.introText2 + " " +
          translations.it.homePage.objectivesTitle + " " +
          translations.it.homePage.objective1 + " " +
          translations.it.homePage.objective2 + " " +
          translations.it.homePage.objective3 + " " +
          translations.it.homePage.objective4 + " " +
          translations.it.homePage.objective5 + " " +
          translations.it.homePage.audienceTitle + " " +
          translations.it.homePage.audienceText + " " +
          translations.it.homePage.contactTitle + " " +
          translations.it.homePage.contactText,
    matematica: translations.it.matematicaPage.title + " " + translations.it.matematicaPage.content,
    crittografia: translations.it.crittografiaPage.title + " " +
                  translations.it.crittografiaPage.introText + " " +
                  translations.it.crittografiaPage.symmetricCrypto + " " +
                  translations.it.crittografiaPage.symmetricIntro + " " +
                  translations.it.crittografiaPage.asymmetricCrypto + " " +
                  translations.it.crittografiaPage.asymmetricIntro + " " +
                  translations.it.crittografiaPage.caesarCipher + " " +
                  translations.it.crittografiaPage.caesarIntro + " " +
                  translations.it.crittografiaPage.vigenereCipher + " " +
                  translations.it.crittografiaPage.vigenereIntro,
    symmetric: translations.it.crittografiaPage.symmetricCrypto + " + " + translations.it.crittografiaPage.symmetricIntro,
    asymmetric: translations.it.crittografiaPage.asymmetricCrypto + " + " + translations.it.crittografiaPage.asymmetricIntro,
    caesar: translations.it.crittografiaPage.caesarCipher + " + " + translations.it.crittografiaPage.caesarIntro,
    vigenere: translations.it.crittografiaPage.vigenereCipher + " + " + translations.it.crittografiaPage.vigenereIntro,
    algoritmi: translations.it.algoritmiPage.title + " " + translations.it.algoritmiPage.content,
    applicazioni: translations.it.applicazioniPage.title + " " + translations.it.applicazioniPage.content,
    risorse: translations.it.risorsePage.title + " " + translations.it.risorsePage.content,
    rsa: translations.it.rsaPage.title + " " + translations.it.rsaPage.intro + " " +
         translations.it.rsaPage.keyGenerationTitle + " " + translations.it.rsaPage.keyGenerationSteps.join(" ") + " " +
         translations.it.rsaPage.encryptionTitle + " " + translations.it.rsaPage.encryptionFormula + " " + translations.it.rsaPage.encryptionDescription + " " +
         translations.it.rsaPage.decryptionTitle + " " + translations.it.rsaPage.decryptionFormula + " " + translations.it.rsaPage.decryptionDescription,
    contatti: translations.it.contactPage.title + " " + translations.it.contactPage.intro + " " + translations.it.contactPage.emailAddress,
    notFound: translations.it.common.pageNotFound + " " + translations.it.common.pageNotFoundText,
  },
  en: {
    home: translations.en.homePage.projectDescription + " " +
          translations.en.homePage.welcomeTitle + " " +
          translations.en.homePage.introText1 + " " +
          translations.en.homePage.introText2 + " " +
          translations.en.homePage.objectivesTitle + " " +
          translations.en.homePage.objective1 + " " +
          translations.en.homePage.objective2 + " " +
          translations.en.homePage.objective3 + " " +
          translations.en.homePage.objective4 + " " +
          translations.en.homePage.objective5 + " " +
          translations.en.homePage.audienceTitle + " " +
          translations.en.homePage.audienceText + " " +
          translations.en.homePage.contactTitle + " " +
          translations.en.homePage.contactText,
    matematica: translations.en.matematicaPage.title + " " + translations.en.matematicaPage.content,
    crittografia: translations.en.crittografiaPage.title + " " +
                  translations.en.crittografiaPage.introText + " " +
                  translations.en.crittografiaPage.symmetricCrypto + " " +
                  translations.en.crittografiaPage.symmetricIntro + " " +
                  translations.en.crittografiaPage.asymmetricCrypto + " " +
                  translations.en.crittografiaPage.asymmetricIntro + " " +
                  translations.en.crittografiaPage.caesarCipher + " " +
                  translations.en.crittografiaPage.caesarIntro + " " +
                  translations.en.crittografiaPage.vigenereCipher + " " +
                  translations.en.crittografiaPage.vigenereIntro,
    symmetric: translations.en.crittografiaPage.symmetricCrypto + " + " + translations.en.crittografiaPage.symmetricIntro,
    asymmetric: translations.en.crittografiaPage.asymmetricCrypto + " + " + translations.en.crittografiaPage.asymmetricIntro,
    caesar: translations.en.crittografiaPage.caesarCipher + " + " + translations.en.crittografiaPage.caesarIntro,
    vigenere: translations.en.crittografiaPage.vigenereCipher + " + " + translations.en.crittografiaPage.vigenereIntro,
    algoritmi: translations.en.algoritmiPage.title + " " + translations.en.algoritmiPage.content,
    applicazioni: translations.en.applicazioniPage.title + " " + translations.en.applicazioniPage.content,
    risorse: translations.en.risorsePage.title + " " + translations.en.risorsePage.content,
    rsa: translations.en.rsaPage.title + " " + translations.en.rsaPage.intro + " " +
         translations.en.rsaPage.keyGenerationTitle + " " + translations.en.rsaPage.keyGenerationSteps.join(" ") + " " +
         translations.en.rsaPage.encryptionTitle + " " + translations.en.rsaPage.encryptionFormula + " " + translations.en.rsaPage.encryptionDescription + " " +
         translations.en.rsaPage.decryptionTitle + " " + translations.en.rsaPage.decryptionFormula + " " + translations.en.rsaPage.decryptionDescription,
    contatti: translations.en.contactPage.title + " " + translations.en.contactPage.intro + " " + translations.en.contactPage.emailAddress,
    notFound: translations.en.common.pageNotFound + " " + translations.en.common.pageNotFoundText,
  },
};

// Helper function to check if an item or its descendants are active
const isItemActive = (item, currentPage) => {
  if (currentPage === item.key) {
    return true;
  }
  if (item.children) {
    return item.children.some(child => isItemActive(child, currentPage));
  }
  return false;
};

// Recursive function to filter sidebar items and their children based on search term
const getFilteredSidebarItems = (items, searchTerm, language, allPageContent) => {
  if (!searchTerm) {
    return items; // If no search term, return all items
  }

  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  const filtered = [];

  items.forEach(item => {
    // Check if the item's title matches
    const titleMatches = item.title.toLowerCase().includes(lowerCaseSearchTerm);

    // Check if the item's content matches from the pre-compiled pageTextContent
    const pageContent = allPageContent[language]?.[item.key];
    const contentMatches = pageContent ? pageContent.toLowerCase().includes(lowerCaseSearchTerm) : false;

    let matchedChildren = [];
    if (item.children) {
      matchedChildren = getFilteredSidebarItems(item.children, searchTerm, language, allPageContent);
    }

    // If the item itself matches (title or content), or any of its children match, include it
    if (titleMatches || contentMatches || matchedChildren.length > 0) {
      filtered.push({
        ...item,
        // Only include children if there are matches, to avoid empty expanded sections
        children: matchedChildren.length > 0 ? matchedChildren : undefined
      });
    }
  });

  return filtered;
};

// Helper function to generate a snippet around the search term
const generateSnippet = (fullText, term, maxLength = 200) => {
  const lowerCaseFullText = fullText.toLowerCase();
  const lowerCaseTerm = term.toLowerCase();
  const termIndex = lowerCaseFullText.indexOf(lowerCaseTerm);

  if (termIndex === -1) {
    return fullText.substring(0, maxLength) + (fullText.length > maxLength ? '...' : '');
  }

  const start = Math.max(0, termIndex - maxLength / 2);
  const end = Math.min(fullText.length, termIndex + term.length + maxLength / 2);

  let snippet = fullText.substring(start, end);

  // Add ellipses if the snippet doesn't start/end at the text boundaries
  if (start > 0) {
    snippet = '...' + snippet;
  }
  if (end < fullText.length) {
    snippet = snippet + '...';
  }

  return snippet;
};

// Helper function to highlight text
const highlightText = (text, term) => {
  if (!term) return [text];
  const parts = text.split(new RegExp(`(${term})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === term.toLowerCase() ? (
      <span key={index} className="bg-yellow-200 font-bold rounded px-1">
        {part}
      </span>
    ) : (
      part
    )
  );
};

// Componente per il rendering di formule matematiche con HTML/CSS
const MathFormula = ({ children }) => {
  const parts = children.split('$');
  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 1) { // Odd index means it's a math part
          let inlineHtml = part
            .replace(/\\phi/g, '&phi;')
            .replace(/\\gcd/g, 'gcd')
            .replace(/\\cdot/g, '&middot;')
            .replace(/\\equiv/g, '&equiv;')
            .replace(/\\pmod{(.*?)}/g, '(mod $1$)')
            .replace(/\^\{(.*?)\}/g, '<sup>$1</sup>') // For exponents like M^{e}
            .replace(/\^([a-zA-Z0-9])/g, '<sup>$1</sup>') // For single char exponents like M^e
            .replace(/\\le/g, '&le;');
          return (
            <span key={index} className="font-mono text-blue-800" dangerouslySetInnerHTML={{ __html: inlineHtml }} />
          );
        } else { // Even index means it's plain text
          return <span key={index}>{part}</span>;
        }
      })}
    </>
  );
};


// Componente per la pagina principale (Descrizione del Progetto)
const HomePage = ({ language }) => {
  // Accede alle traduzioni specifiche per la HomePage e quelle comuni
  const tCommon = translations[language].common;
  const tHomePage = translations[language].homePage;

  return (
    <main className="flex-1 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 pb-3 border-blue-200">{tHomePage.projectDescription}</h2>

      <section id="introduzione" className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">{tHomePage.welcomeTitle}</h3>
        <p className="mb-4 leading-relaxed text-lg">
          {tHomePage.introText1}
        </p>
        <p className="leading-relaxed text-lg">
          {tHomePage.introText2}
        </p>
        <img
          src="https://placehold.co/600x300/ADD8E6/000000?text=Crittografia+e+Matematica"
          alt="Immagine concettuale di crittografia e matematica"
          className="mt-6 rounded-lg shadow-lg w-full h-auto object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/ADD8E6/000000?text=Immagine+non+disponibile"; }}
        />
      </section>

      <section id="obiettivi" className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">{tHomePage.objectivesTitle}</h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>{tHomePage.objective1}</li>
          <li>{tHomePage.objective2}</li>
          <li>{tHomePage.objective3}</li>
          <li>{tHomePage.objective4}</li>
          <li>{tHomePage.objective5}</li>
        </ul>
      </section>

      <section id="pubblico" className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">{tHomePage.audienceTitle}</h3>
        <p className="leading-relaxed text-lg">
          {tHomePage.audienceText}
        </p>
      </section>
    </main>
  );
};

// Componente per la pagina Crittografia con sottosezioni
const CrittografiaPage = ({ language, currentSection }) => {
  const tCommon = translations[language].common;
  const tCryptoPage = translations[language].crittografiaPage;

  const renderContent = () => {
    switch (currentSection) {
      case 'crittografia': // Default view when 'Crittografia' is clicked
      case 'intro':
        return (
          <>
            <p className="mb-4 leading-relaxed text-lg">{tCryptoPage.introText}</p>
            <img
              src="https://placehold.co/600x300/ADD8E6/000000?text=Crittografia"
              alt="Immagine concettuale di crittografia"
              className="mt-6 rounded-lg shadow-lg w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/ADD8E6/000000?text=Immagine+non+disponibile"; }}
            />
          </>
        );
      case 'symmetric':
        return (
          <>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">{tCryptoPage.symmetricCrypto}</h3>
            <p className="mb-4 leading-relaxed text-lg">{tCryptoPage.symmetricIntro}</p>
            <img
              src="https://placehold.co/600x300/ADD8E6/000000?text=Crittografia+Simmetrica"
              alt="Immagine concettuale di crittografia simmetrica"
              className="mt-6 rounded-lg shadow-lg w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/ADD8E6/000000?text=Immagine+non+disponibile"; }}
            />
          </>
        );
      case 'asymmetric':
        return (
          <>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">{tCryptoPage.asymmetricCrypto}</h3>
            <p className="mb-4 leading-relaxed text-lg">{tCryptoPage.asymmetricIntro}</p>
            <img
              src="https://placehold.co/600x300/ADD8E6/000000?text=Crittografia+Asimmetrica"
              alt="Immagine concettuale di crittografia asimmetrica"
              className="mt-6 rounded-lg shadow-lg w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/ADD8E6/000000?text=Immagine+non+disponibile"; }}
            />
          </>
        );
      case 'caesar':
        return (
          <>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">{tCryptoPage.caesarCipher}</h3>
            <p className="mb-4 leading-relaxed text-lg">{tCryptoPage.caesarIntro}</p>
            <img
              src="https://placehold.co/600x300/ADD8E6/000000?text=Cifrario+di+Cesare"
              alt="Immagine concettuale del cifrario di Cesare"
              className="mt-6 rounded-lg shadow-lg w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/ADD8E6/000000?text=Immagine+non+disponibile"; }}
            />
          </>
        );
      case 'vigenere':
        return (
          <>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">{tCryptoPage.vigenereCipher}</h3>
            <p className="mb-4 leading-relaxed text-lg">{tCryptoPage.vigenereIntro}</p>
            <img
              src="https://placehold.co/600x300/ADD8E6/000000?text=Cifrario+di+Vigenere"
              alt="Immagine concettuale del cifrario di Vigenere"
              className="mt-6 rounded-lg shadow-lg w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/ADD8E6/000000?text=Immagine+non+disponibile"; }}
            />
          </>
        );
      default:
        return <p>{tCommon.pageNotFoundText}</p>;
    }
  };

  return (
    <main className="flex-1 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 pb-3 border-blue-200">{tCryptoPage.title}</h2>
      {renderContent()}
    </main>
  );
};

// Componente per la pagina RSA
const RSAPage = ({ language }) => {
  const tCommon = translations[language].common;
  const tRsaPage = translations[language].rsaPage;

  return (
    <main className="flex-1 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 pb-3 border-blue-200">{tRsaPage.title}</h2>

      <section className="mb-8">
        <p className="mb-4 leading-relaxed text-lg"><MathFormula>{tRsaPage.intro}</MathFormula></p>
        <img
          src="https://placehold.co/600x300/ADD8E6/000000?text=Algoritmo+RSA"
          alt={tRsaPage.imageAlt}
          className="mt-6 rounded-lg shadow-lg w-full h-auto object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/ADD8E6/000000?text=Immagine+non+disponibile"; }}
        />
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">{tRsaPage.keyGenerationTitle}</h3>
        <ul className="list-decimal list-inside space-y-2 text-lg">
          {tRsaPage.keyGenerationSteps.map((step, index) => (
            <li key={index}>
              <MathFormula>{step}</MathFormula>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">{tRsaPage.encryptionTitle}</h3>
        <p className="mb-2 leading-relaxed text-lg">
          Formula: <MathFormula>{tRsaPage.encryptionFormula}</MathFormula>
        </p>
        <p className="leading-relaxed text-lg"><MathFormula>{tRsaPage.encryptionDescription}</MathFormula></p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">{tRsaPage.decryptionTitle}</h3>
        <p className="mb-2 leading-relaxed text-lg">
          Formula: <MathFormula>{tRsaPage.decryptionFormula}</MathFormula>
        </p>
        <p className="leading-relaxed text-lg"><MathFormula>{tRsaPage.decryptionDescription}</MathFormula></p>
      </section>

      <p className="text-sm text-gray-500 mt-8 italic">{tRsaPage.note}</p>
    </main>
  );
};

// Componente per la pagina Contatti (semplificata)
const ContactPage = ({ language }) => {
  const tContactPage = translations[language].contactPage;

  return (
    <main className="flex-1 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 pb-3 border-blue-200">{tContactPage.title}</h2>

      <p className="mb-6 leading-relaxed text-lg">{tContactPage.intro}</p>

      <div className="text-center p-6 bg-blue-50 rounded-lg shadow-inner max-w-md mx-auto">
        <p className="text-lg mb-4">
          {tContactPage.emailPrompt}:{' '}
          <a
            href={`mailto:${tContactPage.emailAddress}`}
            className="text-blue-600 hover:underline font-semibold"
          >
            {tContactPage.emailAddress}
          </a>
        </p>
      </div>
    </main>
  );
};


// Componenti placeholder per le altre pagine
const PlaceholderPage = ({ pageKey, language }) => {
  const tCommon = translations[language].common;
  const tPage = translations[language][`${pageKey}Page`];

  const title = tPage && tPage.title ? tPage.title : tCommon.pageNotFound;
  const content = tPage && tPage.content ? tPage.content : tCommon.pageNotFoundText;

  return (
    <main className="flex-1 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 pb-3 border-blue-200">{title}</h2>
      <p className="leading-relaxed text-lg">
        {content}
      </p>
      {pageKey === 'notFound' && (
        <p className="leading-relaxed text-lg mt-4">
          {tCommon.pageNotFoundText}
        </p>
      )}
    </main>
  );
};

// Helper to find an item in the nested sidebar structure by its key
const findItemByKey = (items, key) => {
  for (const item of items) {
    if (item.key === key) {
      return item;
    }
    if (item.children) {
      const foundChild = findItemByKey(item.children, key);
      if (foundChild) {
        return foundChild;
      }
    }
  }
  return null;
};


// Componente ricorsivo per gli elementi della sidebar
const SidebarItem = ({ item, currentPage, onPageChange, language, level = 0 }) => {
  // isOpen is now purely controlled by user clicks on the arrow
  // It will NOT automatically open if a child is active.
  const [isOpen, setIsOpen] = useState(false); // Initialize to false (collapsed)

  // REMOVED: useEffect to set isOpen based on currentPage and isItemActive

  const handleArrowClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event from bubbling to the parent <a> or div
    setIsOpen(!isOpen);
  };

  const handleTextClick = (e) => {
    e.preventDefault();
    onPageChange(item.key);
    // No change to isOpen here. It's strictly for navigation.
  };

  const isExactlyActive = currentPage === item.key;
  const isParentOfActive = !isExactlyActive && isItemActive(item, currentPage);

  const basePaddingLeft = `${1 + level * 1.5}rem`; // Base padding for the entire item row

  // Classes for the container div (background, border, shadow)
  let containerClasses = `flex items-center w-full rounded-md transition duration-200 `;
  // Classes for the <a> tag (text color, hover effects)
  let linkClasses = `flex-1 py-2 ${item.children ? 'pr-2' : 'px-2'} `; // Adjust padding for text only

  if (isExactlyActive) {
    if (level === 0) { // Top-level active item
      containerClasses += 'bg-blue-700 shadow-md border-l-4 border-blue-900';
      linkClasses += 'text-white font-bold';
    } else { // Nested active item (e.g., Caesar, Vigenere)
      containerClasses += 'bg-blue-600 border-l-2 border-blue-800';
      linkClasses += 'text-white font-bold';
    }
  } else if (isParentOfActive) {
    containerClasses += 'bg-blue-300 border-l-2 border-blue-500';
    linkClasses += 'text-blue-900 font-semibold';
  } else {
    containerClasses += 'hover:bg-blue-100'; // Default background, hover background
    linkClasses += 'text-gray-800 hover:text-blue-700'; // Default text color, hover text color
  }

  return (
    <li className="mb-2">
      <div className={containerClasses} style={{ paddingLeft: basePaddingLeft }}>
        {item.children && (
          <button
            onClick={handleArrowClick}
            className={`p-1 -ml-1 rounded-md hover:bg-blue-200 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${isExactlyActive || isParentOfActive ? 'text-blue-900' : 'text-gray-700'}`}
            title={isOpen ? "Collassa" : "Espandi"} // Aggiunto tooltip per accessibilità
          >
            <svg
              className={`w-4 h-4 mr-0 transform transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        )}
        <a
          href="#"
          onClick={handleTextClick}
          className={linkClasses}
        >
          {item.title}
        </a>
      </div>
      {item.children && isOpen && (
        <ul className="mt-1">
          {item.children.map(child => (
            <SidebarItem
              key={child.key}
              item={child}
              currentPage={currentPage}
              onPageChange={onPageChange}
              language={language}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};


// Componente principale dell'applicazione
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('it'); // Lingua predefinita è Italiano
  const [currentPage, setCurrentPage] = useState('home'); // Nuovo stato per la pagina corrente
  const [searchMode, setSearchMode] = useState(false); // Nuovo stato per la modalità ricerca
  const [currentSearchResults, setCurrentSearchResults] = useState([]); // Nuovo stato per i risultati della ricerca

  const tCommon = translations[language].common; // Ottieni le traduzioni comuni
  const tSidebarItems = translations[language].sidebar.items; // Ottieni gli elementi della sidebar

  // Filtra gli elementi della sidebar in base al termine di ricerca
  const displayedSidebarItems = getFilteredSidebarItems(tSidebarItems, searchTerm, language, pageTextContent);

  // Funzione per eseguire la ricerca completa e mostrare i risultati
  const executeSearch = () => {
    if (!searchTerm.trim()) {
      setSearchMode(false); // Se il termine è vuoto, esci dalla modalità ricerca
      setCurrentSearchResults([]);
      setCurrentPage('home'); // Torna alla home o alla pagina precedente
      return;
    }

    const results = [];
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Funzione ricorsiva per cercare in tutti gli elementi della sidebar
    const searchInItems = (items) => {
      items.forEach(item => {
        const pageContent = pageTextContent[language]?.[item.key];
        if (pageContent && pageContent.toLowerCase().includes(lowerCaseSearchTerm)) {
          results.push({
            key: item.key,
            title: item.title,
            snippet: generateSnippet(pageContent, searchTerm)
          });
        }
        if (item.children) {
          searchInItems(item.children);
        }
      });
    };

    searchInItems(tSidebarItems);
    setCurrentSearchResults(results);
    setSearchMode(true); // Attiva la modalità ricerca
    setCurrentPage('searchResults'); // Imposta la pagina per mostrare i risultati
  };


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Se la barra di ricerca si svuota, esci dalla modalità ricerca
    if (event.target.value === '') {
      setSearchMode(false);
      setCurrentSearchResults([]);
      setCurrentPage('home'); // O potresti voler tornare alla pagina precedente
    }
  };

  const handleSearchKeyPress = (event) => {
    if (event.key === 'Enter') {
      executeSearch();
    }
  };

  // Helper to find an item in the nested sidebar structure by its key
  const findItemByKey = (items, key) => {
    for (const item of items) {
      if (item.key === key) {
        return item;
      }
      if (item.children) {
        const foundChild = findItemByKey(item.children, key);
        if (foundChild) {
          return foundChild;
        }
      }
    }
    return null;
  };

  const handleLanguageChange = (newLang) => {
    const oldPageKey = currentPage;

    setLanguage(newLang);
    setSearchTerm('');
    setSearchMode(false);
    setCurrentSearchResults([]);

    const newLangSidebarItems = translations[newLang].sidebar.items;
    const foundInNewLang = findItemByKey(newLangSidebarItems, oldPageKey);

    if (foundInNewLang) {
      setCurrentPage(oldPageKey);
    } else {
      setCurrentPage('home');
    }
  };

  // Funzione per gestire il cambio pagina (ora solo cambia la pagina, non resetta la ricerca)
  const handlePageChange = (pageKey) => {
    setCurrentPage(pageKey);
    // Non resetta più la ricerca qui. Il reset avviene solo se l'utente svuota la barra
    // o clicca "Torna alla Home" dalla pagina dei risultati.
  };

  // Determina quale componente della pagina mostrare in base a currentPage
  const renderPage = () => {
    if (searchMode && currentPage === 'searchResults') {
      return (
        <main className="flex-1 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 pb-3 border-blue-200">
            {tCommon.searchResultsTitle} <span className="text-blue-600">"{searchTerm}"</span>
          </h2>
          {currentSearchResults.length > 0 ? (
            <div className="space-y-6">
              {currentSearchResults.map((result, index) => (
                <div
                  key={index}
                  className="p-4 border border-blue-200 rounded-lg shadow-sm cursor-pointer hover:bg-blue-50 transition duration-200"
                  onClick={() => handlePageChange(result.key)}
                >
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{result.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {highlightText(result.snippet, searchTerm)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg text-gray-700">{tCommon.noSearchResults}</p>
          )}
          <button
            onClick={() => {
              setSearchMode(false);
              setSearchTerm('');
              setCurrentSearchResults([]);
              setCurrentPage('home');
            }}
            className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
          >
            {tCommon.backToHome}
          </button>
        </main>
      );
    }

    switch (currentPage) {
      case 'home':
        return <HomePage language={language} />;
      case 'matematica':
        return <PlaceholderPage pageKey="matematica" language={language} />;
      case 'crittografia':
      case 'symmetric':
      case 'asymmetric':
      case 'caesar':
      case 'vigenere':
        return <CrittografiaPage language={language} currentSection={currentPage} />;
      case 'algoritmi':
        return <PlaceholderPage pageKey="algoritmi" language={language} />;
      case 'applicazioni':
        return <PlaceholderPage pageKey="applicazioni" language={language} />;
      case 'risorse':
        return <PlaceholderPage pageKey="risorse" language={language} />;
      case 'rsa': // Aggiunto il caso per la pagina RSA
        return <RSAPage language={language} />;
      case 'contatti': // Aggiunto il caso per la pagina Contatti
        return <ContactPage language={language} />;
      default:
        return <PlaceholderPage pageKey="notFound" language={language} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-lg flex items-center justify-between rounded-b-lg">
        <h1 className="text-3xl font-bold tracking-wide">{tCommon.title}</h1>
        <div className="flex items-center space-x-4"> {/* Contenitore per ricerca e lingua */}
          <div className="relative">
            <input
              type="text"
              placeholder={tCommon.searchPlaceholder}
              className="p-2 pl-10 rounded-full bg-blue-700 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 w-48 md:w-64"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={(e) => { if (e.key === 'Enter') executeSearch(); }}
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          {/* Selettore Lingua - Ora con pulsanti */}
          <div className="flex space-x-2">
            <button
              onClick={() => handleLanguageChange('it')}
              className={`px-4 py-2 rounded-full font-semibold transition duration-300
                ${language === 'it' ? 'bg-white text-blue-800 shadow-md' : 'bg-blue-700 text-blue-200 hover:bg-blue-800 hover:text-white'}`}
            >
              Italiano
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-4 py-2 rounded-full font-semibold transition duration-300
                ${language === 'en' ? 'bg-white text-blue-800 shadow-md' : 'bg-blue-700 text-blue-200 hover:bg-blue-800 hover:text-white'}`}
            >
              English
            </button>
          </div>
        </div>
      </header>

      {/* Area contenuto principale */}
      <div className="flex flex-1 mt-4 p-4">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-6 rounded-lg shadow-md mr-6 flex-shrink-0">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2 border-blue-200">{tCommon.indexTitle}</h2>
          <nav>
            <ul>
              {displayedSidebarItems.map(item => (
                <SidebarItem
                  key={item.key}
                  item={item}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  language={language}
                />
              ))}
            </ul>
          </nav>
        </aside>

        {/* Area di rendering delle pagine - ora gestita da renderPage() */}
        {renderPage()}
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 mt-4 text-center text-sm rounded-t-lg shadow-inner">
        &copy; {new Date().getFullYear()} {tCommon.footerText}
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

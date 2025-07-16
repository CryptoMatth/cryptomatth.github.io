const { useState, useEffect, useMemo } = React;

// Oggetto per le traduzioni di tutto il contenuto testuale
const translations = {
  it: {
    common: { // Traduzioni comuni a più pagine o elementi globali
      title: "CryptoMatth", // Nome del progetto aggiornato
      searchPlaceholder: "Cerca nel sito...",
      indexTitle: "Indice",
      footerText: "CryptoMatth. Tutti i diritti riservati.",
      pageNotFound: "Pagina non trovata",
      pageNotFoundText: "Siamo spiacenti, la pagina che stai cercando non esiste.",
      searchResultsTitle: "Risultati della Ricerca per:",
      noSearchResults: "Nessun risultato trovato per la tua ricerca.",
      backToHome: "Torna alla Home",
    },
    sidebar: { // Traduzioni per la sidebar, ora con struttura gerarchica
      items: [
        { key: 'home', title: "Introduzione al Progetto" },
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
        { key: 'matematica', title: "Fondamenti Matematici" },
        { key: 'contatti', title: "Contatti" },
      ]
    },
    homePage: { // Traduzioni specifiche per la HomePage
      projectDescription: "Matematica e Crittografia: Il Portale di Approfondimento sulla Sicurezza Digitale",
      welcomeTitle: "Benvenuti nel Mondo della Sicurezza Digitale",
      introSection1: `Nel contesto attuale, caratterizzato dalla diffusione delle informazioni digitali e dalla crescente complessità delle minacce cibernetiche, la crittografia è una disciplina essenziale per la salvaguardia della riservatezza, dell'integrità e dell'autenticità dei dati. Questo portale è concepito come una risorsa di approfondimento completa, destinata a un pubblico vasto: da chi desidera comprendere i fondamenti della sicurezza digitale, allo studioso o al professionista che cerca un'analisi più specifica e rigorosa dei suoi meccanismi.

La trattazione è strutturata per offrire un'esplorazione sistematica e progressiva della materia. Il percorso inizia dalle sue origini storiche, per poi addentrarsi negli algoritmi complessi che definiscono la crittografia contemporanea, mantenendo una costante attenzione ai principi matematici che ne garantiscono la robustezza.`,
      introSection2Heading: "Ambiti di Approfondimento Dettagliato:",
      introSection2Content: `Il portale include un'analisi approfondita delle **radici storiche della crittografia**, delineando l'evoluzione delle metodologie di protezione delle informazioni attraverso le epoche. Saranno esaminati non solo i primi cifrari di sostituzione e trasposizione, come il Cifrario di Cesare e il Cifrario di Vigenère, ma anche il contesto socio-politico e tecnologico che ne ha stimolato lo sviluppo e la progressiva complessità. Questa prospettiva storica è fondamentale per contestualizzare lo sviluppo delle tecniche attuali e per apprezzare la progressione del pensiero crittografico e le sfide alla sicurezza delle comunicazioni. Si evidenzierà come le vulnerabilità dei sistemi storici abbiano spinto l'innovazione verso soluzioni più resilienti.

La sezione centrale è dedicata agli **algoritmi crittografici moderni**, distinti nelle categorie fondamentali della **crittografia simmetrica** e **asimmetrica**. Per ciascuna, verranno esaminati in dettaglio i principi operativi, le architetture algoritmiche, la loro resistenza agli attacchi noti e le vulnerabilità intrinseche.

* Nell'ambito della **crittografia simmetrica**, dove la stessa chiave è utilizzata per cifratura e decifratura, si analizzeranno algoritmi a blocchi e a flusso. Un'attenzione particolare sarà dedicata all'**Advanced Encryption Standard (AES)**, esplorandone la struttura interna (come le S-box e le operazioni di MixColumns), le diverse lunghezze di chiave e le modalità operative (ad esempio, CBC, GCM) che ne ampliano l'applicabilità e la sicurezza in vari contesti.

* La **crittografia asimmetrica**, o a chiave pubblica, rappresenta un cambiamento significativo. In questa sezione, si approfondiranno algoritmi come l'**RSA**, esaminando il processo di generazione delle chiavi basato sulla difficoltà di fattorizzare numeri primi grandi, e i meccanismi dettagliati di cifratura, decifratura e firma digitale. Sarà inoltre introdotta la **Crittografia a Curva Ellittica (ECC)**, evidenziandone l'efficienza computazionale e la sicurezza superiore per chiavi di dimensioni comparabili, aspetti importanti per le applicazioni su dispositivi con risorse limitate.

Un'enfasi significativa sarà posta sui **fondamenti matematici** che costituiscono la base teorica essenziale della crittografia. Saranno illustrati concetti derivati da diversi rami della matematica pura e applicata:

* Dalla **teoria dei numeri**, si esploreranno le proprietà dei numeri primi, l'aritmetica modulare, il Piccolo Teorema di Fermat e il Teorema Cinese del Resto, tutti elementi chiave per la costruzione degli algoritmi a chiave pubblica.

* Dall'**algebra astratta**, verranno introdotti i concetti di gruppi, anelli e campi finiti (campi di Galois), essenziali per comprendere le operazioni sottostanti a molti cifrari a blocchi e alla crittografia a curva ellittica.

* Dalla **complessità computazionale**, si analizzeranno i concetti di problemi computazionalmente difficili (quali la fattorizzazione di interi grandi e il problema del logaritmo discreto), che sono alla base della sicurezza di quasi tutti i sistemi crittografici moderni.
    L'obiettivo principale è evidenziare come queste strutture astratte siano intrinsecamente connesse alla robustezza e all'efficienza dei sistemi crittografici, fornendo al lettore gli strumenti concettuali per una comprensione approfondita.

Per favorire un apprendimento efficace e applicato, ogni sezione sarà corredata da **esempi dettagliati** e **casi di studio** che mostrano l'applicazione pratica dei concetti in scenari reali, dalla sicurezza delle transazioni bancarie online alla protezione delle comunicazioni su reti pubbliche. L'inclusione di **esercizi** mirati, con soluzioni o indicazioni per la risoluzione, faciliterà l'apprendimento attivo e la capacità di applicare i principi appresi.

Questo portale si propone, quindi, come uno strumento autorevole e accessibile per acquisire una solida padronanza dei principi crittografici e delle loro ampie implicazioni nella sicurezza digitale. Il suo stile, che privilegia la chiarezza e l'analisi approfondita, intende fornire una base solida a chiunque desideri esplorare con consapevolezza il complesso e affascinante mondo della crittografia.
      `,
      imageAlt: "Immagine concettuale di crittografia e matematica",
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
    algoritmiPage: { // Traduzioni specifiche per la pagina Algoritmi Comuni (mantenute per il contenuto, anche se la voce sidebar è rimossa)
      title: "Algoritmi Comuni",
      content: "Questa sezione esplora gli algoritmi crittografici più diffusi e le loro applicazioni, come RSA, AES, e le curve ellittiche. L'algoritmo RSA, ad esempio, fa ampio uso di concetti di algebra modulare."
    },
    applicazioniPage: { // Traduzioni specifiche per la pagina Applicazioni Pratiche (mantenute per il contenuto, anche se la voce sidebar è rimossa)
      title: "Applicazioni Pratiche",
      content: "Scopri come la crittografia viene utilizzata nella vita di tutti i giorni, dalla sicurezza delle transazioni online alle VPN e alle blockchain."
    },
    risorsePage: { // Traduzioni specifiche per la pagina Risorse Aggiuntive (mantenute per il contenuto, anche se la voce sidebar è rimossa)
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
    },
  },
  en: {
    common: {
      title: "CryptoMatth", // Updated project name
      searchPlaceholder: "Search the site...",
      indexTitle: "Index",
      footerText: "CryptoMatth. All rights reserved.",
      pageNotFound: "Page Not Found",
      pageNotFoundText: "Sorry, the page you are looking for does not exist.",
      searchResultsTitle: "Search Results for:",
      noSearchResults: "No results found for your search.",
      backToHome: "Back to Home",
    },
    sidebar: {
      items: [
        { key: 'home', title: "Introduction to the Project" },
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
        { key: 'matematica', title: "Mathematical Foundations" },
        { key: 'contatti', title: "Contact Us" },
      ]
    },
    homePage: {
      projectDescription: "Mathematics & Cryptography: The In-depth Digital Security Portal",
      welcomeTitle: "Welcome to the World of Digital Security",
      introSection1: `In the current context, characterized by the widespread dissemination of digital information and the increasing complexity of cyber threats, cryptography stands as an essential discipline for safeguarding data confidentiality, integrity, and authenticity. This portal is conceived as a comprehensive resource for in-depth study, intended for a broad audience: from those who wish to understand the fundamentals of digital security, to scholars or professionals seeking a more specific and rigorous analysis of its intrinsic mechanisms.

The discussion is structured to offer a systematic and progressive exploration of the subject. The journey begins with its historical origins, then delves into the complex algorithms that define contemporary cryptography, maintaining a constant focus on the mathematical principles that guarantee its robustness.`,
      introSection2Heading: "Detailed Areas of Exploration:",
      introSection2Content: `The portal includes an in-depth analysis of the **historical roots of cryptography**, outlining the evolution of information protection methodologies across eras. Not only will early substitution and transposition ciphers, such as the Caesar Cipher and the Vigenère Cipher, be examined, but also the socio-political and technological context that stimulated their development and progressive complexity. This historical perspective is fundamental for contextualizing the development of current techniques and for appreciating the progression of cryptographic thought and the challenges to communication security. It will be highlighted how the vulnerabilities of historical systems drove innovation towards more resilient solutions.

The central section is dedicated to **modern cryptographic algorithms**, distinguished into the fundamental categories of **symmetric** and **asymmetric cryptography**. For each, operational principles, algorithmic architectures, their resistance to known attacks, and intrinsic vulnerabilities will be examined in detail.

* Within **symmetric cryptography**, where the same key is used for encryption and decryption, block and stream ciphers will be analyzed. Particular attention will be given to the **Advanced Encryption Standard (AES)**, exploring its internal structure (such as S-boxes and MixColumns operations), different key lengths, and operational modes (e.g., CBC, GCM) that expand its applicability and security in various contexts.

* **Asymmetric cryptography**, or public-key cryptography, represents a significant change. In this section, algorithms such as **RSA** will be explored, examining the key generation process based on the difficulty of factoring large prime numbers, and the detailed mechanisms of encryption, decryption, and digital signature. **Elliptic Curve Cryptography (ECC)** will also be introduced, highlighting its computational efficiency and superior security for comparable key sizes, important aspects for applications on resource-limited devices.

Significant emphasis will be placed on the **mathematical foundations** that constitute the essential theoretical basis of cryptography. Concepts derived from various branches of pure and applied mathematics will be illustrated:

* From **number theory**, the properties of prime numbers, modular arithmetic, Fermat's Little Theorem, and the Chinese Remainder Theorem will be explored, all key elements for the construction of public-key algorithms.

* From **abstract algebra**, concepts of groups, rings, and finite fields (Galois fields) will be introduced, essential for understanding the underlying operations in many block ciphers and elliptic curve cryptography.

* From **computational complexity**, the concepts of computationally difficult problems (such as factoring large integers and the discrete logarithm problem), which underpin the security of almost all modern cryptographic systems, will be analyzed.
    The primary objective is to highlight how these abstract structures are intrinsically connected to the robustness and efficiency of cryptographic systems, providing the reader with the conceptual tools for a deep understanding.

To facilitate effective and applied learning, each section will be accompanied by **detailed examples** and **case studies** that demonstrate the practical application of concepts in real-world scenarios, from securing online banking transactions to protecting communications over public networks. The inclusion of targeted **exercises**, with solutions or hints for resolution, will facilitate active learning and the ability to apply learned principles.

This portal, therefore, aims to be an authoritative and accessible tool for acquiring a solid mastery of cryptographic principles and their broad implications in digital security. Its style, which prioritizes clarity and in-depth analysis, is intended to provide a solid foundation for anyone wishing to consciously explore the complex and fascinating world of cryptography.
      `,
      imageAlt: "Conceptual image of cryptography and mathematics",
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
      imageAlt: "Conceptual diagram of the RSA algorithm",
      note: "Note: Formulas are displayed using HTML and CSS for maximum compatibility."
    },
    contactPage: { // Nuove traduzioni per la pagina Contatti (semplificata)
      title: "Contact Us",
      intro: "For questions, suggestions, or collaborations, do not hesitate to contact us. We are always happy to receive feedback and connect with our community.",
      emailAddress: "info@matematicaecrittografia.it",
      emailPrompt: "Send us an email",
    },
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

// Helper function to render basic Markdown to HTML
const renderMarkdown = (markdownText) => {
  let html = markdownText
    .replace(/^### (.*$)/gim, '<h3>$1</h3>') // H3
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')   // H2
    .replace(/^\* (.*$)/gim, '<li>$1</li>')  // List items
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>') // Bold
    .replace(/\n\n/g, '</p><p>') // Paragraphs
    .replace(/\n/g, '<br/>'); // Line breaks

  // Wrap in paragraph tags if not already handled by list items or headings
  if (!html.startsWith('<h') && !html.startsWith('<ul') && !html.startsWith('<li')) {
    html = `<p>${html}</p>`;
  }

  // Handle lists specifically to wrap them in <ul>
  const listRegex = /(<li>.*?<\/li>)/gs;
  if (listRegex.test(html)) {
    html = html.replace(listRegex, '<ul>$1</ul>');
    // Fix for multiple <ul> tags if there are multiple lists
    html = html.replace(/<\/ul><ul>/g, '');
  }


  return <div dangerouslySetInnerHTML={{ __html: html }} />;
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
        <div className="prose max-w-none text-lg leading-relaxed">
          {renderMarkdown(tHomePage.introSection1)}
        </div>
        {/* Renderizza esplicitamente il titolo per "Ambiti di Approfondimento Dettagliato" */}
        <h3 className="text-2xl font-semibold text-blue-700 mb-4 mt-8">{tHomePage.introSection2Heading}</h3>
        <div className="prose max-w-none text-lg leading-relaxed">
          {renderMarkdown(tHomePage.introSection2Content)}
        </div>
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

  const handleArrowClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event from bubbling to the parent <a> or div
    setIsOpen(!isOpen);
  };

  const handleTextClick = (e) => {
    e.preventDefault();
    // Add a check to ensure onPageChange is a function
    if (typeof onPageChange === 'function') {
      onPageChange(item.key);
    } else {
      console.error('onPageChange prop is not a function in SidebarItem for', item.key, onPageChange);
    }
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
            className={`p-1 -ml-1 rounded-md hover:bg-blue-200 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${isExactlyActive ? 'text-white' : (isParentOfActive ? 'text-blue-900' : 'text-gray-700')}`}
            title={isOpen ? "Collassa" : "Espandi"} // Added tooltip for accessibility
          >
            <svg
              className={`w-4 h-4 mr-0 transform transition-transform duration-200 ${isOpen ? 'rotate-90' : ''} ${isExactlyActive ? 'text-white' : ''}`}
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
              onPageChange={onPageChange} // Pass the received onPageChange prop
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Nuovo stato per la visibilità della sidebar su mobile

  // Sposta la definizione di pageTextContent all'interno del componente App
  // e usa useMemo per garantirne la stabilità e l'inizializzazione corretta.
  const pageTextContent = useMemo(() => ({
    it: {
      home: translations.it.homePage.projectDescription + " " +
            translations.it.homePage.welcomeTitle + " " +
            translations.it.homePage.introSection1 + " " +
            translations.it.homePage.introSection2Heading + " " + // Aggiunto per la ricerca
            translations.it.homePage.introSection2Content + " " + // Aggiunto per la ricerca
            translations.it.homePage.imageAlt, // L'immagine è stata rimossa, ma il testo alt può ancora essere cercato
      matematica: translations.it.matematicaPage.title + " " + translations.it.matematicaPage.content,
      crittografia: translations.it.crittografiaPage.title + " " +
                    translations.it.crittografiaPage.introText + " " +
                    translations.it.crittografiaPage.symmetricCrypto + " " +
                    translations.it.crittografiaPage.symmetricIntro + " " +
                    translations.it.crittografiaPage.asymmetricCrypto + " " +
                    translations.it.crittografiaPage.asymmetricIntro + " " +
                    translations.it.crittografiaPage.caesarCipher + " + " +
                    translations.it.crittografiaPage.caesarIntro + " " +
                    translations.it.crittografiaPage.vigenereCipher + " + " +
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
            translations.en.homePage.introSection1 + " " +
            translations.en.homePage.introSection2Heading + " " + // Added for search
            translations.en.homePage.introSection2Content + " " + // Added for search
            translations.en.homePage.imageAlt, // The image has been removed, but the alt text can still be searched
      matematica: translations.en.matematicaPage.title + " " + translations.en.matematicaPage.content,
      crittografia: translations.en.crittografiaPage.title + " " +
                    translations.en.crittografiaPage.introText + " " +
                    translations.en.crittografiaPage.symmetricCrypto + " " +
                    translations.en.crittografiaPage.symmetricIntro + " " +
                    translations.en.crittografiaPage.asymmetricCrypto + " " +
                    translations.en.crittografiaPage.asymmetricIntro + " " +
                    translations.en.crittografiaPage.caesarCipher + " + " +
                    translations.en.crittografiaPage.caesarIntro + " " +
                    translations.en.crittografiaPage.vigenereCipher + " + " +
                    translations.en.crittografiaPage.vigenereIntro,
      symmetric: translations.en.crittografiaPage.symmetricCrypto + " + " + translations.en.crittografiaPage.symmetricIntro,
      asymmetric: translations.en.crittografiaPage.asymmetricCrypto + " + " + translations.en.crittografiaPage.asymmetricIntro,
      caesar: translations.en.crittografiaPage.caesarCipher + " + " + translations.en.crittografiaPage.caesarIntro,
      vigenere: translations.en.crittografiaPage.vigenereCipher + " + " + translations.en.crittografiaPage.vigenereIntro,
      algoritmi: translations.en.algoritmiPage.title + " " + translations.en.algoritmiPage.content,
      applicazioni: translations.en.applicazioniPage.title + " " + translations.en.applicazioniPage.content,
      risorse: translations.en.risorsePage.title + " + " + translations.en.risorsePage.content,
      rsa: translations.en.rsaPage.title + " " + translations.en.rsaPage.intro + " " +
           translations.en.rsaPage.keyGenerationTitle + " " + translations.en.rsaPage.keyGenerationSteps.join(" ") + " " +
           translations.en.rsaPage.encryptionTitle + " " + translations.en.rsaPage.encryptionFormula + " " + translations.en.rsaPage.encryptionDescription + " " +
           translations.en.rsaPage.decryptionTitle + " " + translations.en.rsaPage.decryptionFormula + " " + translations.en.rsaPage.decryptionDescription,
      contatti: translations.en.contactPage.title + " " + translations.en.contactPage.intro + " " + translations.en.contactPage.emailAddress,
      notFound: translations.en.common.pageNotFound + " " + translations.en.common.pageNotFoundText,
    },
  }), [translations]); // Dipendenza da translations per rigenerare solo se le traduzioni cambiano


  const tCommon = translations[language].common; // Ottieni le traduzioni comuni
  const tSidebarItems = translations[language].sidebar.items; // Ottieni gli elementi della sidebar

  // Filtra gli elementi della sidebar in base al termine di ricerca
  // Ora passiamo pageTextContent come argomento
  const displayedSidebarItems = getFilteredSidebarItems(tSidebarItems, searchTerm, language, pageTextContent);

  // useEffect per gestire lo scroll del body quando la sidebar è aperta su mobile
  useEffect(() => {
    // Check if the screen is small (less than 'md' breakpoint)
    const isMobile = window.innerWidth < 768; // Tailwind's 'md' breakpoint is 768px
    if (isSidebarOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts or state changes
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);


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
    setIsSidebarOpen(false); // Chiudi la sidebar dopo la ricerca su mobile
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

  // Funzione per gestire il cambio pagina (ora solo cambia la pagina, non resetta la ricerca)
  const handlePageChange = (pageKey) => {
    setCurrentPage(pageKey);
    setIsSidebarOpen(false); // Chiudi la sidebar quando si cambia pagina su mobile
    // Non resetta più la ricerca qui. Il reset avviene solo se l'utente svuota la barra
    // o clicca "Torna alla Home" dalla pagina dei risultati.
  };

  const handleLanguageChange = (newLang) => {
    const oldPageKey = currentPage;

    setLanguage(newLang);
    setSearchTerm('');
    setSearchMode(false);
    setCurrentSearchResults([]);
    setIsSidebarOpen(false); // Chiudi la sidebar quando si cambia lingua

    const newLangSidebarItems = translations[newLang].sidebar.items;
    const foundInNewLang = findItemByKey(newLangSidebarItems, oldPageKey);

    if (foundInNewLang) {
      setCurrentPage(oldPageKey);
    } else {
      setCurrentPage('home');
    }
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
              setIsSidebarOpen(false); // Chiudi la sidebar quando si torna alla home dalla ricerca
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
      <header className="bg-blue-600 text-white p-2 md:p-4 shadow-lg flex items-center justify-between rounded-b-lg">
        {/* Burger menu button - visible only on small screens */}
        <button
          className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Apri menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Logo e Titolo del Progetto */}
        <div className="flex items-center flex-grow justify-center md:justify-start">
          <svg
            className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Elemento Chiave (Crittografia) */}
            <path d="M12 1C8.69 1 6 3.69 6 7v3H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-1V7c0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4v3H8V7c0-2.21 1.79-4 4-4zm-2 10h4v2h-4v-2zm0 4h4v2h-4v-2z"/>
            {/* Elemento Matematico (Simbolo Pi greco stilizzato o griglia) */}
            <path fillRule="evenodd" d="M16.5 12.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-.5v.5a.5.5 0 01-1 0v-.5h-.5a.5.5 0 010-1h.5v-.5z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M12 12.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-.5v.5a.5.5 0 01-1 0v-.5h-.5a.5.5 0 010-1h.5v-.5z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M7.5 12.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-.5v.5a.5.5 0 01-1 0v-.5h-.5a.5.5 0 010-1h.5v-.5z" clipRule="evenodd"/>
          </svg>
          <h1 className="text-xl md:text-3xl font-bold tracking-wide">{tCommon.title}</h1>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4"> {/* Contenitore per ricerca e lingua */}
          <div className="relative">
            <input
              type="text"
              placeholder={tCommon.searchPlaceholder}
              className="p-2 pl-10 rounded-full bg-blue-700 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 w-32 sm:w-48 md:w-48 lg:w-64" // Adjusted width for mobile and desktop
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
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full font-semibold transition duration-300 text-sm md:text-base
                ${language === 'it' ? 'bg-white text-blue-800 shadow-md' : 'bg-blue-700 text-blue-200 hover:bg-blue-800 hover:text-white'}`}
            >
              IT
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full font-semibold transition duration-300 text-sm md:text-base
                ${language === 'en' ? 'bg-white text-blue-800 shadow-md' : 'bg-blue-700 text-blue-200 hover:bg-blue-800 hover:text-white'}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Overlay per la sidebar su mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Area contenuto principale */}
      <div className="flex flex-1 mt-4 p-4">
        {/* Sidebar */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-40 w-64 bg-white p-6 rounded-lg shadow-md
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:static md:translate-x-0 md:w-64 md:mr-6 md:flex-shrink-0
          `}
        >
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
        <div className="flex-1">
          {renderPage()}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 mt-4 text-center text-sm rounded-t-lg shadow-inner">
        &copy; {new Date().getFullYear()} {tCommon.footerText}
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// Kvízové kartičky. correct = pole indexov správnych možností.
// multi: true = viac správnych odpovedí (zaškrtávacie).
export const cards = [
  // ── Rádio / rušičky / SDR ──────────────────────────────
  { cat: 'Rádio', q: 'Použití rušičky v kanceláři při tajném obchodním jednání je legální.', options: ['Pravda', 'Nepravda'], correct: [1] },
  { cat: 'Rádio', q: 'Zařízení pro napadení mobilní sítě a nedetekovatelné podvržení komunikace je dražší kvůli šifrování a synchronizaci vysílaných dat.', options: ['Pravda', 'Nepravda'], correct: [0] },
  { cat: 'Rádio', q: 'Pomocí SDR přijímače lze přijímat rádiové signály všech typů modulací pracující ve frekvenčních rozsazích a šířce pásma daného SDR.', options: ['Pravda', 'Nepravda'], correct: [0] },
  { cat: 'Rádio', q: 'List papíru může přerušit rádiovou komunikaci.', options: ['Pravda', 'Nepravda'], correct: [0] },
  { cat: 'Rádio', q: 'Úspěšnost rušení rušičkou je dána výkonovou úrovní rušícího signálu na vstupech jednotlivých přijímačů.', options: ['Pravda', 'Nepravda'], correct: [0] },
  { cat: 'Rádio', q: 'Zaměření vysílače krátkých rádiových pulsů s dlouhými mezerami je stejně náročné jako u vysílače běžných modulovaných signálů.', options: ['Pravda', 'Nepravda'], correct: [1] },
  { cat: 'Rádio', q: 'Fotografie oblačnosti ze satelitu či meteorologická data z balónů nejsou šifrována a může je přijmout kdokoli vhodným přijímačem.', options: ['Pravda', 'Nepravda'], correct: [0] },

  // ── Mobilní sítě / GPS ─────────────────────────────────
  { cat: 'Mobilní sítě', q: 'SIM kartu nelze podvrhnout.', options: ['Pravda', 'Nepravda'], correct: [1] },
  { cat: 'Mobilní sítě', q: 'Určení pozice mobilního telefonu na základě připojení k BTS je nepřesné.', options: ['Pravda', 'Nepravda'], correct: [0] },
  { cat: 'Mobilní sítě', q: 'Mobilní telefon s WiFi, ale bez GPS dokáže určit svou polohu.', options: ['Pravda', 'Nepravda'], correct: [0] },
  { cat: 'Mobilní sítě', q: 'Podle zachyceného CID identifikátoru BTS lze zjistit její umístění a další základní konfigurační parametry.', options: ['Pravda', 'Nepravda'], correct: [0] },
  { cat: 'Mobilní sítě', q: 'Pilot letadla, pokud neví kde se nachází, nepozná že má podvržená poziční data z GPS (nelze je rozlišit od skutečných).', options: ['Pravda', 'Nepravda'], correct: [1] },

  // ── Kryptografie ───────────────────────────────────────
  { cat: 'Kryptografie', q: 'PGP (Pretty Good Privacy) je centralizovaný model důvěry, který využívá certifikační autority.', options: ['Pravda', 'Nepravda'], correct: [1] },
  { cat: 'Kryptografie', q: 'PGP je vhodnější pro jednotlivce než pro podniková prostředí.', options: ['Pravda', 'Nepravda'], correct: [0] },
  { cat: 'Kryptografie', q: 'Ztráta soukromého klíče v PGP může vést k nemožnosti dešifrovat přijaté zprávy.', options: ['Pravda', 'Nepravda'], correct: [0] },
  { cat: 'Kryptografie', q: 'Digitální podpisy kombinují hashovací algoritmy a asymetrickou kryptografii.', options: ['Pravda', 'Nepravda'], correct: [0] },
  { cat: 'Kryptografie', q: 'S/MIME používá X.509 certifikáty a hybridní model správy certifikátů.', options: ['Pravda', 'Nepravda'], correct: [0] },
  { cat: 'Kryptografie', q: 'AES patří mezi šifry:', options: ['Hashovací funkce', 'Symetrické'], correct: [1] },
  { cat: 'Kryptografie', q: 'Který z kryptografických standardů se opírá o složitost problému diskrétního logaritmu?', options: ['RSA', 'AES', 'DH'], correct: [2] },
  { cat: 'Kryptografie', q: 'Kerckhoffsův princip říká:', options: ['Musím předpokládat, že kryptografické algoritmy nejsou tajné', 'Kryptografické algoritmy jsou tajné', 'Pouze klíč je tajný'], correct: [0, 2], multi: true },
  { cat: 'Kryptografie', q: 'Kolik polí hlaviček definuje standard S/MIME?', options: ['3', '4', '5', '6'], correct: [2] },
  { cat: 'Kryptografie', q: 'Technika mikroteček patří do:', options: ['Steganografie', 'Používá se u steganografie i u kryptografie', 'Kryptografie'], correct: [0] },

  // ── Kvantová kryptografie / QKD ───────────────────────
  { cat: 'Kvantová', q: 'Jak se nazývá foton, který nese informaci?', options: ['Signální', 'Qubit (q-bit)', 'Nosný foton', 'Pilotní'], correct: [1] },
  { cat: 'Kvantová', q: 'V QKD linku je „surový“ klíč distribuován přes kvantový kanál; bez chybovosti příjemce obdrží z původního množství přibližně:', options: ['≈ 100 %', '≈ 75 %', '≈ 50 %', '≈ 25 %'], correct: [2] },
  { cat: 'Kvantová', q: 'Heisenbergův princip neurčitosti je základním kamenem:', options: ['Kvantové kryptografie', 'Symetrické kryptografie', 'Hashovacích funkcí'], correct: [0] },

  // ── Biometrie ─────────────────────────────────────────
  { cat: 'Biometrie', q: 'Jaká je hlavní výhoda biometrického snímání žilního systému?', options: ['Malá velikost snímacího zařízení', 'Automatická detekce živosti díky přítomnosti hemoglobinu', 'Možnost snímat z velké vzdálenosti', 'Nízká cena zařízení'], correct: [1] },
  { cat: 'Biometrie', q: 'Porovnání 1:N se vztahuje k:', options: ['Identifikaci', 'Autentizaci', 'Verifikaci', 'Zamítnutí'], correct: [0] },
  { cat: 'Biometrie', q: 'Porovnání 1:1 se vztahuje k:', options: ['Zamítnutí', 'Autentizaci', 'Identifikaci', 'Verifikaci'], correct: [3] },
  { cat: 'Biometrie', q: 'Porovnání 1:MNOHO se vztahuje k:', options: ['Zamítnutí', 'Identifikaci', 'Verifikaci', 'Autentizaci'], correct: [1] },
  { cat: 'Biometrie', q: 'Základní biometrický systém se skládá ze dvou modulů:', options: ['Modul extrakce příznaků a modulační modul', 'Registrační modul a verifikační modul', 'Transformační modul a autentizační modul', 'Vstupní modul a výstupní modul'], correct: [1] },
  { cat: 'Biometrie', q: 'Falešně negativní výsledek je definován jako:', options: ['Výsledek testu, který detekuje stav, když stav není přítomen', 'Výsledek testu, který detekuje stav, když je stav přítomen', 'Výsledek testu, který nedetekuje stav, když je stav přítomen', 'Výsledek testu, který nedetekuje stav, když stav není přítomen'], correct: [2] },
  { cat: 'Biometrie', q: 'Typický anatomický biometrický znak je:', options: ['Chůze', 'Průkaz totožnosti', 'Dynamická forma podpisu', 'Otisk prstu'], correct: [3] },
  { cat: 'Biometrie', q: 'Optický a kapacitní senzor jsou typická snímací zařízení pro:', options: ['Rozpoznávání hlasu', 'Rozpoznávání otisků prstů', 'Rozpoznávání DNA', 'Rozpoznávání obličeje'], correct: [1] },
  { cat: 'Biometrie', q: 'Která z následujících charakteristik NENÍ výhodou rozpoznávání obličeje:', options: ['Možnost vizuální kontroly nasnímaných dat', 'Možnost bezkontaktního snímání', 'Nízká vnitřní variabilita biometrického rysu', 'Cenová dostupnost základního snímacího zařízení'], correct: [2] },
  { cat: 'Biometrie', q: 'Která z následujících metod NESLOUŽÍ k detekci živosti při snímání otisků prstů:', options: ['Detekce potu', 'Spektroskopie', 'Ultrazvukové snímání', 'Radiofrekvenční identifikace (RFID)'], correct: [3] },

  // ── Honeypoty ─────────────────────────────────────────
  { cat: 'Honeypoty', q: 'Co NEpatří mezi vlastnosti honeypotu s nízkou mírou interakce:', options: ['Obtížné nasazení', 'Vysoké riziko napadení', 'Jednoduché nasazení', 'Nižší sběr dat'], correct: [0, 1], multi: true },
  { cat: 'Honeypoty', q: 'Co patří mezi vlastnosti honeypotu s nízkou mírou interakce:', options: ['Obtížné nasazení', 'Jednoduché nasazení', 'Nižší sběr dat', 'Vysoké riziko napadení'], correct: [1, 2], multi: true },
  { cat: 'Honeypoty', q: 'Mezi typy honeypotů patří:', options: ['Honeypot s nízkou mírou interakce', 'Neinteraktivní honeypot', 'Honeypot s vysokou mírou interakce', 'Honeypot se střední mírou interakce'], correct: [0, 2], multi: true },
  { cat: 'Honeypoty', q: 'Mezi honeypoty NEpatří:', options: ['T-Pot', 'Dionaea', 'Kippo', 'ACL'], correct: [3] },

  // ── Autentizace / OAuth / SAML / PPP ──────────────────
  { cat: 'Autentizace', q: 'Password Grant Type je nejbezpečnější variantou výměny tokenů v protokolu OAuth.', options: ['Pravda', 'Nepravda'], correct: [1] },
  { cat: 'Autentizace', q: 'Pro M2M (machine-to-machine) komunikaci se v protokolu OAuth využívá Client Credential Grant.', options: ['Pravda', 'Nepravda'], correct: [0] },
  { cat: 'Autentizace', q: 'Narozdíl od jazyka SAML nelze protokol OAuth využít v systémech SSO.', options: ['Pravda', 'Nepravda'], correct: [1] },
  { cat: 'Autentizace', q: 'OAuth je protokol pro výměnu sdíleného tajného klíče.', options: ['Pravda', 'Nepravda'], correct: [1] },
  { cat: 'Autentizace', q: 'Diameter funguje na principu komunikace Peer-to-Peer.', options: ['Pravda', 'Nepravda'], correct: [0] },
  { cat: 'Autentizace', q: 'Nejčastějším formátem pro definici tokenu u standardu SAML je:', options: ['JSON', 'XML', 'Web Socket', 'plain-text'], correct: [1] },
  { cat: 'Autentizace', q: 'Který z autentizačních mechanismů u PPP nemá přesně definovány autentizační metody:', options: ['PAP', 'EAP', 'RADIUS', 'CHAP'], correct: [1] },

  // ── Monitorování sítě ─────────────────────────────────
  { cat: 'Sítě', q: 'Toky (flows) jsou grupy paketů se stejnou zdrojovou/cílovou IP adresou, zdrojovým/cílovým portem, případně typem protokolu.', options: ['Pravda', 'Nepravda'], correct: [0] },
  { cat: 'Sítě', q: 'Z níže uvedených pojmů označte ty, které představují základní metriky pro monitorování sítě:', options: ['Důvěra', 'Dostupnost', 'Ztrátovost', 'Zpoždění', 'Nepopiratelnost'], correct: [1, 2, 3], multi: true },
  { cat: 'Sítě', q: 'Jaká metoda se nejčastěji využívá pro zachycení, zpracování a analýzu paketů při vysokých rychlostech a velkých tocích dat v síti?', options: ['Sampling', 'Traffic classification', 'Packet Mirroring', 'Splitting'], correct: [0] },
  { cat: 'Sítě', q: 'Jakým pojmem se označuje čas: odeslání žádosti na server, její zpracování a následné přijetí odpovědi?', options: ['RTT', 'Jitter', 'Throughput', 'Bandwidth', 'RTL'], correct: [0] },
  { cat: 'Sítě', q: 'Pomocí aplikace Ping s využitím protokolu ICMP jsme schopni zjistit:', options: ['Round-trip time', 'Packet loss', 'Bandwidth', 'Traceroute'], correct: [0, 1], multi: true },

  // ── Obecná bezpečnost ─────────────────────────────────
  { cat: 'Bezpečnost', q: 'Mezi tři cíle počítačové bezpečnosti dle NIST standardu FIPS 199 nepatří:', options: ['Autorizace', 'Utajení', 'Integrita'], correct: [0] },
]

SMP. ACADEMY

Internt onboarding- og oplæringssystem (ved astro framework og cloudflare til at deploy på https://clemata-academy.pages.dev/)

Dette system bruges til oplæring af medarbejdere via moduler, videoer og quizzer.

Formålet er, at virksomhedens IT afdeling kan:

1) rette tekst
2) udskifte billeder og videoer
3) tilføje nye moduler
4) vedligeholde akademiet

Start siden på din computer
1. Installer programmet der kræves
Installer Node.js (kun første gang):
https://nodejs.org

2. Åbn projektet
- Åbn mappen i VS Code
- Åbn Terminal → New Terminal
3. Første opstart (kun én gang)
 Skriv:
- npm install
- Vent til den er færdig.

4. Start akademiet
Skriv:
- npm run dev (det skal du skrive hver gang du vil lave en lokal visning - bemærk det opdaterer ikke den reelle side. Det beskriver jeg længere nede)

Åbn derefter:
http://localhost:4321  (eller tryk på linket i terminalen mens du holder ctrl nede)


Nu kan du se og redigere siden lokalt.

Redigering af indhold:
Alle moduler ligger her: src/content/docs/

Hver fil er ét modul i akademiet som f.eks.:

guide1.mdx (=modul 1)
guide2.mdx (=modul 2)
guide3.mdx (=modul 3)

Sådan ændrer du tekst

Åbn en .mdx fil
1) Ret teksten
2) Gem filen
3) Opdater siden i browseren

Du kan ikke ødelægge systemet ved at ændre almindelig tekst.

Hvis man vil tilføke billeder og/eller videoer:

BILLEDER:
Læg billedet i denne mappe i sidepanelet: public/images/
Indsæt i modul - bare erstat navn på filen hvor der nedenfor står 'filnavn':
![Beskrivelse](/images/filnavn.png)

VIDEOER
Læg videoen ind i denne mappe: public/videos/

Indsæt i modulet (f.eks. i guide2):
<Video src="/videos/filnavn.mp4" />

OPRETTELSE AF NYT MODUL
Kopiér en eksisterende fil i src/content/docs
Omdøb den (fx guide8.mdx)
Ret toppen til f.eks. for at den hedder det rigtige:

---
title: Modul 8 - Titel
description: Kort forklaring
---


Modulet vises automatisk i systemet.

QUIZ SPØRGSMÅL:
Quizzer redigeres direkte i modulet:

<Quiz
  question="Spørgsmål?"
  options={["Svar 1","Svar 2","Svar 3"]}
  correctIndex={1}
  explanation="Forklaring"
/>

Hvis siden stopper med at virke
Luk terminalen og start igen:

npm run dev -c 

Opdatering af online side (deployment) af https://clemata-academy.pages.dev/:

kopier og sæt følgende følgende ind i terminalen i VS code:
git add -A
git commit -m "Update content" 
git push

Giv den 10-15 minutter; så skulle siden gerne være oppe


Ingen programmering er nødvendig.

Struktur (kun til orientering)
public/
  images/   → billeder
  videos/   → videoer

src/content/docs/
  - alle undervisningsmoduler (guide 1-7)

src/components/
  - quiz og video system 

Ansvar efter aflevering
Virksomheden ejer systemet og kan frit:
- ændre indhold
- udvide moduler
- vedligeholde oplæringsmateriale
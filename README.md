CLEMATTA ACADEMY

Internt onboarding- og oplæringssystem

Dette system bruges til oplæring af medarbejdere via moduler, videoer og quizzer.

Formålet er, at virksomhedens IT afdeling selv kan:

rette tekst

udskifte billeder og videoer

tilføje nye moduler

vedligeholde akademiet

Start siden på din computer
1. Installer programmet der kræves

Installer Node.js (kun første gang):
https://nodejs.org

2. Åbn projektet

Åbn mappen i VS Code

Åbn Terminal → New Terminal

3. Første opstart (kun én gang)

Skriv:

npm install

Vent til den er færdig.

4. Start akademiet

Skriv:

npm run dev (det skal du skrive hver gang du vil)


Åbn derefter:

http://localhost:4321


Nu kan du se og redigere siden lokalt.

Redigering af indhold
Hvor ligger modulerne?

Alle moduler ligger her:

src/content/docs/


Hver fil er ét modul i akademiet:

guide1.mdx
guide2.mdx
guide3.mdx

Sådan ændrer du tekst

Åbn en .mdx fil

Ret teksten

Gem filen

Opdater siden i browseren

Du kan ikke ødelægge systemet ved at ændre almindelig tekst.

Billeder
Tilføj nyt billede

Læg billedet her:

public/images/


Indsæt i modul:

![Beskrivelse](/images/filnavn.png)

Videoer
Tilføj ny video

Læg videoen her:

public/videos/


Indsæt i modul:

<Video src="/videos/filnavn.mp4" />

Opret et nyt modul

Kopiér en eksisterende fil i src/content/docs

Omdøb den (fx guide8.mdx)

Ret toppen:

---
title: Modul 8 - Titel
description: Kort forklaring
---


Modulet vises automatisk i systemet.

Quiz spørgsmål

Quizzer redigeres direkte i modulet:

<Quiz
  question="Spørgsmål?"
  options={["Svar 1","Svar 2","Svar 3"]}
  correctIndex={1}
  explanation="Forklaring"
/>

Hvis siden stopper med at virke

Luk terminalen og start igen:

npm run dev

Opdatering af online side (deployment)

Når I har adgang til hosting:

Upload ændringer

Tryk deploy

Siden opdateres automatisk

Ingen programmering er nødvendig.

Struktur (kun til orientering)
public/
  images/   → billeder
  videos/   → videoer

src/content/docs/
  → alle undervisningsmoduler

src/components/
  → quiz og video system (skal normalt ikke ændres)

Ansvar efter aflevering

Virksomheden ejer systemet og kan frit:

ændre indhold

udvide moduler

vedligeholde oplæringsmateriale

Systemet er bygget, så daglig drift ikke kræver udvikler.
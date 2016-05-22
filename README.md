# WED1 Miniprojekt

## How to Set Up

```
npm install
```
(Installs Gulp and Browser-Sync)


## Run local Dev server

```
gulp
```

## Validate HTML (W3C)
```
gulp validate-html
```

## To Do

- [x] Add File Watchers for html, css and js for livereload of assets
- [x] Add html-validator to Gulp -> W3C (automatic validation while running gulp)
- [x] Add css-validator W3C as Task to Gulp (added CSS lint)


## Checklist

### Allgemein

- [x] Alle Wikipraktika-Inhalte der Textvorlage sind vorhanden
- [x] HTML & CSS NICHT verändert (Taschenrechner)
- [x] Getestet in 2 von 4 Browser (FF, GC, IE, AS)

### HTML

- [x] Valide, korrekt (w3c gulp)
- [x] Meta: Vorhanden und korrekt verwendet (charset, title, author, publisher, description, keywords, link, rel="icon")
- [x] Grundstruktur korrekt (head/body, header, nav, main, aside, footer)
- [ ] Korrekte Hierarchie der Inhalte (section, article. header/footer, h1-hx)
- [ ] Korrekt verschachtelt,hreflang für das Sprachmenü gesetzt (keine Flaggen-Images im HTML!) (nav > ul, li, a, hreflang="de")
- [ ] Font-size-form: input, output - Aufbau korrekt, type, min, max, step, value und title gesetzt
- [ ] span, time, small (Innerhalb des Artikels verwendet und richtig eingesetzt,
time: ALLE Zeitangaben richtig ausgezeichnet, datetime-Attribute gesetzt
Small: Nur für rechtliche Angaben benutzt)
- [x] SVG-Diagramm Role Attribut gesetzt, type korrekt gesetzt, Animation funktioniert (als object eingebunden)
- [ ] img, video, iframe, svg, figure, figcaption, height="", width="", alt="" (Multimediaelemente mit Figure und Caption ausgezeichnet
Alt-Text gesetzt
Source-Grösse angegeben (height, width))
- [x] video, source, track, type="" (Alle Videoformate inkl. type="" eingebunden, track eingebunden)
- [ ] ul, ol, li, dl, dd, dt (Listen richtig verwendet)
- [ ] Search-form, datalist, type=search, button type=submit (korrekter Aufbau, Datalist verwendet
KEIN input type=submit Aria-Label für Suchfeld)
- [ ] Autor-form: fieldset, legend, input, select, textarea, label, button, type="" (Eingabeelemente type="" korrekt verwendet Labels korrekt verwendet/verlinkt Fieldsets+legends eingesetzt Submit/Reset Button (KEIN Input))
- [ ] Autor-form: required, type="" (Basic form Validierung eingesetzt)
- [ ] Footer: address, small	(Kontaktangabe und Lizenz korrekt ausgezeichnet)
- [ ] center, spacer, acronym, ...	(Keine deprecated Elemente verwendet)
- [ ] table, thead, tbody, tr, th, td, rowspan="", colspan="" (Tabelle korrekt ausgezeichnet, Zellen verbunden, thead, tbody und th/td korrekt verwendet)

### CSS
- [ ] Valide, korrekt, wartbar
- [ ] Erscheinung (Styling analog Vorgabe (Visualisierung / Video))
- [ ] counter, content (Kapitel nummeriert)
- [x] [hreflang], :before, background (Sprachmenü mit Flaggen)
- [ ] p > c statt p c, * (Effiziente Selektoren verwendet)
- [ ] rem, em, % (Fluide Breitenangabe, Pixel nur wenn sinnvoll)
- [ ] calc() eingesetzt für die Höhe des iframe und des YT-Videos
- [ ] :nth-child() (Tabellenzeilen alternativ eingefärbt)
- [ ] input, select, button, :hover, :active, :not() (Hover- und Active-Zustände definiert für Form-Elemente)
- [ ] float Float nur für Bilder / Font-Size Slides

### JS
- [ ] Valide - Keine Errors in der Konsole, kein Dead-Code
- [ ] KEIN eval(), new function(), ... (Sicheres JavaScript)
- [ ] Architektur (UI und Core Funktionen getrennt, KEINE DOM zugriffe im Core, KEINE Berechnungen im UI)
- [ ] simple, DRY - Einfache Lösung, nicht zu viel Copy-Paste Code
- [ ] Berechnung - (Berechnung korrekt, kann Gleitkommazahlen, Weiterrechnen, Grundrechenoperationen, Löschen (C), Fehlerbehandlung, Anzeige des Zwischenwertes, Korrektur des Operators bei erneuter Betätigung, Div/0 -> Error)
- [ ] events (Keine Event-Handler im HTML)

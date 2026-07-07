# Bet Tracker

![Build macOS](https://github.com/Mynamesdsuper/bet-tracker/actions/workflows/build-mac.yml/badge.svg)

App per tracciare le proprie sessioni di scommesse e gioco: dashboard con KPI, storico sessioni filtrabile, tutto salvato in locale. Disponibile come app desktop standalone (Windows e macOS) o come pagina web.

![Screenshot Bet Tracker](docs/screenshot.png)

## Download

| Piattaforma | Release |
| --- | --- |
| Windows | [v1.0.0](https://github.com/Mynamesdsuper/bet-tracker/releases/tag/v1.0.0) |
| macOS (Intel + Apple Silicon) | [v1.0.0-mac](https://github.com/Mynamesdsuper/bet-tracker/releases/tag/v1.0.0-mac) |

## Funzionalità

- **Dashboard KPI** in tempo reale: Profitto Totale, ROI %, Volume di Gioco, Win Rate %
- **Form di inserimento** rapido: data, piattaforma, tipo di gioco, deposito, cashout, note — con anteprima live del profitto/perdita
- **Tabella sessioni** filtrabile per piattaforma e tipo di gioco, ordinabile per data o profitto
- **Eliminazione** di singole sessioni con conferma
- **Backup dati**: esportazione/importazione in formato JSON
- **Persistenza locale**: nessun account, nessun server, nessun dato inviato altrove

## Come compilarla da sorgente

### App desktop (Windows)

```
npm install
npm run dist
```

Genera `release/Bet Tracker-win32-x64/Bet Tracker.exe`. Basta tenere l'intera cartella insieme (contiene le risorse necessarie a Electron) e avviare l'`.exe` — nessuna installazione richiesta, funziona offline.

Per testare in modalità sviluppo senza compilare l'eseguibile:

```
npm start
```

### Nel browser

In alternativa, `index.html` è una pagina autonoma che gira anche senza Electron:

```
start.bat
```

avvia un piccolo server locale e apre l'app nel browser predefinito. In questo caso i dati vengono salvati nel `localStorage` del browser (separato da quello dell'app desktop).

### App desktop (macOS)

I bundle `.app` di macOS contengono symlink interni (framework Electron) che Windows non può creare senza privilegi elevati — quindi `npm run dist:mac` **non funziona da Windows**. La build gira invece automaticamente su un runner macOS tramite GitHub Actions (`.github/workflows/build-mac.yml`):

- si attiva da sola ad ogni tag `v*` pushato, allegando lo `.zip` alla relativa Release
- oppure puoi lanciarla a mano da GitHub → Actions → "Build macOS" → Run workflow

L'app risultante non è firmata/notarizzata: al primo avvio macOS mostrerà un avviso Gatekeeper, sbloccabile con tasto destro → Apri.

## Struttura del progetto

```
index.html       # SPA: markup, stile (Tailwind) e logica (JS vanilla)
main.js          # processo principale Electron
vendor/          # Tailwind CSS e Lucide Icons bundlati in locale (offline-first)
manifest.json    # manifest PWA (per l'uso come app installabile da browser)
sw.js            # service worker PWA (disattivato quando l'app gira in Electron)
icon.svg/icon.ico/icon.icns
scripts/make-icon.mjs      # rigenera icon.ico (Windows) a partire da icon.svg
scripts/make-icon-mac.mjs  # rigenera icon.icns (macOS) a partire da icon.svg
start.bat        # avvio rapido in modalità browser
.github/workflows/build-mac.yml  # build macOS automatica via GitHub Actions
docs/PROMPT_ORIGINALE.md  # specifica di partenza del progetto
```

## Stack tecnico

HTML/CSS/JS vanilla, Tailwind CSS, Lucide Icons, Electron + `@electron/packager` per il pacchetto desktop. Nessun framework, nessun bundler, nessuna dipendenza a runtime lato server.

## Dati

Ogni sessione è un record con: data, piattaforma, tipo di gioco, deposito, cashout, profitto (calcolato), note. Tutto resta sul dispositivo dell'utente — export/import JSON per backup manuale o migrazione tra dispositivi.

# Prompt per la creazione di un Bet Tracker Web App

Agisci come un Senior Front-end Developer ed esperto di UX/UI. Ho bisogno che tu crei un'applicazione web a pagina singola (Single Page Application) completamente funzionante per un **Bet Tracker** (tracciatore di scommesse e sessioni di gioco). L'applicazione deve essere contenuta in un unico file `index.html` autolimitato, utilizzando HTML5, Tailwind CSS per lo stile, Lucide Icons per le icone (tramite CDN) e JavaScript nativo per la logica.

## 🎨 Estetica e Interfaccia (UI/UX)
- **Stile:** Ultra-moderno, pulito, minimalista e scuro (Dark Mode di default, es. sfondo `slate-950` o `zinc-900`).
- **Colori Accento:** - Smeraldo/Verde per i profitti e i trend positivi (`emerald-400`).
  - Rosa/Rosso per le perdite (`rose-500`).
  - Indigo/Violetto per i pulsanti di azione primaria (`indigo-500`).
- **Layout:** - Una dashboard responsive organizzata in blocchi puliti (card con bordi arrotondati e ombreggiature sottili).
  - In alto: un header elegante e la sezione KPI con i contatori totali.
  - Al centro: un modulo compatto o un modale per l'inserimento rapido dei dati.
  - In basso: la tabella/lista delle transazioni con filtri avanzati.

## 📊 Campi Dati e Logica
Ogni record salvato deve contenere e gestire i seguenti campi:
1. **Data:** Selettore di data (giorno/mese/anno) preimpostato sulla data odierna.
2. **Piattaforma di gioco:** Input testuale con suggerimenti o dropdown (es. Bet365, PokerStars, Sisal, Eurobet, Goldbet, Exchange).
3. **Tipo di gioco:** Dropdown di selezione (es. Scommesse Sportive, Poker Cash Game, Poker Torneo, Casinò, Betting Exchange).
4. **Deposito (Puntata):** Importo numerico in € caricato o puntato nella sessione.
5. **Cashout (Ritorno):** Importo numerico in € ritirato o vinto a fine sessione.
6. **Profit/Loss (Singolo):** Calcolato automaticamente in tempo reale come `Cashout - Deposito`. Se l'importo è > 0 mostra un badge verde con il segno `+`, se < 0 mostra un badge rosso con il segno `-`.

## 📈 Pannello Statistiche (KPI Totali)
La dashboard deve mostrare in tempo reale i seguenti dati aggregati:
- **Profit/Loss Totale:** La somma algebrica di tutti i profitti e le perdite (il dato più visibile, con formattazione dinamica del colore).
- **ROI (Return on Investment) %:** Calcolato come `(Profitto Totale / Deposito Totale) * 100`.
- **Volume di Gioco:** Totale complessivo depositato/puntato.
- **Win Rate %:** Percentuale delle sessioni chiuse in profitto (Cashout > Deposito) rispetto al totale delle sessioni inserite.

## ⚙️ Funzionalità Tecniche Richieste
- **Salvataggio Dati:** Utilizza il `localStorage` del browser per fare in modo che i dati inseriti rimangano memorizzati localmente anche se la pagina viene aggiornata o chiusa.
- **Filtri e Ordinamento:** Permetti all'utente di filtrare i dati della tabella per *Piattaforma* o *Tipo di gioco*, e di ordinare le sessioni per *Data* (dalla più recente alla più vecchia di default).
- **Gestione Record:** Possibilità di eliminare una singola sessione inserita per errore tramite un tasto "Cestino".
- **Data Management:** Aggiungi due piccoli pulsanti discreti per "Esporta Dati (JSON)" e "Importa Dati (JSON)" per permettere il backup dei dati personali.

## 🛠️ Output Richiesto
Fornisci il codice completo all'interno di un unico blocco di codice HTML (`index.html`). Non usare file esterni per script o stili; tutto deve essere integrato (Tailwind CSS e icone caricati via CDN ufficiali). Il codice deve essere pulito, modulare, accessibile e pronto all'uso.

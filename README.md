# WebTech Workshop: Microfrontends

## Anwendungen mit create-mf-app erstellen

### Schritt 1: Neues Projekt erstellen

1. Im Terminal `npx create-mf-app` ausführen.

### Schritt 2: Projektinformationen eingeben

Gib die folgenden Informationen für das Projekt ein:

1. **Name:** 
   - Wähle einen Namen für die App:
     - `host` (für die Hauptanwendung)
     - `header` (für die Header-Komponente)
     - `content` (für die Content-Komponente)

2. **Type:** 
   - Wähle `Application`.

3. **Port:** 
   - Setze den Port auf:
     - `8080` für `host`
     - `8081` für `header`
     - `8082` für `content`

4. **Framework:** 
   - Wähle `react`.

5. **Language:** 
   - Wähle `javascript`.

6. **CSS:** 
   - Wähle `CSS`.

7. **Bundler:** 
   - Wähle `Webpack`.

### Schritt 3: Nächste Schritte

1. Wechsle in das Verzeichnis der erstellten App.
2. Installiere die Abhängigkeiten.
3. Starte die Anwendung.

### Hinweis:

Für jedes weitere Micro-Frontend muss ein weiteres Terminal geöffnet werden.

---

# Aufgaben

## Aufgabe 1

Erstelle eine Host-Anwendung („host“) und zwei Remote-Anwendungen („header“ und „content“).

1. Füge die Komponenten aus dem Workshop-Repo den Anwendungen hinzu (jeweils ins `/src` Verzeichnis).
2. Starte die Anwendungen.

Die Anwendungen sollten ohne Fehlermeldungen laufen.

**Zeitaufwand:** ~ 20 min

---

## Aufgabe 2

Nutze das ModuleFederation-Plugin, um die Komponenten zu exponieren und um Remotes zu referenzieren und zu laden.

1. Füge die Exports in den Remote-Anwendungen hinzu.
2. Verwende die Komponenten dann in der `App.jsx` der Host-Anwendung.
3. Starte die Anwendungen neu.

**Hinweis:** Änderungen an der `webpack.config.js`-Datei werden erst nach einem Neustart der Anwendung wirksam!

**Zeitaufwand:** ~ 10 min

---

## Aufgabe 3

Nutze die Komponenten aus dem GitHub-Repo und vervollständige sie so, dass sie Custom Events nutzen.

1. Implementiere die Custom Events in den Komponenten.
2. Nutze Lazy Loading im Host, um die Komponenten zu laden.

**Zeitaufwand:** ~ 10 min
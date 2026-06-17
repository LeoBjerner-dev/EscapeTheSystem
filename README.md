# Escape the System

Ett escape room-spel byggt i React där spelaren ska ta sig igenom olika rum, lösa pussel och samla föremål för att till slut kunna fly från anläggningen.

## Starta projektet

```bash
npm run dev
```

## G-krav

* React Router med BrowserRouter, Routes och Route.
* Startsida med introduktion till spelet.
* Navigation med länkar till alla rum.
* Dynamiska routes med useParams().
* Inventory hanteras med Context API.
* Pussellogik där rätt föremål löser ett rum.
* Nya föremål läggs till i inventory när ett rum klaras.
* Olika bilder och instruktioner visas beroende på om rummet är löst eller inte.
* Rum som har lösts förblir lösta även när man lämnar och går tillbaka till dem.

## VG-krav

* useNavigate() används för att navigera till vinstsidan när sista rummet löses.
* useNavigate() används för att omdirigera användaren vid ogiltiga URL:er.
* useSearchParams() används för att visa och dölja ledtrådar via URL-parametern `?hint=true`.
* Tydlig komponentstruktur och jämförelser baserade på id:n.

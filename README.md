# RT15 WT – Amalfi PWA v1

Dette er første PWA-version bygget videre på den godkendte v16-UI.

## Sådan fungerer den
- Åbn siden på iPhone via et invitationslink.
- Brug Safari → Del → Føj til hjemmeskærm.
- Appen åbner derefter standalone som en app.
- Programdata ligger i `config/program.json`, så de kan opdateres online uden ny installation.
- `config/invites.json` indeholder den simple link-gate.

## Gratis hosting
Pakken er lavet til gratis statisk hosting, fx GitHub Pages eller Cloudflare Pages. Hosting skal være HTTPS for service worker/PWA-installation.

## Vigtigt om privathed
Denne v1 bruger en URL-token-gate, som er egnet til en privat rejsegruppe, men den er ikke en sikker brugerlogin-løsning: enhver der får det gyldige link kan åbne siden. Hvis der senere kræves rigtig adgangskontrol, kan gate-delen flyttes til en gratis edge/backend-løsning uden at ændre appens UI.

## Høj opløsning
Den godkendte yacht-original er inkluderet som `assets/yacht-approved.png`. Den er 1536×1024 og er også indlejret i UI'et som PNG. Originale/arbejdsassets er inkluderet, så vi ikke behøver bruge screenshots som kildebilleder.

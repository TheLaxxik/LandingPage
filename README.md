# Esticode — Astro Master Template

Minimalistická šablóna webu pre agentúru Esticode (Astro 6 + Tailwind CSS 4). Obsahuje responzívny navbar, tmavý režim, domovskú stránku a podstránky O nás, Služby a Kontakt.

## Čo potrebuješ pred inštaláciou

| Nástroj | Verzia |
|--------|--------|
| **Node.js** | `>= 22.12.0` (pozri `package.json` → `engines`) |
| **pnpm** | odporúčané (projekt používa `pnpm-lock.yaml`) |

Overenie v termináli:

```sh
node -v
pnpm -v
```

Ak nemáš pnpm:

```sh
npm install -g pnpm
```

Alternatíva: môžeš použiť `npm` alebo `yarn` (nižšie v README).

---

## Nový projekt — inštalácia od nuly

Keď **skopíruješ celý priečinok** do nového miesta (alebo ho otvoríš v Cursor/VS Code):

### 1. Skopíruj súbory

Skopíruj celý priečinok projektu. **Nekopíruj** (ak existujú z predchádzajúceho počítača):

- `node_modules/`
- `dist/`
- `.astro/` (cache — vytvorí sa sama)

Tieto priečinky sú v `.gitignore` a pri čistom kópiovaní z repozitára ich mať nebudeš.

### 2. Otvor terminál v koreni projekta

Cesta musí byť tam, kde leží `package.json`, napr.:

```sh
cd cesta/k/tvojmu/astro-master-template
```

### 3. Nainštaluj závislosti

```sh
pnpm install
```

Tým sa stiahnu **Astro**, **Tailwind CSS** a **@tailwindcss/vite** podľa `package.json` / `pnpm-lock.yaml`.

### 4. Spusti vývojový server

```sh
pnpm dev
```

V prehliadači otvor: **http://localhost:4321**

Zastavenie servera: `Ctrl + C` v termináli.

### 5. (Voliteľné) Produkčný build

```sh
pnpm build
pnpm preview
```

`preview` zobrazí zostavenú stránku z priečinka `dist/`.

---

## Príkazy

| Príkaz | Čo robí |
|--------|---------|
| `pnpm install` | Prvý krok — nainštaluje všetky balíčky |
| `pnpm dev` | Lokálny server + live reload (`localhost:4321`) |
| `pnpm build` | Zostaví statický web do `dist/` |
| `pnpm preview` | Náhľad zostaveného webu |
| `pnpm astro` | Astro CLI (napr. `pnpm astro --help`) |

### npm namiesto pnpm

```sh
npm install
npm run dev
npm run build
npm run preview
```

### yarn

```sh
yarn install
yarn dev
yarn build
yarn preview
```

---

## Štruktúra projektu

```text
/
├── public/              # Statické súbory (favicon, obrázky…)
├── src/
│   ├── components/      # Navbar, Hero, Services, Features, Footer, PageHero…
│   ├── layouts/         # Layout.astro (HTML kostra, global.css)
│   ├── pages/           # Routy: index, o-nas, sluzby, kontakt
│   └── styles/
│       └── global.css   # Tailwind + tmavý režim (@variant dark)
├── astro.config.mjs     # Astro + Tailwind Vite plugin
├── package.json
├── pnpm-lock.yaml       # Uzamknuté verzie (pnpm)
└── tsconfig.json
```

### Stránky (routy)

| URL | Súbor |
|-----|--------|
| `/` | `src/pages/index.astro` |
| `/o-nas` | `src/pages/o-nas.astro` |
| `/sluzby` | `src/pages/sluzby.astro` |
| `/kontakt` | `src/pages/kontakt.astro` |

---

## Časté problémy

**`pnpm: command not found`**  
→ Nainštaluj pnpm (`npm install -g pnpm`) alebo použij `npm install` + `npm run dev`.

**Chyba verzie Node.js**  
→ Aktualizuj Node na LTS 22+ ([nodejs.org](https://nodejs.org)).

**Po skopírovaní nefunguje / divné chyby**  
→ Vymaž `node_modules` a `.astro`, potom znova `pnpm install` a `pnpm dev`.

**Port 4321 je obsadený**  
→ Astro ponúkne iný port v termináli, alebo spusti `pnpm dev -- --port 3000`.

---

## Odporúčané rozšírenia (VS Code / Cursor)

V `.vscode/extensions.json`:

- **Astro** (`astro-build.astro-vscode`)
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)

---

## Ďalšie úpravy

- Kontaktný e-mail: `src/components/Footer.astro` a `src/pages/kontakt.astro` (premenná `email`)
- Farby tmavého režimu / accent: `src/styles/global.css` (`@theme`)
- Navigácia: `src/components/Navbar.astro` → pole `navLinks`

---

## Dokumentácia

- [Astro](https://docs.astro.build)
- [Tailwind CSS v4](https://tailwindcss.com/docs)

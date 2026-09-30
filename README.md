# Web Development Learning Repository

A numbered, project-based curriculum that moves from static HTML and CSS through modern React, Redux, TypeScript, and production-style Node.js APIs. Each top-level folder is a stage. Inside a stage, numbered subfolders are lessons or capstone projects for that topic.

This is a **personal practice workspace**, not a single deployable application. Open the folder that matches the skill you want to practice, run that project on its own, then move on.

---

## Learning path

Work through the folders in order. Later stages assume the earlier ones.

| Stage | Folder | Focus |
| --- | --- | --- |
| 1 | [`01_Basic_htm_css_js/`](./01_Basic_htm_css_js) | HTML tags, CSS, vanilla JavaScript, DOM |
| 2 | [`02_responsiveness/`](./02_responsiveness) | Flexbox, Grid, media queries, Tailwind, landing page |
| 3 | [`03_Javascript/`](./03_Javascript) | Language internals, DOM APIs, closures, patterns |
| 4 | [`04_React/`](./04_React) | Components, state, effects, routing, Context |
| 5 | [`05_Redux/`](./05_Redux) | Redux Toolkit store, slices, a media collection app |
| 6 | [`06_Typescript/`](./06_Typescript) | Types, interfaces, functions, generics |
| 7 | [`07_Backend/`](./07_Backend) | Node, Express, MongoDB, auth, uploads, tests |
| 8 | [`08_Backend-Ledger/`](./08_Backend-Ledger) | Double-entry ledger API (accounts, transfers, email) |

```text
web-dev/
├── 01_Basic_htm_css_js/     # first pages in the browser
├── 02_responsiveness/       # layout systems and a landing page
├── 03_Javascript/           # JS language and DOM (parts 1–4)
├── 04_React/                # 20 Vite + React lessons
├── 05_Redux/                # store basics + media project
├── 06_Typescript/           # TS playground (compile with tsc)
├── 07_Backend/              # Express from “hello world” to apps
└── 08_Backend-Ledger/       # JWT + MongoDB money-transfer API
```

---

## How to run things

There is **no root `package.json`**. Install and start each app from its own directory.

### Static HTML / CSS / JS

Open the `index.html` file in a browser, or use Live Server / a simple static server so relative CSS and JS paths resolve.

Typical locations:

- `01_Basic_htm_css_js/html/index.html`
- `01_Basic_htm_css_js/css/index.html`
- `01_Basic_htm_css_js/css_project/index.html`
- `01_Basic_htm_css_js/javascript/index.html`
- `01_Basic_htm_css_js/DOM/index.html`
- `02_responsiveness/*/index.html`
- `03_Javascript/part*/index.html`

### React, Redux, and Vite frontends

These apps use **Vite**, **React 19**, and often **Tailwind CSS**. From the project folder:

```bash
npm install
npm run dev
```

Build for production with `npm run build`, then preview with `npm run preview`.

### TypeScript playgrounds

Folders under `06_Typescript/` compile `.ts` with the local `tsconfig.json` (declaration maps and JS output are already present). From a lesson folder:

```bash
npx tsc
```

Open `01_basic_implementation/index.html` in the browser after compiling if you want to run the generated JS in the page.

### Express backends

From the chosen backend folder:

```bash
npm install
npx nodemon server.js
# or, when scripts exist:
npm run dev
npm start
```

Projects that talk to MongoDB or send email need a `.env` file (see each backend section). Never commit secrets.

---

## 1. HTML, CSS, and JavaScript foundations

**Path:** [`01_Basic_htm_css_js/`](./01_Basic_htm_css_js)

First contact with the browser: markup, styling, scripts, and the document tree.

| Subfolder | What you practice |
| --- | --- |
| `html/` | Headings, lists, images, links, forms (text, password, date, checkbox, radio, color) |
| `css/` | Selectors, colors, layout of a simple styled page |
| `css_project/` | A larger CSS-only page (composition of what you learned) |
| `javascript/` | Script hooked to HTML and CSS |
| `DOM/` | Selecting nodes, changing content, creating elements |

Open each `index.html` independently. There is also a local video file in this folder used as course material; it is not required to run the pages.

---

## 2. Responsive layout

**Path:** [`02_responsiveness/`](./02_responsiveness)

Layout that survives different viewport widths.

| Subfolder | What you practice |
| --- | --- |
| `flexbox_layout/` | Flex alignment, wrapping, and a small script |
| `grid_layout/` | CSS Grid tracks and placement |
| `mediaqueries/` and `mediaqueries2/` | Breakpoints and responsive typography/spacing |
| `tailwindcss/` | Utility-first CSS in a static HTML file |
| `project/` | Landing page (nav, hero, Remix Icon, image-based brand header) |

The `project/` page is the capstone for this stage: a marketing-style layout rather than isolated Flex/Grid drills.

---

## 3. JavaScript in depth

**Path:** [`03_Javascript/`](./03_Javascript)

Four parts, each with its own `index.html` (and CSS where needed).

### Part 1 — language basics

Types, `Symbol`, coercion (`+` vs `-` with strings), `switch`, function declarations, expressions, arrows, default parameters.

### Part 2 — DOM API

`querySelector` / `querySelectorAll`, `innerHTML`, attributes, `createElement`, `append` / `prepend`, `classList`, iterating lists, images, and related DOM mutations.

### Part 3 — closures and UI helpers

Closures for private counters, click-limiters, toaster-style notifications, and related encapsulation examples (including Tailwind-looking class strings in JS-created nodes).

### Part 4 — IIFE and modules-in-one-file

An IIFE “bank” object (`checkbalance`, `setBalance`, `withdraw`) plus further patterns (`heavy.js` is a separate script for heavier examples).

This stage is meant to be **read and run in the browser console / page**, not packaged with npm.

---

## 4. React (Vite)

**Path:** [`04_React/`](./04_React)

Twenty numbered Vite apps. Start at `01_folder` and move forward. Each app is self-contained (`package.json`, `src/`, `index.html`).

| Lesson | Folder | Topics |
| --- | --- | --- |
| 01 | `01_folder` | Vite + React project shape (`src/App.jsx`, entry, HMR) |
| 02 | `02_components` | Splitting UI into components |
| 03 | `03-props` | Passing data parent → child |
| 04 | `04_card_project` | Reusable cards from data |
| 05 | `05_css` | CSS in a React app |
| 06 | `06-tailwind` | Tailwind with Vite |
| 07 | `07-ui-project` | Multi-section landing UI (`Section1` / `Section2`), Remix Icon, image cards |
| 08 | `08_functions` | Event handlers and functions as props |
| 09 | `09_useState` | Local state |
| 10 | `10_input_form` | Controlled inputs |
| 11 | `11-two-way-binding` | Input value + `onChange` loop |
| 12 | `12-notes-app` | Form submit, list of notes, delete by index |
| 13 | `13-localstorage` | Persisting state in `localStorage` |
| 14 | `14-api-calling` | `fetch` (JSONPlaceholder users) and Axios (Picsum) |
| 15 | `15-useEffect` | Effects and dependency arrays |
| 16 | `16-gallery-project` | Paginated Picsum gallery, `useEffect` + Axios |
| 17 | `17-react-router-dom` | Basic client-side routes |
| 18 | `18-routing-advanced` | Nested routes, params (`/cources/:id`), 404, multiple navs |
| 19 | `19-bonus-topic` | Theme state lifted into the tree (`light` / others) |
| 20 | `20-context-api` | Sharing UI state (navbar/button) without prop drilling |

**Stack (typical):** React 19, Vite 8, ESLint, Tailwind 4 (`@tailwindcss/vite`) on UI-heavy lessons, Axios on API lessons, `react-router-dom` on routing lessons.

**Suggested order of mental model:**

1. JSX and components  
2. Props and composition  
3. State and forms  
4. Effects and HTTP  
5. Routing  
6. Context as an alternative to passing props through every layer  

Lesson 07 (UI project), 12 (notes), and 16 (gallery) are good **portfolio-style checkpoints** before Redux.

---

## 5. Redux Toolkit

**Path:** [`05_Redux/`](./05_Redux)

### `01-implementation`

Minimal store: a `counterSlice` with `increament`, `decreament`, and `increamentBy`. Use this to learn `createSlice`, `configureStore`, and wiring `react-redux`.

### `02-project`

A larger app:

- **Redux store** with `search` and `collection` slices  
- **Axios** via `src/api/MediaAPI.js`  
- **React Router** for screens  
- **Tailwind** and **react-toastify** for UI feedback  

Run from `05_Redux/02-project` with `npm install` and `npm run dev`.

This stage answers: *when component state is no longer enough, how does global client state live in a store?*

---

## 6. TypeScript

**Path:** [`06_Typescript/`](./06_Typescript)

No React here — typed JavaScript compiled with `tsc`.

| Folder | Topics |
| --- | --- |
| `01_basic_implementation` | Arrays, tuples, enums, interfaces, optional fields, type aliases, unions, intersections, classes/objects in `app.ts`, plus `index.html` to load compiled JS |
| `02_Functions` | Typed callbacks, optional/default params, rest args, function overloads |
| `03_Generics` | Generic functions, generic interfaces, generic classes (`BottleMaker<T>`) |

Each folder has `tsconfig.json`. Compiled artifacts (`app.js`, `.d.ts`, source maps) sit next to the source so you can inspect what the compiler emitted.

---

## 7. Backend (Node.js and Express)

**Path:** [`07_Backend/`](./07_Backend)

A ladder from “run a script” to authenticated apps with files and tests. Express **5.x** is used in later projects. MongoDB via **Mongoose** appears from `04_Database` onward.

| Folder | What it is | How it fits |
| --- | --- | --- |
| `01_Basic` | `cat-me` npm package printed in the terminal | First Node module install |
| `02_createServer` | Express app, `GET /` and `GET /about`, listen on port 3000 | First HTTP server |
| `03_createAPIs` | In-memory **notes** CRUD: `POST/GET /notes`, `PATCH/DELETE /notes/:index` | REST without a database |
| `04_Database` | Same notes API backed by **Mongoose** (`note.model`) | Persistence |
| `05_PostProject` | Full-stack **posts**: React frontend + Express backend, **Multer** + **ImageKit** uploads, **CORS** | Files + Mongo + UI |
| `06_Authentication` | `cookie-parser`, JWT, `/api/auth` and `/api/posts` | Cookies and protected routes |
| `07_Project2` | **Music** API: artists upload tracks/albums (Multer + ImageKit), users list music/albums | Roles (`authArtist` / `authUser`) |
| `08_Jest&ExpressValidator` | `GET /`, `POST /register` with **express-validator**, **Jest** + **Supertest** | Validation and HTTP tests |

### 05_PostProject layout

```text
05_PostProject/
├── Backend/     # Express, Multer memory storage, ImageKit, Post model
│               # POST /create-post  GET /posts
└── Frontend/    # Vite + React + Axios + react-router-dom
```

Run backend and frontend in two terminals. Point the frontend Axios base URL at the backend origin you actually use.

### 07_Project2 (music)

Authenticated routes under `/api/auth` and `/api/music`:

- `POST /api/music/upload` — artist, multipart field `music`  
- `POST /api/music/album` — artist  
- `GET /api/music/` — all tracks (user)  
- `GET /api/music/albums` and `GET /api/music/albums/:albumId` — albums (user)  

### 08_Jest & express-validator

`src/middlewares/validation.middleware.js` validates register payloads. Tests live under `src/test/`. Install deps, then run Jest according to how you invoke it locally (the `package.json` currently exposes `dev` / `start` for the server).

### Backend environment notes

Projects from `04` onward typically need:

- A MongoDB connection string (some early files hardcode URI in `db.js`; prefer `.env` as in later apps)  
- `JWT_SECRET` for auth apps  
- ImageKit (or similar) keys for upload services  
- `dotenv` loaded from `server.js` where used  

---

## 8. Backend Ledger (capstone API)

**Path:** [`08_Backend-Ledger/`](./08_Backend-Ledger)

A **double-entry bookkeeping** service: users own accounts; money never sits as a mutable `balance` field. Balance is the sum of immutable **ledger** lines (credits minus debits). Transfers write a transaction plus two ledger rows inside a MongoDB session.

### Stack

- **Express 5**, **Mongoose 9**, **JWT**, **bcryptjs**, **cookie-parser**  
- **Nodemailer** with Gmail **OAuth2** for registration and transfer emails  
- **Nodemon** for `npm run dev`

### Layout

```text
08_Backend-Ledger/
├── server.js                 # boot, dotenv, DB, listen
├── src/
│   ├── app.js                # json + cookies + routers
│   ├── config/db.js          # mongoose.connect(process.env.MONGO_URI)
│   ├── middleware/auth.middleware.js
│   ├── models/
│   │   ├── user.model.js
│   │   ├── account.model.js  # getBalance() aggregation
│   │   ├── transaction.model.js
│   │   ├── ledger.model.js   # immutable CREDIT/DEBIT rows
│   │   └── blackList.model.js
│   ├── controllers/          # auth, account, transaction
│   ├── routes/
│   └── services/email.service.js
```

### Domain model

| Collection | Role |
| --- | --- |
| **user** | Email, name, hashed password, optional hidden `systemUser` flag (for seeding funds) |
| **account** | Belongs to a user; `ACTIVE` / `FROZEN` / `CLOSED`; currency default `INR` |
| **transaction** | `fromAccount`, `toAccount`, `amount`, `status`, unique **idempotencyKey** |
| **ledger** | One CREDIT and one DEBIT per completed transfer; hooks block updates/deletes |
| **blacklist** | JWT stored on logout so the token cannot be reused |

Account status and both-accounts-ACTIVE checks run before a transfer. Insufficient funds are rejected using `account.getBalance()`. Duplicate `idempotencyKey` returns the existing completed/pending/failed/reversed outcome instead of moving money twice.

### Environment variables

Create `08_Backend-Ledger/.env` (gitignored). Typical keys used in code:

```env
MONGO_URI=
JWT_SECRET=
PORT=3000
EMAIL_USER=
CLIENT_ID=
CLIENT_SECRET=
REFRESH_TOKEN=
```

### Run

```bash
cd 08_Backend-Ledger
npm install
npm run dev
```

Default port is **3000** (see `server.js`).

### HTTP API

Base URL: `http://localhost:3000`

Send JSON on **POST** bodies. For **GET** balance, do not send `Content-Type: application/json` with an empty body (Express will try to parse it). Use a cookie `token` from login/register, or `Authorization: Bearer <jwt>`.

#### Auth — `/api/auth`

| Method | Path | Body | Notes |
| --- | --- | --- | --- |
| POST | `/register` | `{ "email", "name", "password" }` | Sets cookie, returns user + token, sends welcome email |
| POST | `/login` | `{ "email", "password" }` | Same cookie/token shape |
| POST | `/logout` | — | Blacklists JWT, clears cookie |

Passwords are hashed on save (`bcrypt`, 10 rounds). Password is `select: false` on the user document.

#### Accounts — `/api/accounts` (authenticated)

| Method | Path | Notes |
| --- | --- | --- |
| POST | `/` | Create an account for `req.user` |
| GET | `/` | List that user’s accounts |
| GET | `/balance/:accountId` | `{ accountId, balance }` from ledger aggregation |

#### Transactions — `/api/transactions`

| Method | Path | Auth | Body |
| --- | --- | --- | --- |
| POST | `/` | Logged-in user | `{ "fromAccount", "toAccount", "amount", "idempotencyKey" }` |
| POST | `/system/initial-funds` | **System user** JWT | `{ "toAccount", "amount", "idempotencyKey" }` |

Initial-funds uses the system user’s account as the source of credits (seeding a new account). Regular transfers check balances and write debit + credit ledger entries in a transaction session, then email the sender.

---

## Suggested study loop

1. Rebuild a static page from `01` / `02` without looking at CSS until you are stuck.  
2. Explain part 3 closures out loud, then implement a toaster yourself.  
3. In React, implement notes (`12`) then persist them (`13`) before touching routing.  
4. Recreate the Redux counter slice from memory, then read `02-project`.  
5. Add a field to the notes API in `07_Backend/03` then the same field in Mongo (`04`).  
6. Trace one ledger transfer: transaction `PENDING` → two ledger rows → `COMPLETED` → `getBalance()`.

---

## Tech stack (repository-wide)

| Area | Tools |
| --- | --- |
| Markup / style | HTML5, CSS3, Flexbox, Grid, media queries, Tailwind CSS, Remix Icon |
| Language | JavaScript (ES modules in Vite apps, CommonJS in Express), TypeScript |
| UI | React 19, React Router 7, Redux Toolkit, react-redux, Axios, react-toastify |
| Tooling | Vite, ESLint, Nodemon, Jest, Supertest |
| Server | Node.js, Express 5 |
| Data | MongoDB, Mongoose |
| Auth | JWT, httpOnly-style cookies, bcryptjs, token blacklist |
| Files / mail | Multer, ImageKit, Nodemailer (OAuth2) |

---

## Conventions in this repo

- **Numbered folders** encode order, not npm workspace packages.  
- **React lessons** keep the default Vite README in each app; this root file is the map of *what each lesson is for*.  
- **Backend** uses `server.js` + `src/app.js` once apps grow past a single file.  
- **Secrets** belong in `.env`. `08_Backend-Ledger/.gitignore` ignores `node_modules` and `.env`. Do not commit API keys or Mongo URIs.  
- This is practice code: some earlier backends still hardcode configuration. Prefer environment variables when you extend them.

---

## License and intent

Lesson projects use default `ISC` (or Vite template) licenses in their `package.json` files. Treat the repository as a **learning log**: clone or copy a single folder if you want a starter, rather than publishing the entire tree as one product.

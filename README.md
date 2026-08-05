A text-based visual breakdown of the site's layout, styling, and animation
details (shadows, bevels, gradients, timing) — generated from a screenshot
pass of the live page.

```
░▒▓█████████████████████████████████████████████████████████████████▓▒░
█                                                                     █
█   O U T E R   F R A M E                                            █
█   ridge 6px #c0c0c0 (light-top-left / dark-bottom-right bevel)      █
█   ╔═══════════════════════════════════════════════════════════╗    █
█   ║░░ light edge (top+left) ░░                          ▓▓▓▓▓▓║    █
█   ║░                                                     ▓dark▓║   █
█   ║░        bg fill: #000022                             ▓edge▓║   █
█   ║░        page bg (body, behind frame): #000033         ▓▓▓▓▓║   █
█   ║░        + scattered dust: · ✧ · · ✦ · (7-pt star field)  ║    █
█   ╚═══════════════════════════════════════════════════════════╝    █
░▒▓█████████████████████████████████████████████████████████████████▓▒░

╔══════════════════════════════════════════════════════════════════════╗
║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ L E D   M A R Q U E E ▓▓▓▓▓▓▓▓▓▓▓▓▓▓║
║████████████████████████████████████████████████████████████████████║
║█ bg: #000000                                                        █║
║█ ┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊ █║
║█ ┊  scanline stripes: repeating-linear-gradient 90°,                █║
║█ ┊  rgba(0,255,65,.06) 0-1px / transparent 1-3px  ┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊ █║
║█ ┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊ █║
║█   ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·   █║
║█  ·  DOT-MATRIX MASK ::before — radial dots 1px, 3×3px grid, ·     █║
║█   ·  mix-blend-mode:multiply → punches holes over ALL text  ·     █║
║█  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·   █║
║█                                                                    █║
║█        ·:*¨¨*:·.  ╔═╗╔═╗╔═╗╔═╗╦  ╦    ╔╦╗╔═╗╦ ╦╔╗╔  .:*¨¨*:·      █║
║█                    ╚═╗║  ║ ║║  ║  ║     ║║║ ║║║║║║║              █║
║█                    ╚═╝╚═╝╚═╝╩═╝╩═╝╩═╝   ═╩╝╚═╝╚╩╝╝╚╝              █║
║█        font: "DotGothic16" (real Google-Fonts dot-matrix face)    █║
║█        fill: #00ff41                                              █║
║█        text-shadow layer 1:  0 0 3px  #00ff41  ░░ tight glow      █║
║█        text-shadow layer 2:  0 0 9px  #00ff41  ▒▒ wide bloom      █║
║█        letter-spacing: 4px  |  motion: ⟵━━━━━━━━━ 16s linear loop █║
║█                                                                    █║
║█ ┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊┊ █║
║████████████████████████████████████████████████████████████████████║
║ border-top/bottom: 3px solid #003300 ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ ║
╚══════════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════════╗
║  🔥🔥🔥  F L A M E   S T R I P  (52px, transparent bg)  🔥🔥🔥        ║
║                                                                        ║
║  LAYER "back" ▓▓▓ (opacity 0.8, sits BEHIND) ▓▓▓                     ║
║  ┌────────────────────────────────────────────────────────────┐     ║
║  │ silhouette (blocky/staircase, NOT smooth diagonal):          │     ║
║  │  ▄▄█▄▄██▄██▄▄█▄▄██▄▄█▄██▄▄▄█▄██▄▄█▄██▄▄██▄▄█▄▄██▄▄█▄██▄▄     │     ║
║  │ fill bands (posterized — hard stops, no blend):               │     ║
║  │   ░░░ #ffab91 (0–22%)                                         │     ║
║  │   ▒▒▒ #ff5722 (22–55%)                                        │     ║
║  │   ▓▓▓ #b71c1c (55–100%)                                       │     ║
║  │ anim: flow ⟶ 1.6s steps(8)  +  flicker(scaleY) 0.5s steps(5)  │     ║
║  └────────────────────────────────────────────────────────────┘     ║
║                                                                        ║
║  LAYER "front" ███ (opacity 1.0, sits ON TOP) ███                    ║
║  ┌────────────────────────────────────────────────────────────┐     ║
║  │  ▟█▙▟▙█▛▙█▟▙██▛▙█▟▙█▛██▙▟█▙▛██▟▙█▛▙██▟▙█▛██▙▟█▙▛██▟▙█▛██▙    │     ║
║  │ fill bands (posterized, 4 hard stops):                       │     ║
║  │   ░ #fff9c4 (0–18%)   hottest / brightest tip                │     ║
║  │   ▒ #ffeb3b (18–40%)                                         │     ║
║  │   ▓ #ff9800 (40–68%)                                         │     ║
║  │   █ #e64a19 (68–100%)  base / darkest                        │     ║
║  │ anim: flow ⟶ 1.1s steps(10)  +  flicker 0.4s steps(4)        │     ║
║  │ transform-origin: BOTTOM CENTER (grows up like real fire)    │     ║
║  └────────────────────────────────────────────────────────────┘     ║
║                                                                        ║
║  ⚠ frame-rate note: steps() timing = discrete JUMPS, not smooth      ║
║    tween → deliberately looks like a cheap ~10fps GIF loop           ║
╚══════════════════════════════════════════════════════════════════════╝

     ·        ✦                    ✧                  ★        ·
   ✧    *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*    ✦
              (static yellow #ffff00, no animation here)

        ╔══════════════════════════════════════════════╗
        ║▓▓░░  ██████╗ ██╗██████╗  ██████╗              ║
        ║▓▓░░  ██╔══██╗██║██╔══██╗██╔═══██╗             ║
        ║▓▓░░  ██████╔╝██║██████╔╝██║   ██║             ║
        ║▓▓░░  ██╔══██╗██║██╔═══╝ ██║   ██║             ║
        ║▓▓░░  ██║  ██║██║██║     ╚██████╔╝             ║
        ║▓▓░░  ╚═╝  ╚═╝╚═╝╚═╝      ╚═════╝  'S HOMEPAGE ║
        ╚══════════════════════════════════════════════╝
         ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
          text-shadow: 2px 2px 0px #ff00cc (HARD offset,
          zero blur — retro "drop shadow", not a soft glow)

         fill: linear-gradient(90°, 🔴🟠🟡🟢🔵🟣🔴) × 400% width
         background-clip:text → color literally scrolls THROUGH
         the letters, 4s linear infinite (rainbow conveyor belt)

                          ▁▂▃▄▅▆▇█▇▆▅▄▃▂▁
                         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                        ▓▓▓▓▓ 🐱  ▓▓▓▓▓▓▓  ← walks IN PLACE
                         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓     (translateY -3px
                          ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔      + scaleX flip,
           ░▒▓█▓▒░▒▓█▓▒░ rainbow trail ░▒▓█▓▒░  steps(4)@0.4s
           (6-color repeating stripe, brightness pulses          = ~10fps
            steps(2)@0.4s — flickers, doesn't fade smoothly)      choppy)

              ⬤ a computer science guy building things ⬤
           (⬤ = HARD blink, step-start 1s — snaps on/off,
            no fade-in/fade-out, exactly like <blink> tag)

   ·        ★                    ✦                  ✧        ·
      *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

╔══════════════════════════════════════════════════════════════════════╗
║ ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱ UNDER-CONSTRUCTION HAZARD BAR ╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲  ║
║ ╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓ ║
║ ╱▓╱  repeating-linear-gradient 45°, #ffff00 12px / #000 12px  ╱▓╱   ║
║ ╱▓╱  border: 2px solid #000 (top AND bottom)             ╱▓╱       ║
║ ╱▓╱          ┌──────────────────────────────────┐        ╱▓╱      ║
║ ╱▓╱   🚧     │ THIS SITE IS PERPETUALLY UNDER    │    🚧  ╱▓╱      ║
║ ╱▓╱          │ CONSTRUCTION                       │        ╱▓╱      ║
║ ╱▓╱          └──────────────────────────────────┘        ╱▓╱      ║
║ ╱▓╱     ^ text sits on solid navy #000033 "chip", padding ╱▓╱      ║
║ ╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓╱▓ ║
╚══════════════════════════════════════════════════════════════════════╝

┌──────────────────────────────────────────────────────────────────────┐
│  N A V B A R          bg:#000  │▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔│  │
│                                 border-bottom: 2px DASHED #9900cc     │
│                                                                        │
│   ⟲✦ ★ About Me     ⟲✦ ★ Skillz     ⟲✦ ★ Guestbook   ⟲✦ ★ E-Mail Me│
│    ↑                                                                   │
│  each ✦ = separate <span>, rotate 0→360° + scale 1→1.3→1, 3s linear  │
│  the ★ is a PURE CSS ::before{content:"★ "} — not animated            │
│  hover state: text #ffff00 on #000 (inverts to look "selected")       │
└──────────────────────────────────────────────────────────────────────┘

  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃ ░░░░░░░░░░░░░░░░░░░░  ☆ A B O U T   M E  ☆  ░░░░░░░░░░░░░░░░░░░ ┃
  ┃ caption chip → bg #1a0033 / fg #ffff00 / border 2px solid #9900cc┃
  ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
  ┃  outer table border: 2px solid #9900cc                            ┃
  ┃  inner cell rules:   1px solid #4b0082                            ┃
  ┃                                                                    ┃
  ┃    ╭┈┈┈┈┈┈┈┈┈┈┈┈╮▓▓                                                ┃
  ┃    ┊▓▓▓▓▓▓▓▓▓▓▓▓┊▓▓  ← border: 3px INSET #999                     ┃
  ┃    ┊▓▓░░░░░░░░▓▓┊▓▓     (inset = looks PUSHED IN, sunken frame)   ┃
  ┃    ┊▓▓░ PHOTO ░▓▓┊▓▓                                               ┃
  ┃    ┊▓▓░░░░░░░░▓▓┊▓▓  filter: contrast(1.12) saturate(0.82)        ┃
  ┃    ┊▓▓▓▓▓▓▓▓▓▓▓▓┊▓▓          brightness(0.96)                    ┃
  ┃    ╰┈┈┈┈┈┈┈┈┈┈┈┈╯▓▓  + halftone mask: radial-gradient dots,       ┃
  ┃         ╲              1px circle / 3×3px grid, blend:multiply    ┃
  ┃          ╲___[★IT'S ME★]  ← pink chip, rotate 8°, blinks          ┃
  ┃                             step-start 1.2s, sits top-right corner ┃
  ┃          "yes, this is actually me"                               ┃
  ┃                                                                    ┃
  ┃   Hi!! My name is Ripo (a.k.a. riporipo223)... CS undergrad,      ┃
  ┃   full-stack + blockchain, finishing thesis on CryptoFolio.       ┃
  ┃   [NEW!!!] ← hard blink, step-start 1s                             ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃ ░░░░░░░░░░░░░░░  ☆  P I N N E D   P R O J E C T  ☆  ░░░░░░░░░░░ ┃
  ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
  ┃                                                                    ┃
  ┃   📌 ILoveMusic                    ⬤ ★ ACTIVE BUILD ★ ⬤          ┃
  ┃                                     (hard blink, pink #ff00cc)    ┃
  ┃                                                                    ┃
  ┃   A desktop app for DJs, built with Electron + React. Handles     ┃
  ┃   SoundCloud downloading, BPM detection, and metadata embedding   ┃
  ┃   so your crates stay tidy.  ⬤ ★ HOT ★ ⬤ (also hard-blinks)      ┃
  ┃                                                                    ┃
  ┃      ╭───────────────────────╮▓▓                                  ┃
  ┃     ╱░░░░░░░░░░░░░░░░░░░░░░░░╱▓▓  ← "retro-btn" — see FULL        ┃
  ┃    ╱░░ 💻  VIEW ON GITHUB  ░░╱▓▓     anatomy breakdown below ↓    ┃
  ┃   ╱░░░░░░░░░░░░░░░░░░░░░░░░░╱▓▓                                   ┃
  ┃   ╰───────────────────────────╯                                   ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

  ╭─────────────────────  " R E T R O - B T N "  A N A T O M Y  ─────╮
  │                                                                    │
  │        ░░▒▒▓▓██ light bevel edge (top+left) ██▓▓▒▒░░              │
  │      ┌────────────────────────────────────────────┐               │
  │      │ gradient fill 180°:                          │              │
  │      │   #fff77a ─▶ #ffd400 ─▶ #ff9d00               │             │
  │      │         (pale)   (mid)    (deep)               │            │
  │      │                                                 │           │
  │      │            💻  L A B E L   T E X T             │            │
  │      │      text-shadow: 1px 1px 0 #fff,               │           │
  │      │                   0 0 4px  #fff  (soft halo)    │           │
  │      └────────────────────────────────────────────┘               │
  │        ██▓▓▒▒░░ dark bevel edge (bottom+right) ░░▒▒▓▓██            │
  │                                                                     │
  │   ░ ░ ░ ░ ░ ░  outer ring-glow (box-shadow, 2-layer):              │
  │   ▒ ▒ ▒ ▒ ▒ ▒    0 0 0 2px  #000          (hard black outline)    │
  │  ▓ ▓ ▓ ▓ ▓ ▓      0 0 14px 2px #ff00cc     (soft pink bloom, 14px)│
  │                                                                     │
  │   :hover  → filter:brightness(1.15)                                │
  │             + shake anim: rotate ±2°, translate ±1px, 0.25s loop   │
  │             + glow EXPANDS to 22px blur / 6px spread               │
  │                                                                     │
  │   :active → bevel INVERTS                                          │
  │             (light edge ↔ dark edge swap = button looks PRESSED)   │
  │                                                                     │
  │   colorways:  .cyan → #d6ffff▶#5ce0ff▶#0090c4  (glow: yellow)      │
  │               .pink → #ffd6f7▶#ff5ce0▶#c400a0  (glow: cyan)        │
  │               .green→ #e2ffb0▶#8cff3d▶#3f9c00  (glow: pink)        │
  ╰─────────────────────────────────────────────────────────────────╯

  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃ ░░░░░░░░░░░░░░░░  ☆  S K I L L Z   &   T O O L Z  ☆  ░░░░░░░░░░ ┃
  ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
  ┃  ┌────────┐┌────────┐┌────────┐┌────────┐┌────────┐              ┃
  ┃  │Next.js ││TypeScrpt││Firebase││Ethers.js││ React  │  row 1       ┃
  ┃  └────────┘└────────┘└────────┘└────────┘└────────┘              ┃
  ┃  ┌────────┐┌────────┐┌────────┐┌────────┐┌────────┐              ┃
  ┃  │Electron││Laravel ││  Vue   ││Tailwind││PostgreSQL│ row 2        ┃
  ┃  └────────┘└────────┘└────────┘└────────┘└────────┘              ┃
  ┃   each chip: 88×31px (classic "88×31 web button" homage size)     ┃
  ┃   1px solid #666 border · font Courier New 10px · flat solid fill ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

  ╔═☆☆☆═════════ H E L P   R I P O   S U R V I V E ═════════☆☆☆═╗
  ║▓░ outer bg: linear-gradient(180°, #7ed321 → #3c8c0c)         ║
  ║▓░  + scattered ✦ ✧ · · ✦ (radial-gradient star dots, static) ║
  ║▓░  border: 4px OUTSET #ffee00 (pops UP off the page)          ║
  ║                                                                 ║
  ║   ┌── title-bar ─────────────────────────────────────────┐    ║
  ║   │ bg: linear-gradient(180°, #ffb347 → #ff6600)          │    ║
  ║   │ border: 2px solid #7a3d00                              │    ║
  ║   │                                                          │   ║
  ║   │         H E L P   R I P O   S U R V I V E              │   ║
  ║   │      text-shadow: 2px 2px 0 #000 (hard, no blur)       │   ║
  ║   │      ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ (underline: 3px #ffee00,     │   ║
  ║   │                            75% width, centered)         │   ║
  ║   │   "fund the coffee, instant noodles, and 3AM            │   ║
  ║   │    debugging sessions that keep everything alive"       │   ║
  ║   └──────────────────────────────────────────────────────┘    ║
  ║                                                                 ║
  ║              ░▒▓████████████████▓▒░                            ║
  ║             ▒▓██                  ██▓▒                          ║
  ║            ▓██   Click Here        ██▓   ← Georgia serif        ║
  ║            ▓██   to "Donate"       ██▓      bold, 18px          ║
  ║             ▒▓██                  ██▓▒                          ║
  ║              ░▒▓████████████████▓▒░                            ║
  ║        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ← drop shadow            ║
  ║         box-shadow: 0 4px 10px rgba(0,0,0,.5)                   ║
  ║         fill: linear-gradient(180°, #c81414 → #7a0000)          ║
  ║         bevel: 3px #ff6666 (light) / 3px #4a0000 (dark)         ║
  ║         :hover → brightness 1.15 + shake 0.3s loop              ║
  ║                                                                 ║
  ║  ┌── BLACK BOX ─────────────────────────────────────────────┐  ║
  ║  │ bg:#000  border: 2px solid #ffff00                        │  ║
  ║  │                                                             │  ║
  ║  │   A N Y   A M O U N T   W O U L D   B E   A P P R E C I A T│  ║
  ║  │              E D !                                          │  ║
  ║  │           (kidding... unless? 👀)                           │  ║
  ║  │                                                               │  ║
  ║  │   🔴 LIVE SUPPORTER COUNT:                                  │  ║
  ║  │   (🔴 = hard blink dot, step-start 1s)                      │  ║
  ║  │                                                               │  ║
  ║  │       ╔═══════════════════════╗                             │  ║
  ║  │       ║  0   0   0   4   8   1 ║  font: Courier New 32px    │  ║
  ║  │       ╚═══════════════════════╝  color: #39ff14             │  ║
  ║  │        ░░░░░░░░░░░░░░░░░░░░░░░   text-shadow:                │  ║
  ║  │         (soft green bloom)         0 0 6px #39ff14 (neon)   │  ║
  ║  │                                                               │  ║
  ║  │   ⚠ FICTIONAL — pure JS setTimeout loop, ticks +1..+3        │  ║
  ║  │      every 3–7s at random. Nothing is actually tracked.      │  ║
  ║  └───────────────────────────────────────────────────────────┘  ║
  ╚═════════════════════════════════════════════════════════════╝

  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃ ░░░░░░░░░░░░░  ☆  S I G N   M Y   G U E S T B O O K !  ☆  ░░░░░ ┃
  ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
  ┃  ┌──────────────────────────────────────────────────────────┐   ┃
  ┃  │ bg: #001a00   border: 2px GROOVE #00ff66                    │  ┃
  ┃  │  (groove = carved-IN 3D channel, unlike flat inset/outset)  │  ┃
  ┃  │                                                                │  ┃
  ┃  │  web_surfer_99 wrote: FIFO engine is actually kinda genius🔥│  ┃
  ┃  │  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ (dotted #336633 rule) │  ┃
  ┃  │  ↑ live entries render here (pulled fresh, newest-first)    │  ┃
  ┃  └──────────────────────────────────────────────────────────┘   ┃
  ┃                                                                    ┃
  ┃   ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮   ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮    ┃
  ┃   ┊  Your Name       ┊   ┊  Leave a lil message...          ┊    ┃
  ┃   ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯   ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯    ┃
  ┃   both: bg #001a00, border 2px INSET #336633 (sunken look)       ┃
  ┃                                                                    ┃
  ┃              ┌─────────────────────────────┐                     ┃
  ┃              │  ✍  S I G N   G U E S T B O O K  ✍ │  (pink btn)  ┃
  ┃              └─────────────────────────────┘                     ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

                    Y O U   A R E   V I S I T O R   N U M B E R :
                    ╔═══════════════════════╗
                    ║  0   0   0   4   8   2 ║   border: 2px INSET #888
                    ╚═══════════════════════╝   bg:#000 fg:#00ff00
                     letter-spacing: 3px — Firestore-backed, +1 per load

  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃╔╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╗┃
  ┃╏ DOUBLE FRAME: 4px DASHED #ff00cc  +  3px DOTTED #ffff00,      ╏┃
  ┃╏  outline-offset 3px (two borders float apart = "glitter")    ╏┃
  ┃╚╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╝┃
  ┃         ☆☆☆  E - M A I L   M E   P L Z Z Z  ☆☆☆                ┃
  ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
  ┃                                                                    ┃
  ┃      〰✉〰  DON'T BE SHY, HIT ME UP!!!  〰✉〰                    ┃
  ┃      (✉ shakes ±2° loop | text = rainbow-gradient, same          ┃
  ┃       scrolling-fill technique as the page title)                 ┃
  ┃                                                                    ┃
  ┃                  ┌────────────────┐                               ┃
  ┃                  │  ✉️  EMAIL ME  │  → mailto: link,              ┃
  ┃                  └────────────────┘     subject prefilled by JS   ┃
  ┃                                                                    ┃
  ┃    ┌───────────┐   ┌───────────────┐   ┌───────────┐            ┃
  ┃    │💻 GITHUB │   │📸 INSTAGRAM   │   │🐦 TWITTER │            ┃
  ┃    └───────────┘   └───────────────┘   └───────────┘            ┃
  ┃      cyan glow         pink glow          green glow             ┃
  ┃                                                                    ┃
  ┃    Status:  ⬤ probably shipping something right now              ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

              ▂▃▅▇  M E M B E R   O F   T H E              ▇▅▃▂
              ▂▃▅▇   I N D I E   D E V   W E B R I N G      ▇▅▃▂
                « PREV SITE │ RANDOM SITE │ NEXT SITE »
         ╲                                                    ╱
          ╲   click ANY of these → fake Win95 error popup:    ╱
           ╲  ┌──────────────────────────────┐                ╱
            ╲ │ ⚠ SYSTEM MESSAGE          [×]│               ╱
             ╲├──────────────────────────────┤              ╱
              │  🚫  "You have reached the    │             
              │      edge of the known        │            
              │      internet..."              │           
              │      [ OK, I'll turn back ]    │           
              └──────────────────────────────┘
              (titlebar: gradient #000080→#1084d0, Win95-blue)

        ┌──────────┐┌──────────┐┌──────────┐┌──────────┐
        │  BEST    ││ MADE     ││ 100% NO  ││ HTML 3.2 │
        │ VIEWED IN││ WITH ♥   ││FRAMEWORK ││COMPLIANT │
        │ NETSCAPE ││AND CODE  ││ BLOAT *  ││    **    │
        └──────────┘└──────────┘└──────────┘└──────────┘
              *lie      **also a lie   (10px gray, dead honest)

           © 1996 (2026) — Ripo's Homepage
           Made with Notepad, allegedly. No frames. No problem.
           (footer: Courier New, color #9999ff — dim "system" tone)

╔══════════════════════════════════════════════════════════════════════╗
║  🔥🔥🔥  same 2-layer flame strip, mirrored anim direction  🔥🔥🔥    ║
╠══════════════════════════════════════════════════════════════════════╣
║▓▓▓▓  LED MARQUEE (identical build to the top one)  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║
║  "⭐ THANKS FOR VISITING ⭐ COME BACK SOON ⭐ SIGN THE GUESTBOOK      ║
║   BEFORE YOU LEAVE ⭐ HAVE A NICE DAY ٩(◕‿◕)۶ ⭐"                    ║
╚══════════════════════════════════════════════════════════════════════╝

┌─ G L O B A L   F X  (not tied to one section) ────────────────────────┐
│                                                                          │
│  ✦ CURSOR TRAIL — spawns on mousemove (throttled 60ms):                │
│      glyph pool: ✦ ★ ✧ ☆ ✨ 💖  (random pick each spawn)               │
│      color pool: #ff00cc #ffff00 #00ffff #00ff66 (random pick)         │
│      motion: float up 18px + shrink to 0.4 scale + fade, 0.7s ease-out │
│                                                                          │
│         🐭·  ✦                                                          │
│           ╲   ★     ╲                                                   │
│            ╲   ✧      ╲    ← trail follows real cursor position        │
│             ╲   ☆       ╲     each dot is its own <span>, self-deletes │
│                                                                          │
│  ::selection → bg #ff00cc / fg #000 (highlighted text = solid pink)    │
│                                                                          │
│  page bg (body): #000033 navy + 7-point scattered star field,          │
│    radial-gradient dots (white + pale-yellow), tiled 220×220px         │
└──────────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ L E G E N D ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  █▓▒░  = shadow/glow density (█ darkest/closest → ░ lightest/farthest)
  ┈┈┈┈  = sunken/inset border        ═══  = raised/outset border
  ╱╲    = diagonal hazard stripe      ⬤   = hard step-start blink
  ✦★✧☆  = spinning / decorative icon  ┊┊┊ = dashed content divider
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

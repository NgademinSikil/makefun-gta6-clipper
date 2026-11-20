# makefun-gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/NgademinSikil/makefun-gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/NgademinSikil/makefun-gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical YouTube Short cut from Rockstar Games' official Grand Theft Auto VI Launch Trailer, entered in make.fun's $500 "Clip GTA 6 for the most YouTube views" bounty. The clip opens on one golden-hour moment from the trailer — a lowrider cruising Vice City, an iguana crossing the street, the GTA VI logo over the pink sunset skyline, then Lucia and Jason leaning on their convertible — and then turns to the viewer with the make.fun pitch on screen: "Make clips like this with AI and earn money on make.fun" (make.fun/bounty/gta6-clipper-01). The game came out on 19 November 2026, so Vice City is the conversation right now. The clip is 23 seconds, 1080x1920, and goes up on YouTube as a public Short; its address goes in VIDEO.json once it is uploaded.

## Run it

```sh
node main.ts
```

With the repository as the bot directory, the way the grader runs it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` from the repository root to the output directory. `VIDEO.json` is added once the clip is public on YouTube; until then the program warns and exits 0.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ds1567x3&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>

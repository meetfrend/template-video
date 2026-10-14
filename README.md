# Video starter

The base for new [Frend](https://github.com/meetfrend) videos: motion graphics written in React with [Remotion](https://www.remotion.dev), previewed in the browser with Vite, styled with Tailwind CSS v4.

```bash
pnpm install
pnpm dev      # preview in the browser
pnpm render   # render the Main composition to out/video.mp4
```

| Script | What it does |
| --- | --- |
| `pnpm dev` | Preview page with a player. `?frame=90` pauses on a frame, `?video=<id>` picks a composition |
| `pnpm render` | Render `Main` to `out/video.mp4` (`pnpm exec remotion render src/remotion/index.ts <id> out/<name>.mp4` for others) |
| `pnpm still` | Render one frame to `out/still.png` |
| `pnpm studio` | Remotion Studio |
| `pnpm typecheck` / `pnpm lint` | TypeScript / oxlint |

Compositions are listed in `src/remotion/compositions.ts`; scenes live next to it. Rendering downloads a headless Chrome on first run.

Remotion is free for individuals and companies of up to three people; larger companies need a [company license](https://www.remotion.dev/license).

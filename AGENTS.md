# Video project (Remotion)

- This project is a video, not a website. Scenes are React components driven by the current frame. Every composition is listed in `src/remotion/compositions.ts` with its size, fps and length in frames.
- Animate only from `useCurrentFrame()` with `interpolate`, `spring` and `Easing` from `remotion`. Never use CSS transitions or animations, `setTimeout`, or state that changes over time: rendering seeks to arbitrary frames, and anything not computed from the frame renders wrong.
- Use `<Sequence from={…} durationInFrames={…}>` to place scenes in time and `<Series>` to play them back to back. Clamp interpolations (`extrapolateRight: 'clamp'`).
- Media: `<Img>`, `<Video>`/`<OffthreadVideo>` and `<Audio>` from `remotion`, files in `public/` via `staticFile('name.png')`. Plain `<img>` can render blank frames.
- Lay out in pixels for the composition's size; it is scaled for preview. Keep text inside the title-safe area (about 5% in from each edge).
- To check a moment, open the preview at `/?frame=<n>` (and `&video=<id>`), which pauses there, and screenshot it. Check the first frame, the last and a few in between.
- `pnpm render` writes `out/video.mp4`; `pnpm still` writes a single frame. Docs: https://www.remotion.dev/docs

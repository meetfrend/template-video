import { Player, type PlayerRef } from '@remotion/player'
import { useEffect, useRef, useState } from 'react'
import { COMPOSITIONS } from './remotion/compositions'

/**
 * Plays the project's videos in the browser. `?frame=<n>` pauses the video on that frame, and
 * `?video=<id>` picks a composition, so any moment can be linked to and screenshotted.
 */
export function Preview() {
  const params = new URLSearchParams(window.location.search)
  const [id, setId] = useState(() => params.get('video') ?? COMPOSITIONS[0].id)
  const composition = COMPOSITIONS.find((c) => c.id === id) ?? COMPOSITIONS[0]
  const frame = params.has('frame') ? Number(params.get('frame')) : undefined
  const player = useRef<PlayerRef>(null)

  useEffect(() => {
    if (frame !== undefined) player.current?.seekTo(frame)
  }, [frame, composition.id])

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 bg-muted p-6">
      {COMPOSITIONS.length > 1 && (
        <select className="h-9 rounded-md border bg-background px-3 text-sm" value={composition.id} onChange={(e) => setId(e.target.value)}>
          {COMPOSITIONS.map((c) => (
            <option key={c.id}>{c.id}</option>
          ))}
        </select>
      )}
      <Player
        ref={player}
        key={composition.id}
        component={composition.component}
        compositionWidth={composition.width}
        compositionHeight={composition.height}
        fps={composition.fps}
        durationInFrames={composition.durationInFrames}
        initialFrame={frame}
        autoPlay={frame === undefined}
        loop
        controls
        acknowledgeRemotionLicense
        className="overflow-hidden rounded-xl shadow-lg"
        style={{ width: '100%', maxWidth: 1280, aspectRatio: `${composition.width} / ${composition.height}`, height: 'auto' }}
      />
      <p className="text-sm text-muted-foreground">
        {composition.id} · {composition.width}×{composition.height} · {(composition.durationInFrames / composition.fps).toFixed(1)}s at {composition.fps} fps
      </p>
    </main>
  )
}

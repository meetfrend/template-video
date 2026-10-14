import { AbsoluteFill, Easing, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'

/** A short title card: the headline springs in, the subtitle fades up, then both fade out. */
export function Intro() {
  const frame = useCurrentFrame()
  const { fps, durationInFrames } = useVideoConfig()

  const enter = spring({ frame, fps, config: { damping: 200 } })
  const exit = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const glow = interpolate(frame, [0, durationInFrames], [0.9, 1.15], { easing: Easing.inOut(Easing.ease) })

  return (
    <AbsoluteFill className="items-center justify-center bg-neutral-950 text-white" style={{ opacity: exit }}>
      <div
        className="absolute size-[900px] rounded-full bg-indigo-500/30 blur-[160px]"
        style={{ transform: `scale(${glow})` }}
      />
      <h1
        className="relative text-[150px] font-semibold tracking-tight"
        style={{ transform: `translateY(${interpolate(enter, [0, 1], [60, 0])}px)`, opacity: enter }}
      >
        Your video title
      </h1>
      <Sequence from={20} layout="none">
        <Subtitle />
      </Sequence>
    </AbsoluteFill>
  )
}

function Subtitle() {
  const frame = useCurrentFrame()
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' })
  return (
    <p className="relative mt-6 text-5xl text-white/70" style={{ opacity, transform: `translateY(${(1 - opacity) * 20}px)` }}>
      Made with Remotion
    </p>
  )
}

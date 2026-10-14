import { Composition } from 'remotion'
import '@/index.css'
import { COMPOSITIONS } from './compositions'

/** Registers the compositions for the Remotion CLI (render, still, studio). */
export function RemotionRoot() {
  return (
    <>
      {COMPOSITIONS.map((c) => (
        <Composition key={c.id} {...c} />
      ))}
    </>
  )
}

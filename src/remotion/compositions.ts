import type { ComponentType } from 'react'
import { Intro } from './intro'

/**
 * Every video in the project. The preview page plays each one, and `pnpm render` / `remotion render`
 * renders one by id. Durations are in frames: seconds × fps.
 */
export const COMPOSITIONS = [
  { id: 'Main', component: Intro, width: 1920, height: 1080, fps: 30, durationInFrames: 150 },
] as const satisfies readonly {
  id: string
  component: ComponentType
  width: number
  height: number
  fps: number
  durationInFrames: number
}[]

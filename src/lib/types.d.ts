declare type vec3 = {
  x: number
  y: number
  z: number
  xy: vec2
  yx: vec2
  xyz: vec3
  xzy: vec3
  yxz: vec3
  yzx: vec3
  zxy: vec3
  zyx: vec3
  times: (n: number) => vec3
  div: (n: number) => vec3
  max: () => number
  min: () => number
  sum: () => number
} & [x: number, y: number, z: number]

declare interface ScrollState {
  inViewport: boolean
  progress: number
  visibility: number
  viewport: number
}

declare type Rect = {
  top: number
  bottom: number
  left: number
  right: number
  width: number
  height: number
}

declare type Bounds = Rect & {
  x: number
  y: number
  positiveYUpBottom: number
}

declare interface Tracker {
  rect: Rect
  scale: vec3
  inViewport: boolean
  bounds: Bounds
  scrollState: ScrollState
  position: vec3
  update: (args?: { onlyUpdateInViewport?: boolean; scroll?: any }) => void
}

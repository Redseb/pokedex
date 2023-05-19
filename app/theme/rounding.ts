/**
  Use these roundings for border radius values throughout your app.
 */
  export const rounding = {
    s: 5,
    m: 10,
    circle: (size: number) => size / 2,
  } as const
  
  export type Rounding = keyof typeof rounding
  
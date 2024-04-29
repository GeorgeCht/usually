import { MouseEvent } from 'react'
import { create } from 'zustand'

export interface CursorState {
  cursorVariant: 'default' | 'action' | 'url'
  cursorText: string
  setCursorVariant: (variant: 'default' | 'action' | 'url') => void
  setCursorText: (text: string) => void
  hoverAction: (event: MouseEvent) => void
  hoverUrl: (event: MouseEvent) => void
  hoverReset: (event: MouseEvent) => void
}

export type InitialCursorState = Pick<
  CursorState,
  'cursorText' | 'cursorVariant'
>

export const initialState: InitialCursorState = {
  cursorVariant: 'default',
  cursorText: '',
}

export const useCursorStore = create<CursorState>((set) => ({
  ...initialState,
  setCursorVariant: (variant: CursorState['cursorVariant']) => {
    set({ cursorVariant: variant })
  },
  setCursorText: (text: CursorState['cursorText']) => {
    set({ cursorText: text })
  },
  hoverAction: (event: MouseEvent) => {
    set({ cursorVariant: 'action', cursorText: 'Action' })
  },
  hoverUrl: (event: MouseEvent) => {
    set({ cursorVariant: 'url', cursorText: '' })
  },
  hoverReset: (event: MouseEvent) => {
    set({ cursorVariant: 'default', cursorText: '' })
  },
}))

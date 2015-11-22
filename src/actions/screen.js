import { createAction } from 'redux-actions'

export const RESIZE = 'RESIZE'

export const resize = createAction(RESIZE, ({ width, height }) => ({ width, height }))

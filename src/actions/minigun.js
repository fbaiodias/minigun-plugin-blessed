import { createAction } from 'redux-actions'

export const PHASE_STARTED = 'PHASE_STARTED'
export const PHASE_COMPLETED = 'PHASE_COMPLETED'
export const STATS = 'STATS'
export const DONE = 'DONE'

export const phaseStarted = createAction(PHASE_STARTED, data => data)

export const phaseCompleted = createAction(PHASE_COMPLETED, data => data)

export const stats = createAction(STATS, data => data)

export const done = createAction(DONE, data => data)

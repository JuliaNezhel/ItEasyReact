type ActionType = {
  type: string
}

export type StateType = {
  collapsed: boolean
}

const TOGGLE_CLLAPSED = 'TOGGLE_CLLAPSED'

export const reduser = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case TOGGLE_CLLAPSED: {
      return {...state, collapsed: !state.collapsed}
    }
  }
  return state
}

import { reduser, StateType } from "./reduser"

test('reduser should change value to opposition value', () => {

    const state: StateType = {
        collapsed: false
    }

const newState = reduser(state, {type: 'TOGGLE_CLLAPSED'})

    expect(newState.collapsed).toBe(true)
})
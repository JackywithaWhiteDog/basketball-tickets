import { setToken, removeToken } from '../utils/cookie'

const initialState = {
  utils: {
    sidebar: true
  },
  user: {
    token: null
  },
  data: {
    players: [],
    games: []
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'utils/toggleSidebar': {
      return {
        ...state,
        utils: {
          ...state.utils,
          sidebar: !state.utils.sidebar
        }
      }
    }
    case 'user/setToken': {
      setToken(action.payload)
      return {
        ...state,
        user: {
          ...state.user,
          token: action.payload
        }
      }
    }
    case 'user/resetToken': {
      removeToken()
      return {
        ...state,
        user: {
          ...state.user,
          token: null
        }
      }
    }
    default: {
      return state
    }
  }
}

export { reducer }

import { setToken, removeToken } from '../utils/cookie'

const initialState = {
  utils: {
    sidebar: true
  },
  user: {
    token: null
  },
  player: {
    title:[],
    rows:[]
  },
  game: {
    title:[],
    rows:[]
  },
  team:{
    title:[],
    rows:[]
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
    case 'player/setPlayer': {
      return {
        ...state,
        player: action.payload
      }
    }
    case 'game/setGame': {
      return {
        ...state,
        game: action.payload
      }
    }
    case 'team/setTeam': {
      return {
        ...state,
        team: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export { reducer }

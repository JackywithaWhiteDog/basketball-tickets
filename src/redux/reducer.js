import { setToken, removeToken } from '../utils/cookie'

const initialState = {
  utils: {
    sidebar: true
  },
  user: {
    token: null,
    name: 'Guest',
    admin: false
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
  },
  buyticket:{
    title:[],
    rows:[],
    Game_ID:0
  },
  viewticket:{
    title:[],
    rows:[]
  },
  sql:{
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
    case 'user/setUser': {
      setToken(action.payload)
      console.log(action.payload)
      return {
        ...state,
        user: {
          token: action.payload.token,
          name: action.payload.name,
          admin: action.payload.admin
        }
      }
    }
    case 'user/resetUser': {
      removeToken()
      return {
        ...state,
        user: {
          token: null,
          name: 'Guest',
          admin: false
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
    case 'viewticket/setViewTicket': {
      return {
        ...state,
        viewticket: action.payload
      }
    }
    case 'buyticket/setBuyTicket': {
      return {
        ...state,
        buyticket: action.payload
      }
    }
    case 'sql/setSQL': {
      return {
        ...state,
        sql: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export { reducer }

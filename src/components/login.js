import Form from './form'
import { login } from '../api/user'
import { createHashHistory } from 'history'
import { useDispatch } from 'react-redux'

const history = createHashHistory()

const handleSubmit = dispatch => event => {
  event.preventDefault()
  if (!event.target.account.value || !event.target.password.value) {
    return
  }
  const data = {
    account: event.target.account.value,
    password: event.target.password.value
  }
  login(data).then(res => {
    alert('Login Succeed!!!')
    console.log(res)
    dispatch({ type: 'user/setToken', payload: res.token})
    history.push('/')
  }).catch(err => {
    alert(err)
  })
}

export default function Login () {
  const dispatch = useDispatch()
  return (
    <div>
      <Form
        title='Login'
        isLogin={true}
        handleSubmit={handleSubmit(dispatch)}
      />
    </div>
  )
}
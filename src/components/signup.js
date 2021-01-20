import Form from './form'
import { signup } from '../api/user'
import { createHashHistory } from 'history'

const history = createHashHistory()

const handleSubmit = event => {
  event.preventDefault()
  if (!event.target.name.value || !event.target.account.value || !event.target.password.value) {
    return
  }
  const data = {
    name: event.target.name.value,
    account: event.target.account.value,
    password: event.target.password.value
  }
  signup(data).then(res => {
    // console.log(res)
    alert('Sign Up Succeed!!!')
    history.push('/login')
  })
}

export default function Signup () {
  return (
    <div>
      <Form
        title='Sign Up'
        isLogin={false}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
import Form from './form'
import { login } from '../api/user'

const handleSubmit = event => {
  event.preventDefault()
  const data = {
    account: event.target.account.value,
    password: event.target.password.value
  }
  login(data).then(res => {
    console.log(res)
  })
}

export default function Login () {
  return (
    <div>
      <Form
        title='Login'
        isLogin={true}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
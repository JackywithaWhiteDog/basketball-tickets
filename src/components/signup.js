import Form from './form'
import { signup } from '../api/user'

const handleSubmit = event => {
  event.preventDefault()
  const data = {
    name: event.target.name.value,
    account: event.target.account.value,
    password: event.target.password.value
  }
  signup(data).then(res => {
    // console.log(res)
    alert('Sign Up Succeed!!!')
    window.location = '/'
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
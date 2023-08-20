import './App.css'

function App() {

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    console.log("submit")

    const url = "https://lovelatnet.com/api/login/login"

    fetch(url, {
      method: "POST",
      body: formData,
      mode: "cors",
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name='mail' placeholder='Correo Electronico' />
        <input type="password" name='password' placeholder='Contraseña' />
        <input type="submit"/>
      </form>
    </>
  )
}

export default App

import toast from "react-hot-toast"
function Home() {
  return (
    <div>
      <h2>This is Home Page</h2>
      {toast.success("Welcome our Home")}
    </div>
  )
}

export default Home

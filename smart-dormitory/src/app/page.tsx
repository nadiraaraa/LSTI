import { Header, NavBar} from "./components"

const page = () => {
  return (
    <>
      <Header/>
        <div className="overflow-y-auto">
          <div className="h-96">a</div>
          <div className="h-96">b</div>
          <div className="h-96">b</div>
        </div>
      <NavBar/>
    </>
  )
}

export default page
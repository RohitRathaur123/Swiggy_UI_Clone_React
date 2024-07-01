import { Category } from "./Components/Category"
import { DownloadApp } from "./Components/DownloadApp"
import { Explore } from "./Components/Explore"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import { NearMe } from "./Components/NearMe"
import { OnlineDelivery } from "./Components/OnlineDelivery"
import { Place } from "./Components/Place"
import { TopRest } from "./Components/TopRest"

function App() {
  return (
    <>
      <Header/>
      <Category/>
      <TopRest/>  
      <OnlineDelivery/>
      <Place/>
      <NearMe/>
      <Explore/>
      <DownloadApp/>
      <Footer/>
    </>
  )
}
export default App

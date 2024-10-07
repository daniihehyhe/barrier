import CameraPage from './mainPageComponents/CameraPage'
import ParkingInfoPage from './mainPageComponents/ParkingInfoPage'
import ParkingCost from './mainPageComponents/ParkingCost'
import ParkingStatus from '../components/ParkingStatus'

function MainPage() {

  return (
<>
<ParkingStatus/>
<CameraPage/>
<ParkingCost/>
<ParkingInfoPage/>
</>
  )
}

export default MainPage
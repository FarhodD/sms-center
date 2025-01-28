import StatisticsTable from "../components/StatisticsTable"
import MessageModal from "../components/MessageModal"

const MainDetailPage = () => {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "end"}}>
        <MessageModal />
      </div>
      <h2 style={{color: '#222', marginBottom: 24, fontSize: 22}}>Добро пожаловать в Row Messaging Hub!</h2>
      <StatisticsTable />
    </div>
  )
}

export default MainDetailPage
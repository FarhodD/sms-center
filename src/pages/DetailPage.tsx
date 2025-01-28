import { useState } from "react"
import { ArrowRightIcon, NimbusListIcon } from "../components/icons"
import ResultSearchTable from "../components/ResultSearchTable"
import SearchMessageForm from "../components/SearchMessageForm"

const DetailPage = () => {
  const [searchQuery, setSearchQuery] = useState()
  const handleSearch = (values: any) => {
    setSearchQuery(values);
  };

  return (
    <div>
      <h2 style={{marginBottom: 24, fontSize: 22}}>Детализация</h2>
      
      <div className="detail__container">
        <div className="detail__header">
          <div style={{display: "flex", alignItems: "center", gap: 6}}>
            <NimbusListIcon />
            Поиск
          </div>
           <ArrowRightIcon />
        </div>
        <SearchMessageForm onSearch={handleSearch} />
      </div>

      <div className="detail__container">
        <div className="detail__header">
          <div style={{display: "flex", alignItems: "center", gap: 6}}>
            <NimbusListIcon />
            Результаты поиска
          </div>
           <ArrowRightIcon />
        </div>
        <ResultSearchTable searchQuery={searchQuery}  />
      </div>

      

    </div>
  )
}

export default DetailPage
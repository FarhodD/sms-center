import React, { useEffect } from "react";
import { Table } from "antd";
import { useSearchDataStore } from "../store/messageStore";  
import { useSearchSms } from "../services/messages/hook-messages"; 
import type { TableColumnsType } from "antd";

interface MessageType {
  key: number;
  id: number;
  organization: string;
  recipient: string;
  content: string;
  sentAt: string;
}

const ResultSearchTable: React.FC<{ searchQuery?: string }> = ({ searchQuery }) => {
  const { searchData } = useSearchDataStore();
  const { mutate: searchSms, isLoading } = useSearchSms();

  console.log('SEARCH DATA RESULT: ', searchData);
  
  useEffect(() => {
    if (searchQuery) {
      searchSms();
    }
  }, [searchQuery, searchSms]);

  if (!searchData || searchData.items?.length === 0) {
    return <p style={{textAlign: "center"}}>Нет сообщений для отображения</p>;
  }

  const tableData: MessageType[] = searchData.items.map((item: any) => ({
    key: item.id,
    id: item.id,
    organization: item.organization.value,
    recipient: item.recipient,
    content: item.content,
    sentAt: new Date(item.sentAt).toLocaleString(),
  }));

  const columns: TableColumnsType<MessageType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "10%",
    },
    {
      title: "Организация",
      dataIndex: "organization",
      key: "organization",
      width: "20%",
    },
    {
      title: "Получатель",
      dataIndex: "recipient",
      key: "recipient",
      width: "20%",
    },
    {
      title: "Сообщение",
      dataIndex: "content",
      key: "content",
      width: "30%",
    },
    {
      title: "Дата отправки",
      dataIndex: "sentAt",
      key: "sentAt",
      width: "20%",
    },
  ];

  return (
    <div>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <Table<MessageType>
          columns={columns}
          dataSource={tableData}
          pagination={{ pageSize: 10 }}
          bordered
          style={{ marginTop: 20 }}
        />
      )}
    </div>
  );
};

export default ResultSearchTable;

import React from "react";
import { Table } from "antd";

const StatisticsTable: React.FC = () => {
  const columns = [
    {
      title: "Тип",
      dataIndex: "type",
      key: "type",
      fixed: "left",
      width: 150,
    },
    { title: "Новая", dataIndex: "new", key: "new" },
    { title: "Проверка", dataIndex: "check", key: "check" },
    { title: "Готова", dataIndex: "ready", key: "ready" },
    { title: "Активная", dataIndex: "active", key: "active" },
    { title: "Исполняется", dataIndex: "inProgress", key: "inProgress" },
    { title: "Отключена", dataIndex: "disabled", key: "disabled" },
    { title: "Закрыта", dataIndex: "closed", key: "closed" },
    { title: "Авария", dataIndex: "error", key: "error" },
    { title: "Квота", dataIndex: "quota", key: "quota" },
    { title: "Всего", dataIndex: "total", key: "total" },
  ];

  const data = [
    {
      key: "1",
      type: "Рассылки",
      new: 0,
      check: 0,
      ready: 0,
      active: 0,
      inProgress: 0,
      disabled: 0,
      closed: 0,
      error: 0,
      quota: 0,
      total: 0,
    },
    {
      key: "2",
      type: "Авторрассылки",
      new: 0,
      check: 0,
      ready: 0,
      active: 0,
      inProgress: 0,
      disabled: 0,
      closed: 0,
      error: 0,
      quota: 0,
      total: 0,
    },
  ];

  return (
    <div style={{ padding: "24px", background: "#fff", borderRadius: "8px" }}>
      <h2 style={{ marginBottom: "24px" }}>
        Статистика рассылок
      </h2>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
        scroll={{ x: "1000px" }}
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0}>Итого</Table.Summary.Cell>
            {columns.slice(1).map((_, index) => (
              <Table.Summary.Cell index={index + 1} key={index}>
                0
              </Table.Summary.Cell>
            ))}
          </Table.Summary.Row>
        )}
      />
    </div>
  );
};

export default StatisticsTable;

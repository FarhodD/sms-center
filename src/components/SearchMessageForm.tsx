import { Button, DatePicker, Form, Input, Radio } from "antd";
import { useSearchSms } from "../services/messages/hook-messages";

const { RangePicker } = DatePicker;
const rangeConfig = {
  rules: [{ type: 'array' as const, required: false }],
};
 
const SearchMessageForm: React.FC<{ onSearch: (values: any) => void }> = ({ onSearch }) => {
  const { mutate: searchSms } = useSearchSms();

  const onCreate = (values: any) => {
    const requestData = {
      ids: [values.ids || null], 
      filters: {
        recipient: values.recipient || '',
        startDate: values['range-time-picker']?.[0]?.toISOString() || null,
        endDate: values['range-time-picker']?.[1]?.toISOString() || null,
        sentAt: values['sentAt'] || null,
      },
      orderBy: {
        orderColumn: 1,
        direction: 0, 
      },
      pageInfo: {
        pageNumber: 1, 
        pageSize: values.maxRecords || 10,
      },
    };

    console.log('Request data:', requestData);
    searchSms(requestData);
    onSearch(requestData);
  };

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: '100%' }}
        onFinish={onCreate}
      >
        {/* <Form.Item name='sentAt'>
          <Radio.Group buttonStyle="solid" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Radio.Button value="0">Час</Radio.Button>
            <Radio.Button value="1">Сегодня</Radio.Button>
            <Radio.Button value="2">Вчера</Radio.Button>
            <Radio.Button value="3">Текущая неделя</Radio.Button>
            <Radio.Button value="4">Предыдущая неделя</Radio.Button>
            <Radio.Button value="5">Текущий месяц</Radio.Button>
            <Radio.Button value="6">Предыдущий месяц</Radio.Button>
          </Radio.Group>
        </Form.Item> */}

        {/* <Form.Item name="sent-at" label="Дата отправки">
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item> */}

        <Form.Item name="range-time-picker" {...rangeConfig}>
          <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>

        <Form.Item name="ids" label="ID сообщения">
          <Input type="number" placeholder="Введите номер" />
        </Form.Item>

        <Form.Item name="recipient" label="Получатель">
          <Input placeholder="Введите получателя" />
        </Form.Item>

        <Form.Item name="maxRecords" label="Макс. записей">
          <Input type="number" placeholder="Введите количество" />
        </Form.Item>

        <Form.Item style={{ display: 'flex', justifyContent: 'end' }}>
          <Button type="primary" htmlType="submit" style={{ width: 173, height: 40 }}>
            Поиск
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <SearchMessageForm />;

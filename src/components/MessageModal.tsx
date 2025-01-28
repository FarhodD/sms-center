import React, { useState } from 'react';
import { Button, Form, Input, Modal, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useAddSms } from '../services/messages/hook-messages';
import { MessageTypeForm } from '../types/messages';
import TextArea from 'antd/es/input/TextArea';

const MessageModal: React.FC = () => {
  const {mutate: addSMS, isPending} = useAddSms();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const onCreate = (values: MessageTypeForm) => {
    console.log('Received values of form: ', values);
    addSMS({...values});
    setOpen(false);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
      <PlusOutlined />Добавить сообщение
      </Button>
      <Modal
        open={open}
        title="Создать новое сообщение"
        okText="Создать"
        cancelText="Отмена"
        okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
        onCancel={() => setOpen(false)}
        destroyOnClose
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={form}
            name="form_in_modal"
            initialValues={{ modifier: 'public' }}
            clearOnDestroy
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      > 
        <Form.Item
          initialValue={1}
          name="organizationId"
          label="ID организации"
          rules={[{ required: true, message: 'Объязательное поле!!' }]}
        >
          <Select
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: 0, label: 'Organization 1' },
                { value: 1, label: 'Row Tech' },
                { value: 3, label: 'Organization 2' },
              ]}
           />
        </Form.Item>
        <Form.Item
          initialValue={1}
          name="messageType"
          label="Вид сообщения"
          rules={[{ required: true, message: 'Объязательное поле!' }]}
        >
          <Select
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: 0, label: 'Рассылки' },
                { value: 1, label: 'Авторассылки' },
              ]}
           />
        </Form.Item>


        <Form.Item 
          name="recipient" 
          label="Получатель"
          rules={[{required: true, message: 'Объязательное поле!'}]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item 
          name="content" 
          label="Сообщение"
          rules={[{required: true, message: 'Объязательное поле!'}]}
        >
          <TextArea />
        </Form.Item>

      </Modal>
    </>
  );
};

export default MessageModal;

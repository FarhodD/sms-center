import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useLogin } from "../services/auth/hook-auth";
import { redirect } from "react-router-dom";

type FieldType = {
  userLogin: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const { mutate: login, isLoading, isSuccess } = useLogin();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    login(values);

  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        className="form"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <img className="logo" src="logo.png" alt="" />

        <Form.Item<FieldType>
          name="userLogin"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input className="form-input" placeholder="Логин" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password className="form-input" placeholder="Пароль" />
        </Form.Item>

        <div className="btn-container">
          <Form.Item label={null}>
            <Button
              className="btn-form"
              type="primary"
              htmlType="submit"
              loading={isLoading}
            >
              Войти
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;

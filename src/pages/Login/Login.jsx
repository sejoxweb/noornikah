import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ users, onLogin }) => {
  const [loggedInSuccess, setLoggedInSuccess] = useState(false);
  const navigate = useNavigate();
  const onFinish = (values) => {
    const foundUser = users.find(
      (user) =>
        user.userName === values.userName && user.password === values.password
    );
    setLoggedInSuccess(!!foundUser);
    if (foundUser) {
      onLogin(foundUser);
      navigate("/");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
          userName: "ravi_kumar",
          password: "ravi123",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="userName"
          rules={[
            {
              required: true,
              message: "Please input your userName!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Link to="/signup">Signup</Link>
      {loggedInSuccess && <h1>user logged in successfully</h1>}
    </div>
  );
};
export default Login;

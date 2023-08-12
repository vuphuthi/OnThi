import { useSigninMutation } from "@/api/product";
import { Button, Form, Input } from "antd";
const Signin = () => {
  const [signin,{isError}] = useSigninMutation();
  const onFinish = (values: any) => {
    signin(values)
      .unwrap()
      .then( async () => {
        alert("Đăng Nhập thành công");
      })};
      {isError && alert("tài khoản hoặc mật khẩu sai")}
  type FieldType = { email?: string; password?: string };
  return (
    <>
      <h2 className="text-2xl font-bold m-5">Đăng Nhập</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Vui lòng nhập đúng định dạng email!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="password"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" danger htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Signin;

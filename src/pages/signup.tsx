import { useSignupMutation } from "@/api/product"
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [signup] = useSignupMutation();
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        signup(values).unwrap().then(async () => ((alert("Đăng ký thành công"),navigate("/signup"))))};
    type FieldType = { name: string, email?: string; password?: string; confirmPassword: string; };
    return (
        <>
            <h2 className="text-2xl font-bold m-5">Đăng ký</h2>
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
                    label="UserName"
                    name="name"
                    rules={[{ required: true, message: 'Vui lòng nhập name!' },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="email"
                    name="email"
                    rules={[{ required: true, message: 'Vui lòng nhập email!' },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="password"
                    name="password"
                    rules={[{ required: true, message: 'Vui lòng nhập password!' },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={["password"]}
                    rules={[
                        { required: true, message: "Confirm password is required" },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                } else {
                                    return Promise.reject(
                                        new Error("Confirm password does not match")
                                    );
                                }
                            },
                        }),
                    ]}
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
    )
}
export default Signup
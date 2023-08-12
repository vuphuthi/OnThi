import { useGetProductByidQuery, useUpdateProductMutation } from "@/api/product"
import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditProduct = () => {
    const { id } = useParams<{ id: string }>()
    const [EditProduct] = useUpdateProductMutation();
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        EditProduct({ ...values, id: id }).unwrap().then(async () => ((alert("Sửa thành công"), navigate("/"))))
    };
    const { data: productData } = useGetProductByidQuery(id || "")
    const [form] = Form.useForm()
    useEffect(() => {form.setFieldsValue({ name: productData?.name, price: productData?.price })}, [productData])
    type FieldType = { name?: string; price?: string; };
    return (
        <>
            <h2 className="text-2xl font-bold m-5">Sửa sản Phẩm</h2>
            <div>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="name"
                        rules={[{ required: true, message: 'Vui lòng nhập Tên!' },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="price"
                        name="price"
                        rules={[{ required: true, message: 'Vui lòng nhập Giá!' },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" danger htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
export default EditProduct
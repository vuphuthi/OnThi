import { useAddProductMutation } from "@/api/product"
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [addProduct] = useAddProductMutation();
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    addProduct(values).unwrap().then(async () => ((alert("Thêm thành công"), navigate("/"))))
  };
  type FieldType = { name?: string; price?: string; };
  return (
    <>
      <h2 className="text-2xl font-bold m-5">Thêm sản Phẩm</h2>
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
    </>
  )
}
export default AddProduct
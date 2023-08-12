import { useGetProductsQuery, useRemoveProductMutation } from "@/api/product";
import { Button, Popconfirm, Table} from "antd";
const ListProduct = () => {
  const [removeProduct] = useRemoveProductMutation()
  const { data: producData } = useGetProductsQuery()
  const confirm = (id: number | string) => {
    removeProduct(id).unwrap().then(()=>{return alert("xóa thành công")})}
  const dataSource = producData?.map(({ id, name, price }) => ({key:id,name,price}))
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Hành động',
      render: ({ key: id }: { key: number | string }) => (
        <div className="space-x-4">'
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => confirm(id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger >Xóa</Button>
          </Popconfirm>
          <Button type="primary" danger href={`/product/edit/${id}`}>Edit</Button>
        </div>
      )
    }
  ];
  return (
    <div>
      <header className="mb-4 flex justify-between">
        <h2 className="text-2xl font-bold">Danh sách sản phẩm</h2>
        <div className="">
          <Button type="primary" danger href={'/product/add'}>Thêm sản phẩm</Button>
        </div>
      </header>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default ListProduct
import { ConfigProvider, Table, TableProps } from "antd";

interface Props extends TableProps {

}

export default function AppTable({ ...props }: Props) {
  return (
    <ConfigProvider
        theme={{
            token: {
                fontFamily: ''
            }
        }}
    >
        <Table {...props}/>
    </ConfigProvider>
  )
}

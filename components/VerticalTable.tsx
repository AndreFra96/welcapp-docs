import React from "react"
import { Badge, Descriptions } from 'antd';

interface VerticalTableProps {
    data: [{
        key: string,
        value: React.ReactNode,
    }]
}

function VerticalTable({ props }: { props: VerticalTableProps }) {
    return <Descriptions bordered>
        {
            props.data.map((item) =>
                <Descriptions.Item span={4} label={item.key}>{item.value}</Descriptions.Item>)
        }
    </Descriptions>
}

export default VerticalTable;
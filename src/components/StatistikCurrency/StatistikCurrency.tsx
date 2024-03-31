import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

type CurrencyType = {
    data: any,
    CurrencuInfo: string,
}

const StatistikCurrency: React.FC<CurrencyType> = ({ data, CurrencuInfo }) => {
    const currentCurrency = data.Valute[CurrencuInfo].Value;
    const prevCurrency = data.Valute[CurrencuInfo].Previous;

    const isIncreasing = currentCurrency > prevCurrency;
    const isDecreasing = currentCurrency < prevCurrency;

    return (
        <Row gutter={16}>
            <Col span={12}>
                <Card bordered={false}>
                    <Statistic
                        title={isIncreasing ? 'Ростет' : 'Падает'}
                        value={currentCurrency}
                        precision={2}
                        prefix={isIncreasing ? <ArrowUpOutlined style={{ color: '#3f8600' }} /> :
                            isDecreasing ? <ArrowDownOutlined style={{ color: '#cf1322' }} /> : null}
                    />
                </Card>
            </Col>
        </Row>
    );
};
export default StatistikCurrency;
import React, { useContext, useEffect } from 'react';
import { GetCurrenciesResponseType } from '../../api/api';
import { ContextApp } from '../../context';
import s from './currencyFrom.module.css'
import StatistikCurrency from '../StatistikCurrency/StatistikCurrency';
import { Input, Select, Typography } from 'antd';

type currencyFromPropsType = {
    uniqueCharCodeList: Array<string>,
    data: GetCurrenciesResponseType | null,
    convertCurrency: (amount: number, from: string, to: string) => number,
    convertOneCurrency: (amount: number, from: string, to: string) => number
}

const CurrencyFrom: React.FC<currencyFromPropsType> = ({ uniqueCharCodeList, data, convertCurrency, convertOneCurrency }) => {
    const context = useContext(ContextApp);

    if (!context) {
        return null;
    }

    const { currencyTo, setAmountTo, setCurrencyFrom, currencyFrom,
        setAmountFrom, amountFrom, setAmountOneTo, amountOneTo, amountOneFrom } = context;

    useEffect(() => {
        handleAmountFromChange(amountFrom)
        handleCurrencyFromChange(currencyFrom)
    }, [currencyFrom, data]);

    useEffect(() => {
        handleAmountOneFromChange()
    }, [currencyTo, currencyFrom, data]);

    const handleAmountFromChange = (value: number) => {
        setAmountFrom(value);
        const convertedAmount = convertCurrency(value, currencyTo, currencyFrom);
        setAmountTo(convertedAmount);
    };

    const handleAmountOneFromChange = () => {
        const convertedOneAmount = convertOneCurrency(amountOneFrom, currencyFrom, currencyTo);
        setAmountOneTo(convertedOneAmount)
    };

    const handleCurrencyFromChange = (charCode: string) => {
        setCurrencyFrom(charCode);
        const convertedAmount = convertCurrency(amountFrom, currencyTo, charCode);
        setAmountTo(convertedAmount);
    };

    const as = (arr: Array<number>) => {
        const sorted = arr.sort((a, b) => b - a);
        let sum = 0;

        for (let i = 1; i < sorted.length; i++) {
            sum += sorted[i - 1] - sorted[i];
            console.log(sum)
        }

        return sum;
    }

    console.log(as([1, 2, 10]));
    return (
        <div>
            <div>
                <div>
                    <Select
                        value={currencyFrom}
                        onChange={value => handleCurrencyFromChange(value)}
                    >
                        {uniqueCharCodeList.map((charCode) => (
                            <option key={charCode}>{charCode}</option>
                        ))}
                    </Select>
                </div>
                <div>
                    <Input
                        className={s.inputClass}
                        type="number"
                        value={amountFrom}
                        onChange={(e) => handleAmountFromChange(Number(e.target.value))}
                    />
                </div>
                <span><Typography.Text>1{currencyFrom} = {amountOneTo}</Typography.Text> </span>
            </div>
            <div>
                <StatistikCurrency CurrencuInfo={currencyFrom} data={data} />
            </div>
        </div>
    );
};

export default CurrencyFrom;


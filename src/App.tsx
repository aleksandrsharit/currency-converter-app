import React, { useEffect } from 'react';
import { currenciesAPI } from './api/api';
import CurrencyFrom from './components/currency/currencyFrom';
import CurrencyTo from './components/currency/currencyTo';
import { ContextApp } from './context';
import s from './components/App.module.css'
import { SwapOutlined } from '@ant-design/icons';
import CalendarConverter from './components/calendar';
import type { Dayjs } from 'dayjs';
import { useStore } from './store/store';
import { Button, Skeleton, Typography } from 'antd';


const App: React.FC = () => {
    const {
        data,
        setData,
        amountTo,
        setAmountTo,
        amountOneTo,
        setAmountOneTo,
        currencyTo,
        setCurrencyTo,
        amountFrom,
        setAmountFrom,
        amountOneFrom,
        setAmountOneFrom,
        currencyFrom,
        setCurrencyFrom,
        openCalendar,
        setOpenCalendar,
        selectedDate,
        setSelectedDate
    } = useStore();

    useEffect(() => {
        const fetchData = async () => {
            const result = await currenciesAPI.getCurrencies();
            setData(result);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await currenciesAPI.getPreviousURLCurrencies(selectedDate);
            setData(result);
        };
        fetchData();
    }, [selectedDate]);

    const charCodeList = data
        ? Object.keys(data.Valute).map((c) => data.Valute[c].CharCode)
        : [];
    const uniqueCharCodeList = [...new Set(charCodeList)];

    const convertCurrency = (
        amount: number,
        from: string,
        to: string
    ): number => {
        if (!from || !to || !data) {
            return 0;
        }

        const fromCurrencyData = data.Valute[from];
        const toCurrencyData = data.Valute[to];

        if (!fromCurrencyData || !toCurrencyData) {
            return 0;
        }

        const amountInRubles = amount / fromCurrencyData.Value;

        const convertedAmount = amountInRubles * toCurrencyData.Value;

        return +convertedAmount.toFixed(2);
    };


    const convertOneCurrency = (
        amount: number,
        from: string,
        to: string
    ): number => {
        if (!from || !to || !data) {
            return 0;
        }
        const fromCurrencyData = data.Valute[from];
        const toCurrencyData = data.Valute[to];
        if (!fromCurrencyData || !toCurrencyData) {
            return 0;
        }
        const convertedUnit = fromCurrencyData.Value / toCurrencyData.Value;
        return +convertedUnit.toFixed(4);
    };

    const swapCurrencies = () => {
        setCurrencyFrom(currencyTo);
        setCurrencyTo(currencyFrom);
    }

    const onPanelChange = (value: Dayjs) => {
        console.log(value.format('YYYY-MM-DD'));
        setSelectedDate(value.format('YYYY/MM/DD'))
    };

    return (
        <div>
            <ContextApp.Provider value={{
                setAmountTo, currencyTo, currencyFrom, setAmountFrom, amountTo, amountFrom,
                setCurrencyTo, setCurrencyFrom, setAmountOneTo, amountOneTo, amountOneFrom,
                setAmountOneFrom
            }}>
                {data ? (
                    <div>
                        <div className={s.mainComponentsClass}>
                            <div className={s.buttonClass}>
                                <Button type="primary" onClick={() => setOpenCalendar(!openCalendar)}>{(data.Date).slice(0, 10)}</Button>
                                {openCalendar && <div className={s.calendarContainer}><CalendarConverter onChange={onPanelChange} /></div>}
                            </div>
                            <div className={s.currencyFromClass}>
                                <CurrencyFrom uniqueCharCodeList={uniqueCharCodeList} data={data}
                                    convertCurrency={convertCurrency} convertOneCurrency={convertOneCurrency} />
                            </div>
                            <div className={s.classButton}>
                                <SwapOutlined onClick={swapCurrencies} />
                            </div>
                            <div className={s.currencyToClass}>
                                <CurrencyTo uniqueCharCodeList={uniqueCharCodeList} data={data}
                                    convertCurrency={convertCurrency} convertOneCurrency={convertOneCurrency} />
                            </div>
                            <div className={s.dataClass}>
                                <Typography.Text>Данные за {(data.Date).slice(0, 10)}</Typography.Text>
                            </div>
                        </div>

                    </div>

                ) : (
                    <div><Skeleton/></div>
                )}
            </ContextApp.Provider>
        </div>
    );
};

export default App;
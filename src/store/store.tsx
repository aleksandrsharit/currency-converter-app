import { useState } from "react";
import { GetCurrenciesResponseType } from "../api/api";

export const useStore = () => {
    const [data, setData] = useState<GetCurrenciesResponseType | null>(null);
    const [amountTo, setAmountTo] = useState<number>(0);
    const [amountOneTo, setAmountOneTo] = useState<number>(1);
    const [currencyTo, setCurrencyTo] = useState<string>('USD');
    const [amountFrom, setAmountFrom] = useState<number>(13);
    const [amountOneFrom, setAmountOneFrom] = useState<number>(1);
    const [currencyFrom, setCurrencyFrom] = useState<string>('AUD');
    const [openCalendar, setOpenCalendar] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    return {
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
    };
}
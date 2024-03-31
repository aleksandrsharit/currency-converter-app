import axios from "axios";
import type { Dayjs } from 'dayjs';

export const instance = axios.create({
    baseURL: 'https://www.cbr-xml-daily.ru/',
});

export const currenciesAPI = {
    getCurrencies() {
        return instance.get<GetCurrenciesResponseType>('daily_json.js').then(res => res.data);
    },
    getPreviousURLCurrencies(date: string | null) {
        return instance.get<GetCurrenciesResponseType>(`archive/${date}/daily_json.js`).then(res => res.data);
    }
}

type Currency = {
    ID: string;
    NumCode: string;
    CharCode: string;
    Nominal: number;
    Name: string;
    Value: number;
    Previous: number;
};

export type GetCurrenciesResponseType = {
    Date: string;
    PreviousDate: string;
    PreviousURL: string;
    Timestamp: string;
    Valute: Record<string, Currency>;
};
import React from 'react';

export const ContextApp = React.createContext<{
    setAmountTo: React.Dispatch<React.SetStateAction<number>>;
    currencyTo: string;
    currencyFrom: string;
    setAmountFrom: React.Dispatch<React.SetStateAction<number>>;
    amountTo: number;
    amountFrom: number;
    setCurrencyTo: React.Dispatch<React.SetStateAction<string>>;
    setCurrencyFrom: React.Dispatch<React.SetStateAction<string>>;
    setAmountOneTo: React.Dispatch<React.SetStateAction<number>>;
    amountOneTo: number;
    setAmountOneFrom: React.Dispatch<React.SetStateAction<number>>;
    amountOneFrom: number;
} | undefined>(undefined);


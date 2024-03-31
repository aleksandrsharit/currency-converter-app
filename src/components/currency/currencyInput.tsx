// import React, { useContext, useEffect } from 'react';
// import { GetCurrenciesResponseType } from '../../api/api';
// import { ContextApp } from '../../context';
// import s from './currencyTo.module.css'
// import StatistikCurrency from '../StatistikCurrency/StatistikCurrency';
// import { Input, Select, Typography } from 'antd';

// type currencyToPropsType = {
//     uniqueCharCodeList: Array<string>,
//     data: GetCurrenciesResponseType | null,
//     convertCurrency: (amount: number, from: string, to: string) => number,
//     convertOneCurrency: (amount: number, from: string, to: string) => number,
// }

// const CurrencyTo: React.FC<currencyToPropsType> = ({ uniqueCharCodeList, data, convertCurrency, convertOneCurrency }) => {
//     const context = useContext(ContextApp);

//     if (context === undefined) {
//         return null
//     }

//     const { currencyTo, setAmountTo, setCurrencyTo, currencyFrom,
//         setAmountFrom, amountTo, amountOneTo, amountOneFrom,
//         setAmountOneFrom, amountFrom } = context;

//         const { currencyTo, setAmountTo, setCurrencyFrom, currencyFrom,
//             setAmountFrom, amountFrom, setAmountOneTo, amountOneTo, amountOneFrom } = context;

//     useEffect(() => {
//         handleAmountOneToChange()
//     }, [currencyTo, currencyFrom, data]);

//     useEffect(() => {
//         handleCurrencyToChange(currencyTo)
//     }, [currencyTo, data]);

//     const handleAmountToChange = (value: number) => {
//         setAmountTo(value);
//         const convertedAmount = convertCurrency(value, currencyFrom, currencyTo);
//         setAmountFrom(convertedAmount);
//     };

//     const handleAmountOneToChange = () => {
//         const convertedOneAmount = convertOneCurrency(amountOneTo, currencyTo, currencyFrom);
//         setAmountOneFrom(convertedOneAmount);
//     };

//     const handleCurrencyToChange = (charCode: string) => {
//         setCurrencyTo(charCode);
//         const convertedAmount = convertCurrency(amountFrom, charCode, currencyFrom);
//         setAmountTo(convertedAmount);
//     };

//     return (
//         <div>
//             <div>
//                 <div>
//                     <Select
//                         value={currencyTo}
//                         onChange={value => handleCurrencyToChange(value)}
//                     >
//                         {uniqueCharCodeList.map((charCode) => (
//                             <option key={charCode}>{charCode}</option>
//                         ))}
//                     </Select>
//                 </div>
//                 <div>
//                     <Input
//                         className={s.inputClass}
//                         type="number"
//                         value={amountTo}
//                         onChange={(e) => handleAmountToChange(Number(e.target.value))}
//                     />
//                 </div>
//                 <span><Typography.Text>1{currencyTo} = {amountOneFrom}</Typography.Text></span>
//             </div>
//             <div>
//                 <StatistikCurrency CurrencuInfo={currencyTo} data={data} />
//             </div>
//         </div>
//     );
// };

// export default CurrencyTo;
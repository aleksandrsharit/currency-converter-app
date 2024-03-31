// import React, { useContext, useEffect } from 'react';
// import { GetCurrenciesResponseType } from './../api/api';
// import { ContextApp } from '../context';
// import s from './currencyTo.module.css'

// type currencySelector = {
//     uniqueCharCodeList: Array<string>,
//     data: GetCurrenciesResponseType | null,
//     convertCurrency: (amount: number, from: string, to: string) => number,
// }

// const currencySelector: React.FC<currencyToPropsType> = ({ uniqueCharCodeList, data, convertCurrency }) => {
//     const context = useContext(ContextApp);

//     if (context === undefined) {
//         return null
//     }

//     const { currencyTo, setAmountTo, setCurrencyTo, currencyFrom,
//         setAmountFrom, amountTo } = context;


//     useEffect(() => {
//         if (uniqueCharCodeList.length > 0) {
//             setCurrencyTo(uniqueCharCodeList[13]);
//         }
//     }, []);
//     debugger;

//     const handleAmountToChange = (value: number) => {
//         setAmountTo(value);
//         const convertedAmount = convertCurrency(value, currencyTo, currencyFrom);
//         setAmountFrom(convertedAmount);
//     };

//     const handleCurrencyToChange = (charCode: string) => {
//         setCurrencyTo(charCode);
//         const convertedAmount = convertCurrency(amountTo, currencyFrom, charCode);
//         setAmountFrom(convertedAmount);
//     };

//     return (
//         <div>
//             {data ? (
//                 <div>
//                     <div>
//                         <select
//                             value={currencyTo}
//                             onChange={(e) => handleCurrencyToChange(e.target.value)}
//                         >
//                             {uniqueCharCodeList.map((charCode) => (
//                                 <option key={charCode}>{charCode}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <div>
//                         <input
//                             className={s.inputClass}
//                             type="number"
//                             value={amountTo}
//                             onChange={(e) => handleAmountToChange(Number(e.target.value))}
//                         />
//                     </div>
//                 </div>
//             ) : (
//                 <div>Loading...</div>
//             )}
//         </div>
//     );
// };

// export default currencySelector;
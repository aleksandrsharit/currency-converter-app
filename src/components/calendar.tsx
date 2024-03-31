import React from 'react';
import { Calendar, theme } from 'antd';
import type { Dayjs } from 'dayjs';

type CalendarType = {
    onChange: (value: Dayjs) => void;
};

const CalendarConverter: React.FC<CalendarType> = ({ onChange }) => {
    const { token } = theme.useToken();

    const wrapperStyle: React.CSSProperties = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    const handlePanelChange = (value: Dayjs) => {
        onChange(value);
    };

    return (
        <div style={wrapperStyle}>
            <Calendar fullscreen={false} onChange={handlePanelChange} />
        </div>
    );
};

export default CalendarConverter;
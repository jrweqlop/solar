import React from "react";

interface BatteryGaugeProps {
    level: number;         // ค่าระดับแบตเตอรี่ 0-100
    isCharging?: boolean;  // กำลังชาร์จอยู่หรือไม่
}

const BatteryGauge: React.FC<BatteryGaugeProps> = ({ level, isCharging = false }) => {
    // ตัดค่าระดับแบตไม่ให้น้อยกว่า 0 และไม่เกิน 100
    const percentage = Math.min(Math.max(level, 0), 100);

    const levelClass = percentage > 75
        ? "high"
        : percentage > 40
            ? "medium"
            : percentage > 20
                ? "low"
                : "critical";

    return (
        <>
            <div className={`battery-gauge ${levelClass}`}>
                <div className="battery-body">
                    <div
                        className="battery-level"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
                <div className="battery-cap"></div>
                {isCharging && <div className="charging-icon">⚡</div>}
            </div>
        </>

    );
};

export default BatteryGauge;

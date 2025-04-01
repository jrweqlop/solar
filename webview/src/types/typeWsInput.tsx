interface MonitorFromGD32 {
    B12V_plus: number;
    Temp1: number;
    Temp2: number;
    Temp3: number;
    Temp4: number;
    TempAvg: number;
    Emergency_IsPush: boolean;
}

interface StatusCommandOn {
    on_HV_Battery: boolean;
    on_DcFastCharger: boolean;
    on_EV_To_ESS: boolean;
    on_MPPT_Solar_Charger: boolean;
    on_HV_Inverter: boolean;
    on_Relay_SSR_AC: boolean;
}

interface FlagChildControlIsDown {
    HV_Battery_Is_Down: boolean;
    DcFastCharger_Is_Down: boolean;
    EV_To_ESS_Is_Down: boolean;
    MPPT_Solar_Charger_Is_Down: boolean;
    HV_Inverter_Is_Down: boolean;
}

interface DataBattPack {
    volt: number;
    cellMin: number;
    cellMax: number;
    tempMin: number;
    tempMax: number;
    dataCellInPack: Record<string, number>;
}

interface DataCal {
    moduleVoltMin: number;
    moduleVoltMax: number;
    moduleVoltAVG: number;
    cellVoltMin: number;
    cellVoltMax: number;
    cellVoltAVG: number;
    TempMin: number;
    TempMax: number;
    TempAVG: number;
}

interface DataAllBcu {
    ID_18F090F3_HighVoltageEnergyStorage1Data1: {
        P_Plus_volt: number;
        B_Plus_Volt: number;
        pack_Current: number;
        pack_power: number;
    };
    ID_18F091F3_HighVoltageEnergyStorage1Data2: {
        Max_temp: number;
        Max_temp_Pack: number;
        Min_Temp: number;
        Min_Temp_Pack: number;
        vDiff: number;
        version: number;
    };
    ID_18F092F3_HighVoltageEnergyStorage1Data3: {
        Max_Cell_Volt: number;
        Min_Cell_Volt: number;
        Max_Cell_Pack: number;
        Min_cell_Pack: number;
        cell_average: number;
    };
    ID_18F093F3_HighVoltageEnergyStorage1Data4: {
        Insulation_to_Plus: number;
        Insulation_to_Minus: number;
        Current_Leak_to_Plus: number;
        Current_Leak_to_Minus: number;
    };
    ID_18F094F3_HighVoltageEnergyStorage1Data5: {
        J1772Data_Charger_Max_Support_Amp: number;
        J1772Data_Charge_Gun_State: number;
        OBC_Request_Volt: number;
        OBC_Actual_Volt: number;
        OBC_Request_Current: number;
        OBC_Actual_current: number;
        DC_Data_Low_volt_Batt: number;
        DC_Data_DCDC_Volt: number;
        DC_Data_DCDC_Current: number;
        DC_Data_ENA_Status: number;
    };
    ID_18F096F3_HighVoltageEnergyStorage1Status1: {
        Protect1_Pack_Under_voltage: boolean;
        Protect1_Pack_Over_voltage: boolean;
        Protect1_cell_under_voltage: boolean;
        Protect1_cell_over_voltage: boolean;
        Protect1_charge_Over_current: boolean;
        Protect1_discharge_Over_current: boolean;
        Protect1_Module_cell_diff: boolean;
        Protect1_Low_SOC: boolean;
        Protect1_Charge_Over_temp: boolean;
        Protect1_Charge_under_temp: boolean;
        Protect1_Discharge_Over_Temp: boolean;
        Protect1_Discharge_Under_Temp: boolean;
        Protect1_Short_Circuit: boolean;
        Protect1_MaxSoC: boolean;
        Protect1_System_Cell_Diff: boolean;
        Protect1_Temperature_Diff: boolean;
        Protect2_Pack_Under_voltage: boolean;
        Protect2_Pack_Over_voltage: boolean;
        Protect2_cell_under_voltage: boolean;
        Protect2_cell_over_voltage: boolean;
        Protect2_charge_Over_current: boolean;
        Protect2_discharge_Over_current: boolean;
        Protect2_Module_cell_diff: boolean;
        Protect2_Low_SOC: boolean;
        Protect2_Charge_Over_temp: boolean;
        Protect2_Charge_under_temp: boolean;
        Protect2_Discharge_Over_Temp: boolean;
        Protect2_Discharge_Under_Temp: boolean;
        Protect2_Short_Circuit: boolean;
        Protect2_MaxSoC: boolean;
        Protect2_System_Cell_Diff: boolean;
        Protect2_Temperature_Diff: boolean;
        status_Data_checksum_Error: boolean;
        status_Charger_Detected: boolean;
        status_Charging: boolean;
        status_precharge_Error: boolean;
        status_BMU_Power_On: boolean;
        status_low_volt_batt_charging: boolean;
        status_IMD_Warning: boolean;
        status_IMD_Protect: boolean;
        status_Charge_Complete: boolean;
        Contactor_Status_status_contractor_Precharge: boolean;
        Contactor_Status_status_contractor_Main_Plus: boolean;
        Contactor_Status_status_contractor_Main_Minus: boolean;
        Contactor_Status_status_Charge_contractor: boolean;
        Contactor_Status_contactor_5: boolean;
        Contactor_Status_contactor_6: boolean;
        Contactor_Status_contactor_7: boolean;
        Contactor_Status_contactor_8: boolean;
        SOC: number;
    };
    ALL_DATA_BATTERY_PACK_AND_CELL: Record<string, DataBattPack>;
    Data_Cal: DataCal;
}

interface DataAllDcFastCharger {
    ID_0x170056f4: {
        statusGun: {
            Out_Process: boolean;
            Charging: boolean;
            On_Process: boolean;
            Preparing: boolean;
            Available: boolean;
        };
        statusLamp: {
            Lamp_G_on: boolean;
            Lamp_Y_on: boolean;
            Lamp_R_on: boolean;
        };
        statusIsMissing: {
            Emer_sw: boolean;
            Door1: boolean;
            Door2: boolean;
            IMD: boolean;
            Power_Module: boolean;
            Power_Meter: boolean;
            PLC: boolean;
        };
    };
    ID_0x170156f4: {
        Volt_Req: number;
        Current_Req: number;
        Volt_Actual: number;
        Current_Actual: number;
        Power_Actual_kW: number;
    };
    ID_0x170256f4: {
        SOC: number;
        Temp: number;
        Volt_In: number;
        Current_In: number;
        Power_In_kW: number;
    };
    ID_0x170356f4: {
        Ohm_to_HV_Plus: number;
        Ohm_to_HV_Sub: number;
    };
    IMD: {
        Ohm_Per_V_HV_P: number | null;
        Ohm_Per_V_HV_S: number | null;
    };
    efficiency: number;
}

interface DataAllEvToEss {
    voltChargeEss_V: number;
    CurrentChargeEss_A: number;
    PowerChargeEss_kW: number;
    EnergyChargeEss_kWh: number;
    evSoc: number;
    essSoc: number;
    statusGun: {
        Out_Process: boolean;
        Charging: boolean;
        On_Process: boolean;
        Preparing: boolean;
        Available: boolean;
    };
    statusIsMissing: {
        plc_Is_Missing: boolean;
        powerModule_Is_Missing: boolean;
        powerMeter_Is_Missing: boolean;
    };
    voltInModule_V: number;
    CurrentInModule_A: number;
    PowerInModule_kW: number;
    EnergyInModule_kWh: number;
    efficiency: number;
}

interface DataAllHvInverter {
    statusInverterOn: boolean;
    volt_in: number;
    current_in: number;
    power_in: number;
    Energy_in: number;
    volt_out: number;
    current_out: number;
    power_out: number;
    Energy_out: number;
    efficiency: number;
}

interface DataAllMpptSolarCharger {
    modeWorkingEnabled: boolean;
    statusCharge: boolean;
    volt_in_solar: number;
    current_in_solar: number;
    power_in_solar: number;
    Energy_in_solar: number;
    volt_out_battery: number;
    current_out_battery: number;
    power_out_battery: number;
    Energy_out_battery: number;
    efficiency: number;
}

interface InternetData {
    Time: string;
    monitorFrom_GD32: MonitorFromGD32;
    statusCommandOn: StatusCommandOn;
    flagChildControlIsDown: FlagChildControlIsDown;
    DATA_ALL_BCU: DataAllBcu;
    DATA_ALL_DC_FastCharger: DataAllDcFastCharger;
    DATA_ALL_EvToEss: DataAllEvToEss;
    DATA_ALL_HV_Inverter: DataAllHvInverter;
    DATA_ALL_MPPT_SOLAR_CHARGER: DataAllMpptSolarCharger;
}
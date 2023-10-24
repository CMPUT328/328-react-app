/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayerUpdateFormInputValues = {
    username?: string;
    role?: string;
    rank_2023?: number;
    rank_2020?: number;
    rank_2021?: number;
    rank_2022?: number;
};
export declare type PlayerUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
    rank_2023?: ValidationFunction<number>;
    rank_2020?: ValidationFunction<number>;
    rank_2021?: ValidationFunction<number>;
    rank_2022?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayerUpdateFormOverridesProps = {
    PlayerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<TextFieldProps>;
    rank_2023?: PrimitiveOverrideProps<TextFieldProps>;
    rank_2020?: PrimitiveOverrideProps<TextFieldProps>;
    rank_2021?: PrimitiveOverrideProps<TextFieldProps>;
    rank_2022?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlayerUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlayerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    player?: any;
    onSubmit?: (fields: PlayerUpdateFormInputValues) => PlayerUpdateFormInputValues;
    onSuccess?: (fields: PlayerUpdateFormInputValues) => void;
    onError?: (fields: PlayerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayerUpdateFormInputValues) => PlayerUpdateFormInputValues;
    onValidate?: PlayerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlayerUpdateForm(props: PlayerUpdateFormProps): React.ReactElement;

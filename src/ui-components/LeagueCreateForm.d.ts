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
export declare type LeagueCreateFormInputValues = {
    league_name?: string;
    image_url?: string;
};
export declare type LeagueCreateFormValidationValues = {
    league_name?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeagueCreateFormOverridesProps = {
    LeagueCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    league_name?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LeagueCreateFormProps = React.PropsWithChildren<{
    overrides?: LeagueCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LeagueCreateFormInputValues) => LeagueCreateFormInputValues;
    onSuccess?: (fields: LeagueCreateFormInputValues) => void;
    onError?: (fields: LeagueCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LeagueCreateFormInputValues) => LeagueCreateFormInputValues;
    onValidate?: LeagueCreateFormValidationValues;
} & React.CSSProperties>;
export default function LeagueCreateForm(props: LeagueCreateFormProps): React.ReactElement;

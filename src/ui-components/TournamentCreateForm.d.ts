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
export declare type TournamentCreateFormInputValues = {
    tournament_name?: string;
    tournament_name_partial?: string;
};
export declare type TournamentCreateFormValidationValues = {
    tournament_name?: ValidationFunction<string>;
    tournament_name_partial?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TournamentCreateFormOverridesProps = {
    TournamentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tournament_name?: PrimitiveOverrideProps<TextFieldProps>;
    tournament_name_partial?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TournamentCreateFormProps = React.PropsWithChildren<{
    overrides?: TournamentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TournamentCreateFormInputValues) => TournamentCreateFormInputValues;
    onSuccess?: (fields: TournamentCreateFormInputValues) => void;
    onError?: (fields: TournamentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TournamentCreateFormInputValues) => TournamentCreateFormInputValues;
    onValidate?: TournamentCreateFormValidationValues;
} & React.CSSProperties>;
export default function TournamentCreateForm(props: TournamentCreateFormProps): React.ReactElement;

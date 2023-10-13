/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RegionCreateFormInputValues = {};
export declare type RegionCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RegionCreateFormOverridesProps = {
    RegionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type RegionCreateFormProps = React.PropsWithChildren<{
    overrides?: RegionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RegionCreateFormInputValues) => RegionCreateFormInputValues;
    onSuccess?: (fields: RegionCreateFormInputValues) => void;
    onError?: (fields: RegionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RegionCreateFormInputValues) => RegionCreateFormInputValues;
    onValidate?: RegionCreateFormValidationValues;
} & React.CSSProperties>;
export default function RegionCreateForm(props: RegionCreateFormProps): React.ReactElement;

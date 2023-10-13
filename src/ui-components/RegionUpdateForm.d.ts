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
export declare type RegionUpdateFormInputValues = {};
export declare type RegionUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RegionUpdateFormOverridesProps = {
    RegionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type RegionUpdateFormProps = React.PropsWithChildren<{
    overrides?: RegionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    region?: any;
    onSubmit?: (fields: RegionUpdateFormInputValues) => RegionUpdateFormInputValues;
    onSuccess?: (fields: RegionUpdateFormInputValues) => void;
    onError?: (fields: RegionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RegionUpdateFormInputValues) => RegionUpdateFormInputValues;
    onValidate?: RegionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RegionUpdateForm(props: RegionUpdateFormProps): React.ReactElement;

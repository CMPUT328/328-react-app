/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getTournament } from "../graphql/queries";
import { updateTournament } from "../graphql/mutations";
export default function TournamentUpdateForm(props) {
  const {
    id: idProp,
    tournament: tournamentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    tournament_name: "",
    tournament_name_partial: "",
  };
  const [tournament_name, setTournament_name] = React.useState(
    initialValues.tournament_name
  );
  const [tournament_name_partial, setTournament_name_partial] = React.useState(
    initialValues.tournament_name_partial
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = tournamentRecord
      ? { ...initialValues, ...tournamentRecord }
      : initialValues;
    setTournament_name(cleanValues.tournament_name);
    setTournament_name_partial(cleanValues.tournament_name_partial);
    setErrors({});
  };
  const [tournamentRecord, setTournamentRecord] =
    React.useState(tournamentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getTournament,
              variables: { id: idProp },
            })
          )?.data?.getTournament
        : tournamentModelProp;
      setTournamentRecord(record);
    };
    queryData();
  }, [idProp, tournamentModelProp]);
  React.useEffect(resetStateValues, [tournamentRecord]);
  const validations = {
    tournament_name: [{ type: "Required" }],
    tournament_name_partial: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          tournament_name,
          tournament_name_partial: tournament_name_partial ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateTournament,
            variables: {
              input: {
                id: tournamentRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TournamentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Tournament name"
        isRequired={true}
        isReadOnly={false}
        value={tournament_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tournament_name: value,
              tournament_name_partial,
            };
            const result = onChange(modelFields);
            value = result?.tournament_name ?? value;
          }
          if (errors.tournament_name?.hasError) {
            runValidationTasks("tournament_name", value);
          }
          setTournament_name(value);
        }}
        onBlur={() => runValidationTasks("tournament_name", tournament_name)}
        errorMessage={errors.tournament_name?.errorMessage}
        hasError={errors.tournament_name?.hasError}
        {...getOverrideProps(overrides, "tournament_name")}
      ></TextField>
      <TextField
        label="Tournament name partial"
        isRequired={false}
        isReadOnly={false}
        value={tournament_name_partial}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tournament_name,
              tournament_name_partial: value,
            };
            const result = onChange(modelFields);
            value = result?.tournament_name_partial ?? value;
          }
          if (errors.tournament_name_partial?.hasError) {
            runValidationTasks("tournament_name_partial", value);
          }
          setTournament_name_partial(value);
        }}
        onBlur={() =>
          runValidationTasks("tournament_name_partial", tournament_name_partial)
        }
        errorMessage={errors.tournament_name_partial?.errorMessage}
        hasError={errors.tournament_name_partial?.hasError}
        {...getOverrideProps(overrides, "tournament_name_partial")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || tournamentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || tournamentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

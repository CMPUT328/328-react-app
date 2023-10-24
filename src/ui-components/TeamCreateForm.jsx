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
import { createTeam } from "../graphql/mutations";
export default function TeamCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    team_name: "",
    acronym: "",
    rank: "",
  };
  const [team_name, setTeam_name] = React.useState(initialValues.team_name);
  const [acronym, setAcronym] = React.useState(initialValues.acronym);
  const [rank, setRank] = React.useState(initialValues.rank);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTeam_name(initialValues.team_name);
    setAcronym(initialValues.acronym);
    setRank(initialValues.rank);
    setErrors({});
  };
  const validations = {
    team_name: [{ type: "Required" }],
    acronym: [],
    rank: [],
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
          team_name,
          acronym,
          rank,
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
            query: createTeam.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TeamCreateForm")}
      {...rest}
    >
      <TextField
        label="Team name"
        isRequired={true}
        isReadOnly={false}
        value={team_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              team_name: value,
              acronym,
              rank,
            };
            const result = onChange(modelFields);
            value = result?.team_name ?? value;
          }
          if (errors.team_name?.hasError) {
            runValidationTasks("team_name", value);
          }
          setTeam_name(value);
        }}
        onBlur={() => runValidationTasks("team_name", team_name)}
        errorMessage={errors.team_name?.errorMessage}
        hasError={errors.team_name?.hasError}
        {...getOverrideProps(overrides, "team_name")}
      ></TextField>
      <TextField
        label="Acronym"
        isRequired={false}
        isReadOnly={false}
        value={acronym}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              team_name,
              acronym: value,
              rank,
            };
            const result = onChange(modelFields);
            value = result?.acronym ?? value;
          }
          if (errors.acronym?.hasError) {
            runValidationTasks("acronym", value);
          }
          setAcronym(value);
        }}
        onBlur={() => runValidationTasks("acronym", acronym)}
        errorMessage={errors.acronym?.errorMessage}
        hasError={errors.acronym?.hasError}
        {...getOverrideProps(overrides, "acronym")}
      ></TextField>
      <TextField
        label="Rank"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rank}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              team_name,
              acronym,
              rank: value,
            };
            const result = onChange(modelFields);
            value = result?.rank ?? value;
          }
          if (errors.rank?.hasError) {
            runValidationTasks("rank", value);
          }
          setRank(value);
        }}
        onBlur={() => runValidationTasks("rank", rank)}
        errorMessage={errors.rank?.errorMessage}
        hasError={errors.rank?.hasError}
        {...getOverrideProps(overrides, "rank")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

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
import { createPlayer } from "../graphql/mutations";
export default function PlayerCreateForm(props) {
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
    username: "",
    role: "",
    rank_2023: "",
    rank_2020: "",
    rank_2021: "",
    rank_2022: "",
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [role, setRole] = React.useState(initialValues.role);
  const [rank_2023, setRank_2023] = React.useState(initialValues.rank_2023);
  const [rank_2020, setRank_2020] = React.useState(initialValues.rank_2020);
  const [rank_2021, setRank_2021] = React.useState(initialValues.rank_2021);
  const [rank_2022, setRank_2022] = React.useState(initialValues.rank_2022);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUsername(initialValues.username);
    setRole(initialValues.role);
    setRank_2023(initialValues.rank_2023);
    setRank_2020(initialValues.rank_2020);
    setRank_2021(initialValues.rank_2021);
    setRank_2022(initialValues.rank_2022);
    setErrors({});
  };
  const validations = {
    username: [{ type: "Required" }],
    role: [],
    rank_2023: [],
    rank_2020: [],
    rank_2021: [],
    rank_2022: [],
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
          username,
          role,
          rank_2023,
          rank_2020,
          rank_2021,
          rank_2022,
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
            query: createPlayer.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "PlayerCreateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              role,
              rank_2023,
              rank_2020,
              rank_2021,
              rank_2022,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Role"
        isRequired={false}
        isReadOnly={false}
        value={role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              role: value,
              rank_2023,
              rank_2020,
              rank_2021,
              rank_2022,
            };
            const result = onChange(modelFields);
            value = result?.role ?? value;
          }
          if (errors.role?.hasError) {
            runValidationTasks("role", value);
          }
          setRole(value);
        }}
        onBlur={() => runValidationTasks("role", role)}
        errorMessage={errors.role?.errorMessage}
        hasError={errors.role?.hasError}
        {...getOverrideProps(overrides, "role")}
      ></TextField>
      <TextField
        label="Rank 2023"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rank_2023}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              username,
              role,
              rank_2023: value,
              rank_2020,
              rank_2021,
              rank_2022,
            };
            const result = onChange(modelFields);
            value = result?.rank_2023 ?? value;
          }
          if (errors.rank_2023?.hasError) {
            runValidationTasks("rank_2023", value);
          }
          setRank_2023(value);
        }}
        onBlur={() => runValidationTasks("rank_2023", rank_2023)}
        errorMessage={errors.rank_2023?.errorMessage}
        hasError={errors.rank_2023?.hasError}
        {...getOverrideProps(overrides, "rank_2023")}
      ></TextField>
      <TextField
        label="Rank 2020"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rank_2020}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              username,
              role,
              rank_2023,
              rank_2020: value,
              rank_2021,
              rank_2022,
            };
            const result = onChange(modelFields);
            value = result?.rank_2020 ?? value;
          }
          if (errors.rank_2020?.hasError) {
            runValidationTasks("rank_2020", value);
          }
          setRank_2020(value);
        }}
        onBlur={() => runValidationTasks("rank_2020", rank_2020)}
        errorMessage={errors.rank_2020?.errorMessage}
        hasError={errors.rank_2020?.hasError}
        {...getOverrideProps(overrides, "rank_2020")}
      ></TextField>
      <TextField
        label="Rank 2021"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rank_2021}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              username,
              role,
              rank_2023,
              rank_2020,
              rank_2021: value,
              rank_2022,
            };
            const result = onChange(modelFields);
            value = result?.rank_2021 ?? value;
          }
          if (errors.rank_2021?.hasError) {
            runValidationTasks("rank_2021", value);
          }
          setRank_2021(value);
        }}
        onBlur={() => runValidationTasks("rank_2021", rank_2021)}
        errorMessage={errors.rank_2021?.errorMessage}
        hasError={errors.rank_2021?.hasError}
        {...getOverrideProps(overrides, "rank_2021")}
      ></TextField>
      <TextField
        label="Rank 2022"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rank_2022}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              username,
              role,
              rank_2023,
              rank_2020,
              rank_2021,
              rank_2022: value,
            };
            const result = onChange(modelFields);
            value = result?.rank_2022 ?? value;
          }
          if (errors.rank_2022?.hasError) {
            runValidationTasks("rank_2022", value);
          }
          setRank_2022(value);
        }}
        onBlur={() => runValidationTasks("rank_2022", rank_2022)}
        errorMessage={errors.rank_2022?.errorMessage}
        hasError={errors.rank_2022?.hasError}
        {...getOverrideProps(overrides, "rank_2022")}
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

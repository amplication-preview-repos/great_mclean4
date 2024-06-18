import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AdCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="targetInterests" multiline source="targetInterests" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};

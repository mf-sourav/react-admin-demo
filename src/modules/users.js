// in src/users.js
import React from 'react';
import { List, Datagrid, TextField, EmailField,EditButton,Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin';
import { Responsive, SimpleList, ReferenceField } from 'react-admin';
const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="username" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
export const UserList = props => (
<List {...props} filters={<UserFilter />}>
<Responsive
        small={
            <SimpleList
                primaryText={record => record.username}
                secondaryText={record => record.email}
                tertiaryText={record => record.phone}
            />
        }
      medium={  
        <Datagrid>
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
            <EditButton />
        </Datagrid>
        }
        />
    </List>
);
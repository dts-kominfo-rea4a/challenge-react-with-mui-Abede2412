// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";

import { CardActionArea, Card, TextField, CardActions, Button } from "@mui/material";

const ContactForm = ({fnaddContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({ name: "",
    phone: "",
    email: "",
    photo: ""}); 
    
    const textFieldOnChangeHandler = (event) => {
        const value = event.target.value;
        const property = event.target.name;

        setNewContact({...newContact, [property]: value});
    }

    const buttonOnClickHandler = (event) => {
        fnaddContact(newContact);
        setNewContact({
            name: "",
            phone: "",
            email: "",
            photo: ""
        });
        //setNewContact({});
        



        
    }

    return (
        <>
            <Card>
                <CardActionArea>
                    <TextField name = "name" onChange = {textFieldOnChangeHandler} required label= "Name" value = {newContact.name}></TextField>
                    <TextField name = "phone" onChange = {textFieldOnChangeHandler} required label= "Phone" value = {newContact.phone}></TextField>
                    <TextField name = "email" onChange = {textFieldOnChangeHandler} required label= "Email" value = {newContact.email}></TextField>
                    <TextField name = "photo" onChange = {textFieldOnChangeHandler} required label= "Photo" value = {newContact.photo}></TextField>
                </CardActionArea>
                <CardActions>
                    <Button onClick = {buttonOnClickHandler}>ADD NEW</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default ContactForm;
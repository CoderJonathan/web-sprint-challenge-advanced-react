import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)

    let header = screen.queryByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", async () => {
    //Arrange
    render(<CheckoutForm/>)

    //Act
    const nameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);

    userEvent.type(nameInput, "Jonathan");
    userEvent.type(lastNameInput, "Garcia");
    userEvent.type(addressInput, "Elm Street");
    userEvent.type(cityInput, "Anaheim");
    userEvent.type(stateInput, "CA");
    userEvent.type(zipInput, "92805");

    const submitInput = screen.getByRole('button');
    userEvent.click(submitInput);
    //Assert
    const success = await screen.getByText(/You have ordered some plants! Woo-hoo!/i);
    expect(success).toBeInTheDocument();
});
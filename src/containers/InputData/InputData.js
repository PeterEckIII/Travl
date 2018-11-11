import React, { Component } from 'react'
import Input from "../../components/Input/Input";

class InputData extends Component {
    state = {
        dataForm: {
            destination: {
                inputType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Add a destination'
                },
                value: "",
                validation: {
                    required: true
                },
            },
            travelMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: "car", displayValue: "Car" },
                        { value: 'train', displayValue: 'Train' },
                        { value: 'plane', displayValue: 'Plane' },
                        { value: 'walk', displayValue: 'Walk' }
                    ]
                },
                value: "car"
            }
        }
    }

    submitFormHandler = ( event ) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.dataForm) {
            formData[formElementIdentifier] = this.state.dataForm[formElementIdentifier].value;
        };
        const plan = {
            planData: formData
        }

        // Post the data to the database and update
        // axios.post()
    };

    inputChangeHandler = ( event, inputIdentifier ) => {
        const updatedDataForm = {
            ...this.state.dataForm
        }
        const updatedFormElement = {
            ...updatedDataForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedDataForm[inputIdentifier] = updatedFormElement;
        this.setState({ formData: updatedDataForm });
    }
    
    render() {
        const formElementsArray = [];

        for (let key in this.state.dataForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        };

        let form = (
            <form onSubmit={this.submitFormHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangeHandler(event, formElement.id)} />
                ))};
            </form>
        )

        return (
            <div>
                <h4>Your Destination(s)</h4>
                { form }
            </div>
        );
    }
}

export default InputData;

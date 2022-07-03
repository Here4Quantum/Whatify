import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'react-bootstrap';
import logger from './Logger';
import './Question.css'

function Question({question, choices}) {
    var radioButtonGroupName = question.slice(Math.min(10, question.length));
    logger.debug(`RadioButtonGroupName:\t${radioButtonGroupName}`);
    var firstAnswerChoice = "A";
    var choiceElements = [];
    choices.forEach((choice, index) => choiceElements.push(
        <Form.Check
            type="radio"
            id={toString(firstAnswerChoice + index)}
            name={radioButtonGroupName}
            label={`${String.fromCharCode(firstAnswerChoice.charCodeAt(0) + index)}. ${choice}`}
        />
    ));

    return (
        <div>
            <Form>
                <Form.Label>{question}</Form.Label>
                <Form.Group>
                    {choiceElements}
                </Form.Group>
            </Form>
        </div>
    )
}

export default Question;
import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';
import PropTypes from "prop-types";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){ //if the form is visible on the page
        currentlyVisibleContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation} />; //display the new ticket form
    } else {
        currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation= {this.handleTroubleshootingConfirmation}/>; //otherwise display the confirmation questions
    }

    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}
NewTicketControl.propTypes = {
    onNewTicketCreation: PropTypes.func
};
export default NewTicketControl;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendMail } from '../../actions/postsActions.js';
import TextFieldGroup from '../common/TextFieldGroup.js';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup.js';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      email: '',
      message: ''
    }

    this.onChange = this.onFormChange.bind(this);
    this.onSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const data = this.state;
    this.props.sendMail(this.props.history, data);
  };

  render() {
    const { errors } = this.props;

    return (
      <div className="App">
        <form onSubmit={this.onFormSubmit}>
          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <a href="/">
                    <button className="btn btn-light">
                      Click here to go back
                    </button>
                  </a>
                  <TextFieldGroup
                    name="subject"
                    type="text"
                    label="Subject:  "
                    info="Please don't make it clickbait."
                    onChange={this.onChange}
                    error={errors.subject}
                  />

                  <TextFieldGroup
                    name="email"
                    type="email"
                    label="The email of yours"
                    info="Please don't make it clickbait."
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextAreaFieldGroup
                    name="message"
                    rows="5"
                    label="Update the content of the message here"
                    info="Make sure that the content of the article is not offensive."
                    onChange={this.onChange}
                    error={errors.message}
                  />
                  <button type="button" className="btn btn-info btn-block mt-4">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div >
    );
  }
}

Contact.propTypes = {
  sendMail: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { sendMail })(
  Contact
);
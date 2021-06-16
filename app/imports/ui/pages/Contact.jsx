import React from 'react';
import { Header, Grid } from 'semantic-ui-react';
import SimpleSchema from 'simpl-schema';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { AutoForm, TextField, ErrorsField, SubmitField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import swal from 'sweetalert';
import { newRequest } from '../../api/ContactAdmin/ContactAdmin';
// import RequestQuestions from './RequestQuestions';

const formSchema = new SimpleSchema({
  recommendationType: String,
  recommendation: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);
const pageStyle = {
  background: '#FF5148',
  height: '100vh',
  backgroundSize: 'cover',
  paddingTop: '5em',
  paddingLeft: '10%',
  justifyContent: 'center',
};

class Requests extends React.Component {
  submit(data, formRef) {
    const { recommendationType, recommendation } = data;
    const player = Meteor.user().username;
    const username = player;
    newRequest.collection.insert({ username, recommendationType, recommendation },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Recommendation processed', 'success');
          formRef.reset();
        }
      });
  }

  render() {
    let fRef = null;
    return (
      <div className="red" style={pageStyle}>
        <Grid container centered>
          <Grid.Column>
            <Header as="h1" textAlign="center" inverted>Message Admin</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
              <TextField name='recommendationType' className={'SelectFieldforCarDropdown'} label='Subject of Contact'/>
              <TextField name='recommendation' className={'SelectFieldforCarDropdown'} label='Type your message here'/>
              <SubmitField className={'carsDropDownBtn'} value='Submit' id='submit-car'/>
              <ErrorsField/>
            </AutoForm>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Requests;

import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import * as api from './_DATA';
import React from 'react';
import QuestionOption from './Components/QuestionOption';
import Login from './Components/Login';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './Reducers';
import middleware from './Middlewares';
import QuestionCard from './Components/QuestionCard';
import { MemoryRouter } from 'react-router-dom';
import loginUser from './Reducers/loginUser';
import { loginAction, logoutAction } from './Actions/loginUser';

describe('Verifies getQuestions success', () => {
  it('verifies that getQuestions not returning errors ' , async () => {
    await api._getQuestions();

  })
});

describe('Save Question success', () => {
  it('verifies saveQuestion results', async () => {
    var question = {
      optionOneText : 'my first option',
      optionTwoText : 'my second option',
      author : 'sarahedo',
    }
    var result = await api._saveQuestion (question);
    expect(result.optionOne.text).toEqual('my first option');
    expect(result.optionTwo.text).toEqual('my second option');    
    expect(result.author).toEqual('sarahedo');
    expect(result.id).not.toBeNull(); 
    expect(result.timestamp).not.toBeNull(); 


  })
});



describe('Save Question fail', () => {
  it('verifies that saveQuestion throws error when passed invalid input ', async () => {
    var question = {
      optionOneText : 'my first option',
      optionTwoText : 'my second option',
      
    }
    await expect( api._saveQuestion (question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    


  })
});



describe('Save Question Answer success', () => {
  it('verifies saveQuestionAnswer results', async () => {
    var question = {
      authedUser : 'sarahedo',
      qid : 'vthrdm985a262al8qx3do',
      answer : 'optionOne',
    }
    var result = await api._saveQuestionAnswer (question);
    expect(result).toEqual(true);
    


  })
});

describe('Save Question Answer fail', () => {
  it('verifies that saveQuestionAnswer throws error when passed invalid input ', async () => {
    var question = {
      autheddUser : 'sarahedo',
      qid : 'vthrdm985a262al8qx3do',
      answer : 'optionOne',
      
    }
    await expect( api._saveQuestionAnswer (question)).rejects.toEqual("Please provide authedUser, qid, and answer");
    


  })
});

describe('QuestionOption snapshot', () => {
  it('verifies the snapshot of QuestionOption ',  () => {
    var component = render(<QuestionOption optionText = 'This is a test option'/>);
    expect(component).toMatchSnapshot();
  })
});

describe('Login submit enabled', () => {
  it('verifies that the login submit button becomes enabled after inputs',  () => {


let store = createStore(Reducer , middleware);
    var component = render(<Provider store={store}><Login /> </Provider>);
    var usernameInput = component.getByTestId('username') ; 
    var passwordInput = component.getByTestId('password') ; 
    var submitButton = component.getByTestId('submit') ; 


    fireEvent.change(usernameInput , {target : {value : ''}});
    fireEvent.change(passwordInput , {target : {value : ''}});

    expect(submitButton).toBeDisabled(); 

    fireEvent.change(usernameInput , {target : {value : 'user'}});
    fireEvent.change(passwordInput , {target : {value : 'pass'}});

    expect(submitButton).not.toBeDisabled(); 

    
  })
});



describe('Verifies QuestionCard content', () => {
  it('verifies question card content',  () => {

    var question = {
      id: 111,
      timestamp: Date.now(),
      author : 'user',
      optionOne: {
        
      },
      optionTwo: {
        
      }
    }

    var component = render(<MemoryRouter><QuestionCard question = {question} /> </MemoryRouter>);
    var cardAuthor = component.getByTestId('cardAuthor') ; 
    var cardTime = component.getByTestId('cardTime') ; 
    var link = component.getByTestId('link') ; 

    expect(cardAuthor).toBeInTheDocument();
    expect(cardTime).toBeInTheDocument();
    expect(link).toBeInTheDocument();



    

  

    
  })
});

describe('Redux Login', () => {
  it('verifies that the redux login function works',  () => {

    let store = createStore(Reducer , middleware);
    expect(store.getState().loginUser).toEqual("");
    store.dispatch(loginAction('sarahedo'));
    expect(store.getState().loginUser).toEqual("sarahedo"); 
    
  })
});

describe('Redux Logout', () => {
  it('verifies that the redux logout function works',  () => {

    let store = createStore(Reducer , {loginUser : 'sarahedo'} , middleware  );


    expect(store.getState().loginUser).toEqual("sarahedo"); 
    store.dispatch(logoutAction());
    expect(store.getState().loginUser).toEqual("");

    
  })
});











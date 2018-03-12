import React, { Component } from 'react';
import './App.css';
import Answer from './components/answer';
import Question from './components/question';
import Result from './components/result';
import questionsList from './api/questionsList';

const initialState = {
  selectedAnswer: '',
  showResults: false
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     initialState
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentWillMount() {
    this.setState({
      selectedAnswer: '',
      showResults: false,
      question: questionsList[0].question,
      answers: questionsList[0].answers,
      imgUrl: questionsList[0].imgUrl
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      showResults: true
    });
  }

  handleReset(event) {
    event.preventDefault();
    this.setState(initialState)
  }

  handleAnswerSelected(event) {
    this.setState({
      selectedAnswer: event.target.value,
      isCorrect: this.findisCorrect(event.target.value)
    })
  }

  findisCorrect(selectedAnswer) {
    return this.state.answers.filter(item => item.feedback === selectedAnswer).map(item => item.isCorrect)
  }

  renderResults() {
    return <Result onReset={this.handleReset} feedback={this.state.selectedAnswer} isCorrect={this.state.isCorrect} />
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Knowledge Check Block</h1>
          <hr className="accent-hr" />
        </header>
        <div className="card-wrapper">
          <div className="card">
            <Question question={this.state.question} imgUrl={this.state.imgUrl} />
            <div>
              <ul className="answerOptions">
                {this.state.answers.map((key) => {
                  return (
                    <Answer
                      key={key.content}
                      answer={key.content}
                      feedback={key.feedback}
                      selectedAnswer={this.state.selectedAnswer}
                      isDisabled={this.state.showResults}
                      onAnswerSelected={this.handleAnswerSelected}
                    />
                  );}
                )}
              </ul>
            </div>
            {this.state.showResults ? this.renderResults() : <button className="btn-blue" onClick={this.handleSubmit}>Submit</button>}
          </div>
        </div>
        <div className="footer">
          <h4>Made with <i className="fa fa-heart" aria-hidden="true"></i> by Lina!</h4>
        </div>
      </div>
    );
  }
}

export default App;

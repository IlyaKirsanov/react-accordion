import React, { useState } from 'react';
import Vacancy from './Vacancy'
import vacations from './vacations.json'
import { map } from 'lodash'

import './App.css';

class App extends React.Component {
  state = { currentOpenVacancy: null }

  toggleVacancy = vacancyId => {
    this.setState({
      currentOpenVacancy: vacancyId !== this.state.currentOpenVacancy
        ? vacancyId
        : null
    })
  }

  _getVacancyItems() {
    return map(vacations, (vacancy, idx) => {
      return <Vacancy
        key={idx}
        vacancyId={idx}
        currentOpenVacancy={this.state.currentOpenVacancy}
        toggleVacancy={this.toggleVacancy}
        dddd={this.dddd}
      />
    })
      }

  render() {
    return (
      <div className="App">
        <div className="vacancies">
          {this._getVacancyItems()}
        </div>
      </div>
    );
  }
}

export default App;

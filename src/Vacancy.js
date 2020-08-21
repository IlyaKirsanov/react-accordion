import React from 'react';
import cn from 'classnames'
import { map, get, partial } from 'lodash';
import vacations from './vacations.json'


export default class Vacancy extends React.PureComponent {
	_isOpenCurrentVacancy = () => this.props.currentOpenVacancy === this.props.vacancyId

	render() {

		const { vacancyId } = this.props
		let requiredSkills = get(vacations[vacancyId], 'descriptions[1]');
		let asPlus = get(vacations[vacancyId], 'descriptions[2]');

		return (
			<div
				className={cn('vacancy', { 'open': this._isOpenCurrentVacancy() })}
				onClick={partial(this.props.toggleVacancy, vacancyId)}
			>
				<div className="vacancy-header">
					{get(vacations[vacancyId], 'title')}
					{get(vacations[vacancyId], 'location')}
					{get(vacations[vacancyId], 'hot')}
				</div>

				<div className="vacancy-content">
					Requared Scills:
					<ul>
						{map(requiredSkills.paragraphs, (paragraph, idx) => <li key={idx}>{paragraph}</li>)}
					</ul>

					As PLUS:
					<ul>
						{map(asPlus.paragraphs, (item, idx) => <li key={idx}>{item}</li>)}
					</ul>
				</div>
			</div >
		)
	}

}

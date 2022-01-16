import { Skill } from '../../interface/Interface';
import { useState } from 'react';
import OneSelectedSkill from './oneSelectedSkill/OneSelectedSkill';
import styles from './FindBar.module.css';

interface FindBarProps {
	focusedSkill: Skill | null;
	selectedSkills: string[];
	onHandleFindSkillsInput: Function;
	onHandleDeleteSkill: Function;
	onHandleSelectSkill: Function;
	onHandleFocusedSkill: Function;
	onHandleInputFindIsEmpty: Function;
}

const FindBar = ({
	focusedSkill,
	selectedSkills,
	onHandleFindSkillsInput,
	onHandleDeleteSkill,
	onHandleSelectSkill,
	onHandleFocusedSkill,
	onHandleInputFindIsEmpty,
}: FindBarProps) => {
	const [inputValue, setInputValue] = useState<string>('');

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const toFind = e.target.value;
		setInputValue(toFind);
		onHandleInputFindIsEmpty(toFind.length > 0 ? false : true);
		onHandleFindSkillsInput(toFind);
	};
	const handleInputKeyPress = (
		e: React.KeyboardEvent<HTMLInputElement>
	): void => {
		if (e.code === 'ArrowUp') {
			onHandleFocusedSkill(-1);
		}
		if (e.code === 'ArrowDown') {
			onHandleFocusedSkill(1);
		}
		if (e.code === 'Enter' && inputValue != '') {
			onHandleInputFindIsEmpty(true);
			setInputValue('');
			onHandleFindSkillsInput('');
			onHandleSelectSkill(focusedSkill ? focusedSkill.name : inputValue);
		}
	};
	return (
		<div className={styles.findBar}>
			<div className={styles.selectedSkills}>
				{selectedSkills?.map((skill: string, index: number) => (
					<OneSelectedSkill
						key={index}
						skillName={skill}
						onHandleDeleteSkill={onHandleDeleteSkill}
					/>
				))}
			</div>
			<div className={styles.inputArea}>
				<input
					type='text'
					placeholder='find...'
					value={inputValue}
					onChange={e => handleChangeInput(e)}
					onKeyDown={e => handleInputKeyPress(e)}
				/>
				<div className={styles.sugestion}><span>{focusedSkill?.name.slice(0, inputValue.length)}</span>{focusedSkill?.name.slice(inputValue.length)}</div>
			</div>
		</div>
	);
};
export default FindBar;

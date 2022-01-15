import { Skill } from '../../interface/Interface';
import { useState, useEffect } from 'react';
import { toEditorSettings } from 'typescript';
import OneSelectedSkill from './oneSelectedSkill/OneSelectedSkill';

interface FindBarProps {
    firstSkillFromShow: Skill;
	selectedSkills: string[];
	onHandleFindSkillsInput: Function;
	onHandleDeleteSkill: Function;
	onHandleSelectSkill: Function;
}

const FindBar = ({
    firstSkillFromShow,
	selectedSkills,
	onHandleFindSkillsInput,
	onHandleDeleteSkill,
	onHandleSelectSkill,
}: FindBarProps) => {
	const [inputValue, setInputValue] = useState<string>();

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const toFind = e.target.value;
		setInputValue(toFind);
		onHandleFindSkillsInput(toFind);
	};
    const addCustomSkill = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.code === "Enter") {
            onHandleSelectSkill(inputValue)
        }
    }
	return (
		<div>
			{selectedSkills?.map((skill: string, index: number) => (
				<OneSelectedSkill
					key={index}
					skillName={skill}
					onHandleDeleteSkill={onHandleDeleteSkill}
				/>
			))}
			<input
				type='text'
				placeholder='find...'
				value={inputValue}
				onChange={e => handleChangeInput(e)}
                onKeyPress={e => addCustomSkill(e)}
			/>
		</div>
	);
};
export default FindBar;

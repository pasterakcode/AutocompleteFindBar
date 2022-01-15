import { Skill } from "../../interface/Interface";

interface OneBarSkillsProps {
	skill: Skill;
    onHandleSelectSkill: Function,
}

const fastStyle = {
    'height': '30px',
    'border': '.5px solid red',
}

const OneBarSkills = ( { skill, onHandleSelectSkill }:OneBarSkillsProps ) => {
    const handleClickOnSkill = (e: React.MouseEvent<HTMLDivElement>): void => {
        onHandleSelectSkill(skill.name);
    }
    
    return (
        <li style={fastStyle}>
           <p  onClick={handleClickOnSkill}>{skill.name}</p>
        </li>
    )
}
export default OneBarSkills;
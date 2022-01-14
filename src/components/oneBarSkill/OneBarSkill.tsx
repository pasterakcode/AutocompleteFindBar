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
        <div style={fastStyle} onClick={handleClickOnSkill}>
            {skill.name}
        </div>
    )
}
export default OneBarSkills;
import { Skill } from "../../../interface/Interface";

interface OneSelectedSkillProps {
    skillName: string,
    onHandleDeleteSkill: Function,
}
const OneSelectedSkill = ( { skillName, onHandleDeleteSkill }:OneSelectedSkillProps ) => {
    const handleClickToDeleteSkill = () => {
        onHandleDeleteSkill(skillName)
    }
    return (
        <div>
            {skillName} <button onClick={handleClickToDeleteSkill}>X</button>
        </div>
    )
}
export default OneSelectedSkill;
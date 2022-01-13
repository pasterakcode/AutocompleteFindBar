interface Skill {
    skill_id: number,
    name: string,
}
interface ItSkillsList {
    data: Skill[],
}
export type { ItSkillsList, Skill }
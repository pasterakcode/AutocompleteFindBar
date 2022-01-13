import { ItSkillsList } from "../interface/Interface";

const itSkillsList = (): Promise<ItSkillsList> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        skill_id: 1,
                        name: 'Accounting Packages',
                    },
                    {
                        skill_id: 2,
                        name: 'Algoritms',
                    },
                    {
                        skill_id: 3,
                        name: 'Analytics',
                    },
                    {
                        skill_id: 4,
                        name: 'APIs',
                    },
                    {
                        skill_id: 5,
                        name: 'Applications',
                    },
                    {
                        skill_id: 6,
                        name: 'Artificial Intelligence',
                    },
                    {
                        skill_id: 7,
                        name: 'Automation',
                    },
                    {
                        skill_id: 8,
                        name: 'Availability Management',
                    },
                    {
                        skill_id: 9,
                        name: 'Backup & Recovery',
                    },
                    {
                        skill_id: 10,
                        name: 'Batch Processing',
                    },
                    {
                        skill_id: 11,
                        name: 'Billing',
                    },
                    {
                        skill_id: 12,
                        name: 'Capacity Management',
                    },
                    {
                        skill_id: 13,
                        name: 'CSS',
                    },
                    {
                        skill_id: 14,
                        name: 'Cloud Platforms',
                    },
                    {
                        skill_id: 15,
                        name: 'Coding',
                    },
                    {
                        skill_id: 16,
                        name: 'Computing Infrastructure',
                    },
                    {
                        skill_id: 17,
                        name: 'Configuration Management',
                    },
                    {
                        skill_id: 18,
                        name: 'Content Delivery Network',
                    },
                    {
                        skill_id: 19,
                        name: 'Content Management',
                    },
                    {
                        skill_id: 20,
                        name: 'Continuous Delivery',
                    },
                    {
                        skill_id: 21,
                        name: 'Cryptography',
                    },
                    {
                        skill_id: 22,
                        name: 'Customer Relationship Management',
                    },

                ]
            });
        }, 1000);
    })
};
export default itSkillsList;
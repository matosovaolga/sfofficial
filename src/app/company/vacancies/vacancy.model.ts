
export interface Vacancy {
    id: number;
    skills: [string];
    role: string;
    experience?: string;
    description: string;
    skillsPlus: [string];
    responsible: [string];
}
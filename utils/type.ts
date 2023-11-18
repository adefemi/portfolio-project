export type ExperienceType = {
    id: number;
    job_title: string;
    company_name: string;
    start_date: string;
    end_date: string;
    logo: string;
    description: string;
}

export type ProjectType = {
    id: number;
    name: string;
    link: string;
    focused: string;
    cover: string;
    description: string;
}

export type BlogType = {
    id: number;
    title: string;
    link: string;
    cover: string;
}
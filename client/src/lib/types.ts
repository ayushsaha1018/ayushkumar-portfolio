interface documentInfo {
  _type: string;
  _id: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}

export interface UserInfo extends documentInfo {
  name: string;
  intitials: string;
  avatar: { [key: string]: any };
  description: string;
  summary: any;
  skills: string[];
  email?: string;
  phoneNo?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
}

export interface WorkExperience extends documentInfo {
  companyName: string;
  logo: { [key: string]: any };
  role: string;
  pointers: string[];
  startDate: string;
  endDate: string;
  companyWebsite?: string;
}

export interface Education extends documentInfo {
  instituteName: string;
  logo: { [key: string]: any };
  degree: string;
  pointers: string[];
  startDate: string;
  endDate: string;
  instituteWebsite?: string;
}

export interface Project extends documentInfo {
  title: string;
  image: { [key: string]: any };
  description: string;
  isFreelance?: boolean;
  techUsed: string[];
  startDate: string;
  endDate: string;
  website: string;
  githubRepo: string;
}

export interface UserProfile {
  info: UserInfo[];
  workExp: WorkExperience[];
  education: Education[];
  projects: Project[];
}

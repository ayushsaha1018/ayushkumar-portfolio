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
  summary: string;
  skills: string[];
  email?: string;
  phoneNo?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
}

interface WorkExperience extends documentInfo {
  companyName: string;
  logo: { [key: string]: any };
  role: string;
  pointers: string[];
  startDate: string;
  endDate: string;
  companyWebsite?: string;
}

interface Education extends documentInfo {
  instituteName: string;
  logo: { [key: string]: any };
  degree: string;
  pointers: string[];
  startDate: string;
  endDate: string;
  instituteWebsite?: string;
}

interface Project extends documentInfo {
  title: string;
  image: { [key: string]: any };
  description: string;
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

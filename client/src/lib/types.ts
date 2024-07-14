type UserInfo = {
  name: string;
  aboutShort: string;
  _id: string;
  aboutLong: string;
  _createdAt: string;
  _rev: string;
  _type: "info";
  _updatedAt: string;
  skills: string[];
};

type WorkExperience = {
  companyName: string;
  _type: "workExperience";
  _updatedAt: string;
  endDate: string;
  _createdAt: string;
  logo: { [key: string]: any }; // Adjust the type based on the actual structure of the logo object
  _id: string;
  pointers: string[];
  startDate: string;
  role: string;
  _rev: string;
  companyWebsite?: string;
};

type Education = {
  degree: string;
  _id: string;
  _type: "education";
  _updatedAt: string;
  startDate: string;
  instituteName: string;
  endDate: string;
  _createdAt: string;
  _rev: string;
};

type UserProfile = {
  info: UserInfo[];
  workExp: WorkExperience[];
  education: Education[];
};

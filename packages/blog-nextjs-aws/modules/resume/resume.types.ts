export interface IResume {
  jobs: IJob[];
  education: IEducation[];
  workshops: IWorkshop[];
  interests: IInterest[];
  languages: ILanguage[];
}

export interface IJob {
  company: string;
  date: string;
  projects: IProject[];
}

export interface IProject {
  project: string;
  date: string;
  desc: string;
  skills: string;
}

export interface IEducation {
  uni: string;
  date: string;
  major: string;
}

export interface IWorkshop extends ITitle {}

export interface IInterest extends ITitle {}

export interface ILanguage extends ITitle {
  level: string;
}

export interface ITitle {
  title: string;
}

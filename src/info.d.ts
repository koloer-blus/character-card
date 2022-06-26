/**补充描述 */
interface ISupplementaryDescription {
  title: string;
  desc: string;
}

interface IBaseInfo {
  start: string;
  end?: string;
}

interface IBaseExperience extends IBaseInfo {
  name: string;
  nameEN?: string;
  supplementaryDescription?: ISupplementaryDescription[]
}

interface ICompanyExperience extends IBaseExperience {
  position: string;
  mainWork: string[];
  mainResult: string[];
}

interface IAward {
  time: string;
  title: string;
  desc?: string;
}

interface IEducationalExperience extends IBaseExperience {
  award?: IAward[];
  course?: string[];
  schoolType?: string[];
  /**
   * 学位
   */
  degree: string;
}

interface ISkill {
  title: string;
  mastery: string;
}

/**作品 */
interface IWork extends IBaseInfo {
  title: string;
  description: string;
  technology?: string[];
  previewAddress?: string;
  technicalHighlights?: string[];
  result?: string[];
}

/**主角信息 */
interface IProtagonistInfo {
  name: string;
  birthYear: number;
  tel?: string;
  email?: string;
  position?: string;
  currentCompany?: string;
  currentCompanyEN?: string;
  /**工作经历 */
  companyExperience?: ICompanyExperience[];
  /**教育经历 */
  educationalExperience?: IEducationalExperience[];
  skill?: ISkill[];
  hobby?: string[];
  /**作品 */
  work?: IWork[];
}
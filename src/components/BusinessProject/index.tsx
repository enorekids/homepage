import { AppLanguage, useAppContext } from '../../contexts/useAppContext';
import Image1 from './assets/1.svg';
import Image2 from './assets/2.svg';
import Image3 from './assets/3.svg';
import { ProjectCard } from './ProjectCard';

export function BusinessProject() {
  const language = useAppContext(x => x.language);

  const titleMap = {
    [AppLanguage.EN_US]: 'Description of Business',
    [AppLanguage.ZH_CN]: '经营项目',
  };

  const projectMap = {
    [AppLanguage.EN_US]: [
      {
        logo: Image1,
        desc: 'Sales as a dealer of books, magazines, textbooks and other publications, as well as the logistical operations relating to this',
      },
      {
        logo: Image2,
        desc: 'Sales as a dealer of music/video software, game software, toys, miscellaneous goods, office supplies, educational supplies, music supplies, audiovisual aids and fixtures/fittings, as well as the logistical operations relating to this',
      },
      {
        logo: Image3,
        desc: 'Development/sale of SA systems and the provision of a variety of information',
      },
    ],
    [AppLanguage.ZH_CN]: [
      {
        logo: Image1,
        desc: '图书、杂志、教科书等出版物的代销及与此相关的物流业务',
      },
      {
        logo: Image2,
        desc: '音乐/视频软件、游戏软件、玩具、日用品、办公用品、教育用品、音乐用品、试听设备、日用备用品的代销及与此相关的物流业务',
      },
      {
        logo: Image3,
        desc: 'SA系统的开发、销售及各种信息提供业务',
      },
    ],
  };

  return (
    <div className='bg-[#F5FAFF] mb-[120px]'>
      <div className='px-[80px] max-w-[1440px] py-[40px] flex flex-col gap-[40px] mx-auto items-center'>
        <div className='text-[#333333] text-[32px] font-bold'>{titleMap[language]}</div>
        <div className='flex gap-[40px]'>
          {projectMap[language].map(item => {
            return <ProjectCard desc={item.desc} logo={item.logo} className='flex-1 w-full' />;
          })}
        </div>
      </div>
    </div>
  );
}

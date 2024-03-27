import { AppLanguage, useAppContext } from '../../contexts/useAppContext';
import PhilosophyImage from './assets/philosophy.png';

export function Philosophy() {
  const language = useAppContext(x => x.language);

  const dataMap = {
    [AppLanguage.EN_US]: [
      {
        title: 'Corporate Philosophy',
        desc: [
          'Aim to provide educational products and services for cultivating comprehensive talents of the 21st century.',
        ],
      },
      {
        title: 'Expansion in North America',
        desc: [
          'Sales of imported foreign books and magazines',
          'Introducing academic database products that meet the needs of North American users.',
          'Importing foreign books and magazines from countries such as the United States, the United Kingdom, China, and South Korea for sale in bookstores in North America. Especially with a wide range of imports from China and South Korea, we can meet various needs of the region, educational institutions, and language learners.',
        ],
      },
    ],
    [AppLanguage.ZH_CN]: [
      {
        title: '企业理念',
        desc: ['旨在为培养21世纪综合型人才提供教育类产品及服务'],
      },
      {
        title: 'Expansion in North America',
        desc: [
          '销售进口外国图书和杂志',
          '引进符合北美用户需求的学术数据库产品',
          '从美国、英国、中国、韩国等国进口外国图书和杂志，在北美的书店销售。尤其中国和韩国图书的进口范围广，可满足地区、教育机构、语言学习者等的各种需求。',
        ],
      },
    ],
  };

  return (
    <div className='mb-[160px] w-full'>
      <div className='max-w-[1440px] mx-auto flex'>
        <div className='flex'>
          <div className='flex-1'>
            <img className='w-auto' src={PhilosophyImage} />
          </div>
        </div>
        <div className='flex flex-col justify-end flex-1 pt-[180px]'>
          <div className='bg-[#097AFF] py-[60px] px-[50px]'>
            <div className='flex flex-col gap-[60px] text-white'>
              {dataMap[language].map(item => {
                return (
                  <div key={item.title}>
                    <div className='mb-[40px] text-[32px] font-bold'>{item.title}</div>
                    <div className='flex flex-col gap-[38px]'>
                      {item.desc.map(des => {
                        return (
                          <div className='flex gap-[10px]'>
                            <div className='w-[5px] h-[22px] bg-white flex-none'></div>
                            <div className='font-bold text-[20px] leading-[24px]'>{des}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

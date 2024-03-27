import { AppLanguage, useAppContext } from '../../contexts/useAppContext';
import { Info } from './Info';
import { Summary } from './Summary';

export function CompanyInfo() {
  const language = useAppContext(x => x.language);

  const dataMap: Record<AppLanguage, { title: string; desc?: string }[]> = {
    [AppLanguage.EN_US]: [
      {
        title: 'Corporate name: LIMINI INTERACTIVE ENTERTAINMENT INC.',
      },
      {
        title: 'Head Office: 5307 VICTORIA DRIVE SUITE 851 VANCOUVER BC V5P 3V6',
      },
      {
        title: 'Date of foundation: December 24, 2023',
      },
    ],
    [AppLanguage.ZH_CN]: [
      {
        title: '公司名称',
        desc: 'Corporate name: LIMINI INTERACTIVE ENTERTAINMENT INC.',
      },
      {
        title: '公司地址',
        desc: 'Head Office: 5307 VICTORIA DRIVE SUITE 851 VANCOUVER BC V5P 3V6',
      },
      {
        title: '成立日期',
        desc: 'Date of foundation: December 24, 2023',
      },
    ],
  };

  return (
    <div className='w-full mb-[100px]'>
      <div className='px-[80px] flex flex-col gap-[10px] max-w-[1440px] mx-auto'>
        <Summary />
        <div className='flex flex-col gap-[40px]'>
          {dataMap[language].map(item => {
            return <Info desc={item.desc} title={item.title} />;
          })}
        </div>
      </div>
    </div>
  );
}

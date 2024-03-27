import { AppLanguage, useAppContext } from '../../contexts/useAppContext';
import SummaryImage from './assets/summary.svg';

export function Summary() {
  const language = useAppContext(x => x.language);

  const titleMap = {
    [AppLanguage.EN_US]: 'Corporate Date',
    [AppLanguage.ZH_CN]: '公司数据',
  };

  return (
    <div className='h-[100px] flex items-center relative'>
      <img
        src={SummaryImage}
        className='absolute left-0 top-[-10px] bottom-0 w-[100px] h-[100px] z-[-1]'
      />
      <div className='ml-[54px] text-[#333333] font-bold text-[32px]'>{titleMap[language]}</div>
    </div>
  );
}

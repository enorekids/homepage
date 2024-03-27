import { AppLanguage, useAppContext } from '../../contexts/useAppContext';
import SummaryImage from './assets/summary.svg';

export function Summary() {
  const language = useAppContext(x => x.language);

  return (
    <div className='h-[100px] flex items-center relative'>
      <img
        src={SummaryImage}
        className='absolute left-0 top-[-10px] bottom-0 w-[100px] h-[100px] z-[-1]'
      />
      <div className='flex flex-col'>
        <div className='ml-[54px] text-[#333333] font-bold text-[32px]'>LIMINI®</div>
        {language === AppLanguage.ZH_CN && (
          <div className='ml-[54px] text-[#666666] text-[16px]'>LIMINI®简介</div>
        )}
      </div>
    </div>
  );
}

import { AppLanguage, useAppContext } from '../../contexts/useAppContext';
import BannerImage from './assets/banner.jpeg';
import Frame from './assets/Frame.svg';

export function Banner() {
  const language = useAppContext(x => x.language);
  const setLanguage = useAppContext(x => x.setLanguage);

  const titleMap = {
    [AppLanguage.EN_US]: '简体中文',
    [AppLanguage.ZH_CN]: 'English',
  };

  return (
    <div className='w-full h-[500px] overflow-hidden relative mb-[80px] px-[80px]'>
      <img src={BannerImage} className='absolute inset-0' />
      <div className='max-w-[1440px] mx-auto relative flex items-center h-full'>
        <div className='font-bold text-[120px] text-white'>LIMINI</div>
        <div
          className='absolute right-[70px] top-[20px] flex gap-[10px] h-[20px] items-center text-white cursor-pointer'
          onClick={() =>
            setLanguage(language === AppLanguage.EN_US ? AppLanguage.ZH_CN : AppLanguage.EN_US)
          }
        >
          <img src={Frame} className='w-[20px] h-[20px]' />
          <div className='text-[14px] font-medium'>{titleMap[language]}</div>
        </div>
      </div>
    </div>
  );
}

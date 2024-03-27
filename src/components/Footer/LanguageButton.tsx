import { AppLanguage, useAppContext } from '../../contexts/useAppContext';
import ArrowImage from './assets/arrow.svg';

export function LanguageButton() {
  const language = useAppContext(x => x.language);
  const setLanguage = useAppContext(x => x.setLanguage);

  const textMap = {
    [AppLanguage.ZH_CN]: '简体中文',
    [AppLanguage.EN_US]: 'English',
  };

  return (
    <div
      className='border-white border-2 border-solid rounded-[2px] w-[174px] h-[56px] flex items-center justify-center cursor-pointer gap-[10px]'
      onClick={() =>
        setLanguage(language === AppLanguage.EN_US ? AppLanguage.ZH_CN : AppLanguage.EN_US)
      }
    >
      {textMap[language]}
      <img src={ArrowImage} className='w-[24px] h-[24px]' />
    </div>
  );
}

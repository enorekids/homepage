import { AppLanguage, useAppContext } from '../../contexts/useAppContext';
import { LanguageButton } from './LanguageButton';

export function Footer() {
  const language = useAppContext(x => x.language);

  const emailMap = {
    [AppLanguage.EN_US]: 'E-mail: support@liminikids.com',
    [AppLanguage.ZH_CN]: '电子邮箱: support@liminikids.com',
  };

  return (
    <div className='bg-[#121212] w-full h-[220px] px-[80px]'>
      <div className='w-full h-full max-w-[1440px] flex items-center mx-auto'>
        <div>
          <div className='text-white font-bold text-[48px]'>
            LIMINI®
            <div className='text-white font-medium text-[20px]'>{emailMap[language]}</div>
          </div>
        </div>

        <div className='ml-auto text-white'>
          <LanguageButton />
        </div>
      </div>
    </div>
  );
}

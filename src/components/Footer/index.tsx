import { LanguageButton } from './LanguageButton';

export function Footer() {
  return (
    <div className='bg-[#121212] w-full h-[220px] px-[80px]'>
      <div className='w-full h-full max-w-[1440px] flex items-center mx-auto'>
        <div className='text-white font-bold text-[48px]'>LIMINI®</div>
        <div className='ml-auto text-white'>
          <LanguageButton />
        </div>
      </div>
    </div>
  );
}

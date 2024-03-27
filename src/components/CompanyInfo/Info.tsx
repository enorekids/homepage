import classNames from 'classnames';
import { AppLanguage, useAppContext } from '../../contexts/useAppContext';

export interface InfoProps {
  title: string;
  desc?: string;
  className?: string;
}

export function Info({ title, desc, className }: InfoProps) {
  const language = useAppContext(x => x.language);

  return (
    <div className={classNames('flex gap-[10px]', className)}>
      <div className='flex flex-col gap-[10px]'>
        <div className='flex gap-[10px] items-center'>
          <div className='bg-[#fdda00] h-[4px] w-[24px]' />
          <div
            className='text-[#333333] font-bold text-[20px]'
            style={{
              fontWeight: language === AppLanguage.EN_US ? 400 : 700,
            }}
          >
            {title}
          </div>
        </div>
        {desc && <div className='text-[#463535] text-[20px] ml-[34px]'>{desc}</div>}
      </div>
    </div>
  );
}

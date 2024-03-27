import { AppLanguage, useAppContext } from '../../contexts/useAppContext';
import FrameImage from './assets/Frame.svg';
import FrameImage2 from './assets/Frame2.svg';
import FrameImage3 from './assets/Frame3.svg';
import FrameImage4 from './assets/Frame4.svg';
import FrameImage5 from './assets/Frame5.svg';
import FrameImage6 from './assets/Frame6.svg';

export function Scope() {
  const language = useAppContext(x => x.language);

  const titleMap = {
    [AppLanguage.EN_US]: 'Product Protfolio',
    [AppLanguage.ZH_CN]: '产品涉及领域',
  };

  const productionMap = {
    [AppLanguage.EN_US]: [
      {
        logo: FrameImage,
        title: 'STEM education',
      },
      {
        logo: FrameImage2,
        title: 'programming education',
      },
      {
        logo: FrameImage3,
        title: 'English learning platforms',
      },
      {
        logo: FrameImage4,
        title: 'English learning materials',
      },
      {
        logo: FrameImage5,
        title: 'English learning videos',
      },
      {
        logo: FrameImage6,
        title: 'teacher training',
      },
    ],
    [AppLanguage.ZH_CN]: [
      {
        logo: FrameImage,
        title: 'STEM教育',
      },
      {
        logo: FrameImage2,
        title: '编程教育',
      },
      {
        logo: FrameImage3,
        title: '英语学习平台',
      },
      {
        logo: FrameImage4,
        title: '英语学习教材',
      },
      {
        logo: FrameImage5,
        title: '英语学习视频',
      },
      {
        logo: FrameImage6,
        title: '教师培训',
      },
    ],
  };

  return (
    <div className='mb-[114px] w-full'>
      <div className='max-w-[1440px] flex flex-col gap-[70px] items-center mx-auto px-[132px]'>
        <div className='text-[#333333] text-[32px] font-bold'>{titleMap[language]}</div>
        <div className='flex justify-between w-full'>
          {productionMap[language].map(item => {
            return (
              <div className='flex flex-col gap-[20px] items-center w-[148px]'>
                <img src={item.logo} className='w-[104px] h-[104px]' />
                <div className='text-[#666666] text-[20px] font-medium text-center'>
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

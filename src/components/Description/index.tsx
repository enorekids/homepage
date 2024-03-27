import classNames from 'classnames';
import { useRef } from 'react';
import { AppLanguage, useAppContext } from '../../contexts/useAppContext';
import { Summary } from './Summary';
import DescriptionImage from './assets/description.png';

export function Description() {
  const language = useAppContext(x => x.language);

  const descMap = {
    [AppLanguage.EN_US]: [
      `LIMINI® Introduction`,
      `LIMINI®, a subsidiary of Hong Kong Chaofan Books Limited, is dedicated to providing innovative and efficient digital education solutions for schools, institutions, and training organizations. Our products cover various academic disciplines including science, technology, engineering, English/language, mathematics, and social studies. Upholding the mission of the parent company, LIMINI® aspires to be the premier educational product agency in the Canadian K12 education sector. By introducing advanced educational concepts and products while aligning with the practical needs of the domestic education industry, we aim to create products suitable for K12 education in Canada, thereby promoting the reform and development of the education sector.`,
    ],
    [AppLanguage.ZH_CN]: [
      'LIMINI®, 香港超凡图书有限公司旗下成员，致力于为学校、事业单位、培训机构等提供创新、高效的数字教育解决方案。产品覆盖科学、技术、工程、英语 / 语言、数学及社会学等各大学科领域。 LIMINI®秉承总公司使命, 立志成为加拿大K12教育领域最优秀的教育产品代理公司。通过引进先进的教育理念和产品，同时结合国内教育行业的实际需求，打造出适合加拿大的K12教育的产品，从而推动教育事业的改革与发展。',
    ],
  };

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div className='w-full px-[80px] mb-[100px]'>
      <div className='max-w-[1440px] mx-auto'>
        <div className='flex gap-[54px] items-center'>
          <div className='flex-col flex gap-[20px]' ref={ref}>
            <Summary />
            <div className='text-[#333333] text-[20px] font-medium leading-[40px]'>
              {descMap[language].map(item => (
                <div>{item}</div>
              ))}
            </div>
          </div>
          <img
            src={DescriptionImage}
            className={classNames({
              'w-[400px] h-[350px]': language === AppLanguage.ZH_CN,
              'w-[500px] h-[480px]': language === AppLanguage.EN_US,
            })}
            style={{}}
          />
        </div>
      </div>
    </div>
  );
}

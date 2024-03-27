import classnames from 'classnames';

export interface ProjectCardProps {
  logo: string;
  desc: string;
  className?: string;
}
export function ProjectCard({ logo, desc, className }: ProjectCardProps) {
  return (
    <div
      className={classnames(
        'bg-white flex flex-col px-[30px] pt-[40px] pb-[60px] rounded-[10px] gap-[20px]',
        className,
      )}
    >
      <div className='flex items-center justify-center w-[80px] h-[80px]'>
        <img src={logo} />
      </div>
      <div className='text-[#333333] text-[20px] font-bold'>{desc}</div>
    </div>
  );
}

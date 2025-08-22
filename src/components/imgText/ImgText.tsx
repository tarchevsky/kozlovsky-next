import { ImgTextProps } from '@/types'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

const ImgText = ({
	link,
	src,
	alt,
	className,
	description,
	projectName,
	reverse,
	priority,
	blank,
	quality,
}: ImgTextProps) => {
	return (
		<>
			{link ? (
				<Link
					href={link || '/'}
					className='block relative w-full group'
					{...(blank ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
				>
					{reverse ? (
						<div
							className={
								'grid grid-rows-[auto_minmax(100px,1fr)] md:grid-rows-[auto_minmax(130px,1fr)] items-center'
							}
						>
							<div className='h-[50svh] xs:h-[35svh] sm:h-[110svh] md:h-[120svh]'>
								<Image
									src={src}
									alt={alt}
									width={1960}
									height={840}
									className={cn(className, 'w-full object-cover')}
									priority={priority}
									quality={quality}
								/>
								{description && (
									<p
										className={cn(
											'cont my-5 text-[20px] xl:text-[32px] font-bold'
										)}
										dangerouslySetInnerHTML={{ __html: description || '' }}
									/>
								)}
							</div>
							{projectName ? (
								<h3
									className='text-[20px] xl:text-[32px] ml-[16px] sm:ml-[40px] md:ml-[100px] 2xl:ml-[200px] font-bold'
									dangerouslySetInnerHTML={{ __html: projectName }}
								/>
							) : null}
						</div>
					) : (
						<div
							className={
								'grid grid-rows-[minmax(100px,1fr)_auto] md:grid-rows-[minmax(130px,1fr)_auto] items-center'
							}
						>
							{projectName ? (
								<h3
									className='text-[20px] xl:text-[32px] ml-[16px] sm:ml-[40px] md:ml-[100px] 2xl:ml-[200px] font-bold'
									dangerouslySetInnerHTML={{ __html: projectName }}
								/>
							) : null}
							<div className='h-full'>
								<Image
									src={src}
									alt={alt}
									width={1960}
									height={650}
									className={cn(className, 'w-full')}
									priority={priority}
								/>
								{description && (
									<p
										className={cn(
											'cont my-5 text-[20px] xl:text-[32px] font-bold'
										)}
										dangerouslySetInnerHTML={{ __html: description || '' }}
									/>
								)}
							</div>
						</div>
					)}
				</Link>
			) : (
				<div
					className={
						'grid grid-rows-[minmax(100px,1fr)_auto] md:grid-rows-[minmax(130px,1fr)_auto] items-center'
					}
				>
					{projectName ? (
						<h3
							className='text-[20px] xl:text-[32px] ml-[16px] sm:ml-[40px] md:ml-[100px] 2xl:ml-[200px] font-bold'
							dangerouslySetInnerHTML={{ __html: projectName }}
						/>
					) : null}
					<div>
						<Image
							src={src}
							alt={alt}
							width={1960}
							height={650}
							className={cn(className, 'w-full')}
							priority={priority}
						/>
						{description && (
							<p
								className={cn('cont my-5 text-[20px] xl:text-[32px] font-bold')}
								dangerouslySetInnerHTML={{ __html: description }}
							/>
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default ImgText

import {ImgTextProps} from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'clsx'
import FadeIn from "@/components/fadeIn/FadeIn";

const ImgText = ({
                     link,
                     src,
                     alt,
                     className,
                     description,
                     projectName,
                     reverse
                 }: ImgTextProps) => {
    return (
        <>
            {link ? (
                <Link href={link || '/'} className='block relative w-full group'>
                    <FadeIn
                        className={`flex flex-col ${reverse ? 'flex-col-reverse' : 'flex-col'}`}
                    >
                        <h3
                            className='my-5 text-[20px] xl:text-[32px] ml-[16px] sm:ml-[40px] md:ml-[100px] 2xl:ml-[200px] font-bold'
                            dangerouslySetInnerHTML={{__html: projectName}}
                        >
                        </h3>

                        <div>
                            <Image
                                src={src}
                                alt={alt}
                                width={1960}
                                height={650}
                                className={cn(
                                    className,
                                    'w-full transition ease-in brightness-50 xl:brightness-100 xl:group-hover:brightness-50'
                                )}
                            />
                            {description && (
                                <p
                                    className={cn(
                                        'cont my-5 text-[20px] xl:text-[32px] font-bold'
                                    )}
                                    dangerouslySetInnerHTML={{__html: description}}
                                />
                            )}
                        </div>
                    </FadeIn>
                </Link>
            ) : (
                <FadeIn
                    className={`flex flex-col relative w-full group ${reverse ? 'flex-col-reverse' : 'flex-col'}`}
                >
                    <h3
                        className='my-5 text-[20px] xl:text-[32px] ml-[16px] sm:ml-[40px] md:ml-[100px] 2xl:ml-[200px] font-bold'
                        dangerouslySetInnerHTML={{__html: projectName}}
                    >
                    </h3>

                    <div>
                        <Image
                            src={src}
                            alt={alt}
                            width={1960}
                            height={650}
                            className={cn(
                                className,
                                'w-full transition ease-in brightness-50 xl:brightness-100 xl:group-hover:brightness-50'
                            )}
                        />
                        {description && (
                            <p
                                className={cn(
                                    'cont my-5 text-[20px] xl:text-[32px] font-bold'
                                )}
                                dangerouslySetInnerHTML={{__html: description}}
                            />
                        )}
                    </div>
                </FadeIn>
            )}
        </>
    )
}

export default ImgText

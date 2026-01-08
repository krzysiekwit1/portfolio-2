'use client'

import React, {useEffect} from 'react'
import Image, {StaticImageData} from 'next/image'

interface CertModal {
    isOpen: boolean;
    onClose: () => void;
    title: string
    image: StaticImageData
    link: string
}

export const CertModal: React.FC<CertModal> = ({isOpen, onClose, title, image, link}) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
        }
        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div
            className='fixed inset-0 z-[1000] flex items-center justify-center p-8 bg-black/92 backdrop-blur-xl overflow-hidden'
            onClick={onClose}
        >
            <div
                className='overflow-hidden relative bg-gradient-to-br from-slate-900/95 via-gray-800/95 to-slate-900/95 backdrop-blur-2xl border border-indigo-500/30 rounded-3xl p-12 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl scale-95 animate-[modalSlideIn_0.4s_cubic-bezier(0.4,0,0.2,1)] md:p-16 lg:max-w-6xl'
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className='cursor-pointer absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-2xl font-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-105 transition-all duration-300 border-4 border-white/20'
                >
                    ×
                </button>

                <h3 className='text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center mb-4 leading-tight drop-shadow-2xl'>
                    {title}
                </h3>

                <div className='flex justify-center mb-8'>
                    <Image src={image} height='600' width='600' alt='Certificate'/>
                </div>
                <a
                    href={link} target='_blank' className='text-blue-500 w-full flex justify-center items-center'
                >(Link)</a>

            </div>
        </div>
    )
}

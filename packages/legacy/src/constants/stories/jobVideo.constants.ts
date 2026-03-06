import { IJobVideo } from '@components/UI/molecules'
import React from 'react'
import { imageProps } from './Image.constants'

export const jobVideo: IJobVideo = {
  imageProps: imageProps,
  jobId: 1231,
  loadVideo: false,
  videoClassName: 'jobDetails',
  setLoadVideo: () => {
    //
  },
  vjsOptions: {
    autoplay: true,
    controls: true,
    fluid: true,
    preload: 'none',
    aspectRatio: '16:9',
    src: 'https://www.youtube.com/embed/ZsmTChbU-Vk',
    poster: 'https://img.youtube.com/vi/ZsmTChbU-Vk/maxres2.jpg'
  },
  VideoComponent: React.Fragment
}

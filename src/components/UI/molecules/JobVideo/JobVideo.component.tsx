import React, { useEffect, useState } from 'react'
import { IJobVideo } from './JobVideo.interface'
import styles from './JobVideo.module.scss'
import { Image } from '@components/UI/atoms'

const JobVideo: React.FC<IJobVideo> = ({
  imageProps,
  jobId,
  videoClassName,
  vjsOptions,
  VideoComponent,
  loadVideo,
  setLoadVideo
}) => {
  const [detailJobId, setDetailJobId] = useState(0)

  const handleLoadVideo = () => {
    setDetailJobId(jobId as number)
    setLoadVideo && setLoadVideo(true)
  }

  useEffect(() => {
    if (detailJobId !== jobId) {
      setLoadVideo && setLoadVideo(false)
    }
  }, [detailJobId, jobId, setLoadVideo])

  return loadVideo ? (
    <VideoComponent vjsOptions={vjsOptions} key={`lazyVideo_${jobId}`} className={styles[videoClassName]} />
  ) : (
    <div className={styles['magneto-ui-job-video']} onClick={handleLoadVideo}>
      <Image {...imageProps} />
    </div>
  )
}

export default JobVideo

import React, { useEffect } from 'react';
import pdf from '../../../public/Resume.pdf';
import { fixPdfPageScroll, clearPdfPageScroll } from '../../utils';
import styles from './ResumePDF.module.scss';

export default function ResumePDF() {
  useEffect(() => {
    // add no-scroll class to body element when component mounts
    fixPdfPageScroll();

    return () => {
      // remove no-scroll class from body element when component unmounts
      clearPdfPageScroll();
    }
  }, []);

  return (
    <iframe className={styles.frame} src={pdf}></iframe>
  )
}
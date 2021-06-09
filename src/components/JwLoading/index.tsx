import React from 'react';
import { Spin } from 'antd';
import styles from './style.less';

const JwLoading = ({
  isLoading,
  loadingTxt,
}: {
  isLoading: boolean;
  loadingTxt?: string;
}) => {
  if (isLoading) {
    document.body.style.overflow = 'hidden';
    return (
      <div className={styles.jwloadingMain}>
        <div className={styles.content}>
          <Spin
            className={styles.spin}
            tip={loadingTxt || '加载中···'}
            size="large"
          />
        </div>
      </div>
    );
  } else {
    document.body.style.overflow = 'auto';
    return null;
  }
};
export default JwLoading;

import Image from 'next/image';

import styles from './index.module.css';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <Image src="/suburbanlogo.png" width={300} height={300} />

        </div>
      </div>
    </div>
  );
}

export default Index;

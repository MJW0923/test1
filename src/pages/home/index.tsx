import React, { Component } from 'react';

import styles from './index.less';
import { Link } from 'umi';

interface IHomeProps {}
interface IHomeState {}

class Home extends Component<IHomeProps, IHomeState> {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1 className={styles.title}>Page index</h1>
        <Link to="/users/111">11111</Link>
        <br />
        <Link to="/users/222">222222</Link>
        <br />
        <Link to="/list">list</Link>
      </div>
    );
  }
}
export default Home;
// function IndexPage() {
//   return (
//     <div>
//       <h1 className={styles.title}>Page index</h1>
//       <Link to="/users/111">11111</Link>
//       <br />
//       <Link to="/users/222">222222</Link>
//     </div>
//   );
// }

import React, { Component } from 'react';
import { history } from 'umi';

import styles from './index.less';
// import { Link } from 'umi';

interface IHomeProps {}
interface IHomeState {}

class Home extends Component<IHomeProps, IHomeState> {
  toNext = (path: string) => {
    history.push(path);
  };
  render() {
    console.log(this.props);

    return (
      <div>
        <h1 className={styles.title}>Page index</h1>
        <button onClick={() => this.toNext('/users/111')}>11111</button>
        <br />
        <button onClick={() => this.toNext('/users/222')}>222222</button>
        <br />
        <button onClick={() => this.toNext('/list')}>list</button>
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

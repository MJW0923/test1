import React, { Component } from 'react';
import styles from './style.less';

interface INameProps {
  match: any;
}
interface INameState {}

class NamePage extends Component<INameProps, INameState> {
  render() {
    const { match } = this.props;
    console.log('match ==', match);
    return (
      <div className={styles.usersmain}>sdfasfasfdafd1111111111111111</div>
    );
  }
}

// const Test1 = ({ match }: any) => {
//   console.log('match ==', match);

//   return <div>sdfasfasfdafd1111111111111111</div>;
// };
export default NamePage;

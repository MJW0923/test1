import React, { Component } from 'react';
import { history } from 'umi';
import { connect } from 'dva';
import styles from './style.less';

interface IProps {
  dispatch: Function;
  ListNsp: {
    isFetching: boolean;
    fetchingTxt: string;
    count: number;
  };
}
interface IState {}

class List extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    document.title = '';
  }

  onBtnClick = (path: string) => {
    history.push(path);
  };
  render() {
    const {} = this.props;
    console.log('this.props===', this.props);

    return (
      <div className={styles.listmain}>
        test是听说
        <br />
        <button onClick={() => this.onBtnClick('/home')}>list</button>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    ListNsp: state.ListNsp,
  };
}
export default connect(mapStateToProps)(List);

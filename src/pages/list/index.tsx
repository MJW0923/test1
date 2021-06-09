import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './style.less';
import JwLoading from '@/components/JwLoading';
import { Link } from 'umi';

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

  render() {
    const {} = this.props;
    console.log('this.props===', this.props);

    return (
      <div className={styles.listmain}>
        test是听说
        <br />
        <Link to="/home">list</Link>
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

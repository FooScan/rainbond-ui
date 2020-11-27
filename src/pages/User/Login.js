/* eslint-disable compat/compat */
/* eslint-disable camelcase */
import { Tooltip, Divider, Row } from 'antd';
import { connect } from 'dva';
import React, { Component } from 'react';
import globalUtil from '../../utils/global';
import oauthUtil from '../../utils/oauth';
import rainbondUtil from '../../utils/rainbond';
import styles from './Login.less';
import LoginComponent from './loginComponent';

@connect(({ global }) => ({
  isRegist: global.isRegist,
  rainbondInfo: global.rainbondInfo
}))
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'global/hideNeedLogin' });
    globalUtil.removeCookie();
  }
  handleSubmit = (values) => {
    const { dispatch, location } = this.props;
    const query_params = new URLSearchParams(location.search);
    const redirect = query_params.get('redirect');
    dispatch({
      type: 'user/login',
      payload: {
        ...values
      },
      callback: () => {
        let url = '/';
        if (redirect) {
          url = redirect;
        }
        window.location.href = url;
      }
    });
  };
  fetchEnterpriseInfo = (eid) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/fetchEnterpriseInfo',
      payload: {
        enterprise_id: eid
      },
      callback: (res) => {
        if (res && res._code === 200 && res.bean && res.bean.oauth_services) {
          // eslint-disable-next-line camelcase
          const { oauth_services = {} } = res.bean;
          if (oauth_services.enable) {
            this.setState({
              // eslint-disable-next-line react/no-unused-state
              oauthServicesList:
                oauth_services.value &&
                oauth_services.value.length > 0 &&
                oauth_services.value
            });
          }
        }
      }
    });
  };

  render() {
    const { rainbondInfo } = this.props;
    const oauthInfo =
      rainbondInfo &&
      rainbondInfo.enterprise_center_oauth &&
      rainbondInfo.enterprise_center_oauth.value;
    const url = oauthInfo && oauthUtil.getAuthredictURL(oauthInfo);
    const icon = oauthInfo && oauthUtil.getIcon(oauthInfo);
    let oauthServicesList = [];
    if (
      rainbondInfo &&
      rainbondInfo.oauth_services &&
      rainbondInfo.oauth_services.enable &&
      rainbondInfo.oauth_services.value &&
      rainbondInfo.oauth_services.value.length > 0
    ) {
      oauthServicesList = rainbondInfo.oauth_services.value;
    }
    return (
      <div className={styles.main} style={{ marginTop: '100px' }}>
        <h3>用户登录</h3>
        <LoginComponent onSubmit={this.handleSubmit} type="login" />
        {rainbondUtil.OauthbEnable(rainbondInfo) &&
          (oauthInfo ||
            (oauthServicesList && oauthServicesList.length > 0)) && (
            <div className={styles.thirdBox}>
              <Divider>
                <div className={styles.thirdLoadingTitle}>第三方登录</div>
              </Divider>
              <Row className={styles.third}>
                {oauthInfo && (
                  <div className={styles.thirdCol} key={oauthInfo.client_id}>
                    <Tooltip placement="top" title={oauthInfo.name}>
                      <a href={url} title={oauthInfo.name}>
                        {icon}
                      </a>
                    </Tooltip>
                  </div>
                )}
                {oauthServicesList.map((item) => {
                  const { name, service_id } = item;
                  return (
                    <div className={styles.thirdCol} key={service_id}>
                      <Tooltip placement="top" title={name}>
                        <a href={oauthUtil.getAuthredictURL(item)} title={name}>
                          {oauthUtil.getIcon(item)}
                        </a>
                      </Tooltip>
                    </div>
                  );
                })}
              </Row>
            </div>
          )}
      </div>
    );
  }
}

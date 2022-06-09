import { Col, Icon, Input, notification, Row } from 'antd';
import React, { Component } from 'react';

class DAinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
        values: [{ externalIP: '', internalIP: '', name: '' }]
    };
  }
  onRegexChange = (value, index) => {
    const { values } = this.state;
    values[index].externalIP = value;
    this.triggerChange(values);
    this.setValues(values);
  };
  onReplacementChange = (value, index) => {
    const { values } = this.state;
    values[index].internalIP = value;
    this.triggerChange(values);
    this.setValues(values);
  };
  onFlagChange = (value, index) => {
    const { values } = this.state;
    values[index].name = value;
    this.triggerChange(values);
    this.setValues(values);
  };
  setValues(arr) {
    const setArr = arr || [];
    if (!setArr.length) {
      setArr.push({ externalIP: '', internalIP: '', name: '' });
    }
    this.setState({ values: setArr });
  }
  initFromProps(value) {
    const setValue = value
    if (setValue) {
      this.setValues(setValue);
    }
  }
  add = () => {
    const { values } = this.state;
    if (values.length > 100) {
      notification.warning({
        message: '最多添加100个'
      });
      return null;
    }
    this.setState({
      values: values.concat({ externalIP: '', internalIP: '', name: '' })
    });
  };

  remove = index => {
    const { values } = this.state;
    values.splice(index, 1);
    this.setValues(values);
    this.triggerChange(values);
  };
  triggerChange(values) {
    const res = [];
    for (let i = 0; i < values.length; i++) {
      res.push({
        externalIP: values[i].externalIP,
        internalIP: values[i].internalIP,
        name: values[i].name
      });
    }
    const { onChange } = this.props;
    if (onChange) {
      onChange(res);
    }
  }
  render() {
    const externalIPPlaceholder = '外部IP  例：1.2.3.4';
    const repPlaceholder = '内部IP  例：192.168.0.1';
    const namePlaceholder = '节点名称  例：master1';
    const { values } = this.state;
    return (
      <div>
        {values.map((item, index) => {
          const first = index === 0;
          return (
            <Row key={index} style={{width:'100%',display:'flex'}}>
              <Col span={24} style={{marginRight:'10px'}}>
                <Input
                  name="externalIP"
                  onChange={e => {
                    this.onKeyChange(e.target.value, index);
                  }}
                  value={item.externalIP}
                  placeholder={externalIPPlaceholder}
                />
              </Col>
              <Col span={24} style={{marginRight:'10px'}}>
                <Input
                  name="internalIP"
                  onChange={e => {
                    this.onValueChange(e.target.value, index);
                  }}
                  value={item.internalIP}
                  placeholder={repPlaceholder}
                />
              </Col>
              <Col span={24}>
                <Input
                  name="name"
                  onChange={e => {
                    this.onValueChange(e.target.value, index);
                  }}
                  value={item.name}
                  placeholder={namePlaceholder}
                />
              </Col>
              <Col span={4} style={{ textAlign: 'center' }}>
                <Icon
                  type={first ? 'plus-circle' : 'minus-circle'}
                  style={{ fontSize: '20px' }}
                  onClick={() => {
                    if (first) {
                      this.add();
                    } else {
                      this.remove(index);
                    }
                  }}
                />
              </Col>
            </Row>
          );
        })}
      </div>
    );
  }
}

export default DAinput;

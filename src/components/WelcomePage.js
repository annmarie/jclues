import { Form, Button, Input } from 'antd';
import { useState } from 'react';
import _ from 'lodash';

const onFinish = ({ setFormStatus, setProfile }) => {
  return async (values) => {
    setFormStatus && setFormStatus({ status: 2 });
    const data = await new Promise((good) => setInterval(() => good(values), 300));
    setFormStatus && setFormStatus({ status: 1, data });
    setProfile && setProfile(data);
  };
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function WelcomePage(props) {
  const { profile, setProfile } = props;
  const [formStatus, setFormStatus] = useState(0);
  const formLoading = formStatus === 2 ? true : false;

  return (
    <>
      <Form
        name="profile"
        onFinish={onFinish({ setFormStatus, setProfile })}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        initialValues={{ username: _.get(profile, 'username', '') }}
      >
        <Form.Item
          label="What is your name?"
          name="username"
          rules={[{ required: true, message: 'Please enter a name.' }]}
        >
          <Input placeholder="Enter a name." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={formLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

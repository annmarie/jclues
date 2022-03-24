import _ from 'lodash';
import { Form, Button, Input } from 'antd';

export default function WelcomePage(props) {
  const { profile, setProfile } = props;
  const onFinish = () => async (values) => setProfile(values);

  return (
    <>
      <Form
        name="profile"
        onFinish={onFinish()}
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

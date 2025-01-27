import { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { socket } from '../socket';

const MessageInput = () => {
  const [message, setMessage] = useState<string>('');

  const handleSendMessage = (event: FormEvent) => {
    event.preventDefault();
    socket.emit('message', { data: message });
    setMessage('');
  };

  return (
    <Form onSubmit={handleSendMessage}>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Control
          type="text"
          placeholder="Enter Message"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          autoComplete='off'
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
};
export default MessageInput;

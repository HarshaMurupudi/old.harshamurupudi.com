import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { v4 as uuid } from 'uuid';

import Message from '../../components/elements/chatbot/Message';

const cookies = new Cookies();

const useConstructor = (callBack = () => {}) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);
};

function Chat() {
  useConstructor(() => {
    console.log('Occurs ONCE, BEFORE the initial render.');

    if (cookies.get('userID') === undefined) {
      cookies.set('userID', uuid(), { path: '/' });
    }

    console.log(cookies.get('userID'));
  });

  let mainRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    df_event_query('Welcome');
  }, []);

  useEffect(() => {
    // df_event_query('Welcome');

    mainRef.scrollIntoView({ behaviour: 'smooth' });
  }, [messages]);

  const df_text_query = async (text) => {
    const userSays = {
      speaks: 'user',
      msg: {
        text: {
          text,
        },
      },
    };

    const res = await axios.post('http://localhost:5001/api/df_text_query', {
      text,
      userID: cookies.get('userID'),
    });

    const newData = [];
    for (let msg of res.data.fulfillmentMessages) {
      const botSays = {
        speaks: 'bot',
        msg,
      };

      newData.push(botSays);
    }
    setMessages([...messages, userSays, ...newData]);
  };
  const df_event_query = async (event) => {
    const res = await axios.post('http://localhost:5001/api/df_event_query', {
      event,
      userID: cookies.get('userID'),
    });

    const newData = [];
    for (let msg of res.data.fulfillmentMessages) {
      let says = {
        speaks: 'bot',
        msg,
      };

      newData.push(says);
    }

    setMessages([...messages, ...newData]);
  };

  const renderMessages = () => {
    if (messages) {
      return messages.map((message, i) => {
        return (
          <Message
            key={i}
            speaks={message.speaks}
            text={message.msg.text.text}
          />
        );
      });
    } else {
      return null;
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      df_text_query(e.target.value);
      e.target.value = '';
    }
  };

  console.log(messages);

  return (
    <div>
      <div id='chatbot'>
        <h2>Chatbot</h2>
        {renderMessages()}
        <div
          ref={(el) => {
            mainRef = el;
          }}
          style={{ float: 'left', clear: 'both' }}
        ></div>
        <input type='text' onKeyPress={handleInputKeyPress} />
      </div>
    </div>
  );
}

export default Chat;

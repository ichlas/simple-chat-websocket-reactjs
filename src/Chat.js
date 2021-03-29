import React, { Component } from 'react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

const URL = 'ws://localhost:3030'

class Chat extends Component {
  state = {
    name: 'Ichlas',
    messages: [],
  }

  ws = new WebSocket(URL)

  componentDidMount() {
    this.ws.onopen = () => {
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      const message = JSON.parse(evt.data)
      this.addMessage(message)
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))

  submitMessage = messageString => {
    const message = { name: this.state.name, message: messageString }
    this.ws.send(JSON.stringify(message))
    this.addMessage(message)
  }

  render() {
    return (
      <div>
        <div class="fixed-chat">
          <div class="panel-chat">
            <div class="header-chat">
              <label htmlFor="name">
                Name:&nbsp;
                <input
                  type="text"
                  id={'name'}
                  placeholder={'Enter your name...'}
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </label>
            </div>
            <div class="body-chat">
              {this.state.messages.map((message, index) =>
                <ChatMessage
                  key={index}
                  message={message.message}
                  name={message.name}
                />,
              )}
            </div>
            <div class="message-chat">
              <ChatInput
                ws={this.ws}
                onSubmitMessage={messageString => this.submitMessage(messageString)}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat

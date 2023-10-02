import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

import {HfAgent, LLMFromHub, defaultTools} from '@huggingface/agents';

const Huggingface = () => {

    //alert("hello")
    // const HF_ACCESS_TOKEN = "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";
    // const agent = new HfAgent(
    //     HF_ACCESS_TOKEN,
    //     LLMFromHub(HF_ACCESS_TOKEN),
    //     [...defaultTools]
    //   );

const [code, setCode] = useState(null);
const [messages, setMessages] = useState([]);

const generateCode = async () => {
  // Replace with your agent.generateCode logic
  // For example:
  // const generatedCode = await agent.generateCode("Draw a picture of a cat wearing a top hat. Then caption the picture and read it out loud.");
  // setCode(generatedCode);
  //setCode(agent.generateCode("Draw a picture of a cat wearing a top hat. Then caption the picture and read it out loud."));
};

const evaluateCode = async () => {
  // Replace with your agent.evaluateCode logic
  // For example:
  // const evaluatedMessages = await agent.evaluateCode(code);
//   setMessages(agent.evaluatedMessages(generateCode));
//   alert(messages);
};

useEffect(() => {
  generateCode();
}, []);

return (
  <View>
    <Button title="Generate Code" onPress={generateCode} />
    <Button title="Evaluate Code" onPress={evaluateCode} />

    {code && <Text>Generated Code: {code}</Text>}

    <Text>Messages:</Text>
    <View>
      {messages.map((message, index) => (
        <Text key={index}>{message}</Text>
      ))}
    </View>
  </View>
);
};

export default Huggingface;
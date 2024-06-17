import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const reverseSentence = (sentence) => {
    const reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
};

const initialSentence = 'type markdown here';
const reversedSentence = reverseSentence(initialSentence);

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];    

const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names);

const [markdown, setMarkdown] = useState(reversedSentence);
const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };
    
    

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
    
};




export default MarkdownEditor;
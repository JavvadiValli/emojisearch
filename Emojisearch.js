import React, { useState } from 'react'
import './Emojisearch.css';
const emojiData=[
    {
  id : 1,
  symbol:"😃",
  name:"smiling"
    },
    {
  id : 2,
  symbol:"😄",
  name:"smiling"
    },
    {
    id : 3,
    symbol:"😭",
    name:"crying"
    },
    {
    id : 4,
    symbol:"🤔",
    name:"thinking"
    },
    {
    id : 5,
    symbol:"😡",
    name:"angry"
    },
    {
        id : 6,
        symbol:"😴",
        name:"sleeping"
    },
    {
        id : 7,
        symbol:"😱",
        name:"shocking"
    },
    {
        id : 8,
        symbol:"🥳",
        name:"party"
     },
     {
        id : 9,
        symbol:"😔",
        name:"sad"
     },
     {
        id : 10,
        symbol:"👸",
        name:"queen"
    }
  ];
function Emojisearch() {
    const [searchEmoji,setSearchEmoji] = useState("");
    const handleChange = (e) =>{
        setSearchEmoji(e.target.value);
        }
        const showEmoji = emojiData.filter((emoji) =>{
        const emojiName=emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase());
        });
       
  return (
    <div>
        <h1> React emoji app!!!!!!</h1>
    <input type='text' placeholder='search for the emoji'value={searchEmoji} onChange={handleChange}/>
    <div>
        {
               showEmoji.map((emoji) => emoji.symbol)
        }
    </div>
    </div>

  )
}

export default Emojisearch
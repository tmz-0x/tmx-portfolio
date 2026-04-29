import React from 'react';
import './Terminal.css';
import { useState, useEffect,useRef } from 'react';

export default function Terminal() {
       const [showInput, setShowInput] = useState(true);
       const [inputValue, setInputValue] = useState('');
       const [history, setHistory] =useState([]);
       const bottomRef=useRef(null);
       const commandArray = [
        
          
          
            {
          command: '.help',
          description: 'List all available commands <br/> .clear - Clear the terminal <br/> .skills - List my skills <br/> .contact - Show contact information <br/> .future -my direction in future <br/> .ls - List files in the current directory <br/> .cat - Display the contents of a file'
          
        },
        { 
          command: '.skills',
          description: 'Web AppSec, Network, Red Team, OSINT, BinExp'
        },
        {
          command: '.contact',
          description: 'Email: thisal.nanayakkara@gmail.com <br/> LinkedIn: linkedin.com/in/thisal-nanayakkara <br/> GitHub: github.com/thisalnanayakkara'
        },
        {
          command: '.future',
          description: 'I am currently focused on expanding my knowledge in cloud security and container security. I am also interested in exploring the field of IoT security and mobile application security.'
        },
        {
                    command: '.ls',
                    description: '/future.sh <br/> /F#ck_society.txt '
        },
        
      
            
        {
                    command: './future.sh',
                    description: ''
        },
        {
                    command: 'cat F#ck_society.txt',
                    description: 'who is rat you or me?'
        },
            
       ]
  
     const handleInputChange = (e) =>{      
        setInputValue(e.target.value);        
     }
     
     const handleKey =(e) =>{
      if(e.key === 'Enter'){
        const found = commandArray.find(item => item.command ===inputValue)

        if (inputValue === '.clear') {
            setHistory([])
              setInputValue('')
             return
    }
        if (found){
           setHistory([...history,{cmd: inputValue, output:found.description}])
        }
       
        else{
           setHistory([...history,{cmd: inputValue, output:'command not found'}])
        }
        setInputValue('');
       
      }
     }

    useEffect(() => {
  bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [history]);


   
  return( 
   
   
   <div className="terminal">
    <div className="terminal-header">
      <div className="tbar">
          <div className="tdot" style={{ background: '#ff5f57' }}></div>
          <div className="tdot" style={{ background: '#febc2e' }}></div>
          <div className="tdot" style={{ background: '#28c840' }}></div>
          <span className="title">root@tmx: ~</span>
        </div>
    </div>
      <div className="terminal-body">
          <div className='tr'><span className="tp">root@tmx:~$</span><span className="ts">Whoami</span></div>
          <div className="tr">Thisal Nanayakkara</div>

           
          { 
            history.map((item,i) =>(
              <div key = {i}>
                <div className='tr'>
                  <span className='tp'>root@tmx:~$</span>
                  <span className='ts'>{item.cmd}</span>
                </div>
               <div className='tr' dangerouslySetInnerHTML={{__html:item.output}}/>
              </div>
            ) )
}
        
            
            <div className='tr'><span className="tp">root@tmx:~$</span><input type="text" className="command-input" value={inputValue} onChange={handleInputChange} onKeyDown={handleKey} autoFocus/></div>
          <div ref={bottomRef} />
        
         
      </div>
     
   </div>




  )
}
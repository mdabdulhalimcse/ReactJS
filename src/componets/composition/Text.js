export default function Text({addEmoji,addBracket}){
     let text = 'I am JavaScript Programming Language.';

     if(addEmoji){
          text = addEmoji(text, 'Wow');
     }
     if(addBracket){
          text = addBracket(text);
     }

     return <div>{ text}</div>;
}  